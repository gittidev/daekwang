import glsl from "vite-plugin-glsl";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devServer: {
    host: "0.0.0.0",
    port: 3000,
  },
  runtimeConfig: {
    public: {
      kakaoApiKey: process.env.KAKAO_API_KEY,
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
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
