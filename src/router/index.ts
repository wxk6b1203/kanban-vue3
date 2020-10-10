import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import settings from "./modules/settings";
import sketelon from "./modules/sketelon"

let routes : RouteRecordRaw[] = [];

routes = routes.concat(settings)
routes = routes.concat(sketelon);

const router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes: routes
})

export default router;