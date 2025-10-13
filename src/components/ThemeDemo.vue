<template>
  <div class="demo-box">
    <h2>Демонстрація теми</h2>
    <p>Зараз активна тема: <strong>{{ currentTheme }}</strong></p>
    <p>Цей текст автоматично змінює свій стиль залежно від теми.</p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useThemeStore } from '../stores/useThemeStore'

const themeStore = useThemeStore()
const { currentTheme } = storeToRefs(themeStore)  // так делаем реактивный доступ
</script>

<style scoped>
.demo-box {
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid; /* чтобы блок был виден */
}

/* Стилі для світлої теми */
.light-theme .demo-box {
  background-color: #ffffff;
  color: #222222;
  border-color: #dddddd;
}

/* Стилі для темної теми */
.dark-theme .demo-box {
  background-color: #2b2b2b;
  color: #ffffff;
  border-color: #555555;
}
</style>
