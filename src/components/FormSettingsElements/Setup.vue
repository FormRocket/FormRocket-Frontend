<template>

   <h1 class="text-5xl mb-5"><span style="display:initial !important;" class="text-lg-gradient">{{form.name}}:</span> Setup </h1>
                <p>Connect your frontend to this form and start using the most powerful form backend.</p>
                <div class="bg-[#121212] mx-[5%] my-[3%] p-4 rounded-lg">
                    <h1 class="text-4xl mb-2">HTML</h1>
                <pre>
<code>&lt;form action="https://api.formrocket.me/api/submit/{{form.formId}}" method="POST"&gt;
    &lt;input type="text" name="username" value="Enter username" /&gt;
&lt;/form&gt;</code>
                </pre>

                </div>

                <div class="bg-[#121212] mx-[5%] my-[3%] p-4 rounded-lg">
                    <h1 class="text-4xl mb-2">Python</h1>
                <pre>
<code>aw hell nah ali really thought 💀</code>
                </pre>

                </div>

                <div class="bg-[#121212] mx-[5%] my-[3%] p-4 rounded-lg">
                    <h1 class="text-4xl mb-2">Client-side JS</h1>
                <pre>
<code>function submitForm() {
    const data = {
        username: "cool username"
    }

    fetch('https://api.formrocket.me/api/submit/{{form.formId}}', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}</code>
                </pre>

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