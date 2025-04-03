// composables/useAdminAuth.ts
import { useCookie } from "#app";
import { ref, computed } from "vue";

const ADMIN_TOKEN_KEY = "admin_token";

export const useAdminAuth = () => {
  const token = useCookie<string | null>(ADMIN_TOKEN_KEY);
  const isLoggedIn = computed(() => !!token.value);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // 로그인
  const login = async (username: string, password: string) => {
    try {
      loading.value = true;
      error.value = null;

      const res = await fetch("http://localhost:8000/api/admin/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ username, password }),
      });

      if (!res.ok) {
        throw new Error("로그인에 실패했습니다.");
      }

      const data = await res.json();
      token.value = data.access_token;
    } catch (err: any) {
      error.value = err.message || "알 수 없는 오류";
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
