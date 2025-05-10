// composables/useAdminToken.ts
import { useCookie } from "nuxt/app";
import { computed } from "vue";
import { useRouter } from "vue-router";

export const useAdminToken = () => {
  const token = useCookie("admin_token");
  const router = useRouter();
  const setToken = (value: string) => {
    token.value = value;
  };

  const clearToken = () => {
    token.value = null;
    router.push("/admin");
  };

  const isLoggedIn = computed(() => !!token.value);

  return {
    token,
    setToken,
    clearToken,
    isLoggedIn,
  };
};
