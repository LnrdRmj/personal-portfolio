<script setup lang="ts">
import MediaContainer from '../common/MediaContainer.vue';
import { MediaUrl } from '../common/media';

export type Props = {
    medias: [MediaUrl, MediaUrl, MediaUrl]
}

defineProps<Props>()

</script>

<template>
    <div class="flex gap-2">
        <MediaContainer v-for="media in medias" :media="media" class="object-cover h-full min-w-0" />
    </div>
</template>