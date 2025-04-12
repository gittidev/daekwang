import { useRuntimeConfig } from "nuxt/app";
import type { BaseResponse } from "@/types/common";
import { useAdminToken } from "@/composables/useAdminToken";

type ApiMethod = "GET" | "POST" | "PUT" | "DELETE";
type ApiBody = BodyInit | Record<string, any> | null | undefined;

type ApiOptions<T extends ApiBody> = {
  method?: ApiMethod;
  body?: T;
  query?: Record<string, any>;
  headers?: Record<string, string>;
};

export const useApi = () => {
  const config = useRuntimeConfig();
  const baseURL = config.public.apiUrl;
  const { token } = useAdminToken();

  return async <Res, Req extends ApiBody = undefined>(
    path: string,
    options: ApiOptions<Req> = {}
  ): Promise<{ data: Res | null; error: string | null }> => {
    try {
      const headers = {
        ...options.headers,
        ...(token.value ? { Authorization: `Bearer ${token.value}` } : {}),
      };

      const res = await $fetch<BaseResponse<Res>>(`${baseURL}${path}`, {
        ...options,
        headers,
      });

      if (!res.success) {
        return {
          data: null,
          error: res.message || "요청 실패",
        };
      }

      return {
        data: res.data ?? null,
        error: null,
      };
    } catch (e: any) {
      console.error(
        `[API ERROR] ${e?.response?.status} - ${e?.data?.message || e.message}`
      );
      return {
        data: null,
        error: e?.data?.message || e.message || "알 수 없는 에러",
      };
    }
  };
};
