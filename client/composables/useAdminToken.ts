// composables/useAdminToken.ts
import { useCookie } from "nuxt/app";
import { computed } from "vue";

export const useAdminToken = () => {
  const token = useCookie("admin_token");

  const setToken = (value: string) => {
    token.value = value;
  };

  const clearToken = () => {
    token.value = null;
  };

  const isLoggedIn = computed(() => !!token.value);

  return {
    token,
    setToken,
    clearToken,
    isLoggedIn,
  };
};
