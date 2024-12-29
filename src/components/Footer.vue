<template>
    <div class="wrapper">
        <div class="top">
            <div><img src="@/assets/images/DataWise logo.svg" alt="logo"></div>
            <div class="texts">
                <div class="about">
                    <div v-for="about in Abouts" :key="about[1]">
                        {{ about }}
                    </div>
                </div>
                <div class="resource">
                <div v-for="Resource in Resources" :key="Resource[1]">
                    {{ Resource }}
                </div>
                </div>
                <div class="support">
                <div v-for="support in supports" :key="support[1]">
                    {{ support }}
                </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div>{{ displayText.footer[3] }}</div>
            <div>{{ displayText.footer[4] }}</div>
            <div>{{ displayText.footer[5] }}</div>
            <div>{{ displayText.footer[6] }}</div>
        </div>
    </div>
</template>

<script setup>
import { useLanguages } from '@/stores/LanguageStore';
import { computed } from 'vue';

const language = useLanguages()
const displayText = computed(() => language.displayText)
const Abouts = computed(() => language.displayText.footer[0])
const Resources = computed(() => language.displayText.footer[1])
const supports = computed(() => language.displayText.footer[2])

</script>

<style scoped>

.wrapper {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    font-family: inter;
    margin-top: 80px;
    padding-top: 50px;
    border-top: 3px solid #C1C5BF;
}

.top {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: start;
    width: 100%;
    gap: 30px;
}

.texts {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
}

.about {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: start;
    font-size: 15px;
    gap: 10px;
    color: #51564E;
}

.about >div:nth-child(1) {
    font-size: 20px;
    font-weight: 700;
    color: #000;
}

.resource {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: start;
    font-size: 15px;
    gap: 10px;
    color: #51564E;
}

.resource >div:nth-child(1) {
    font-size: 20px;
    font-weight: 700;
    color: #000;
}

.support {
    display: none;
}

</style>