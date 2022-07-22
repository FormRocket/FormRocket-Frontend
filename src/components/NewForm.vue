<template>
<div v-if="!session.user">
        <Navbar :session="null" :showBack="true" />
        <div class="appContent">
            <ShowError error="unauthorized" />
        </div>
    </div>

    <div v-else>
        <Navbar :session="session" :showBack="true" :showDashboard="true" />
           <div class="appContent p-9">
                <h4 class="w-full text-2xl text-transparent bg-clip-text bg-gradient-to-r font-bold text-lg-gradient uppercase">FORMROCKET {{plans[session.user.plan]}}</h4>
                <h1 class="text-5xl mb-5 mt-2">Build a <span style="display:initial !important;"
                    class="text-lg-gradient">New Form.</span> </h1>
                <p>Start recieving submissions right away!</p>
                
                <div v-if="atState == 'formName'">
                <h1 class="text-3xl mt-8 mb-2">What would you like your form to be called?</h1>
                <p>Set a name for your new form.</p>
                <input placeholder="Cool form" class="cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />

                <div class="block pt-[20px]">
                <button disabled style="opacity: 50%" class="cursor-not-allowed sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-[#222222] focus:outline-none">&lt; BACK</button> 
                <button class="ml-2 introductionButton sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-[#222222] focus:outline-none" @click="changeState('blockedIps')">NEXT &gt;</button>
                </div>
                
                </div>

                <div v-else-if="atState == 'blockedIps'">
                <h1 class="text-3xl mt-8 mb-2">Would you like to add any IP blocks?</h1>
                <p>Block IPs from submitting to your form. Split with a comma.</p>
                <input placeholder="127.0.0.1,..." class="cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />
                
                <div class="block pt-[20px]">
                <button class="introductionButton sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-[#222222] focus:outline-none" @click="changeState('formName')">&lt; BACK</button> 
                <button class="ml-2 introductionButton sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-[#222222] focus:outline-none" @click="changeState('integrations')">NEXT &gt;</button>
                </div>
                </div>

                <div v-else-if="atState == 'integrations'">
                <h1 class="text-3xl mt-8 mb-2">Would you like to add any integrations?</h1>
                <p>Setup integrations and get notified when a new response is recieved.</p>

                <h1 class="text-2xl mt-4">Discord</h1>
                <input placeholder="Discord Webhook URL" class="cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />

                <h1 class="text-2xl mt-4">Guilded</h1>
                <input placeholder="Guilded Webhook URL" class="cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />

                <h1 class="text-2xl mt-4">Slack</h1>
                <input placeholder="Slack Webhook URL" class="cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />

                <h1 class="text-2xl mt-4">Custom Server</h1>
                <input placeholder="Custom Server URL" class="cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />
                
                <div class="block pt-[20px]">
                <button class="introductionButton sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-[#222222] focus:outline-none" @click="changeState('blockedIps')">&lt; BACK</button> 
                <button class="ml-2 introductionButton sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-[#222222] focus:outline-none" @click="changeState(null)">NEXT &gt;</button>
                </div>
                </div>



                <!--<h1 class="text-4xl mt-8 mb-2">User Token <Icon icon="Password" bulk size="35px" /></h1>
                <p>This is used as an authorization token for all FormRocket requests.<br /><b>Never share with anyone.</b></p>
                <input disabled :value="session.token" class="text-white p-1 mt-4 px-3 rounded-lg" />
                -->

                
                </div>


</div>
</template>
<script setup>
import { session } from '@/services/auth.js'
import { useRoute } from 'vue-router';
import ShowError from '@/components/ShowError.vue';
import Navbar from '@/components/Navbar.vue';
import Icon from '@/iconly/iconly.vue';
import {ref} from 'vue'
const route = useRoute();

const atState = ref("formName")

function changeState(state) {
    atState.value = state
}

const plans = {
    0: "Basic",
    1: "Premium",
    2: "Business"
}
</script>
