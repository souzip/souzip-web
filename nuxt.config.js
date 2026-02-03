// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    'nuxt-gtag'
  ],
  
  gtag: {
    id: 'G-KBK1GK0DMM'
  },
  
  site: {
    url: 'https://souzip.com',
    name: 'sou.zip',
    description: '여행의 순간을 선물로, AI가 추천하는 여행 기념품',
    defaultLocale: 'ko',
    trailingSlash: false
  },
  
  sitemap: {
    strictNuxtContentPaths: true,
    enabled: true,
    hostname: 'https://souzip.com',
    gzip: true,
    exclude: [],
    routes: [
      '/',
      '/privacy',
      '/terms',
      '/location-terms',
      '/marketing-terms'
    ]
  },
  
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://souzip.com/sitemap.xml'
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
        { name: 'description', content: '여행의 순간을 .zip으로, AI가 여행지별 맞춤 기념품을 추천해드립니다. 특별한 여행의 추억을 소중한 사람에게 선물하세요.' },
        {
          name: 'keywords',
          content: '여행, 여행 기념품, 기념품, 기념품 추천, 여행 선물, 선물 추천, AI 추천, 맞춤 선물, 해외 쇼핑, 여행 쇼핑, 해외여행, 국내여행, 여행지 추천, 여행 기록, 여행 앱, 여행 플랫폼, 여행 사진, 여행 추억, 선물하기, 특별한 선물, 의미있는 선물, 개인 맞춤 선물, 여행 코스, 여행 정보, souzip, sou.zip, 소우집, 여행지별 기념품, 로컬 기념품, 현지 기념품, 여행 스타일, 여행 취향, AI 쇼핑, 스마트 쇼핑, 선물 고르기, 기념품 고르기, 여행 준비, 여행 계획, 여행 가이드, 여행 팁, 해외 기념품, 국내 기념품, 지역 특산품, 여행 문화, 여행 트렌드'
        },
        { name: 'author', content: 'sou.zip' },
        { property: 'og:title', content: 'sou.zip - 여행 기념품 추천 플랫폼' },
        { property: 'og:description', content: '여행의 순간을 .zip으로, AI가 추천하는 여행 기념품' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://souzip.com' },
        { property: 'og:site_name', content: 'sou.zip' },
        { property: 'og:locale', content: 'ko_KR' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#FACC15' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'sou.zip' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'sou.zip - 여행 기념품 추천 플랫폼' },
        { name: 'twitter:description', content: '여행의 순간을 .zip으로, AI가 추천하는 여행 기념품' },
        { name: 'twitter:site', content: '@souzip' },
        // 네이버 블로그 최적화
        { property: 'og:article:author', content: 'sou.zip' },
        // 구조화된 데이터를 위한 추가 정보
        { name: 'application-name', content: 'sou.zip' },
        { name: 'mobile-web-app-capable', content: 'yes' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://souzip.com' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/manifest.json' }
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MobileApplication',
            'name': 'sou.zip',
            'description': '여행의 순간을 선물로, AI가 추천하는 여행 기념품',
            'applicationCategory': 'TravelApplication',
            'operatingSystem': 'iOS, Android',
            'offers': {
              '@type': 'Offer',
              'price': '0',
              'priceCurrency': 'KRW'
            },
            'aggregateRating': {
              '@type': 'AggregateRating',
              'ratingValue': '5.0',
              'ratingCount': '1'
            }
          })
        },
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            'name': 'sou.zip',
            'url': 'https://souzip.com',
            'logo': 'https://souzip.com/logo.png',
            'sameAs': [
              'https://www.instagram.com/sou.zip.app',
              'https://www.threads.com/@sou.zip.app'
            ]
          })
        }
      ]
    }
  }
})
