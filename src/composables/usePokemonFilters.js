import { computed, ref } from "vue";

export default function usePokemonFilters(pokemonsList, pokemonDetails) {
  const selectedType = ref("");
  const searchName = ref("");
  const searchId = ref("");

  const filteredPokemons = computed(() => {
    let filtered = pokemonsList.value;

    if (selectedType.value) {
      filtered = pokemonDetails.value?.filter((pokemon) =>
        pokemon?.types?.some((t) => {
          const typeName = typeof t === "string" ? t : t?.type?.name;
          return typeName === selectedType.value;
        })
      );
    }

    if (searchName.value) {
      filtered = filtered.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchName.value.toLowerCase())
      );
    }

    if (searchId.value) {
      const byId = pokemonDetails.value.find(
        (pokemon) => pokemon.id === Number(searchId.value)
      );
      return byId ? [byId] : [];
    }

    return filtered;
  });

  return {
    selectedType,
    searchName,
    searchId,
    filteredPokemons,
  };
}
