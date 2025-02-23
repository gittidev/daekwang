// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: ["vuetify-nuxt-module", "nuxt-mdi", "@nuxt/image"],
  vuetify: {
    moduleOptions: {},
    vuetifyOptions: {},
  },
  alias: {
    "@": resolve(__dirname, "src"),
  },
  plugins: [],
  css: ["~/assets/css/theme.css"],
});
