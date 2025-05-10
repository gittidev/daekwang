<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useFetch } from "nuxt/app";
import ConstructionForm from "@/components/admin/ConstructionForm.vue";
import { useAdminToken } from "@/composables/useAdminToken";
import type { ConstructionResponse } from "@/types/construction";
const router = useRouter();
const { isLoggedIn } = useAdminToken();
const config = useRuntimeConfig();
const token = useCookie("admin_token").value;

if (!isLoggedIn.value) {
  router.push("/admin/login");
}

const { data: constructions, refresh } = await useFetch<ConstructionResponse[]>(
  `${config.public.apiUrl}/admin/constructions`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

const editingConstruction = ref<ConstructionResponse | null>(null);
const showModal = ref(false);

const startEdit = (item: ConstructionResponse | null) => {
  editingConstruction.value = item
    ? { ...item }
    : {
        id: 0,
        place: "",
        period: "",
        description: "",
        is_published: false,
        created_at: "",
        thumbnail: "",
        total_price: 0,
      };
  showModal.value = true;
};

const closeModal = () => {
  editingConstruction.value = null;
  showModal.value = false;
};

const deleteConstruction = async (id: number) => {
  if (confirm("정말 삭제하시겠습니까?")) {
    try {
      await $fetch(`/api/admin/constructions/${id}`, { method: "DELETE" });
      await refresh();
      alert("삭제 완료");
    } catch (e) {
      alert("삭제 실패");
    }
  }
};
</script>

<template>
  <div class="admin-page">
    <!-- 헤더 -->
    <div class="flex justify-between items-center mb-6">
      <div>
        <h1 class="text-3xl font-bold">🛠️ 시공 내역 관리</h1>
        <p class="text-gray-500 text-sm mt-1">
          등록된 모든 시공 정보를 확인하고 관리할 수 있습니다.
        </p>
      </div>
      <button
        @click="startEdit(null)"
        class="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition"
      >
        ➕ 등록하기
      </button>
    </div>

    <!-- 시공 내역 표 -->
    <div
      v-if="constructions?.length"
      class="overflow-x-auto bg-white shadow-sm rounded-lg"
    >
      <table class="min-w-full table-auto border-collapse">
        <thead>
          <tr class="bg-gray-100">
            <th class="px-4 py-2 text-left text-gray-600">ID</th>
            <th class="px-4 py-2 text-left text-gray-600">장소</th>
            <th class="px-4 py-2 text-left text-gray-600">기간</th>
            <th class="px-4 py-2 text-left text-gray-600">설명</th>
            <th class="px-4 py-2 text-left text-gray-600">공개 여부</th>
            <th class="px-4 py-2 text-left text-gray-600">가격</th>
            <th class="px-4 py-2 text-left text-gray-600">등록일</th>
            <th class="px-4 py-2 text-left text-gray-600">수정/삭제</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in constructions"
            :key="item.id"
            class="border-b hover:bg-gray-50"
          >
            <td class="px-4 py-2">{{ item.id }}</td>
            <td class="px-4 py-2">{{ item.place }}</td>
            <td class="px-4 py-2">{{ item.period }}</td>
            <td class="px-4 py-2">{{ item.description || "설명 없음" }}</td>
            <td class="px-4 py-2">
              {{ item.is_published ? "공개" : "비공개" }}
            </td>
            <td class="px-4 py-2">
              {{ item.total_price?.toLocaleString() || "미입력" }}
            </td>
            <td class="px-4 py-2">{{ item.created_at.slice(0, 10) }}</td>
            <td class="px-4 py-2">
              <button
                @click="startEdit(item)"
                class="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200"
              >
                ✏️ 수정
              </button>
              <button
                @click="deleteConstruction(item.id)"
                class="text-sm px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200"
              >
                🗑️ 삭제
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 데이터가 없을 때 더미 화면 -->
    <div v-else class="overflow-x-auto bg-white shadow-sm rounded-lg">
      <table class="min-w-full table-auto border-collapse">
        <thead>
          <tr class="bg-gray-100">
            <th class="px-4 py-2 text-left text-gray-600">ID</th>
            <th class="px-4 py-2 text-left text-gray-600">장소</th>
            <th class="px-4 py-2 text-left text-gray-600">기간</th>
            <th class="px-4 py-2 text-left text-gray-600">설명</th>
            <th class="px-4 py-2 text-left text-gray-600">공개 여부</th>
            <th class="px-4 py-2 text-left text-gray-600">가격</th>
            <th class="px-4 py-2 text-left text-gray-600">등록일</th>
            <th class="px-4 py-2 text-left text-gray-600">수정/삭제</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 2" :key="i" class="border-b hover:bg-gray-50">
            <td class="px-4 py-2">1</td>
            <td class="px-4 py-2">예시 장소 {{ i }}</td>
            <td class="px-4 py-2">2023.01 ~ 2023.03</td>
            <td class="px-4 py-2">예시 설명</td>
            <td class="px-4 py-2">공개</td>
            <td class="px-4 py-2">100,000</td>
            <td class="px-4 py-2">2023-01-01</td>
            <td class="px-4 py-2">
              <button
                disabled
                class="text-sm px-3 py-1 bg-gray-200 text-gray-400 cursor-not-allowed"
              >
                ✏️ 수정
              </button>
              <button
                disabled
                class="text-sm px-3 py-1 bg-gray-200 text-gray-400 cursor-not-allowed"
              >
                🗑️ 삭제
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 모달 -->
    <Teleport to="body">
      <div
        v-if="showModal"
        class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
      >
        <div class="bg-white p-6 rounded-lg w-full max-w-xl shadow-lg relative">
          <button
            @click="closeModal"
            class="absolute top-3 right-3 text-gray-400 hover:text-black text-xl"
          >
            ×
          </button>
          <h2 class="text-xl font-bold mb-4">
            {{
              editingConstruction?.id === 0 ? "📝 시공 등록" : "✏️ 시공 수정"
            }}
          </h2>
          <ConstructionForm
            :construction="editingConstruction!"
            @saved="
              () => {
                closeModal();
                refresh();
              }
            "
            @cancel="closeModal"
          />
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.admin-page {
  padding: 4rem;
  max-width: 100%;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
  min-height: 100vh;
}
</style>
