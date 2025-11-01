<template>
  <div id="Header" class="flex items-center justify-between">
    <h1 class="font-semibold text-2xl">Pembangunan Desa</h1>
    <router-link
      v-if="can('development-create')"
      :to="{ name: 'create-development' }"
      class="flex items-center rounded-2xl py-4 px-6 gap-[10px] bg-desa-dark-green"
    >
      <img
        src="@/assets/images/icons/add-square-white.svg"
        class="flex size-6 shrink-0"
        alt="icon"
      />
      <p class="font-medium text-white">Add New</p>
    </router-link>
  </div>

  <div
    v-if="success"
    class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-2xl relative mb-4"
    role="alert"
  >
    <span class="block sm:inline">{{ success }}</span>
  </div>

  <div
    v-if="error"
    class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-2xl relative mb-4"
    role="alert"
  >
    <span class="block sm:inline">{{ error }}</span>
    <button
      type="button"
      @click="error = null"
      class="absolute top-1/2 -translate-y-1/2 right-4"
    >
      <img
        src="@/assets/images/icons/close-circle-red-fill.svg"
        class="flex size-6 shrink-0"
        alt=""
      />
    </button>
  </div>

  <section
    id="TabButtons"
    class="w-full p-1 bg-desa-foreshadow rounded-full grid grid-cols-2 gap-3"
    v-if="user?.role === 'head-of-family'"
  >
    <button
      type="button"
      data-content="All"
      :class="['tab-btn', 'group', { active: !filters.status }]"
    >
      <div
        @click="filters.status = null"
        class="group-[.active]:bg-desa-dark-green group-[.active]:text-white rounded-full py-[18px] flex justify-center items-center text-center text-desa-dark-green font-medium leading-5 transition-all duration-300"
      >
        <span>Semua Pembangunan</span>
      </div>
    </button>
    <button
      type="button"
      data-content="My-applications"
      :class="[
        'tab-btn',
        'group',
        { active: filters.status === 'my-applications' },
      ]"
    >
      <div
        @click="filters.status = 'my-applications'"
        class="group-[.active]:bg-desa-dark-green group-[.active]:text-white rounded-full py-[18px] flex justify-center items-center text-center text-desa-dark-green font-medium leading-5 transition-all duration-300"
      >
        <span>My Applications</span>
      </div>
    </button>
  </section>

  <section id="List-Pembangunan-Desa" class="flex flex-col gap-[14px]">
    <form id="Page-Search" class="flex items-center justify-between">
      <div class="flex flex-col gap-3 w-[370px] shrink-0">
        <label class="relative group peer w-full valid">
          <input
            v-model="filters.search"
            type="text"
            placeholder="Cari nama pembangunan desa"
            class="appearance-none outline-none w-full h-14 rounded-2xl ring-[1.5px] ring-desa-background focus:ring-desa-black py-4 pl-12 pr-6 gap-2 font-medium placeholder:text-desa-secondary transition-all duration-300"
          />
          <div
            class="absolute transform -translate-y-1/2 top-1/2 left-4 flex size-6 shrink-0"
          >
            <img
              src="@/assets/images/icons/box-search-secondary-green.svg"
              class="size-6 hidden group-has-[:placeholder-shown]:flex"
              alt="icon"
            />
            <img
              src="@/assets/images/icons/box-search-black.svg"
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
              v-model="serverOptions.row_per_page"
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
      v-for="(development, index) in developments"
      :key="index"
      :item="development"
    />

    <Pagination :meta="meta" :server-options="serverOptions" />
  </section>
</template>

<script setup>
import CardList from "@/components/development/CardList.vue";
import Pagination from "@/components/ui/Pagination.vue";
import { can } from "@/helpers/permissionHelper";
import { useAuthStore } from "@/stores/auth";
import { useDevelopmentStore } from "@/stores/development";
import { debounce } from "lodash";
import { storeToRefs } from "pinia";
import { onMounted, ref, watch } from "vue";

const developmentStore = useDevelopmentStore();

const { fetchDevelopmentPaginated } = developmentStore;
const { loading, success, error, developments, meta } =
  storeToRefs(developmentStore);

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

const serverOptions = ref({
  page: 1,
  row_per_page: 10,
});

const filters = ref({
  search: "",
});

const fetchData = async () => {
  await fetchDevelopmentPaginated({
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
