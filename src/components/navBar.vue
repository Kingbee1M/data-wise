<template>
    <div class="wrapper">
    <div class="holder">
        <div class="top">
            <div><RouterLink to="/"><img src="@/assets/images/DataWise logo.svg" alt="logo"></RouterLink></div>
            <div class="buttonHolder"><button @click="handleVisible" v-show="ismenuvisible"><img src="@/assets/images/Transparent.svg" class="menu"></button><button @click="handleVisible" v-show="isCancelVisible"><img src="@/assets/images/Vector.svg" class="cancel"></button></div>
        </div>
            <div>
                <transition name="drop-down">
            <div class="dropDown" v-if="isNotVisible">
                <ul class="firstLink">
                <li><RouterLink to="/features">{{ displayText.navbar[0] }}</RouterLink></li>
                <li><RouterLink to="/features"><div>{{ displayText.navbar[1] }}</div></RouterLink></li>
                <li>
                    <select id="language" v-model="selectedLanguage" @change="changeLanguage(selectedLanguage)">
                        <option 
              v-for="languageKey in languageKeys" 
              :key="languageKey"
            >
              {{ languageKey }}
            </option>
                    </select>
                </li>
                <li><RouterLink to="/features">{{ displayText.navbar[3] }}</RouterLink></li>
            </ul>
            
        
        <div><ul class="listSet2">
            <li class="secondLink"><RouterLink to="/features">{{ displayText.navbar[4] }}</RouterLink></li>
            <li class="thirdLink"><RouterLink to="/features">{{ displayText.navbar[5] }}</RouterLink></li>
        </ul></div>
        </div>
        </transition>
        </div>
    </div>
</div>
</template>

<script>
import { useLanguages } from '@/stores/LanguageStore';
import { ref, watch } from 'vue';
    export default {
        name: 'navBar',
        setup() {
            const language = useLanguages()
            let diffLanguage = []
            const languageKeys = Object.keys(language.languages)
            let displayText = ref(language.languages.English)
            languageKeys.forEach(key => {
            diffLanguage.push(language.languages[key])
            });
            const selectedLanguage = ref('English')
            

            const changeLanguage = (language) => {
                 let values = languageKeys.indexOf(language)
                displayText.value = diffLanguage[values]
                console.log(displayText.value);
                
            }

            watch(displayText, () => {
            language.setDisplayText(displayText.value);
            });

            const handleVisible = () => {
                visibleChange();
                menuchange();
                cancelchange();
            };


            let  isNotVisible = ref(false)

            const visibleChange = () => {
                isNotVisible.value = !isNotVisible.value
                
            }

            let ismenuvisible = ref(true)

            const menuchange = () => {
                ismenuvisible.value = !ismenuvisible.value
            }

            let isCancelVisible = ref(false)

            const cancelchange = () => {
                isCancelVisible.value = !isCancelVisible.value
            }
            

         return { language, languageKeys, selectedLanguage, diffLanguage, changeLanguage, displayText, visibleChange, isNotVisible, ismenuvisible, handleVisible, menuchange, cancelchange, isCancelVisible}  
        }
    }
</script>


<style scoped>
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: DM Sans;
        position: sticky;
        top: 0;
        width: 100%;
        background-color: white;
    }
    .holder {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: left;
        padding: 20px 0;
        margin-bottom: 20px;
        border-bottom: thin solid rgb(231,233,230);
        width: 90%;
    }

    .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .dropDown {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 30px
    }

    button {
        border: none;
        cursor: pointer;
        background-color: white;
        transition: transform 2s linear;           
    }

    button:active {
        transform: rotate(180deg);
    }

    .buttonHolder {
        display: flex;
        justify-content: center;
    }

    menu{
        height: 50px;
        padding: 0;
        margin: 0;
    }


    .cancel {
        height: 20px;
    }

    ul {
        padding: 0;
        list-style: none;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .firstLink  a {
        color: black;
        text-decoration: none;
    }

    .listSet2 {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 35px;
        margin-top: 30px;
    }

    .secondLink {
        width: 100%;
        font-size: 100%;
        padding: 15px 3px;
        border-radius: 15px;
        border: 1px solid #C1C5BF;
        text-align: center;
        background-color: #3A7326;        
    }

    .secondLink  a {
        color: white;
        text-decoration: none;
    }

    .thirdLink {
        width: 100%;
        font-size: 100%;
        padding: 15px 3px;
        border-radius: 15px;
        border: 1px solid #C1C5BF;
        text-align: center;
    }

    .thirdLink  a {
        color: black;
        text-decoration: none;
        /* font-size: 13px; */
    }

    select {
        border: none;
    }
</style>