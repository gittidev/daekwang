<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center"
  >
    <div class="bg-white p-10 rounded-lg shadow-lg max-w-md">
      <h1 class="text-6xl font-bold text-red-500 mb-4">
        {{ error.statusCode }}
      </h1>
      <p class="text-gray-600 text-lg mb-6">
        {{ error.message }}
      </p>
      <NuxtLink
        to="/"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all"
      >
        Go back home
      </NuxtLink>
    </div>
  </div>
</template>
