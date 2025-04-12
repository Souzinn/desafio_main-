import { createStore } from "vuex";
import RequestData from "../../service/index";

const requestData = new RequestData();

const store = createStore({
  state: {
    pokemonsList: [],
    pokemonDetalis: [],
    offset: 0,
  },
  mutations: {
    incrementarOffset(state) {
      state.offset += 40;
    },
    addPokemonsList(state, pokemons) {
      const validPokemons = pokemons.filter(p => p && p.id && p.name);
      state.pokemonsList.push(...validPokemons);
    },
    addPokemonDetails(state, pokemon) {
      if (!pokemon || !pokemon.id) return;
      const exists = state.pokemonDetalis.some((p) => p.id === pokemon.id);
      if (!exists) {
        state.pokemonDetalis.push(pokemon);
      }
    },
  },
  actions: {
    async loadMore({ commit, state }) {
      try {
        const pokemons = await requestData.fetchReposity(state.offset);
        if (pokemons && pokemons.length > 0) {
          commit("addPokemonsList", pokemons);
          commit("incrementarOffset");
        } else {
          console.warn("Nenhum Pokémon retornado para o offset:", state.offset);
        }
      } catch (err) {
        console.error("Erro ao carregar mais Pokémon:", err);
      }
    },
    async MoreDetalis({ commit }, id) {
      try {
        const pokemon = await requestData.fetchReposityDetalis(id);
        if (pokemon) {
          commit("addPokemonDetails", pokemon);
        } else {
          console.warn(`Detalhes não encontrados para o Pokémon ID ${id}`);
        }
        return pokemon;
      } catch (err) {
        console.error("Erro ao buscar detalhes do Pokémon:", err);
        return null;
      }
    },
  },
});

export default store;
