import { handleError } from "@/helpers/errorHelper";
import { axiosInstance } from "@/plugins/axios";
import { defineStore } from "pinia";

export const useDashboardStore = defineStore("dashboard", {
  state: () => ({
    dashboardData: {},
    loading: false,
    error: null,
    success: null,
  }),
  actions: {
    async fetchDashboardData() {
      this.loading = true;

      try {
        const response = await axiosInstance.get(
          `/dashboard/get-dashboard-data`
        );
        this.dashboardData = response.data.data;
      } catch (error) {
        this.error = handleError(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
