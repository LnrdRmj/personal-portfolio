import type { Project } from '../../../shared/types/content'

export const yoomy: Project = {
    slug: 'yoomy',
    client: 'Yoomy',
    period: { start: 2020 },
    role: { it: 'Sviluppatore full-stack', en: 'Full-stack developer' },
    summary: {
        it: 'Sviluppo full-stack di Yoomy, l’app per ordinare e pagare la merenda a scuola, disponibile su App Store e Play Store.',
        en: 'Full-stack development of Yoomy, the app for ordering and paying for school snacks, available on the App Store and Play Store.',
    },
    stack: ['vue', 'capacitor', 'nodejs', 'jest'],
    banner: {
        type: 'image',
        src: 'projects/yoomy/banner',
        alt: { it: 'Banner del progetto Yoomy', en: 'Yoomy project banner' },
        width: 3840,
        height: 1440,
    },
    sections: [
        {
            kind: 'media',
            media: {
                type: 'image',
                src: 'projects/yoomy/overview',
                alt: {
                    it: 'Il logo Yoomy con la sua griglia di costruzione',
                    en: 'The Yoomy logo with its construction grid',
                },
                width: 1880,
                height: 800,
            },
        },
        {
            kind: 'media-with-text',
            textPosition: 'left',
            title: {
                it: 'Yoomy, una soluzione innovativa per le scuole',
                en: 'Yoomy, an innovative solution for schools',
            },
            text: {
                paragraphs: {
                    it: [
                        'Yoomy nasce nel 2021 con l’obiettivo di rivoluzionare l’acquisto della merenda all’interno delle scuole, fornendo una soluzione semplice, veloce e controllata per studenti e fornitori.',
                        'L’app affronta problemi concreti: molte scuole non hanno un bar fisico e altre offrono la vendita delle merende solo durante la ricreazione, con sovraffollamento, prodotti che finiscono subito e pagamenti esclusivamente in contanti.',
                    ],
                    en: [
                        'Yoomy was founded in 2021 to change the way students buy snacks at school, with a simple, fast and controlled solution for both students and suppliers.',
                        'The app solves real problems: many schools have no cafeteria, while others only sell snacks during recess, which means crowds, products running out quickly and cash-only payments.',
                    ],
                },
            },
            media: {
                type: 'image',
                src: 'projects/yoomy/intro',
                alt: {
                    it: 'Smartphone con la home dell’app Yoomy e le merende disponibili',
                    en: 'Smartphone showing the Yoomy app home screen with available snacks',
                },
                width: 1600,
                height: 1600,
            },
        },
        {
            kind: 'media-with-text',
            textPosition: 'right',
            title: { it: 'Cosa ho fatto', en: 'What I did' },
            text: {
                paragraphs: {
                    it: [
                        'Ho sviluppato sia il frontend che il backend della piattaforma: oggi l’app Yoomy è disponibile su App Store e Play Store.',
                        'Le tecnologie utilizzate includono Vue 3, Capacitor e Node.js. La piattaforma è testata con il framework Jest.',
                    ],
                    en: [
                        'I built both the frontend and the backend of the platform, and the Yoomy app is now available on the App Store and Play Store.',
                        'The stack includes Vue 3, Capacitor and Node.js, and the platform is tested with the Jest framework.',
                    ],
                },
            },
            media: {
                type: 'image',
                src: 'projects/yoomy/app',
                alt: {
                    it: 'Distributore Yoomy di ricariche da 5, 10 e 20 euro',
                    en: 'Yoomy vending machine for 5, 10 and 20 euro top-up cards',
                },
                width: 800,
                height: 980,
            },
        },
        {
            kind: 'titled',
            title: { it: 'I risultati', en: 'The results' },
            text: {
                paragraphs: {
                    it: [
                        'Yoomy è utilizzata in diverse scuole di Firenze e conta oltre 1000 utenti registrati. L’app continua a crescere, con nuove scuole e nuove funzionalità in arrivo.',
                    ],
                    en: [
                        'Yoomy is used in several schools in Florence and has well over 1,000 registered users. The app keeps growing, with new schools and new features on the way.',
                    ],
                },
            },
            child: {
                kind: 'media',
                media: {
                    type: 'image',
                    src: 'projects/yoomy/store-performance',
                    alt: {
                        it: 'Statistiche dell’App Store: 880 download totali e crescita degli utenti fino a giugno 2025',
                        en: 'App Store statistics: 880 total downloads and user growth up to June 2025',
                    },
                    width: 1920,
                    height: 1080,
                },
            },
        },
    ],
}
