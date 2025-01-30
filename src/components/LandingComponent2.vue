<template>
    <div class="wrapper">
        <div class="first">{{ displayText.Sector2[0] }}</div>
        <div class="second">{{ displayText.Sector2[1] }}</div>
        <div class="second">{{ displayText.Sector2[2] }}</div>
    </div>
</template>

<script setup>
import { useLanguages } from '@/stores/LanguageStore';
import { computed } from 'vue';

const language = useLanguages()
const displayText = computed(() => language.displayText)


</script>

<style scoped>

.wrapper {
    width: 100%;
    font-family: inter;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
}

.first {
    font-size: 28px;
    font-weight: 700;
    color: #282B27;
    width: 100%;
    text-align: left;
    word-wrap: break-word;
}

.second {
    color: #282B27;
    font-size: 21px;
    word-wrap: break-word;
}

</style>