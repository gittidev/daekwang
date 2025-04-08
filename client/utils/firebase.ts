// utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.NUXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  appId: import.meta.env.NUXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
