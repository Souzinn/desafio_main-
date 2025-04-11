<script setup>
import PokemonFilters from "../components/filtersPokemon.vue";
import PokemonList from "../components/listPokemon.vue";

import usePokemonStore from "../composables/usePokemonStore";
import usePokemonFilters from "../composables/usePokemonFilters";
import usePokemonInfiniteScroll from "../composables/usePokemonInfiniteScroll";

const { pokemonsList, pokemonDetails, loadMore, getDetails } =
  usePokemonStore();

const { selectedType, searchName, searchId, filteredPokemons } =
  usePokemonFilters(pokemonsList, pokemonDetails);

usePokemonInfiniteScroll(
  loadMore,
  async () => {
    await Promise.all(
      pokemonsList.value.slice(-20).map((pokemon) => getDetails(pokemon.name))
    );
  },
  selectedType
);

const updateSearchId = async (value) => {
  searchId.value = value || "";
  if (searchId.value) {
    const id = Number(searchId.value);
    if (!pokemonDetails.value.some((p) => p.id === id)) {
      try {
        await getDetails(id);
      } catch {
        console.error("error");
      }
    }
  }
};

const updateSelectedType = async (value) => {
  selectedType.value = value || "";
  if (selectedType.value) {
    const unloaded = pokemonsList.value.filter(
      (p) => !pokemonDetails.value.some((d) => d.name === p.name)
    );
    if (unloaded.length) {
      await Promise.all(unloaded.map((pokemon) => getDetails(pokemon.name)));
    }
  }
};

const updateSearchName = (value) => {
  searchName.value = value || "";
};
</script>

<template>
  <div class="container py-5">
    <section class="mb-5 text-center">
      <h1 class="fw-bold display-5 mb-3">Bem-vindo à Pokédex Interativa</h1>
      <p class="lead text-muted mb-4">
        Aqui você pode explorar uma vasta lista de Pokémons, filtrando por nome,
        tipo ou ID. Descubra informações detalhadas, veja os tipos e acesse mais
        detalhes de cada um com apenas um clique. A Pokédex perfeita para
        iniciantes, fãs nostálgicos e mestres Pokémon!
      </p>
      <hr class="w-50 mx-auto opacity-50" />
      <p class="text-muted small">
        Role até o fim da página para carregar ainda mais Pokémons
        automaticamente!
      </p>
    </section>
    <PokemonFilters
      :updateSearchName="updateSearchName"
      :updateSelectedType="updateSelectedType"
      :updateSearchId="updateSearchId"
      :searchId="searchId"
      :searchName="searchName"
      :selectedType="selectedType"
    />
    <PokemonList :filteredPokemons="filteredPokemons" />
  </div>
</template>
