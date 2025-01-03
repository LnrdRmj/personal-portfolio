<script setup lang="ts">
import { Work } from '../../data/works/works';
import ProjectHeader from './header/ProjectHeader.vue';
import DoubleImages from './sections/doubleImages/DoubleImages.vue';
import PlaceholderImage from '../../assets/placeholderImage.png'
import PlaceholderVideo from '../../assets/PlaceholderVideo.mp4'
import SingleImage from './sections/singleImage/SingleImage.vue';
import { MediaUrl } from './sections/common/media';
import WithTitle from './sections/withTitle/WithTitle.vue';
import DoubleImagesWithText from './sections/doubleImagesWithText/DoubleImagesWithText.vue';
import TripleImages from './sections/tripleImages/TripleImages.vue';

const props = defineProps<{
    project: Work
}>()

const placeholderVideoMedia: MediaUrl = {
    url: PlaceholderVideo,
    type: 'video'
}
const placeholderImageMedia: MediaUrl = {
    url: PlaceholderImage,
    type: 'image'
}

</script>

<template>
    <div class="flex flex-col justify-center w-full gap-2">
        <ProjectHeader :project="project" />
        <SingleImage class="h-[600px] object-cover" :media="placeholderImageMedia" />
        <DoubleImages class="h-[600px]" :medias="[placeholderImageMedia, placeholderVideoMedia]" />
        <WithTitle class="mt-20" title="TITOLO SEZIONE"
            description="Sono una descrizione di esempio creata per mostrare come potrebbe apparire un testo descrittivo.
In un contesto reale, questa descrizione includerebbe dettagli chiari e informativi su un argomento specifico, come una panoramica del prodotto.">
            <SingleImage class="h-[600px] object-cover" :media="placeholderImageMedia" />
        </WithTitle>
        <DoubleImagesWithText class="h-[600px]" :medias="[placeholderImageMedia, placeholderImageMedia]"
            title="TITOLO SEZIONE"
            description="Sono una descrizione di esempio creata per mostrare come potrebbe apparire un testo descrittivo.
        In un contesto reale, questa descrizione includerebbe dettagli chiari e informativi su un argomento specifico, come una panoramica del prodotto." />
        <TripleImages class="h-[600px]"
            :medias="[placeholderImageMedia, placeholderVideoMedia, placeholderImageMedia]" />
    </div>
</template>