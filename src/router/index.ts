import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home-view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/blog', name: 'blog', component: () => import('../views/blog-view.vue') },
    { path: '/blog/:slug', name: 'blog-post', component: () => import('../views/blog-post-view.vue') },
    { path: '/work', name: 'work', component: () => import('../views/work-view.vue') },
    { path: '/contact', name: 'contact', component: () => import('../views/contact-view.vue') },
  ],
})

export default router
