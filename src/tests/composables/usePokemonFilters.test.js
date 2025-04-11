import { ref } from "vue";
import { it, expect } from "vitest";
import usePokemonFilters from "../../composables/usePokemonFilters";

it("verificaçao basicas", () => {
  const pokemonsList = ref([{ name: "pikachu", id: 1 }]);
  const pokemonDetails = ref([{ name: "pikachu", id: 1, types: ["electric"] }]);
  const { filteredPokemons } = usePokemonFilters(pokemonsList, pokemonDetails);

  expect(filteredPokemons.value).toBeDefined();
  expect(filteredPokemons.value.length).toBeGreaterThanOrEqual(0);
});
