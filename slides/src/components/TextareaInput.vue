<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <textarea :value="modelValue" />
</template>
