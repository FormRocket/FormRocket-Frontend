<template>

   <h1 class="text-5xl mb-5"><span style="display:initial !important;" class="text-lg-gradient">{{form.name}}:</span> Responses </h1>
                <p>View and manage this form&apos;s responses.</p>

                <div v-if="responses === 'not loaded'">
                   <p class="text-center m-9 text-xl font-bold">Loading...</p>
                </div>

                <div v-else-if="responses.length === 0" class="text-center m-9">
                    <p class="text-xl font-bold">No responses yet. Start by <a @click="switchTab('setup')" class="cursor-pointer hover:text-blue-500 text-blue-600">setting up your form</a>.</p>
                </div>

                <div v-else v-for="response in responses" :key="response.responseId" class="bg-[#121212] mx-[5%] my-[3%] p-4 rounded-lg">
                    <h1 class="text-4xl mb-4">Response #1 <Icon icon="Paper" bulk size="35px" /></h1>
                    <div class="md:flex md:mb-5 mb-8">
                          <button class="settingsBarItem mr-3 px-4 py-1 bg-[#151515] hover:bg-[#151515] rounded-lg"><b>RESPONSE DATA</b></button>
                          <button class="settingsBarItem mr-3 px-4 py-1 hover:bg-[#151515] rounded-lg">SENDER DATA</button>
                     </div>
                     <div class="p-4 bg-[#151515] rounded-lg">
                     <div class="md:flex mb-2" v-for="field in Object.keys(response.data)" :key="field">
                        <p class="md:w-1/2"><b>{{field}}</b>: <code>{{JSON.stringify(response.data[field])}}</code></p>
                        <p class="md:ml-9 md:w-1/2"><b>Type</b>: <code>{{typeof response.data[field]}}</code></p>
                    </div>
                    </div>
                </div>

</template>

<script setup>
import Navbar from "@/components/Navbar.vue"
import Icon from "@/iconly/iconly.vue"
import { ref } from "vue"


defineProps({
    form: {
        type: Object
    },
    session: {
        type: Object
    },
    responses: {},
    switchTab: {}
})

</script>