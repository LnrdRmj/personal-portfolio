<script setup lang="ts">
import MediaContainer from '../common/MediaContainer.vue';
import { MediaUrl, fluidClassForMedia } from '../common/media';
import { BaseSectionProp } from '../common/section';

export type Props = {
    media: MediaUrl,
} & BaseSectionProp

withDefaults(defineProps<Props>(), {
    fluid: false
})

</script>

<template>
    <MediaContainer :media="media" :class="[media.type == 'video' ? 'aspect-video' : '', fluidClassForMedia(fluid)]" />
</template>