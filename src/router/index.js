import Auth from "@/layouts/Auth.vue";
import Main from "@/layouts/Main.vue";
import { useAuthStore } from "@/stores/auth";
import Dashboard from "@/views/Dashboard.vue";
import HeadOfFamilies from "@/views/head-of-family/HeadOfFamilies.vue";
import HeadOfFamily from "@/views/head-of-family/HeadOfFamily.vue";
import Login from "@/views/Login.vue";
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
          meta: { requiresAuth: true, permission: "dashboard-menu" },
        },
        {
          path: "/head-of-family",
          name: "head-of-family",
          component: HeadOfFamilies,
          meta: { requiresAuth: true, permission: "head-of-family-list" },
        },
        {
          path: "/head-of-family/:id",
          name: "manage-head-of-family",
          component: HeadOfFamily,
          meta: { requiresAuth: true, permission: "head-of-family-list" },
        },
      ],
    },
    {
      path: "/login",
      component: Auth,
      children: [
        {
          path: "",
          name: "login",
          component: Login,
          meta: { requiresUnauth: true },
        },
      ],
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth) {
    if (authStore.token) {
      try {
        if (!authStore.user) {
          await authStore.checkAuth();
        }

        const userPermissions = authStore.user?.permission || [];

        if (
          to.meta.permission &&
          !userPermissions.includes(to.meta.permission)
        ) {
          next({ name: "Error 403" });
          return;
        }

        next();
      } catch (error) {
        next({ name: "login" });
      }
    } else {
      next({ name: "login" });
    }
  } else if (to.meta.requiresUnauth && authStore.token) {
    next({ name: "dashboard" });
  } else {
    next();
  }
});

export default router;
