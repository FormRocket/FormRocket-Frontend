<template>

   <h1 class="text-5xl mb-5"><span style="display:initial !important;" class="text-lg-gradient">{{form.name}}:</span> Setup </h1>
                <p>Connect your frontend to this form and start using the most powerful form backend.</p>

                

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