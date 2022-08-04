import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'
import Dashboard from './components/Dashboard.vue'
import FormSettings from './components/FormSettings.vue'
import Error404 from './components/Error404.vue'
import NewForm from './components/NewForm.vue'
import UserSettings from './components/UserSettings.vue'
import Terms from "./components/Legal/ToS.vue";
import SuccessPage from "./components/ThankYouPage/SuccessPage.vue";
import Signup from "./components/Signup.vue";
import Signin from './components/Signin.vue';
import Verify from './services/Verify.vue'
import OnboardingVerify from './components/OnboardingVerify.vue'
import OnboardingMain from './components/OnboardingMain.vue'
import ResetPass from './components/ResetPass.jsx'
import './style.css'

// I Hate Vue Router 💀

const routes = [
    {
        path: "/",
        component: Dashboard
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
    },
    {
        path: '/verify/:token',
        component: Verify
    }, {
        path: '/reset',
        component: ResetPass
    },
    {
        path: '/onboarding/verify',
        component: OnboardingVerify
    },
    {
        path: '/onboarding/main',
        component: OnboardingMain
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