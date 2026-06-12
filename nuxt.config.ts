export default defineNuxtConfig({
  compatibilityDate: '2026-06-12',
  devtools: { enabled: false },
  ssr: true,
  app: {
    head: {
      titleTemplate: '%s'
    }
  },
  css: ['~/assets/css/main.css'],
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  routeRules: {
    '/': { prerender: true }
  }
})
