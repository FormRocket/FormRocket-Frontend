<template>
    <div v-if="!session.user">
        <Navbar :session="null" :showBack="true" />
        <div class="appContent">
            <ShowError error="unauthorized" />
        </div>
    </div>
    <div v-else>
        <div v-if="form">
           <Navbar :session="session" :showBack="true" :showDashboard="true" />
           <div class="appContent p-9">
                <h1 class="text-5xl mb-5">Manage <span style="display:initial !important;"
                    class="text-lg-gradient">{{form.name}}</span> </h1>
                <p>Manage this form.</p>

                

                
                
            </div>
        </div>

        <div v-else>
            <Navbar :session="session" :showBack="true" />
            <div class="appContent">
                <ShowError error="invalidForm" />
            </div>
        </div>

    </div>
</template>
<script setup>
import { session, login } from '@/services/auth.js'
import { useRoute } from 'vue-router';
import Card from "@/components/Card.vue";
import Navbar from "@/components/Navbar.vue";
import ShowError from '@/components/ShowError.vue';
import Icon from "@/iconly/iconly.vue";
const route = useRoute();

const formId = route.params.id;

let form = null;
if (session.value.forms) {
    form = session.value.forms.find(x=>x.formId == formId)
}
</script>