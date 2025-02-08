<script setup lang="ts">
import ContactMe from "../../common/ContactMe.vue";
</script>

<template>
    <footer class="px-16 py-16 pb-32 text-white bg-secondary flex flex-col">
        <div class="max-w-full bg-zinc-800 h-[2px] shrink-0 mb-5" />
        <div class="flex justify-between">
            <div>LOGO</div>
            <ContactMe />
        </div>
        <div class="flex flex-col space-x-0 space-y-10 md:flex-row md:space-x-32 md:space-y-0 text-sm mt-16">
            <div class="flex flex-col">
                <div class="text-zinc-300 mb-2">Social</div>
                <div>Linkedin</div>
                <div>Instagram</div>
            </div>
            <div class="flex flex-col">
                <div class="text-zinc-300 mb-2"> {{ $t('footerSection.writeMe') }} </div>
                <div> iacopo2001p@gmail.com </div>
                <div> +39 345 976 8944 </div>
            </div>
            <!-- For when I'll actually have a P.Iva -->
            <!-- <div class="flex flex-col">
                <div class="text-zinc-300 mb-2"> Dati Fiscali </div>
                <div> P.IVA - 07345890482 </div>
                <div> Sesto Fiorentino (FI), 50019 </div>
                <div> Via Beccaria 19 </div>
            </div> -->
        </div>
    </footer>
</template>
