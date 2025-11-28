// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo'
  ],

  site: {
    url: 'https://souzip.com',
    name: 'sou.zip',
    description: '여행의 순간을 선물로, AI가 추천하는 여행 기념품',
    defaultLocale: 'ko'
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'ko'
      },
      title: 'sou.zip - 여행 기념품 추천 플랫폼',
      meta: [
        { name: 'description', content: '여행의 순간을 .zip으로, AI가 추천하는 여행 기념품' },
        { name: 'keywords', content: '여행, 기념품, 선물, 추천, AI, 쇼핑, souzip' },
        { property: 'og:title', content: 'sou.zip - 여행 기념품 추천 플랫폼' },
        { property: 'og:description', content: '여행의 순간을 .zip으로, AI가 추천하는 여행 기념품' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://souzip.com' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
