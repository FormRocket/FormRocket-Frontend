<template>
    <div>Solve captcha to verify your email.</div>
    <vue-hcaptcha sitekey="1f0ce22d-020d-4fa7-834b-88d971de8d8c" @verify="onVerify"></vue-hcaptcha>
</template>
<script setup>
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';
import { useRoute, useRouter } from 'vue-router';
import { request } from './request.js';
const router = useRouter();
const route = useRoute();

const emailToken = route.params.token;

async function onVerify(token) {
    const response = await request({
        url: "/api/verifyEmail/submit",
        method: "POST",
        body: {
            captcha: token,
            token: emailToken
        }
    })

    if (response.status != 200) {
        swal("Error!", response.data?.error?.data || "Unknown error", "error");
    }
    router.push("/");
} 

</script>