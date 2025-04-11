<script setup>
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
import requestdata from "../../service/index";

const props = defineProps({
  pokemon: Number,
});

const store = useStore();
const service = new requestdata();

const pokemonDetails = ref(null);
const evolutionChain = ref([]);

const fetchPokemonDetails = async () => {
  try {
    const details = await store.dispatch("MoreDetalis", props.pokemon);
    pokemonDetails.value = details;

    const chain = await service.fetchEvolutionChain(details.id);
    evolutionChain.value = chain;
  } catch (err) {
    console.error("Erro ao buscar detalhes do Pokémon:", err);
  }
};

onMounted(() => {
  fetchPokemonDetails();
});

const spriteImages = computed(() => {
  const id = pokemonDetails.value?.id;
  if (!id) return [];
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
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" :id="`label-${pokemon}`">
            Detalhes do Pokémon
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Fechar"
          ></button>
        </div>

        <div class="modal-body">
          <div v-if="pokemonDetails">
            <p><strong>Nome:</strong> {{ pokemonDetails.name }}</p>
            <div class="mt-3">
              <strong>Movimentos:</strong>
              <ul>
                <li v-for="(move, index) in pokemonDetails.moves" :key="index">
                  {{ move }}
                </li>
              </ul>
            </div>
            <div class="mt-3">
              <strong>Evolução:</strong>
              <ul>
                <li v-for="(stage, index) in evolutionChain" :key="index">
                  {{ stage }}
                </li>
              </ul>
            </div>
            <div class="mt-3">
              <strong>Sprites:</strong>
              <div class="d-flex flex-wrap gap-2">
                <img
                  v-for="(spriteUrl, index) in spriteImages"
                  :key="index"
                  :src="spriteUrl"
                  alt="sprite"
                  class="img-thumbnail"
                  style="width: 72px; height: 72px"
                />
              </div>
            </div>
            <div class="mt-3">
              <strong>Games:</strong>
              <ul>
                <li
                  v-for="(game, index) in pokemonDetails.games || []"
                  :key="index"
                >
                  {{ game }}
                </li>
              </ul>
            </div>
          </div>

          <div v-else class="text-center text-muted">Carregando dados...</div>
        </div>
      </div>
    </div>
  </div>
</template>
