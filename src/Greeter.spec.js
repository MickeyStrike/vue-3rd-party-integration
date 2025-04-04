import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Greeter from './components/Greeter.vue'

describe('Greeter Component', () => {
  it('renders button with default text', () => {
    const wrapper = mount(Greeter, {
      props: { message: 'Test Message' }
    })
    expect(wrapper.text()).toContain('Click Me')
  })

  it('logs message on button click', async () => {
    const consoleSpy = vi.spyOn(console, 'log')
    const wrapper = mount(Greeter, {
      props: { message: 'Test Message' }
    })
    await wrapper.find('[data-test="greeter-button"]').trigger('click')
    expect(consoleSpy).toHaveBeenCalledWith('Test Message')
  })

  it('accepts custom button text', () => {
    const wrapper = mount(Greeter, {
      props: { 
        message: 'Test',
        buttonText: 'Custom Text'
      }
    })
    expect(wrapper.text()).toContain('Custom Text')
  })
})
