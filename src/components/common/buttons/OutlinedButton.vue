<template>
    <button
        class="rounded-full border flex space-x-2 items-center py-2 px-4 group transition-colors border-secondary hover:bg-secondary hover:border-primary w-fit">
        <div class="group-hover:text-white leading-none mb-[2px]">
            <slot />
        </div>
        <div v-if="$slots.icon">
            <slot name="icon" />
        </div>
    </button>
</template>