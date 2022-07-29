<template>
    <template v-if="session.user">
        <Navbar :session="session" :showLogout="true" :showNewForm="true" />
        <div class="p-10 appContent">
            <h4 class="w-full text-2xl text-transparent bg-clip-text bg-gradient-to-r font-bold text-lg-gradient uppercase">FORMROCKET {{plans[session.user.plan]}}</h4>
            <h1 class="text-5xl mb-3 mt-2">Welcome, <span style="display:initial !important;"
                    class="text-lg-gradient">{{ session.user.name }}!</span></h1>
            <p class="text-lg mb-5">Welcome to your dashboard.</p>
            <button @click="$router.push('/new')" class="introductionButton sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-[#222222] focus:outline-none">CREATE FORM</button> 
            
            <div onclick="window.location.href = 'https://www.twitter.com/@SuperSweetSuite'" class="ico ml-2 cursor-pointer p-3 rounded-full hover:bg-[#141414]" style="display:initial">
                <svg class="ico" style="display:initial; filter: invert(59%) sepia(31%) saturate(925%) hue-rotate(283deg) brightness(96%) contrast(99%);" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </div>

            <div onclick="window.location.href = 'https://discord.com/invite/Q6XxjveCdQ'" class="ico ml-2 cursor-pointer p-3 rounded-full hover:bg-[#141414]" style="display:initial">
                <svg class="ico" style="display:initial; filter: invert(59%) sepia(31%) saturate(925%) hue-rotate(283deg) brightness(96%) contrast(99%);" xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill-rule="evenodd" clip-rule="evenodd"><path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"/></svg>
            </div>

            <h1 class="text-4xl mb-3 mt-9 text-bold">Your Forms <Icon icon="Paper" bulk size="35px" /></h1>
            <p class="text-lg mb-5">You have <b>{{session.forms.length > 0 ? formatFormCount(session.forms.length) : "no forms."}} </b></p>
            <div class="flex flex-wrap">
                <div v-for="form in session.forms" :key="form.formId" class="w-full md:w-1/3 lg:w-1/4 p-3">
                    <Card :title="form.name" :text="'Created ' + formatDistance(form.createdAt, new Date(), { addSuffix: true })" :href="'/settings/forms/' + form.formId" />
                </div>
            </div>

            <!--<h1 class="text-4xl mb-3 mt-9 text-bold">Your Organizations</h1>
            <p class="text-lg mb-5">Manage forms within your organizations.</p>
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/3 lg:w-1/4 p-3">
                    <Card :title="'Example organization'" :text="'4 forms'" :href="'/organizations/123'" />
                </div>
            </div>-->

            
        <br class="mt-9 mb-9" />
        <Footer />


            
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
            
            <div class="flex flex-row justify-center introductionButtons">
                <div><button @click="login" class="introductionButton sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-pink-700 focus:outline-none">GET STARTED</button></div>
                <router-link to="/pricing"><button class="introductionButton sm:display-block text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-[#222222] focus:outline-none">PRICING</button></router-link>
            </div>

            
        </div>
    </div>
    </center>
</div>



<section class="w-full pt-7 pb-7 md:pt-20 md:pb-24">
    <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

        <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img src="src/assets/MeditatingDoodle.svg" class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 ">
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
            <img src="src/assets/ReadingSideDoodle.svg" class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32">
        </div>
    </div>
</section>


<!-- Section 1 -->
<section class="py-24">
    <div class="px-8 mx-auto max-w-7xl lg:px-16">
        <h2 class="mb-4 text-xl font-bold md:text-3xl">Frequently Asked Questions</h2>
        <div class="grid grid-cols-1 gap-0 text-gray-100 md:grid-cols-2 md:gap-16">
            <div>
                <h5 class="mt-10 mb-3 font-semibold text-gray-300">What is FormRocket</h5>
                <p>FormRocket is a complete backend for your HTML forms for storing submissions and getting notified with our integrations.</p>
                <h5 class="mt-10 mb-3 font-semibold text-gray-300">Is it free?</h5>
                <p>FormRocket is free for starters, and you can upgrade to our Premium and Business plans as your forms grow.</p>
                
            </div>
            <div>
                <h5 class="mt-10 mb-3 font-semibold text-gray-300">How do I set it up?</h5>
                <p>You can set it up easily with the examples found in your form&apos;s settings.</p>

                <h5 class="mt-10 mb-3 font-semibold text-gray-300">What prerequisites should I have?</h5>
                <p>Everything can be done right from your HTML via a form element; No JavaScript!</p>
                
            </div>
        </div>
    </div>
</section>


<Footer />

        </div>
    </template>
</template>

<script setup>
import { session, login, logout } from '@/services/auth.js'
import Icon from "@/iconly/iconly.vue";
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