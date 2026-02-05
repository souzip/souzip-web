export const useDarkMode = () => {
  const isDark = useState('isDark', () => false)

  // 클라이언트에서만 초기화
  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    isDark.value = savedTheme === 'dark' || (!savedTheme && prefersDark)
    
    // DOM에 즉시 적용
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  const toggleDark = () => {
    isDark.value = !isDark.value
    
    if (process.client) {
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
    isDark,
    toggleDark
  }
}
