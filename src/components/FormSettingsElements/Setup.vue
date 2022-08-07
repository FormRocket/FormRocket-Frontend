<template>

   <h1 class="text-5xl mb-5"><span style="display:initial !important;" class="text-lg-gradient">{{form.name}}:</span> Setup </h1>
                <p>Connect your frontend to this form and start using the most powerful form backend.</p>
                <div class="break-words bg-[#121212] mx-[5%] my-[3%] p-4 rounded-lg">
                    <h1 class="text-4xl mb-2">Submit with HTML</h1>
                <pre class="break-words">
<code>&lt;form action="https://api.formrocket.me/api/submit/{{form.formId}}" method="POST"&gt;
    &lt;label for="username"&gt;Username&lt;/label&gt;
    &lt;input id="username" type="text" name="username" placeholder="Enter Username" /&gt;
&lt;/form&gt;</code>
                </pre>

                </div>

                  <div class="break-words bg-[#121212] mx-[5%] my-[3%] p-4 rounded-lg">
                    <h1 class="text-4xl mb-2">...or Submit with JavaScript</h1>
                <pre>
<code>function submitForm() {
    const data = {
        username: "cool username"
    }

    fetch('https://api.formrocket.me/api/submit/{{form.formId}}/?json=true', {
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
defineProps({
    form: {
        type: Object
    },
    session: {
        type: Object
    }
})
</script>