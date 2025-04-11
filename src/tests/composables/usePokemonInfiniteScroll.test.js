import { describe, it, expect, vi } from "vitest";
import usePokemonInfiniteScroll from "../../composables/usePokemonInfiniteScroll";

describe("usePokemonInfiniteScroll", () => {
  it("deve existir e retornar isLoading", () => {
    const mockLoadMore = vi.fn();
    const mockLoadDetails = vi.fn();
    const mockSelectedType = { value: false };

    const result = usePokemonInfiniteScroll(
      mockLoadMore,
      mockLoadDetails,
      mockSelectedType
    );
    expect(result).toBeDefined();
    expect(result.isLoading).toBeDefined();
    expect(result.isLoading.value).toBe(false);
  });
});
