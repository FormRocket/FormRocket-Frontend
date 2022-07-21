<template>

   <h1 class="text-5xl mb-5"><span style="display:initial !important;" class="text-lg-gradient">{{form.name}}:</span> Security </h1>
                <p>Tweak your form&apos;s security settings.</p>

                

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