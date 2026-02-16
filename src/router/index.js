import { createRouter, createWebHashHistory } from "vue-router";
import LandingHub from "../views/LandingHub.vue";

const routes = [
  { 
    path: "/", 
    name: "Home",
    component: LandingHub 
  },
  { 
    path: "/:pathMatch(.*)*", 
    redirect: "/" 
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;