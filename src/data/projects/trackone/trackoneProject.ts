import { createI18ValueFromOne } from "@/i18n/i18n";
import { projectSkills } from "../projectSkills";

import TrackOneLoginImage from "./assets/trackone-login.png";
import TrackoneBannerImage from "./assets/trackone_project_banner.png";
import DevicesPage from "./assets/Devices page.png";
import DeviceDetailPage from "./assets/Device details.png";
import { createImageMediaUrl } from "@/components/projects/sections/common/media";
import { Project } from "../project";

export const TrackOneProject: Project = {
    id: 2,
    period: {
        startYear: 2024,
        endYear: 2025,
    },
    clientName: "Trackone",
    role: createI18ValueFromOne("Frontend developer"),
    skills: [projectSkills.web, projectSkills.vue, projectSkills.docker],
    bannerPath: TrackoneBannerImage,
    description: {
        en: "Platform for the client NGSSensors, which specializes in the sale and installation of measurement devices on logistics vehicles.",
        it: "Piattaforma per il cliente NGSSensors che si occupa della vendita e dell'installazione di alcuni dispositivi su veicoli logistici.",
    },
    sections: [
        {
            name: "single-image-with-text",
            description: {
                en: "The client required me to build the frontend for their already existing Trackone project. This was a fun little project were I tested my abilities with maps and charts but in the end the client was happy and satisfied. Trackone aims to simplify the management of all of their devices with beautiful maps and charts",
                it: "The client required me to build the frontend for their already existing Trackone project. This was a fun little project were I tested my abilities with maps and charts but in the end the client was happy and satisfied. Trackone aims to simplify the management of all of their devices with beautiful maps and charts",
            },
            media: createImageMediaUrl(TrackOneLoginImage),
            title: createI18ValueFromOne("TRACKONE"),
        },
        {
            name: "with-title",
            title: {
                en: "LOTS OF MAPS IN TRACKONE",
                it: "LOTS OF MAPS IN TRACKONE",
            },
            description: {
                en: "Maps were built with the help of Leaflet, a powerful library to display and control maps in your site. Have a look!",
                it: "Maps were built with the help of Leaflet, a powerful library to display and control maps in your site. Have a look!",
            },
            child: {
                name: "single-image",
                media: createImageMediaUrl(DevicesPage),
            },
        },
        {
            name: "single-image",
            media: createImageMediaUrl(DeviceDetailPage),
        },
    ],
};
