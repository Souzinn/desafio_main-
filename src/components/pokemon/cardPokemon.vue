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
    class="d-flex align-items-center justify-content-between p-3 border rounded shadow-sm bg-white mb-3"
  >
    <div class="d-flex align-items-center gap-3">
      <img
        :src="`https://img.pokemondb.net/sprites/scarlet-violet/icon/${pokemon.name}.png`"
        :alt="pokemon.name"
        class="img-fluid"
        style="width: 64px; height: 64px"
      />
      <div>
        <span class="text-muted small">#{{ pokemon.key }}</span>
        <p class="mb-0 fw-semibold text-capitalize">{{ pokemon.name }}</p>
      </div>
    </div>

    <div v-if="pokemonDetail && pokemonDetail.types">
      <span
        v-for="(type, index) in pokemonDetail.types"
        :key="index"
        class="badge bg-primary me-1 text-capitalize"
      >
        {{ type.type.name }}
      </span>
    </div>

    <button
      class="btn btn-outline-primary ms-3"
      data-bs-toggle="modal"
      :data-bs-target="`#modal-${pokemon.key}`"
    >
      more
    </button>
  </div>

  <PokemonModal :pokemon="pokemon.key" />
</template>
