<script setup>
import cardemphasisvue from "../components/abstractions/cardEmphasis.vue";
import cardPokemon from "../components/pokemon/cardPokemon.vue";
import copy from "../components/abstractions/copyText.vue";
import inputSearch from "../components/ui/input.vue";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

const store = useStore();

onMounted(() => {
  store.dispatch("loadMore");
});

const pokemonsList = computed(() => store.state.pokemonsList);

console.log(pokemonsList);
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
      <div>
        <inputSearch />
      </div>
    </div>

    <div class="container p-4">
      <div>
        <inputSearch />
      </div>

      <div class="d-flex flex-column gap-3 my-4">
        <cardPokemon
          v-for="(pokemon, index) in pokemonsList"
          :key="index"
          :pokemon="{ ...pokemon, key: index + 1 }"
          class="border rounded p-3 bg-dark-subtle text-white"
        />
      </div>
    </div>
  </div>
</template>
