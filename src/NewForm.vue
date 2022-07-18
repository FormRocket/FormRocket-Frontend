<template>
    <div v-if="!session.user">Your not logged in bozo</div>

    <div v-else>
create form
</div>
</template>
<script setup>
import { session } from '@/services/auth.js'
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
