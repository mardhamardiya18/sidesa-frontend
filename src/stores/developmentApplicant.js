import { handleError } from "@/helpers/errorHelper";
import { axiosInstance } from "@/plugins/axios";
import router from "@/router";
import { defineStore } from "pinia";

export const useDevelopmentApplicantStore = defineStore(
  "development-applicant",
  {
    state: () => ({
      developmentApplicants: [],
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
      async fetchDevelopmentApplicantStore(payload) {
        this.loading = true;

        try {
          const response = await axiosInstance.post(
            `development-applicant`,
            payload
          );
          this.success = response.data.message;
          router.push({
            name: "development",
          });
        } catch (error) {
          this.error = handleError(error);
        } finally {
          this.loading = false;
        }
      },
    },
  }
);
