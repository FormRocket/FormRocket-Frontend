<template>
<div v-if="!session.user">
<Navbar :showDashboard="true" />
<AppContent>
    <ShowError error="unauthorized" />
</AppContent>
</div>
<div v-else-if="session.user.isVerified">
<Navbar :showDashboard="true" />
<AppContent>
    <ShowError error="alreadyVerified" />
</AppContent>
</div>
<div v-else>
    <Navbar :session="session" :showDashboard="true" />
    <AppContent class="p-9">
        <h4 class="w-full text-2xl text-transparent bg-clip-text bg-gradient-to-r font-bold text-lg-gradient uppercase">
            WELCOME, {{session.user.name}}
        </h4>
        <h1 class="text-5xl mb-3">
            <span class="text-lg-gradient" style="display:initial!important;">One more</span> step...
        </h1>
        <p class="mb-1">You just created your FormRocket account! 🎉</p>
        <p class="mb-1">Verify your email address by clicking the link we just sent to <b>{{session.user.email}}</b></p>
        
        </AppContent>
</div>
</template>
<script setup>
    import { ref } from 'vue'
    import { login, logout, session } from '@/services/auth.js'
    import Navbar from '@/components/Navbar.vue'
    import AppContent from '@/components/AppContent.vue'
import ShowError from './ShowError.vue';

</script>