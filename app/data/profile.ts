import type { Localized, SocialLink } from '../../shared/types/content'

// Phone and email are deliberately absent: they live in server secrets (see docs/security).
export const profile = {
    name: 'Leonardo Ramaj',
    jobTitle: {
        it: 'Sviluppatore full-stack freelance',
        en: 'Freelance full-stack developer',
    } satisfies Localized,
    location: { city: 'Prato', region: 'PO', country: 'IT' },
    vatNumber: '02610360972',
    // TODO(leonardo): review the bio copy.
    bio: {
        it: [
            'Sono uno sviluppatore full-stack freelance con base a Prato. Progetto e realizzo web app, siti vetrina e app mobili: dal frontend in Vue e Nuxt al backend in Node.js, Laravel e Symfony.',
            'Mi piace seguire un progetto dall’idea alla messa online: analisi, sviluppo, SEO, dominio e manutenzione. Oggi aiuto anche le aziende a integrare l’intelligenza artificiale nei loro prodotti e processi.',
        ],
        en: [
            'I’m a freelance full-stack developer based in Prato, Italy. I design and build web apps, business websites and mobile apps — from Vue and Nuxt on the frontend to Node.js, Laravel and Symfony on the backend.',
            'I like owning a project from the first idea to launch: analysis, development, SEO, domains and maintenance. These days I also help companies bring AI into their products and workflows.',
        ],
    } satisfies Localized<string[]>,
    // TODO(leonardo): confirm these profile URLs.
    socials: [
        {
            id: 'github',
            label: 'GitHub',
            url: 'https://github.com/LnrdRmj',
            icon: 'simple-icons:github',
        },
        {
            id: 'linkedin',
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/leonardo-ramaj',
            icon: 'simple-icons:linkedin',
        },
        {
            id: 'instagram',
            label: 'Instagram',
            url: 'https://www.instagram.com/leonardo.ramaj',
            icon: 'simple-icons:instagram',
        },
    ] satisfies SocialLink[],
}
