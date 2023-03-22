import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import CardGame from '../cards/CardGame.vue'

describe('CardGame', () => {
  const game = {
    id: 2,
    name: 'Pong',
    purchase_date: '2022-08-02',
    media_type: 'Physical',
    store: 4,
    value: 139.5
  }

  const wrapper = mount(CardGame, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn()
        })
      ]
    },
    props: {
      game
    }
  })

  it('should display game name', () => {
    expect(wrapper.find('[data-test="game-name"]').text()).toBe(game.name)
  })

  it('should display game purchase date', () => {
    expect(wrapper.find('[data-test="game-date"]').text()).toBe('02/08/2022')
  })

  it('should display contains game value not empty', () => {
    expect(wrapper.find('[data-test="game-value"]').text()).not.toBe('')
  })
})
