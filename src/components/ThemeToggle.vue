<script setup lang="ts">
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button @click="toggleTheme">
    Change to {{ isDark ? 'light' : 'dark' }}
  </button>
</template>

<style scoped>
button {
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 0.25rem;
  background-color: #eee;
}

button:hover {
  background-color: #ddd;
}
</style>
