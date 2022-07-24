<template>

   <h1 class="text-5xl mb-5"><span style="display:initial !important;" class="text-lg-gradient">{{form.name}}:</span> Setup </h1>
                <p>Connect your frontend to this form and start using the most powerful form backend.</p>
                <div class="bg-[#121212] mx-[5%] my-[3%] p-4 rounded-lg">
                    <h1 class="text-4xl mb-2">HTML</h1>
                    <div class="md:flex md:mb-5 mb-8">
                          <button @click="setHtmlState('code')" :class="'settingsBarItem mr-3 px-4 py-1 hover:bg-[#151515] rounded-lg' + (htmlState == 'code' ? ' bg-[#151515] font-bold' : '')">CODE</button>
                          
                          <button @click="setHtmlState('preview')" :class="'settingsBarItem mr-3 px-4 py-1 hover:bg-[#151515] rounded-lg' + (htmlState == 'preview' ? ' bg-[#151515] font-bold' : '')">PREVIEW</button>

                     </div>
                    <div v-if="htmlState == 'code'">
                <pre>
<code>&lt;form action="https://api.formrocket.me/api/submit/{{form.formId}}" method="POST"&gt;
    &lt;input type="text" name="username" value="Enter username" /&gt;
&lt;/form&gt;</code>
                </pre>
                </div>

                <div v-else-if="htmlState == 'preview'">
                    
                </div>
                </div>

                

</template>

<script setup>
import Navbar from "@/components/Navbar.vue"
import { ref } from 'vue'

    const htmlState = ref('code')

    const setHtmlState = (state) => {
        htmlState.value = state
    }
defineProps({
    form: {
        type: Object
    },
    session: {
        type: Object
    }
})
</script>