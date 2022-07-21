<template>

   <h1 class="text-5xl mb-5"><span style="display:initial !important;" class="text-lg-gradient">{{form.name}}:</span> Thank You Page </h1>
                <p>Customize your form&apos;s thank you page or set your own.</p>

                

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