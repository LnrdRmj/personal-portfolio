<script setup lang="ts">
import { I18nValue } from '@/i18n/i18n';
import HeaderCard from '../../header/HeaderCard.vue';
import { BaseSectionProp } from '../common/section';

export type Props = {
    title: I18nValue,
    description: I18nValue
} & BaseSectionProp

defineProps<Props>()

</script>

<template>
    <div class="flex flex-col">
        <HeaderCard :title="title" :description="description" class="px-10 md:px-20 mb-10 mt-20" />
        <slot />
    </div>
</template>