// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-17',
  devtools: { enabled: true },

  // Static Site Generation
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },

  // GitHub Pages base URL
  app: {
    baseURL: '/curriculum/',
    head: {
      htmlAttrs: { lang: 'fr' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/curriculum/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/curriculum/apple-touch-icon.png' },
        { rel: 'canonical', href: 'https://maxi.github.io/curriculum/' },
      ],
    },
  },

  site: {
    url: 'https://maxi.github.io',
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
