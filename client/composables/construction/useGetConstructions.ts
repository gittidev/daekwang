import { useApi } from "@/composables/useApi";
import type { ConstructionResponse } from "@/types/construction";

export const useGetConstructions = async () => {
  const api = useApi();
  return await api<ConstructionResponse[]>("/admin/constructions");
};
