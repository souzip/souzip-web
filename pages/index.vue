<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <section class="relative min-h-[95vh] flex items-center justify-center px-4 overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute top-20 right-20 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-40"></div>
        <div class="absolute bottom-20 left-20 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-40"></div>
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
          <h1 class="text-3xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            여행 기념품 정보는 <span style="color: #FF6640;">수집</span>에서!
          </h1>
        </div>
        
        <p class="text-1xl md:text-4xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          위치 기반 여행 기념품 모음집, <span style="color: #FF6640;" class="font-semibold">sou.zip!</span>
        </p>
      </div>
      
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div class="flex flex-col items-center text-gray-400 dark:text-gray-500 animate-bounce">
          <span class="text-sm">Scroll</span>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </section>
    
    <section id="features" class="py-24 px-4 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-6xl mx-auto">
        <h3 class="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          여행이 끝나도<br />
          <span style="color: #FF6640;">추억은 계속됩니다</span>
        </h3>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-gray-900 p-8 rounded-3xl transition-shadow">
            <div class="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7" style="color: #FF6640;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h4 class="text-xl font-bold mb-3 dark:text-white">기념품 정보</h4>
            <p class="text-gray-600 dark:text-gray-300">
              실제로 다녀와본 사람들이<br />
              알려주는 특별한 기념품 정보
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-900 p-8 rounded-3xl transition-shadow">
            <div class="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7" style="color: #FF6640;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
              </svg>
            </div>
            <h4 class="text-xl font-bold mb-3 dark:text-white">기념품 추천</h4>
            <p class="text-gray-600 dark:text-gray-300">
              여행지와 취향에 맞는 <br />
              딱 맞는 기념품을 찾아드려요
            </p>
          </div>
          
          <div class="bg-white dark:bg-gray-900 p-8 rounded-3xl transition-shadow">
            <div class="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-7 h-7" style="color: #FF6640;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
              </svg>
            </div>
            <h4 class="text-xl font-bold mb-3 dark:text-white">기념품 컬렉션</h4>
            <p class="text-gray-600 dark:text-gray-300">
              내가 모은 기념품을<br />
              한 번에 모아 보세요
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="py-24 px-4 bg-white dark:bg-gray-900">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h3 class="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            지금까지 <span style="color: #FF6640;">sou.zip</span>과 함께
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            전 세계 여행자들이 함께 만들어가는 기념품 이야기
          </p>
        </div>
        
        <div ref="statsSection" class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div class="flex flex-col items-center justify-center p-6 rounded-2xl transition-colors">
            <div class="text-5xl md:text-6xl font-bold mb-3 text-center" style="color: #FF6640;">{{ formatNumber(animatedCountries) }}<span style="position: relative; top: -0.3rem;">+</span></div>
            <div class="text-gray-700 dark:text-gray-300 font-semibold text-base md:text-lg">국가</div>
          </div>
          <div class="flex flex-col items-center justify-center p-6 rounded-2xl transition-colors">
            <div class="text-5xl md:text-6xl font-bold mb-3 text-center" style="color: #FF6640;">{{ formatNumber(animatedCities) }}<span style="position: relative; top: -0.3rem;">+</span></div>
            <div class="text-gray-700 dark:text-gray-300 font-semibold text-base md:text-lg">도시</div>
          </div>
          <div class="flex flex-col items-center justify-center p-6 rounded-2xl transition-colors">
            <div class="text-5xl md:text-6xl font-bold mb-3 text-center" style="color: #FF6640;">{{ formatNumber(animatedSouvenirs) }}<span style="position: relative; top: -0.3rem;">+</span></div>
            <div class="text-gray-700 dark:text-gray-300 font-semibold text-base md:text-lg">기념품 정보</div>
          </div>
          <div class="flex flex-col items-center justify-center p-6 rounded-2xl transition-colors">
            <div class="text-5xl md:text-6xl font-bold mb-3 text-center" style="color: #FF6640;">{{ formatNumber(animatedUsers) }}<span style="position: relative; top: -0.3rem;">+</span></div>
            <div class="text-gray-700 dark:text-gray-300 font-semibold text-base md:text-lg">활성 사용자</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 미디어 소개 섹션 -->
    <section class="py-24 px-4 bg-white dark:bg-gray-900">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h3 class="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            미디어에 소개된 <span style="color: #FF6640;">sou.zip</span>
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            다양한 미디어에서 주목하는 새로운 여행 경험
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          <!-- 인스타그램 소개 -->
          <a
            href="https://www.instagram.com/p/DUH9VMmAV3b/"
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden"
          >
            <div class="relative h-48 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 overflow-hidden flex items-center justify-center">
              <svg class="w-20 h-20 text-white opacity-90" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold">
                Instagram
              </div>
            </div>
            <div class="p-6">
              <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">2026.01.31</div>
              <h4 class="text-xl font-bold mb-2 text-gray-900 dark:text-white transition-colors" style="--hover-color: #FF6640;" onmouseover="this.style.color='var(--hover-color)'" onmouseout="this.style.color=''">
                너 아직도 여행가서 냉장고 자석만 사오니? ✈️
              </h4>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                '수집'은 해외여행 중 내 위치와 동선에 맞춰 기념품을 발견하고 그 기념품을 통해 여행의 기억을 남길 수 있도록 돕는 서비스입니다.
              </p>
              <div class="flex items-center font-medium text-sm" style="color: #FF6640;">
                자세히 보기
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </a>

          <!-- 블로그 소개 -->
          <a
            href="https://uibowl.io/self-contents/cml7lmazi0006ib04bk1rcppz"
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden"
          >
            <div class="relative h-48 bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden flex items-center justify-center">
              <img
                src="https://boldy.s3.ap-northeast-2.amazonaws.com/article/d25d853b-dbec-47d5-99c4-54b61234bb21/400x400bb-75.webp"
                alt="해외 여행 기념품 앱"
                class="w-full h-full object-cover"
              />
              <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold">
                Blog
              </div>
            </div>
            <div class="p-6">
              <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">2026.02.04</div>
              <h4 class="text-xl font-bold mb-2 text-gray-900 dark:text-white transition-colors" style="--hover-color: #FF6640;" onmouseover="this.style.color='var(--hover-color)'" onmouseout="this.style.color=''">
                해외 여행 기념품을 정리해주는 앱 🗂️
              </h4>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                수집은 해외여행에서 누구나 한 번쯤 겪는 고민, "이 나라에 왔으면 뭘 사야 하지?"라는 질문에서 출발한 서비스입니다.
              </p>
              <div class="flex items-center font-medium text-sm" style="color: #FF6640;">
                자세히 보기
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
        
        <div class="text-center">
          <NuxtLink 
            to="/press" 
            class="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all hover:shadow-lg"
            style="background-color: #FF6640; color: white;"
            @mouseover="(e) => e.target.style.backgroundColor = '#FF7F5C'"
            @mouseout="(e) => e.target.style.backgroundColor = '#FF6640'"
          >
            <span>미디어 소개 더 보기</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
    
    <section id="download" class="py-24 px-4 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h3 class="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            지금 바로 <span style="color: #FF6640;">다운로드</span>하세요
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
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
              class="flex items-center gap-4 px-8 py-4 bg-black text-white rounded-xl shadow-lg"
            >
              <svg class="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              <div class="text-left">
                <div class="text-xs opacity-80">Download on the</div>
                <div class="text-xl font-semibold">App Store</div>
              </div>
            </a>
            <div class="bg-white dark:bg-gray-700 p-4 rounded-2xl shadow-md w-full flex justify-center">
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
              class="flex items-center gap-4 px-8 py-4 bg-black text-white rounded-xl shadow-lg"
            >
              <svg class="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div class="text-left">
                <div class="text-xs opacity-80">GET IT ON</div>
                <div class="text-xl font-semibold">Google Play</div>
              </div>
            </a>
            <div class="bg-white dark:bg-gray-700 p-4 rounded-2xl shadow-md w-full flex justify-center">
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
    
    <!-- FAQ 섹션 -->
    <section id="faq" class="py-24 px-4 bg-white dark:bg-gray-900">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <h3 class="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            자주 묻는 <span style="color: #FF6640;">질문</span>
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            sou.zip에 대해 궁금한 점이 있으신가요?
          </p>
        </div>
        
        <div class="space-y-4">
          <!-- FAQ 아이템 1 -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden">
            <button
              @click="toggleFaq(1)"
              class="w-full px-6 py-5 flex items-center justify-between"
            >
              <span class="text-lg font-semibold text-gray-900 dark:text-white text-left">회원가입이 필요한가요?</span>
              <svg
                class="w-6 h-6 transition-transform duration-300"
                :class="{ 'rotate-180': openFaq === 1 }"
                style="color: #FF6640;"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="overflow-hidden" style="transition: max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);" :style="{ maxHeight: openFaq === 1 ? '300px' : '0px', opacity: openFaq === 1 ? 1 : 0 }">
              <div class="px-6 pb-5">
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                  <strong class="text-gray-900 dark:text-white">안드로이드:</strong> 둘러보기 기능으로 회원가입 없이 일부 기능을 사용할 수 있습니다.<br>
                  <strong class="text-gray-900 dark:text-white">iOS:</strong> 회원가입이 필요합니다.<br><br>
                  소셜 로그인만 지원하며, <strong class="text-gray-900 dark:text-white">카카오, 구글, 애플</strong>로 간편하게 가입하실 수 있습니다. (안드로이드는 애플 로그인 미지원)<br>
                  기념품 저장, 여행 계획 등 모든 기능을 이용하시려면 로그인이 필요합니다.
                </p>
              </div>
            </div>
          </div>

          <!-- FAQ 아이템 2 -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden">
            <button
              @click="toggleFaq(2)"
              class="w-full px-6 py-5 flex items-center justify-between"
            >
              <span class="text-lg font-semibold text-gray-900 dark:text-white text-left">내 정보는 안전하게 보호되나요?</span>
              <svg
                class="w-6 h-6 transition-transform duration-300"
                :class="{ 'rotate-180': openFaq === 2 }"
                style="color: #FF6640;"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="overflow-hidden" style="transition: max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);" :style="{ maxHeight: openFaq === 2 ? '200px' : '0px', opacity: openFaq === 2 ? 1 : 0 }">
              <div class="px-6 pb-5">
                <p class="text-gray-600 dark:text-gray-300">
                  네, 모든 개인정보는 암호화되어 안전하게 저장되며, 관련 법령에 따라 철저히 보호됩니다. 위치 정보는 기념품 추천 용도로만 사용됩니다.
                </p>
              </div>
            </div>
          </div>

          <!-- FAQ 아이템 3 -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden">
            <button
              @click="toggleFaq(3)"
              class="w-full px-6 py-5 flex items-center justify-between"
            >
              <span class="text-lg font-semibold text-gray-900 dark:text-white text-left">어떤 국가를 지원하나요?</span>
              <svg
                class="w-6 h-6 transition-transform duration-300"
                :class="{ 'rotate-180': openFaq === 3 }"
                style="color: #FF6640;"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="overflow-hidden" style="transition: max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);" :style="{ maxHeight: openFaq === 3 ? '200px' : '0px', opacity: openFaq === 3 ? 1 : 0 }">
              <div class="px-6 pb-5">
                <p class="text-gray-600 dark:text-gray-300">
                  전 세계 100개 이상의 국가와 40,000개 이상의 도시 기념품 정보를 제공하고 있으며, 지속적으로 확대되고 있습니다.
                </p>
              </div>
            </div>
          </div>

          <!-- FAQ 아이템 4 -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden">
            <button
              @click="toggleFaq(4)"
              class="w-full px-6 py-5 flex items-center justify-between"
            >
              <span class="text-lg font-semibold text-gray-900 dark:text-white text-left">기념품 정보는 어떻게 수집되나요?</span>
              <svg
                class="w-6 h-6 transition-transform duration-300"
                :class="{ 'rotate-180': openFaq === 4 }"
                style="color: #FF6640;"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="overflow-hidden" style="transition: max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);" :style="{ maxHeight: openFaq === 4 ? '200px' : '0px', opacity: openFaq === 4 ? 1 : 0 }">
              <div class="px-6 pb-5">
                <p class="text-gray-600 dark:text-gray-300">
                  실제 여행자들이 공유한 정보와 현지 데이터를 기반으로 수집됩니다. 사용자 여러분도 여행 중 발견한 기념품을 공유하실 수 있습니다.
                </p>
              </div>
            </div>
          </div>

          <!-- FAQ 아이템 5 -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden">
            <button
              @click="toggleFaq(5)"
              class="w-full px-6 py-5 flex items-center justify-between"
            >
              <span class="text-lg font-semibold text-gray-900 dark:text-white text-left">기념품 추천은 어떻게 받나요?</span>
              <svg
                class="w-6 h-6 transition-transform duration-300"
                :class="{ 'rotate-180': openFaq === 5 }"
                style="color: #FF6640;"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="overflow-hidden" style="transition: max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);" :style="{ maxHeight: openFaq === 5 ? '200px' : '0px', opacity: openFaq === 5 ? 1 : 0 }">
              <div class="px-6 pb-5">
                <p class="text-gray-600 dark:text-gray-300">
                  AI 기반 맞춤 추천은 회원가입 후 이용하실 수 있습니다. 온보딩 과정에서 선호하는 카테고리를 선택하시면, 취향에 맞는 기념품을 추천해드립니다.
                </p>
              </div>
            </div>
          </div>

          <!-- FAQ 아이템 6 -->
          <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden">
            <button
              @click="toggleFaq(6)"
              class="w-full px-6 py-5 flex items-center justify-between"
            >
              <span class="text-lg font-semibold text-gray-900 dark:text-white text-left">여행 전에도 미리 기념품을 찾아볼 수 있나요?</span>
              <svg
                class="w-6 h-6 transition-transform duration-300"
                :class="{ 'rotate-180': openFaq === 6 }"
                style="color: #FF6640;"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="overflow-hidden" style="transition: max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);" :style="{ maxHeight: openFaq === 6 ? '200px' : '0px', opacity: openFaq === 6 ? 1 : 0 }">
              <div class="px-6 pb-5">
                <p class="text-gray-600 dark:text-gray-300">
                  네, 가능합니다! 여행지를 검색하시면 해당 지역에 등록된 다양한 기념품 정보를 미리 확인하고 계획을 세우실 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 추가 문의 -->
        <div class="mt-12 text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl">
          <h4 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">더 궁금한 점이 있으신가요?</h4>
          <p class="text-gray-600 dark:text-gray-300 mb-4">언제든지 문의해주세요!</p>
          <a
            href="mailto:team.sou.zip@gmail.com"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:shadow-lg"
            style="background-color: #FF6640; color: white;"
            @mouseover="(e) => e.target.style.backgroundColor = '#FF7F5C'"
            @mouseout="(e) => e.target.style.backgroundColor = '#FF6640'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span>이메일 문의하기</span>
          </a>
        </div>
      </div>
    </section>
    
    <ScrollToTop />
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

// FAQ
const openFaq = ref(null)

const toggleFaq = (id) => {
  openFaq.value = openFaq.value === id ? null : id
}

// 통계 숫자 애니메이션
const statsSection = ref(null)
const animatedUsers = ref(0)
const animatedSouvenirs = ref(0)
const animatedCountries = ref(0)
const animatedCities = ref(0)
const statsAnimated = ref(false)

const targetUsers = 100
const targetSouvenirs = 100
const targetCountries = 100
const targetCities = 40000

const formatNumber = (num) => {
  return Math.floor(num).toLocaleString('ko-KR')
}

const animateValue = (ref, start, end, duration) => {
  const startTime = performance.now()
  const range = end - start
  
  const step = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    const eased = 1 - (1 - progress) * (1 - progress)
    
    ref.value = start + (range * eased)
    
    if (progress < 1) {
      requestAnimationFrame(step)
    } else {
      ref.value = end
    }
  }
  
  requestAnimationFrame(step)
}

const startStatsAnimation = () => {
  if (statsAnimated.value) return
  
  statsAnimated.value = true
  animateValue(animatedUsers, 0, targetUsers, 2500)
  animateValue(animatedSouvenirs, 0, targetSouvenirs, 2500)
  animateValue(animatedCountries, 0, targetCountries, 2500)
  animateValue(animatedCities, 0, targetCities, 2500)
}

const appStoreQR = computed(() => {
  return `https://quickchart.io/qr?text=${encodeURIComponent(appStoreUrl)}&size=200`
})

const playStoreQR = computed(() => {
  return `https://quickchart.io/qr?text=${encodeURIComponent(playStoreUrl)}&size=200`
})

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !statsAnimated.value) {
          startStatsAnimation()
        }
      })
    },
    { threshold: 0.3 }
  )
  
  if (statsSection.value) {
    observer.observe(statsSection.value)
  }
})
</script>

<style scoped>
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

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
