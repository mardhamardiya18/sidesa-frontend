import { handleError } from "@/helpers/errorHelper";
import { axiosInstance } from "@/plugins/axios";
import router from "@/router";

import { defineStore } from "pinia";

export const useFamilyMemberStore = defineStore("family-member", {
  state: () => ({
    familyMembers: [],
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
    async fetchFamilyMembers(params) {
      this.loading = true;

      try {
        const response = await axiosInstance.get("family-member", { params });

        this.familyMembers = response.data.data;
      } catch (error) {
        this.error = handleError(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
