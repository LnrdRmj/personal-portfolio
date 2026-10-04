import LandingPage from "../views/LandingPage.vue";
import * as routeNames from "./routeNames";

export const routes = [
    {
        path: "/",
        component: LandingPage,
        name: routeNames.LANDING,
    },
    {
        path: "/project/:projectId",
        component: () => import("../views/ProjectPage.vue"),
        name: routeNames.PROJECT_DETAIL,
        props: true,
        meta: { scrollToTop: true },
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import("../views/NotFoundPage.vue"),
        name: routeNames.NOT_FOUND,
    },
];
