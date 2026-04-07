<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <!-- Hero Section -->
    <section class="pt-32 pb-16 px-4 bg-gradient-to-b from-orange-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          <span style="color: #FF6640;">미디어 소개</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          sou.zip이 소개된 다양한 미디어와 플랫폼을 확인해보세요
        </p>
      </div>
    </section>

    <!-- Press Cards Section -->
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-stretch">
          <a
              v-for="item in pressItems"
              :key="item.id"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              class="group bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden flex flex-col h-full"
          >
            <!-- Thumbnail -->
            <div
                class="relative h-48 overflow-hidden flex items-center justify-center"
                :class="item.platform === 'Instagram' ? 'bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100' : 'bg-gradient-to-br from-orange-100 to-orange-50'"
            >
              <template v-if="item.platform === 'Instagram'">
                <svg class="w-20 h-20 text-white opacity-90" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </template>
              <template v-else-if="item.thumbnail">
                <img
                    :src="item.thumbnail"
                    :alt="item.title"
                    class="w-full h-full object-cover"
                />
              </template>
              <template v-else>
                <svg v-if="item.platform === 'Blog'" class="w-16 h-16" style="color: #FF6640;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                </svg>
                <svg v-else class="w-16 h-16" style="color: #FF6640;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
              </template>

              <!-- Platform Badge -->
              <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                <span>{{ item.platform }}</span>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6 flex flex-col flex-1">
              <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">{{ item.date }}</div>
              <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white transition-colors line-clamp-2 h-14" style="--hover-color: #FF6640;" @mouseover="$event.target.style.color='var(--hover-color)'" @mouseout="$event.target.style.color=''">
                {{ item.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
                {{ item.description }}
              </p>
              <div class="flex items-center font-medium text-sm mt-auto" style="color: #FF6640;">
                자세히 보기
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </a>
        </div>

        <!-- Empty State -->
        <div v-if="pressItems.length === 0" class="text-center py-16">
          <div class="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6" style="background-color: #FFF3F0;">
            <svg class="w-12 h-12" style="color: #FF6640;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">곧 업데이트 예정입니다</h3>
          <p class="text-gray-600 dark:text-gray-300">sou.zip의 미디어 소개를 준비중입니다</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 언론 보도 데이터
const pressItems = ref([
  {
    id: 3,
    platform: 'Blog',
    title: '기획·디자인·개발이 함께 만든 서비스, 수집 팀의 성장 스토리',
    description: '스위프 앱 3기 대상을 수상한 수집 팀이 여행 기념품 경험에서 출발한 아이디어를 실제 서비스로 만들어낸 과정과 팀의 성장 스토리를 담았습니다.',
    date: '2026.03.13',
    url: 'https://blog.swyp.im/building-a-real-service-together/',
    thumbnail: 'https://storage.ghost.io/c/eb/a6/eba6f764-3d28-44c8-a4d3-a9085e76e6db/content/images/size/w1200/2026/03/swyp_project_souzip_thumbnail-2.png'
  },
  {
    id: 2,
    platform: 'Blog',
    title: '해외 여행 기념품을 정리해주는 앱 🗂️',
    description: '수집은 해외여행에서 누구나 한 번쯤 겪는 고민, "이 나라에 왔으면 뭘 사야 하지?"라는 질문에서 출발한 서비스입니다.',
    date: '2026.02.04',
    url: 'https://uibowl.io/self-contents/cml7lmazi0006ib04bk1rcppz',
    thumbnail: 'https://boldy.s3.ap-northeast-2.amazonaws.com/article/d25d853b-dbec-47d5-99c4-54b61234bb21/400x400bb-75.webp'
  },
  {
    id: 1,
    platform: 'Instagram',
    title: '너 아직도 여행가서 냉장고 자석만 사오니? ✈️',
    description: '\'수집\'은 해외여행 중 내 위치와 동선에 맞춰 기념품을 발견하고 그 기념품을 통해 여행의 기억을 남길 수 있도록 돕는 서비스입니다.',
    date: '2026.01.31',
    url: 'https://www.instagram.com/p/DUH9VMmAV3b/',
    thumbnail: null
  },
])
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>