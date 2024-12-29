<template>
    <div class="wrapper">
        <LandingComponent />
        <LandingComponent2 />
        <Solutions />
        <ImporveComponent />
        <SuccessComponent />
        <blogComponent />
        <FAQComponent />
    </div>
</template>

<script setup>
import { computed } from 'vue';
import LandingComponent from '../components/LandingComponent.vue'
import { useLanguages } from '@/stores/LanguageStore';
import LandingComponent2 from '@/components/LandingComponent2.vue';
import Solutions from '@/components/Solutions.vue';
import ImporveComponent from '@/components/ImporveComponent.vue';
import SuccessComponent from '@/components/SuccessComponent.vue';
import blogComponent from '@/components/blogComponent.vue';
import FAQComponent from '@/components/FAQComponent.vue';

const language = useLanguages()
const displayText = computed(() => language.displayText)

</script>

<style scoped>
.wrapper {
    height: 100%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


</style>