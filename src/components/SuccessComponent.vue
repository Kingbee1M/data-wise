<template>
    <div class="wrapper">
        
        <div class="first">
            <div>{{ displayText.Sector5[0] }}</div>
            <div>{{ displayText.Sector5[1] }}</div>
        </div>
        <div class="second">
            <div><img src="@/assets/images/LogoPart2.svg" alt=""></div>
            <div>{{ displayText.Sector5[2] }}</div>
            <div class="child">
                <div>{{ displayText.Sector5[3] }}</div>
                <div>{{ displayText.Sector5[4] }}</div>
            </div>
            <div><img src="" alt=""></div>
        </div>
        <div class="third">
            <div class="holder">
                <div>{{ displayText.Sector5[5] }}</div>
                <div>{{ displayText.Sector5[6] }}</div>
                <div><ul>
                    <li><img src="@/assets/images/list-icon.svg" alt="tag"><div>{{ displayText.Sector5[7] }}</div></li>
                    <li><img src="@/assets/images/list-icon.svg" alt="tag"><div>{{ displayText.Sector5[8] }}</div></li>
                    <li><img src="@/assets/images/list-icon.svg" alt="tag"><div>{{ displayText.Sector5[9] }}</div></li>
                </ul></div>
                <div>{{ displayText.Sector5[10] }}</div>
                <div><img src="@/assets/images/chatThingy.svg" alt=""></div>
            </div>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: inter;
    gap: 30px;
}

.first {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.first >div:first-child {
    color: #2E5C1E;
    font-weight: 500;
}

.first >div:nth-child(2) {
    font-weight: 700;
    font-size: 25px;
}

.second {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: start;
    gap: 20px;
    border: 1px solid #C1C5BF;
    border-radius: 18px;
    padding: 30px;
}

.second > div {
    width: 100%;
    height: 80px;
}

.second > div:nth-child(1) img {
    width: 50%;
}

.second > div:nth-child(2) {
    color: #141513;
    font-size: 13px;
}

.second > div:nth-child(3) {
display: flex;
flex-direction: column;
}

.child >div:nth-child(1) {
    color: #141513;
    font-weight: 700;
    font-size: 18px;
}

.child >div:nth-child(2) {
    color: #141513;
    font-size: 13px;
    font-weight: 500;
}

.second > div:nth-child(4) {
    height: 130px;
    width: 100%;
    background-color: #EFF0EF;
    border-radius: 15px;
}

.third {
    background-color: #EFF0EF;
    width: 94vw;
    height: 850px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.holder {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.holder > div:nth-child(1){
    font-weight: 700;
    text-align: left;
    font-size: 22px;
}

.holder > div:nth-child(2) {
    font-weight: 400;
    color: #141513;
    font-size: 13px;
}

.holder > div:nth-child(3) ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: start;
    gap: 10px;
}

.holder > div:nth-child(3) li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: first baseline;
    font-size: 15px;
    color: #282B27;
}

.holder > div:nth-child(4) {
    width: 100%;
    background-color: #3A7326;
    padding: 15px 10px;
    border-radius: 15px;
    text-align: center;
    color: #fff;
}

.holder > div:nth-child(5) {
    width: 100%;
    height: 200px;
    width: 100%;
    border-radius: 15px;
}

.holder > div:nth-child(5) img {
    width: 100%;
}

</style>