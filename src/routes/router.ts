import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { routerAnimationDuration } from "@/services/animations/animations";

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        const nowRouteAnimation = to.query["noRouteAnimation"] === null;
        const routeAnimationDuration = nowRouteAnimation ? 0 : routerAnimationDuration; //ms

        if (to.meta.scrollToTop) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({ top: 0, behavior: "instant" });
                }, routeAnimationDuration);
            });
        }

        if (savedPosition) {
            // This delay makes sure that the savedPosition is set correctly
            const delay = 10; //ms
            // return when the router animation ends
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(savedPosition);
                }, routeAnimationDuration + delay);
            });
        }

        return false;
    },
});
