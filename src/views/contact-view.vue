<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Contact — Pablo Bonucci',
  meta: [
    { name: 'description', content: 'Get in touch about frontend engineering roles or just to talk shop.' },
    { property: 'og:title', content: 'Contact — Pablo Bonucci' },
    { property: 'og:url', content: 'https://pablobonucci.com/contact' },
  ],
})

// Replace YOUR_FORM_ID at https://formspree.io
const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

type Status = 'idle' | 'sending' | 'success' | 'error'

const status = ref<Status>('idle')
const form = ref({ name: '', email: '', message: '' })

async function submit() {
  status.value = 'sending'
  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(form.value),
    })
    status.value = res.ok ? 'success' : 'error'
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <RouterLink class="back-link" to="/">← index</RouterLink>
  <h1 class="page-title">Contact</h1>

  <p class="intro">If you're hiring or just want to talk frontend, I'd love to hear from you.</p>

  <form v-if="status !== 'success'" class="contact-form" @submit.prevent="submit" novalidate>
    <div class="field">
      <label for="name">Name</label>
      <input id="name" v-model="form.name" type="text" required autocomplete="name" />
    </div>
    <div class="field">
      <label for="email">Email</label>
      <input id="email" v-model="form.email" type="email" required autocomplete="email" />
    </div>
    <div class="field">
      <label for="message">Message</label>
      <textarea id="message" v-model="form.message" rows="5" required></textarea>
    </div>
    <p v-if="status === 'error'" class="form-error">Something went wrong. Try again.</p>
    <button type="submit" :disabled="status === 'sending'">
      {{ status === 'sending' ? 'Sending…' : 'Send →' }}
    </button>
  </form>

  <p v-else class="form-success">Message sent. I'll get back to you soon.</p>

  <div class="social-links">
    <a href="https://www.linkedin.com/in/pablobonucci" target="_blank" rel="noopener">LinkedIn ↗</a>
    <a href="https://github.com/pablobbb" target="_blank" rel="noopener">GitHub ↗</a>
    <a href="https://medium.com/@pablobbb" target="_blank" rel="noopener">Medium ↗</a>
  </div>
</template>

<style scoped>
.intro {
  font-size: 1.25rem;
  color: var(--color-muted);
  margin-bottom: 3rem;
  max-width: 44ch;
  line-height: 1.6;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  letter-spacing: -0.01em;
}

input,
textarea {
  font-family: var(--font-sans);
  font-size: 1rem;
  color: var(--color-text);
  background: transparent;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 0.75rem 1rem;
  outline: none;
  resize: vertical;
  transition: border-color 0.15s ease;
  width: 100%;
}

input:focus,
textarea:focus {
  border-color: var(--color-muted);
}

button {
  font-family: var(--font-sans);
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--color-bg);
  background: var(--color-text);
  border: none;
  border-radius: 4px;
  padding: 0.75rem 2rem;
  cursor: pointer;
  align-self: flex-start;
  transition: opacity 0.15s ease;
}

button:hover:not(:disabled) {
  opacity: 0.85;
}

button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.form-error {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--color-accent);
  margin: 0;
}

.form-success {
  font-size: 1.25rem;
  color: var(--color-muted);
  margin-bottom: 3rem;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.social-links a {
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--color-muted);
  text-decoration: none;
  width: fit-content;
  transition: var(--transition-link);
}

.social-links a:hover {
  color: var(--color-accent);
}
</style>
