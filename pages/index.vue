<script setup lang="ts">
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const target = ref(null);
const isVisible = ref(false);

useIntersectionObserver(target, ([{ isIntersecting }]) => {
  isVisible.value = isIntersecting;
});
</script>

<template>
  <div class="index-container">Page: index</div>
  <div class="index-container">Page: index</div>
  <div class="index-container">Page: index</div>
  <div class="index-container">Page: index</div>
</template>

<style lang="postcss" scoped>
.index-container {
  min-height: 100vh;
  border: 1px solid red;
}
</style>
