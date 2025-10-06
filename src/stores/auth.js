import { handleError } from "@/helpers/errorHelper";
import { axiosInstance } from "@/plugins/axios";
import router from "@/router";
import Cookies from "js-cookie";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    loading: false,
    error: null,
    success: null,
    token: Cookies.get("token") || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login(credentials) {
      this.loading = true;
      try {
        const response = await axiosInstance.post("/login", credentials);
        const token = response.data.token;

        this.token = token;
        Cookies.set("token", token);

        this.success = "Login Succesfully";
        router.push({ name: "dashboard" });
      } catch (error) {
        console.log(error.response);
        this.error = handleError(error);
      } finally {
        this.loading = false;
      }
    },

    async logout() {
      this.loading = true;

      try {
        await axiosInstance.post("/logout");

        Cookies.remove("token");
        this.token = null;
        this.user = null;
        this.error = null;
        this.success = "Logout successfully";

        router.push({ name: "login" });
      } catch (error) {
        this.error = handleError(error);
      } finally {
        this.loading = false;
      }
    },

    async checkAuth() {
      this.loading = true;
      try {
        const response = await axiosInstance.get("/me");
        this.user = response.data.data;
        return this.user;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.logout();
        }
      }
      this.loading = false;
    },
  },
});
