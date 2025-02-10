<script setup lang="ts">
import LangChangeAnimation from "@/components/common/languageChangeAnimation/LangChangeAnimation.vue";
import Image1 from "../../../assets/services/imageService1.png";
import Image2 from "../../../assets/services/imageService2.png";
import Image3 from "../../../assets/services/imageService3.png";
import ContactMe from "../../common/ContactMe.vue";
import ServiceCard from "./ServiceCard.vue";

</script>

<template>
    <div
        class="flex flex-col rounded-[20px] px-5 sm:px-16 pt-16 md:pt-[120px] pb-10 md:pb-24 bg-secondary w-full text-white">
        <div class="w-full bg-zinc-800 h-[2px] shrink-0 mb-5" />
        <div class="uppercase font-normal text-2xl mb-[80px]">{{ $t("services.title") }}</div>
        <div class="flex flex-col space-x-0 space-y-10 sm:flex-row sm:space-x-10 sm:space-y-0 w-full [&>*]:h-[700px]">
            <ServiceCard class="flex-1" :description="$t('services.service1.description')"
                :skills="$t('services.service1.skills', { returnObjects: true })" :imageSrc="Image1" />
            <ServiceCard class="flex-1" :description="$t('services.service2.description')"
                :skills="$t('services.service2.skills', { returnObjects: true })" :imageSrc="Image2" />
            <ServiceCard class="flex-1" :description="$t('services.service3.description')"
                :skills="$t('services.service3.skills', { returnObjects: true })" :imageSrc="Image3" />
        </div>
        <div class="w-full bg-zinc-800 h-[2px] shrink-0 my-16" />
        <div class="flex flex-col items-center">
            <div class="text-2xl mb-6">
                <LangChangeAnimation value="services.havearequest" />
            </div>
            <ContactMe />
        </div>
    </div>
</template>
