<script setup lang="ts">
import I18nChangeAnimation from "@/components/common/languageChangeAnimation/I18nChangeAnimation.vue";
import { Project } from "@/data/projects/project";
import { getSelectedLanguageFromI18nValue } from "@/i18n/i18n";
import { PROJECT_DETAIL } from "@/routes/routeNames";
import { computed, ref, useTemplateRef } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
type Variant = "big" | "small";

const props = withDefaults(
    defineProps<{
        variant?: Variant;
        project: Project
    }>(),
    {
        variant: "small",
    },
);

const workImageImgElement = useTemplateRef<HTMLElement>('workImage')
const isBigVariant = computed(() => props.variant == "big");
const hovered = ref(false);

function goToProjectDetailPage() {

    if (!(document as any).startViewTransition) {
        console.log('not supported')
        router.push({ name: PROJECT_DETAIL, params: { projectId: props.project.id } })
    }
    else {
        (workImageImgElement.value?.style as any).viewTransitionName = 'project-header';
        (document as any).startViewTransition(async () => {
            (workImageImgElement.value?.style as any).viewTransitionName = '';
            router.push({ name: PROJECT_DETAIL, params: { projectId: props.project.id }, query: { noRouteAnimation: null } })
        })
    }

}

</script>

<template>
    <div class="flex flex-col" @mouseover="hovered = true" @mouseleave="hovered = false"
        @click="goToProjectDetailPage()">
        <div ref="workImage"
            class="size-full overflow-hidden transition-[border-radius] duration-700 rounded-[20px] hover:rounded-[40px]">
            <img :src="project.bannerPath"
                class="object-cover size-full transition-transform duration-700 hover1:scale-110" />
        </div>
        <div class="w-full bg-slate-300 h-[2px] shrink-0 mt-3 mb-1" />
        <div class="flex flex-col" :class="{
            'justify-between sm:flex-row': isBigVariant,
            'sm:flex-col': !isBigVariant,
        }">
            <div class="relative h-8 w-full [&>*]:uppercase" :class="{
                'sm:w-1/2': isBigVariant,
            }">
                <div class="font-bold h-fit absolute transition-all duration-300" :class="hovered == true
                    ? 'opacity-0 -translate-y-full'
                    : 'opacity-100 translate-y-0'
                    ">
                    {{ project.clientName }}
                </div>
                <div class="font-bold h-fit absolute transition-all duration-300 w-full" :class="hovered == false
                    ? 'opacity-0 translate-y-full'
                    : 'opacity-100 translate-y-0'
                    ">
                    {{ getSelectedLanguageFromI18nValue(project.role) }}
                </div>
            </div>
            <div class="font-semibold" :class="{
                'sm:w-1/2': isBigVariant,
            }">
                <I18nChangeAnimation :value="project.description" />
            </div>
        </div>
    </div>
</template>