<template>
    <Navbar :session="session" :showLogin="true" />
    <template v-if="session.user">
        <h1>Account: {{session.user.name}}</h1>
        <h1>ID: {{session.user.id}}</h1>
        <h1>Subscription: {{plans[session.user.plan]}}</h1>
        <img style="width: 50px; height: 50px" :src="session.user.avatar" />
    </template>
    <template v-else>

    </template>
</template>

<script setup>
import { session } from '../services/auth.js'
import Navbar from './Navbar.vue'

const plans = {
    0: "Basic",
    1: "Premium",
    2: "Business"
}

console.log(session)
</script>