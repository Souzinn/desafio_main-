<script setup>
import { onMounted, ref, computed, watch } from "vue";
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
    evolutionChain.value = chain.map((evo) => ({
      name: evo.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evo.id}.png`,
    }));
  } catch (err) {
    console.error("Erro ao buscar", err);
  }
};

const clearModalData = () => {
  pokemonDetails.value = null;
  evolutionChain.value = [];
};
watch(
  () => props.pokemon,
  (newPokemon) => {
    if (newPokemon) {
      fetchPokemonDetails();
    }
  }
);

onMounted(() => {
  fetchPokemonDetails();
  const modalElement = document.getElementById(`modal-${props.pokemon}`);
  if (modalElement) {
    modalElement.addEventListener("hidden.bs.modal", clearModalData);
  }
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
          <p class="modal-title fs-6 fw-bold" :id="`label-${pokemon}`">
            Detalhes do Pokémon
          </p>
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
              <p class="fw-bold">Movimentos:</p>
              <div class="row row-cols-2 row-cols-md-3 g-2">
                <div
                  v-for="(move, index) in pokemonDetails.moves"
                  :key="index"
                  class="col"
                >
                  <div class="card p-2 text-center">
                    <span>{{ move }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <p class="fw-bold">Evolução:</p>
              <div class="d-flex align-items-center gap-3 flex-wrap">
                <div
                  v-for="(evo, index) in evolutionChain"
                  :key="index"
                  class="text-center"
                >
                  <img
                    :src="evo.image"
                    :alt="evo.name"
                    style="width: 72px; height: 72px"
                    class="img-thumbnail"
                  />
                  <p class="text-capitalize mt-1">{{ evo.name }}</p>
                </div>
              </div>
            </div>
            <div class="mt-3">
              <p class="fw-bold">Sprites:</p>
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
              <p class="fw-bold">Games:</p>
              <div class="row row-cols-2 row-cols-md-3 g-2">
                <div
                  v-for="(game, index) in pokemonDetails.games || []"
                  :key="index"
                  class="col"
                >
                  <div class="card p-2 text-center">
                    <span>{{ game }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="text-center text-muted">Carregando dados...</div>
        </div>
      </div>
    </div>
  </div>
</template>
