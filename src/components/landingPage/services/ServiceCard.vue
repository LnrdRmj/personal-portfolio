<script setup lang="ts">
import { WorkService } from '../../../data/workService/services';
import I18nChangeAnimation from '@/components/common/languageChangeAnimation/I18nChangeAnimation.vue';
defineProps<{
    service: WorkService
}>();
</script>

<template>
    <div class="flex flex-col">
        <div class="rounded-xl sm:rounded-[20px] overflow-hidden aspect-[1.2] sm:aspect-[.8]">
            <img :src="service.image" class="object-cover size-full" alt="" />
        </div>
        <div class="mt-5 text-sm font-semibold h-10">
            <I18nChangeAnimation :value="service.description" />
        </div>
        <div class="flex flex-col text-sm mt-8 text-stone-700">
            <I18nChangeAnimation v-for="skill of service.skills" :value="skill" />
        </div>
    </div>
</template>
