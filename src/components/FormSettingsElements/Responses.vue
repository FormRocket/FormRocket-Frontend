<template>

   <h1 class="text-5xl mb-5"><span style="display:initial !important;" class="text-lg-gradient">{{form.name}}:</span> Responses </h1>
                <p>View and manage this form&apos;s responses.</p>

                <div v-if="responses === null">
                loading responses
                </div>

                <div v-for="response in responses" :key="response.responseId" class="bg-[#121212] mx-[5%] my-[3%] p-4 rounded-lg">
                    <h1 class="text-4xl mb-4">Response #1 <Icon icon="Paper" bulk size="35px" /></h1>
                    <div class="md:flex md:mb-5 mb-8">
                          <button class="settingsBarItem mr-3 px-4 py-1 bg-[#151515] hover:bg-[#151515] rounded-lg"><b>RESPONSE DATA</b></button>
                          <button class="settingsBarItem mr-3 px-4 py-1 hover:bg-[#151515] rounded-lg">SENDER DATA</button>

                     </div>
                     
                     <div class="p-4 bg-[#151515] rounded-lg">
                     <div class="md:flex mb-2">
                        <p class="md:w-1/2"><b>name</b>: <code>"ar"</code></p>
                        <p class="md:ml-9 md:w-1/2"><b>Type</b>: <code>String</code></p>
                    </div>
                     <div class="md:flex mb-2">
                        <p class="md:w-1/2"><b>email</b>: <code>"test@example.com"</code></p>
                        <p class="md:ml-9 md:w-1/2"><b>Type</b>: <code>String</code></p>
                    </div>
                    </div>
                </div>

</template>

<script setup>
import Navbar from "@/components/Navbar.vue"
import Icon from "@/iconly/iconly.vue"

var responses = null

var url = `https://api.formrocket.me/api/${form.formId}/responses`;

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("authorization", session.value.token);

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.responseText);
   }};

xhr.send();


defineProps({
    form: {
        type: Object
    },
    session: {
        type: Object
    }
})
</script>