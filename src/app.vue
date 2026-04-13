<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://cdn.iubenda.com/iubenda.js'
  script.async = true
  document.body.appendChild(script)
})
</script>

<template>
  <main>
    <RouterView />
  </main>
  <footer>
    <span>&copy; {{ new Date().getFullYear() }} Pablo Bonucci</span>
    <span class="footer-links">
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
