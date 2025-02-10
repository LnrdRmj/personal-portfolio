<script setup lang="ts">
import { siteConfigs } from "@/data/config/config";
import ContactMe from "../../common/ContactMe.vue";
import LangChangeAnimation from '@/components/common/languageChangeAnimation/LangChangeAnimation.vue';
</script>

<template>
    <footer class="px-16 py-16 pb-32 text-white bg-secondary flex flex-col">
        <div class="max-w-full bg-zinc-800 h-[2px] shrink-0 mb-5" />
        <div class="flex justify-between">
            <div>LOGO</div>
            <ContactMe />
        </div>
        <div class="flex flex-col space-x-0 space-y-10 md:flex-row md:space-x-32 md:space-y-0 text-sm mt-16">
            <div class="flex flex-col">
                <div class="text-zinc-300 mb-2">Social</div>
                <div>Linkedin</div>
                <div>Instagram</div>
            </div>
            <div class="flex flex-col">
                <div class="text-zinc-300 mb-2">
                    <LangChangeAnimation value="footerSection.writeMe" />
                </div>
                <div>leonardo.ra14@icloud.com</div>
                <div>+39 327 955 1219</div>
            </div>
            <!-- For when I'll actually have a P.Iva -->
            <div class="flex flex-col">
                <div class="text-zinc-300 mb-2">
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
    </footer>
</template>
