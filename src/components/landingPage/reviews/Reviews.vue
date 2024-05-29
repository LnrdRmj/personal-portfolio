<script setup lang="ts">
import Client from './Client.vue';
import Review from './Review.vue'

import YoomyLogo from '../../../assets/clients/icons/yoomy.svg'
import IreLogo from '../../../assets/clients/icons/ire.svg'
import NaturaeLogo from '../../../assets/clients/icons/naturaeFirenze.svg'
import SoftKeysLogo from '../../../assets/clients/icons/softKeys.svg'
import VoricelLogo from '../../../assets/clients/icons/voricel.svg'
import { ref } from 'vue';

const reviews: {
    companyName: string,
    logo: string,
    description: string,
    reviewer: string,
    role: string
}[] = [
    {
        companyName: 'Yoomy',
        logo: YoomyLogo,
        description: 'Ho recentemente affidato la creazione del mio sito web a Iacopo Pazzaglia e non potrei essere più soddisfatto del risultato! Sin dall\'inizio, il team è stato estremamente professionale, attento e ricettivo alle mie esigenze.',
        reviewer: 'Yoomy Group',
        role: 'Team di Yoomy',
    },
    {
        companyName: 'Voricel',
        logo: IreLogo,
        description: 'Descrizione 2',
        reviewer: 'Farid Sanhaji',
        role: 'Founder di Voricel',
    },
    {
        companyName: 'Naturae Firenze',
        logo: NaturaeLogo,
        description: 'Descrizione 3',
        reviewer: 'Fabio Canestrini',
        role: 'Founder di Naturae Firenze',
    },
    {
        companyName: 'Softkeys',
        logo: SoftKeysLogo,
        description: 'Descrizione 4',
        reviewer: 'Giulio Rossini',
        role: 'Owner di softkeys',
    },
    {
        companyName: 'i\'Re',
        logo: VoricelLogo,
        description: 'Descrizione 5',
        reviewer: 'Ettore Canestrini',
        role: 'Founde di I\'Rè',
    }
]

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
                                review: review.description,
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