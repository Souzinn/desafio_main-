<script setup>
import inputSearch from "../assets/abstractions/input.vue";
import inputName from "../assets/abstractions/inputName.vue";
import inputId from "../assets/abstractions/inputId.vue";

defineProps([
  "updateSearchName",
  "updateSelectedType",
  "updateSearchId",
  "searchId",
  "searchName",
  "selectedType",
]);
</script>

<template>
  <div class="container mb-4">
    <div class="row g-3 align-items-center">
      <div class="col-md">
        <inputName
          v-if="!searchId && !selectedType"
          @input="updateSearchName"
        />
      </div>
      <div class="col-md">
        <inputSearch
          v-if="!searchId && !searchName"
          @input="updateSelectedType"
        />
      </div>
      <div class="col-md">
        <inputId v-if="!searchName && !selectedType" @input="updateSearchId" />
      </div>
    </div>
  </div>
</template>
