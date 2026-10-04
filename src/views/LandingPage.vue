<script setup lang="ts">
import { useTemplateRef } from "vue";
import { works } from "@/data/projects/project";
import { siteConfigs } from "@/data/config/config";
import FeaturedWorks from "@components/landingPage/featuredWorks/FeaturedWorks.vue";
import Reviews from "@components/landingPage/reviews/Reviews.vue";
import Services from "@components/landingPage/services/Services.vue";
import Slider from "@components/landingPage/technologies/Slider.vue";
import Works from "@components/landingPage/works/Works.vue";
import ContactMeSection from "@components/common/contactMeSection/ContactMeSection.vue";
import LangChangeAnimation from "@components/common/languageChangeAnimation/LangChangeAnimation.vue";
import RevealOnScroll from "@components/common/RevealOnScroll.vue";

const contactMeSection = useTemplateRef('landingContactMeSection')
function goToContactMeSection() {
    if (contactMeSection.value == null) return

    contactMeSection.value.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

</script>

<template>
    <div class="bg-primary">
        <div class="flex flex-col w-full h-full">
            <div class="flex flex-col h-dvh max-h-250 w-full shrink-0 container-center" id="whoami-container">
                <div class="flex flex-col">
                    <h1
                        class="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl w-full font-bold tracking-tight leading-[1.05] max-w-[1100px] mt-14 sm:mt-20 md:mt-24">
                        <div v-html="$t('title')"></div>
                    </h1>
                    <div class="text-lg sm:text-xl mt-12 text-secondary/70 max-w-prose">
                        <div>
                            <LangChangeAnimation value="underTitle.phrase1" />
                        </div>
                        <div>
                            <LangChangeAnimation value="underTitle.phrase2" />
                        </div>
                    </div>

                    <button
                        class="px-8 w-fit rounded-lg mt-24 bg-secondary py-3 text-white text-xl font-semibold hover:bg-secondary/80 focus-ring transition-colors"
                        @click="goToContactMeSection">
                        <LangChangeAnimation value="knoweachotherbutton" />
                    </button>
                </div>
            </div>
            <div class="mb-24 md:mb-40" v-if="siteConfigs.showTechnologiesSlider">
                <Slider />
            </div>
            <div class="w-full shrink-0 container-center">
                <div class="w-full bg-secondary/20 h-[2px] shrink-0 mb-5" />
                <RevealOnScroll>
                    <FeaturedWorks />
                </RevealOnScroll>
            </div>
            <div class="shrink-0 px-3 mt-24 md:mt-40 mb-24 md:mb-40 container-center" id="service-container">
                <RevealOnScroll>
                    <Services />
                </RevealOnScroll>
            </div>
            <div class="container-center">
                <div class="max-w-full bg-secondary/20 h-[2px] shrink-0 mb-5" />
            </div>
            <RevealOnScroll class="container-center mb-24 md:mb-40" id="works-container">
                <Works :works="works" />
            </RevealOnScroll>
            <div class="px-3 shrink-0 container-center">
                <RevealOnScroll>
                    <Reviews />
                </RevealOnScroll>
            </div>
            <div ref="landingContactMeSection" id="landingContactMeSection" class="flex-center">
                <ContactMeSection />
            </div>
        </div>
    </div>
</template>
