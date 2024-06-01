<script setup lang="ts">
import Header from './components/Header.vue';
import FeaturedWorks from './components/landingPage/feturedWorks/FeaturedWorks.vue';
import Reviews from './components/landingPage/reviews/Reviews.vue';
import Services from './components/landingPage/services/Services.vue';
import Works from './components/landingPage/works/Works.vue';
import Footer from './components/landingPage/footer/Footer.vue'

import EmailIcon from './assets/emailicon.png';
import WhatsappIcon from './assets/whatsappicon.png';

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
            <Header class="fixed w-full z-20"></Header>
            <div class="flex flex-col pl-36">
                <div class="text-7xl w-full font-semibold max-w-[1100px] mt-36">
                    <div>{{ $t('title') }}</div>
                </div>
                <div class="text-2xl mt-12">
                    <div>
                        {{ $t('underTitle.phrase1')}}
                    </div>
                    <div>
                        {{ $t('underTitle.phrase2')}}
                    </div>
                </div>

                <button class="px-8 w-fit rounded-lg mt-24 bg-secondary py-3 text-white text-xl font-semibold
                    hover:bg-blue-600 transition-colors">
                    {{ $t('knoweachotherbutton') }}
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
        <div class="px-3 shrink-0">
            <Reviews/>
        </div>
        <div class="flex flex-col px-72 my-52">
            <div class="max-w-full bg-gray-400 h-[2px] shrink-0 mb-5"/>
            <div class="uppercase text-2xl mb-16">Vuoi collaborare?</div>
            <div class="flex flex-col">
                <div class="text-6xl font-semibold">
                    Contattami
                </div>
                <div class="text-lg leading-5 mt-5">
                    Sei pronto a trasformare la tua visione digitale in realtà?<br>
                    Contattami oggi per prenotare una consulenza gratuita e discutere del tuo progetto.
                </div>
            </div>
            <div class="mt-10">
                <div class="flex">
                    <img class="h-4 mt-[5px] mr-2" :src="WhatsappIcon" alt="">
                    <div class="flex flex-col font-semibold">
                        <div class="text-lg">Whatsapp</div>
                        <div>345 9768944</div>
                    </div>
                </div>
                <div class="flex mt-6">
                    <img class="h-4 mt-[5px] mr-2" :src="EmailIcon" alt="">
                    <div class="flex flex-col font-semibold">
                        <div class="text-lg">Email</div>
                        <div>info@iacopopazzaglia.it</div>
                    </div>
                </div>
            </div>
            <button class="px-8 w-fit rounded-lg mt-20 bg-secondary py-3 text-white text-xl font-semibold
                hover:bg-blue-600 transition-colors">
                Prenota una Consulenza gratuita
            </button>
        </div>
        <Footer/>
    </div>
</template>