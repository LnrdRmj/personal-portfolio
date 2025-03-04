import { createI18ValueFromOne } from "@/i18n/i18n";
import { projectSkills } from "../projectSkills";

import TrackOneLoginImage from "./assets/trackone-login.png";
import TrackoneBannerImage from "./assets/trackone_project_banner.png";
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
            name: "single-image",
            media: createImageMediaUrl(TrackOneLoginImage),
        },
        {
            name: "with-title",
            description: {
                en: "Some more description about this double images",
                it: "Una descrizione",
            },
            title: {
                en: "Some description in English",
                it: "Una descrizione in italiano",
            },
            child: {
                name: "double-image-with-text",
                title: {
                    en: "Some description in English",
                    it: "Una descrizione in italiano",
                },
                description: {
                    en: "Some more description about this double images",
                    it: "Una descrizione",
                },
                medias: [
                    {
                        type: "image",
                        url: "https://wallpapercat.com/w/full/9/9/7/2112823-3840x2160-desktop-4k-minimalist-wallpaper-image.jpg",
                    },
                    {
                        type: "image",
                        url: "https://wallpapercat.com/w/full/9/9/7/2112823-3840x2160-desktop-4k-minimalist-wallpaper-image.jpg",
                    },
                ],
            },
        },
    ],
};
