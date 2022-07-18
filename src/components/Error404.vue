<template>
    <Navbar :session="null" :showDashboard="true" />
    <div class="appContent">
        <h1>Error 404</h1>
        <br />
        <h2>Page not found.</h2>
    </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue"
</script>