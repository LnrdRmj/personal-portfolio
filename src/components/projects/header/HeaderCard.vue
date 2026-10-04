<script setup lang="ts">
import LangChangeAnimation from '@/components/common/languageChangeAnimation/LangChangeAnimation.vue';
import { I18nValue } from '@/i18n/i18n';

defineProps<{
    title: I18nValue | string,
    description: I18nValue | string
}>()

</script>

<template>
    <div class="flex flex-col">
        <div class="text-2xl uppercase font-extrabold">
            <div v-if="typeof title == 'string'">
                {{ title }}
            </div>
            <LangChangeAnimation v-else :i18nValue="title" />
        </div>
        <div class="text-xl mt-3 md:mt-5 leading-tight">
            <div v-if="typeof description == 'string'" v-html="description"></div>
            <LangChangeAnimation v-else :i18nValue="description" />
        </div>
    </div>
</template>