<script setup lang="ts">
import AppButton from '../buttons/AppButton.vue';
import LangChangeAnimation from '../languageChangeAnimation/LangChangeAnimation.vue';


export type ContactMethod = {
    name: string,
    contact: string,
    openContact: () => void
}

defineProps<ContactMethod>()

</script>

<template>
    <div class="flex items-center">
        <div class="flex flex-col flex-1 min-w-0">
            <div class="text-xl md:text-3xl font-semibold capitalize">
                {{ name }}
            </div>
            <div class="hidden md:block text-xl">
                <slot name="contact">
                    {{ contact }}
                </slot>
            </div>
        </div>
        <div class="contents" @click="openContact">
            <slot name="button">
                <AppButton class="h-12 text-xl">
                    <LangChangeAnimation value="contactMe" />
                </AppButton>
            </slot>
        </div>
    </div>
</template>