<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
});
</script>

<template>
  <div>
    <h2>
      {{ props.title }}
    </h2>
  </div>
</template>

<style scoped>
h2 {
  font-weight: 500;
  font-size: 2.0rem;
}
</style>