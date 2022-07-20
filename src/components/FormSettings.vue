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
                     <div class="md:flex md:mb-5 mb-8">
                          <button class="settingsBarItem mr-3 px-4 py-1 bg-[#121212] hover:bg-[#121212] rounded-lg"><b>RESPONSES</b></button>
                          <button class="settingsBarItem mr-3 px-4 py-1 hover:bg-[#121212] rounded-lg" >BASIC INFO</button>
                          <button class="settingsBarItem mr-3 px-4 py-1 hover:bg-[#121212] rounded-lg">INTEGRATIONS</button>
                          <button class="settingsBarItem mr-3 px-4 py-1 hover:bg-[#121212] rounded-lg">SECURITY</button>
                          <button class="settingsBarItem mr-3 px-4 py-1 hover:bg-[#121212] rounded-lg">DANGER ZONE</button>
                     </div>
                <h1 class="text-5xl mb-5">View <span style="display:initial !important;" class="text-lg-gradient">{{form.name}}&apos;s</span> Responses </h1>
                <p>View and manage this form&apos;s responses.</p>

                <div class="bg-[#121212] mx-[5%] my-[3%] p-4 rounded-lg">
                    <h1 class="text-4xl mb-4">Response #1</h1>
                    <div class="md:flex md:mb-5 mb-8">
                          <button class="settingsBarItem mr-3 px-4 py-1 bg-[#151515] hover:bg-[#151515] rounded-lg"><b>RESPONSE DATA</b></button>
                          <button class="settingsBarItem mr-3 px-4 py-1 hover:bg-[#151515] rounded-lg">SENDER DATA</button>
                          <p class="display-block"><b>name</b></p>: <code>"ar"</code>
                     </div>
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
const route = useRoute();

const formId = route.params.id;

let form = null;
if (session.value.forms) {
    form = session.value.forms.find(x=>x.formId == formId)
}
</script>