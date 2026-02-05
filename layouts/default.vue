<template>
  <div>
    <Header />
    <main class="pt-16">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
// 다크모드 초기화
if (process.client) {
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark')
  }
}
</script>
