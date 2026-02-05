<template>
  <div class="fixed bottom-0 left-0 right-0 flex justify-center pointer-events-none z-50 px-4 xl:px-0">
    <div class="max-w-6xl w-full">
      <Transition name="fade">
        <button
          v-show="showScrollTop"
          @click="scrollToTop"
          class="ml-auto mb-12 md:mb-16 lg:mb-20 w-12 h-12 rounded-full shadow-lg transition-all transform flex items-center justify-center pointer-events-auto"
          style="background-color: #FF6640; color: white;"
          aria-label="맨 위로"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
          </svg>
        </button>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showScrollTop = ref(false)
const lastScrollY = ref(0)

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
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
