import LandingPage from "../components/landingPage/LandingPage.vue";
import * as routeNames from "./routeNames";

export const routes = [
    {
        path: "/",
        component: LandingPage,
    },
    {
        path: "/project/:projectId",
        component: () => import("../components/projects/ProjectPage.vue"),
        name: routeNames.PROJECT_DETAIL,
        props: true,
    },
];
