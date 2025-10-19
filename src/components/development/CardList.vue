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
        <div class="flex items-center gap-1">
          <img
            src="@/assets/images/icons/user-square-secondary-green.svg"
            class="flex size-[18px] shrink-0"
            alt="icon"
          />
          <p class="font-medium text-sm text-desa-secondary">
            Penanggung Jawab:
            <span class="font-medium text-base text-desa-dark-green">
              {{ item.person_in_charge }}
            </span>
          </p>
        </div>
      </div>
      <router-link
        :to="{ name: 'manage-development', params: { id: item.id } }"
        class="flex items-center shrink-0 gap-[10px] rounded-2xl py-4 px-6 bg-desa-black"
      >
        <span class="font-medium text-white">Manage</span>
      </router-link>
    </div>
    <hr class="border-desa-background" />
    <div class="grid grid-cols-3 gap-3">
      <div class="flex items-center gap-3">
        <div
          class="flex size-[52px] rounded-2xl items-center justify-center bg-desa-red/10 overflow-hidden"
        >
          <img
            src="@/assets/images/icons/wallet-3-red.svg"
            class="flex size-6 shrink-0"
            alt="icon"
          />
        </div>
        <div class="flex flex-col gap-1">
          <p class="font-semibold text-lg leading-5 text-desa-red">
            Rp {{ formatRupiah(item.budget) }}
          </p>
          <p class="font-medium text-sm text-desa-secondary">
            Dana Pembangunan
          </p>
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
            {{
              item.development_applicants
                ? item.development_applicants.length
                : 0
            }}
            Warga
          </p>
          <p class="font-medium text-sm text-desa-secondary">Total Pelamar</p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div
          class="flex size-[52px] rounded-2xl items-center justify-center bg-desa-foreshadow overflow-hidden"
        >
          <img
            src="@/assets/images/icons/calendar-2-dark-green.svg"
            class="flex size-6 shrink-0"
            alt="icon"
          />
        </div>
        <div class="flex flex-col gap-1">
          <p class="font-semibold text-lg leading-5 text-desa-dark-green">
            {{ formatToClientTimezone(item.start_date) }}
          </p>
          <p class="font-medium text-sm text-desa-secondary">
            Tanggal Pelaksanaan
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { formatRupiah, formatToClientTimezone } from "@/helpers/format";

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
