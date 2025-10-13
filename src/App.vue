<script setup lang="ts">
import ThemeToggle from './components/ThemeToggle.vue'
import ThemeDemo from './components/ThemeDemo.vue'   // добавили импорт
</script>


<template>
  <div>
    <ThemeToggle />
    <ThemeDemo />
  </div>
</template>

<style>
/* Глобальні стилі для тем */
.light-theme {
  background-color: #fff;
  color: #000;
}

.dark-theme {
  background-color: #222;
  color: #fff;
}
</style>
