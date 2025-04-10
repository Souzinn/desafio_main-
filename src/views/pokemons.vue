<script setup>
import cardemphasisvue from "../components/abstractions/cardEmphasis.vue";
import cardPokemon from "../components/pokemon/cardPokemon.vue";
import copy from "../components/abstractions/copyText.vue";
import inputSearch from "../components/ui/input.vue";
import { useStore } from "vuex";
import { computed, onMounted, onUnmounted, ref } from "vue";

const store = useStore();
const selectedType = ref("");
const isLoading = ref(false);

const pokemonsList = computed(() => store.state.pokemonsList);
const pokemonDetails = computed(() => store.state.pokemonDetalis);

const filteredPokemons = computed(() => {
  if (!selectedType.value) return pokemonsList.value;

  return pokemonDetails.value?.filter((pokemon) =>
    pokemon?.types?.some((type) => type.type?.name === selectedType.value)
  );
});

const updateSelectedType = (value) => {
  selectedType.value = value || "";
};

const infiniteScroll = async () => {
  if (isLoading.value) return; // esse Loading evita a aplicação de quebrar e renderizar infinitamnente

  const scrollPosition = window.innerHeight + window.scrollY;
  const pageHeight = document.documentElement.offsetHeight;

  if (scrollPosition >= pageHeight - 200) {
    isLoading.value = true;

    await store.dispatch("loadMore");

    if (selectedType.value) {
      const newPokemons = pokemonsList.value.slice(-20);
      const promises = newPokemons.map((pokemon) =>
        store.dispatch("MoreDetalis", pokemon.name)
      );
      await Promise.all(promises);
    }

    isLoading.value = false;
  }
};

onMounted(() => {
  store.dispatch("loadMore");
  window.addEventListener("scroll", infiniteScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", infiniteScroll);
});
</script>

<template>
  <div class="content p-4">
    <div>
      <copy />
    </div>

    <div class="container p-4">
      <h5 class="mb-4">Mais votados</h5>
      <div class="d-flex justify-content-between flex-wrap gap-3">
        <cardemphasisvue class="border rounded p-3 bg-dark-subtle text-white" />
      </div>
    </div>

    <div class="container p-4">
      <inputSearch @input="updateSelectedType" />

      <div class="d-flex flex-column gap-3 my-4">
        <cardPokemon
          v-for="(pokemon, index) in filteredPokemons"
          :key="index"
          :pokemon="{ ...pokemon, key: index + 1 }"
          class="border rounded p-3 bg-dark-subtle text-white"
        />
      </div>
    </div>
  </div>
</template>
