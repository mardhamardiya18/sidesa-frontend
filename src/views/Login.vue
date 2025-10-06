<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex items-center flex-1 pl-[calc(((100%-1280px)/2)+75px)]"
  >
    <div
      class="flex flex-col h-fit w-[486px] shrink-0 rounded-3xl p-[32px] gap-[32px] bg-white"
    >
      <header class="flex flex-col gap-[32px] items-center">
        <img
          src="@/assets/images/logos/logo-text.svg"
          alt="icon"
          class="shrink-0 h-[38px] w-[197px]"
        />
        <div class="flex flex-col gap-2">
          <h1 class="font-semibold text-[24px] leading-[30px] text-center">
            Halo🙌🏻 , Selamat Datang!
          </h1>
          <p class="font-medium leading-5 text-desa-secondary text-center">
            Silahkan masuk untuk melanjutkan
          </p>
        </div>
      </header>
      <section id="Select" class="grid grid-cols-2 gap-6">
        <div
          class="group relative flex items-center justify-between p-5 rounded-2xl bg-white ring-[1px] ring-desa-background hover:bg-desa-foreshadow has-[:checked]:bg-desa-foreshadow has-[:checked]:ring-desa-dark-green transition-all duration-300"
        >
          <input
            id="Kepala-Desa"
            required
            type="radio"
            name="role"
            class="peer absolute left-0 right-0 top-0 bottom-0 z-50 opacity-0"
          />
          <p
            class="font-medium leading-5 text-desa-secondary group-hover:text-desa-dark-green group-has-[:checked]:text-desa-dark-green transition-all duration-300"
          >
            Kepala Desa
          </p>
          <div class="relative">
            <img
              src="@/assets/images/icons/crown-secondary-green.svg"
              alt="icon"
              class="shrink-0 h-[24px] w-[24px] group-hover:opacity-0 group-has-[:checked]:opacity-0 absolute transition-all duration-300"
            />
            <img
              src="@/assets/images/icons/crown-dark-green.svg"
              alt="icon"
              class="shrink-0 h-[24px] w-[24px] group-hover:opacity-100 group-has-[:checked]:opacity-100 opacity-0 transition-all duration-300"
            />
          </div>
        </div>
        <div
          class="group relative flex items-center justify-between p-5 rounded-2xl bg-white ring-[1px] ring-desa-background hover:bg-desa-foreshadow has-[:checked]:bg-desa-foreshadow has-[:checked]:ring-desa-dark-green transition-all duration-300"
        >
          <input
            id="Kepala-Rumah"
            required
            type="radio"
            name="role"
            class="peer absolute left-0 right-0 top-0 bottom-0 z-50 opacity-0"
          />
          <p
            class="font-medium leading-5 text-desa-secondary group-hover:text-desa-dark-green group-has-[:checked]:text-desa-dark-green transition-all duration-300"
          >
            Kepala Rumah
          </p>
          <div class="relative">
            <img
              src="@/assets/images/icons/profile-circle-secondary-green.svg"
              alt="icon"
              class="shrink-0 h-[24px] w-[24px] group-hover:opacity-0 group-has-[:checked]:opacity-0 absolute transition-all duration-300"
            />
            <img
              src="@/assets/images/icons/profile-circle-dark-green.svg"
              alt="icon"
              class="shrink-0 h-[24px] w-[24px] group-hover:opacity-100 group-has-[:checked]:opacity-100 opacity-0 transition-all duration-300"
            />
          </div>
        </div>
      </section>
      <section id="Inputs" class="flex flex-col gap-[32px]">
        <div id="Email-Address" class="flex flex-col gap-4">
          <h2 class="font-medium leading-5 text-desa-secondary">
            Email Address
          </h2>
          <Input
            v-model="form.email"
            type="email"
            placeholder="Ketik email kamu"
            :error-message="error?.email"
            :icon="IconProfileSecendoryGreen"
            :filled-icon="IconProfileBlack"
          />
        </div>
        <div id="Password" class="flex flex-col gap-4">
          <h2 class="font-medium leading-5 text-desa-secondary">Password</h2>
          <Input
            v-model="form.password"
            type="password"
            placeholder="Ketik password kamu"
            :error-message="error?.password"
            :icon="IconKeySecondaryGreen"
            :filled-icon="IconKeyBlack"
          />
        </div>
      </section>
      <Button type="submit" label="Masuk" :loading="loading" />
    </div>
  </form>
  <section id="Banner" class="relative flex w-full max-w-[634px]">
    <div
      class="fixed top-0 h-screen w-full max-w-[634px] overflow-hidden pr-3 py-3"
    >
      <div
        class="h-full w-[622px] rounded-3xl gradient-vertical pt-[59px] pb-[60px]"
      >
        <img
          src="@/assets/images/backgrounds/bg-signin.png"
          class="h-full w-[542px] object-contain mx-auto"
          alt="banner"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import IconProfileSecendoryGreen from "@/assets/images/icons/user-secondary-green.svg";
import IconProfileBlack from "@/assets/images/icons/user-black.svg";
import IconKeySecondaryGreen from "@/assets/images/icons/key-secondary-green.svg";
import IconKeyBlack from "@/assets/images/icons/key-black.svg";
import Input from "@/components/ui/Input.vue";
import Button from "@/components/ui/Button.vue";

const authStore = useAuthStore();
const { loading, error } = storeToRefs(authStore);
const { login } = authStore;

const form = ref({
  email: "",
  password: "",
});

const handleSubmit = async () => {
  await login(form.value);

  if (error.value === "Unauthorized") {
    form.value.password = null;
    alert("Email atau password salah");
  }
};
</script>

<style lang="scss" scoped></style>
