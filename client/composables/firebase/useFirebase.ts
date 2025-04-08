import { initializeApp, getApps } from "firebase/app";
import type { FirebaseApp } from "firebase/app";
import { useRuntimeConfig } from "nuxt/app";

export const useFirebaseApp = (): FirebaseApp => {
  const config = useRuntimeConfig();
  let app: FirebaseApp;
  if (!getApps().length) {
    app = initializeApp({
      apiKey: config.public.FIREBASE_API_KEY as string,
      appId: config.public.FIREBASE_APP_ID as string,
      authDomain: config.public.FIREBASE_AUTH_DOMAIN as string,
      databaseURL: config.public.FIREBASE_DATABASE_URL as string,
      measurementId: config.public.FIREBASE_MEASUREMENT_ID as string,
      messagingSenderId: config.public.FIREBASE_MESSAGING_SENDER_ID as string,
      projectId: config.public.FIREBASE_PROJECT_ID as string,
      storageBucket: config.public.FIREBASE_STORAGE_BUCKET as string,
    });
  } else {
    app = getApps()[0];
  }
  return app;
};
