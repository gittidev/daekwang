<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useFetch, useAsyncData } from "#app";
import { useAdminToken } from "@/composables/useAdminToken";

const route = useRoute();
const router = useRouter();
const { token } = useAdminToken();

const id = route.params.id;
const isLoading = ref(false);

const form = ref({
  place: "",
  period: "",
  description: "",
  is_published: false,
  total_price: null,
  thumbnail: "",
});

const fetchConstruction = async () => {
  const { data } = await useFetch(`/api/admin/constructions/${id}`, {
    headers: { Authorization: `Bearer ${token.value}` },
  });
  if (data.value) Object.assign(form.value, data.value);
};

onMounted(() => {
  fetchConstruction();
});

const updateConstruction = async () => {
  isLoading.value = true;
  await $fetch(`/api/admin/constructions/${id}`, {
    method: "PUT",
    body: form.value,
    headers: { Authorization: `Bearer ${token.value}` },
  });
  isLoading.value = false;
  alert("수정이 완료되었습니다");
  router.push("/admin/constructions");
};
</script>

<template>
  <div class="max-w-3xl mx-auto py-10">
    <h1 class="text-2xl font-bold mb-6">시공 내역 수정</h1>
    <form @submit.prevent="updateConstruction" class="space-y-4">
      <div>
        <label class="font-semibold">시공 장소</label>
        <input v-model="form.place" class="input" type="text" required />
      </div>

      <div>
        <label class="font-semibold">시공 기간</label>
        <input v-model="form.period" class="input" type="text" required />
      </div>

      <div>
        <label class="font-semibold">설명</label>
        <textarea v-model="form.description" class="input h-28" />
      </div>

      <div>
        <label class="font-semibold">썸네일 이미지 경로</label>
        <input v-model="form.thumbnail" class="input" type="text" />
      </div>

      <div>
        <label class="font-semibold">매출 금액 (원)</label>
        <input v-model.number="form.total_price" class="input" type="number" />
      </div>

      <div class="flex items-center gap-2">
        <input v-model="form.is_published" type="checkbox" />
        <label>공개 여부</label>
      </div>

      <button :disabled="isLoading" type="submit" class="btn">
        {{ isLoading ? "저장 중..." : "저장" }}
      </button>
    </form>
  </div>
</template>

<style scoped>
.input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.btn {
  background-color: #1e40af;
  color: white;
  padding: 0.5rem 1.25rem;
  border-radius: 6px;
  font-weight: 600;
  transition: background 0.3s;
}

.btn:hover {
  background-color: #1c3faa;
}
</style>
