<script setup lang="ts">
import MediaContainer from '../common/MediaContainer.vue';
import { MediaUrl, fluidClassForMedia } from '../common/media';
import { BaseSectionProp } from '../common/section';

export type Props = {
    medias: [MediaUrl, MediaUrl, MediaUrl]
} & BaseSectionProp

defineProps<Props>()

</script>

<template>
    <div class="flex flex-col md:flex-row gap-2">
        <MediaContainer v-for="media in medias" :media="media" class="h-full min-w-0 flex-1"
            :class="fluidClassForMedia(fluid)" />
    </div>
</template>