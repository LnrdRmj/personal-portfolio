<script setup lang="ts">
import EmailIcon from "../../../assets/emailicon.png";
import WhatsappIcon from "../../../assets/whatsappicon.png";
</script>

<template>
    <div class="flex flex-col standard-responsive-padding lg:px-36 my-52">
        <div class="max-w-full bg-gray-400 h-[2px] shrink-0 mb-5" />
        <div class="uppercase text-2xl mb-16">{{ $t("contactsSection.title") }}</div>
        <div class="flex flex-col">
            <div class="text-4xl sm:text-5xl lg:text-6xl font-semibold">
                {{ $t("contactMe") }}
            </div>
            <div class="text-lg leading-5 mt-5">
                {{ $t("underTitle.phrase1") }}<br />
                {{ $t("underTitle.phrase2") }}
            </div>
        </div>
        <div class="mt-10">
            <div class="flex">
                <img class="h-4 mt-[5px] mr-2" :src="WhatsappIcon" alt="" />
                <div class="flex flex-col font-semibold">
                    <div class="text-lg">Whatsapp</div>
                    <div>+39 345 976 8944</div>
                </div>
            </div>
            <div class="flex mt-6">
                <img class="h-4 mt-[5px] mr-2" :src="EmailIcon" alt="" />
                <div class="flex flex-col font-semibold">
                    <div class="text-lg">Email</div>
                    <div>iacopo2001p@gmail.com</div>
                </div>
            </div>
        </div>
        <button
            class="px-8 w-fit rounded-lg mt-20 bg-secondary py-3 text-white text-base lg:text-xl font-semibold hover:bg-blue-600 transition-colors">
            {{ $t("contactsSection.bookConsultation") }}
        </button>
    </div>
</template>