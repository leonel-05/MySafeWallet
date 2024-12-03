import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/LogIn.vue";

const routes = [{ path: "/", name: "login", component: Login }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
