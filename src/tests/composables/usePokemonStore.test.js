import { vi, it, expect } from "vitest";
import usePokemonStore from "../../composables/usePokemonStore";

vi.mock("vuex", () => ({
  useStore: () => ({
    state: {
      pokemonsList: [],
      pokemonDetalis: [],
    },
    dispatch: vi.fn(),
  }),
}));

it("Verifica se o composable possue erro e retornar valores", () => {
  const result = usePokemonStore();
  expect(result.pokemonsList).toBeDefined();
  expect(result.pokemonDetails).toBeDefined();
  expect(result.loadMore).toBeDefined();
  expect(result.getDetails).toBeDefined();
});
