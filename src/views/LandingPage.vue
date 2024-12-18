<template>
    <div>
        
        <div>{{ displayText.Sector1[0] }}</div>
        <div>{{ displayText.Sector1[1] }}</div>
        <div>{{ displayText.Sector1[2] }}</div>
        <div>{{ displayText.Sector1[3] }}</div>
        <LandingComponent />
    </div>
</template>

<script setup>
import { computed } from 'vue';
import LandingComponent from '../components/LandingComponent.vue'
import { useLanguages } from '@/stores/LanguageStore';

const language = useLanguages()
const displayText = computed(() => language.displayText)

</script>

<style scoped>

</style>