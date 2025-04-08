// composables/useDownloadImage.ts
import {
  getStorage,
  ref as storageRef,
  getDownloadURL,
} from "firebase/storage";
import { useFirebaseApp } from "./useFirebase";

export const useDownloadImage = () => {
  const app = useFirebaseApp();
  const storage = getStorage(app);

  const getImageUrl = async (path: string): Promise<string> => {
    const fileRef = storageRef(storage, path);
    return await getDownloadURL(fileRef);
  };

  return { getImageUrl };
};
