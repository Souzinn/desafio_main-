<template>
  <div class="input-group mb-3">
    <select
      class="form-select"
      id="inputGroupSelect02"
      v-model="selectedOption"
      @change="emitSelection"
    >
      <option value="">- All -</option>
      <option value="normal">Normal</option>
      <option value="fire">Fire</option>
      <option value="water">Water</option>
      <option value="electric">Electric</option>
      <option value="grass">Grass</option>
      <option value="ice">Ice</option>
      <option value="fighting">Fighting</option>
      <option value="poison">Poison</option>
      <option value="ground">Ground</option>
      <option value="flying">Flying</option>
      <option value="psychic">Psychic</option>
      <option value="bug">Bug</option>
      <option value="rock">Rock</option>
      <option value="ghost">Ghost</option>
      <option value="dragon">Dragon</option>
      <option value="dark">Dark</option>
      <option value="steel">Steel</option>
      <option value="fairy">Fairy</option>
    </select>
    <label class="input-group-text" for="inputGroupSelect02">Tipos</label>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["input"]);
const selectedOption = ref("");

const emitSelection = () => {
  emit("input", selectedOption.value);
};
</script>
