<template>
    <div class="m-[50px]">
        <svg class="text-green-500" style="width:100px;height:100px;" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
    <h1 id="titleText" class="text-6xl mb-3"><span style="display:initial !important;" class="text-green-500">{{params.titleText}}</span></h1>
    <p id="message" class="text-xl mb-2">{{params.message}}</p> 
    <button @click="$router.push('/privacy')" type="button" class="introductionButton text-white mt-2 bg-[#222222] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">PRIVACY POLICY</button>
    <button id="backText" :onclick="(!params.backUrl ? 'history.back()' : `window.location.href = '${params.backUrl}'`)" type="button" class="uppercase introductionButton text-white mt-2 bg-pink-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{{params.backText}}</button>
    <button @click="$router.push('/')" style="margin-right:2%;margin-bottom:2%;position:fixed;right:0px;bottom:0px;font-weight:900;" class="text-pink-600 p-3 bg-neutral-900 rounded-lg hover:bg-neutral-800" title="Create powerful forms right from your HTML without worrying about storing responses.">🚀 Powered by FormRocket</button>
        
    </div>

</template>
<script setup>
import Navbar from "@/components/Navbar.vue"
import { useRoute, useRouter } from 'vue-router';
import {ref} from 'vue';

const params = ref({
    message: 'This form has been successfully submitted. You may exit this page now.',
    titleText: 'Thank you!',
    backText: 'Back',
    backUrl: ''
})
const router = useRoute();
console.log(router.query)
        const urlParams = router.query;
        const message = urlParams.message
        const backText = urlParams.backText
        const backUrl = urlParams.backUrl
        const titleText = urlParams.titleText

                if (message) {
                    params.value.message = message
                } 

                if (backText) {
                    params.value.backText = backText
                }

                if (backUrl) {
                    if (backUrl.startsWith('http') || backUrl.startsWith('https')) {
                        params.value.backUrl = backUrl
                    } else {
                        console.log('[warning] an invalid backUrl was specified, ignored.')
                    }
                }

                if (titleText) {
                    params.value.titleText = titleText
                }

</script>