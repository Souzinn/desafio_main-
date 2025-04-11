<script setup>
const props = defineProps({
  placeholder: String,
});

const emit = defineEmits(["input"]);
</script>

<template>
  <input
    :placeholder="placeholder || 'Filtrar por nome...'"
    class="form-control"
    type="text"
    @input="(e) => emit('input', e.target.value.trim())"
  />
</template>
