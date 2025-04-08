<script setup lang="ts">
import { useAdminToken } from "@/composables/useAdminToken";
import { useRouter } from "#app";

const { isLoggedIn } = useAdminToken();
const router = useRouter();

if (!isLoggedIn.value) {
  router.push("/admin/login");
}
</script>

<template>
  <div class="admin-settings">
    <div class="text-center mb-10">
      <h1 class="text-4xl font-extrabold text-blue-600">관리자 설정</h1>
      <p class="text-gray-600 mt-2 text-base">
        시스템 설정, 권한 관리 등 고급 기능이 추가될 예정입니다.
      </p>
    </div>

    <div
      class="rounded-lg border border-blue-100 bg-blue-50 p-8 text-center shadow-sm"
    >
      <p class="text-blue-700 text-lg font-medium">
        ⚠️ 설정 기능이 아직 준비되지 않았습니다.
      </p>
      <p class="text-sm text-blue-500 mt-2">
        향후 업데이트에서 다양한 설정 항목이 제공될 예정입니다.
      </p>
    </div>
  </div>
</template>

<style scoped>
.admin-settings {
  padding: 3rem 5rem;
  max-width: 100%;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
  background-color: #f9fafb;
  min-height: 100vh;
}
</style>
