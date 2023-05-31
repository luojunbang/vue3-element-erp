import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import '@/router/permission'
import '@/common/style/index.scss'

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
