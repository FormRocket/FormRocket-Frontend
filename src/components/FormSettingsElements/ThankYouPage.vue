<template>

   <h1 class="text-5xl mb-5"><span style="display:initial !important;" class="text-lg-gradient">{{form.name}}:</span> Thank You Page </h1>
                <p>Customize your form&apos;s thank you page or set your own.</p>

                <h1 class="text-3xl mt-4">Title Text</h1>
                <p class="mt-2">Set the title that appears on the thank you page.</p>
                <input :value="formObj.titleText" v-on:input="formObj.titleText = $event.target.value" placeholder="Thank you!" class="cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />

                <h1 class="text-3xl mt-4">Success Message</h1>
                <p class="mt-2">Set the message that appears on the thank you page.</p>
                <input :value="formObj.successMessage" v-on:input="formObj.successMessage = $event.target.value" class="cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />

                <h1 class="text-3xl mt-4">Back Text</h1>
                <p class="mt-2">Set the text that appears on the Back button.</p>
                <input :value="formObj.backText" v-on:input="formObj.backText = $event.target.value" class="cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />

                <h1 class="text-3xl mt-4 mb-3">Back URL</h1>
                <p class="mt-2">Defaults to the browsers default back action.</p>
                <input placeholder="Back URL" :value="formObj.backUrl" v-on:input="formObj.backUrl = $event.target.value" class="cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />
                

                <h1 class="text-3xl mt-4">Redirect URL</h1>
                <p class="mt-2">Redirect the user to a custom URL when the response has been submitted.</p>
                <input :value="formObj.redirectUrl" v-on:input="formObj.redirectUrl = $event.target.value" :placeholder="session.user.plan >= 2 ? 'Redirect URL' : 'Business Plan Feature'" :class="'cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg' + (session.user.plan <= 2 ? ' cursor-not-allowed' : '')" :disabled="session.user.plan >= 2 ? false : true"  />
                

                <button class="block pt-[20px]">
                    <button @click="saveForm" :style="((formObj == form) ? 'opacity:50%;cursor:not-allowed!important;' : '')" :class="'block introductionButton sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-[#222222] focus:outline-none' + ((formObj == form) ? ' cursor-not-allowed' : '')">SAVE</button>
                </button>

                

</template>

<script setup>
import Navbar from "@/components/Navbar.vue"
import { request } from "@/services/request.js"
let props = defineProps({
    form: {
        type: Object
    },
    session: {
        type: Object
    }
})


let formObj = JSON.parse(JSON.stringify(props.form)) 
// halal
async function saveForm() {
    console.log('[EVENT] saveForm: sending request...', formObj)
    let res = await request({
        url: '/api/forms/' + props.form.formId,
        method: 'PATCH',
        auth: true,
        body: formObj
    })

    if (res.status == 200) {
        swal("Success!", "Form updated successfully", "success")
        props.form = formObj
    } else {
         if (res.data.error.detail) {
            swal("Oops!", res.data.error.detail, "error")
        } else if (res.data.error.data) {
            if (res.data.error.data == 'Internal Database Error') {
                swal("Oops!", "There's nothing to change!", "error")
            } else {
                swal("Oops!", res.data.error.data, "error")
            }
        } else if (res.data.error.message) {
            swal("Oops!", res.data.error.message, "error")
        } else {
            swal("Oops!", "Something went wrong", "error")
        }
    }
}
</script>