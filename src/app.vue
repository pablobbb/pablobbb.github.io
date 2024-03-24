<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <div class="logo"><RouterLink class="home" to="/"><span>&lt;</span>pablobbb<span>/&gt;</span></RouterLink></div>
      <div class="social">
        <a href="https://www.linkedin.com/in/pablobonucci" target="_blank" alt="LinkedIn"><img class="linkedin" src="/src/assets/icon-linkedin.svg"></a>
        <a href="https://twitter.com/fresh_rapp" target="_blank" alt="X"><img src="/src/assets/icon-x.svg"></a>
        <a href="https://github.com/pablobbb" target="_blank" alt="GitHub"><img src="/src/assets/icon-github.svg"></a>
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