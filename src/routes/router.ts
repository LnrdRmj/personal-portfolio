import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.meta.scrollToTop) {
            return { top: 0, behavior: "instant" };
        }

        if (savedPosition) return savedPosition;

        return false;
    },
});
