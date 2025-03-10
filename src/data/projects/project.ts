import { createImageMediaUrl } from "@/components/projects/sections/common/media";
import { ProjectSection } from "@/services/project/project";
import { I18nValue, createI18ValueFromOne } from "../../i18n/i18n";
import TrackOneLoginImage from "./assets/trackone-login.png";
import YoomyBannerProject from "./assets/yoomyBannerProject.png";
import { Skill, projectSkills } from "./projectSkills";
import { SampleProject } from "./yoomy/sampleProject";
import { YoomyProject } from "./yoomy/yoomyProject";
import { t } from "i18next";

export interface Project {
    id: number;
    period: {
        startYear: number;
        endYear?: number;
    };
    clientName: string;
    role: I18nValue;
    skills: Skill[];
    bannerPath: string;
    description: I18nValue;
    sections: ProjectSection[];
}

export function getProjectPeriodString(period: Project["period"]) {
    return `${period.startYear} - ${period.endYear ?? t("worksSection.table.toNow")}`;
}

export function getWorks(): Project[] {
    return [
        YoomyProject,
        SampleProject,
        {
            id: 2,
            period: {
                startYear: 2022,
            },
            clientName: "Trackone",
            role: createI18ValueFromOne("Frontend developer"),
            skills: [projectSkills.web, projectSkills.vue, projectSkills.app],
            bannerPath: YoomyBannerProject,
            description: {
                en: "Platform for the client NGSSensors, which specializes in the sale and installation of certain devices on logistics vehicles.",
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
        },
        {
            id: 3,
            period: {
                startYear: 2024,
            },
            clientName: "NGSensors",
            role: createI18ValueFromOne("Web developer"),
            skills: [projectSkills.web, projectSkills.react],
            bannerPath: YoomyBannerProject,
            description: {
                en: "Start-up Project for an Application, Development of a Brand Identity suitable for the Target Audience, and Creation of Advertising and Social Media Materials.",
                it: "Progetto Start-up di un'Applicazione, Studio di una Brand Identity adeguata al Target e Realizzazione di Materiale Pubblicitario e Social.",
            },
            sections: [
                {
                    name: "single-image",
                    media: {
                        type: "image",
                        url: "https://wallpapercat.com/w/full/9/9/7/2112823-3840x2160-desktop-4k-minimalist-wallpaper-image.jpg",
                    },
                },
                {
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
            ],
        },
        {
            id: 4,
            period: {
                startYear: 2024,
            },
            clientName: "Paust Auction",
            role: createI18ValueFromOne("Web developer"),
            skills: [projectSkills.vue, projectSkills.web],
            bannerPath: YoomyBannerProject,
            description: {
                en: "Start-up Project for an Application, Development of a Brand Identity suitable for the Target Audience, and Creation of Advertising and Social Media Materials.",
                it: "Progetto Start-up di un'Applicazione, Studio di una Brand Identity adeguata al Target e Realizzazione di Materiale Pubblicitario e Social.",
            },
            sections: [
                {
                    name: "single-image",
                    media: {
                        type: "video",
                        url: "https://wallpapercat.com/w/full/9/9/7/2112823-3840x2160-desktop-4k-minimalist-wallpaper-image.jpg",
                    },
                },
                {
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
            ],
        },
    ];
}
