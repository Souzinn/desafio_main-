<script>
export default {
  props: {
    pokemon: Object,
  },
};
</script>

<template>
  <div
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

    <div>
      <span class="badge bg-primary text-capitalize"></span>
    </div>

    <a class="btn btn-outline-primary ms-3">more</a>
  </div>
</template>
