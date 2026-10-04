<script setup lang="ts">
import i18next from "i18next";
import { computed } from "vue";
import { useCurrentLanguage } from "@/composables/useCurrentLanguage";

const currentLanguage = useCurrentLanguage();

const language = computed({
    get: () => currentLanguage.value,
    set: (value) => { i18next.changeLanguage(value); },
});
</script>

<template>
    <select v-model="language" aria-label="Language"
        class="bg-secondary text-white cursor-pointer focus-ring rounded-sm">
        <option value="it">IT</option>
        <option value="en">ENG</option>
    </select>
</template>
