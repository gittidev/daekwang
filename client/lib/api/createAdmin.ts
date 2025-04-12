// lib/api/createAdmin.ts
import { useRuntimeConfig } from "nuxt/app";
import type { BaseResponse, AdminCreateResponse } from "@/types/common";
import { useAdminToken } from "@/composables/useAdminToken";

export interface AdminCreateRequest {
  username: string;
  password: string;
}

export const createAdmin = async (
  body: AdminCreateRequest
): Promise<{ data: AdminCreateResponse | null; error: string | null }> => {
  const config = useRuntimeConfig();
  const { token } = useAdminToken();

  try {
    const res = await $fetch<BaseResponse<AdminCreateResponse>>(
      `${config.public.apiUrl}/admin/create`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token.value || ""}`,
        },
        body,
      }
    );

    if (!res.success) {
      return { data: null, error: res.message ?? "요청 실패" }; // ❗ undefined 방지
    }

    return { data: res.data ?? null, error: null }; // ❗ undefined 방지
  } catch (e: any) {
    const message =
      e?.data?.message ||
      e?.response?._data?.message ||
      e.message ||
      "알 수 없는 오류 발생";

    return {
      data: null,
      error: message ?? "에러 메시지 없음", // ❗ string | undefined -> string | null
    };
  }
};
