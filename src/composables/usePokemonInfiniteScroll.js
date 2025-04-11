import { onMounted, onUnmounted, ref } from "vue";

export default function usePokemonInfiniteScroll(
  loadMore,
  loadDetails,
  selectedType
) {
  const isLoading = ref(false);

  const handleScroll = async () => {
    if (isLoading.value) return;

    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.offsetHeight - 200
    ) {
      isLoading.value = true;
      await loadMore();

      if (selectedType.value) {
        await loadDetails();
      }

      isLoading.value = false;
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return { isLoading };
}
