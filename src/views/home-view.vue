<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useHead } from '@vueuse/head'
import { usePosts } from '@/composables/usePosts'

useHead({
  title: 'Pablo Bonucci — Principal Frontend Engineer',
  meta: [
    { name: 'description', content: 'Principal Frontend Engineer specialising in design systems and frontend architecture. 15+ years building frontend systems and the teams that build them well.' },
    { property: 'og:title', content: 'Pablo Bonucci — Principal Frontend Engineer' },
    { property: 'og:description', content: 'Principal Frontend Engineer specialising in design systems and frontend architecture. 15+ years building frontend systems and the teams that build them well.' },
    { property: 'og:url', content: 'https://pablobonucci.com' },
  ],
})

const latestPosts = computed(() => usePosts().slice(0, 3))

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
}
</script>

<template>
  <div class="home">
    <header class="hero">
      <h1 class="name">Pablo<br />Bonucci</h1>

      <div class="hero-meta">
        <p class="role">Principal Frontend Engineer</p>
        <p class="bio">
          +15 years building frontend systems and the teams that build them well. Design systems,
          frontend architecture, and the foundations that make product teams faster.
          Currently at <a href="https://www.iubenda.com" target="_blank" rel="noopener">iubenda</a> — 1M+ users.
        </p>
      </div>

      <nav class="hero-nav">
        <RouterLink to="/blog">Writing →</RouterLink>
        <RouterLink to="/work">Work →</RouterLink>
        <RouterLink to="/contact">Contact →</RouterLink>
      </nav>

      <div class="social">
        <a href="https://www.linkedin.com/in/pablobonucci" target="_blank" aria-label="LinkedIn">
          <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
        </a>
        <a href="https://github.com/pablobbb" target="_blank" aria-label="GitHub">
          <i class="fa-brands fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://medium.com/@pablobbb" target="_blank" aria-label="Medium">
          <i class="fa-brands fa-medium" aria-hidden="true"></i>
        </a>
      </div>
    </header>

    <section class="latest-writing">
      <h2>Latest writing</h2>
      <ul>
        <li v-for="post in latestPosts" :key="post.slug">
          <RouterLink :to="`/blog/${post.slug}`" class="post-link">{{ post.title }}</RouterLink>
          <span class="post-meta">{{ formatDate(post.date) }} · {{ post.readingTime }} min</span>
        </li>
      </ul>
      <RouterLink to="/blog" class="all-posts">All posts →</RouterLink>
    </section>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

/* Hero */

.hero {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.name {
  font-size: clamp(5rem, 20vw, 6rem);
  font-weight: 900;
  line-height: 0.88;
  letter-spacing: -0.04em;
  color: var(--color-text);
}

.hero-meta {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 52ch;
}

.role {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  color: var(--color-muted);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 0;
}

.bio {
  font-size: 1.125rem;
  color: var(--color-muted);
  line-height: 1.65;
  margin-bottom: 0;
}

.bio a {
  color: var(--color-text);
  text-decoration: none;
}

.bio a:hover {
  color: var(--color-accent);
}

/* Nav */

.hero-nav {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.hero-nav a {
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--color-muted);
  text-decoration: none;
  transition: var(--transition-link);
}

.hero-nav a:hover {
  color: var(--color-accent);
}

/* Social */

.social {
  display: flex;
  gap: 1.25rem;
  align-items: center;
}

.social a {
  color: var(--color-muted);
  text-decoration: none;
  font-size: 1.1rem;
  transition: var(--transition-link);
}

.social a:hover {
  color: var(--color-accent);
}

/* Latest writing */

.latest-writing {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

h2 {
  font-size: clamp(2rem, 6vw, 3.5rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1;
  color: var(--color-text);
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

li {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  border-top: 1px solid var(--color-border);
  padding-top: 1.75rem;
}

li:first-child {
  border-top: none;
  padding-top: 0;
}

.post-link {
  font-size: clamp(1.25rem, 3.5vw, 1.75rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2;
  color: var(--color-text);
  text-decoration: none;
  transition: var(--transition-link);
}

.post-link:hover {
  color: var(--color-accent);
}

.post-meta {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-muted);
}

.all-posts {
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-muted);
  text-decoration: none;
  transition: var(--transition-link);
  width: fit-content;
}

.all-posts:hover {
  color: var(--color-accent);
}
</style>
