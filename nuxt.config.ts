// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
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
      script: [
        {
          src: `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NUXT_PUBLIC_KAKAO_API_KEY}&libraries=services&autoload=false`,
        },
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
  css: ["~/assets/css/theme.css", "~/assets/css/global.css"],
  compatibilityDate: "2025-02-24",
});
