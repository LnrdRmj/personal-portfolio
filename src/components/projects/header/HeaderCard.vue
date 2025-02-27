<script setup lang="ts">
import I18nChangeAnimation from '@/components/common/languageChangeAnimation/I18nChangeAnimation.vue';
import { I18nValue } from '@/i18n/i18n';

defineProps<{
    title: I18nValue | string,
    description: I18nValue | string
}>()

</script>

<template>
    <div class="flex flex-col">
        <div class="text-2xl uppercase font-semibold">
            <div v-if="typeof title == 'string'">
                {{ title }}
            </div>
            <I18nChangeAnimation v-else :value="title" />
        </div>
        <div class="text-xl mt-0 md:mt-5 leading-tight">
            <div v-if="typeof description == 'string'" v-html="description"></div>
            <I18nChangeAnimation v-else :value="description" />
        </div>
    </div>
</template>