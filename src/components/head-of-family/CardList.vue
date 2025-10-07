<template>
  <div class="card flex items-center justify-between rounded-3xl p-6 bg-white">
    <div class="flex items-center gap-3 w-[260px]">
      <div
        class="flex size-16 shrink-0 rounded-full overflow-hidden bg-desa-foreshadow"
      >
        <img
          :src="item.profile_picture"
          class="w-full h-full object-cover"
          alt="photo"
        />
      </div>
      <div class="flex flex-col gap-[6px]">
        <p class="font-semibold text-lg leading-[22.5px] w-[184px] truncate">
          {{ item.user?.name }}
        </p>
        <p class="flex items-center gap-1">
          <img
            src="@/assets/images/icons/briefcase-secondary-green.svg"
            class="flex size-[18px] shrink-0"
            alt="icon"
          />
          <span class="font-medium text-sm text-desa-secondary">{{
            item.occupation
          }}</span>
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-1 w-[180px] shrink-0">
      <p class="flex items-center gap-1">
        <img
          src="@/assets/images/icons/keyboard-secondary-green.svg"
          class="flex size-[18px] shrink-0"
          alt="icon"
        />
        <span class="font-medium text-sm text-desa-secondary">NIK</span>
      </p>
      <p class="font-semibold leading-5">{{ item.identity_number }}</p>
    </div>
    <p
      class="flex items-center rounded-full w-[224px] shrink-0 py-[14px] px-4 gap-1 bg-desa-blue/10"
    >
      <img
        src="@/assets/images/icons/profile-2user-blue.svg"
        class="flex size-[18px] shrink-0"
        alt="icon"
      />
      <span class="font-medium text-desa-blue"
        >{{ item.family_members.length }} Anggota Keluarga</span
      >
    </p>
    <router-link
      :to="{ name: 'manage-head-of-family', params: { id: item.id } }"
      class="flex items-center shrink-0 gap-[10px] rounded-2xl py-4 px-6 bg-desa-black"
    >
      <span class="font-medium text-white">Manage</span>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
