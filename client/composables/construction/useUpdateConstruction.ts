import { useApi } from "../useApi";
import type {
  ConstructionCreateRequest,
  ConstructionResponse,
} from "@/types/construction";
export const useUpdateConstruction = async (
  id: number,
  body: ConstructionCreateRequest
) => {
  const api = useApi();
  return await api<ConstructionResponse, ConstructionCreateRequest>(
    `/admin/constructions/${id}`,
    {
      method: "PUT",
      body,
    }
  );
};
