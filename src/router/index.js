import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
    meta: { layout: DefaultLayout }
  },
  {
    path: '/rating',
    name: 'Rating',
    // component: () => import('@/views/Rating.vue')
  },
  {
    path: '/subscribes',
    name: 'Subscribes',
    // component: () => import('@/views/Subscribes.vue')
  },
  {
    path: '/category/:uid?',
    name: 'Category',
    // component: () => import('@/views/Category.vue')
  },
  {
    path: '/advertising',
    name: 'Advertising',
    // component: () => import('@/views/Advertising.vue')
  },
  {
    path: '/rules',
    name: 'Rules',
    // component: () => import('@/views/Rules.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    // component: () => import('@/views/Contacts.vue')
  },
  {
    path: '/support',
    name: 'Support',
    // component: () => import('@/views/Support.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
