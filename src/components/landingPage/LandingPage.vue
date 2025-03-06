<script setup lang="ts">
import { getWorks } from "../../data/projects/project";

import { useTranslation } from "i18next-vue";
import { ref, useTemplateRef } from "vue";
import FeaturedWorks from "./feturedWorks/FeaturedWorks.vue";
import Reviews from "./reviews/Reviews.vue";
import Services from "./services/Services.vue";
import Slider from "./technologies/Slider.vue";
import Works from "./works/Works.vue";
import ContactMeSection from "../common/contactMeSection/ContactMeSection.vue";
import LangChangeAnimation from "../common/languageChangeAnimation/LangChangeAnimation.vue";
import { siteConfigs } from "@/data/config/config";
const { i18next } = useTranslation();

const works = ref(getWorks());

// Unfortunatelly when we change the languages we also have to "recalculate" the works
i18next.on("languageChanged", () => {
    works.value = getWorks();
});

const contactMeSection = useTemplateRef('landingContactMeSection')
function goToContactMeSection() {
    if (contactMeSection.value == null) return

    contactMeSection.value.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

</script>

<template>
    <div>
        <div class="flex flex-col w-full h-full bg-primary">
            <div class="flex flex-col h-dvh w-full shrink-0" id="whoami-container">
                <div class="flex flex-col standard-responsive-padding">
                    <div
                        class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl w-full font-semibold sm:font-semibold max-w-[1100px] mt-14 sm:mt-20 md:mt-24">
                        <div v-html="$t('title')"></div>
                    </div>
                    <div class="text-xl mt-12">
                        <div>
                            <LangChangeAnimation value="underTitle.phrase1" />
                        </div>
                        <div>
                            <LangChangeAnimation value="underTitle.phrase2" />
                        </div>
                    </div>

                    <button
                        class="px-8 w-fit rounded-lg mt-24 bg-secondary py-3 text-white text-xl font-semibold hover:bg-blue-600 transition-colors"
                        @click="goToContactMeSection">
                        <LangChangeAnimation value="knoweachotherbutton" />
                    </button>
                </div>
            </div>
            <div class="mb-32" v-if="siteConfigs.showTechnologiesSlider">
                <Slider />
            </div>
            <div class="w-full shrink-0 standard-responsive-padding">
                <div class="w-full bg-gray-400 h-[2px] shrink-0 mb-5" />
                <FeaturedWorks />
            </div>
            <div class="shrink-0 px-3 mt-32 md:mt-64 mb-52" id="service-container">
                <Services />
            </div>
            <div class="standard-responsive-padding">
                <div class="max-w-full bg-gray-400 h-[2px] shrink-0 mb-5" />
            </div>
            <Works :works="works" class="max-w-full mb-32 standard-responsive-padding" id="works-container" />
            <div class="px-3 shrink-0">
                <Reviews />
            </div>
            <div ref="landingContactMeSection" id="landingContactMeSection">
                <ContactMeSection />
            </div>
        </div>
    </div>
</template>
