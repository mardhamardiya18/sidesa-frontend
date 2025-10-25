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
    async fetchFamilyMember(id) {
      this.loading = true;

      try {
        const response = await axiosInstance.get(`family-member/${id}`);

        return response.data.data;
      } catch (error) {
        this.error = handleError(error);
      } finally {
        this.loading = false;
      }
    },

    async deleteFamilyMember(id) {
      this.loading = true;

      try {
        const response = await axiosInstance.delete(`family-member/${id}`);

        this.success = response.data.message;
      } catch (error) {
        this.error = handleError(error);
      } finally {
        this.loading = false;
      }
    },

    async createFamilyMember(payload) {
      this.loading = true;

      try {
        const response = await axiosInstance.post("family-member", payload);

        router.push({ name: "family-member" });
        this.success = response.data.message;
      } catch (error) {
        this.error = handleError(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
