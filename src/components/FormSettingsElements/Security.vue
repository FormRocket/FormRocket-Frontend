<template>

   <h1 class="text-5xl mb-5"><span style="display:initial !important;" class="text-lg-gradient">{{form.name}}:</span> Security </h1>
                <p>Tweak your form&apos;s security settings.</p>
                <h1 class="text-3xl mt-8 mb-2">Blocked IP Addresses</h1>
                <p>Block IPs from submitting to your form. Split with a comma.</p>
                <input :value="formObj.blockedIps" v-on:input="formObj.blockedIps = $event.target.value" placeholder="127.0.0.1,..." class="cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />
                
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