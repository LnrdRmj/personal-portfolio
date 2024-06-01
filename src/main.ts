import { createApp } from 'vue';
import App from './App.vue';
import './fonts.css';
import './style.css';

import { setup } from './i18n/i18n.ts'
setup()
import i18next from 'i18next';
import I18NextVue from 'i18next-vue';

createApp(App)
.use(I18NextVue, {i18next})
.mount('#app')