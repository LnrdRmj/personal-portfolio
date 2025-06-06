<script setup lang="ts">
import Client from "./Client.vue";
import ReviewContainer from "./Review.vue";

import { onUnmounted, ref } from "vue";
import LangChangeAnimation from "@/components/common/languageChangeAnimation/LangChangeAnimation.vue";
import { reviews } from "@/data/reviews/reviews";

const selectedReviewIndex = ref(0);
const animationDuration = ".5s";

const interval = setInterval(() => {
    selectedReviewIndex.value = (selectedReviewIndex.value + 1) % reviews.length;
}, 4 * 1000);

onUnmounted(() => {
    clearInterval(interval);
});
</script>

<template>
    <div class="flex flex-col bg-secondary rounded-[20px] px-5 sm:px-16">
        <div class="w-full bg-zinc-800 h-[2px] shrink-0 mt-[50px] mb-4" />
        <div class="uppercase font-extrabold text-2xl mb-[80px] text-white">
            <LangChangeAnimation value="reviewsSection.title" />
        </div>
        <div class="flex flex-col sm:flex-row sm:h-[650px] sm:space-x-5">
            <div class="flex flex-wrap sm:flex-col sm:flex-nowrap sm:space-y-2">
                <Client v-for="(review, index) of reviews" class="mr-3 mb-3" @click="selectedReviewIndex = index"
                    :clientName="review.companyName" :imageSrc="review.logo"
                    :selected="index === selectedReviewIndex" />
            </div>
            <div class="flex flex-col w-full lg:flex-row">
                <div class="w-full h-56 lg:h-auto lg:w-[50%]">
                    <div class="bg-green-400 size-full rounded-[20px]"></div>
                </div>

                <div class="relative max-h-96 h-96 w-full mt-5 sm:h-auto flex sm:flex-1 sm:max-h-none lg:w-[50%]">
                    <div v-for="(review, index) in reviews" :key="index"
                        class="w-full flex h-full absolute left-0 top-0 px-0 lg:px-10"
                        :class="index === selectedReviewIndex ? 'z-10' : ''">
                        <Transition name="review-switch" mode="in-out" :duration="1000">
                            <ReviewContainer class="w-full" v-if="index === selectedReviewIndex" :review="review" />
                        </Transition>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-transparent w-full sm:bg-zinc-800 h-[2px] shrink-0 my-3 md:my-16" />
    </div>
</template>

<style>
.review-switch-leave-from {
    opacity: 1;
}

.review-switch-leave-active {
    transition: opacity v-bind(animationDuration) ease;
}

.review-switch-leave-to {
    opacity: 0;
}

.review-switch-enter-from {
    opacity: 0;
}

.review-switch-enter-active {
    transition: v-bind(animationDuration) ease;
    transition-property: opacity;
}

.review-switch-enter-to {
    opacity: 1;
}
</style>
