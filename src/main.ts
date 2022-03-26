import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { store } from './store'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.provide("$store", store);
app.provide('$axios', app.config.globalProperties.axios)

app.mount('#app')
