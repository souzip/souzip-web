<template>
  <div class="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50 flex items-center justify-center px-4">
    <div class="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
      <div class="mb-6">
        <img
          src="../public/sou.zip.png"
          alt="sou.zip"
          class="h-16 w-auto mx-auto"
        />
      </div>
      
      <h1 class="text-2xl font-bold text-gray-900 mb-2">
        sou.zip 다운로드
      </h1>
      <p class="text-gray-600 mb-8">
        여행 기념품 추천 플랫폼
      </p>
      
      <div v-if="isRedirecting" class="space-y-4">
        <div class="flex justify-center">
          <div class="animate-spin rounded-full h-12 w-12 border-4 border-yellow-400 border-t-transparent"></div>
        </div>
        <p class="text-gray-600">스토어로 이동 중...</p>
      </div>
      
      <div v-else class="space-y-4">
        <a 
          :href="appStoreUrl"
          target="_blank"
          class="flex items-center justify-center gap-4 px-6 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl w-full"
        >
          <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
          </svg>
          <div class="text-left">
            <div class="text-xs opacity-80">Download on the</div>
            <div class="text-lg font-semibold">App Store</div>
          </div>
        </a>
        
        <a 
          :href="playStoreUrl"
          target="_blank"
          class="flex items-center justify-center gap-4 px-6 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl w-full"
        >
          <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
          </svg>
          <div class="text-left">
            <div class="text-xs opacity-80">GET IT ON</div>
            <div class="text-lg font-semibold">Google Play</div>
          </div>
        </a>
        
        <div class="pt-4">
          <NuxtLink 
            to="/"
            class="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← 홈으로 돌아가기
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

useHead({
  title: 'sou.zip 다운로드 - 여행 기념품 추천 플랫폼',
  meta: [
    { name: 'description', content: 'sou.zip 앱을 다운로드하고 여행 기념품 추천을 받아보세요' }
  ]
})

// 실제 스토어 링크
const appStoreUrl = 'https://apps.apple.com/kr/app/%EC%88%98%EC%A7%91-sou-zip-%ED%95%B4%EC%99%B8%EC%97%AC%ED%96%89-%EA%B8%B0%EB%85%90%ED%92%88-%EC%B6%94%EC%B2%9C/id6757256797'
const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.swyp.souzip&pcampaignid=web_share'

const isRedirecting = ref(false)

// 디바이스 감지 및 자동 리디렉션
const detectAndRedirect = () => {
  if (!process.client) return
  
  const userAgent = navigator.userAgent || navigator.vendor || window.opera
  
  // iOS 감지
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    isRedirecting.value = true
    setTimeout(() => {
      window.location.href = appStoreUrl
    }, 1000)
    return
  }
  
  // Android 감지
  if (/android/i.test(userAgent)) {
    isRedirecting.value = true
    setTimeout(() => {
      window.location.href = playStoreUrl
    }, 1000)
    return
  }
  
  // 데스크톱이나 기타 디바이스는 선택 화면 표시
}

onMounted(() => {
  detectAndRedirect()
})
</script>
