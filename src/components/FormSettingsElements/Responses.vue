<template>

   <h1 class="text-5xl mb-5"><span style="display:initial !important;" class="text-lg-gradient">{{form.name}}:</span> Responses </h1>
                <p>View and manage this form&apos;s responses.</p>

                <div v-if="form.locked">
                    <h1 class="text-3xl mt-8 mb-2">Your form is locked!</h1>
                    <p>Unlock your form to recieve new submissions!</p>
                </div>

                <div v-if="responses === 'not loaded'">
                   <p class="text-center m-9 text-xl font-bold">Loading...</p>
                </div>

                <div v-else-if="responses.length === 0" class="text-center m-9">
                    <p class="text-xl font-bold">No responses yet. Start by <a @click="switchTab('setup')" class="cursor-pointer hover:text-blue-500 text-blue-600">setting up your form</a>.</p>
                </div>

                <div v-else v-for="(response, index) in responses" :key="response.responseId" class="bg-[#121212] mx-[5%] my-[3%] p-4 rounded-lg">
                    <h1 class="text-4xl mb-4">Response #{{index + 1}} <Icon icon="Paper" bulk size="35px" /></h1>
                   <!-- <div class="md:flex md:mb-5 mb-8">
                          <button class="settingsBarItem mr-3 px-4 py-1 bg-[#151515] hover:bg-[#151515] rounded-lg"><b>RESPONSE DATA</b></button>
                          <button class="settingsBarItem mr-3 px-4 py-1 hover:bg-[#151515] rounded-lg">SENDER DATA</button>
                     </div> -->
                     <h1 class="text-2xl mb-4">Response Data</h1>
                     <div class="p-4 bg-[#151515] rounded-lg">
                     <div class="md:flex mb-2" v-for="field in Object.keys(response.data)" :key="field">
                        <p class="md:w-1/2"><b>{{field}}</b>: <code>{{JSON.stringify(response.data[field])}}</code></p>
                        <p class="md:ml-9 md:w-1/2"><b>Type</b>: <code>{{typeof response.data[field]}}</code></p>
                    </div>
                    </div>

                    
                    <h1 class="text-2xl mb-4 mt-4">Other Data</h1>
                    <div class="p-4 bg-[#151515] rounded-lg">
                     <div class="md:flex mb-2">
                        <p class="md:w-1/2"><b>User Agent</b>: <code>{{response.userAgent}}</code></p>
                        <p class="md:ml-9 md:w-1/2"><b>Browser</b>: <code>{{getBrowserFromUserAgent(response.userAgent).browser}} {{getBrowserFromUserAgent(response.userAgent).version}}</code></p>
                      </div>
                      <div class="md:flex mb-2">
                        <p class="md:w-1/2"><b>Operating System</b>: <code>{{getOperatingSystemFromUserAgent(response.userAgent)}}</code></p>
                        <p class="md:ml-9 md:w-1/2"><b>Recieved</b>: <code>{{response.createdAt}} ({{formatDistance(response.createdAt, new Date(), {addSuffix: true})}})</code></p>
                      </div>
                      </div>
                </div>

                <div v-if="responses != 'not loaded' && responses[0]">
                <div class="text-center" v-if="/*responses.length >= 25*/true">
                    <button @click="fetchRespones" class="introductionButton mx-[5%] my-[3%] w-[90%] text-center bg-[#121212] cursor-pointer rounded-lg p-2 text-center">
                        {{!isLoading ? "LOAD MORE" : "LOADING..." }}
                    </button>
                </div>
                </div>

</template>

<script setup>
import Icon from "@/iconly/iconly.vue"
import { formatDistance } from "date-fns";
import { ref, onMounted } from "vue"
import { request } from "@/services/request.js"

let responses = ref([]);

let isLoading = false;

let lastResponseTimestamp = 0;

const props = defineProps({
    form: {
        type: Object
    },
    session: {
        type: Object
    },
    formId: String,
    switchTab: {}
})

async function fetchRespones() {
    if (isLoading) return;
    isLoading = true;
    try {
        const APIResponse = await request({
            url: `/api/${encodeURIComponent(props.formId)}/responses`,
            method: "POST",
            body: {
                timestamp: lastResponseTimestamp
            },
            auth: true
        })

        if (APIResponse.status == 200) {
            const lastElement = APIResponse.data[APIResponse.data.length - 1];
            if (lastElement) {
                lastResponseTimestamp = lastElement.createdAt;
            }
            if (Array.isArray(responses.value)) {
                responses.value.push(...APIResponse.data)
            } else {
                responses.value = APIResponse.data
            }
        }

        isLoading = false;
    } catch {
        isLoading = false;
    }
}

onMounted(() => {
    lastResponseTimestamp = 0;
    responses.value = "not loaded";
    isLoading = false;
    fetchRespones();
})

function getBrowserFromUserAgent(userAgent) {
    var browser = '';
var browserVersion = 0;

if (/Opera[\/\s](\d+\.\d+)/.test(userAgent)) {
    browser = 'Opera';
} else if (/MSIE (\d+\.\d+);/.test(userAgent)) {
    browser = 'MSIE';
} else if (/Navigator[\/\s](\d+\.\d+)/.test(userAgent)) {
    browser = 'Netscape';
} else if (/Chrome[\/\s](\d+\.\d+)/.test(userAgent)) {
    browser = 'Chrome';
} else if (/Safari[\/\s](\d+\.\d+)/.test(userAgent)) {
    browser = 'Safari';
    /Version[\/\s](\d+\.\d+)/.test(userAgent);
    browserVersion = new Number(RegExp.$1);
} else if (/Firefox[\/\s](\d+\.\d+)/.test(userAgent)) {
    browser = 'Firefox';
}
if(browserVersion === 0){
    browserVersion = parseFloat(new Number(RegExp.$1));
}

    return {
        browser: browser,
        version: browserVersion
    }
}

function getOperatingSystemFromUserAgent(userAgent) {
    if (!userAgent) return;

    userAgent = userAgent.toLowerCase();
    if (userAgent.includes('windows')) {
        return 'Windows';
    } else if (userAgent.includes('mac')) {
        return 'MacOS';
    } else if (userAgent.includes('android')) {
        return 'Android';
    } else if (userAgent.includes('linux')) {
        return 'Linux';
    } else if (userAgent.includes('iphone')) {
        return 'iOS';
    }  else if (userAgent.includes('ipad')) {
        return 'iPadOS';
    } else {
        return 'Unknown';
    }
    return operatingSystem
}

</script>