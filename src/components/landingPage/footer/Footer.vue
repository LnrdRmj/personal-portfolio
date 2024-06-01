<script setup lang="ts">
import ContactMe from '../../common/ContactMe.vue';

</script>

<template>
    <footer class="px-16 py-16 pb-32 text-white bg-secondary flex flex-col">
        <div class="max-w-full bg-zinc-800 h-[2px] shrink-0 mb-5"/>
        <div class="flex justify-between">
            <div> LOGO </div>
            <ContactMe/>
        </div>
        <div class="flex text-sm mt-16 space-x-32">
            <div class="flex flex-col">
                <div class="text-zinc-300 mb-2"> Social </div>
                <div> Linkedin </div>
                <div> Instagram </div>
            </div>
            <div class="flex flex-col">
                <div class="text-zinc-300 mb-2"> {{ $t('footerSection.writeMe') }} </div>
                <div> info@nocodejack.it </div>
                <div> +39 3459768944 </div>
            </div>
            <div class="flex flex-col">
                <div class="text-zinc-300 mb-2"> Dati Fiscali </div>
                <div> P.IVA - 07345890482 </div>
                <div> Sesto Fiorentino (FI), 50019 </div>
                <div> Via Beccaria 19 </div>
            </div>
        </div>
    </footer>
</template>