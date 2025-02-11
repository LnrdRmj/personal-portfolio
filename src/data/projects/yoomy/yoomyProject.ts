import i18next from "i18next";
import { Project } from "../project";
import YoomyBannerProject from "./assets/yoomyBannerProject.png";
import Yoomy2 from "./assets/yoomy_2.png";
import YoomyImage3 from "./assets/yoomy_image_3.png";
import { projectSkills } from "../projectSkills";

const { t } = i18next;
export const YoomyProject: Project = {
    id: 1,
    period: {
        startYear: 2020,
    },
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
            name: "single-image-with-text",
            textPosition: "left",
            title: {
                en: "INTRODUCTION TO YOOMY – AN INNOVATIVE SOLUTION FOR SCHOOLS",
                it: "INTRODUZIONE A YOOMY - UNA SOLUZIONE INNOVATIVA PER LE SCUOLE",
            },
            description: {
                en: "Yoomy was founded in 2021 with the goal of revolutionizing the way snacks are purchased in schools, providing a simple, fast, and controlled solution for students and suppliers. <br><br>The app addresses real problems: many schools do not have a physical cafeteria, while others offer snack sales only during recess, leading to issues such as overcrowding, rapid depletion of products, and cash-only payments.",
                it: "Yoomy nasce nel 2021 con l’obiettivo di rivoluzionare l’acquisto della merenda all’interno delle scuole, fornendo una soluzione semplice, veloce e controllata per studenti e fornitori. <br><br> L'app affronta problemi concreti: molte scuole non hanno un bar fiisico e altre offrono un servizio di vendita merende solo durante la ricreazione, con conseguenti disagi come sovraffollamento, esaurimento rapido dei prodotti e pagamenti esclusivamente in contanti.",
            },
            media: {
                type: "image",
                url: YoomyImage3,
            },
        },
    ],
};
