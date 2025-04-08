<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useApi } from "../composables/useApi";
import { useFetch } from "nuxt/app";

type PingData = {
  message: string;
};

const pingMessage = ref<string | null>(null);
const errorMessage = ref("");
const isLoaded = ref(false);
if (process.server) {
  console.log("🚀 SSR 중");
}
const { data } = await fetch("http://localhost:8000/api/ping");
console.log("data", data);
// onMounted(() => {
//   console.log("✅ onMounted 실행됨!");
//   if (process.client) {
//     console.log("🖥️ CSR 중");
//   }
//   fetch("http://localhost:8000/api/ping")
//     .then((res) => res.json())
//     .then((json) => {
//       console.log("✅ 응답:", json);
//       pingMessage.value = json.data?.message || "없음";
//     })
//     .catch((err) => {
//       console.error("❌ 에러:", err);
//       errorMessage.value = err.message;
//     });
// });
</script>

<template>
  <div>
    <p v-if="pingMessage === null && !errorMessage">⏳ 로딩 중...</p>
    <p v-else-if="errorMessage">❌ 에러: {{ errorMessage }}</p>
    <p v-else>✅ 응답: {{ pingMessage }}</p>
  </div>
</template>
