<script setup lang="ts">
import { methodSteps } from '~/data/method'
import { profile } from '~/data/profile'

const { t } = useI18n()
const l = useLocalized()
const enquiryTopic = useEnquiryTopic()

const options = ['webapp', 'website', 'mobile', 'ai'] as const
const choice = ref<(typeof options)[number] | ''>('')

// Where each mark starts before it settles into the row.
const drops = [
    { x: '-35%', y: '-70%', r: '-30deg' },
    { x: '25%', y: '-110%', r: '18deg' },
    { x: '-10%', y: '-55%', r: '-50deg' },
    { x: '40%', y: '-90%', r: '35deg' },
    { x: '-25%', y: '-120%', r: '-12deg' },
]

// The marks settle once, when the row first comes into view (on phones it starts below the fold).
const marks = ref<HTMLOListElement>()
useReveal(marks)

function startEnquiry() {
    enquiryTopic.value = choice.value ? t(`hero.picker.options.${choice.value}.phrase`) : ''
    const smooth = !matchMedia('(prefers-reduced-motion: reduce)').matches
    document.getElementById('contact')?.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' })
    nextTick(() => document.getElementById('contact-message')?.focus({ preventScroll: true }))
}
</script>

<template>
    <section class="container-page pt-10 pb-20 sm:pt-14 lg:pt-16 lg:pb-28">
        <div class="grid-module gap-y-12">
            <div class="col-span-4 sm:col-span-8 lg:col-span-8 lg:row-start-1 lg:pr-6">
                <h1 class="display">{{ t('hero.title') }}</h1>
                <p class="mt-8 max-w-152 text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed">
                    {{ t('hero.lead') }}
                </p>
                <p class="mt-6 text-[0.95rem] font-semibold">
                    {{ profile.name }}
                    <span class="font-normal text-muted">· {{ l(profile.jobTitle) }} · {{ profile.location.city }}</span>
                </p>
            </div>

            <form
                class="col-span-4 bg-accent p-6 text-accent-fg sm:col-span-8 sm:p-8 lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1 lg:self-start"
                @submit.prevent="startEnquiry"
            >
                <fieldset>
                    <legend class="text-[1.75rem] leading-tight font-bold tracking-[-0.02em]">
                        {{ t('hero.picker.title') }}
                    </legend>
                    <div class="mt-6 border-t border-accent-fg/40">
                        <label
                            v-for="option in options"
                            :key="option"
                            class="group flex cursor-pointer items-center justify-between gap-4 border-b border-accent-fg/40 py-4 text-lg font-medium"
                        >
                            <input v-model="choice" type="radio" name="enquiry-topic" :value="option" class="peer sr-only" />
                            <span class="transition-transform duration-300 ease-(--ease-out-expo) motion-safe:group-hover:translate-x-1.5">{{ t(`hero.picker.options.${option}.label`) }}</span>
                            <span
                                class="radio-dot size-5 shrink-0 rounded-full border-2 border-accent-fg text-accent-fg peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent-fg"
                                aria-hidden="true"
                            />
                        </label>
                    </div>
                </fieldset>

                <button type="submit" class="group btn mt-8 w-full justify-between bg-accent-fg text-accent hover:bg-fg hover:text-bg">
                    {{ t('hero.picker.submit') }}
                    <Icon name="lucide:arrow-right" class="size-5 transition-transform duration-300 ease-(--ease-out-expo) motion-safe:group-hover:translate-x-1" />
                </button>
                <p class="mt-3 text-sm">{{ t('hero.picker.note') }}</p>
            </form>

            <!-- After the picker in the source, so phones reach the action first. -->
            <ol ref="marks" class="assemble col-span-4 grid grid-cols-5 gap-2 border-t border-fg pt-6 sm:col-span-8 sm:gap-6 lg:col-span-8 lg:row-start-2 lg:mr-6" :aria-label="t('method.steps')">
                <li
                    v-for="(step, index) in methodSteps"
                    :key="step.id"
                    class="mark-turn"
                    :style="{ '--i': index, '--from-x': drops[index]!.x, '--from-y': drops[index]!.y, '--from-r': drops[index]!.r }"
                >
                    <GeoMark :shape="step.mark" :tone="step.tone" class="size-8 sm:size-12" />
                    <span class="mt-3 block text-[0.7rem] leading-snug font-semibold hyphens-auto sm:text-sm">{{ l(step.title) }}</span>
                </li>
            </ol>
        </div>
    </section>
</template>
