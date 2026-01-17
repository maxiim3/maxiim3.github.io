// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-17',
  devtools: { enabled: true },

  // SPA Mode
  ssr: false,

  nitro: {
    preset: 'static',
  },

  app: {
    baseURL: '/',
    head: {
      htmlAttrs: { lang: 'fr' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      ],
    },
  },

  site: {
    url: 'https://maxiim3.github.io',
    name: 'Maxime Tamburrini - Développeur Front-End',
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/sitemap'],

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },

  sitemap: {
    strictNuxtContentPaths: true,
  },

  typescript: {
    strict: true,
  },
})
