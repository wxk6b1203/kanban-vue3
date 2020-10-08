import { RouteRecordRaw } from "vue-router";
let sketelon : RouteRecordRaw[] = [
    {
        name: 'main',
        path: '/',
        component: () => import("../../view/Skeleton.vue")
    }
]

export default sketelon;