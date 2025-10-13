import { computed } from 'vue'
import { useThemeStore } from '../stores/useThemeStore'

export function useTheme() {
  const themeStore = useThemeStore()

  const toggleTheme = () => {
    const newTheme = themeStore.isDark ? 'light' : 'dark'
    themeStore.setTheme(newTheme)
  }

  return {
    currentTheme: computed(() => themeStore.currentTheme),
    isDark: computed(() => themeStore.isDark),
    toggleTheme
  }
}
