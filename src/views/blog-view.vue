<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useHead } from '@vueuse/head'
import { usePosts } from '@/composables/usePosts'

useHead({
  title: 'Writing — Pablo Bonucci',
  meta: [
    { name: 'description', content: 'Articles on frontend architecture, design systems, and engineering leadership.' },
    { property: 'og:title', content: 'Writing — Pablo Bonucci' },
    { property: 'og:url', content: 'https://pablobonucci.com/blog' },
  ],
})

const posts = usePosts()

const postsByYear = computed(() => {
  const map = new Map<number, typeof posts>()
  for (const post of posts) {
    if (!map.has(post.year)) map.set(post.year, [])
    map.get(post.year)!.push(post)
  }
  return [...map.entries()].sort((a, b) => b[0] - a[0])
})

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })
}
</script>

<template>
  <RouterLink class="back-link" to="/">← index</RouterLink>
  <h1 class="page-title">Writing</h1>

  <div class="post-list">
    <div v-for="[year, yearPosts] in postsByYear" :key="year" class="year-group">
      <span class="year-label">{{ year }}</span>
      <ul>
        <li v-for="post in yearPosts" :key="post.slug">
          <RouterLink :to="`/blog/${post.slug}`" class="post-link">{{ post.title }}</RouterLink>
          <div class="post-footer">
            <span class="post-meta">
              <time :datetime="post.date">{{ formatDate(post.date) }}</time>
              · {{ post.readingTime }} min
            </span>
            <p class="post-desc">{{ post.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.post-list {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.year-group {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.year-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-muted);
  margin-bottom: 1.5rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  border-top: 1px solid var(--color-border);
  padding: 1.75rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.post-link {
  font-size: clamp(1.5rem, 4.5vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--color-text);
  text-decoration: none;
  transition: var(--transition-link);
  display: block;
}

.post-link:hover {
  color: var(--color-accent);
}

.post-footer {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.post-meta {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-muted);
}

.post-desc {
  font-size: 1rem;
  color: var(--color-muted);
  margin: 0;
  line-height: 1.6;
  max-width: 60ch;
}
</style>
