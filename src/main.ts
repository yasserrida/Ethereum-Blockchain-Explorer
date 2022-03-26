import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { store } from './store'
import { createHead } from '@vueuse/head'
import VueFeather from 'vue-feather';

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(store)
app.use(head)
app.use(VueAxios, axios)
app.provide("$store", store);
app.provide('$axios', app.config.globalProperties.axios)

app.component(VueFeather.name, VueFeather);

app.mount('#app')
