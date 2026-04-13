<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Work — Pablo Bonucci',
  meta: [
    { name: 'description', content: 'Selected projects and contributions from 15+ years in frontend engineering.' },
    { property: 'og:title', content: 'Work — Pablo Bonucci' },
    { property: 'og:url', content: 'https://pablobonucci.com/work' },
  ],
})

const roles = [
  {
    company: 'iubenda',
    period: '2025 – present',
    bullets: [
      'Sole Principal Frontend Engineer setting technical vision for a 1M+ user product',
      'Leading frontend architecture across B2B/B2C surfaces and internal tooling',
      'Influencing a team of 6–15 engineers',
    ],
  },
  {
    company: 'QubicaAMF',
    period: '2020 – 2025',
    bullets: [
      'Built a 30+ component design system from scratch with the team',
      'Migrated 3+ legacy products to Vue 3 + TypeScript, reducing bundle size by ~25%',
      'Mentored 5+ engineers across all seniority levels',
    ],
  },
  {
    company: 'Z-INDEX99',
    period: '2016 – 2019',
    bullets: [
      'Co-founded a web agency, delivered 20+ projects',
      'Built a custom Angular UI framework reused across client projects',
    ],
  },
]
</script>

<template>
  <RouterLink class="back-link" to="/">← index</RouterLink>
  <h1 class="page-title">Work</h1>

  <div class="roles">
    <article v-for="role in roles" :key="role.company" class="role">
      <header class="role-header">
        <h2 class="role-company">{{ role.company }}</h2>
        <span class="role-period">{{ role.period }}</span>
      </header>
      <ul>
        <li v-for="bullet in role.bullets" :key="bullet">{{ bullet }}</li>
      </ul>
    </article>
  </div>
</template>

<style scoped>
.roles {
  display: flex;
  flex-direction: column;
}

.role {
  border-top: 1px solid var(--color-border);
  padding: 2.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.role-header {
  display: flex;
  align-items: baseline;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.role-company {
  font-size: clamp(2rem, 7vw, 4.5rem);
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1;
  color: var(--color-text);
}

.role-period {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  color: var(--color-muted);
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

li {
  font-size: 1.0625rem;
  color: var(--color-muted);
  line-height: 1.6;
  padding-left: 1.25rem;
  position: relative;
}

li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: var(--color-border);
}
</style>
