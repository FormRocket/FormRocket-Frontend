<template>

    <div @click="href ? ($router.push(href)) : (null)" :class="'card shadow rounded-xl p-4 max-w-sm w-full bg-[#111111]' + (href ? ' cursor-pointer' : '')">
                <h1 class="text-2xl mb-3">{{title}}</h1>
                <p class="text-lg">{{text}}</p> <!-- use the time library from the old version -->
    </div>

</template>

<script setup>
import Navbar from "@/components/Navbar.vue"
defineProps({
    title: {
        type: String,
        default: "Title"
    },
    text: {
        type: String,
        default: "Text"
    },
    href: {
        type: String,
        default: null
    }
})
</script>