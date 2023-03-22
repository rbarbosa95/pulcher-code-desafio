import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from '@/services/api'
import type { IGame, IPagination, ICategory } from '@/types/typeListGames'

export const useListGamesStore = defineStore('listGames', () => {
  const games = ref<IGame[]>([])
  const loading = ref(false)
  const categories = ref<ICategory[]>([])
  const pagination = ref<IPagination>({
    page: 1,
    limit: 15,
    total: 0,
    total_pages: 0
  })

  async function getAllListGames() {
    try {
      loading.value = true
      const response = await api.get(`/games?_sort=name`)
      games.value = response.data
      pagination.value.total = response.data.length
      pagination.value.total_pages = Math.ceil(response.data.length / pagination.value.limit)
    } catch (error) {
      console.error(error)
    } finally {
      loading.value = false
    }
  }

  async function getCategoriesStore() {
    try {
      const response = await api.get('/stores')
      categories.value = response.data
    } catch (error) {
      console.error(error)
    }
  }

  function updatePagination() {
    pagination.value.total = games.value.length
    pagination.value.total_pages = Math.ceil(pagination.value.total / pagination.value.limit)
  }

  return {
    games,
    loading,
    pagination,
    categories,
    getCategoriesStore,
    getAllListGames,
    updatePagination
  }
})
