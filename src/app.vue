<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <div class="logo">
        <RouterLink class="home" to="/"><span>&lt;</span>pablobbb<span>/&gt;</span></RouterLink>
      </div>
      <div class="social">
        <a href="https://www.linkedin.com/in/pablobonucci" target="_blank"
          ><i class="fa-brands fa-linkedin-in"></i
        ></a>
        <a href="https://twitter.com/fresh_rapp" target="_blank"
          ><i class="fa-brands fa-x-twitter"></i
        ></a>
        <a href="https://github.com/pablobbb" target="_blank"
          ><i class="fa-brands fa-github"></i
        ></a>
        <a href="https://medium.com/@pablobbb" target="_blank"
          ><i class="fa-brands fa-medium"></i
        ></a>
      </div>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>&copy; 2024</footer>
</template>
