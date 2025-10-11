<template>
  <div class="card flex flex-col gap-4 rounded-3xl p-6 bg-white">
    <div class="flex items-center justify-between">
      <p class="flex items-center gap-1">
        <img
          src="@/assets/images/icons/calendar-2-secondary-green.svg"
          class="flex size-[18px] shrink-0"
          alt="icon"
        />
        <span class="font-medium text-sm text-desa-secondary">{{
          formatToClientTimezone(item.created_at)
        }}</span>
      </p>
      <div
        class="badge rounded-full p-3 gap-2 flex w-[100px] justify-center shrink-0"
        :class="{
          'bg-desa-red': item.status === 'pending',
          'bg-desa-soft-green': item.status === 'approved',
          'bg-desa-black': item.status === 'rejected',
        }"
      >
        <span class="font-semibold text-xs text-white uppercase">{{
          item.status === "pending"
            ? "Menunggu"
            : item.status === "approved"
            ? "disetujui"
            : item.status === "rejected"
            ? "ditolak"
            : "unknown"
        }}</span>
      </div>
    </div>
    <hr class="border-desa-background" />
    <div class="flex items-center w-full">
      <div
        class="flex w-[100px] h-20 shrink-0 rounded-2xl overflow-hidden bg-desa-foreshadow"
      >
        <img
          :src="item.social_assistance?.thumbnail"
          class="w-full h-full object-cover"
          alt="photo"
        />
      </div>
      <div class="flex flex-col gap-[6px] w-full ml-4 mr-9">
        <p class="font-semibold text-lg leading-[22.5px] line-clamp-1">
          {{ item.social_assistance.name }}
        </p>
        <p class="flex items-center gap-1">
          <img
            src="@/assets/images/icons/profile-secondary-green.svg"
            class="flex size-[18px] shrink-0"
            alt="icon"
          />
          <span class="font-medium text-sm text-desa-secondary">{{
            item.social_assistance?.provider
          }}</span>
        </p>
      </div>
      <div class="flex items-center gap-3">
        <div class="flex flex-col gap-1 text-right">
          <p
            class="font-semibold text-lg leading-5 text-desa-dark-green text-nowrap"
          >
            Rp {{ formatRupiah(item.social_assistance?.amount) }}
          </p>
          <p class="font-medium text-sm text-desa-secondary">Uang Tunai</p>
        </div>
        <div
          class="flex size-[52px] rounded-2xl items-center justify-center bg-desa-foreshadow overflow-hidden"
        >
          <img
            src="@/assets/images/icons/money-dark-green.svg"
            class="flex size-6 shrink-0"
            alt="icon"
          />
        </div>
      </div>
    </div>
    <hr class="border-desa-background" />
    <div class="flex items-center gap-6 justify-between">
      <div class="flex items-center gap-3 w-[302px] shrink-0">
        <div
          class="flex size-[54px] rounded-full bg-desa-foreshadow overflow-hidden"
        >
          <img
            :src="item.head_of_family?.profile_picture"
            class="w-full h-full object-cover"
            alt="icon"
          />
        </div>
        <div class="flex flex-col gap-1">
          <p class="font-semibold text-lg leading-5 text-desa-black">
            {{ item.head_of_family?.name }}
          </p>
          <p class="flex items-center gap-1">
            <img
              src="@/assets/images/icons/briefcase-secondary-green.svg"
              class="flex size-[18px] shrink-0"
              alt="icon"
            />
            <span class="font-medium text-sm text-desa-secondary">{{
              item.head_of_family?.occupation
            }}</span>
          </p>
        </div>
      </div>
      <div class="flex items-center gap-3 w-[302px] shrink-0">
        <div
          class="flex size-[52px] rounded-2xl items-center justify-center bg-desa-foreshadow overflow-hidden"
        >
          <img
            src="@/assets/images/icons/receive-square-2-dark-green.svg"
            class="flex size-6 shrink-0"
            alt="icon"
          />
        </div>
        <div class="flex flex-col gap-1">
          <p
            class="font-semibold text-lg leading-5 text-desa-dark-green text-nowrap"
          >
            Rp {{ formatRupiah(item.amount) }}
          </p>
          <p class="font-medium text-sm text-desa-secondary">
            Nominal Pengajuan
          </p>
        </div>
      </div>
      <div class="flex items-center gap-3 justify-end w-[252px] shrink-0">
        <router-link
          :to="{
            name: 'manage-social-assistance-recipient',
            params: { id: item.id },
          }"
          class="flex items-center shrink-0 gap-[10px] rounded-2xl py-4 px-6 bg-desa-black"
        >
          <span class="font-medium text-white">Manage</span>
        </router-link>
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
