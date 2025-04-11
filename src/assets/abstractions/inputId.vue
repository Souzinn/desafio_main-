<script setup>
const props = defineProps({
  placeholder: String,
});

const emit = defineEmits(["input"]);
</script>

<template>
  <input
    :placeholder="placeholder || 'Filtrar por ID...'"
    class="form-control"
    type="number"
    @input="(e) => emit('input', e.target.value.trim())"
  />
</template>
