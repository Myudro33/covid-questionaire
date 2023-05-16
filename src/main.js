import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import "./config/vee-validate/rules";
import "./config/vee-validate/messages";

// Global Components
import Navbar from './components/Navbar.vue'
import Input from './components/Input.vue'
import RadioInput from './components/RadioInput.vue'
import Label from './components/Label.vue'




const app = createApp(App)

app.use(router)
app.use(store)
app.component('navbar',Navbar)
app.component('input-component',Input)
app.component('radio-input',RadioInput)
app.component('label-component',Label)



app.mount('#app')
