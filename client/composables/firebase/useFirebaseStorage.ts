import { getStorage } from "firebase/storage";
import { useFirebaseApp } from "./useFirebase";

export const useFirebaseStorage = () => {
  // 초기화
  const app = useFirebaseApp();
  return getStorage(app);
};
