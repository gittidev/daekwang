<script setup lang="ts">
import { ref, watch } from "vue";

const isDark = ref(false);

watch(isDark, (val) => {
  document.documentElement.classList.toggle("dark", val);
});
</script>

<template>
  <v-btn @click="isDark = !isDark">
    다크모드 {{ isDark ? "해제" : "적용" }}
  </v-btn>
</template>
