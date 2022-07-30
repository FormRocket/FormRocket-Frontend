<template>
    <Navbar :session="null" :showDashboard="true" />
    <div class="appContent">
         <div class="p-9">
                <svg style="width:80px;height:80px;" class="text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                <h1 class="text-5xl mb-3 text-red-500">Oops!</h1>
                <p>That path does not seem to exist! Please check the path and try again.</p>
    </div>
    </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue"
</script>