<template>
    <div class="wrapper">
        <div class="first">{{ displayText.Sector4[0] }}</div>
        <div class="second">{{ displayText.Sector4[1] }}</div>
        <div class="third">
            <div>{{ displayText.Sector4[2] }}</div>
            <div>{{ displayText.Sector4[3] }}</div>
            <div>{{ displayText.Sector4[4] }}</div>
            <div>{{ displayText.Sector4[5] }}</div>
        </div>
        <div class="forth"><div>{{ displayText.Sector4[6] }}</div></div>
        <div class="fifth">{{ displayText.Sector4[7] }}</div>
        <div class="sixth"><ul>
            <li><img src="@/assets/images/list-icon.svg" alt="list icon"><div>{{ displayText.Sector4[8] }}</div></li>
            <li><img src="@/assets/images/list-icon.svg" alt="list icon"><div>{{ displayText.Sector4[9] }}</div></li>
            <li><img src="@/assets/images/list-icon.svg" alt="list icon"><div>{{ displayText.Sector4[10] }}</div></li>
        </ul></div>
        <div class="seventh">
            <div>{{ displayText.Sector4[11] }}</div>
            <div>{{ displayText.Sector4[12] }}</div>
        </div>
        <div class="eighth">
            <img src="@/assets/images/Chart 4 (Small).svg" alt="that thingy">
        </div>
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
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: inter;
    word-wrap: break-word;
    gap: 20px;
}

.first {
    color: #2E5C1E;
    font-weight: 500;
    text-align: center;
}

.second {
    font-size: 25px;
    font-weight: 800;
    text-align: center;

}

.third {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    font-size: 10px;
    margin-bottom: 30px;
}

.third > div {
    background-color: #EFF0EF;
    padding: 5px 10px;
    border-radius: 12px;
}

.third :nth-child(2) {
    background-color: #3A7326;
    color: #fff;
}

.forth {
    display: flex;
    justify-content: left;
    width: 100%;
}

.forth > div {
    width: 80%;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
}

.fifth {
    color: #3C403A;
}

.sixth ul{
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: start;
    gap: 10px;
    list-style: none;
    padding-left: 0px;
}

.sixth ul>li {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 13px;
    color: #282B27;
}

.seventh {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.seventh>div:nth-child(1) {
    border-radius: 10px;
    background-color: #3A7326;
    padding: 10px 20px;
    color: #fff;
}

.seventh>div:nth-child(2) {
    border-radius: 10px;
    border: 1px solid #C1C5BF;
    padding: 10px 20px;
}

.eighth {
    width: 100%;
    height: 380px;
    display: flex;
    justify-content: left;
    align-items: center;
}
</style>