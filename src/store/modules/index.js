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
      state.offset += 20;
    },
    addPokemonsList(state, pokemons) {
      state.pokemonsList.push(...pokemons);
    },
    addPokemonsListDetalis(state, pokemons) {
      state.pokemonDetalis.push(pokemons);
    },
  },
  actions: {
    async loadMore({ commit, state }) {
      try {
        const response = await requestData.fetchReposity(state.offset);
        commit("addPokemonsList", response.results);
        commit("incrementarOffset");
      } catch (err) {
        console.error("Erro ao carregar mais pokémons:", err);
      }
    },
    async MoreDetalis({ commit }, index) {
      try {
        const response = await requestData.fetchReposityDetalis(index);
        commit("addPokemonsListDetalis", response);
        return response;
      } catch (err) {
        console.error("Erro ao carregar mais pokémons:", err);
      }
    },
  },
});

export default store;
