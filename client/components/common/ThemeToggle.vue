<script setup lang="ts">
import { ref, watch } from "vue";

const isDark = ref(false);

watch(isDark, (val) => {
  document.documentElement.classList.toggle("dark", val);
});
</script>

<template>
  <v-btn @click="isDark = !isDark">
    {{ isDark ? "☀️" : "🌕" }}
  </v-btn>
</template>
