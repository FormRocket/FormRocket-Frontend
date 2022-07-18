<template>
    <template v-if="session.user">
        <Navbar :session="session" :showLogout="true" :showNewForm="true" />
        <div class="p-10 appContent">
            <h1 class="text-6xl mb-3">Hey, <span style="display:initial !important;"
                    class="text-lg-gradient">{{ session.user.name }}</span>!</h1>
            <p class="text-lg mb-5">Welcome to your dashboard.</p>

            <h1 class="text-4xl mb-3 mt-9 text-bold">Your Forms</h1>
            <p class="text-lg mb-5">You have <b>{{session.forms.length > 0 ? formatFormCount(session.forms.length) : "no forms."}} </b></p>
            <div class="flex flex-wrap">
                <div v-for="form in session.forms" :key="form.id" class="w-full md:w-1/3 lg:w-1/4 p-3">
                    <Card :title="form.name" :text="'Created ' + formatDistance(form.createdAt, new Date(), { addSuffix: true })" :href="'/settings/forms/' + form.id" />
                </div>
            </div>

            <h1 class="text-4xl mb-3 mt-9 text-bold">Your Organizations</h1>
            <p class="text-lg mb-5">Manage forms within your organizations.</p>
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/3 lg:w-1/4 p-3">
                    <Card :title="'Example organization'" :text="'4 forms'" :href="'/organizations/123'" />
                </div>
            </div>


            
        </div>
    </template>
    <template v-else>
        <Navbar :session="null" :showLogin="true" />
        <div class="p-10 appContent">
<div class="h-auto">
    <center>
    <div class="px-10 py-24 mx-auto max-w-7xl">
        <div class="w-full mx-auto text-left text-center">
            <div class="flex flex-row justify-center">
                <h1 class="mb-6 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight"> Introducing <span class="w-full text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 lg:inline">the all new</span> <br class="lg:block hidden"> FormRocket3. </h1>
            </div>

            <div class="flex flex-row justify-center">
                <p class="px-0 mb-6 text-lg text-gray-300 md:text-xl lg:px-24"> A powerful backend for all your HTML forms. Recieve submissions &amp; send to your favorite destinations. </p>
            </div>
            
            <div class="flex flex-row justify-center">
                <button @click="login" class="sm:display-block text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-pink-800">GET STARTED</button>
                <a href="/pricing"><button class="sm:display-block text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-gray-800">PRICING</button></a>
            </div>

            
        </div>
    </div>
    </center>
</div>



<section class="w-full pt-7 pb-7 md:pt-20 md:pb-24">
    <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

        <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img src="https://www.formrocket.me/files/svg/MeditatingDoodle.svg" class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 ">
        </div>

        <div class="box-border order-first w-full text-white border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                Free storage for your submissions
            </h2>
            <p class="pt-4 pb-8 m-0 leading-7 text-gray-300 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                Store 500 responses for free and send them to your favorite destinations.    
            </p>
        </div>
    </div>
    <div class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

        <div class="box-border w-full text-white border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                Instant plug and play
            </h2>
            <p class="pt-4 pb-8 m-0 leading-7 text-gray-300 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                Create forms in seconds &amp; recieve submissions instantly.
            </p>
            
        </div>

        <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img src="https://www.formrocket.me/files/svg/ReadingSideDoodle.svg" class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32">
        </div>
    </div>
</section>

<Footer />

        </div>
    </template>
</template>

<script setup>
import { session, login, logout } from '@/services/auth.js'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Card from '@/components/Card.vue';
import { formatDistance } from 'date-fns'

function formatFormCount(count) {
    if (count == 1) return "1 form.";
    return `${count} forms.`
}

const plans = {
    0: "Basic",
    1: "Premium",
    2: "Business"
}

console.log(session)
</script>