<template>
<div v-if="!session.user">
        <Navbar :session="null" :showBack="true" />
        <div class="appContent">
            <ShowError error="unauthorized" />
        </div>
    </div>

    <div v-else>
        <Navbar :session="session" :showBack="true" :showDashboard="true" />
            <AppContent class="p-9">
                <h4 class="w-full text-2xl text-transparent bg-clip-text bg-gradient-to-r font-bold text-lg-gradient uppercase">SIGNED IN AS {{session.user.name}}</h4>
                <h1 class="text-5xl mb-5 mt-2">Manage your <span style="display:initial !important;"
                    class="text-lg-gradient">User Settings.</span> </h1>
                <p>Manage your FormRocket Account.</p>

                <h1 class="text-4xl mt-8 mb-2">Name <Icon icon="User2" bulk size="35px" /></h1>
                <p>This field cannot be modified.</p>
                <input disabled :value="session.user.name" class="cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />

                <h1 class="text-4xl mt-8 mb-2">User ID <Icon icon="Info-Square" bulk size="35px" /></h1>
                <p>This field cannot be modified.</p>
                <input disabled :value="session.user.id" class="cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />

                <h1 class="text-4xl mt-8 mb-2">Email <Icon icon="Message" bulk size="35px" /></h1>
                <p>This field cannot be modified.</p>
                <input disabled :value="session.user.email" class="cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />

                <h1 class="text-4xl mt-8 mb-2">Plan <Icon icon="Bag-2" bulk size="35px" /></h1>
                <p>Your current FormRocket plan. This can be managed from <a class="text-blue-600 cursor-pointer hover:text-blue-500" @click="$router.push('/subscriptions')">here</a>.</p>
                <input disabled :value="plans[session.user.plan]" class="cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />

                <h1 class="text-4xl mt-8 mb-2">Remove My Data <Icon icon="Delete" bulk size="35px" /></h1>
                <p>Request complete removal of your data by <a class="text-blue-600 cursor-pointer hover:text-blue-500" onclick="window.location.href = 'emailto:formrocket@protonmail.com'">sending us an email</a>.</p>
                
                <!--<h1 class="text-4xl mt-8 mb-2">User Token <Icon icon="Password" bulk size="35px" /></h1>
                <p>This is used as an authorization token for all FormRocket requests.<br /><b>Never share with anyone.</b></p>
                <input disabled :value="session.token" class="text-white p-1 mt-4 px-3 rounded-lg" />
                -->
            </AppContent>
    </div>
</template>
<script setup>
import AppContent from './AppContent.vue';
import { session } from '@/services/auth.js'
import { useRoute } from 'vue-router';
import ShowError from '@/components/ShowError.vue';
import Navbar from '@/components/Navbar.vue';
import Icon from '@/iconly/iconly.vue';
const route = useRoute();

const plans = {
    0: "Basic",
    1: "Premium",
    2: "Business"
}
</script>
