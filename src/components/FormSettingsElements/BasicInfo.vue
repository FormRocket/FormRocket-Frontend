<template>

   <h1 class="text-5xl mb-5"><span style="display:initial !important;" class="text-lg-gradient">{{form.name}}:</span> Basic Info </h1>
                <p>View your form&apos;s basic information.</p>
                <h1 class="text-3xl mt-8 mb-2">Form Name</h1>
                <p>Your form&apos;s name. Can&apos;t be changed.</p>
                <input :value="formObj.name" disabled class="cursor-not-allowed cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />

                <h1 class="text-3xl mt-8 mb-2">Form ID</h1>
                <p>Your form&apos;s ID. Can&apos;t be changed.</p>
                <input :value="formObj.formId" disabled class="cursor-not-allowed cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />

                <h1 class="text-3xl mt-8 mb-2">Form Secret</h1>
                <p>Your form&apos;s secret. Can&apos;t be changed.</p>
                <input :value="formObj.formSecret" disabled class="cursor-not-allowed cursor-text text-gray-300 p-1 mt-4 px-3 rounded-lg" />


                <button class="hidden block pt-[20px]">
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
        swal("Oops!", "Something went wrong ["+ res.status +"]", "error")
    }
}
</script>