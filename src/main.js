import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCameraLib from 'vue-camera-lib'

const app = createApp(App)

app.use(VueCameraLib)

app.use(router)

app.mount('#app')
