<template>
  <div class="flex flex-1">
    <Sidebar />

    <div id="Main-Container" class="flex flex-col flex-1">
      <Topbar />

      <div
        id="Content"
        class="relative flex flex-col flex-1 gap-[14px] p-6 pb-[30px] w-full shrink-0"
      >
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/sidebar/Sidebar.vue";
import Topbar from "@/components/Topbar.vue";
</script>

<style lang="scss" scoped></style>
