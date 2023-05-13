import './assets/main.css'
import Navbar from './components/Navbar.vue'
import Input from './components/Input.vue'
import Label from './components/Label.vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
const app = createApp(App)

app.use(router)
app.use(store)
app.component('navbar',Navbar)
app.component('input-component',Input)
app.component('label-component',Label)

app.mount('#app')
