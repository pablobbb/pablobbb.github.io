export interface Post {
  slug: string
  title: string
  date: string
  year: number
  description: string
  tags: string[]
  readingTime: number
}

const rawModules = import.meta.glob('/src/content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function parseFrontmatter(raw: string): Record<string, unknown> {
  const match = raw.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return {}
  const fm: Record<string, unknown> = {}
  for (const line of match[1].split('\n')) {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) continue
    const key = line.slice(0, colonIdx).trim()
    const val = line.slice(colonIdx + 1).trim()
    if (val.startsWith('[') && val.endsWith(']')) {
      fm[key] = val
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^["']|["']$/g, ''))
    } else if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      fm[key] = val.slice(1, -1)
    } else {
      fm[key] = val
    }
  }
  return fm
}

function calcReadingTime(raw: string): number {
  const body = raw.replace(/^---[\s\S]*?---/, '')
  const words = body.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

let _posts: Post[] | null = null

export function usePosts(): Post[] {
  if (_posts) return _posts

  _posts = Object.entries(rawModules)
    .map(([path, raw]) => {
      const slug = path.replace('/src/content/posts/', '').replace('.md', '')
      const fm = parseFrontmatter(raw)
      const dateStr = String(fm.date ?? '')
      return {
        slug,
        title: String(fm.title ?? ''),
        date: dateStr,
        year: dateStr ? new Date(dateStr).getFullYear() : 0,
        description: String(fm.description ?? ''),
        tags: Array.isArray(fm.tags) ? fm.tags.map(String) : [],
        readingTime: calcReadingTime(raw),
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return _posts
}

export function usePost(slug: string): Post | undefined {
  return usePosts().find((p) => p.slug === slug)
}
