import { createI18ValueFromOne } from "@/i18n/i18n";
import { Project } from "../project";
import { projectSkills } from "../projectSkills";

import NaturaeBanner from "./assets/NaturaeProjectBanner.png";
import NuxtAndGoogle from "./assets/nuxt and google image.png";
import ResponsiveNaturae from "./assets/Responsive Naturae.mp4";

export const NaturaeProject: Project = {
    id: 123478901234789,
    period: {
        startYear: 2024,
        endYear: 2025,
    },
    clientName: "Naturae",
    role: createI18ValueFromOne("Frontend Developer"),
    skills: [projectSkills.web, projectSkills.vue, projectSkills.nuxt],
    bannerPath: NaturaeBanner,
    description: {
        en: "Landing page for the Naturae team",
        it: "Landing page per il team Naturae",
    },
    sections: [
        {
            name: "with-title",
            child: {
                name: "single-image",
                media: {
                    type: "image",
                    url: NaturaeBanner,
                },
            },
            title: {
                en: "Presentation site for the company Naturae based in Florence",
                it: "Sito di presentazione per l'azienda Naturae con sede a Firenze",
            },
            description: {
                it: `Il progetto consiste nella realizzazione del sito presentazione per conto di Naturae, azienda leader nel settore del parquet a Firenze.
                    Il sito ha varie peculiarità come: cura del SEO, responsive, gestione del dominio e del DNS e un pannello per la gestione dei contenuti`,
                en: `The project consists of creating a presentation website on behalf of Naturae, a leading company in the parquet sector in Florence.
                    It has various features such as: SEO optimization, responsive design, domain and DNS managament and a panel for content management.`,
            },
        },
        {
            name: "single-image-with-text",
            title: createI18ValueFromOne("SEO"),
            description: {
                it: `Il cliente aveva espresso una forte esigenza di ottenere una buona visibilità sui principali motori di ricerca, con particolare attenzione alla qualità del SEO.
Per soddisfare questa richiesta, ho deciso di adottare Nuxt, una tecnologia per costruire siti che offre, tra i suoi vantaggi, un’ottima gestione dell’ottimizzazione per i motori di ricerca.
Tuttavia, per garantire una corretta indicizzazione non è sufficiente affidarsi solo a questo tipo di soluzione, perciò ho utilizzato anche Google Search Console, uno strumento fornito da Google che permette di richiedere direttamente l’indicizzazione del sito.`,
                en: ``,
            },
            media: {
                type: "image",
                url: NuxtAndGoogle,
            },
        },
        {
            name: "with-title",
            title: {
                en: "DOMAIN MANAGEMENT",
                it: "GESTIONE DEL DOMINIO",
            },
            description: {
                it: `Oltre alla creazione del sito mi è stata affidata anche la gestione del dominio. Il cliente aveva già un dominio suo, io ho provveduto a collegare il dominio col nuovo sito.`,
                en: ``,
            },
            child: {
                name: "single-image-with-text",
                title: createI18ValueFromOne("RESPONSIVE DESIGN"),
                description: {
                    it: `Il sito, come la maggior parte dei miei progetti, è stato reso copletamente responsive. Questo vuol dire che il sito si adatta per tutte le tipologie di schermo: da telefoni, a tablet e computer. Fruibili ovunque insomma.`,
                    en: ``,
                },
                media: {
                    type: "video",
                    url: ResponsiveNaturae,
                },
            },
        },
    ],
};
