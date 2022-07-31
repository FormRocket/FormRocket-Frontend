<template>

   <h1 class="text-5xl mb-5"><span style="display:initial !important;" class="text-lg-gradient">{{form.name}}:</span> Danger Zone</h1>
                <p>
                    Potentially dangerous actions are available below.
                </p>

                <div v-if="!confirmDelete">
                <h1 class="text-3xl mt-6">Delete Form</h1>
                <p class="mt-2">Permanently delete this form and all responses associated with it.</p>
                <button @click="showConfirmDelete" :class="'mt-[20px] px-6 block introductionButton sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-red-500 focus:outline-none'">
                    DELETE
                </button>
                <!--<div v-if="isDeleteLoading">
                    <button :class="'mt-[20px] px-9 block introductionButton sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-red-500 focus:outline-none'">
                        <div role="status">
    <svg aria-hidden="true" class="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-200" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
                    </button>
                </div>

                <div v-else>
                <button @click="deleteForm" :class="'mt-[20px] block introductionButton sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-red-500 focus:outline-none'">DELETE</button>
                </div>
                -->

                 <h1 class="text-3xl mt-6">Freeze Form</h1>
                <p class="mt-2">Freeze your form&apos;s responses in their current state, and block future submissions. </p>
                <div v-if="islockLoading">
                    <button :class="'mt-[20px] px-9 block introductionButton text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-500 focus:outline-none'">
                        <div role="status">
    <svg aria-hidden="true" class="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-200" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>

                    </button>
                </div>
                <div v-else>
                    <button @click="toggleLockForm" :class="'mt-[20px] block introductionButton sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-500 focus:outline-none'">
                        {{lockAction == 'lock' ? 'FREEZE' : 'UNFREEZE'}}
                    </button>
                </div>
                </div>
                <div v-else>
                    <h1 class="text-3xl mt-6">Are you sure?</h1>
                <p class="mt-2">This action cannot be reversed!</p>
                <button @click="cancelConfirmDelete" :class="'mt-[20px] initial introductionButton text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 bg-[#222222] focus:outline-none'">
                    CANCEL
                </button>
                    <button v-if="isDeleteLoading" :class="'px-9 initial introductionButton ml-3 text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 bg-red-500 focus:outline-none'">
                        <div role="status">
    <svg aria-hidden="true" class="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-200" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>
                    </button>

                <button v-else @click="deleteForm" :class="'initial introductionButton text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 bg-red-500 focus:outline-none'">DELETE</button>

                </div>



                
                

</template>

<script setup>
import Navbar from "@/components/Navbar.vue"
import { request } from "@/services/request.js"
import { useRoute, useRouter } from 'vue-router';
import { ref } from "vue"
var lockAction = ref("lock")
var islockLoading = ref(false)
var isDeleteLoading = ref(false)
var confirmDelete = ref(false)

var router = useRouter()

let props = defineProps({
    form: {
        type: Object
    },
    session: {
        type: Object
    }
})

if (props.form.locked) {
    lockAction.value = "unlock"
} 

let formObj = JSON.parse(JSON.stringify(props.form)) 

async function deleteForm() {
    isDeleteLoading.value = true
    console.log('[EVENT] deleteForm: sending request...', formObj)
    let res = await request({
        auth: true,
        method: 'DELETE',
        url: `/api/forms/${formObj.formId}`
    })

    if (res.status == 200) {
        router.push('/')
    } else {
        swal("Oops!", "Something went wrong ["+ res.status +"]", "error")
        isDeleteLoading.value = false
    }
}

async function cancelConfirmDelete() {
    confirmDelete.value = false
}

async function showConfirmDelete() {
    confirmDelete.value = true
}


async function toggleLockForm() {
    if (islockLoading.value) {
        swal("Oops!", "This action is already being run, please wait for it to finish.", "error")
    }
    islockLoading.value = true
    if (formObj?.locked) {
        lockAction.value = "unlock"
    }
    console.log('[EVENT] toggleLockForm: sending request...', formObj)

    let res = await request({
       auth: true,
       method: "POST",
        url: "/api/forms/" + formObj.formId + "/" + lockAction.value
    })

    if (res.status == 200) {
        formObj.locked = !formObj.locked
        lockAction.value = formObj.locked ? "unlock" : "lock"
        islockLoading.value = false
    } else {
        swal("Oops!", "Something went wrong ["+ res.status +"]", "error")
        islockLoading.value = false
    }
}
</script>