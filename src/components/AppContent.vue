<template>
    <div class="appContent">
            <div class="appBanner" v-if="session.user && !session.user.isVerified">Your email address is not verified. <a @click="resend" :class="'ml-3' + (!emailIsDisabled ? ' text-blue-500 cursor-pointer hover:text-blue-400' : ' text-gray-500 cursor-not-allowed')">{{emailState}}</a></div>
            <div :class="props.class ? (props.class + ' innerAppcontent') : 'innerAppcontent'" :style="props.style">
                <slot></slot>
            </div>
    </div>
</template>

<script setup>
import { session, login, logout } from '@/services/auth.js'
import { ref } from "vue"
import { request } from '../services/request.js';
const props = defineProps({
    class: String,
    style: String
})
const emailState = ref('RESEND')
const emailIsDisabled = ref(false)

function resend() {
    if (emailIsDisabled.value) return
    emailState.value = 'SENDING...'
    emailIsDisabled.value = true

    request({
        url: "/api/verifyEmail/resend",
        method: 'POST',
        auth: true
    }).then(() => {
        emailState.value = 'RESENT'
        emailIsDisabled.value = true
    }).catch(data => {
        emailState.value = 'RESEND'
        emailIsDisabled.value = false

        swal({
            title: 'Error',
            text: data.data.error.data,
            icon: 'error'
        })
    })
    
}
</script>