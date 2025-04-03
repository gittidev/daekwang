<script setup lang="ts">
import { useAdminToken } from "~/composables/useAdminToken";
import { useRouter, useAsyncData } from "#app";
import type { ConstructionResponse } from "@/types/construction";
import { computed, ref, onMounted } from "vue";

const { isLoggedIn } = useAdminToken();
const router = useRouter();
const isReady = ref(false);

// 클라이언트에서만 인증 체크 및 이동 처리
onMounted(() => {
  if (!isLoggedIn.value) {
    router.push("/admin/login");
  } else {
    isReady.value = true;
  }
});

// 시공 데이터
const { data: constructions, pending } = await useAsyncData<
  ConstructionResponse[]
>("admin-constructions-summary", () =>
  $fetch("/api/admin/constructions", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
    },
  })
);

const totalCount = computed(() => constructions.value?.length || 0);
const publishedCount = computed(
  () => constructions.value?.filter((c) => c.is_published).length || 0
);
const latestConstruction = computed(() => constructions.value?.[0]);
</script>

<template>
  <div class="dashboard">
    <h1 class="text-2xl font-bold mb-6">관리자 대시보드</h1>

    <div class="grid grid-cols-3 gap-4 mb-8">
      <div class="summary-card">
        <p class="text-sm text-gray-500">총 시공 건수</p>
        <p class="text-2xl font-bold">{{ totalCount }}</p>
      </div>

      <div class="summary-card">
        <p class="text-sm text-gray-500">공개된 시공</p>
        <p class="text-2xl font-bold">{{ publishedCount }}</p>
      </div>

      <div class="summary-card">
        <p class="text-sm text-gray-500">최근 등록</p>
        <p class="text-md font-semibold truncate">
          {{ latestConstruction?.place || "없음" }}
        </p>
        <p class="text-sm text-gray-400">
          {{ latestConstruction?.created_at?.slice(0, 10) || "" }}
        </p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <NuxtLink to="/admin/constructions" class="card-link">
        <h2 class="text-xl font-semibold">🛠️ 시공 내역 관리</h2>
        <p class="text-sm text-gray-500">시공 기록을 조회 및 수정합니다.</p>
      </NuxtLink>

      <NuxtLink to="/admin/settings" class="card-link">
        <h2 class="text-xl font-semibold">⚙️ 설정</h2>
        <p class="text-sm text-gray-500">사이트 및 관리자 정보를 수정합니다.</p>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.summary-card {
  background: #f8fafc;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-link {
  display: block;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  background: white;
  transition: all 0.2s ease;
}

.card-link:hover {
  background-color: #f1f5f9;
  transform: translateY(-2px);
}
</style>
