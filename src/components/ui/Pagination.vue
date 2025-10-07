<template>
  <nav id="Pagination">
    <ul class="flex items-center gap-3">
      <li class="group">
        <a
          @click="serverOptions.page = meta.current_page - 1"
          :class="{ 'cursor-not-allowed': meta.current_page === 1 }"
          class="flex size-11 shrink-0 items-center justify-center rounded-full bg-desa-foreshadow bg-desa-foreshadow group-hover:bg-desa-dark-green transition-setup"
        >
          <img
            src="@/assets/images/icons/arrow-left-dark-green.svg"
            class="flex size-6 shrink-0 group-hover:hidden"
            alt="icon"
          />
          <img
            src="@/assets/images/icons/arrow-left-foreshadow.svg"
            class="hidden size-6 shrink-0 group-hover:flex"
            alt="icon"
          />
        </a>
      </li>
      <li
        v-for="page in meta.last_page"
        :key="page"
        :class="{ active: page === meta.current_page }"
        class="group"
      >
        <a
          @click="serverOptions.page = page"
          class="flex size-11 shrink-0 items-center justify-center rounded-full bg-desa-foreshadow group-hover:bg-desa-dark-green group-[.active]:bg-desa-dark-green transition-setup"
        >
          <span
            class="text-desa-dark-green font-semibold group-[.active]:text-desa-foreshadow group-hover:text-desa-foreshadow transition-setup"
          >
            {{ page }}
          </span>
        </a>
      </li>

      <li class="group">
        <a
          @click="serverOptions.page = meta.current_page + 1"
          :class="{
            'cursor-not-allowed': meta.current_page === meta.last_page,
          }"
          class="flex size-11 shrink-0 items-center justify-center rounded-full bg-desa-foreshadow disabled:!bg-desa-foreshadow group-hover:bg-desa-dark-green transition-setup"
        >
          <img
            src="@/assets/images/icons/arrow-left-dark-green.svg"
            class="flex size-6 shrink-0 rotate-180 group-hover:hidden"
            alt="icon"
          />
          <img
            src="@/assets/images/icons/arrow-left-foreshadow.svg"
            class="hidden size-6 shrink-0 rotate-180 group-hover:flex"
            alt="icon"
          />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
defineProps({
  meta: {
    type: Object,
    required: true,
  },
  serverOptions: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
