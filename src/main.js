import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './style.css'
import App from './App.vue'
import router from './router'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

createApp(App).use(router).use(pinia).mount('#app')
// Syntaxe alternative possible :
// const app = createApp(App);
// app.use(router);
// app.mount('#app');
