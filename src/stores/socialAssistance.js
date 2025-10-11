import { handleError } from "@/helpers/errorHelper";
import { axiosInstance } from "@/plugins/axios";
import router from "@/router";
import { defineStore } from "pinia";

export const useSosialAssistanceStore = defineStore("social-assistance", {
  state: () => ({
    socialAssistances: [],
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
    async fetchSocialAssistancePaginated(params) {
      this.loading = true;

      try {
        const response = await axiosInstance.get(
          "social-assistance/all/paginated",
          { params }
        );

        this.socialAssistances = response.data.data.data;
        this.meta = response.data.data.meta;
      } catch (error) {
        this.error = handleError(error);
      } finally {
        this.loading = false;
      }
    },

    async fetchSocialAssistance(id) {
      this.loading = true;

      try {
        const response = await axiosInstance.get(`social-assistance/${id}`);

        return response.data.data;
      } catch (error) {
        this.error = handleError(error);
      } finally {
        this.loading = false;
      }
    },

    async fetchDeleteSocialAssistance(id) {
      this.loading = true;

      try {
        const response = await axiosInstance.delete(`social-assistance/${id}`);
        this.success = response.data.message;
      } catch (error) {
        this.error = handleError(error);
      } finally {
        this.loading = false;
      }
    },

    async fetchSocialAssistanceUpdate(payload) {
      this.loading = true;

      try {
        const response = await axiosInstance.post(
          `social-assistance/${payload.id}`,
          {
            ...payload,
            _method: "PUT",
          }
        );
        this.success = response.data.message;
        router.push({
          name: "manage-social-assistance",
          params: { id: payload.id },
        });
      } catch (error) {
        this.error = handleError(error);
      } finally {
        this.loading = false;
      }
    },

    async fetchSocialAssistanceStore(payload) {
      this.loading = true;

      try {
        const response = await axiosInstance.post(`social-assistance`, payload);
        this.success = response.data.message;
        router.push({
          name: "social-assistance",
        });
      } catch (error) {
        this.error = handleError(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
