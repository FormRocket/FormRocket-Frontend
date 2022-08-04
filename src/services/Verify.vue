<template>
<div v-if="!session.user">
    <ShowError error="unauthorized" />
</div>
<div v-else-if="session.user.isVerified"><Navbar :showDashboard="true" />
    <div class="appContent p-9">
    <svg style="width:80px;height:80px;" class="text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                <h1 class="text-5xl mb-3 text-red-500">Already verified!</h1>
                <p>Your account is already verified- no need to redo verification!</p>
    </div></div>
<div v-else-if="!emailToken || !/^[0-9a-f]*$/.test(emailToken)">
    <Navbar :showDashboard="true" />
    <div class="appContent p-9">
    <svg style="width:80px;height:80px;" class="text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                <h1 class="text-5xl mb-3 text-red-500">Invalid token!</h1>
                <p>That&apos;s not a valid token!</p>
    </div>
</div>

    <div v-else>
    <Navbar :showDashboard="true" />
    <div class="appContent p-9">
        <h4 class="w-full text-2xl text-transparent bg-clip-text bg-gradient-to-r font-bold text-lg-gradient uppercase">FORMROCKET</h4>
        <h1 class="text-5xl mb-3">Verify your <span style="display:initial !important;" class="text-lg-gradient">email address</span></h1>
        <p class="mb-5">Complete the challenge below to finish verifying.</p>
    <vue-hcaptcha sitekey="1f0ce22d-020d-4fa7-834b-88d971de8d8c" @verify="onVerify"></vue-hcaptcha>
    </div>
    </div>
</template>
<script setup>
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';
import { useRoute, useRouter } from 'vue-router';
import { session, login, logout } from '@/services/auth.js';
import Navbar from '@/components/Navbar.vue';
import { ref } from "vue"
import { request } from './request.js';
import ShowError from '../components/ShowError.vue';
const router = useRouter();
const route = useRoute();
const emailToken = ref(route.params.token);

async function onVerify(token) {
    const response = await request({
        url: "/api/verifyEmail/submit",
        method: "POST",
        body: {
            captcha: token,
            token: emailToken.value
        }
    })

    if (response.status != 200) {
        swal("Error!", response.data?.error?.data || "Unknown error", "error");
    } else {
        session.user.isVerified = true
    }
    router.push("/");
} 

</script>