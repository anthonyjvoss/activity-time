import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ActivityHome from './components/ActivityHome.vue'
import Home from './components/Home.vue'
import Profile from './components/Profile.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createAuth0 } from '@auth0/auth0-vue';

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'Login', component: Home },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/activities', name: 'ActivityHome', component: ActivityHome}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const createAuth = createAuth0({
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  clientId: import.meta.env.VITE_AUTH0_ID,
  authorizationParams: {
    redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL
  }
})

const app = createApp(App)
app.use(createAuth)
app.use(router)
app.mount('#app')
