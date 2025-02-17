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
    <div class="flex" :class="textPosition == 'left' ? 'flex-row-reverse' : 'flex-row'">
        <MediaContainer :media="media" class="w-1/2" />
        <div class="w-1/2 px-20 pt-32 flex flex-col">
            <HeaderCard :title="title" :description="description" />
        </div>
    </div>
</template>