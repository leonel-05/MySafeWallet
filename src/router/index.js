import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/LogIn.vue";
import DashBoard from "@/views/DashBoard.vue";

const routes = [
  { path: "/", name: "login", component: Login },
  { path: "/dashboard", name: "dashboard", component: DashBoard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
