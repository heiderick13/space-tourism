import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/crew',
      name: 'crew',
      component: () => import ('../views/Crew.vue')
    },
    {
      path: '/destinations',
      name: 'destinations',
      component: () => import ('../views/Destinations.vue')
    },
    {
      path: '/technologies',
      name: 'technologies',
      component: () => import ('../views/Technologies.vue')
    },

  ]
})

export default router
