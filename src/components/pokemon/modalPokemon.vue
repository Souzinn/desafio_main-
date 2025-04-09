<script setup>
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  pokemon: Number,
});
const store = useStore();
const pokemonDetails = ref(null);

const fetchPokemonDetails = async () => {
  try {
    const details = await store.dispatch("MoreDetalis", props.pokemon);
    pokemonDetails.value = details;
  } catch (err) {
    console.error("Erro ao buscar detalhes do Pokémon:", err);
  }
};

onMounted(() => {
  fetchPokemonDetails();
});

const spriteImages = computed(() => {
  const id = pokemonDetails.value.id;
  return [
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`,
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`,
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${id}.png`,
  ];
});
</script>

<template>
  <div
    class="modal fade"
    :id="`modal-${pokemon}`"
    tabindex="-1"
    :aria-labelledby="`label-${pokemon}`"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" :id="`label-${pokemon}`">
            Pokémon Detalhes
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="justify-content-center"></div>
          <div v-if="pokemonDetails">
            <p><span>Nome:</span> {{ pokemonDetails.name }}</p>
            <p><span>Altura:</span> {{ pokemonDetails.height }}</p>
            <p><span>Peso:</span> {{ pokemonDetails.weight }}</p>

            <div class="mt-3">
              <span>Movimentos:</span>
              <ul>
                <li v-for="(move, index) in pokemonDetails.moves" :key="index">
                  {{ move.move.name }}
                </li>
              </ul>
            </div>

            <div class="mt-3">
              <span>Sprites:</span>
              <ul>
                <li v-for="(spriteUrl, index) in spriteImages" :key="index">
                  <img :src="spriteUrl" alt="sprite" />
                </li>
              </ul>
            </div>

            <div class="mt-3">
              <span>Games:</span>
              <ul>
                <li
                  v-for="(game, index) in pokemonDetails.game_indices"
                  :key="index"
                >
                  {{ game.version.name }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
