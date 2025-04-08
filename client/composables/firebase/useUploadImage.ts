// composables/useUploadImage.ts
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { useFirebaseStorage } from "./useFirebaseStorage";

export const useUploadImage = () => {
  const storage = useFirebaseStorage();

  const uploadImage = async (
    file: File,
    folder: string,
    filename: string
  ): Promise<string> => {
    const fullPath = `${folder}/${filename}`;
    const fileRef = storageRef(storage, fullPath);
    await uploadBytes(fileRef, file);
    return await getDownloadURL(fileRef);
  };

  return { uploadImage };
};
