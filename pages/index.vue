<template>
  <div class="min-h-screen bg-white">
    <section class="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-20 right-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
        <div class="absolute bottom-20 left-20 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div class="max-w-6xl mx-auto text-center">
        <div class="mb-8">
          <h1 class="text-7xl md:text-8xl font-bold tracking-tight">
            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              sou.zip
            </span>
          </h1>
        </div>

        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          여행의 순간을<br />
          <span class="text-blue-600">.zip</span>으로
        </h2>

        <div class="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-full">
          <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span class="text-sm font-medium text-gray-700">곧 출시됩니다</span>
        </div>
      </div>

      <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div class="flex flex-col items-center gap-2 text-gray-400 animate-bounce">
          <span class="text-sm">Scroll</span>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </section>

    <section id="features" class="py-24 px-4 bg-gray-50">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-3xl md:text-4xl font-bold text-center mb-16">
          여행이 끝나도<br />
          <span class="text-blue-600">추억은 계속됩니다</span>
        </h3>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-3xl hover:shadow-xl transition-shadow">
            <div class="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h4 class="text-xl font-bold mb-3">AI 추천</h4>
            <p class="text-gray-600">
              여행지와 취향에 맞는<br />
              완벽한 기념품을 찾아드려요
            </p>
          </div>

          <div class="bg-white p-8 rounded-3xl hover:shadow-xl transition-shadow">
            <div class="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
              </svg>
            </div>
            <h4 class="text-xl font-bold mb-3">현지 기념품</h4>
            <p class="text-gray-600">
              진짜 로컬만 아는<br />
              특별한 기념품 정보
            </p>
          </div>

          <div class="bg-white p-8 rounded-3xl hover:shadow-xl transition-shadow">
            <div class="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
              </svg>
            </div>
            <h4 class="text-xl font-bold mb-3">선물 가이드</h4>
            <p class="text-gray-600">
              누구에게 무엇을 선물할지<br />
              고민 끝
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'sou.zip - 여행 기념품 추천 플랫폼',
  meta: [
    { name: 'description', content: '여행의 순간을 .zip으로, AI가 추천하는 완벽한 여행 기념품' }
  ]
})
</script>