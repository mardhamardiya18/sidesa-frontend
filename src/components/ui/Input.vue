<template>
  <div class="flex flex-col gap-2">
    <div class="relative">
      <input
        :placeholder="placeholder"
        :type="type"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        type="email"
        class="peer w-full h-[56px] rounded-2xl pl-[48px] pr-4 border-[1.5px] border-desa-background font-medium leading-5 focus:ring-[1.5px] focus:ring-desa-dark-green focus:outline-none placeholder:leading-5 placeholder:text-desa-secondary placeholder:font-medium transition-all duration-300"
        :class="{ 'border-red-500': errorMessage }"
      />
      <img
        :src="icon"
        alt="icon"
        class="absolute shrink-0 size-6 top-1/2 left-4 -translate-y-1/2 opacity-0 peer-placeholder-shown:opacity-100 transition-all duration-300"
      />
      <img
        :src="filledIcon"
        alt="icon"
        class="absolute shrink-0 size-6 top-1/2 left-4 -translate-y-1/2 opacity-100 peer-placeholder-shown:opacity-0 transition-all duration-300"
      />
    </div>

    <span class="text-left text-[12px] text-red-700" v-if="errorMessage">
      {{ errorMessage[0] }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  errorMessage: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    required: true,
  },
  filledIcon: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped></style>
