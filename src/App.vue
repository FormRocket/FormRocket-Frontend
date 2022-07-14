<template>
  <template v-if="loading">
    <h1>Loading...</h1>
  </template>
  <RouterView v-else />
</template>

<script setup>
import { loading, reloadAuth } from '@/services/auth.js'
reloadAuth();
</script>