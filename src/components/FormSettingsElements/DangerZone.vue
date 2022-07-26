<template>

   <h1 class="text-5xl mb-5"><span style="display:initial !important;" class="text-lg-gradient">{{form.name}}:</span> Danger Zone</h1>
                <p>
                    Potentially dangerous actions are available below.
                </p>

                <h1 class="text-3xl mt-4">Delete Form</h1>
                <p class="mt-2">Permanently delete this form and all responses associated with it.</p>
                <button @click="deleteForm" class="block pt-[20px]">
                    <button :class="'block introductionButton sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-red-500 focus:outline-none'">DELETE</button>
                </button>

                 <h1 class="text-3xl mt-4">Freeze Form</h1>
                <p class="mt-2">Freeze your form&apos;s responses in their current state, and block future submissions. </p>
                <button @click="toggleLockForm" class="block pt-[20px]">
                    <button :class="'block introductionButton sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-500 focus:outline-none'">
                        {{formObj.locked ? 'UNFREEZE' : 'FREEZE'}}
                    </button>
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

async function deleteForm() {
    console.log('[EVENT] deleteForm: sending request...', formObj)
    let res = await request({
       
    })

    if (res.status == 200) {
        window.location.href = '/'
    } else {
        swal("Oops!", "Something went wrong ["+ res.status +"]", "error")
    }
}


async function toggleLockForm() {
    var action = "lock"
    if (props.form?.locked) {
        toLock = "unlock"
    }
    console.log('[EVENT] toggleLockForm: sending request...', formObj)
    let res = await request({
       auth: true,
       method: "POST",
        url: "/api/forms/" + formObj.id + "/" + action
    })

    if (res.status == 200) {
        formObj.locked = !formObj.locked
    } else {
        swal("Oops!", "Something went wrong ["+ res.status +"]", "error")
    }
}
</script>