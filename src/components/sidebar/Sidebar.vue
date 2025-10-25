<template>
  <aside
    id="Sidebar"
    class="relative flex w-[280px] shrink-0 min-h-screen bg-white border-r border-desa-foreshadow overflow-hidden"
  >
    <div
      class="fixed top-0 h-full w-[280px] flex shrink-0 flex-1 z-20 bg-white"
    >
      <div class="flex flex-col h-full w-full gap-6 pt-[30px] px-6">
        <div class="flex items-center justify-between">
          <img
            src="@/assets/images/logos/logo-text.svg"
            class="flex h-[30px] shrink-0"
            alt="logo"
          />
          <button
            class="flex size-11 items-center justify-center rounded-2xl border border-desa-background hover:border-desa-secondary transition-setup"
          >
            <img
              src="@/assets/images/icons/menu-secondary-green.svg"
              class="size-6"
              alt="icon"
            />
          </button>
        </div>
        <div
          class="flex flex-col flex-1 gap-6 overflow-y-scroll hide-scrollbar"
        >
          <nav class="flex flex-col gap-2 pb-12">
            <p class="font-medium text-sm text-desa-secondary">Main Menu</p>
            <ul>
              <SidebarItem
                v-for="(item, index) in filteredItems"
                :key="index"
                :item="item"
              />
            </ul>
          </nav>
          <div
            class="flex items-center justify-between h-[84px] rounded-2xl p-5 mb-4 gap-3 bg-desa-black"
          >
            <div class="flex flex-col gap-1">
              <p class="font-semibold leading-5 text-white">Beralih ke Pro</p>
              <a
                href="#"
                class="flex items-center font-medium text-sm hover:underline text-desa-soft-green"
              >
                Upgrade Plan
                <img
                  src="@/assets/images/icons/arrow-right-soft-green.png"
                  class="flex size-3 shrink-0 ml-0.5"
                  alt="icon"
                />
              </a>
            </div>
            <img
              src="@/assets/images/icons/crown-soft-green-background.svg"
              class="flex size-11 shrink-0"
              alt="icon"
            />
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import SidebarItem from "./SidebarItem.vue";
import iconChartActive from "@/assets/images/icons/chart-square-dark-green.svg";
import iconChartInActive from "@/assets/images/icons/chart-square-secondary-green.svg";
import iconCrownActive from "@/assets/images/icons/crown-dark-green.svg";
import iconCrownInActive from "@/assets/images/icons/crown-secondary-green.svg";
import iconBagActive from "@/assets/images/icons/bag-2-dark-green.svg";
import iconBagInActive from "@/assets/images/icons/bag-2-secondary-green.svg";
import iconBuilding4Active from "@/assets/images/icons/building-4-dark-green.svg";
import iconBuilding4InActive from "@/assets/images/icons/building-4-secondary-green.svg";
import { computed } from "vue";
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";

// --- Akses User Role ---
const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

const items = [
  {
    label: "Dashboard",
    path: "/",
    iconActive: iconChartActive,
    iconInActive: iconChartInActive,
    permissions: "dashboard-menu",
  },
  {
    label: "Anggota Keluarga",
    path: "/family-member",
    iconActive: iconCrownActive,
    iconInActive: iconCrownInActive,
  },
  {
    label: "Kepala Rumah",
    path: "/head-of-family",
    iconActive: iconCrownActive,
    iconInActive: iconCrownInActive,
    permission: "head-of-family-menu",
  },
  {
    label: "Bantuan Sosial",
    path: "",
    iconActive: iconBagActive,
    iconInActive: iconBagInActive,
    children: [
      {
        label: "List Bansos",
        path: "/social-assistance",
        permissions: "social-assistance-menu",
      },
      {
        label: "Pengajuan Bansos",
        path: "/social-assistance-recipient",
        permissions: "social-assistance-recipient-menu",
      },
    ],
  },
  {
    label: "Jadwal Desa",
    path: "",
    iconActive: iconBagActive,
    iconInActive: iconBagInActive,
    children: [
      {
        label: "Pembangunan",
        path: "/development",
        permissions: "development-menu",
      },
      {
        label: "Event Desa",
        path: "/event",
        permissions: "event-menu",
      },
    ],
  },
  {
    label: "Profile",
    path: "/Profile",
    iconActive: iconBuilding4Active,
    iconInActive: iconBuilding4InActive,
  },
];

const filteredItems = computed(() => {
  // Pastikan user.value ada dan user.value.role tidak null
  const role = user.value?.role;

  // Jika role adalah 'head-of-family', filter item 'Kepala Rumah'
  if (role === "head-of-family") {
    return items.filter((item) => item.label !== "Kepala Rumah");
  } else if (role === "admin") {
    return items.filter((item) => item.label !== "Anggota Keluarga");
  }

  // Untuk role lain (misalnya 'admin'), kembalikan semua item
  return items;
});
</script>

<style lang="scss" scoped></style>
