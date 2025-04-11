<script setup>
import PokemonModal from "./modalPokemon.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  pokemon: Object,
  required: true,
});

const store = useStore();

const pokemonDetail = computed(() => {
  return store.state.pokemonDetalis.find((p) => p.name === props.pokemon.name);
});
</script>

<template>
  <div
    v-bind="$attrs"
    class="d-flex flex-column flex-md-row align-items-center justify-content-between gap-2 p-3 border-top border-bottom bg-white mb-3"
  >
    <div class="d-flex align-items-center gap-3 flex-grow-1">
      <img
        v-if="pokemon?.name"
        :src="`https://img.pokemondb.net/sprites/scarlet-violet/icon/${pokemon.name}.png`"
        :alt="pokemon.name"
        class="img-fluid"
        style="width: 64px; height: 64px"
      />
      <div v-if="pokemon?.name">
        <span class="text-muted small d-block">#{{ pokemon.id }}</span>
        <p class="mb-0 fw-semibold text-capitalize fs-5">{{ pokemon.name }}</p>
      </div>
    </div>

    <div
      v-if="pokemonDetail?.types?.length"
      class="d-flex justify-content-center flex-wrap gap-1 flex-md-grow-1"
    >
      <span
        v-for="(type, index) in pokemonDetail.types"
        :key="index"
        class="badge bg-primary text-capitalize px-2 py-1"
        style="font-size: 0.85rem"
      >
        {{ type }}
      </span>
    </div>

    <div class="mt-2 mt-md-0">
      <button
        v-if="pokemon?.id"
        class="btn btn-outline-primary"
        data-bs-toggle="modal"
        :data-bs-target="`#modal-${pokemon.id}`"
      >
        more
      </button>
    </div>
  </div>

  <PokemonModal :pokemon="pokemon.id" />
</template>
