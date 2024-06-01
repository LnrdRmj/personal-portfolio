import { createApp } from 'vue'
import './style.css'
import './fonts.css'
import App from './App.vue'
import { i18n } from './i18n/i18n'

createApp(App)
.use(i18n)
.mount('#app')