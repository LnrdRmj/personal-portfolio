import type { Media, Project } from '../../../shared/types/content'

function video(name: string, alt: Media['alt']): Media {
    return {
        type: 'video',
        src: `/v/trackone/${name}.mp4`,
        poster: `/media/trackone/${name}.webp`,
        alt,
        width: 1600,
        height: 786,
    }
}

export const trackone: Project = {
    slug: 'trackone',
    client: 'Trackone',
    period: { start: 2024, end: 2025 },
    role: { it: 'Sviluppatore frontend', en: 'Frontend developer' },
    summary: {
        it: 'Il frontend di Trackone, la piattaforma IoT di NGSSensors per monitorare i dispositivi installati sui veicoli logistici con mappe e grafici.',
        en: 'The frontend of Trackone, NGSSensors’ IoT platform for monitoring devices installed on logistics vehicles through maps and charts.',
    },
    stack: ['vue', 'leaflet', 'docker'],
    banner: {
        type: 'image',
        src: 'projects/trackone/banner',
        alt: { it: 'Logo Trackone, IoT per la logistica', en: 'Trackone logo, IoT for logistics' },
        width: 1800,
        height: 675,
    },
    sections: [
        {
            kind: 'media-with-text',
            title: { it: 'Trackone', en: 'Trackone' },
            text: {
                paragraphs: {
                    it: [
                        'Trackone è una piattaforma sviluppata per NGSSensors, azienda specializzata nella vendita e installazione di dispositivi di misurazione per veicoli logistici.',
                        'Mi è stato affidato lo sviluppo del frontend del progetto esistente: una sfida stimolante che mi ha permesso di affinare le mie competenze su mappe e grafici. Il risultato semplifica la gestione dei dispositivi con mappe ricche e grafici chiari, e il cliente ne è rimasto molto soddisfatto.',
                    ],
                    en: [
                        'Trackone is a platform built for NGSSensors, a company that sells and installs measurement devices for logistics vehicles.',
                        'I was hired to develop the frontend of the existing project: an exciting challenge that sharpened my skills with maps and charts. The result makes device management easier through rich maps and clear charts, and the client was extremely satisfied.',
                    ],
                },
            },
            media: {
                type: 'image',
                src: 'projects/trackone/login',
                alt: {
                    it: 'Pagina di login di Trackone su sfondo portuale',
                    en: 'Trackone login page over a harbour background',
                },
                width: 1920,
                height: 949,
            },
        },
        {
            kind: 'titled',
            title: { it: 'Uso estensivo delle mappe', en: 'Extensive use of maps' },
            text: {
                paragraphs: {
                    it: [
                        'Trackone integra le mappe con Leaflet, una libreria potente per visualizzare e interagire con dati geografici.',
                    ],
                    en: [
                        'Trackone integrates maps with Leaflet, a powerful library for displaying and interacting with geographic data.',
                    ],
                },
            },
            child: {
                kind: 'media',
                media: video('devices', {
                    it: 'Registrazione della pagina dispositivi di Trackone con la mappa',
                    en: 'Screen recording of the Trackone devices page with its map',
                }),
            },
        },
        {
            kind: 'titled',
            title: { it: 'Funzionalità', en: 'Features' },
            text: {
                paragraphs: {
                    it: [
                        'Il cliente ha richiesto una mappa interattiva per analizzare il comportamento dei dispositivi e le misurazioni nel tempo. Tra le funzionalità:',
                    ],
                    en: [
                        'The client asked for an interactive map to analyse device behaviour and measurements over time. Its features include:',
                    ],
                },
                bullets: {
                    it: [
                        'monitorare gli spostamenti storici del dispositivo',
                        'consultare ogni messaggio inviato dal dispositivo',
                        'grafici con l’andamento delle misurazioni nel tempo',
                        'modificare il periodo di osservazione',
                    ],
                    en: [
                        'tracking the device’s historical locations',
                        'reviewing every message the device sent',
                        'charts of measurement data over time',
                        'changing the observed time period',
                    ],
                },
            },
            child: {
                kind: 'media',
                media: video('device-details', {
                    it: 'Registrazione del dettaglio di un dispositivo con mappa e grafici',
                    en: 'Screen recording of a device detail page with map and charts',
                }),
            },
        },
        {
            kind: 'titled',
            title: { it: 'Modalità mappa', en: 'Map modes' },
            text: {
                paragraphs: {
                    it: [
                        'Le “Modalità mappa” permettono di personalizzare come vengono mostrati i punti sulla mappa, ad esempio:',
                    ],
                    en: [
                        '“Map modes” let users customise how data points are displayed on the map, for example:',
                    ],
                },
                bullets: {
                    it: [
                        'la copertura satellitare in ogni posizione',
                        'la velocità del dispositivo con indicatori colorati',
                        'le temperature rilevate',
                        'l’orientamento del dispositivo',
                    ],
                    en: [
                        'satellite coverage at each location',
                        'device speed with colour-coded markers',
                        'temperature readings',
                        'the device’s orientation',
                    ],
                },
            },
            child: {
                kind: 'media',
                media: video('map-modes', {
                    it: 'Registrazione delle diverse modalità mappa di Trackone',
                    en: 'Screen recording of Trackone’s different map modes',
                }),
            },
        },
    ],
}
