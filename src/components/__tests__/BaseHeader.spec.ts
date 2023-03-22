import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import BaseHeader from '../common/BaseHeader.vue'

describe('BaseHeader', () => {
  it('should render RouterLink', () => {
    const wrapper = shallowMount(BaseHeader, {
      global: {
        stubs: {
          RouterLink: true
        }
      }
    })

    // Verifies if RouterLink is present
    expect(wrapper.findComponent({ name: 'RouterLink' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'RouterLink' }).attributes('to')).toBe('/')
  })
})
