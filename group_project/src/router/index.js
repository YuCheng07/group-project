import { createRouter, createWebHistory } from 'vue-router'
import WorkShopView from '../views/WorkShopView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'work-shop',
      component: WorkShopView,
    },
    {
      path: '/hero-member',
      name: 'hero-member',
      component: () => import('../views/HeroMemberView.vue'),
    },
    {
      path: '/login-homepage',
      name: 'login-homepage',
      component: () => import('../views/LoginHomePage.vue'),
    },
    {
      path: '/footer',
      name: 'footer',
      component: () => import('@/components/MainFooter.vue'),
    }
  ],
})

export default router
