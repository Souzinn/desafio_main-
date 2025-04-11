import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default function usePokemonStore() {
  const store = useStore();
  onMounted(() => {
    store.dispatch("loadMore");
  });

  return {
    pokemonsList: computed(() => store.state.pokemonsList),
    pokemonDetails: computed(() => store.state.pokemonDetalis),
    loadMore: () => store.dispatch("loadMore"),
    getDetails: (identifier) => store.dispatch("MoreDetalis", identifier),
  };
}
