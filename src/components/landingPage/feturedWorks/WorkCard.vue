<script setup lang="ts">
import { computed } from 'vue';


type Variant = "big" | "small"

const props = withDefaults(defineProps<{
    variant: Variant,
    imageSrc: string
}>(), {
    variant: 'small'
})

const isBigVariant = computed(() => props.variant == 'big')

</script>

<template>
    <div class="flex flex-col">
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
            <div class="font-bold">YOOMY</div>
            <div class="font-semibold" 
                :class="{
                    'w-1/2': isBigVariant
                }">
                Progetto Start-up di un'Applicazione, Studio di una Brand Identity adeguata al Target e Realizzazione di Materiale Pubblicitario e Social.
            </div>
        </div>
    </div>
</template>