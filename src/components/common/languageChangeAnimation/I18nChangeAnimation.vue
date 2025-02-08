<script setup lang="ts">
import { I18nValue } from '@/i18n/i18n';
import { useTranslation } from 'i18next-vue';
import { ref } from 'vue';
import TextSwapper from '../textSwapper/TextSwapper.vue';

const props = defineProps<{
    value: I18nValue
}>()

const { i18next } = useTranslation()

const currentValue = ref(props.value[i18next.language])
const oldValue = ref(props.value[i18next.language])

const flip = ref(false)
i18next.on("languageChanged", (lng) => {
    flip.value = !flip.value
    oldValue.value = currentValue.value
    currentValue.value = props.value[lng]
})

</script>

<template>
    <TextSwapper :flip="flip" :text1="currentValue" :text2="oldValue" />
</template>