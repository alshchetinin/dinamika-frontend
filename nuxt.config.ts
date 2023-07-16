export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%pageTitle %titleSeparator %siteName',
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://72d.ru',
      siteName: 'ДИНАМИКА',
      siteDescription:
        'Команда, объединившая ведущих производителей кабельно-проводниковой, кабеленесущих систем и эстакад для реализации сложных электротехнических проектов в нефтегазовой сфере',
      language: 'ru', // prefer more explicit language codes like `en-AU` over `en`
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-headlessui',
    '@nuxtjs/strapi',
    '@nuxt/content',
    'tailwind-svg-icon',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-swiper',
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
  extends: ['nuxt-seo-kit'],

  googleFonts: {
    families: {
      Montserrat: [400, 500, 600, 700, 800, 900],
    },
  },

  build: {
    transpile: ['vue-toastification'],
  },

  plugins: ['~/plugins/vue-final-modal.ts', '~/plugins/maska.ts', '~/plugins/yandex-map.client.js', '~/plugins/vue-toastificaton.client.js'],
})
