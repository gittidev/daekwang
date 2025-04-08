<script setup lang="ts">
import { useAdminToken } from "../../composables/useAdminToken";
import { useRouter } from "vue-router";
import { useAsyncData } from "nuxt/app";
import type { ConstructionResponse } from "@/types/construction";
import { computed, ref, onMounted } from "vue";
import MonthlyConstructionChart from "@/components/MonthlyConstructionChart.vue";

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

// 더미 월별 시공 데이터
const monthlyData = ref([
  { month: "1월", count: 5 },
  { month: "2월", count: 8 },
  { month: "3월", count: 12 },
  { month: "4월", count: 15 },
  { month: "5월", count: 7 },
  { month: "6월", count: 9 },
  { month: "7월", count: 10 },
  { month: "8월", count: 6 },
  { month: "9월", count: 11 },
  { month: "10월", count: 14 },
  { month: "11월", count: 13 },
  { month: "12월", count: 16 },
]);
</script>

<template>
  <div class="dashboard">
    <h1 class="text-2xl font-bold mb-6">관리자 대시보드</h1>

    <!-- 요약 카드 그리드 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
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

    <!-- 차트와 버튼을 위한 그리드 레이아웃 -->
    <div class="chart-and-buttons grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
      <!-- 월별 시공 건수 차트 (왼쪽, 3/5) -->
      <div class="chart-container lg:col-span-3">
        <MonthlyConstructionChart :data="monthlyData" />
      </div>

      <!-- 관리 링크 버튼 (오른쪽, 2/5) -->
      <div class="buttons-container lg:col-span-2">
        <NuxtLink to="/admin/constructions" class="card-link">
          <h2 class="text-xl font-semibold">🛠️ 시공 내역 관리</h2>
          <p class="text-sm text-gray-500">시공 기록을 조회 및 수정합니다.</p>
        </NuxtLink>

        <NuxtLink to="/admin/settings" class="card-link mt-4">
          <h2 class="text-xl font-semibold">⚙️ 설정</h2>
          <p class="text-sm text-gray-500">
            사이트 및 관리자 정보를 수정합니다.
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  max-width: 80%;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
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

.chart-and-buttons {
  align-items: center; /* 차트와 버튼을 수직 중앙 정렬 */
}

.chart-container {
  max-width: 100%;
}

/* 차트 크기 조정 */
.chart-container :deep(canvas) {
  max-height: 350px; /* 차트 높이 약간 키움 */
  width: 100%;
  aspect-ratio: 4 / 3; /* 차트의 가로:세로 비율 조정 */
}

.buttons-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem; /* 버튼 간 간격 늘림 */
  justify-content: center; /* 버튼을 수직 중앙에 배치 */
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

/* 반응형 조정 */
@media (max-width: 1024px) {
  .chart-and-buttons {
    gap: 2rem; /* 모바일에서 더 넓은 간격 */
  }
  .chart-container {
    max-width: 100%;
  }
  .buttons-container {
    margin-top: 1rem;
  }
  .chart-container :deep(canvas) {
    max-height: 300px; /* 모바일에서 약간 작게 */
    aspect-ratio: 3 / 2; /* 모바일 비율 조정 */
  }
}
</style>
