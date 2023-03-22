<script setup lang="ts">
import { ref } from 'vue'
import { useListGamesStore } from '@/stores/listGames'
import { storeToRefs } from 'pinia'
import { useToast } from '@/composables/useToast'

const form = ref<HTMLFormElement>()
const formValues = ref({
  date: '',
  price: '',
  store: 0
})
const store = useListGamesStore()
const { games, categories } = storeToRefs(store)
const { notify } = useToast()

const config = {
  masked: false,
  prefix: 'R$',
  suffix: '',
  thousands: ',',
  decimal: '.',
  precision: 2,
  disableNegative: true,
  disabled: false,
  min: 0,
  max: 1000000000,
  allowBlank: false,
  minimumNumberOfCharacters: 0
}

const formartCurrencyToNumber = (value: string) => {
  return Number(value.replace('R$', '').replace(',', '.'))
}

const closeSideBar = () => {
  // simulate click on close button
  document.getElementById('closeButton')?.click()
}

const onSubmit = async () => {
  try {
    // get all games
    await store.getAllListGames()
    const price = formartCurrencyToNumber(formValues.value.price)

    // filter games by date limit
    if (formValues.value.date) {
      games.value = games.value.filter((game) => {
        return game.purchase_date <= formValues.value.date
      })
    }

    // filter games by price
    if (price > 0) {
      games.value = games.value.filter((game) => {
        return game.value <= price
      })
    }

    // filter games by store
    if (formValues.value.store > 0) {
      games.value = games.value.filter((game) => {
        return game.store === formValues.value.store
      })
    }

    // notify user about filter
    notify('Filtro aplicado com sucesso!', 'success')
  } catch (error) {
    console.log(error)
    notify('Erro ao aplicar filtro!', 'error')
  } finally {
    // update pagination
    store.updatePagination()
    closeSideBar()
  }
}

const resetForm = async () => {
  try {
    await store.getAllListGames()
    form?.value?.reset()
    formValues.value = {
      date: '',
      price: '',
      store: 0
    }
    notify('Filtro resetado com sucesso!', 'info')
    closeSideBar()
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div
    class="offcanvas offcanvas-end app-bg-primary text-white border-0"
    data-bs-backdrop="static"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="staticBackdropLabel">Filtros</h5>
      <button
        id="closeButton"
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div>
        <form class="form-floating" @submit.prevent="onSubmit" ref="form">
          <div class="form-floating mb-3">
            <input
              type="date"
              class="form-control"
              id="dateInput"
              v-model="formValues.date"
              required
            />
            <label for="dateInput" class="app-text-default">Date Limite</label>
          </div>

          <div class="form-floating mb-3">
            <input
              class="form-control"
              id="priceInput"
              v-model.lazy="formValues.price"
              v-money3="config"
            />
            <label for="priceInput" class="app-text-default">Preço</label>
          </div>

          <div class="form-floating">
            <select class="form-select mb-3" v-model="formValues.store" id="floatingSelect">
              <option disabled value="">Selecione um loja</option>
              <option v-for="category in categories" :value="category.id" :key="category.id">
                {{ category.name }}
              </option>
            </select>
            <label for="floatingSelect" class="app-text-default">Lojas</label>
          </div>

          <div class="d-flex gap-2">
            <button
              type="submit"
              class="app-btn w-100 d-block text-white py-2 px-3 rounded-1 app-bg-secondary"
            >
              Filtrar
            </button>
            <button type="button" @click="resetForm" class="btn btn-danger w-100">
              Limpar Filtros
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
