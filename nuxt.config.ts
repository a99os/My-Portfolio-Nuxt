import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/main.css", "boxicons/css/boxicons.min.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxtjs/i18n"],
  //   buildModules: ["@nuxtjs/google-analytics"],
  //   googleAnalytics: {
  //     id: "G-WPLCDGNRP4", // Use as fallback if no runtime config is provided
  //   },
  //   publicRuntimeConfig: {
  //     googleAnalytics: {
  //       id: "G-WPLCDGNRP4",
  //     },
  //   },
  // i18n: {
  //   vueI18n: "./i18n.config.ts", // if you are using custom path, default
  // },
});
