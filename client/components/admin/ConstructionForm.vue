<script setup lang="ts">
import { ref, watch } from "vue";
import type { ConstructionResponse } from "@/types/construction";
import { useRuntimeConfig } from "nuxt/app";
import { useCookie } from "nuxt/app";
import { useCreateConstruction } from "@/composables/construction/useCreateConstruction";
import { useUpdateConstruction } from "@/composables/construction/useUpdateConstruction";

import type { ConstructionCreateRequest } from "@/types/construction";

const token = useCookie("access_token").value;
const config = useRuntimeConfig();
const {
  public: { apiUrl },
} = config;
const props = defineProps<{
  construction: ConstructionResponse;
}>();
const emit = defineEmits(["saved", "cancel"]);

const form = ref({ ...props.construction });
const file = ref<File | null>(null);
const previewUrl = ref<string | null>(form.value.thumbnail || null);
const isUploading = ref(false);

// 날짜 입력
const startDate = ref(form.value.period?.split(" ~ ")[0] || "");
const endDate = ref(form.value.period?.split(" ~ ")[1] || "");

// 총 금액 (포맷팅된 문자열 형태로 관리)
const totalPriceText = ref(form.value.total_price?.toLocaleString() || "");

// 총 금액 입력 시 숫자로 파싱해 form에 반영
watch(totalPriceText, (val) => {
  const digits = val.replace(/[^\d]/g, ""); // 숫자만 추출
  form.value.total_price = parseInt(digits || "0");
  totalPriceText.value = digits ? Number(digits).toLocaleString() : "";
});

// 날짜 변경 시 period 필드 갱신
watch([startDate, endDate], ([start, end]) => {
  if (start && end) {
    form.value.period = `${start} ~ ${end}`;
  }
});

// 파일 변경 함수
const onFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files?.[0]) {
    file.value = target.files[0];
    previewUrl.value = URL.createObjectURL(file.value);
  }
};

const removeImage = () => {
  file.value = null;
  previewUrl.value = null;
  form.value.thumbnail = "";
};

const handleSubmit = async () => {
  isUploading.value = true;

  try {
    const isNew = form.value.id === 0;

    // 1️⃣ FormData 생성
    const formData = new FormData();
    formData.append("place", form.value.place);
    formData.append("period", form.value.period);
    formData.append("description", form.value.description);
    formData.append("is_published", String(form.value.is_published));
    formData.append("total_price", String(form.value.total_price ?? ""));

    if (file.value) {
      formData.append("file", file.value); // 🔥 선택된 이미지가 있다면 포함
    }

    // 2️⃣ API 요청
    const endpoint = isNew
      ? `${apiUrl}/admin/constructions/create`
      : `${apiUrl}/admin/constructions/${form.value.id}`;

    await $fetch(endpoint, {
      method: isNew ? "POST" : "PUT",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    emit("saved");
  } catch (e) {
    console.error("등록 실패", e);
    alert("저장 실패");
  } finally {
    isUploading.value = false;
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <!-- 썸네일 -->
    <div>
      <label class="block font-medium mb-1">썸네일 이미지</label>
      <input
        type="file"
        accept="image/*"
        @change="onFileChange"
        class="block"
      />
      <p v-if="!previewUrl" class="text-sm text-gray-500 mt-1">
        이미지를 선택하거나 드래그하세요.
      </p>
      <div v-if="previewUrl" class="mt-2 relative w-fit">
        <img
          :src="previewUrl"
          alt="미리보기"
          class="w-48 h-auto border rounded"
        />
        <button
          type="button"
          @click="removeImage"
          class="absolute top-1 right-1 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded hover:bg-opacity-80"
        >
          삭제
        </button>
      </div>
    </div>

    <!-- 장소 -->
    <div>
      <label class="block font-medium mb-1">장소</label>
      <input
        v-model="form.place"
        type="text"
        class="w-full px-3 py-2 border rounded"
      />
    </div>

    <!-- 기간 -->
    <!-- 기간 -->
    <div>
      <label class="block font-medium mb-1">기간</label>
      <div class="flex gap-2">
        <input
          v-model="startDate"
          type="date"
          class="px-3 py-2 border rounded"
        />
        <span class="self-center">~</span>
        <input v-model="endDate" type="date" class="px-3 py-2 border rounded" />
      </div>
    </div>

    <!-- 설명 -->
    <div>
      <label class="block font-medium mb-1">설명</label>
      <textarea
        v-model="form.description"
        rows="3"
        class="w-full px-3 py-2 border rounded resize-none"
      />
    </div>

    <!-- 총 금액 -->
    <div>
      <label class="block font-medium mb-1">총 금액</label>
      <input
        v-model="totalPriceText"
        type="text"
        inputmode="numeric"
        placeholder="예: 1,000,000"
        class="w-full px-3 py-2 border rounded"
      />
    </div>

    <!-- 공개 여부 -->
    <div>
      <label class="inline-flex items-center space-x-2">
        <input type="checkbox" v-model="form.is_published" />
        <span>공개 여부</span>
      </label>
    </div>

    <!-- 버튼 -->
    <div class="flex justify-end gap-2 mt-4">
      <button
        type="button"
        @click="$emit('cancel')"
        class="px-4 py-2 rounded bg-gray-300 text-gray-800 hover:bg-gray-400"
      >
        취소
      </button>
      <button
        type="submit"
        :disabled="isUploading"
        class="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50"
      >
        {{ isUploading ? "저장 중..." : "저장" }}
      </button>
    </div>
  </form>
</template>
