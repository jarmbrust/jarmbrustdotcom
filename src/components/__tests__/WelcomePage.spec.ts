import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WelcomePage from '../WelcomePage.vue'

describe('WelcomePage', () => {
  it('renders properly', () => {
    const wrapper = mount(WelcomePage)
    expect(wrapper.text()).toContain('This is a welcome page to test the deployments.')
  })
})
