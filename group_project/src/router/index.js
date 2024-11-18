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
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
    {
      path: '/hero-member',
      name: 'hero-member',
      component: () => import('../views/HeroMemberView.vue'),
    },
    {
      path: '/footer',
      name: 'footer',
      component: () => import('@/components/MainFooter.vue'),
    }
  ],
})

export default router
