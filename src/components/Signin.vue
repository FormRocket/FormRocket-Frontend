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
                                    <h4
                                        class="w-full text-2xl text-transparent bg-clip-text bg-gradient-to-r font-bold text-lg-gradient uppercase">
                                        FORMROCKET</h4>
                                    <h1 class="text-5xl font-bold text-gray-300 xl:text-6xl">Welcome to <span
                                            style="display:initial!important;"
                                            class="text-lg-gradient">FormRocket.</span></h1>
                                    <p class="text-2xl text-gray-400 mt-4">Let's get you started on the most powerful
                                        HTML form backend!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full lg:w-6/12 xl:w-5/12">
                        <div class="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                            <h4 class="w-full text-3xl font-bold">Sign in</h4>
                            <p class="text-lg text-gray-500">Don't have an account? <router-link to="/signup"
                                    class="text-pink-500 cursor-pointer hover:text-pink-400">Sign up</router-link>.</p>
                            <div class="relative w-full mt-10 space-y-8">
                                <div class="relative">
                                    <label class="font-medium text-gray-400">Email</label>
                                    <input v-model="email" type="text"
                                        class="block w-full px-4 py-4 mt-2 text-xl rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                                        placeholder="Email Address">
                                </div>
                                <div class="relative">
                                    <label class="font-medium text-gray-400">Password</label>
                                    <input v-model="password" type="password"
                                        class="block w-full px-4 py-4 mt-2 text-xl rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                                        placeholder="Password">
                                </div>
                                <div class="relative">
                                    <button @click="submit"
                                        class="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-pink-600 rounded-lg hover:bg-pink-700 ease">Sign in</button>
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
import { request } from "@/services/request.js"
import { ref } from 'vue';
import { session } from '@/services/auth.js'
import { useRouter } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import { reloadAuth } from '@/services/auth.js'
const router = useRouter();

const email = ref("");
const password = ref("");

if (session?.value?.user) {
    router.push('/')
}

let isLoading = false;

async function submit() {
    if (isLoading) return;
    isLoading = true;
    const response = await request({
        url: "/api/auth/login",
        method: "POST",
        body: {
            email: email.value,
            password: password.value
        }
    })

    if (response.status != 200) {
        swal("Oops!", "Something went wrong ["+ response.status +"]", "error");
        isLoading = false;
    } else {
        window.localStorage.setItem("token", response.data.token);
        reloadAuth();
        router.push("/")
    }
}

const plans = {
    0: "Basic",
    1: "Premium",
    2: "Business"
}
</script>
