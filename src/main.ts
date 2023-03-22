import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueAwesomePaginate from 'vue-awesome-paginate'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'
import { Money3Directive } from 'v-money3'

import App from './App.vue'
import router from './router'

import 'vue-awesome-paginate/dist/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/scss/main.scss'
import 'vue3-toastify/dist/index.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAwesomePaginate)
app.use(Vue3Toastify, {
  autoClose: 3000
} as ToastContainerOptions)
app.directive('money3', Money3Directive)

app.mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
