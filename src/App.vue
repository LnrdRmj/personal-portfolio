<script setup lang="ts">
import EmailIcon from './assets/emailicon.png';
import WhatsappIcon from './assets/whatsappicon.png';
import Header from './components/Header.vue';
import FeaturedWorks from './components/landingPage/feturedWorks/FeaturedWorks.vue';
import Footer from './components/landingPage/footer/Footer.vue';
import Reviews from './components/landingPage/reviews/Reviews.vue';
import Services from './components/landingPage/services/Services.vue';
import Works from './components/landingPage/works/Works.vue';

import { useTranslation } from "i18next-vue";
import { ref } from 'vue';
import { getWorks } from './data/works';
const { t, i18next } = useTranslation();

const works = ref(getWorks({ t, i18next }));

// Unfortunatelly when we change the languages we also have to "recalculate" the works
i18next.on("languageChanged", () => {
    works.value = getWorks({ t, i18next })
});

</script>

<template>
    <div>
        <div class="fixed w-full z-20">
            <Header class="w-full"></Header>
        </div>
        <div class="flex flex-col w-full h-full overflow-y-scroll bg-primary">
            <div class="flex flex-col h-screen w-full shrink-0">
                <div class="flex flex-col px-10 sm:px-36">
                    <div class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl w-full
                                font-medium sm:font-semibold
                                max-w-[1100px] mt-36">
                        <div v-html="$t('title')"></div>
                    </div>
                    <div class="text-xl mt-12">
                        <div>
                            {{ $t('underTitle.phrase1') }}
                        </div>
                        <div>
                            {{ $t('underTitle.phrase2') }}
                        </div>
                    </div>

                    <button class="px-8 w-fit rounded-lg mt-24 bg-secondary py-3 text-white text-xl font-semibold
                        hover:bg-blue-600 transition-colors">
                        {{ $t('knoweachotherbutton') }}
                    </button>

                </div>
            </div>
            <div class="mb-32">
                <Slider />
            </div>
            <div class="w-full shrink-0 px-10 sm:px-36">
                <div class="w-full bg-gray-400 h-[2px] shrink-0 mb-5" />
                <FeaturedWorks />
            </div>
            <div class="shrink-0 px-3 mt-64 mb-72">
                <Services />
            </div>
            <div class="max-w-full bg-gray-400 h-[2px] shrink-0 mb-5 mx-10 sm:mx-36" />
            <Works :works="works" class="px-10 sm:px-36 max-w-full mb-32" />
            <div class="px-3 shrink-0">
                <Reviews />
            </div>
            <div class="flex flex-col px-10 sm:px-20 lg:px-36 my-52">
                <div class="max-w-full bg-gray-400 h-[2px] shrink-0 mb-5" />
                <div class="uppercase text-2xl mb-16">{{ $t('contactsSection.title') }}</div>
                <div class="flex flex-col">
                    <div class="text-4xl sm:text-5xl lg:text-6xl font-semibold">
                        {{ $t('contactMe') }}
                    </div>
                    <div class="text-lg leading-5 mt-5">
                        {{ $t('underTitle.phrase1') }}<br>
                        {{ $t('underTitle.phrase2') }}
                    </div>
                </div>
                <div class="mt-10">
                    <div class="flex">
                        <img class="h-4 mt-[5px] mr-2" :src="WhatsappIcon" alt="">
                        <div class="flex flex-col font-semibold">
                            <div class="text-lg">Whatsapp</div>
                            <div>+39 327 955 1219</div>
                        </div>
                    </div>
                    <div class="flex mt-6">
                        <img class="h-4 mt-[5px] mr-2" :src="EmailIcon" alt="">
                        <div class="flex flex-col font-semibold">
                            <div class="text-lg">Email</div>
                            <div>leonardo.ra14@icloud.com</div>
                        </div>
                    </div>
                </div>
                <button class="px-8 w-fit rounded-lg mt-20 bg-secondary py-3 text-white text-base lg:text-xl font-semibold
                    hover:bg-blue-600 transition-colors">
                    {{ $t('contactsSection.bookConsultation') }}
                </button>
            </div>
            <Footer />
        </div>
    </div>
</template>