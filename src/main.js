import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'
import Dashboard from './components/Dashboard.vue'
import FormSettings from './components/FormSettings.vue'
import Error404 from './components/Error404.vue'
import SetToken from './services/SetToken.vue'

import './style.css'

// I Hate Vue Router 💀

const routes = [
    {
        path: "/",
        component: Dashboard
    },
    {
        path: "/setToken",
        component: SetToken
    },
    {
        path: '/settings/forms/:id',
        component: FormSettings
    },
    {
        path: '/:pathMatch(.*)',
        component: Error404
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})

const app = createApp(App);
app.use(VueRouter);
app.use(router);
app.mount('#app')
