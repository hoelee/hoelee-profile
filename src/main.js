import { createApp } from 'vue'
import App from './App.vue'
import Mobile from './Mobile.vue'

const width = document.documentElement.clientWidth
const app = createApp(width > 500 ? App : Mobile)
app.mount('#app')
