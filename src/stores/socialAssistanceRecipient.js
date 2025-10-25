import { handleError } from "@/helpers/errorHelper";
import { axiosInstance } from "@/plugins/axios";
import router from "@/router";
import { defineStore } from "pinia";

export const useSosialAssistanceRecipientStore = defineStore(
  "social-assistance-recipient",
  {
    state: () => ({
      socialAssistanceRecipients: [],
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
      async fetchSocialAssistanceRecipientPaginated(params) {
        this.loading = true;

        try {
          const response = await axiosInstance.get(
            "social-assistance-recipient/all/paginated",
            { params }
          );

          this.socialAssistanceRecipients = response.data.data.data;
          this.meta = response.data.data.meta;
        } catch (error) {
          this.error = handleError(error);
        } finally {
          this.loading = false;
        }
      },

      async fetchSocialAssistanceRecipients(params) {
        this.loading = true;

        try {
          const response = await axiosInstance.get(
            "social-assistance-recipient"
          );

          this.socialAssistanceRecipients = response.data.data;
        } catch (error) {
          this.error = handleError(error);
        } finally {
          this.loading = false;
        }
      },

      async fetchSocialAssistanceRecipient(id) {
        this.loading = true;

        try {
          const response = await axiosInstance.get(
            `social-assistance-recipient/${id}`
          );

          return response.data.data;
        } catch (error) {
          this.error = handleError(error);
        } finally {
          this.loading = false;
        }
      },

      async fetchSocialAssistanceRecipientUpdate(payload) {
        this.loading = true;

        try {
          const response = await axiosInstance.post(
            `social-assistance-recipient/${payload.id}`,
            {
              ...payload,
              _method: "PUT",
            }
          );
          this.success = response.data.message;
          router.push({
            name: "manage-social-assistance-recipient",
            params: { id: payload.id },
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
