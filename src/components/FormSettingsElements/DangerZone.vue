<template>

   <h1 class="text-5xl mb-5"><span style="display:initial !important;" class="text-lg-gradient">{{form.name}}:</span> Danger Zone</h1>
                <p>These actions are completely irreversible.</p>

                

</template>

<script setup>
import Navbar from "@/components/Navbar.vue"
defineProps({
    form: {
        type: Object
    },
    session: {
        type: Object
    }
})
</script>