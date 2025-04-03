<!-- pages/admin/constructions.vue -->
<script setup lang="ts">
import { useFetch, useRouter } from "#app";
import { ref } from "vue";
import ConstructionForm from "@/components/admin/ConstructionForm.vue";
import { useAdminToken } from "@/composables/useAdminToken";

const router = useRouter();
const { isLoggedIn } = useAdminToken();

if (!isLoggedIn.value) {
  router.push("/admin/login");
}

const { data: constructions, refresh } = await useFetch(
  "/api/admin/constructions"
);

const editingConstruction = ref(null);
const startEdit = (item: any) => {
  editingConstruction.value = { ...item };
};
</script>

<template>
  <div class="admin-page">
    <h1 class="text-2xl font-bold mb-4">시공 내역 관리</h1>

    <div class="grid gap-4">
      <div
        v-for="item in constructions"
        :key="item.id"
        class="border rounded-md p-4 bg-white shadow"
      >
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-lg font-bold">{{ item.place }}</h2>
            <p class="text-sm">{{ item.period }}</p>
          </div>
          <button @click="startEdit(item)" class="text-blue-500">수정</button>
        </div>
      </div>
    </div>

    <ConstructionForm
      v-if="editingConstruction"
      :construction="editingConstruction"
      @saved="
        () => {
          editingConstruction = null;
          refresh();
        }
      "
      @cancel="() => (editingConstruction = null)"
    />
  </div>
</template>

<style scoped>
.admin-page {
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
}
</style>
