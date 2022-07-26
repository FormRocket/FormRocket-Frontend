<template>

   <h1 class="text-5xl mb-5"><span style="display:initial !important;" class="text-lg-gradient">{{form.name}}:</span> Integrations</h1>
                <p>Tweak your form&apos;s integrations &amp; add new ones.</p>

                <h1 class="text-3xl mt-4">Discord</h1>
                <p class="mt-2">Connect your form to a Discord channel.</p>
                <input v-bind:value="null" v-on:input="formObj.discordWebhook = $event.target.value" placeholder="Discord Webhook URL" class="cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />

                <h1 class="text-3xl mt-4">Slack (Business Plan)</h1>
                <p class="mt-2">Connect your form to a Slack room. Requires the business plan.</p>
                <p class="mt-2">You can find your Slack webhook URL from the Incoming WebHook Slack app.</p>
                <input v-bind:value="formObj.slackWebhook" v-on:input="formObj.slackWebhook = $event.target.value" :placeholder="session.user.plan >= 2 ? 'Slack Webhook URL' : 'Business Plan Feature'" :class="'cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg' + (session.user.plan <= 2 ? ' cursor-not-allowed' : '')" :disabled="session.user.plan >= 2 ? false : true" />

                <h1 class="text-3xl mt-4">Custom Server (Premium)</h1>
                <p class="mt-2">Connect your form to a custom server. Requires the premium plan.</p>
                <input v-bind:value="formObj.customWebhook" v-on:input="formObj.customWebhook = $event.target.value" :placeholder="session.user.plan >= 1 ? 'Custom Server URL' : 'Premium Feature'" :class="'cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg' + (session.user.plan <= 1 ? ' cursor-not-allowed' : '')" :disabled="session.user.plan >= 1 ? false : true"  />
                
                <button class="block pt-[20px]">
                    <button @click="saveForm" :style="((formObj == form) ? 'opacity:50%;cursor:not-allowed!important;' : '')" :class="'block introductionButton sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-[#222222] focus:outline-none' + ((formObj == form) ? ' cursor-not-allowed' : '')">SAVE</button>
                </button>

</template>

<script setup>

import Navbar from "@/components/Navbar.vue"
import { request } from "@/services/request.js"
// dont use const, we cant change the value of the props.form object when we update it.
let props = defineProps({
    form: {
        type: Object
    },
    session: {
        type: Object
    }
})

let formObj = JSON.parse(JSON.stringify(props.form)) 
// halal
async function saveForm() {
    if (formObj.discordWebhook && !formObj.discordWebhook.startsWith("https://discord.com/api/webhooks/")) {
        swal("Oops!", "Please enter a valid Discord Webhook URL", "error")
        return;
    }
    if (formObj.slackWebhook && !formObj.slackWebhook.startsWith("https://hooks.slack.com/")) {
        swal("Oops!", "Please enter a valid Slack Webhook URL", "error")
        return;
    }
    if (formObj.customWebhook && !formObj.customWebhook.startsWith("https://")) {
        swal("Oops!", "Please enter a valid Custom Server URL", "error")
        return;
    }


    console.log('[EVENT] saveForm: sending request...', formObj)
    let res = await request({
        url: '/api/forms/' + props.form.formId,
        method: 'PATCH',
        auth: true,
        body: formObj
    })

    if (res.status == 200) {
        swal("Success!", "Form updated successfully", "success")
        props.form = formObj
    } else {
        swal("Oops!", "Something went wrong ["+ res.status +"]", "error")
    }
    
}
</script>