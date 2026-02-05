  <template>
    <header class="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50">
      <nav class="max-w-6xl mx-auto py-4 px-4 flex justify-between items-center">
        <NuxtLink to="/" class="hover:opacity-80 transition-opacity">
          <img
            src="../public/sou.zip.png"
            alt="sou.zip"
            class="h-10 sm:h-12 lg:h-16 w-auto"
          />
        </NuxtLink>
        
        <div class="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
          <a href="/#features" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            기능
          </a>
          <a href="/#download" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            다운로드
          </a>
          <NuxtLink to="/press" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            미디어 소개
          </NuxtLink>
        </div>
        
        <div class="hidden md:block">
          <button
            @click="toggleDark"
            class="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="테마 변경"
          >
            <svg v-if="!isDark" class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
            <svg v-else class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          </button>
        </div>
        
        <div class="flex md:hidden items-center gap-2">
          <button
            @click="toggleDark"
            class="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="테마 변경"
          >
            <svg v-if="!isDark" class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
            <svg v-else class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          </button>
          <button
            class="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            @click="mobileMenuOpen = !mobileMenuOpen"
            aria-label="메뉴"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg v-else class="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </nav>
      
      <transition
        enter-active-class="transition ease-out duration-200"
        enter-from-class="opacity-0 -translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-1"
      >
        <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <div class="px-4 py-4 space-y-4">
            <a
              href="/#features"
              class="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2"
              @click="mobileMenuOpen = false"
            >
              기능
            </a>
            <NuxtLink
              to="/press"
              class="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2"
              @click="mobileMenuOpen = false"
            >
              미디어 소개
            </NuxtLink>
            <a
              href="/#download"
              class="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white py-2"
              @click="mobileMenuOpen = false"
            >
              다운로드
            </a>
          </div>
        </div>
      </transition>
    </header>
  </template>
  
  <script setup>
  const { isDark, toggleDark } = useDarkMode()
  const mobileMenuOpen = ref(false)
  
  if (process.client) {
    watch(() => mobileMenuOpen.value, (newVal) => {
      if (newVal) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    })
  }
  
  onUnmounted(() => {
    if (process.client) {
      document.body.style.overflow = ''
    }
  })
  </script>
