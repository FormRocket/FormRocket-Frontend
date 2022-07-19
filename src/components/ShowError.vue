<template>
<div v-if="error == 'unauthorized'">
    <div class="p-9">
                <svg style="width:80px;height:80px;" class="text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                <h1 class="text-5xl mb-3 text-red-500">Not logged in!</h1>
                <p>Please login to view this page!</p>
                <div><button @click="login" class="mt-4 introductionButton sm:display-block text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-gray-800">LOGIN WITH GITHUB</button></div>
    </div>
</div>

<div v-else-if="error == 'invalidForm'">
    <div class="p-9">
                <svg style="width:80px;height:80px;" class="text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                <h1 class="text-5xl mb-3 text-red-500">Oops!</h1>
                <p>That form does not seem to exist! Please check the ID and try again.</p>
    </div>
</div>
</template>
<script setup>
import { session, login } from '@/services/auth.js'
import { useRoute } from 'vue-router';
const route = useRoute();

defineProps({
    error: String
})

function back() {
    window.history.back();
}
</script>
