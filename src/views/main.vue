<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goToPokemonView() {
  router.push({ name: "pokemons" });
}
</script>

<template>
  <div
    class="container d-flex flex-column justify-content-center align-items-center text-center vh-100"
  >
    <h1 class="display-3 fw-bold mb-3">Pokédex Explorer</h1>
    <p class="lead text-muted mb-4">
      Conheça todos os Pokémon, filtre por tipo, nome ou ID, e descubra seus
      favoritos!
    </p>
    <button class="btn btn-primary btn-lg" @click="goToPokemonView">
      Começar Agora
    </button>
  </div>
</template>
