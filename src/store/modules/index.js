import { createStore } from "vuex";
import RequestData from "../../service/index";

const requestData = new RequestData();

const store = createStore({
  state: {
    pokemonsList: [],
    offset: 0,
  },
  mutations: {
    incrementarOffset(state) {
      state.offset += 20;
    },
    addPokemonsList(state, pokemons) {
      state.pokemonsList.push(...pokemons);
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
  },
});

export default store;
