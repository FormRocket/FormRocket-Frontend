<template>
<div class="w-full navbar h-10 p-3 pt-5 pb-5 fixed top-0 z-50">
    <!--<button class="hover:bg-stone-800 p-2" v-if="showLogin" @click="login">Login</button>
        <button class="hover:bg-stone-800 p-2" v-if="showLogout" @click="logout">Logout</button>
        -->
    <div class="flex justify-between items-center h-full">
      <div class="flex items-center">
        <img class="w-8 h-8 mr-2 rounded-lg" v-if="!session?.user || session?.user?.plan < 1" src="/assets/formrocket.png" />
        <img class="w-8 h-8 mr-2 rounded-lg" v-if="session?.user?.plan >= 1" style="filter: hue-rotate(40deg)" src="/assets/formrocket.png" />
      </div>
      <button @click="toggleSidebar" :class="'hidden' + (showSidebar ? '' : ' showMobile')">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>
  <div :class="'sidebar' + (showSidebar ? '' : ' hideMobile')">
    <div class="sidebarItems">
        <button class="hidden showMobile sidebarItem" @click="closeSidebar">Close</button>
        <button v-if="showBack" class="sidebarItem" @click="back">Back</button>
        <button v-if="showDashboard" class="sidebarItem" to="/" @click="$router.push('/')">Dashboard</button> 
        <button v-if="showHome" class="sidebarItem" to="/" @click="$router.push('/')">Home</button> 
        <button v-if="showLogin" class="sidebarItem" @click="$router.push('/signin')">Login</button>
        <button v-if="showNewForm" class="sidebarItem" @click="$router.push('/new')">Create Form</button>
        <button v-if="showLogout" class="sidebarItem" @click="logout">Logout</button>
        <button v-if="showSubscriptions" class="sidebarItem" @click="$router.push('/subscriptions')">Subscriptions</button>
        <button v-if="showPricing" class="sidebarItem" @click="$router.push('/pricing')">Pricing</button>
    </div>
    <div class="profileContainer" v-if="session?.user">
       <!-- <img class="profileAvatar" :src="session.user.avatar + '&s=50'" /> -->
        <div class="profileInfo">
            <div class="profileInfo-name" style="display:initial;"><span class="text-md text-lg-gradient" style="display:initial;">{{session.user.name}}</span>
            <div><a class="text-[#888888] cursor-pointer" @click="$router.push('/settings')" style="font-size:13px;">Settings</a> <a class="ml-2 text-[#666666] cursor-pointer" @click="logout" style="font-size:13px;">Log Out</a></div>
            </div>
             
            

            <!--<a class="profileInfo-btn cursor-pointer initial" @click="$router.push('/settings')">Settings</a>-->
        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { login, logout } from '@/services/auth.js'
import Icon from "@/iconly/iconly.vue";

const showSidebar = ref(false);

function toggleSidebar() {
  showSidebar.value = !showSidebar.value;
}

function closeSidebar() {
  showSidebar.value = false;
}

function back() {
  window.history.back();
}

defineProps({
  session: Object,
  plan: String,
  showDashboard: Boolean,
  showLogin: Boolean,
  showNewForm: Boolean,
  showLogout: Boolean,
  showExport: Boolean,
  showTrash: Boolean,
  showSubscriptions: Boolean,
  showPricing: Boolean,
  showBack: Boolean.apply,
  showHome: Boolean.apply,
})
</script>