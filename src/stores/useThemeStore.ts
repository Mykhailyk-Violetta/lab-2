import { defineStore } from 'pinia'
import { themeService, type Theme } from '../services/themeService'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    currentTheme: themeService.getInitialTheme() as Theme
  }),
  getters: {
    isDark: (state) => state.currentTheme === 'dark'
  },
  actions: {
    setTheme(theme: Theme) {
      this.currentTheme = theme
      themeService.applyTheme(theme)
    }
  }
})
