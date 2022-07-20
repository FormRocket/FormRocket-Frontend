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
                <h1 class="text-5xl mb-5">Create a <span style="display:initial !important;"
                    class="text-lg-gradient">new form.</span> </h1>
                <p>Create a new form on the best form backend.</p>
                </div>
</div>
</template>
<script setup>
import { session } from '@/services/auth.js'
import { useRoute } from 'vue-router';
import ShowError from '@/components/ShowError.vue';
import Navbar from '@/components/Navbar.vue';
const route = useRoute();
</script>
