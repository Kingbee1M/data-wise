<template>
    <div>
    </div>
</template>

<script>
import { useLanguages } from '@/stores/LanguageStore';
    export default {
        setup() {
            const languageStore = useLanguages()
            return {languageStore}
        }
    }
</script>

<style scoped>

</style>