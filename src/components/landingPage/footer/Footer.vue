<script setup lang="ts">
import { siteConfigs } from "@/data/config/config";
import ContactMe from "../../common/ContactMe.vue";
import LangChangeAnimation from '@/components/common/languageChangeAnimation/LangChangeAnimation.vue';
</script>

<template>
    <footer class="px-8 md:px-16 py-16 pb-32 text-white bg-secondary flex flex-col">
        <div class="container-center">
            <div class="max-w-full bg-zinc-800 h-[2px] shrink-0 mb-5" />
            <div class="flex justify-between items-center">
                <div class="font-display font-bold text-xl">{{ siteConfigs.name }}</div>
                <ContactMe />
            </div>
            <div class="flex flex-col space-x-0 space-y-10 md:flex-row md:space-x-32 md:space-y-0 text-sm mt-16">
                <div class="flex flex-col space-y-1">
                    <div class="text-zinc-400 mb-2">Social</div>
                    <a v-for="social of siteConfigs.socials" :key="social.name" :href="social.url" target="_blank"
                        rel="noopener" class="w-fit hover:underline focus-ring">
                        {{ social.name }}
                    </a>
                </div>
                <div class="flex flex-col space-y-1">
                    <div class="text-zinc-400 mb-2">
                        <LangChangeAnimation value="footerSection.writeMe" />
                    </div>
                    <a :href="`mailto:${siteConfigs.contactInfo.email}`" class="w-fit hover:underline focus-ring">
                        {{ siteConfigs.contactInfo.email }}
                    </a>
                    <a :href="`tel:+${siteConfigs.contactInfo.phoneNoSpace}`"
                        class="w-fit hover:underline focus-ring">
                        {{ siteConfigs.contactInfo.phone }}
                    </a>
                </div>
                <div class="flex flex-col space-y-1">
                    <div class="text-zinc-400 mb-2">
                        <LangChangeAnimation value="footerSection.fiscalData" />
                    </div>
                    <div> P.IVA - {{ siteConfigs.fiscalData.VAT }} </div>
                    <div>
                        {{ `${siteConfigs.fiscalData.address.city} (${siteConfigs.fiscalData.address.province}),
                        ${siteConfigs.fiscalData.address.postalCode}` }}
                    </div>
                    <div>
                        {{ `${siteConfigs.fiscalData.address.street}, ${siteConfigs.fiscalData.address.streetNumber}` }}
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
