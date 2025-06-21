import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from "remote_app/store"
import axios from "remote_app/axios"
import router from "./router"

store.dispatch('initializeApp').then(() => {
    createApp(App).use(router).use(store).use(axios).mount('#app')
});
