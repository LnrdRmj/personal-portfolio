<script setup lang="ts">
import LangChangeAnimation from './languageChangeAnimation/LangChangeAnimation.vue';

function goToContactMeSection() {

    const contactMeSection = document.getElementById('landingContactMeSection')
    if (contactMeSection == null) return

    contactMeSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<template>
    <button @click="goToContactMeSection"
        class="rounded-full border flex items-center py-2 px-4 group transition-colors border-primary bg-secondary hover:bg-primary">
        <div class="mr-2 group-hover:text-black leading-none mb-[2px]">
            <LangChangeAnimation value="contactMe" />
        </div>
        <div>
            <!-- White arrow -->
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="stroke-white group-hover:stroke-black transition-[stroke]">
                <path d="M0 6H20" stroke-width="1.5" />
                <path d="M15 1L20 6L15 11" stroke-width="1.5" />
            </svg>
        </div>
    </button>
</template>
