<template>
    <div class="wrapper">
        <div class="container"> 
            <div class="sol">{{ displayText.Sector3[0] }}</div>
            <div class="rev">{{ displayText.Sector3[1] }}</div>
        </div> 
        <div class="holder">
            <div>
            <img src="@/assets/images/Icon3.svg" alt="icon">
            <div>
                <div class="first">{{ displayText.Sector3[2] }}</div>
                <div class="second">{{ displayText.Sector3[3] }}</div>
            </div>
            </div>
            <div>
            <img src="@/assets/images/Icon1.svg" alt="icon">
            <div> 
                <div class="first">{{ displayText.Sector3[4] }}</div>
                <div class="second">{{ displayText.Sector3[5] }}</div>
            </div> 
            </div>
            <div>
            <img src="@/assets/images/Icon4.svg" alt="icon">
            <div> 
                <div class="first">{{ displayText.Sector3[6] }}</div>
                <div class="second">{{ displayText.Sector3[7] }}</div>
            </div>     
            </div>
            <div>
            <img src="@/assets/images/Icon2.svg" alt="icon">
            <div>
                <div class="first">{{ displayText.Sector3[8] }}</div>
                <div class="second">{{ displayText.Sector3[9] }}</div>
            </div>
            </div>
    </div>
        <div class="explor"><RouterLink>{{ displayText.Sector3[10] }}</RouterLink></div>
    </div>
</template>

<script setup>
import { useLanguages } from '@/stores/LanguageStore';
import { computed } from 'vue';

const language = useLanguages()
const displayText = computed(() => language.displayText)
</script>

<style lang="scss" scoped>

.wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-family: inter
}

.container {
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #C1C5BF;
    padding-bottom: 40px;
    margin-top: 50px;
}

.sol {
    color: #2E5C1E;
    text-align: center;
}

.rev {
    font-weight: 700;
    font-size: 28.5px;
    width: 100%;
    text-align: center;
    word-wrap: break-word;
}
.holder > div{
    width: 100%;
    height: 300px;
    border-bottom: 1px solid #C1C5BF;
    padding-bottom: 40px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start
}

.first {
    font-weight: 700;
    font-size: 22px;
}

.second {
    color: #51564E;
}

.explor {
    background-color: #3A7326;
    padding: 10px 15px;
    border-radius: 15px;
}

.explor > a {
    color: #fff;
    text-decoration: none;
}
</style>