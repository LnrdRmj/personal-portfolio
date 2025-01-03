<script setup lang="ts">
import MediaContainer from '../common/MediaContainer.vue';
import { MediaUrl } from '../common/media';

const props = defineProps<{
    medias: [MediaUrl, MediaUrl, MediaUrl]
}>()

</script>

<template>
    <div class="flex gap-2">
        <MediaContainer v-for="media in medias" :media="media" class="object-cover h-full min-w-0" />
    </div>
</template>