<script setup lang="ts">
import { onMounted } from 'vue'
import IconFilter from '@/components/icons/IconFilter.vue'
import { useListGamesStore } from '@/stores/listGames'
import { storeToRefs } from 'pinia'
import CardGame from '@/components/cards/CardGame.vue'
import SideBar from '@/components/SideBar.vue'
import { computed } from 'vue'
import { useWindowSize } from '@/composables/useWindowSize'

const store = useListGamesStore()
const { games, pagination } = storeToRefs(store)
const { width } = useWindowSize()

const filteredGames = computed(() => {
  const start = (pagination.value.page - 1) * pagination.value.limit
  const end = start + pagination.value.limit
  return games.value.slice(start, end)
})

const hasGames = computed(() => {
  return games.value.length > 0
})

const maxPagesShow = computed(() => {
  return width.value < 768 ? 3 : 5
})

onMounted(() => {
  store.getCategoriesStore()
  store.getAllListGames()
})
</script>

<template>
  <section id="listGames">
    <div class="d-flex justify-content-between align-items-center">
      <h1>Listagem de Jogos</h1>

      <div id="filter" class="d-flex gap-1">
        <button
          type="button"
          class="app-btn shadow text-bg-white py-2 px-3 rounded-1 app-bg-primary"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <IconFilter />
        </button>
      </div>
    </div>

    <div v-if="!hasGames" class="alert alert-warning mt-4" role="alert">
      Não há jogos cadastrados
    </div>

    <div class="list-games-grid mt-3">
      <div v-for="game in filteredGames" :key="game.id">
        <CardGame :game="game" />
      </div>
    </div>

    <vue-awesome-paginate
      v-show="pagination.total_pages > 1"
      :total-items="pagination.total"
      :items-per-page="pagination.limit"
      :max-pages-shown="maxPagesShow"
      v-model="pagination.page"
    />

    <SideBar />
  </section>
</template>

<style lang="scss" scoped>
.list-games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
}
</style>
