import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { routerAnimationDuration } from "@/services/animations/animations";

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, _, savedPosition) {
        if (to.meta.scrollToTop) {
            return { top: 0, behavior: "instant" };
        }

        if (savedPosition) {
            // return when the router animation ends
            return new Promise((resolve) => {
                setTimeout(() => resolve(savedPosition), routerAnimationDuration);
            });
        }

        return false;
    },
});
