import { handleError } from "@/helpers/errorHelper";
import { axiosInstance } from "@/plugins/axios";
import router from "@/router";
import { defineStore } from "pinia";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    profile: [],
    meta: {
      current_page: 1,
      last_page: 1,
      per_page: 10,
      total: 10,
    },
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchProfile() {
      this.loading = true;

      try {
        const response = await axiosInstance.get(`profile`);

        const res = response.data.data;

        this.profile = res;
      } catch (error) {
        this.error = handleError(error);
      } finally {
        this.loading = false;
      }
    },

    async fetchProfileStore(payload) {
      this.loading = true;

      try {
        const response = await axiosInstance.post(`profile-store`, payload);
        this.success = response.data.message;
        router.push({
          name: "profile",
        });
      } catch (error) {
        this.error = handleError(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
