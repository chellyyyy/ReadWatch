import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routerIndex.js'
import './assets/styles/global.css'
import './assets/styles/reset.css'

const app = createApp(App);
app.use(router);
app.mount('#app');
