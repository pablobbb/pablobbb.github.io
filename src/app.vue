<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://cdn.iubenda.com/iubenda.js'
  script.async = true
  document.body.appendChild(script)
})
</script>

<template>
  <header>
    <nav>
      <div class="logo">
        <RouterLink class="home" to="/"
          ><span>&lt;</span>Pablo Bonucci<span>/&gt;</span></RouterLink
        >
      </div>
      <div class="social">
        <a href="https://www.linkedin.com/in/pablobonucci" target="_blank" aria-label="LinkedIn"
          ><i class="fa-brands fa-linkedin-in" aria-hidden="true"></i
        ></a>
        <a href="https://github.com/pablobbb" target="_blank" aria-label="GitHub"
          ><i class="fa-brands fa-github" aria-hidden="true"></i
        ></a>
        <a href="https://medium.com/@pablobbb" target="_blank" aria-label="Medium"
          ><i class="fa-brands fa-medium" aria-hidden="true"></i
        ></a>
      </div>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <span>&copy; {{ new Date().getFullYear() }}</span>
    <span class="iubenda-links">
      <a
        href="https://www.iubenda.com/privacy-policy/68647362"
        class="iubenda-white iubenda-noiframe iubenda-embed"
        title="Privacy Policy"
        >Privacy Policy</a
      >
      <a
        href="https://www.iubenda.com/privacy-policy/68647362/cookie-policy"
        class="iubenda-white iubenda-noiframe iubenda-embed"
        title="Cookie Policy"
        >Cookie Policy</a
      >
    </span>
  </footer>
</template>
