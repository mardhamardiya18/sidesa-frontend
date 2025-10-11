<template>
  <div id="Header" class="flex items-center justify-between">
    <h1 class="font-semibold text-2xl">Pengajuan Bantuan Sosial</h1>
  </div>
  <section id="List-pengajuan-Bansos" class="flex flex-col gap-[14px]">
    <form id="Page-Search" class="flex items-center justify-between">
      <div class="flex flex-col gap-3 w-[370px] shrink-0">
        <label class="relative group peer w-full valid">
          <input
            type="text"
            placeholder="Cari nama Pengajuan bantuan social"
            class="appearance-none outline-none w-full h-14 rounded-2xl ring-[1.5px] ring-desa-background focus:ring-desa-black py-4 pl-12 pr-6 gap-2 font-medium placeholder:text-desa-secondary transition-all duration-300"
          />
          <div
            class="absolute transform -translate-y-1/2 top-1/2 left-4 flex size-6 shrink-0"
          >
            <img
              src="@/assets/images/icons/user-search-secondary-green.svg"
              class="size-6 hidden group-has-[:placeholder-shown]:flex"
              alt="icon"
            />
            <img
              src="@/assets/images/icons/user-search-black.svg"
              class="size-6 flex group-has-[:placeholder-shown]:hidden"
              alt="icon"
            />
          </div>
        </label>
      </div>
      <div class="options flex items-center gap-4">
        <div class="flex items-center gap-[10px]">
          <span class="font-medium leading-5">Show</span>
          <div class="relative">
            <select
              name=""
              id=""
              class="appearance-none outline-none w-full h-14 rounded-2xl ring-[1.5px] ring-desa-background focus:ring-desa-black py-4 px-6 pr-[52px] gap-2 font-medium placeholder:text-desa-secondary transition-all duration-300"
            >
              <option value="5" selected>5 Entries</option>
              <option value="10">10 Entries</option>
              <option value="20">20 Entries</option>
              <option value="30">30 Entries</option>
              <option value="40">40 Entries</option>
              <option value="50">50 Entries</option>
            </select>
            <img
              src="@/assets/images/icons/arrow-down-black.svg"
              class="flex size-6 shrink-0 absolute transform -translate-y-1/2 top-1/2 right-6"
              alt="icon"
            />
          </div>
        </div>
        <button
          type="button"
          class="flex items-center gap-1 h-14 w-fit rounded-2xl border border-desa-background bg-white py-4 px-6"
        >
          <img
            src="@/assets/images/icons/filter-black.svg"
            class="flex size-6 shrink-0"
            alt="icon"
          />
          <span class="font-medium leading-5">Filter</span>
        </button>
      </div>
    </form>

    <CardList
      v-if="!loading"
      v-for="(socialAssistanceRecipient, index) in socialAssistanceRecipients"
      :key="index"
      :item="socialAssistanceRecipient"
    />

    <Pagination :meta="meta" :server-options="serverOptions" />
  </section>
</template>

<script setup>
import CardList from "@/components/social-assistance-recipient/CardList.vue";
import Pagination from "@/components/ui/Pagination.vue";
import { useSosialAssistanceRecipientStore } from "@/stores/socialAssistanceRecipient";
import { debounce } from "lodash";
import { storeToRefs } from "pinia";
import { onMounted, ref, watch } from "vue";

const socialAssistanceRecipientStore = useSosialAssistanceRecipientStore();
const { socialAssistanceRecipients, loading, success, meta, error } =
  storeToRefs(socialAssistanceRecipientStore);
const { fetchSocialAssistanceRecipientPaginated } =
  socialAssistanceRecipientStore;

const serverOptions = ref({
  page: 1,
  row_per_page: 10,
});

const filters = ref({
  search: "",
});

const fetchData = async () => {
  await fetchSocialAssistanceRecipientPaginated({
    ...serverOptions.value,
    ...filters.value,
  });
};

const debounceFetchData = debounce(fetchData, 500);

onMounted(() => {
  fetchData();
  setTimeout(() => {
    success.value = null;
  }, 2500);
});

watch(
  serverOptions,
  () => {
    fetchData();
  },
  { deep: true }
);

watch(
  filters,
  () => {
    debounceFetchData();
  },
  { deep: true }
);
</script>

<style lang="scss" scoped></style>
