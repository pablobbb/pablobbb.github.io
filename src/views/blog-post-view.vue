<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useHead } from '@vueuse/head'
import { usePost } from '@/composables/usePosts'
import ScrollProgressBar from '@/components/scroll-progress-bar.vue'

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const post = computed(() => usePost(slug.value))

useHead(
  computed(() => ({
    title: post.value ? `${post.value.title} — Pablo Bonucci` : 'Pablo Bonucci',
    meta: [
      { name: 'description', content: post.value?.description ?? '' },
      { property: 'og:title', content: post.value ? `${post.value.title} — Pablo Bonucci` : 'Pablo Bonucci' },
      { property: 'og:description', content: post.value?.description ?? '' },
      { property: 'og:url', content: `https://pablobonucci.com/blog/${slug.value}` },
      { property: 'og:type', content: 'article' },
    ],
  })),
)

const postComponents = import.meta.glob('/src/content/posts/*.md')

const PostContent = computed(() => {
  const path = `/src/content/posts/${slug.value}.md`
  if (!postComponents[path]) return null
  return defineAsyncComponent(() => postComponents[path]() as Promise<{ default: object }>)
})

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
</script>

<template>
  <ScrollProgressBar />
  <RouterLink class="back-link" to="/blog">← writing</RouterLink>

  <template v-if="post && PostContent">
    <header class="post-header">
      <h1>{{ post.title }}</h1>
      <p class="post-meta">
        <time :datetime="post.date">{{ formatDate(post.date) }}</time>
        · {{ post.readingTime }} min read
      </p>
    </header>
    <article class="post-body">
      <component :is="PostContent" />
    </article>
  </template>

  <p v-else class="not-found">Post not found.</p>
</template>

<style scoped>
.post-header {
  margin-bottom: 4rem;
}

.post-header h1 {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.04em;
  color: var(--color-text);
  margin-bottom: 1.25rem;
}

.post-meta {
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  color: var(--color-muted);
  margin-bottom: 0;
}

/* Prose */

.post-body {
  font-size: 1.125rem;
  line-height: 1.75;
}

.post-body :deep(h2) {
  font-size: clamp(1.75rem, 5vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: var(--color-text);
  margin: 3rem 0 1rem;
}

.post-body :deep(h3) {
  font-size: 1.375rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--color-text);
  margin: 2.5rem 0 0.75rem;
}

.post-body :deep(p) {
  color: var(--color-muted);
  margin-bottom: 1.5rem;
}

.post-body :deep(a) {
  color: var(--color-text);
}

.post-body :deep(a:hover) {
  color: var(--color-accent);
}

.post-body :deep(pre) {
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 1.25rem 1.5rem;
  overflow-x: auto;
  margin: 2rem 0;
  font-size: 0.875rem;
}

.post-body :deep(code:not(pre code)) {
  background: var(--color-border);
  padding: 0.15em 0.4em;
  border-radius: 3px;
  font-size: 0.875em;
  font-family: var(--font-mono);
}

.post-body :deep(ul),
.post-body :deep(ol) {
  color: var(--color-muted);
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.post-body :deep(li) {
  margin-bottom: 0.5rem;
}

.not-found {
  font-size: 1.25rem;
  color: var(--color-muted);
}
</style>
