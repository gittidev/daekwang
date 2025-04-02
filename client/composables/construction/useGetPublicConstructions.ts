// composables/useGetPublicConstructions.ts
import useFetch from "@/composables/useFetch";

export const useGetPublicConstructions = () => {
  return useFetch("/api/constructions", {
    transform: (res) => res.data, // assuming response has { data }
  });
};
