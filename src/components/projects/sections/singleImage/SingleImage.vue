<script setup lang="ts">
import MediaContainer from '../common/MediaContainer.vue';
import { MediaUrl } from '../common/media';

export type Props = {
    media: MediaUrl
}

defineProps<Props>()

</script>

<template>
    <MediaContainer :media="media" />
</template>