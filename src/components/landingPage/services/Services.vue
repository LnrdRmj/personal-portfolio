<script setup lang="ts">
import Image1 from '../../../assets/services/imageService1.png';
import Image2 from '../../../assets/services/imageService2.png';
import Image3 from '../../../assets/services/imageService3.png';
import ServiceCard from './ServiceCard.vue';
import ContactMe from '../../common/ContactMe.vue'

</script>

<template>
    <div class="flex flex-col rounded-[20px] px-16 py-[120px] bg-secondary w-full text-white">
        <div class="w-full bg-zinc-800 h-[2px] shrink-0 mb-5"/>
        <div class="uppercase font-normal text-2xl mb-[80px]">Servizi principali</div>
        <div class="flex space-x-10 w-full [&>*]:h-[700px]">
            <ServiceCard class="flex-1" 
                description="Ricerca ed Elaborazione di un Sito Web su misura per la tua attività."
                :skills="['Flussi Utente (UX)', 'Website Design (UI)', 'Figma', 'Responsive / Mobile', 'Gestione']"
                :imageSrc="Image1"/>
            <ServiceCard class="flex-1"
                description="Sviluppo di un’identità visiva conforme ai valori distintivi dell’azienda."
                :skills="['Logo', 'Palette di colori', 'Figma', 'Responsive / Mobile', 'Gestione']"
                :imageSrc="Image2"/>
            <ServiceCard class="flex-1"
                description="Ricerca ed Elaborazione di un Sito Web su misura per la tua attività."
                :skills="['Animazione 3D', 'Pubblicità', 'Immagini', 'Social Network', 'Merchandising']"
                :imageSrc="Image3"/>
        </div>
        <div class="w-full bg-zinc-800 h-[2px] shrink-0 my-16"/>
        <div class="flex flex-col items-center">
            <div>Hai una richiesta specifica?</div>
            <ContactMe/>
        </div>
    </div>
</template>