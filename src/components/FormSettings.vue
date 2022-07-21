<template>
    <div v-if="!session.user">
        <Navbar :session="null" :showBack="true" />
        <div class="appContent">
            <ShowError error="unauthorized" />
        </div>
    </div>
    <div v-else>
        <div v-if="form">
           <Navbar :session="session" :showBack="true" :showDashboard="true" />
           <div class="appContent p-9">
                     <div class="flex flex-wrap md:mb-5 mb-8">
                          <button @click="switchTab('responses')" :class="'mb-2 settingsBarItem px-4 py-1 rounded-lg'  + (showTab == 'responses' ? (' bg-[#121212] font-bold') : '')">RESPONSES</button>
                          <button @click="switchTab('setup')" :class="'mb-2 settingsBarItem px-4 py-1 rounded-lg'  + (showTab == 'setup' ? (' bg-[#121212] font-bold') : '')">SETUP FORM</button>
                          <button @click="switchTab('basicInfo')" :class="'mb-2 settingsBarItem px-4 py-1 rounded-lg'  + (showTab == 'basicInfo' ? (' bg-[#121212] font-bold') : '')" >BASIC INFO</button>
                          <button @click="switchTab('analytics')" :class="'mb-2 settingsBarItem px-4 py-1 rounded-lg'  + (showTab == 'analytics' ? (' bg-[#121212] font-bold') : '')">ANALYTICS</button>
                          
                          <button @click="switchTab('integrations')" :class="'mb-2 settingsBarItem px-4 py-1 rounded-lg'  + (showTab == 'integrations' ? (' bg-[#121212] font-bold') : '')">INTEGRATIONS</button>
                          <button @click="switchTab('thankYouPage')" :class="'mb-2 settingsBarItem px-4 py-1 rounded-lg'  + (showTab == 'thankYouPage' ? (' bg-[#121212] font-bold') : '')">THANK YOU PAGE</button>
                          
                          <button @click="switchTab('security')" :class="'mb-2 settingsBarItem px-4 py-1 rounded-lg'  + (showTab == 'security' ? (' bg-[#121212] font-bold') : '')">SECURITY</button>
                          <button @click="switchTab('dangerZone')" :class="'mb-2 settingsBarItem px-4 py-1 rounded-lg'  + (showTab == 'dangerZone' ? (' bg-[#121212] font-bold') : '')">DANGER ZONE</button>
                     </div>

                <div v-if="showTab == 'responses'">
                    <Responses :form="form" :session="session" />
                </div>

                <div v-else-if="showTab == 'setup'">
                    <Setup :form="form" :session="session" />
                </div>

                <div v-else-if="showTab == 'basicInfo'">
                    <BasicInfo :form="form" :session="session" />
                </div>

                <div v-else-if="showTab == 'analytics'">
                    <Analytics :form="form" :session="session" />
                </div>

                <div v-else-if="showTab == 'integrations'">
                    <Integrations :form="form" :session="session" />
                </div>

                <div v-else-if="showTab == 'thankYouPage'">
                    <ThankYouPage :form="form" :session="session" />
                </div>

                <div v-else-if="showTab == 'security'">
                    <Security :form="form" :session="session" />
                </div>

                <div v-else-if="showTab == 'dangerZone'">
                    <DangerZone :form="form" :session="session" />
                </div>

                <div v-else>
                    invalid tab
                </div>
                
                     

                

                
                
            </div>
        </div>

        <div v-else>
            <Navbar :session="session" :showBack="true" />
            <div class="appContent">
                <ShowError error="invalidForm" />
            </div>
        </div>

    </div>
</template>
<script setup>
import { session, login } from '@/services/auth.js'
import { useRoute } from 'vue-router';
import Card from "@/components/Card.vue";
import Navbar from "@/components/Navbar.vue";
import ShowError from '@/components/ShowError.vue';
import Icon from "@/iconly/iconly.vue";
import Responses from "@/components/FormSettingsElements/Responses.vue";
import Setup from "@/components/FormSettingsElements/Setup.vue";
import BasicInfo from "@/components/FormSettingsElements/BasicInfo.vue";
import Analytics from "@/components/FormSettingsElements/Analytics.vue";
import Integrations from "@/components/FormSettingsElements/Integrations.vue";

import ThankYouPage from "@/components/FormSettingsElements/ThankYouPage.vue";
import Security from "@/components/FormSettingsElements/Security.vue";
import DangerZone from "@/components/FormSettingsElements/DangerZone.vue";


import { ref } from 'vue'
const route = useRoute();

const showTab = ref("responses");

function switchTab(newTab) {
    showTab.value = newTab;
}

const formId = route.params.id;

let form = null;
if (session.value.forms) {
    form = session.value.forms.find(x=>x.formId == formId)
}
</script>