import { createRouter, createWebHistory } from "vue-router";
import settings from "./modules/settings";
const router = createRouter({
    history: createWebHistory(),
    routes: settings
})

export default router;