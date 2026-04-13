import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'unplugin-vue-markdown/vite'
import Shiki from '@shikijs/markdown-it'

export default defineConfig({
  plugins: [
    Markdown({
      async markdownItSetup(md) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ;(md as any).use(
          await Shiki({
            themes: { light: 'github-dark-dimmed', dark: 'github-dark-dimmed' },
          }),
        )
      },
    }),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
  ],
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
