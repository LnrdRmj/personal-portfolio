<script setup lang="ts">
    import I18nChangeAnimation from "@/components/common/languageChangeAnimation/I18nChangeAnimation.vue";
import LangChangeAnimation from "@/components/common/languageChangeAnimation/LangChangeAnimation.vue";
import { Project } from "@/data/projects/project";
import { getSelectedLanguageFromI18nValue } from "@/i18n/i18n";
import { computed, ref } from "vue";

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

    const isBigVariant = computed(() => props.variant == "big");
    const hovered = ref(false);
</script>

<template>
    <div class="flex flex-col" @mouseover="hovered = true" @mouseleave="hovered = false">
        <div
            class="size-full overflow-hidden transition-[border-radius] duration-700 rounded-[20px] hover:rounded-[40px]"
        >
            <img
                :src="project.bannerPath"
                class="object-cover size-full transition-transform duration-700 hover:scale-110"
            />
        </div>
        <div class="w-full bg-slate-300 h-[2px] shrink-0 mt-3 mb-1" />
        <div
            class="flex flex-col sm:flex-row justify-between"
            :class="{
                'justify-between': isBigVariant,
                'flex-col': !isBigVariant,
            }"
        >
            <div
                class="relative h-8 w-full [&>*]:uppercase"
                :class="{
                    'sm:w-1/2': isBigVariant,
                }"
            >
                <div
                    class="font-bold h-fit absolute transition-all duration-300"
                    :class="
                        hovered == true
                            ? 'opacity-0 -translate-y-full'
                            : 'opacity-100 translate-y-0'
                    "
                >
                    {{ project.clientName }}
                </div>
                <div
                    class="font-bold h-fit absolute transition-all duration-300 w-full"
                    :class="
                        hovered == false
                            ? 'opacity-0 translate-y-full'
                            : 'opacity-100 translate-y-0'
                    "
                >
                    {{ getSelectedLanguageFromI18nValue(project.role) }}
                </div>
            </div>
            <div
                class="font-semibold"
                :class="{
                    'sm:w-1/2': isBigVariant,
                }"
            >
                <I18nChangeAnimation :value="project.description"/>
            </div>
        </div>
    </div>
</template>
