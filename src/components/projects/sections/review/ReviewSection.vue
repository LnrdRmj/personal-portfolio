<script setup lang="ts">
import LangChangeAnimation from '@/components/common/languageChangeAnimation/LangChangeAnimation.vue';
import { Review } from '@/data/reviews/reviews';
import { BaseSectionProp } from '../common/section';

export type Props = {
    review: Review,
} & BaseSectionProp

defineProps<Props>()
</script>

<template>
    <div class="standard-responsive-padding flex-center">
        <figure class="bg-secondary text-white rounded-3xl px-8 py-14 md:px-20 md:py-20 max-w-[1000px] w-full">
            <blockquote class="font-display text-2xl md:text-4xl font-medium leading-snug tracking-tight">
                “<LangChangeAnimation :i18nValue="review.review" class="inline" />”
            </blockquote>
            <figcaption class="mt-10 flex items-center">
                <div class="w-10 h-[2px] bg-white/40 mr-4" />
                <div>
                    <div class="font-semibold">{{ review.reviewer }}</div>
                    <div class="text-white/60 text-sm">
                        <LangChangeAnimation :i18nValue="review.role" />
                    </div>
                </div>
            </figcaption>
        </figure>
    </div>
</template>
