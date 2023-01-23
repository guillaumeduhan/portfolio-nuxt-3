// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: "content-wind",
  content: {
    highlight: {
      theme: "one-dark-pro",
    },
  },
  css: ["@/assets/main.scss"],
});
