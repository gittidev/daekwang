import glsl from "vite-plugin-glsl";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      kakaoApiKey: process.env.KAKAO_API_KEY,
      apiUrl: process.env.API_URL,
      FIREBASE_API_KEY: process.env.NUXT_PUBLIC_FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      FIREBASE_DATABASE_URL: process.env.NUXT_PUBLIC_FIREBASE_DATABASE_URL,
      FIREBASE_PROJECT_ID: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID:
        process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.NUXT_PUBLIC_FIREBASE_APP_ID,
      FIREBASE_MEASUREMENT_ID: process.env.NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    },
  },

  app: {
    head: {
      title: "대광 PC",
      meta: [
        { name: "대광 PC", content: "광주/전남 PrecastConcreate 설치전문" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-96x96.png",
          sizes: "96x96",
        },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    },
  },

  devtools: { enabled: false },

  modules: [
    "vuetify-nuxt-module",
    "nuxt-mdi",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/tailwindcss",
    "@tresjs/nuxt",
    "@nuxt/devtools",
    "@vueuse/nuxt",
    "@sidebase/nuxt-pdf",
  ],

  plugins: [],
  css: ["~/assets/scss/global.scss"],
  compatibilityDate: "2025-02-24",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {},
      },
    },
    plugins: [
      glsl({
        defaultExtension: "glsl",
        include: ["**/*.glsl", "**/*.frag", "**/*.vert"],
      }),
    ],
  },
});
