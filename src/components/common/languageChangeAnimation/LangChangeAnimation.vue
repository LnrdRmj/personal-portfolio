<script setup lang="ts">
import { configs } from '@/data/config/config';
import { TranslationsPathsOrString } from '@/i18n/i18n';
import { useTranslation } from 'i18next-vue';
import { ref } from 'vue';
import TextSwapper from '../textSwapper/TextSwapper.vue';

const props = withDefaults(defineProps<{
    value: TranslationsPathsOrString,
    animationName?: string,
    animation?: boolean
}>(), {
    animation: configs.language.enableAnimation,
    animationName: configs.language.animationName
})

const { i18next, t } = useTranslation()

var currentTranslatedText = ref(t(props.value as string));
var oldTranslatedText = ref(currentTranslatedText.value);

const flip = ref(false)
i18next.on("languageChanged", (lng) => {
    flip.value = !flip.value
    oldTranslatedText.value = currentTranslatedText.value
    currentTranslatedText.value = t(props.value as string)
})

</script>

<template>

    <TextSwapper :text1="currentTranslatedText" :text2="oldTranslatedText" :flip="flip" :animation="animation"
        :animationName="animationName" />

</template>

<style scoped>
/* Blurs the content of the text */
.change-language-animation-enter-active,
.change-language-animation-leave-active {
    transition: filter 0.5s;
    transform: translate3d(0, 0, 0);
}

.change-language-animation-enter-from,
.change-language-animation-leave-to {
    filter: blur(10px);
}

.change-language-animation-enter-to,
.change-language-animation-leave-from {
    filter: blur(0px);
}
</style>