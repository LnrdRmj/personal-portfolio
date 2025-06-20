<script setup lang="ts">
import { ref } from "vue";
import { Project, getProjectPeriodString } from "../../../data/projects/project";
import { PROJECT_DETAIL } from "../../../routes/routeNames";
import I18nChangeAnimation from "@/components/common/languageChangeAnimation/I18nChangeAnimation.vue";
import LangChangeAnimation from "@/components/common/languageChangeAnimation/LangChangeAnimation.vue";

defineProps<{
    works: Project[]
}>();

const hovered = ref<boolean[]>([]);
</script>

<template>
    <div class="flex flex-col">
        <div class="text-2xl font-extrabold mb-10 uppercase">
            {{ $t("worksSection.title") }}
        </div>
        <div class="w-full *:items-center [&>*:last-child]:border-b [&>*:last-child]:border-b-black">
            <div class="flex w-full text-lg sm:text-sm font-medium text-zinc-400 h-10 uppercase">
                <div class="hidden sm:block sm:w-2/12"></div>
                <div class="w-[45%] sm:w-2/12">{{ $t("worksSection.table.clientCol") }}</div>
                <div class="w-[45%] sm:w-3/12">{{ $t("worksSection.table.roleCol") }}</div>
                <div class="hidden sm:block w-3/12">{{ $t("worksSection.table.skillsCol") }}</div>
                <div class="hidden sm:block w-2/12"></div>
            </div>
            <div v-for="(work, index) of works" @mouseenter="hovered[index] = true" @mouseleave="hovered[index] = false"
                class="flex items-center border-t border-t-black w-full font-medium h-16 group hover:bg-black hover:rounded-md [&:hover+div]:border-t-transparent transition-colors text-lg sm:text-base">
                <div class="hidden sm:block w-2/12 text-zinc-400 group-hover:pl-5 transition-[padding]">
                    {{ getProjectPeriodString(work.period) }}
                </div>
                <div class="w-[45%] sm:w-2/12 group-hover:pl-5 group-hover:text-white transition-[padding]">
                    {{ work.clientName }}
                </div>
                <div class="w-[45%] sm:w-3/12 group-hover:pl-5 group-hover:text-white transition-[padding]">
                    <I18nChangeAnimation :value="work.role" />
                </div>
                <div class="hidden w-3/12 sm:flex space-x-3 text-sm">
                    <div v-for="skill of work.skills"
                        class="border flex-center uppercase rounded-md h-fit pt-[2px] pb-[4px] px-[7px] transition-colors"
                        :style="hovered[index] == true
                            ? `color: ${skill.color}; border-color: ${skill.color}`
                            : 'color: black; border-color: black'
                            ">
                        {{ skill.name }}
                    </div>
                </div>
                <div class="w-2/12">
                    <button
                        class="transition-all group-hover:border group-hover:border-white group-hover:text-white sm:px-3 sm:py-px rounded-full sm:bg-transparent sm:size-auto bg-black size-7">
                        <RouterLink :to="{ name: PROJECT_DETAIL, params: { projectId: work.id } }">
                            <div class="hidden sm:block">
                                <LangChangeAnimation value="worksSection.table.previewProject"
                                    animationName="cube-rotate" />
                            </div>
                            <div class="sm:hidden text-white">></div>
                        </RouterLink>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
