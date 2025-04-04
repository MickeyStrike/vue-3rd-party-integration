import { createApp } from 'vue'
import Greeter from './components/Greeter.vue'

window.Greeter = {
  init: (targetElement, options) => {
    createApp(Greeter, options).mount(targetElement)
  }
}
