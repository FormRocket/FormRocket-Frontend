<template>
<div class="w-full navbar h-10 p-2">
    <!--<button class="hover:bg-stone-800 p-2" v-if="showLogin" @click="login">Login</button>
        <button class="hover:bg-stone-800 p-2" v-if="showLogout" @click="logout">Logout</button>
        -->
    <div class="flex justify-between items-center h-full">
      <div class="flex items-center">
        <img class="w-8 h-8 mr-2" src="https://www.formrocket.me/files/formrocket.png" />
        <span class="text-2xl font-bold">FormRocket <span v-if="plan">{{ plan }}</span></span>
      </div>

      <div class="flex items-center">
        <button class="ml-3 hover:text-pink-500 p-2" v-if="showLogin" @click="login">Login</button>
      </div>
      <div class="flex items-center" v-if="session?.user">
        <img class="w-8 h-8 rounded-full" :src="session.user.avatar + '&s=50'" />
        <span class="text-2xl font-bold ml-1">{{ session.user.name }}</span>
        <button @click="logout" class="ml-3 hover:text-pink-500">Logout</button>
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
        <img class="profileAvatar" :src="session.user.avatar" />
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

<style>
.navbar, .sidebar {
    background-color: rgb(41, 41, 41);
}
.sidebar {
    z-index: 5000;
    height: calc(100% - 40px);
    width: 200px;
    position: fixed;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.sidebarItems {
    padding-top: 60px;
}

.profileContainer {
    display: flex;
    width: 100%;
    padding: 8px 28px;
    background-color: #262626 !important;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
}

.profileAvatar {
    height: 40px;
    width: 40px;
    border-radius: 50%;
}

.profileInfo {
    display: flex;
    margin-left: 12px;
    white-space: nowrap;
    flex-direction: column;
    justify-content: center;
    height: fit-content;
}

.profileInfo-name {
    font-size: 0.875rem;
    color: white;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 1.25;
    
    text-overflow: ellipsis !important;
    overflow: hidden !important;
    max-width: 100px !important;
    white-space: nowrap;
}

.profileInfo-btn {
    font-size: .75rem;
    color: #666666;
    transition: color 250ms ease;
}

.profileInfo-btn:hover {
    color: #8b8b8b;
}

.sidebarItem {
    display: block;
    width: 100%;
    padding: 8px 16px;
    text-align: left;
    
    transition: background .2s linear !important;
}

.sidebarItem:hover {
    color: #000;
    background-color: #ccc ;
}

.appContent {
    height: calc(100% - 40px);
    width: calc(100% - 200px);
    margin-left: 200px;
}

@media (max-width: 992px) {
    .sidebar {
        display: none;
    }

    .appContent {
        width: 100%;
        margin-left: 0;
    }
}
</style>