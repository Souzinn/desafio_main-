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
      state.offset += 10;
    },
    addPokemonsList(state, pokemons) {
      state.pokemonsList.push(...pokemons);
    },
    addPokemonDetails(state, pokemon) {
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
        commit("addPokemonsList", pokemons);
        commit("incrementarOffset");
      } catch (err) {
        console.error("Erro:", err);
      }
    },
    async MoreDetalis({ commit }, id) {
      try {
        const pokemon = await requestData.fetchReposityDetalis(id);
        commit("addPokemonDetails", pokemon);
        return pokemon;
      } catch (err) {
        console.error("Erro:", err);
      }
    },
  },
});

export default store;
