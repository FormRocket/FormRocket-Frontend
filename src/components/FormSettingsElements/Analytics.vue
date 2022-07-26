<template>

   <h1 class="text-5xl mb-5"><span style="display:initial !important;" class="text-lg-gradient">{{form.name}}:</span> Analytics </h1>
                <p>Super simple analytics on your form&apos;s responses.</p>

                <h1 class="text-3xl mt-8 mb-2">Coming soon</h1>
                <p>This feature is coming soon.</p>

                

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