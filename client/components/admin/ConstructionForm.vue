<!-- components/admin/ConstructionForm.vue -->
<script setup lang="ts">
import { ref, watch } from "vue";
import { useFetch } from "#app";

const props = defineProps<{
  construction: any;
}>();
const emit = defineEmits(["saved", "cancel"]);

const form = ref({ ...props.construction });

watch(
  () => props.construction,
  (val) => {
    form.value = { ...val };
  }
);

const saveConstruction = async () => {
  await $fetch(`/api/admin/constructions/${form.value.id}`, {
    method: "PUT",
    body: form.value,
  });
  emit("saved");
};
</script>

<template>
  <div class="bg-gray-100 p-4 rounded mt-6">
    <h2 class="text-lg font-bold mb-2">시공 내역 수정</h2>

    <div class="grid gap-4">
      <label>
        장소
        <input v-model="form.place" class="input" />
      </label>
      <label>
        기간
        <input v-model="form.period" class="input" />
      </label>
      <label>
        설명
        <textarea v-model="form.description" class="input" />
      </label>
      <label>
        썸네일 URL
        <input v-model="form.thumbnail" class="input" />
      </label>
      <label>
        금액
        <input v-model.number="form.total_price" type="number" class="input" />
      </label>
      <label>
        공개 여부
        <input type="checkbox" v-model="form.is_published" />
      </label>

      <div class="flex justify-end gap-2 mt-4">
        <button @click="emit('cancel')" class="btn cancel">취소</button>
        <button @click="saveConstruction" class="btn save">저장</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}
.btn {
  padding: 0.5rem 1rem;
  border-radius: 6px;
}
.cancel {
  background-color: #e5e5e5;
}
.save {
  background-color: #3b82f6;
  color: white;
}
</style>
