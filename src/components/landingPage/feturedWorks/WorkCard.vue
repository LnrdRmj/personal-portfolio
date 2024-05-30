<script setup lang="ts">
import { computed, ref } from 'vue';


type Variant = "big" | "small"

const props = withDefaults(defineProps<{
    variant: Variant,
    imageSrc: string
}>(), {
    variant: 'small'
})

const isBigVariant = computed(() => props.variant == 'big')
const hovered = ref(false)

</script>

<template>
    <div class="flex flex-col" @mouseover="hovered = true" @mouseleave="hovered = false">
        <div class="size-full overflow-hidden transition-[border-radius] duration-700 rounded-[20px] hover:rounded-[40px]">
            <img :src="imageSrc" 
                class="object-cover size-full
                    transition-transform duration-700 hover:scale-110">
        </div>
        <div class="w-full bg-slate-300 h-[2px] shrink-0 mt-3 mb-1"/>
        <div class="flex justify-between"
            :class="{
                'justify-between': isBigVariant,
                'flex-col': !isBigVariant,
            }">
            <div class="relative bg-red-600">
                <div class="font-bold h-fit absolute transition-all duration-300" :class="hovered == true ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'">
                    YOOMY
                </div>
                <div class="font-bold h-fit absolute transition-all duration-300 w-32" :class="hovered == false ? 'opacity-0 translate-y-full' : 'opacity-100 translate-y-0'">
                    non yoomy
                </div>
            </div>
            <div class="font-semibold" 
                :class="{
                    'w-1/2': isBigVariant
                }">
                Progetto Start-up di un'Applicazione, Studio di una Brand Identity adeguata al Target e Realizzazione di Materiale Pubblicitario e Social.
            </div>
        </div>
    </div>
</template>