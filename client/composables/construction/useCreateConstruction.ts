import { useApi } from "@/composables/useApi";
import type { ConstructionCreateRequest } from "@/types/construction";

export const useCreateConstruction = async (
  body: ConstructionCreateRequest
) => {
  const api = useApi();
  return await api<null, ConstructionCreateRequest>(
    "/admin/constructions/create",
    {
      method: "POST",
      body,
    }
  );
};
