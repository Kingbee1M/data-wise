<template>
    <div class="wrapper">
        <div class="first">{{ displayText.Sector7[0] }}</div>
        <div class="second">{{ displayText.Sector7[1] }}</div>
        <div class="third">{{ displayText.Sector7[2] }}</div>
        <div class="forth">
            <div v-for="QandA in QandAs" :key="QandA.question">
                <div class="questions">{{ QandA.question }}</div>
                <div class="answers">{{ QandA.answer }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useLanguages } from '@/stores/LanguageStore';
import { computed } from 'vue';

const language = useLanguages()
const displayText = computed(() => language.displayText)
const QandAs = computed(() => language.displayText.Sector7[3]);
console.log(QandAs.value);

</script>

<style scoped>

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: start;
    margin-top: 100px;
    gap: 15px;
    font-family: inter
}

.first {
    color: #2E5C1E;
    font-weight: 700;
    font-size: 18px;
}

.second {
    font-size: 28px;
    font-weight: 800;
}

.third {
    color: #51564E;
    font: 15px;
}

.forth {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: start;
    gap: 25px;
}

.forth >div {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: start;
    gap: 15px;
}

.questions {
    color: #141513;
    font-weight: 500;
    font-size: 19;
}

.answers {
    color: #51564E;
    font-weight: 400;
    font-size: 15;
}

</style>