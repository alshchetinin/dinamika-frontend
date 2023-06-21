export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-headlessui',
    '@nuxtjs/strapi',
    '@nuxt/content',
    'tailwind-svg-icon',
    '@nuxtjs/google-fonts',
  ],
  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
  },
  strapi: {
    url: process.env.STRAPI_URL || 'http://localhost:1337',
    prefix: '/api',
    version: 'v4',
    cookie: {},
    cookieName: 'strapi_jwt',
  },
  imports: {
    dirs: ['stores'],
  },
  css: ['vue-final-modal/style.css'],
  googleFonts: {
    families: {
      Montserrat: [400, 500, 600, 700, 800, 900],
    },
  },
})
