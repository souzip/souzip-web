<template>
  <div class="min-h-screen bg-white">
    <section class="relative min-h-[95vh] flex items-center justify-center px-4 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-20 right-20 w-96 h-96 bg-yellow-50 rounded-full blur-3xl opacity-40"></div>
        <div class="absolute bottom-20 left-20 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-40"></div>
      </div>
      
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div class="relative w-full max-w-6xl h-full">
          <div class="absolute top-20 left-8 md:left-20 w-20 h-20 md:w-32 md:h-32 character-walk-right">
            <img src="../public/1.svg" alt="캐릭터 1" class="w-full h-full object-contain" />
          </div>
          
          <div class="absolute top-24 right-8 md:right-20 w-16 h-16 md:w-28 md:h-28 character-walk-left" style="animation-delay: 0.5s">
            <img src="../public/2.svg" alt="캐릭터 2" class="w-full h-full object-contain" />
          </div>
          
          <div class="absolute bottom-32 left-8 md:left-20 w-20 h-20 md:w-36 md:h-36 character-walk-right" style="animation-delay: 1s">
            <img src="../public/3.svg" alt="캐릭터 3" class="w-full h-full object-contain" />
          </div>
          
          <div class="absolute bottom-28 right-8 md:right-20 w-20 h-20 md:w-32 md:h-32 character-walk-left" style="animation-delay: 1.5s">
            <img src="../public/4.svg" alt="캐릭터 4" class="w-full h-full object-contain" />
          </div>
        </div>
      </div>
      
      <div class="max-w-6xl mx-auto text-center">
        <div class="mb-8">
          <h1 class="text-3xl md:text-6xl font-bold tracking-tight text-gray-900">
            여행 기념품 정보는 <span class="text-yellow-400">수집</span>에서!
          </h1>
        </div>
        
        <p class="text-1xl md:text-4xl text-gray-600 max-w-2xl mx-auto">
          위치 기반 여행 기념품 모음집, <span class="text-yellow-400 font-semibold">sou.zip!</span>
        </p>
      </div>
      
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div class="flex flex-col items-center text-gray-400 animate-bounce">
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
          <span class="text-yellow-400">추억은 계속됩니다</span>
        </h3>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-3xl transition-shadow">
            <div class="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h4 class="text-xl font-bold mb-3">기념품 정보</h4>
            <p class="text-gray-600">
              실제로 다녀와본 사람들이<br />
              알려주는 특별한 기념품 정보
            </p>
          </div>
          
          <div class="bg-white p-8 rounded-3xl transition-shadow">
            <div class="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
              </svg>
            </div>
            <h4 class="text-xl font-bold mb-3">기념품 추천</h4>
            <p class="text-gray-600">
              여행지와 취향에 맞는 <br />
              딱 맞는 기념품을 찾아드려요
            </p>
          </div>
          
          <div class="bg-white p-8 rounded-3xl transition-shadow">
            <div class="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
              </svg>
            </div>
            <h4 class="text-xl font-bold mb-3">기념품 컬렉션</h4>
            <p class="text-gray-600">
              내가 모은 기념품을<br />
              한 번에 모아 보세요
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <section id="download" class="py-24 px-4 bg-white">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h3 class="text-3xl md:text-4xl font-bold mb-4">
            지금 바로 <span class="text-yellow-400">다운로드</span>하세요
          </h3>
          <p class="text-gray-600">
            여행의 순간을 특별하게 만들어줄 sou.zip을 만나보세요
          </p>
        </div>
        
        <div class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <!-- iOS 다운로드 -->
          <div class="flex flex-col items-center space-y-4">
            <a 
              :href="appStoreUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
            >
              <svg class="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              <div class="text-left">
                <div class="text-xs opacity-80">Download on the</div>
                <div class="text-xl font-semibold">App Store</div>
              </div>
            </a>
            <div class="bg-white p-4 rounded-2xl shadow-md w-full flex justify-center">
              <img 
                :src="appStoreQR" 
                alt="App Store QR Code" 
                class="w-48 h-48"
              />
            </div>
          </div>
          
          <!-- Android 다운로드 -->
          <div class="flex flex-col items-center space-y-4">
            <a 
              :href="playStoreUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-4 px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
            >
              <svg class="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div class="text-left">
                <div class="text-xs opacity-80">GET IT ON</div>
                <div class="text-xl font-semibold">Google Play</div>
              </div>
            </a>
            <div class="bg-white p-4 rounded-2xl shadow-md w-full flex justify-center">
              <img 
                :src="playStoreQR" 
                alt="Google Play QR Code" 
                class="w-48 h-48"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <div class="fixed bottom-0 left-0 right-0 flex justify-center pointer-events-none z-50 px-4 xl:px-0">
      <div class="max-w-6xl w-full">
        <Transition name="fade">
          <button
            v-show="showScrollTop"
            @click="scrollToTop"
            class="ml-auto mb-8 md:mb-16 lg:mb-16 w-12 h-12 bg-yellow-400 text-white rounded-full shadow-lg hover:bg-yellow-300 transition-all transform flex items-center justify-center pointer-events-auto"
            aria-label="맨 위로"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
            </svg>
          </button>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

useHead({
  title: 'sou.zip - 여행 기념품 추천 플랫폼',
  meta: [
    { name: 'description', content: '여행의 순간을 .zip으로, AI가 추천하는 완벽한 여행 기념품' }
  ]
})

// 스토어 링크
const appStoreUrl = 'https://apps.apple.com/kr/app/%EC%88%98%EC%A7%91-sou-zip-%ED%95%B4%EC%99%B8%EC%97%AC%ED%96%89-%EA%B8%B0%EB%85%90%ED%92%88-%EC%B6%94%EC%B2%9C/id6757256797'
const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.swyp.souzip&pcampaignid=web_share'

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)
const showScrollTop = ref(false)
const lastScrollY = ref(0)

// QR 코드 생성 (각 스토어로 직접 연결)
const appStoreQR = computed(() => {
  return `https://quickchart.io/qr?text=${encodeURIComponent(appStoreUrl)}&size=200`
})

const playStoreQR = computed(() => {
  return `https://quickchart.io/qr?text=${encodeURIComponent(playStoreUrl)}&size=200`
})

const formData = ref({
  email: '',
  name: '',
  destination: ''
})

const submitWaitlist = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    const response = await $fetch('/api/waitlist', {
      method: 'POST',
      body: formData.value
    })
    
    submitSuccess.value = true
    submitMessage.value = '신청이 완료되었습니다! 출시 소식을 보내드릴게요.'
    
    formData.value = { email: '', name: '', destination: '' }
    
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
    
  } catch (error) {
    submitSuccess.value = false
    submitMessage.value = '오류가 발생했습니다. 다시 시도해주세요.'
  } finally {
    isSubmitting.value = false
  }
}

const handleScroll = () => {
  const currentScrollY = window.scrollY
  
  if (currentScrollY > 300 && currentScrollY > lastScrollY.value) {
    showScrollTop.value = true
  } else {
    showScrollTop.value = false
  }
  
  lastScrollY.value = currentScrollY
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.character-walk-right {
  animation: walk-right 8s ease-in-out infinite;
}

.character-walk-left {
  animation: walk-left 8s ease-in-out infinite;
}

@keyframes walk-right {
  0%, 100% {
    transform: translateX(0) translateY(0) rotate(0deg);
  }
  25% {
    transform: translateX(15px) translateY(-8px) rotate(3deg);
  }
  50% {
    transform: translateX(30px) translateY(0) rotate(0deg);
  }
  75% {
    transform: translateX(15px) translateY(-8px) rotate(-3deg);
  }
}

@keyframes walk-left {
  0%, 100% {
    transform: translateX(0) translateY(0) rotate(0deg);
  }
  25% {
    transform: translateX(-15px) translateY(-8px) rotate(-3deg);
  }
  50% {
    transform: translateX(-30px) translateY(0) rotate(0deg);
  }
  75% {
    transform: translateX(-15px) translateY(-8px) rotate(3deg);
  }
}

.character-walk-right:hover,
.character-walk-left:hover {
  animation-play-state: paused;
}
</style>
