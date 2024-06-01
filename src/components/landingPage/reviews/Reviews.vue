<script setup lang="ts">
import { useTranslation } from 'i18next-vue';
import Client from './Client.vue';
import Review from './Review.vue';

import { ref } from 'vue';
const { i18next } = useTranslation();

type Review = {
    companyName: string,
    logo: string,
    review: string,
    reviewer: string,
    role: string
}

const reviews = ref(getReviews())

// Unfortunatelly when we change the languages we also have to "recalculate" the works
i18next.on("languageChanged", () => {
    reviews.value = getReviews()
    console.log('reviews updated');
    
});

function getReviews(): Review[] {
    return [
        {
            companyName: 'Yoomy',
            logo: '/images/clients/icons/yoomy.svg',
            review: 'reviewsSection.review1.description',
            reviewer: 'Yoomy Group',
            role: 'reviewsSection.review1.role',
        },
        {
            companyName: 'Voricel',
            logo: '/images/clients/icons/voricel.svg',
            review: 'reviewsSection.review2.description',
            reviewer: 'Farid Sanhaji',
            role: 'reviewsSection.review2.role',
        },
        {
            companyName: 'Naturae Firenze',
            logo: '/images/clients/icons/naturaeFirenze.svg',
            review: 'reviewsSection.review3.description',
            reviewer: 'Fabio Canestrini',
            role: 'reviewsSection.review3.role',
        },
        {
            companyName: 'Softkeys',
            logo: '/images/clients/icons/softKeys.svg',
            review: 'reviewsSection.review4.description',
            reviewer: 'Giulio Rossini',
            role: 'reviewsSection.review4.role',
        },
        {
            companyName: 'i\'Re',
            logo: '/images/clients/icons/ire.svg',
            review: 'reviewsSection.review5.description',
            reviewer: 'Ettore Canestrini',
            role: 'reviewsSection.review5.role',
        }
    ]
}

const selectedReviewIndex = ref(0);
const animationDuration = '.5s'

</script>

<template>
    <div class="flex flex-col bg-secondary rounded-[20px] px-16">
        <div class="w-full bg-zinc-800 h-[2px] shrink-0 mt-[50px] mb-4"/>
        <div class="text-3xl text-white font-semibold mb-10">
            COSA DICONO I MIEI CLIENTI
        </div>
        <div class="flex h-[650px] space-x-5">
            <div class="flex flex-col space-y-2">
                <Client v-for="(review, index) of reviews"
                    :class="{ 'bg-red-500': index === selectedReviewIndex }"
                    @click="selectedReviewIndex = index"
                    :clientName="review.companyName"
                    :imageSrc="review.logo"
                    :selected="index === selectedReviewIndex"/>
                <!-- <Client clientName="i'Re" :imageSrc="IreLogo" :selected="false"/> -->
            </div>
            <div class="w-[38%]">
                <div class="bg-green-400 size-full rounded-[20px]"></div>
            </div>

            <div class="relative w-[38%] flex flex-1">
                <div v-for="(review, index) in reviews" :key="index"
                    class="w-full flex h-full absolute left-0 top-0 px-10"
                    :class="index === selectedReviewIndex ? 'z-10' : ''">
                    <Transition name="review-switch" mode="in-out" :duration="1000">
                        <Review class="w-full"
                            v-if="index === selectedReviewIndex"
                            v-bind="{
                                review: review.review,
                                name: review.reviewer,
                                role: review.role
                            }"/>
                    </Transition>
                </div>
            </div>
        </div>
        <div class="w-full bg-zinc-800 h-[2px] shrink-0 my-16"/>
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