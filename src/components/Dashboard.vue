<template>
    <template v-if="session.user">
        <Navbar :session="session" :showLogout="true" :showNewForm="true" />
        <div class="p-10 appContent">
            <h1 class="text-6xl mb-3">Hey, <span style="display:initial !important;"
                    class="text-lg-gradient">{{ session.user.name }}</span>!</h1>
            <p class="text-lg mb-5">Manage your forms.</p>

            <div class="card shadow rounded-xl p-4 max-w-sm w-full cursor-pointer bg-[#111010] hover:bg-[#212122]">
                <h1 class="text-2xl mb-3">Cool form</h1>
                <p class="text-lg">Created yesterday.</p> <!-- use the time library from the old version -->
            </div>
        </div>
    </template>
    <template v-else>
        <Navbar :session="null" :showLogin="true" />
        <div class="p-10 appContent">
            <center>
                <h1 class="text-6xl font-bold m-3">Introducing <span class="text-lg-gradient">FormRocket3.</span></h1>
                <p class="text-lg">Create powerful HTML forms, store responses, and send to your favorite apps.</p>
            </center>
        </div>
    </template>
</template>

<script setup>
import { session } from '@/services/auth.js'
import Navbar from '@/components/Navbar.vue'

const plans = {
    0: "Basic",
    1: "Premium",
    2: "Business"
}

console.log(session)
</script>