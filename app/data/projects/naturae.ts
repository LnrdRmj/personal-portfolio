import type { Project } from '../../../shared/types/content'

export const naturae: Project = {
    slug: 'naturae',
    client: 'Naturae',
    period: { start: 2024, end: 2025 },
    role: { it: 'Sviluppatore frontend', en: 'Frontend developer' },
    summary: {
        it: 'Sito vetrina in Nuxt per Naturae, azienda di parquet di Firenze: SEO, design responsive, gestione del dominio e pannello contenuti.',
        en: 'A Nuxt business website for Naturae, a parquet company in Florence: SEO, responsive design, domain management and a content panel.',
    },
    stack: ['nuxt', 'vue', 'search-console'],
    banner: {
        type: 'image',
        src: 'projects/naturae/banner',
        alt: { it: 'Logo Naturae', en: 'Naturae logo' },
        width: 1920,
        height: 1080,
    },
    sections: [
        {
            kind: 'titled',
            title: {
                it: 'Il sito di presentazione di Naturae, a Firenze',
                en: 'The presentation website of Naturae, in Florence',
            },
            text: {
                paragraphs: {
                    it: [
                        'Il progetto consiste nella realizzazione del sito di presentazione di Naturae, azienda di riferimento nel settore del parquet a Firenze.',
                        'Il sito cura il SEO, è responsive, include la gestione del dominio e del DNS e un pannello per gestire i contenuti.',
                    ],
                    en: [
                        'The project was the presentation website for Naturae, a leading parquet company in Florence.',
                        'The site is SEO-optimised and responsive, and the work included domain and DNS management plus a panel for managing content.',
                    ],
                },
            },
        },
        {
            kind: 'media-with-text',
            title: { it: 'SEO', en: 'SEO' },
            text: {
                paragraphs: {
                    it: [
                        'Il cliente voleva una buona visibilità sui principali motori di ricerca, con particolare attenzione alla qualità del SEO.',
                        'Per questo ho scelto Nuxt, una tecnologia che tra i suoi vantaggi offre un’ottima gestione dell’ottimizzazione per i motori di ricerca.',
                        'Per garantire una corretta indicizzazione non basta la tecnologia: ho usato anche Google Search Console, lo strumento di Google che permette di richiedere direttamente l’indicizzazione del sito.',
                    ],
                    en: [
                        'The client wanted strong visibility on the main search engines, with particular attention to SEO quality.',
                        'That’s why I chose Nuxt, a framework whose strengths include excellent search engine optimisation.',
                        'Technology alone doesn’t guarantee proper indexing, so I also used Google Search Console, Google’s tool for requesting a site’s indexing directly.',
                    ],
                },
            },
            media: {
                type: 'image',
                src: 'projects/naturae/nuxt-search-console',
                alt: { it: 'Loghi di Nuxt e Google', en: 'Nuxt and Google logos' },
                width: 1920,
                height: 1080,
            },
        },
        {
            kind: 'titled',
            title: { it: 'Gestione del dominio', en: 'Domain management' },
            text: {
                paragraphs: {
                    it: [
                        'Oltre al sito mi è stata affidata la gestione del dominio: il cliente ne aveva già uno e io l’ho collegato al nuovo sito.',
                    ],
                    en: [
                        'Besides building the site, I also managed the domain: the client already owned one, and I connected it to the new website.',
                    ],
                },
            },
            child: {
                kind: 'media-with-text',
                textPosition: 'right',
                title: { it: 'Design responsive', en: 'Responsive design' },
                text: {
                    paragraphs: {
                        it: [
                            'Come la maggior parte dei miei progetti, il sito è completamente responsive: si adatta a ogni schermo, da telefoni a tablet e computer.',
                        ],
                        en: [
                            'Like most of my projects, the site is fully responsive: it adapts to every screen, from phones to tablets and desktops.',
                        ],
                    },
                },
                media: {
                    type: 'video',
                    src: '/v/naturae/responsive.mp4',
                    poster: '/media/naturae/responsive.webp',
                    alt: {
                        it: 'Il sito Naturae che si adatta a schermi di dimensioni diverse',
                        en: 'The Naturae website adapting to different screen sizes',
                    },
                    width: 1600,
                    height: 860,
                },
            },
        },
    ],
}
