<template>
    <div v-if="!session.user">Your not logged in bozo</div>
    <div v-else>{{ form?.name || "Form Not Found" }}</div>
</template>
<script setup>
import { session } from '@/services/auth.js'
import { useRoute } from 'vue-router';
const route = useRoute();

const formId = route.params.id;

let form = null;
if (session.value.forms) {
    form = session.value.forms.find(x=>x.formId == formId)
}
</script>