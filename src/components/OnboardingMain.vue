<template>
<div v-if="!session.user">
<Navbar :showDashboard="true" />
<AppContent>
    <ShowError error="unauthorized" />
</AppContent>
</div>
<div v-else-if="!session.user.isVerified">
<Navbar :showDashboard="true" />
<AppContent>
    <ShowError error="unverified" />
</AppContent>
</div>
<div v-else>
    <Navbar :session="session" :showDashboard="true" />
    <AppContent class="p-9">
        <h4 class="w-full text-2xl text-transparent bg-clip-text bg-gradient-to-r font-bold text-lg-gradient uppercase">
            WELCOME, {{session.user.name}}
        </h4>
        <h1 class="text-5xl mb-3">
            Let's <span class="text-lg-gradient" style="display:initial!important;">get started!</span> 
        </h1>
        <p class="mb-1">You just verified your email! 🎉</p>
        <p class="mb-1">FormRocket is a powerful platform to store all your HTML form responses.</p>
        <h1 class="text-4xl mb-3 mt-9 mb-3 text-bold">Actions <Icon icon="Paper" bulk size="35px" /></h1>
        <p class="mb-5">Try out some of our recommended actions!</p>
        <div class="flex flex-wrap">
            <div class="w-full md:w-1/3 lg:w-1/4 p-3">
                <Card title="Create a form!" text="Build your very first form!" href="/new" />
            </div>
            <div class="w-full md:w-1/3 lg:w-1/4 p-3">
                <Card title="Visit dashboard" text="Check out your dashboard!" href="/" />
            </div>
            <div class="w-full md:w-1/3 lg:w-1/4 p-3">
                <Card title="Manage settings" text="View and manage your account" href="/settings" />
            </div>
            <div class="w-full md:w-1/3 lg:w-1/4 p-3">
                <Card title="View plans" text="View our plans & upgrade!" href="/pricing" />
            </div>
        </div>
        </AppContent>
</div>
</template>
<script setup>
    import { ref } from 'vue'
    import { login, logout, session } from '@/services/auth.js'
    import Navbar from '@/components/Navbar.vue'
    import AppContent from '@/components/AppContent.vue'
    import Card from '@/components/Card.vue'
    import Icon from '@/iconly/iconly.vue'

import ShowError from './ShowError.vue';


</script>