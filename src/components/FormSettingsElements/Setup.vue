<template>

   <h1 class="text-5xl mb-5"><span style="display:initial !important;" class="text-lg-gradient">{{form.name}}:</span> Setup </h1>
                <p>Connect your frontend to this form and start using the most powerful form backend.</p>
                <div class="break-words bg-[#121212] mx-[5%] my-[3%] p-4 rounded-lg">
                    <h1 class="text-4xl mb-2">HTML</h1>
                <pre class="break-words">
<code>&lt;form action="https://api.formrocket.me/api/submit/{{form.formId}}" method="POST"&gt;
    &lt;input type="text" name="username" value="cool username" /&gt;
&lt;/form&gt;</code>
                </pre>

                </div>

                  <div class="break-words bg-[#121212] mx-[5%] my-[3%] p-4 rounded-lg">
                    <h1 class="text-4xl mb-2">JavaScript</h1>
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

                <div class="break-words bg-[#121212] mx-[5%] my-[3%] p-4 rounded-lg">
                    <h1 class="text-4xl mb-2">Roblox Lua</h1>
                <pre>
<code>local HttpService = game:GetService("HttpService")

function submitForm() {
  local data = {
    username = "cool username"
  }

  local json = HttpService:JSONEncode(data)

  HttpService:PostAsync(
    "https://api.formrocket.me/api/submit/{{form.formId}}/?json=true",
    json,
    Enum.HttpContentType.ApplicationJson,
    false
  )
}</code>
                </pre>
                </div>


                <div class="break-words bg-[#121212] mx-[5%] my-[3%] p-4 rounded-lg">
                    <h1 class="text-4xl mb-2">Python</h1>
                <pre>
<code>
import requests

data = {
    'username': 'cool username'
}

r = requests.post('https://api.formrocket.me/api/submit/{{form.formId}}/?json=true', data=data)
</code>
                </pre>
                </div>
               
                <div class="break-words bg-[#121212] mx-[5%] my-[3%] p-4 rounded-lg">
                    <h1 class="text-4xl mb-2">PHP</h1>
                <pre>
<code>
&lt;?php
$data = array(
    'username' => 'Enter username'
);

$r = requests.post('https://api.formrocket.me/api/submit/{{form.formId}}/?json=true', data=$data)
?&gt;
</code>
                </pre>
                </div>
                <div class="break-words bg-[#121212] mx-[5%] my-[3%] p-4 rounded-lg">
                    <h1 class="text-4xl mb-2">Ruby</h1>
                <pre>
<code>
require 'net/http'
require 'uri'

data = {
    'username': 'cool username'
}

uri = URI.parse('https://api.formrocket.me/api/submit/{{form.formId}}/?json=true')
http = Net::HTTP.new(uri.host, uri.port)
request = Net::HTTP::Post.new(uri.request_uri)
request.set_form_data(data)
response = http.request
</code>
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