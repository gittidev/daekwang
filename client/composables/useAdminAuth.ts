// composables/useAdminAuth.ts
import { useRuntimeConfig, useCookie } from "nuxt/app";
import { ref, computed } from "vue";
import type { BaseResponse, TokenResponse } from "@/types/common";

const ADMIN_TOKEN_KEY = "admin_token";

export const useAdminAuth = () => {
  const token = useCookie<string | null>(ADMIN_TOKEN_KEY);
  const isLoggedIn = computed(() => !!token.value);
  const loading = ref(false);
  const error = ref<string | null>(null);
  const config = useRuntimeConfig();

  // 로그인
  const login = async (
    username: string,
    password: string
  ): Promise<BaseResponse<TokenResponse>> => {
    try {
      loading.value = true;
      error.value = null;

      const res = await fetch(`${config.public.apiUrl}/admin/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        throw new Error("로그인에 실패했습니다.");
      }

      const result: BaseResponse<TokenResponse> = await res.json();
      const newToken = result.data?.access_token || null;
      token.value = newToken;

      return result;
    } catch (err: any) {
      error.value = err.message || "알 수 없는 오류";
      throw err;
    } finally {
      loading.value = false;
    }
  };

  // 로그아웃
  const logout = () => {
    token.value = null;
  };

  return {
    token,
    isLoggedIn,
    login,
    logout,
    loading,
    error,
  };
};
