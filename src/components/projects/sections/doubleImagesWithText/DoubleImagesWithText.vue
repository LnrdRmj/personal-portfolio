<script setup lang="ts">
import { I18nValue } from '@/i18n/i18n';
import HeaderCard from '../../header/HeaderCard.vue';
import { MediaUrl } from '../common/media';
import DoubleImages from '../doubleImages/DoubleImages.vue';
import { BaseSectionProp } from '../common/section';

export type Props = {
    medias: [MediaUrl, MediaUrl],
    title: I18nValue,
    description: I18nValue,
    textPosition?: "left" | "right"
} & BaseSectionProp

withDefaults(defineProps<Props>(), {
    textPosition: 'right'
})

</script>

<template>
    <div class="flex" :class="textPosition == 'left' ? 'flex-row-reverse' : 'flex-row'">
        <DoubleImages :medias="medias" class="w-1/2" :fluid="fluid" />
        <div class="w-1/2 px-10 md:px-20 py-16 md:pt-32 flex flex-col">
            <HeaderCard :title="title" :description="description" />
        </div>
    </div>
</template>