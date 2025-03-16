import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      kakaoApiKey: process.env.KAKAO_API_KEY,
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

  devtools: { enabled: true },

  modules: [
    "vuetify-nuxt-module",
    "nuxt-mdi",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxtjs/tailwindcss",
  ],

  vuetify: {
    moduleOptions: {},
    vuetifyOptions: {},
  },

  plugins: [],
  css: ["~/assets/css/global.css"],
  compatibilityDate: "2025-02-24",
});
