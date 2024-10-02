// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    baseURL: "/portfolio/", // baseURL: '/<repository>/'
    buildAssetsDir: "assets",
  },
  plugins: [
    "~/plugins/gsap.js", // Register the GSAP plugin
  ],
});
