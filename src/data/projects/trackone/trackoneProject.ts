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
                media: createVideoMediaUrl(DevicesPageVideo),
            },
        },
        {
            name: "with-title",
            title: {
                en: "FEATURES",
                it: "FEATURES",
            },
            description: {
                en:
                    "The customer asked for an interactive map where they could analyze the behaviour of the device and the measurements that it gathered throughout time. <br>" +
                    "Maps are feature rich and you can:" +
                    "" +
                    "<li>Have a look at where the device has been</li>" +
                    "<li>Take a look of each and every single message a device has sent over</li>" +
                    "<li>Display a chart that displays the values of a measurement throughout time</li>" +
                    "<li>Change the observed time period</li>" +
                    "",
                it: "Maps were built with the help of Leaflet, a powerful library to display and control maps in your site. Have a look!",
            },
            child: {
                name: "single-image",
                media: createVideoMediaUrl(DeviceDetailPageVideo),
            },
        },
        {
            name: "with-title",
            title: {
                en: "AND EVEN MORE FEATURES",
                it: "AND EVEN MORE FEATURES",
            },
            description: {
                en:
                    "There's also \"Map Modes\" that let's thes user change how the points on the map are visualized. Here you can see a bunch of examples but the possibilities are endless.<br>" +
                    "In the video below you can choose between: " +
                    "<li>The number of satellites a certain point has</li>" +
                    "<li>The speed of the device on a certain point colored accordingly</li>" +
                    "<li>The temperature</li>" +
                    "<li>The angle the device was facing</li>" +
                    "",
                it: "Maps were built with the help of Leaflet, a powerful library to display and control maps in your site. Have a look!",
            },
            child: {
                name: "single-image",
                media: createVideoMediaUrl(MapModesVideo),
            },
        },
    ],
};
