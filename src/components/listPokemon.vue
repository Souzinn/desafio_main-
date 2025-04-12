<script setup>
import cardPokemon from "./pokemon/cardPokemon.vue";

defineProps(["filteredPokemons"]);
</script>

<template>
  <div class="d-flex flex-column gap-3 my-4">
    <div
      v-if="filteredPokemons.length === 0"
      class="alert alert-warning"
      role="alert"
    >
      Nenhum Pokémon encontrado! Verifique o ID ou coloque um valor abaixo de 1025.
    </div>

    <cardPokemon
      v-for="(pokemon, index) in filteredPokemons"
      :key="index"
      :pokemon="{ ...pokemon, key: index + 1 }"
      class="border-top border-bottom py-3 bg-white text-dark"
    />
  </div>
</template>
