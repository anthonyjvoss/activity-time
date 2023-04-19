import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ActivityHome from './components/ActivityHome.vue'
import Home from './components/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/activities', name: 'ActivityHome', component: ActivityHome}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
