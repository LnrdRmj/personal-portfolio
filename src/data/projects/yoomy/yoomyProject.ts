import { Project } from "../project";
import { projectSkills } from "../projectSkills";
import YoomyBannerProject from "./assets/yoomyBannerProject.png";
import Yoomy2 from "./assets/yoomy_2.png";
import YoomyImage3 from "./assets/yoomy_image_3.png";
import YoomyImage4 from "./assets/yoomy_image_4.png";
import YoomyStorePerformance from "./assets/yoomy_stores_performance.png";

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
        {
            name: "single-image-with-text",
            textPosition: "right",
            title: {
                en: "WHAT DID I DO?",
                it: "COSA HO FATTO?",
            },
            description: {
                en: "I developed both the frontend and backend of this platform, and you can now find the Yoomy app on both the App Store and Play Store. <br> <br> The technologies used include Vue 3, Capacitor JS, and Node.js. Additionally, I tested the platform using the Jest testing framework.",
                it: "Ho sviluppato sia il frontend che il backend di questa piattaforma, e ora puoi trovare l'app Yoomy su App Store e Play Store. <br> <br> Le tecnologie utilizzate includono Vue 3, Capacitor JS e Node.js. Inoltre, ho testato la piattaforma utilizzando il framework di test Jest.",
            },
            media: {
                type: "image",
                url: YoomyImage4,
            },
        },
        {
            name: "with-title",
            title: {
                en: "THE RESULTS?",
                it: "I RISULTATI?",
            },
            description: {
                en: "Yoomy is now in use in various schools in Florence and has well over 1000+ registered users 🎉. The app is expected to grow more and we're on the verge of acquiring new schools with new features.",
                it: "Yoomy è ora utilizzato in diverse scuole di Firenze e conta ben oltre 1000+ utenti registrati 🎉. L'app è destinata a crescere ulteriormente e siamo sul punto di acquisire nuove scuole con nuove funzionalità.",
            },
            child: {
                name: "single-image",
                media: {
                    type: "image",
                    url: YoomyStorePerformance,
                },
            },
        },
    ],
};
