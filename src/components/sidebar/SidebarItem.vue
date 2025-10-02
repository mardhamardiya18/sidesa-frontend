<template>
  <li class="group" :class="{ active: isActive }" v-if="!item.children">
    <RouterLink
      :to="item.path"
      class="flex items-center h-14 gap-2 rounded-2xl p-4 group-hover:bg-desa-foreshadow group-[.active]:bg-desa-foreshadow transition-setup"
    >
      <div
        class="relative flex size-6 shrink-0"
        v-if="item.iconActive && item.iconInActive"
      >
        <img
          :src="item.iconActive"
          class="absolute flex size-6 shrink-0 opacity-0 group-hover:opacity-100 group-[.active]:opacity-100 transition-setup"
          alt="icon"
        />
        <img
          :src="item.iconInActive"
          class="absolute flex size-6 shrink-0 opacity-100 group-hover:opacity-0 group-[.active]:opacity-0 transition-setup"
          alt="icon"
        />
      </div>
      <span
        class="text-left leading-5 text-desa-secondary flex flex-1 group-hover:text-desa-dark-green group-[.active]:text-desa-dark-green group-[.active]:font-medium transition-setup"
      >
        {{ item.label }}
      </span>
    </RouterLink>
  </li>

  <template v-if="item.children">
    <div class="accordion group/accordion flex flex-col gap-1 w-full">
      <button
        :data-expand="`accordion-${item.label}`"
        class="group flex w-full shrink-0 items-center h-14 gap-2 rounded-2xl p-4 active"
        @click="isOPen = !isOPen"
      >
        <div class="relative flex size-6 shrink-0">
          <img
            :src="item.iconActive"
            class="absolute flex size-6 shrink-0 opacity-0 group-[.active]:opacity-100 transition-setup"
            alt="icon"
          />
          <img
            :src="item.icon.iconInActive"
            class="absolute flex size-6 shrink-0 opacity-100 group-[.active]:opacity-0 transition-setup"
            alt="icon"
          />
        </div>
        <span
          class="text-left leading-5 text-desa-secondary flex flex-1 group-[.active]:text-desa-dark-green transition-setup"
        >
          {{ item.label }}
        </span>
        <div class="relative flex size-6 shrink-0">
          <img
            src="@/assets/images/icons/arrow-circle-dark-green-up.svg"
            class="absolute flex size-6 shrink-0 opacity-0 group-[.active]:opacity-100 transition-setup"
            alt="icon"
            v-if="isOPen"
          />
          <img
            src="@/assets/images/icons/arrow-circle-secondary-green-down.svg"
            class="absolute flex size-6 shrink-0 opacity-100 group-[.active]:opacity-0 transition-setup"
            alt="icon"
            v-else
          />
        </div>
      </button>
      <ul
        :id="`accordion-${item.label}`"
        class="flex flex-col flex-1r pl-[28px]"
        :class="{ hidden: !isOPen }"
      >
        <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :item="child"
        />
      </ul>
    </div>
  </template>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const route = useRoute();
const isActive = computed(() => route.path === props.item.path);

const isChildActive = computed(() => {
  if (props.item.children) {
    return props.item.children.some((child) => route.path === child.path);
  }

  return false;
});

const isOPen = ref(isChildActive.value);

watch(isChildActive, () => {
  isOPen.value = isChildActive.value;
});
</script>

<style lang="scss" scoped></style>
