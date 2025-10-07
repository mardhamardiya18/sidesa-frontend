import { handleError } from "@/helpers/errorHelper";
import { axiosInstance } from "@/plugins/axios";
import { defineStore } from "pinia";

export const useHeadOfFamilyStore = defineStore("head-of-family", {
  state: () => ({
    headOfFamilies: [],
    headOfFamily: [],
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
    async fetchHeadOfFamilies(params) {
      this.loading = true;

      try {
        const response = await axiosInstance.get("head-of-family", { params });

        this.headOfFamilies = response.data.data;
      } catch (error) {
        this.error = handleError(error);
      } finally {
        this.loading = false;
      }
    },

    async fetchHeadOfFamiliesPaginated(params) {
      this.loading = true;

      try {
        const response = await axiosInstance.get(
          "head-of-family/all/paginated",
          { params }
        );

        this.headOfFamilies = response.data.data.data;
        this.meta = response.data.data.meta;
      } catch (error) {
        this.error = handleError(error);
      } finally {
        this.loading = false;
      }
    },

    async fetchHeadOfFamily(id) {
      this.loading = true;

      try {
        const response = await axiosInstance.get(`head-of-family/${id}`);

        this.headOfFamily = response.data.data;
        this.success = response.data.message;
      } catch (error) {
        this.error = handleError(error);
      } finally {
        this.loading = false;
      }
    },

    async deleteHeadOfFamily(id) {
      this.loading = true;

      try {
        const response = await axiosInstance.delete(`head-of-family/${id}`);

        this.success = response.data.message;
      } catch (error) {
        this.error = handleError(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
