<template>
<div v-if="session.user">
        redirecting...
    </div>

    <div v-else>
        <Navbar :session="session" :showBack="true" :showDashboard="true" />
           <div class="appContent">
                
                
    <div class="mx-auto max-w-7xl">
        <div class="flex flex-col lg:flex-row">
            <div class="relative w-full bg-cover lg:w-6/12 xl:w-7/12">
                <div class="relative flex flex-col pt-[10%] w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                    <div class="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                        <div class="relative">
                            <h4 class="w-full text-2xl text-transparent bg-clip-text bg-gradient-to-r font-bold text-lg-gradient uppercase">FORMROCKET</h4>
                            <h1 class="text-5xl font-bold text-gray-300 xl:text-6xl">Welcome to <span style="display:initial!important;" class="text-lg-gradient">FormRocket.</span></h1>
                            <p class="text-2xl text-gray-400 mt-4">Let's get you started on the most powerful HTML form backend!</p>
                        </div>
                     </div>
                </div>
            </div>

            <div class="w-full lg:w-6/12 xl:w-5/12">
                <div class="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                    <h4 class="w-full text-3xl font-bold">Sign up</h4>
                    <p class="text-lg text-gray-500">Already have an account? <a class="text-pink-500 cursor-pointer hover:text-pink-400">Sign in</a>.</p>
                    <div class="relative w-full mt-10 space-y-8">
                        <div class="relative">
                            <label class="font-medium text-gray-400">Name</label>
                            <input type="text" class="block w-full px-4 py-4 mt-2 text-xl rounded-lg focus:outline-none focus:ring-2 focus:ring-white" placeholder="Name">
                        </div>
                        <div class="relative">
                            <label class="font-medium text-gray-400">Email</label>
                            <input type="text" class="block w-full px-4 py-4 mt-2 text-xl rounded-lg focus:outline-none focus:ring-2 focus:ring-white" placeholder="Email Address">
                        </div>
                        <div class="relative">
                            <label class="font-medium text-gray-400">Password</label>
                            <input type="password" class="block w-full px-4 py-4 mt-2 text-xl rounded-lg focus:outline-none focus:ring-2 focus:ring-white" placeholder="Password">
                        </div>
                        <div class="relative">
                            <button class="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-pink-600 rounded-lg hover:bg-pink-700 ease">Create Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>      
                </div>


</div>
</template>
<script setup>
import { session } from '@/services/auth.js'
import { useRouter } from 'vue-router';
import ShowError from '@/components/ShowError.vue';
import Navbar from '@/components/Navbar.vue';
import Icon from '@/iconly/iconly.vue';
import {ref} from 'vue'
const router = useRouter();

const userObj = {
    email: "",
    username: "",
    password: ""
}

if (session?.value?.user) {
    router.push('/')
}


const plans = {
    0: "Basic",
    1: "Premium",
    2: "Business"
}
</script>
