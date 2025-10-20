import { handleError } from "@/helpers/errorHelper";
import { axiosInstance } from "@/plugins/axios";
import router from "@/router";
import { defineStore } from "pinia";

export const useEventStore = defineStore("event", {
  state: () => ({
    events: [],
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
    async fetchEventPaginated(params) {
      this.loading = true;

      try {
        const response = await axiosInstance.get("event/all/paginated", {
          params,
        });

        this.events = response.data.data.data;
        this.meta = response.data.data.meta;
      } catch (error) {
        this.error = handleError(error);
      } finally {
        this.loading = false;
      }
    },

    async fetchEvent(id) {
      this.loading = true;

      try {
        const response = await axiosInstance.get(`event/${id}`);

        return response.data.data;
      } catch (error) {
        this.error = handleError(error);
      } finally {
        this.loading = false;
      }
    },

    async fetchEventUpdate(payload) {
      this.loading = true;

      try {
        const response = await axiosInstance.post(`event/${payload.id}`, {
          ...payload,
          _method: "PUT",
        });
        this.success = response.data.message;
        router.push({
          name: "manage-event",
          params: { id: payload.id },
        });
      } catch (error) {
        this.error = handleError(error);
      } finally {
        this.loading = false;
      }
    },

    async fetchDeleteEvent(id) {
      this.loading = true;

      try {
        const response = await axiosInstance.delete(`event/${id}`);
        this.success = response.data.message;
      } catch (error) {
        this.error = handleError(error);
      } finally {
        this.loading = false;
      }
    },

    async fetchEventStore(payload) {
      this.loading = true;

      try {
        const response = await axiosInstance.post(`event`, payload);
        this.success = response.data.message;
        router.push({
          name: "event",
        });
      } catch (error) {
        this.error = handleError(error);
      } finally {
        this.loading = false;
      }
    },
  },
});
