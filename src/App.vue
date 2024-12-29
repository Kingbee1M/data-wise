<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navBar from './components/navBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <navBar />
  <div class="holder">
  <RouterView />
  <Footer />
  </div>

</template>

<style scoped>
.holder{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
