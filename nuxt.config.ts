// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // @ts-ignore
  css: [
      '~/assets/main.css',
      '@splidejs/vue-splide/css/skyblue'
  ],
  modules: ['nuxt-lazy-load'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
