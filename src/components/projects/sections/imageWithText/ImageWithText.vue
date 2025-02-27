<script setup lang="ts">
import { I18nValue } from '@/i18n/i18n';
import HeaderCard from '../../header/HeaderCard.vue';
import MediaContainer from '../common/MediaContainer.vue';
import { MediaUrl } from '../common/media';

export type Props = {
    media: MediaUrl,
    title: I18nValue,
    description: I18nValue,
    textPosition?: "left" | "right"
}

withDefaults(defineProps<Props>(), {
    textPosition: 'right'
})

</script>

<template>
    <div class="flex flex-col" :class="textPosition == 'left' ? 'md:flex-row-reverse' : 'md:flex-row'">
        <MediaContainer :media="media" class="w-full h-[500px] md:h-auto md:w-1/2" />
        <div class="md:w-1/2 px-10 md:px-20 py-16 md:pt-32 flex flex-col">
            <HeaderCard :title="title" :description="description" />
        </div>
    </div>
</template>