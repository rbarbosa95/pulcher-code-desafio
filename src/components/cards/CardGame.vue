<script setup lang="ts">
import moment from 'moment'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import type { IGame } from '@/types/typeListGames'
import { useListGamesStore } from '@/stores/listGames'
import IconPhysical from '../icons/IconPhysical.vue'
import IconDigital from '../icons/IconDigital.vue'

const props = defineProps<{
  game: IGame
}>()

const store = useListGamesStore()
const { categories } = storeToRefs(store)

const shop = computed(() => {
  return categories.value.find((category) => category.id === props.game.store)
})

const formartCurrency = (value: number) => {
  return value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  })
}

const date = computed(() => {
  return moment(props.game.purchase_date).format('L')
})

const price = computed(() => {
  return formartCurrency(props.game.value)
})

moment.locale('pt-br')
</script>

<template>
  <div class="card-game bg-white rounded-2 p-3 shadow-sm">
    <div class="card-game__column">
      <h3 data-test="game-name" class="card-game__title">{{ game.name }}</h3>
      <div class="card-game__column-infos">
        <span data-test="game-date">{{ date }}</span>
        <span data-test="game-store">{{ shop?.name }}</span>
        <span data-test="game-value"> {{ price }} </span>
      </div>
    </div>
    <div class="card-game__column">
      <span v-if="game.media_type === 'Digital'">
        <IconDigital />
      </span>
      <span v-else>
        <IconPhysical />
      </span>
    </div>
  </div>
</template>

<styled lang="scss" scoped>
.card-game {
  height: 162px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;

  &:hover {
    border: 1px solid var(--bs-gray-300);
  }

  &__title {
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 16px;
    opacity: 0.8;
  }

  &__column {
    display: flex;
    flex-direction: column;

    &-infos {
      display: flex;
      flex-direction: column;
      gap: 8px;

      > span {
        font-size: 0.75rem;
        line-height: 14px;
        opacity: 0.6;
        font-weight: 500;

        &:last-child {
          opacity: 1;
          font-weight: 600;
          opacity: 0.8;
        }
      }
    }
  }
}
</styled>
