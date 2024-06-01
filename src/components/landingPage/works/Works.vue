<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
    works: {
        period: string,
        clientName: string,
        role: string,
        skills: {
            name: string,
            color: string
        }[],
    }[]
}>()

const hovered = ref<boolean[]>([])

</script>

<template>
    <div class="flex flex-col">
        <div class="text-3xl font-semibold mb-10 uppercase">
            {{ $t('worksSection.title') }}
        </div>
        <div class="w-full [&>*]:items-center [&>*:last-child]:border-b [&>*:last-child]:border-b-black">
            <div class="flex w-full text-sm font-medium text-zinc-400 h-10 uppercase">
                <div class="w-2/12"></div>
                <div class="w-2/12">{{ $t('worksSection.table.clientCol') }}</div>
                <div class="w-3/12">{{ $t('worksSection.table.roleCol') }}</div>
                <div class="w-3/12">{{ $t('worksSection.table.skillsCol') }}</div>
                <div class="w-2/12"></div>
            </div>
            <div v-for="(work, index) of works" @mouseenter="hovered[index] = true" @mouseleave="hovered[index] = false" class="flex items-center border-t border-t-black w-full font-medium h-16
                group hover:bg-black hover:rounded-md [&:hover+div]:border-t-transparent transition-colors">
                <div class="w-2/12 text-zinc-400 group-hover:pl-5 transition-[padding]">{{ work.period }}</div>
                <div class="w-2/12 group-hover:pl-5 group-hover:text-white transition-[padding]">{{ work.clientName }}</div>
                <div class="w-3/12 group-hover:pl-5 group-hover:text-white transition-[padding]">{{ work.role }}</div>
                <div class="w-3/12 flex space-x-3 text-sm">
                    <div v-for="skill of work.skills" class="border flex-center uppercase rounded-md h-fit py-[2px] px-[7px] transition-colors"
                    :style="hovered[index] == true 
                        ? `color: ${skill.color}; border-color: ${skill.color}`
                         : 'color: black; border-color: black'">
                        {{skill.name}}
                    </div>
                </div>
                <div class="w-2/12">
                    <button class="transition-all group-hover:border group-hover:border-white group-hover:text-white px-3 py-[1px] rounded-full">
                        {{ $t('worksSection.table.previewProject') }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>