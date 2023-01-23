// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Guillaume Duhan, CTO & Front-end Developer",
      meta: [
        // <meta name="description" content="My amazing site">
        {
          name: "description",
          content: "Guillaume Duhan is a front-end developer, CTO & author.",
        },
      ],
    },
  },
  extends: "content-wind",
  content: {
    highlight: {
      theme: "one-dark-pro",
    },
  },
  css: ["@/assets/main.scss"],
});
