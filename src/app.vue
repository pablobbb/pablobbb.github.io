<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/"><span>&lt;</span>pablobbb<span>/&gt;</span></RouterLink>
      <div>
        <a href="https://github.com/pablobbb" target="_blank" alt="GitHub">GitHub</a>
        <a href="https://www.linkedin.com/in/pablobonucci" target="_blank" alt="LinkedIn">LinkedIn</a>
        <a href="https://twitter.com/fresh_rapp" target="_blank" alt="X">X</a>
      </div>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    &copy; 2024
  </footer>
</template>