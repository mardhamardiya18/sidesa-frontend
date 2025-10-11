<template>
  <div id="Header" class="flex items-center justify-between">
    <div class="flex flex-col gap-2">
      <div class="flex gap-1 items-center leading-5 text-desa-secondary">
        <p
          class="last-of-type:text-desa-dark-green last-of-type:font-semibold capitalize"
        >
          Bantuan sosial
        </p>
        <span>/</span>
        <p
          class="last-of-type:text-desa-dark-green last-of-type:font-semibold capitalize"
        >
          Manage bantuan sosial
        </p>
      </div>
      <h1 class="font-semibold text-2xl">Manage Bantuan Sosial</h1>
    </div>
    <div class="flex items-center gap-3">
      <button
        @click="showModalDelete = true"
        data-modal="Modal-Delete"
        class="flex items-center rounded-2xl py-4 px-6 gap-[10px] bg-desa-red"
      >
        <p class="font-medium text-white">Hapus Data</p>
        <img
          src="@/assets/images/icons/trash-white.svg"
          class="flex size-6 shrink-0"
          alt="icon"
        />
      </button>
      <router-link
        :to="{
          name: 'edit-social-assistance',
          params: { id: route.params.id },
        }"
        class="flex items-center rounded-2xl py-4 px-6 gap-[10px] bg-desa-black"
      >
        <p class="font-medium text-white">Ubah Data</p>
        <img
          src="@/assets/images/icons/edit-white.svg"
          class="flex size-6 shrink-0"
          alt="icon"
        />
      </router-link>
    </div>
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

  <div class="flex gap-[14px]">
    <section
      id="Informasi-Bantuan-Sosial"
      class="flex flex-col shrink-0 w-[calc(545/1000*100%)] h-fit rounded-3xl p-6 gap-6 bg-white"
    >
      <p class="font-medium leading-5 text-desa-secondary">
        Informasi Bantuan Sosial
      </p>
      <div class="flex items-center justify-between gap-4">
        <div
          class="flex w-[120px] h-[100px] shrink-0 rounded-2xl overflow-hidden bg-desa-foreshadow"
        >
          <img
            :src="socialAssistance.thumbnail"
            class="w-full h-full object-cover"
            alt="photo"
          />
        </div>
        <div
          class="badge rounded-full p-3 gap-2 flex w-[100px] justify-center shrink-0"
          :class="{
            'bg-desa-soft-green': socialAssistance.is_active,
            'bg-desa-red': !socialAssistance.is_active,
          }"
        >
          <span class="font-semibold text-xs text-white uppercase">{{
            socialAssistance.is_active ? "Tersedia" : "Ditutup"
          }}</span>
        </div>
      </div>
      <div class="flex flex-col gap-[6px] w-full">
        <p class="font-semibold text-xl">{{ socialAssistance.name }}</p>
        <p class="flex items-center gap-1">
          <img
            src="@/assets/images/icons/profile-secondary-green.svg"
            class="flex size-[18px] shrink-0"
            alt="icon"
          />
          <span class="font-medium text-sm text-desa-secondary">{{
            socialAssistance.provider
          }}</span>
        </p>
      </div>
      <hr class="border-desa-foreshadow" />
      <div class="flex items-center w-full gap-3">
        <div
          class="flex size-[52px] shrink-0 rounded-2xl bg-desa-foreshadow items-center justify-center"
        >
          <img
            src="@/assets/images/icons/money-dark-green.svg"
            class="flex size-6 shrink-0"
            alt="icon"
          />
        </div>
        <div class="flex flex-col gap-1 w-full">
          <p
            class="font-semibold text-lg leading-[22.5px] text-desa-dark-green"
          >
            Rp {{ formatRupiah(socialAssistance.amount) }}
          </p>
          <span class="font-medium text-desa-secondary"> Uang Tunai </span>
        </div>
      </div>
      <hr class="border-desa-foreshadow" />
      <div class="flex items-center w-full gap-3">
        <div
          class="flex size-[52px] shrink-0 rounded-2xl bg-desa-blue/10 items-center justify-center"
        >
          <img
            src="@/assets/images/icons/profile-2user-blue.svg"
            class="flex size-6 shrink-0"
            alt="icon"
          />
        </div>
        <div class="flex flex-col gap-1 w-full">
          <p class="font-semibold text-lg leading-[22.5px] text-desa-blue">
            {{ socialAssistance.social_assistance_recipients?.length }} Warga
          </p>
          <span class="font-medium text-desa-secondary"> Total Pengajuan </span>
        </div>
      </div>
      <hr class="border-desa-foreshadow" />
      <div class="flex flex-col gap-3">
        <p class="font-medium text-sm text-desa-secondary">Tentang Bantuan</p>
        <p class="font-medium leading-8">
          {{ socialAssistance.description }}
        </p>
      </div>
    </section>
    <section
      id="Penerima-Bansos-Terakhir"
      class="flex flex-col flex-1 h-fit shrink-0 rounded-3xl p-6 gap-6 bg-white"
    >
      <p class="font-medium leading-5 text-desa-secondary">
        Penerima Bansos Terakhir
      </p>
      <div id="List-Bansos-Terkahir" class="flex flex-col gap-6">
        <div
          v-if="socialAssistance.social_assistance_recipients?.length === 0"
          class="card flex flex-col rounded-2xl border border-desa-background p-4 gap-4"
        >
          <p class="text-center">Data recipient tidak ditemukan</p>
        </div>
        <div
          v-else
          v-for="(item, index) in socialAssistance.social_assistance_recipients"
          :key="index"
          class="card flex flex-col rounded-2xl border border-desa-background p-4 gap-4"
        >
          <div class="flex items-center justify-between">
            <p class="font-medium text-sm text-desa-secondary">
              {{ formatToClientTimezone(item.created_at) }}
            </p>
            <img
              src="@/assets/images/icons/calendar-2-secondary-green.svg"
              class="flex size-[18px] shrink-0"
              alt="icon"
            />
          </div>
          <hr class="border-desa-background" />
          <div class="flex items-center gap-3">
            <div class="flex flex-col gap-[6px] w-full">
              <p class="font-semibold text-lg leading-5">
                Rp {{ formatRupiah(item.amount) }}
              </p>
              <p class="font-medium text-sm text-desa-secondary">
                Nominal Pengajuan
              </p>
            </div>
            <div
              class="badge rounded-full p-3 gap-2 flex w-[100px] justify-center shrink-0 bg-desa-yellow"
            >
              <span class="font-semibold text-xs text-white uppercase">{{
                item.status === "pending"
                  ? "Tertunda"
                  : item.status === "approved"
                  ? "disetujui"
                  : item.status === "rejected"
                  ? "ditolak"
                  : "unknown"
              }}</span>
            </div>
          </div>
          <hr class="border-desa-background" />
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-0.5">
              <img
                src="@/assets/images/icons/profile-secondary-green.svg"
                class="flex size-[18px] shrink-0"
                alt="icon"
              />
              <p class="font-medium text-sm text-desa-secondary">
                Diberikan Kepada:
              </p>
            </div>
            <div class="flex items-center gap-1">
              <p class="font-medium leading-5">Udin Louvre</p>
              <div
                class="flex size-8 shrink-0 rounded-full bg-desa-foreshadow overflow-hidden"
              >
                <img
                  src="@/assets/images/photos/kk-photo-5.png"
                  class="w-full h-full object-cover"
                  alt="photo"
                />
              </div>
            </div>
          </div>
        </div>

        <a
          href="#"
          class="flex items-center justify-center h-14 rounded-2xl py-4 px-6 gap-[10px] bg-desa-dark-green"
        >
          <span class="font-medium leading-5 text-white">View All</span>
        </a>
      </div>
    </section>
  </div>

  <ModalDelete
    :loading="loading"
    :show="showModalDelete"
    title="Bantuan Social"
    @close="showModalDelete = false"
    @confirm="handleDelete"
  />
</template>

<script setup>
import ModalDelete from "@/components/ui/ModalDelete.vue";
import { formatRupiah, formatToClientTimezone } from "@/helpers/format";
import router from "@/router";
import { useSosialAssistanceStore } from "@/stores/socialAssistance";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const showModalDelete = ref(false);
const socialAssistanceStore = useSosialAssistanceStore();
const { fetchDeleteSocialAssistance, fetchSocialAssistance } =
  socialAssistanceStore;
const { loading, success, error } = storeToRefs(socialAssistanceStore);
const route = useRoute();

const socialAssistance = ref({});

const handleDelete = async () => {
  await fetchDeleteSocialAssistance(route.params.id);

  router.push({ name: "social-assistance" });
};

const loadData = async () => {
  const data = await fetchSocialAssistance(route.params.id);

  socialAssistance.value = data;
};

onMounted(() => {
  loadData();
  setTimeout(() => {
    success.value = null;
  }, 2500);
});
</script>

<style lang="scss" scoped></style>
