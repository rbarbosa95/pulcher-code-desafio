<script setup lang="ts">
import { onMounted, ref } from 'vue'
import IconFilter from '@/components/icons/IconFilter.vue'
import { useListGamesStore } from '@/stores/listGames'
import { storeToRefs } from 'pinia'
import CardGame from '@/components/cards/CardGame.vue'
import SideBar from '@/components/SideBar.vue'
import { computed } from 'vue'

const selectAll = ref(false)
const store = useListGamesStore()
const { games, loading, pagination } = storeToRefs(store)

const filteredGames = computed(() => {
  const start = (pagination.value.page - 1) * pagination.value.limit
  const end = start + pagination.value.limit
  return games.value.slice(start, end)
})

const hasGames = computed(() => {
  return games.value.length > 0
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
        <div class="shadow-sm bg-white p-2 rounded-1">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="selectAll"
              v-model="selectAll"
            />
            <label class="form-check-label" for="selectAll"> Selecionar todos </label>
          </div>
        </div>
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

    <div class="row row-cols-5 mt-5 mb-2">
      <div class="col mb-4" v-for="game in filteredGames" :key="game.id">
        <CardGame :game="game" />
      </div>
    </div>

    <vue-awesome-paginate
      v-show="pagination.total_pages > 1"
      :total-items="pagination.total"
      :items-per-page="pagination.limit"
      :max-pages-shown="5"
      v-model="pagination.page"
    />

    <SideBar />
  </section>
</template>
