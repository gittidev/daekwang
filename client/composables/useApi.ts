import { useFetch, useRuntimeConfig } from "nuxt/app";
import type { BaseResponse } from "@/types/common";

export function useApi<T>(
  endpoint: string,
  options: Parameters<typeof useFetch<BaseResponse<T>>>[1] = {}
) {
  const config = useRuntimeConfig();
  const url = () => `${config.public.apiUrl}${endpoint}`;

  return useFetch<BaseResponse<T>>(url, {
    ...options,

    default: () =>
      ({
        success: false,
        message: "",
        data: undefined,
        code: 0,
      } as BaseResponse<T>),

    onResponseError({ response }) {
      console.error(
        `[API ERROR] ${response.status} - ${
          response._data?.message || response.statusText
        }`
      );
    },
  });
}
