import i18next from "i18next";
import { Project } from "../project";
import YoomyBannerProject from "./assets/yoomyBannerProject.png";
import Yoomy2 from "./assets/yoomy_2.png";
import { projectSkills } from "../projectSkills";

const { t } = i18next;
export const YoomyProject: Project = {
    id: 1,
    period: `2020 - ${t("worksSection.table.toNow")}`,
    clientName: "Yoomy",
    role: {
        en: "Programmer",
        it: "Programmatore",
    },
    skills: [projectSkills.web, projectSkills.devops, projectSkills.team],
    bannerPath: YoomyBannerProject,
    description: {
        en: "Full stack development of a start-up project",
        it: "Sviluppo full-stack di una piattaforma start-up",
    },
    sections: [
        {
            name: "single-image",
            media: {
                type: "image",
                url: Yoomy2,
            },
        },
        {
            name: "double-image-with-text",
            textPosition: "left",
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
};
