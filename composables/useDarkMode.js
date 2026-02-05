export const useDarkMode = () => {
  // Nuxt의 useState 사용 (자동으로 import됨)
  const isDark = useState('isDark', () => false)

  // 클라이언트에서만 실행
  if (process.client) {
    // 초기화
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    isDark.value = savedTheme === 'dark' || (!savedTheme && prefersDark)
    
    // DOM에 즉시 적용
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const toggleDark = () => {
    isDark.value = !isDark.value
    
    if (process.client) {
      console.log('Toggle dark mode to:', isDark.value) // 디버깅용
      
      if (isDark.value) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    }
  }

  return {
    isDark: readonly(isDark),
    toggleDark
  }
}
