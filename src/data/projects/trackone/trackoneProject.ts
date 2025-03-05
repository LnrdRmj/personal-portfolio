import { createI18ValueFromOne } from "@/i18n/i18n";
import { projectSkills } from "../projectSkills";

import {
    createImageMediaUrl,
    createVideoMediaUrl,
} from "@/components/projects/sections/common/media";
import { Project } from "../project";
import DevicesPageVideo from "./assets/Devices Video.mp4";
import DeviceDetailPageVideo from "./assets/Device Detail Video.mp4";
import MapModesVideo from "./assets/Map Modes.mp4";
import TrackOneLoginImage from "./assets/trackone-login.png";
import TrackoneBannerImage from "./assets/trackone_project_banner.png";

export const TrackOneProject: Project = {
    id: 2,
    period: {
        startYear: 2024,
        endYear: 2025,
    },
    clientName: "Trackone",
    role: createI18ValueFromOne("Frontend Developer"),
    skills: [projectSkills.web, projectSkills.vue, projectSkills.docker],
    bannerPath: TrackoneBannerImage,
    description: {
        en: "A platform developed for NGSSensors, a company specializing in the sale and installation of measurement devices for logistics vehicles.",
        it: "Una piattaforma sviluppata per NGSSensors, un'azienda specializzata nella vendita e installazione di dispositivi di misurazione per veicoli logistici.",
    },
    sections: [
        {
            name: "single-image-with-text",
            description: {
                en: "I was tasked with developing the frontend for the existing Trackone project. This was an exciting challenge that allowed me to refine my skills in working with maps and charts. In the end, the client was extremely satisfied. Trackone simplifies the management of their devices by providing visually rich maps and insightful charts.",
                it: "Mi è stato affidato lo sviluppo del frontend per il progetto Trackone esistente. È stata una sfida stimolante che mi ha permesso di affinare le mie competenze nella gestione di mappe e grafici. Alla fine, il cliente è rimasto molto soddisfatto. Trackone semplifica la gestione dei loro dispositivi attraverso mappe visivamente ricche e grafici informativi.",
            },
            media: createImageMediaUrl(TrackOneLoginImage),
            title: createI18ValueFromOne("TRACKONE"),
        },
        {
            name: "with-title",
            title: {
                en: "EXTENSIVE MAP USAGE IN TRACKONE",
                it: "USO ESTENSIVO DELLE MAPPE IN TRACKONE",
            },
            description: {
                en: "Trackone integrates maps using Leaflet, a powerful library for displaying and interacting with geographic data. Check it out!",
                it: "Trackone integra mappe utilizzando Leaflet, una potente libreria per visualizzare e interagire con dati geografici. Dai un'occhiata!",
            },
            child: {
                name: "single-image",
                media: createVideoMediaUrl(DevicesPageVideo),
            },
        },
        {
            name: "with-title",
            title: {
                en: "FEATURES",
                it: "FUNZIONALITÀ",
            },
            description: {
                en:
                    "The client requested an interactive map to analyze device behavior and measurements over time. The map is packed with features, including:<br>" +
                    "<li>Tracking the device’s historical locations</li>" +
                    "<li>Reviewing every message sent by the device</li>" +
                    "<li>Displaying charts that visualize measurement data over time</li>" +
                    "<li>Adjusting the observed time period</li>",
                it:
                    "Il cliente ha richiesto una mappa interattiva per analizzare il comportamento del dispositivo e le misurazioni nel tempo. La mappa offre numerose funzionalità, tra cui:<br>" +
                    "<li>Monitorare gli spostamenti storici del dispositivo</li>" +
                    "<li>Visualizzare ogni messaggio inviato dal dispositivo</li>" +
                    "<li>Mostrare grafici con l'andamento delle misurazioni nel tempo</li>" +
                    "<li>Modificare il periodo di osservazione</li>",
            },
            child: {
                name: "single-image",
                media: createVideoMediaUrl(DeviceDetailPageVideo),
            },
        },
        {
            name: "with-title",
            title: {
                en: "ADDITIONAL FEATURES",
                it: "FUNZIONALITÀ AGGIUNTIVE",
            },
            description: {
                en:
                    'Trackone also includes "Map Modes," allowing users to customize how data points are displayed on the map. Below are some examples:<br>' +
                    "<li>Viewing satellite coverage at each location</li>" +
                    "<li>Visualizing device speed with color-coded markers</li>" +
                    "<li>Displaying temperature readings</li>" +
                    "<li>Indicating the device’s orientation</li>",
                it:
                    'Trackone include anche le "Modalità Mappa" che permettono agli utenti di personalizzare la visualizzazione dei dati sulla mappa. Ecco alcuni esempi:<br>' +
                    "<li>Visualizzazione della copertura satellitare per ogni posizione</li>" +
                    "<li>Rappresentazione della velocità del dispositivo con indicatori colorati</li>" +
                    "<li>Visualizzazione delle temperature rilevate</li>" +
                    "<li>Indicazione dell'orientamento del dispositivo</li>",
            },
            child: {
                name: "single-image",
                media: createVideoMediaUrl(MapModesVideo),
            },
        },
    ],
};
