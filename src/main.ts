import { createApp } from 'vue'
import bootstrap from 'bootstrap'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'normalize.css/normalize.css'

createApp(App).use(store).use(router).mount('#app')
