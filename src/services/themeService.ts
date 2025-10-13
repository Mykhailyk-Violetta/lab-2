// Сервіс для керування темою застосунку

export type Theme = 'light' | 'dark'

export const themeService = {
  // Перевіряє, чи є тема в localStorage, і повертає 'light' за замовчуванням
  getInitialTheme(): Theme {
    const saved = localStorage.getItem('theme')
    return saved === 'dark' ? 'dark' : 'light'
  },

  // Застосовує тему: зберігає і додає клас до <body>
  applyTheme(theme: Theme): void {
    localStorage.setItem('theme', theme)
    document.body.classList.remove('light-theme', 'dark-theme')
    document.body.classList.add(`${theme}-theme`)
  }
}
