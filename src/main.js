import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'
import Dashboard from './components/Dashboard.vue'
import FormSettings from './components/FormSettings.vue'
import Error404 from './components/Error404.vue'
import SetToken from './services/SetToken.vue'
import NewForm from './components/NewForm.vue'
import UserSettings from './components/UserSettings.vue'
import Terms from "./components/Legal/ToS.vue";
import SuccessPage from "./components/ThankYouPage/SuccessPage.vue";
import Signup from "./components/Signup.vue";
import Signin from './components/Signin.vue'
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
        path: "/signup",
        component: Signup
    },
    {
        path: "/signin",
        component: Signin
    },
    {
        path: '/settings/forms/:id',
        component: FormSettings
    },
    {
        path: '/terms',
        component: Terms
    },
    {
        path: '/new',
        component: NewForm
    },
    {
        path: "/settings",
        component: UserSettings
    },
    {
        path: '/:pathMatch(.*)',
        component: Error404
    },
    {
        path: '/success',
        component: SuccessPage
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