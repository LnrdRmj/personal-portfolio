<script setup lang="ts">
import Header from './components/Header.vue';
import FeaturedWorks from './components/landingPage/feturedWorks/FeaturedWorks.vue';
import Services from './components/landingPage/services/Services.vue';
import Works from './components/landingPage/works/Works.vue'

const works = [
    {
        period: '2021 - present',
        clientName: 'Yoomy',
        role: 'Co-Owner / Creative Director',
        skills: [
            { name: 'APP', color: '#A7FF7D' },
            { name: 'BRAND', color: '#79F7FF' },
            { name: '3D', color: '#FFA665' }
        ]
    },
    {
        period: '2022 - present',
        clientName: 'Voricel',
        role: 'Web Designer',
        skills: [
            { name: 'WEB', color: '#EAFF6A' },
            { name: 'BRAND', color: '#79F7FF' },
            { name: 'ADS', color: '#FF72E0' }
        ]
    },
    {
        period: '2022 - present',
        clientName: 'Naturae Firenze',
        role: 'Graphic Designer',
        skills: [
            { name: 'VISUAL', color: '#FF6A6A' },
            { name: 'SOCIAL', color: '#CE90FF' }
        ]
    },
    {
        period: '2023 - present',
        clientName: 'Softkeys',
        role: 'Graphic Designer',
        skills: [
            { name: 'ADS', color: '#FF72E0' }
        ]
    },
    {
        period: '2023 - 2024',
        clientName: 'i\'Re',
        role: 'Visual Designer',
        skills: [
            { name: 'VISUAL', color: '#FF6A6A' },
            { name: 'BRAND', color: '#79F7FF' }
        ]
    }
];

</script>

<template>
    <div class="flex flex-col w-full h-full overflow-y-scroll bg-primary">
        <div class="flex flex-col h-screen w-full shrink-0">
            <Header class="fixed w-full z-10"></Header>
            <div class="flex flex-col pl-36">
                <div class="text-7xl w-full font-semibold max-w-[1100px] mt-36">
                    <div>Ciao, mi chiamo <br> Iacopo Pazzaglia e sono un Creative Director e <br> Web Designer</div>
                </div>
                <div class="text-2xl mt-12">
                    <div>
                        Pronto a trasformare la tua visione digitale in realtà?
                    </div>
                    <div>
                        Contattami oggi per prenotare una consulenza gratuita e discutere del tuo progetto.
                    </div>
                </div>

                <button class="px-8 w-fit rounded-lg mt-24 bg-secondary py-3 text-white text-xl font-semibold">
                    Conosciamoci!
                </button>

            </div>
        </div>
        <div class="w-full shrink-0 px-20">
            <div class="w-full bg-slate-400 h-[2px] shrink-0 mb-5"/>
            <FeaturedWorks/>
        </div>
        <div class="shrink-0 px-3 mt-64 mb-72">
            <Services/>
        </div>
        <div class="max-w-full bg-gray-400 h-[2px] shrink-0 mb-5 mx-20"/>
        <Works :works="works" class="pb-24 max-w-full mx-20"/>
    </div>
</template>