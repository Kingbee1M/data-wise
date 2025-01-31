<template>
    <div class="wrapper">
        <div class="first">{{ displayText.Sector1[0] }}</div>
        <div class="second">{{ displayText.Sector1[1] }}</div>
        <div class="third"><RouterLink >{{ displayText.Sector1[2] }}</RouterLink></div>
        <div class="forth"><RouterLink >{{ displayText.Sector1[3] }}</RouterLink></div>
        <div class="imgHolder"><img src="../assets/images/Image wrapper.svg" alt="heros"></div>
        <div class="partner"><img src="@/assets/images/logo.svg" alt="partners"></div>
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
    font-family: Inter;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.imgHolder {
    width: 100%;
}

.imgHolder img {
    width: 100%;
}

.first {
    font-size: 50px;
    font-weight: 700;
    word-wrap: break-word;
}

.second{
    font-size: 20px;
    color: #3C403A;
    margin: 50px 0;
}

.third {
    background-color: #3A7326;
    border-radius: 10px;
    width: 80%;
    text-align: center;
    padding: 10px 0;
    margin: 0 0 10px 0;
}

.third a {
    color: #ffffff;
    text-decoration: none
}

.forth {
    border: 1px solid #C1C5BF;
    border-radius: 10px;
    text-align: center;
    width: 80%;
    padding: 10px 0;
    margin: 0 0 30px 0;
}

.forth a {
    color: #282B27;
    text-decoration: none
}

.partner {
    width: 100%;
}

.partner img {
    width: 100%;
}
</style>