import { createRouter, createWebHistory } from 'vue-router'
import ListGames from '../views/ListGamesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'listGames',
      component: ListGames
    }
  ]
})

export default router
