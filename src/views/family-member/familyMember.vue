<template>
  <div id="Header" class="flex items-center justify-between">
    <div class="flex flex-col gap-2">
      <p class="flex items-center gap-1">
        <span class="leading-5 text-desa-secondary">Kepala Keluarga</span
        ><span class="font-medium leading-5 text-desa-dark-green">/</span
        ><span class="font-medium leading-5 text-desa-dark-green"
          >Manage Anggota Keluarga</span
        >
      </p>
      <h1 class="font-semibold text-2xl leading-[30px]">
        Manage Anggota Keluarga
      </h1>
    </div>
    <button
      @click="showModalDelete = true"
      data-modal="Modal-Delete"
      class="px-6 py-4 rounded-2xl bg-desa-red flex items-center gap-[10px]"
    >
      <p class="font-medium leading-5 text-white">Hapus Data</p>
      <img
        src="@/assets/images/icons/trash-white.svg"
        alt="icon"
        class="size-5 shrink-0"
      />
    </button>
  </div>
  <div class="flex gap-[14px]">
    <div
      class="shrink-0 rounded-3xl p-6 bg-white flex flex-col gap-6 h-fit w-[calc(520/1000*100%)]"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div
            class="flex size-[76px] shrink-0 rounded-full overflow-hidden bg-desa-foreshadow"
          >
            <img
              :src="payload.profile_picture"
              class="w-full h-full object-cover"
              alt="photo"
            />
          </div>
          <div class="flex flex-col gap-[6px]">
            <h3 class="font-semibold text-xl leading-[25px]">
              {{ payload.user?.name }}
            </h3>
            <div class="flex items-center gap-1">
              <img
                src="@/assets/images/icons/briefcase-secondary-green.svg"
                alt="icon"
                class="size-[18px] shrink-0"
              />
              <p
                class="font-medium text-sm leading-[17.5px] text-desa-secondary"
              >
                {{ payload.occupation }}
              </p>
            </div>
          </div>
        </div>
        <span
          class="menikah [&.menikah]:flex hidden rounded-full uppercase py-[12px] w-[100px] justify-center bg-desa-soft-green text-white font-semibold text-xs leading-[15px] shrink-0"
          >{{ payload.marital_status }}</span
        >
      </div>
      <hr class="border-desa-background" />
      <div class="flex items-center gap-3">
        <div class="p-[14px] rounded-2xl bg-desa-foreshadow shrink-0">
          <img
            src="@/assets/images/icons/keyboard-dark-green.svg"
            alt="icon"
            class="size-6 shrink-0"
          />
        </div>
        <div class="flex flex-col gap-1">
          <p class="font-semibold text-lg leading-[22.5px]">
            {{ payload.identity_number }}
          </p>
          <h4 class="font-medium leading-5 text-desa-secondary">
            Nomor Induk Kependudukan
          </h4>
        </div>
      </div>
      <hr class="border-desa-background" />
      <div class="flex items-center gap-3">
        <div class="p-[14px] rounded-2xl bg-desa-foreshadow shrink-0">
          <img
            src="@/assets/images/icons/user-square-dark-green.svg"
            alt="icon"
            class="size-6 shrink-0"
          />
        </div>
        <div class="flex flex-col gap-1">
          <p class="font-semibold text-lg leading-[22.5px]">
            {{ calculateAge(payload.date_of_birth) }} Tahun
          </p>
          <h4 class="font-medium leading-5 text-desa-secondary">Umur</h4>
        </div>
      </div>
      <hr class="border-desa-background" />
      <div class="flex items-center gap-3">
        <div class="p-[14px] rounded-2xl bg-desa-foreshadow shrink-0">
          <img
            src="@/assets/images/icons/calendar-2-dark-green.svg"
            alt="icon"
            class="size-6 shrink-0"
          />
        </div>
        <div class="flex flex-col gap-1">
          <p class="font-semibold text-lg leading-[22.5px]">
            {{ payload.date_of_birth }}
          </p>
          <h4 class="font-medium leading-5 text-desa-secondary">
            Tanggal Lahir
          </h4>
        </div>
      </div>
      <hr class="border-desa-background" />
      <div class="flex items-center gap-3">
        <div class="p-[14px] rounded-2xl bg-desa-foreshadow shrink-0">
          <img
            src="@/assets/images/icons/man-dark-green.svg"
            alt="icon"
            class="size-6 shrink-0"
          />
        </div>
        <div class="flex flex-col gap-1">
          <p class="font-semibold text-lg leading-[22.5px]">
            {{ payload.gender }}
          </p>
          <h4 class="font-medium leading-5 text-desa-secondary">
            Jenis Kelamin
          </h4>
        </div>
      </div>
      <hr class="border-desa-background" />
      <div class="flex items-center gap-3">
        <div class="p-[14px] rounded-2xl bg-desa-foreshadow shrink-0">
          <img
            src="@/assets/images/icons/sms-dark-green.svg"
            alt="icon"
            class="size-6 shrink-0"
          />
        </div>
        <div class="flex flex-col gap-1">
          <p class="font-semibold text-lg leading-[22.5px]">
            {{ payload.user?.email }}
          </p>
          <h4 class="font-medium leading-5 text-desa-secondary">
            Email Address
          </h4>
        </div>
      </div>
      <hr class="border-desa-background" />
      <div class="flex items-center gap-3">
        <div class="p-[14px] rounded-2xl bg-desa-foreshadow shrink-0">
          <img
            src="@/assets/images/icons/call-dark-green.svg"
            alt="icon"
            class="size-6 shrink-0"
          />
        </div>
        <div class="flex flex-col gap-1">
          <p class="font-semibold text-lg leading-[22.5px]">
            {{ payload.phone_number }}
          </p>
          <h4 class="font-medium leading-5 text-desa-secondary">Nomor Hp</h4>
        </div>
      </div>
    </div>
    <div class="flex-1 rounded-3xl p-6 bg-white flex flex-col gap-6">
      <h2 class="font-medium leading-5 text-desa-secondary">
        Recent Applicants
      </h2>
      <div
        class="applicant rounded-2xl border border-desa-background p-6 flex flex-col gap-6"
      >
        <div class="flex items-center justify-between">
          <div
            class="flex items-center justify-center w-[100px] h-[80px] rounded-2xl overflow-hidden"
          >
            <img
              src="@/assets/images/thumbnails/kk-manage-applicant-1.png"
              alt="image"
              class="size-full object-cover"
            />
          </div>
          <div class="group menunggu">
            <span
              class="group-[&.menunggu]:flex hidden rounded-full py-[12px] w-[100px] justify-center bg-desa-yellow text-white font-semibold text-xs leading-[15px] shrink-0"
              >MENUNGGU</span
            >
            <span
              class="group-[&.ditolak]:flex hidden rounded-full py-[12px] w-[100px] justify-center bg-desa-red text-white font-semibold text-xs leading-[15px] shrink-0"
              >DITOLAK</span
            >
            <span
              class="group-[&.diterima]:flex hidden rounded-full py-[12px] w-[100px] justify-center bg-desa-dark-green text-white font-semibold text-xs leading-[15px] shrink-0"
              >DITERIMA</span
            >
          </div>
        </div>
        <div>
          <h3 class="font-semibold text-lg leading-[22.5px] line-clamp-1">
            Pembangunan Jalanan Utama
          </h3>
          <div class="flex items-center gap-1">
            <p class="font-medium leading-5 text-desa-secondary">
              Penanggung jawab:
            </p>
            <p
              class="font-semibold leading-5 text-desa-dark-green line-clamp-1"
            >
              Uzumaki Asep
            </p>
          </div>
        </div>
        <hr class="border-desa-background" />
        <div id="Tanggal-Pelaksanaan" class="flex items-center gap-[12px]">
          <div
            class="size-[48px] shrink-0 rounded-full bg-desa-foreshadow flex items-center justify-center"
          >
            <img
              src="@/assets/images/icons/calendar-2-dark-green.svg"
              alt="icon"
              class="size-6 shrink-0"
            />
          </div>
          <div class="flex flex-col gap-1">
            <p class="font-semibold leading-5 text-desa-dark-green">
              3 Jan 2025
            </p>
            <h4
              class="font-medium text-sm leading-[17.5px] text-desa-secondary"
            >
              Tanggal Pelaksanaan
            </h4>
          </div>
        </div>
        <hr class="border-desa-background" />
        <div id="Tanggal-Pelaksanaan" class="flex items-center gap-[12px]">
          <div
            class="size-[48px] shrink-0 rounded-full bg-desa-foreshadow flex items-center justify-center"
          >
            <img
              src="@/assets/images/icons/timer-dark-green.svg"
              alt="icon"
              class="size-6 shrink-0"
            />
          </div>
          <div class="flex flex-col gap-1">
            <p class="font-semibold leading-5 text-desa-dark-green">24 Hari</p>
            <h4
              class="font-medium text-sm leading-[17.5px] text-desa-secondary"
            >
              Waktu Pelaksanaan
            </h4>
          </div>
        </div>
        <hr class="border-desa-background" />
        <a href="kk-pembangunan-desa-details.html">
          <div
            class="w-full p-[18px] rounded-2xl bg-desa-dark-green flex items-center justify-center text-white font-medium leading-5"
          >
            View Details
          </div>
        </a>
      </div>
      <div
        class="applicant rounded-2xl border border-desa-background p-6 flex flex-col gap-6"
      >
        <div class="flex items-center justify-between">
          <div
            class="flex items-center justify-center w-[100px] h-[80px] rounded-2xl overflow-hidden"
          >
            <img
              src="@/assets/images/thumbnails/kk-manage-applicant-2.png"
              alt="image"
              class="size-full object-cover"
            />
          </div>
          <div class="group diterima">
            <span
              class="group-[&.menunggu]:flex hidden rounded-full py-[12px] w-[100px] justify-center bg-desa-yellow text-white font-semibold text-xs leading-[15px] shrink-0"
              >MENUNGGU</span
            >
            <span
              class="group-[&.ditolak]:flex hidden rounded-full py-[12px] w-[100px] justify-center bg-desa-red text-white font-semibold text-xs leading-[15px] shrink-0"
              >DITOLAK</span
            >
            <span
              class="group-[&.diterima]:flex hidden rounded-full py-[12px] w-[100px] justify-center bg-desa-dark-green text-white font-semibold text-xs leading-[15px] shrink-0"
              >DITERIMA</span
            >
          </div>
        </div>
        <div>
          <h3 class="font-semibold text-lg leading-[22.5px] line-clamp-1">
            Pembangunan Puskesmas Desa
          </h3>
          <div class="flex items-center gap-1">
            <p class="font-medium leading-5 text-desa-secondary">
              Penanggung jawab:
            </p>
            <p
              class="font-semibold leading-5 text-desa-dark-green line-clamp-1"
            >
              Uzumaki Asep
            </p>
          </div>
        </div>
        <hr class="border-desa-background" />
        <div id="Tanggal-Pelaksanaan" class="flex items-center gap-[12px]">
          <div
            class="size-[48px] shrink-0 rounded-full bg-desa-foreshadow flex items-center justify-center"
          >
            <img
              src="@/assets/images/icons/calendar-2-dark-green.svg"
              alt="icon"
              class="size-6 shrink-0"
            />
          </div>
          <div class="flex flex-col gap-1">
            <p class="font-semibold leading-5 text-desa-dark-green">
              3 Jan 2025
            </p>
            <h4
              class="font-medium text-sm leading-[17.5px] text-desa-secondary"
            >
              Tanggal Pelaksanaan
            </h4>
          </div>
        </div>
        <hr class="border-desa-background" />
        <div id="Tanggal-Pelaksanaan" class="flex items-center gap-[12px]">
          <div
            class="size-[48px] shrink-0 rounded-full bg-desa-foreshadow flex items-center justify-center"
          >
            <img
              src="@/assets/images/icons/timer-dark-green.svg"
              alt="icon"
              class="size-6 shrink-0"
            />
          </div>
          <div class="flex flex-col gap-1">
            <p class="font-semibold leading-5 text-desa-dark-green">24 Hari</p>
            <h4
              class="font-medium text-sm leading-[17.5px] text-desa-secondary"
            >
              Waktu Pelaksanaan
            </h4>
          </div>
        </div>
        <hr class="border-desa-background" />
        <a href="kk-pembangunan-desa-details.html">
          <div
            class="w-full p-[18px] rounded-2xl bg-desa-dark-green flex items-center justify-center text-white font-medium leading-5"
          >
            View Details
          </div>
        </a>
      </div>
      <div
        class="applicant rounded-2xl border border-desa-background p-6 flex flex-col gap-6"
      >
        <div class="flex items-center justify-between">
          <div
            class="flex items-center justify-center w-[100px] h-[80px] rounded-2xl overflow-hidden"
          >
            <img
              src="@/assets/images/thumbnails/kk-manage-applicant-3.png"
              alt="image"
              class="size-full object-cover"
            />
          </div>
          <div class="group ditolak">
            <span
              class="group-[&.menunggu]:flex hidden rounded-full py-[12px] w-[100px] justify-center bg-desa-yellow text-white font-semibold text-xs leading-[15px] shrink-0"
              >MENUNGGU</span
            >
            <span
              class="group-[&.ditolak]:flex hidden rounded-full py-[12px] w-[100px] justify-center bg-desa-red text-white font-semibold text-xs leading-[15px] shrink-0"
              >DITOLAK</span
            >
            <span
              class="group-[&.diterima]:flex hidden rounded-full py-[12px] w-[100px] justify-center bg-desa-dark-green text-white font-semibold text-xs leading-[15px] shrink-0"
              >DITERIMA</span
            >
          </div>
        </div>
        <div>
          <h3 class="font-semibold text-lg leading-[22.5px] line-clamp-1">
            Pembangunan Balai Desa
          </h3>
          <div class="flex items-center gap-1">
            <p class="font-medium leading-5 text-desa-secondary">
              Penanggung jawab:
            </p>
            <p
              class="font-semibold leading-5 text-desa-dark-green line-clamp-1"
            >
              Uzumaki Asep
            </p>
          </div>
        </div>
        <hr class="border-desa-background" />
        <div id="Tanggal-Pelaksanaan" class="flex items-center gap-[12px]">
          <div
            class="size-[48px] shrink-0 rounded-full bg-desa-foreshadow flex items-center justify-center"
          >
            <img
              src="@/assets/images/icons/calendar-2-dark-green.svg"
              alt="icon"
              class="size-6 shrink-0"
            />
          </div>
          <div class="flex flex-col gap-1">
            <p class="font-semibold leading-5 text-desa-dark-green">
              3 Jan 2025
            </p>
            <h4
              class="font-medium text-sm leading-[17.5px] text-desa-secondary"
            >
              Tanggal Pelaksanaan
            </h4>
          </div>
        </div>
        <hr class="border-desa-background" />
        <div id="Tanggal-Pelaksanaan" class="flex items-center gap-[12px]">
          <div
            class="size-[48px] shrink-0 rounded-full bg-desa-foreshadow flex items-center justify-center"
          >
            <img
              src="@/assets/images/icons/timer-dark-green.svg"
              alt="icon"
              class="size-6 shrink-0"
            />
          </div>
          <div class="flex flex-col gap-1">
            <p class="font-semibold leading-5 text-desa-dark-green">24 Hari</p>
            <h4
              class="font-medium text-sm leading-[17.5px] text-desa-secondary"
            >
              Waktu Pelaksanaan
            </h4>
          </div>
        </div>
        <hr class="border-desa-background" />
        <a href="kk-pembangunan-desa-details.html">
          <div
            class="w-full p-[18px] rounded-2xl bg-desa-dark-green flex items-center justify-center text-white font-medium leading-5"
          >
            View Details
          </div>
        </a>
      </div>
    </div>
  </div>

  <ModalDelete
    :loading="loading"
    :show="showModalDelete"
    title="anggota Keluarga"
    @close="showModalDelete = false"
    @confirm="handleDelete"
  />
</template>

<script setup>
import ModalDelete from "@/components/ui/ModalDelete.vue";
import { calculateAge } from "@/helpers/format";
import router from "@/router";
import { useFamilyMemberStore } from "@/stores/familyMember";

import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const showModalDelete = ref(false);
const familyMemberStore = useFamilyMemberStore();
const { deleteFamilyMember, fetchFamilyMember } = familyMemberStore;
const { loading, success, error } = storeToRefs(familyMemberStore);
const route = useRoute();

const payload = ref({});

const handleDelete = async () => {
  await deleteFamilyMember(route.params.id);

  router.push({ name: "family-member" });
};

const loadData = async () => {
  const res = await fetchFamilyMember(route.params.id);
  payload.value = res;
};

onMounted(() => {
  loadData();

  setTimeout(() => {
    success.value = null;
  }, 2500);
});
</script>

<style lang="scss" scoped></style>
