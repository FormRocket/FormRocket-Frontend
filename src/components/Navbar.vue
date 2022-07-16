<template>
<div class="w-full navbar h-10 p-3 pt-5 pb-5">
    <!--<button class="hover:bg-stone-800 p-2" v-if="showLogin" @click="login">Login</button>
        <button class="hover:bg-stone-800 p-2" v-if="showLogout" @click="logout">Logout</button>
        -->
    <div class="flex justify-between items-center h-full">
      <div class="flex items-center">
        <img class="w-8 h-8 mr-2 rounded-lg" v-if="!session?.user || session?.user?.plan < 1" src="https://www.formrocket.me/files/formrocket.png" />
        <img class="w-8 h-8 mr-2 rounded-lg" v-if="session?.user?.plan >= 1" style="filter: hue-rotate(40deg)" src="https://www.formrocket.me/files/formrocket.png" />
      </div>

    

    </div>
  </div>
  <div class="sidebar">
    <div class="sidebarItems">
        <button v-if="showLogin" class="sidebarItem" @click="login">Login</button>
        <button v-if="showNewForm" class="sidebarItem">Create Form</button>
        <button v-if="showLogout" class="sidebarItem" @click="logout">Logout</button>
        <button v-if="showSubscriptions" class="sidebarItem">Subscriptions</button>
        <button v-if="showPricing" class="sidebarItem">Pricing</button>
    </div>
    <div class="profileContainer" v-if="session?.user">
        <img class="profileAvatar" :src="session.user.avatar + '&s=50'" />
        <div class="profileInfo">
            <div class="profileInfo-name">{{session.user.name}}</div>
            <router-link class="profileInfo-btn" to="#">Settings</router-link>
        </div>
    </div>
  </div>
</template>

<script setup>
import { login, logout } from '@/services/auth.js'
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
  showBack: Boolean
})
</script>