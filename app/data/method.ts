import type { MethodStep } from '../../shared/types/content'

// TODO(leonardo): review this copy; it restates the bio's "from idea to launch" in five steps.
// ­ is a soft hyphen: long titles may break there on narrow phones.
export const methodSteps: MethodStep[] = [
    {
        id: 'analysis',
        mark: 'circle',
        tone: 'blue',
        title: { it: 'Analisi', en: 'Analysis' },
        body: {
            it: 'Capisco obiettivi, utenti e vincoli del progetto prima di scrivere una riga di codice.',
            en: 'I get clear on the goals, the users and the constraints before writing a line of code.',
        },
    },
    {
        id: 'design',
        mark: 'square',
        tone: 'yellow',
        title: { it: 'Proget­tazione', en: 'Planning' },
        body: {
            it: 'Scelgo architettura e tecnologie in base al progetto e a chi dovrà mantenerlo.',
            en: 'I pick the architecture and the stack for the project and for whoever maintains it next.',
        },
    },
    {
        id: 'build',
        mark: 'half',
        tone: 'red',
        title: { it: 'Sviluppo', en: 'Build' },
        body: {
            it: 'Frontend, backend e app mobili: Vue, Nuxt, Node.js, Laravel, Symfony e Capacitor.',
            en: 'Frontend, backend and mobile apps: Vue, Nuxt, Node.js, Laravel, Symfony and Capacitor.',
        },
    },
    {
        id: 'launch',
        mark: 'triangle',
        tone: 'ink',
        title: { it: 'SEO e messa online', en: 'SEO and launch' },
        body: {
            it: 'Dominio, DNS, indicizzazione e Search Console: il sito nasce per farsi trovare su Google.',
            en: 'Domain, DNS, indexing and Search Console: the site is built to be found on Google.',
        },
    },
    {
        id: 'care',
        mark: 'bar',
        tone: 'blue',
        title: { it: 'Manuten­zione', en: 'Mainte­nance' },
        body: {
            it: 'Dopo il lancio resto il tuo riferimento per aggiornamenti, correzioni e nuove funzioni.',
            en: 'After launch I stay your point of contact for updates, fixes and new features.',
        },
    },
]
