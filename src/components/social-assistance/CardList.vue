<template>
  <div class="card flex flex-col gap-6 rounded-3xl p-6 bg-white">
    <div class="flex items-center w-full">
      <div
        class="flex w-[100px] h-20 shrink-0 rounded-2xl overflow-hidden bg-desa-foreshadow"
      >
        <img
          :src="item.thumbnail"
          class="w-full h-full object-cover"
          alt="photo"
        />
      </div>
      <div class="flex flex-col gap-[6px] w-full ml-4 mr-9">
        <p class="font-semibold text-lg leading-[22.5px] line-clamp-1">
          {{ item.name }}
        </p>
        <p class="flex items-center gap-1">
          <img
            src="@/assets/images/icons/profile-secondary-green.svg"
            class="flex size-[18px] shrink-0"
            alt="icon"
          />
          <span class="font-medium text-sm text-desa-secondary">{{
            item.provider
          }}</span>
        </p>
      </div>
      <router-link
        :to="{ name: 'manage-social-assistance', params: { id: item.id } }"
        class="flex items-center shrink-0 gap-[10px] rounded-2xl py-4 px-6 bg-desa-black"
      >
        <span class="font-medium text-white" v-if="user?.role === 'admin'"
          >Manage</span
        >
        <span class="font-medium text-white" v-else>View Details</span>
      </router-link>
    </div>
    <hr class="border-desa-background" />
    <div class="grid grid-cols-3 gap-3">
      <div class="flex items-center gap-3">
        <div
          class="flex size-[52px] rounded-2xl items-center justify-center bg-desa-foreshadow overflow-hidden"
        >
          <img
            src="@/assets/images/icons/money-dark-green.svg"
            class="flex size-6 shrink-0"
            alt="icon"
          />
        </div>
        <div class="flex flex-col gap-1">
          <p class="font-semibold text-lg leading-5 text-desa-dark-green">
            Rp {{ formatRupiah(item.amount) }}
          </p>
          <p class="font-medium text-sm text-desa-secondary">Uang Tunai</p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div
          class="flex size-[52px] rounded-2xl items-center justify-center bg-desa-blue/10 overflow-hidden"
        >
          <img
            src="@/assets/images/icons/profile-2user-blue.svg"
            class="flex size-6 shrink-0"
            alt="icon"
          />
        </div>
        <div class="flex flex-col gap-1">
          <p class="font-semibold text-lg leading-5 text-desa-blue">
            {{ item.social_assistance_recipients?.length }} Warga
          </p>
          <p class="font-medium text-sm text-desa-secondary">Total Pengajuan</p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div
          class="flex size-[52px] rounded-2xl items-center justify-center bg-desa-red/10 overflow-hidden"
        >
          <img
            v-if="!item.is_active"
            src="@/assets/images/icons/minus-square-red.svg"
            class="flex size-6 shrink-0"
            alt="icon"
          />
          <img
            v-else
            src="@/assets/images/icons/tick-square-dark-green.svg"
            class="flex size-6 shrink-0"
            alt="icon"
          />
        </div>
        <div class="flex flex-col gap-1">
          <p
            class="font-semibold text-lg leading-5"
            :class="{
              'text-desa-red': !item.is_active,
              'text-desa-soft-green': item.is_active,
            }"
          >
            {{ item.is_active ? "Tersedia" : "Tidak Tersedia" }}
          </p>
          <p class="font-medium text-sm text-desa-secondary">Status Bansos</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { formatRupiah } from "@/helpers/format";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const { user } = authStore;

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
