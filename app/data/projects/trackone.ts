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
    cover: video('device-details', {
        it: 'Registrazione del dettaglio di un dispositivo Trackone con mappa e grafici',
        en: 'Screen recording of a Trackone device page with its map and charts',
    }),
    // TODO(leonardo): review the rewritten intro and maps copy (the "client was very satisfied" line was cut).
    sections: [
        {
            kind: 'media-with-text',
            title: { it: 'Trackone', en: 'Trackone' },
            text: {
                paragraphs: {
                    it: [
                        'Trackone è una piattaforma sviluppata per NGSSensors, azienda specializzata nella vendita e installazione di dispositivi di misurazione per veicoli logistici.',
                        'Ho sviluppato il frontend della piattaforma esistente: le mappe interattive dei dispositivi, i grafici delle misurazioni nel tempo e le schermate per gestire ogni dispositivo.',
                    ],
                    en: [
                        'Trackone is a platform built for NGSSensors, a company that sells and installs measurement devices for logistics vehicles.',
                        'I built the frontend of the existing platform: the interactive device maps, the charts of measurements over time and the screens for managing each device.',
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
                        'Trackone integra le mappe con Leaflet, la libreria open source per le mappe interattive.',
                    ],
                    en: [
                        'Trackone integrates maps with Leaflet, the open-source library for interactive maps.',
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
