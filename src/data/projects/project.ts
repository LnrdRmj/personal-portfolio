import { I18nValue, createI18ValueWithFromOne } from "../../i18n/i18n";
import { createImageMediaUrl } from "@/components/projects/sections/common/media";
import { ProjectSection } from "@/services/project/project";
import i18next from "i18next";
import TrackOneLoginImage from "./assets/trackone-login.png";
import YoomyBannerProject from "./assets/yoomyBannerProject.png";
import { YoomyProject } from "./yoomy/yoomyProject";
import { Skill, projectSkills } from "./projectSkills";

export interface Project {
    id: number;
    period: string;
    clientName: string;
    role: I18nValue;
    skills: Skill[];
    bannerPath: string;
    description: I18nValue;
    sections: ProjectSection[];
}
export function getWorks(): Project[] {
    const { t } = i18next;
    return [
        YoomyProject,
        {
            id: 2,
            period: `2022 - 2024`,
            clientName: "Trackone",
            role: createI18ValueWithFromOne("Frontend developer"),
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
                    description: "Some description",
                    title: "Some title",
                    child: {
                        name: "double-image-with-text",
                        title: "Some other title",
                        description: "Some more description about this double images",
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
            period: `2024 - ${t("worksSection.table.toNow")}`,
            clientName: "NGSensors",
            role: createI18ValueWithFromOne("Web developer"),
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
                    title: "Some other title",
                    description: "Some more description about this double images",
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
            period: `2024 - ${t("worksSection.table.toNow")}`,
            clientName: "Paust Auction",
            role: createI18ValueWithFromOne("Web developer"),
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
                    title: "Some other title",
                    description: "Some more description about this double images",
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
