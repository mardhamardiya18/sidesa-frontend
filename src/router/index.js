import Main from "@/layouts/Main.vue";
import Dashboard from "@/views/Dashboard.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Main,
      children: [
        {
          path: "",
          name: "dashboard",
          component: Dashboard,
        },
      ],
    },
  ],
});

export default router;
