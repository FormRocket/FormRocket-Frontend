<template>
<div v-if="!session.user">
        <Navbar :session="null" :showBack="true" />
        <div class="appContent">
            <ShowError error="unauthorized" />
        </div>
    </div>

    <div v-else-if="!session.user.isVerified">
        <Navbar :session="session" :showBack="true" />
        <AppContent>
            <ShowError error="unverified" />
        </AppContent>
    </div>

    <div v-else>
        <Navbar :session="session" :showBack="true" :showDashboard="true" />
        <AppContent class="p-9">
            <h4 class="w-full text-2xl text-transparent bg-clip-text bg-gradient-to-r font-bold text-lg-gradient uppercase">FORMROCKET {{plans[session.user.plan]}}</h4>
                <h1 class="text-5xl mb-3 mt-2">Build a <span style="display:initial !important;"
                    class="text-lg-gradient">new form.</span> </h1>
                <p>Start recieving submissions right away!</p>
                
                <div v-if="atState == 'formName'">
                <h1 class="text-3xl mt-8 mb-2">What would you like your form to be called?</h1>
                <p>Set a name for your new form.</p>
                <input v-bind:value="formObj.formName" v-on:input="formObj.formName = $event.target.value" placeholder="Cool form" class="cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />

                <div class="block pt-[20px]">
                <button disabled style="opacity: 50%" class="cursor-not-allowed sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-[#222222] focus:outline-none">&lt; BACK</button> 
                <button class="ml-2 introductionButton sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-[#222222] focus:outline-none" @click="changeState('blockedIps')">NEXT &gt;</button>
                </div>
                
                </div>

                <div v-else-if="atState == 'blockedIps'">
                <h1 class="text-3xl mt-8 mb-2">Would you like to add any IP blocks?</h1>
                <p>Block IPs from submitting to your form. Split with a comma.</p>
                <input v-bind:value="formObj.blockedIps" v-on:input="formObj.blockedIps = $event.target.value" placeholder="127.0.0.1,..." class="cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />
                
                <div class="block pt-[20px]">
                <button class="introductionButton sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-[#222222] focus:outline-none" @click="changeState('formName')">&lt; BACK</button> 
                <button class="ml-2 introductionButton sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-[#222222] focus:outline-none" @click="changeState('integrations')">NEXT &gt;</button>
                </div>
                </div>

                <div v-else-if="atState == 'integrations'">
                <h1 class="text-3xl mt-8 mb-2">Would you like to add any integrations?</h1>
                <p>Setup integrations and get notified when a new response is recieved.</p>

                <h1 class="text-2xl mt-4">Discord</h1>
                <input v-bind:value="formObj.discordWebhook" v-on:input="formObj.discordWebhook = $event.target.value" placeholder="Discord Webhook URL" class="cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />

                <h1 class="text-2xl mt-4">Slack</h1>
                <input v-bind:value="formObj.slackWebhook" v-on:input="formObj.slackWebhook = $event.target.value" placeholder="Slack Webhook URL" class="cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />

                <h1 class="text-2xl mt-4">Custom Server (Premium)</h1>
                <input v-bind:value="formObj.customWebhook" v-on:input="formObj.customWebhook = $event.target.value" :placeholder="session.user.plan >= 1 ? 'Custom Server URL' : 'Premium Feature'" class="cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" :disabled="session.user.plan >= 1 ? false : true"  />
                
                <div class="block pt-[20px]">
                <button class="introductionButton sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-[#222222] focus:outline-none" @click="changeState('blockedIps')">&lt; BACK</button> 
                <button class="ml-2 introductionButton sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-[#222222] focus:outline-none" @click="changeState('thankYouPage')">NEXT &gt;</button>
                </div>
                </div>

                <div v-if="atState == 'thankYouPage'">
                <h1 class="text-3xl mt-8 mb-2">Would you like to customize your form&apos;s thank you page?</h1>
                <p>Personalize your thank you page or set your own.</p>

                <h1 class="text-2xl mt-4">Title Text</h1>
                <input v-bind:value="formObj.titleText" v-on:input="formObj.titleText = $event.target.value" placeholder="Thank you!" class="cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />

                <h1 class="text-2xl mt-4">Success Message</h1>
                <input v-bind:value="formObj.successMessage" v-on:input="formObj.successMessage = $event.target.value" class="cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />

                <h1 class="text-2xl mt-4">Back Text</h1>
                <input v-bind:value="formObj.backText" v-on:input="formObj.backText = $event.target.value" class="cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />

                <h1 class="text-2xl mt-4 mb-3">Back URL</h1>
                <p>Defaults to the browsers default back action.</p>
                <input placeholder="Back URL" v-bind:value="formObj.backUrl" v-on:input="formObj.backUrl = $event.target.value" class="cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />
                
                <h1 class="text-3xl mt-4">Redirect URL</h1>
                <p class="mt-2">Redirect the user to a custom URL when the response has been submitted.</p>
                <input :value="formObj.redirectUrl" v-on:input="formObj.redirectUrl = $event.target.value" :placeholder="session.user.plan >= 2 ? 'Redirect URL' : 'Business Plan Feature'" :class="'cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg' + (session.user.plan <= 2 ? ' cursor-not-allowed' : '')" :disabled="session.user.plan >= 2 ? false : true"  />
                
                <div class="block pt-[20px]">
                <button class="introductionButton sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-[#222222] focus:outline-none" @click="changeState('integrations')">&lt; BACK</button> 
                <button class="ml-2 introductionButton sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-[#222222] focus:outline-none" @click="changeState('createForm')">NEXT &gt;</button>
                </div>
                </div>

                <div v-if="atState == 'createForm'">
                <h1 class="text-3xl mt-8 mb-2">Are you human?</h1>
                <p>Complete the CAPTCHA to finish building this form.</p>
                <div class="block pt-[20px]">
                <vue-hcaptcha sitekey="1f0ce22d-020d-4fa7-834b-88d971de8d8c" @verify="onVerify"></vue-hcaptcha>
                <button class="mt-5 introductionButton sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-[#222222] focus:outline-none" @click="changeState('thankYouPage')">&lt; BACK</button>
                </div>
                </div>



                <!--<h1 class="text-4xl mt-8 mb-2">User Token <Icon icon="Password" bulk size="35px" /></h1>
                <p>This is used as an authorization token for all FormRocket requests.<br /><b>Never share with anyone.</b></p>
                <input disabled :value="session.token" class="text-white p-1 mt-4 px-3 rounded-lg" />
                -->
        </AppContent>
    </div>
</template>
<script setup>
import AppContent from './AppContent.vue';
import { session } from '@/services/auth.js'
import { useRoute } from 'vue-router';
import ShowError from '@/components/ShowError.vue';
import Navbar from '@/components/Navbar.vue';
import Icon from '@/iconly/iconly.vue';
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';
import {ref} from 'vue'
const route = useRoute();
const loading = ref(false);

const atState = ref("formName")

function changeState(state) {
    atState.value = state
}

const formObj = {
    formName: "",
    discordWebhook: "",
    customWebhook: "",
    slackWebhook: "",
    blockedIps: "",
    successMessage: "This form has been submitted successfully! You may close this window now.",
    backText: "Back",
    backUrl: "",
    redirectUrl: "",
    titleText: "Thank you!",
    discordWebhookUsername: "",
    discordWebhookAvatarUrl: ""
}

function validateForm() {
    if (formObj.formName == null) {
        return {
            error: true,
            message: "Please enter a name for your form.",
            state: "formName"
        }
    }

    if (formObj.discordWebhook && !formObj.discordWebhook.startsWith("https://discord.com/api/webhooks/")) {
        return {
            error: true,
            message: "Please enter a valid Discord Webhook URL.",
            state: "integrations"
        }
    }

    if (formObj.customWebhook && !formObj.customWebhook.startsWith("https://")) {
        return {
            error: true,
            message: "Please enter a valid Custom Webhook URL.",
            state: "integrations"
        }
    }

    if (formObj.slackWebhook && !formObj.slackWebhook.startsWith("https://hooks.slack.com/")) {
        return {
            error: true,
            message: "Please enter a valid Slack Webhook URL.",
            state: "integrations"
        }
    }

    if (formObj.backUrl && !formObj.backUrl.startsWith("https://")) {
        return {
            error: true,
            message: "Please enter a valid Back URL.",
            state: "thankYouPage"
        }
    }

    return {
        error: false
    }
}

function onVerify(token) {
    if (!token) return;
    const validation = validateForm()
    if (validation.error) {
        changeState(validation.state)
        swal("Oops!", validation.message, "error")
        return
    }

    var url = "https://frapi.sweetsuite.tech/api/forms/create";

var xhr = new XMLHttpRequest();
xhr.open("POST", url);

xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("authorization", session.value.token);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
         if (xhr.status === 200) {
            window.location.href = '/settings/forms/' + JSON.parse(xhr.responseText).data.formId
         } else {
               if (JSON.parse(xhr.response).error.detail) {
            swal("Oops!", JSON.parse(xhr.response).error.detail, "error")
        } else if (xhr.response.error.data) {
                swal("Oops!", JSON.parse(xhr.response).error.data, "error")
        } else if (xhr.response.error.message) {
            swal("Oops!", JSON.parse(xhr.response).error.message, "error")
        } else {
            swal("Oops!", "Something went wrong", "error")
        }
         }
   }};

    var data = JSON.stringify({...formObj, ...{captcha: token}});

    xhr.send(data);

}

// debug
setInterval(() => {
    console.log(formObj)
}, 7000)


const plans = {
    0: "Basic",
    1: "Premium",
    2: "Business"
}
</script>
