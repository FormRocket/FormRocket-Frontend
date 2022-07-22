<template>
<div v-if="!session.user">
        <Navbar :session="null" :showBack="true" />
        <div class="appContent">
            <ShowError error="unauthorized" />
        </div>
    </div>

    <div v-else>
        <Navbar :session="session" :showBack="true" :showDashboard="true" />
           <div class="appContent p-9">
                <h4 class="w-full text-2xl text-transparent bg-clip-text bg-gradient-to-r font-bold text-lg-gradient uppercase">SIGNED IN AS {{session.user.name}}</h4>
                <h1 class="text-5xl mb-5 mt-2">Manage your <span style="display:initial !important;"
                    class="text-lg-gradient">User Settings.</span> </h1>
                <p>Manage your FormRocket Account.</p>

                
                <h1 class="text-4xl mt-8 mb-2">Username <Icon icon="User2" bulk size="35px" /></h1>
                <p>This field cannot be modified.</p>
                <input disabled :value="session.user.name" class="text-white p-1 mt-4 px-3 rounded-lg" />

                <h1 class="text-4xl mt-8 mb-2">User ID <Icon icon="Info-Square" bulk size="35px" /></h1>
                <p>This field cannot be modified.</p>
                <input disabled :value="session.user.id" class="text-white p-1 mt-4 px-3 rounded-lg" />

                <h1 class="text-4xl mt-8 mb-2">User Token <Icon icon="Password" bulk size="35px" /></h1>
                <p>This is used as an authorization token for all FormRocket requests.<br /><b>Never share with anyone.</b></p>
                <input disabled :value="session.token" class="text-white p-1 mt-4 px-3 rounded-lg" />

                
                </div>


</div>
</template>
<script setup>
import { session } from '@/services/auth.js'
import { useRoute } from 'vue-router';
import ShowError from '@/components/ShowError.vue';
import Navbar from '@/components/Navbar.vue';
import Icon from '@/iconly/iconly.vue';
const route = useRoute();
</script>
