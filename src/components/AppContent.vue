<template>
    <div class="appContent">
            <div class="appBanner" v-if="session.user && !session.user.isVerified">Your email is not verified!</div>
            <div :class="props.class ? (props.class + ' innerAppcontent') : 'innerAppcontent'" :style="props.style">
                <slot></slot>
            </div>
    </div>
</template>

<script setup>
import { session, login, logout } from '@/services/auth.js'
const props = defineProps({
    class: String,
    style: String
})
</script>