<template>
    <div class="wrapper">
        <div class="first">{{ displayText.Sector6[0] }}</div>
        <div class="second">{{ displayText.Sector6[1] }}</div>
        <div class="third">{{ displayText.Sector6[2] }}</div>
        <div class="forth">
            <div v-for="card in cards" :key="card.title">
                <div><img :src="card.image" alt="card image"></div>
                <div>{{ card.title }}</div>                
                <div>{{ card.content }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useLanguages } from '@/stores/LanguageStore';
import { computed } from 'vue';

const language = useLanguages()
const displayText = computed(() => language.displayText)
const cards = computed(() => language.displayText.Sector6[3])
// console.log(cards.value);

</script>

<style scoped>

.wrapper {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-family: inter;
}

.first {
    color: #2E5C1E;
    font-size: 22px;
}

.second {
    font-weight: 700;
    font-size: 28px;
}

.third {
    text-align: center;
    color: #51564E;
    font-size: 13px;
}


.forth {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.forth {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    gap: 40px;
}

.forth>div {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: start;
    gap: 10px;
}

.forth >div :nth-child(1) {
    width: 100%;
}

.forth >div :nth-child(1)>img {
    width: 100%;
}

.forth >div :nth-child(2) {
    color: #3C403A;
    font-size: 13px;
}

.forth >div :nth-child(3) {
    font-size: 16px;
    font-weight: 700;
}

</style>