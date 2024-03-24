<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">pablobbb</RouterLink>
      <a href="#">GitHub</a>
      <a href="#">LinkedIn</a>
      <a href="#">X</a>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    &copy; 2024
  </footer>
</template>