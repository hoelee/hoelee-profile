import { createApp } from 'vue'
import App from './App.vue'
import Mobile from './Mobile.vue'

const width = document.documentElement.clientWidth
// Below ~900px the two fixed 50vw desktop panes squeeze the resume into a 230-360px
// column (measured), so tablets and landscape phones get the stacked mobile component.
const app = createApp(width > 900 ? App : Mobile)
app.mount('#app')
