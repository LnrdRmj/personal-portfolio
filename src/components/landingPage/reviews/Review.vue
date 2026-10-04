<script setup lang="ts">
import LangChangeAnimation from '@/components/common/languageChangeAnimation/LangChangeAnimation.vue';
import { Review } from '@/data/reviews/reviews';
defineProps<{
    review: Review
}>();
</script>

<template>
    <div class="flex flex-col">
        <div class="flex-1 overflow-y-scroll text-white text-xl sm:text-2xl">
            <LangChangeAnimation :i18nValue="review.review" />
        </div>
        <div class="w-full bg-gray-700 h-[2px] shrink-0 mt-[30px] mb-4" />
        <div class="flex">
            <div class="size-16 rounded-lg bg-zinc-800 flex-center shrink-0">
                <div class="bg-white size-8"
                    :style="{ mask: `url(${review.logo}) no-repeat center / contain` }" />
            </div>
            <div class="flex flex-col justify-center ml-5">
                <div class="text-white text-lg">{{ review.reviewer }}</div>
                <div class="text-gray-500 text-sm">
                    <LangChangeAnimation :i18nValue="review.role" />
                </div>
            </div>
        </div>
    </div>
</template>
