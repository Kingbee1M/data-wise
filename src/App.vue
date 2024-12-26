<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navBar from './components/navBar.vue';
</script>

<template>
  <navBar />
  <div class="holder">
  <RouterView />
  </div>
</template>

<style scoped>
.holder{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
