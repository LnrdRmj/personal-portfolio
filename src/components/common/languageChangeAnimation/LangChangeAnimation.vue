<script setup lang="ts">
import { configs } from '@/data/config/config';
import { I18nValue, TranslationsPathsOrString } from '@/i18n/i18n';
import { useCurrentLanguage } from '@/composables/useCurrentLanguage';
import { t } from 'i18next';
import { ref, watch } from 'vue';
import TextSwapper from '../textSwapper/TextSwapper.vue';

const props = withDefaults(defineProps<{
    /** Translation key resolved through t() */
    value?: TranslationsPathsOrString,
    /** Inline translations object, alternative to `value` */
    i18nValue?: I18nValue,
    animationName?: string,
    animation?: boolean
}>(), {
    animation: configs.language.enableAnimation,
    animationName: configs.language.animationName
})

const language = useCurrentLanguage()

function resolve(): string {
    if (props.i18nValue != null) return props.i18nValue[language.value]
    return t(props.value ?? "")
}

const currentText = ref(resolve())
const oldText = ref(currentText.value)
const flip = ref(false)
const skipAnimation = ref(false)

watch([language, () => props.value, () => props.i18nValue], () => {
    oldText.value = currentText.value
    currentText.value = resolve()
    skipAnimation.value = oldText.value === currentText.value
    flip.value = !flip.value
})
</script>

<template>
    <TextSwapper :text1="currentText" :text2="oldText" :flip="flip" :animation="animation && !skipAnimation"
        :animationName="animationName" />
</template>

<style scoped>
/* Blurs the content of the text while it swaps */
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
