import { createApp } from 'vue'
import App from './App.vue'
import Greeter from './components/Greeter.vue'

window.Greeter = {
  init: (targetElement, options) => {
    createApp(Greeter, options).mount(targetElement)
  }
}

const app = createApp(App)
app.mount('#app')
