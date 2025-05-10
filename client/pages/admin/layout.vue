<!-- app/admin/layout.vue -->
<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <slot />
</template>
