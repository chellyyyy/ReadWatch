import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routerIndex.js'
// import './assets/styles/global.scss'
import './assets/styles/reset.css'

const app = createApp(App);
app.use(router);
app.mount('#app');
