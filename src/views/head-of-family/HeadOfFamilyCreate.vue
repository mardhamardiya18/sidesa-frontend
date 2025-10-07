<template>
  <div id="Header" class="flex items-center justify-between">
    <div class="flex flex-col gap-2">
      <div class="flex gap-1 items-center leading-5 text-desa-secondary">
        <p
          class="last-of-type:text-desa-dark-green last-of-type:font-semibold capitalize"
        >
          Kepala Rumah
        </p>
        <span>/</span>
        <p
          class="last-of-type:text-desa-dark-green last-of-type:font-semibold capitalize"
        >
          Tambah Kepala Rumah
        </p>
      </div>
      <h1 class="font-semibold text-2xl">Tambah Kepala Rumah Baru</h1>
    </div>
  </div>
  <form @submit.prevent="handleCreate" id="myForm" class="capitalize">
    <div class="shrink-0 rounded-3xl p-6 bg-white flex flex-col gap-6 h-fit">
      <section id="Photo-Profile" class="flex items-center justify-between">
        <h2
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Profile Kepala Rumah
        </h2>
        <div class="flex-1 flex items-center justify-between">
          <div
            id="Photo-Preview"
            class="flex itce justify-center size-[100px] rounded-full overflow-hidden bg-desa-foreshadow"
          >
            <img
              id="Photo"
              :src="payload.profile_picture_url"
              alt="image"
              class="size-full object-cover"
            />
          </div>
          <div class="relative">
            <input
              required
              id="File"
              type="file"
              name="file"
              class="absolute opacity-0 left-0 w-full top-0 h-full"
              @change="handleImageChange"
              ref="profile_picture"
            />
            <button
              id="Upload"
              type="button"
              class="relative flex items-center py-4 px-6 rounded-2xl bg-desa-black gap-[10px]"
              @click="$refs.profile_picture.click()"
            >
              <img
                src="@/assets/images/icons/send-square-white.svg"
                alt="icon"
                class="size-6 shrink-0"
              />
              <p class="font-medium leading-5 text-white">Upload</p>
            </button>
          </div>
        </div>
      </section>
      <hr class="border-desa-background" />
      <section id="Nama-Kepala-Rumah" class="flex items-center justify-between">
        <p
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Nama Kepala Rumah
        </p>
        <div class="flex flex-col gap-3 flex-1 shrink-0">
          <Input
            v-model="payload.name"
            type="text"
            placeholder="Ketik nama kamu"
            :error-message="error?.name"
            :icon="IconProfileSecondaryGreen"
            :filled-icon="IconProfileBlack"
          />
        </div>
      </section>
      <hr class="border-desa-background" />
      <section id="NIK" class="flex items-center justify-between">
        <p
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Nomor Induk Kependudukan
        </p>
        <div class="flex flex-col gap-3 flex-1 shrink-0">
          <Input
            v-model="payload.identity_number"
            type="number"
            placeholder="Ketik nomor identitas"
            :error-message="error?.identity_number"
            :icon="IconKeyboardSecondaruGreen"
            :filled-icon="IconKeyboardBlack"
          />
        </div>
      </section>
      <hr class="border-desa-background" />
      <section id="Phone" class="flex items-center justify-between">
        <p
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Nomor Handphone
        </p>
        <div class="flex flex-col gap-3 flex-1 shrink-0">
          <Input
            v-model="payload.phone_number"
            type="number"
            placeholder="Ketik nomor handphone"
            :error-message="error?.phone_number"
            :icon="IconCallSecondaryGreen"
            :filled-icon="IconCallBlack"
          />
        </div>
      </section>
      <hr class="border-desa-background" />
      <section id="Pekerjaan" class="flex items-center justify-between">
        <p
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Pekerjaan
        </p>
        <div class="flex flex-col gap-3 flex-1 shrink-0">
          <Input
            v-model="payload.occupation"
            type="text"
            placeholder="Ketik pekerjaan"
            :error-message="error?.occupation"
            :icon="IconBriefcaseSecondaryGreen"
            :filled-icon="IconBriefcaseBlack"
          />
        </div>
      </section>
      <hr class="border-desa-background" />
      <section id="Tanggal-Lahir" class="flex items-center justify-between">
        <p
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Tanggal Lahir
        </p>
        <div class="flex items-center gap-6 flex-1 shrink-0">
          <label class="relative group peer w-full valid">
            <Input
              v-model="payload.date_of_birth"
              type="date"
              placeholder="Pilih tanggal lahir"
              :error-message="error?.date_of_birth"
              :icon="IconCalendarSecondaryGreen"
              :filled-icon="IconCalendarBlack"
            />
          </label>
          <div
            class="w-[180px] flex shrink-0 h-[52px] rounded-2xl bg-desa-foreshadow p-4 font-medium leading-5 text-desa-dark-green justify-center"
          >
            <p>
              Umur: <span id="Age">{{ payload.age }}</span> tahun
            </p>
          </div>
        </div>
      </section>
      <hr class="border-desa-background" />
      <section id="Jenis-Kelamin" class="flex items-center justify-between">
        <p
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Jenis Kelamin
        </p>
        <div class="flex flex-1 gap-6 shrink-0">
          <label
            class="group flex w-full items-center h-14 rounded-2xl p-4 ring-[1.5px] ring-desa-background gap-2 has-[:checked]:ring-desa-dark-green transition-setup"
          >
            <input
              v-model="payload.gender"
              value="male"
              type="radio"
              name="gender"
              id=""
              class="flex size-[18px] shrink-0 accent-desa-secondary checked:accent-desa-dark-green transition-setup"
            />
            <span
              class="font-medium leading-5 text-desa-secondary w-full group-has-[:checked]:text-desa-dark-green transition-setup"
            >
              Pria
            </span>
            <div class="flex size-6 shrink-0">
              <img
                src="@/assets/images/icons/man-secondary-green.svg"
                class="size-6 flex group-has-[:checked]:hidden"
                alt="icon"
              />
              <img
                src="@/assets/images/icons/man-dark-green.svg"
                class="size-6 hidden group-has-[:checked]:flex"
                alt="icon"
              />
            </div>
          </label>
          <label
            class="group flex w-full items-center h-14 rounded-2xl p-4 ring-[1.5px] ring-desa-background gap-2 has-[:checked]:ring-desa-dark-green transition-setup"
          >
            <input
              v-model="payload.gender"
              value="female"
              type="radio"
              name="gender"
              id=""
              class="flex size-[18px] shrink-0 accent-desa-secondary checked:accent-desa-dark-green transition-setup"
            />
            <span
              class="font-medium leading-5 text-desa-secondary w-full group-has-[:checked]:text-desa-dark-green transition-setup"
            >
              Wanita
            </span>
            <div class="flex size-6 shrink-0">
              <img
                src="@/assets/images/icons/woman-secondary-green.svg"
                class="size-6 flex group-has-[:checked]:hidden"
                alt="icon"
              />
              <img
                src="@/assets/images/icons/woman-dark-green.svg"
                class="size-6 hidden group-has-[:checked]:flex"
                alt="icon"
              />
            </div>
          </label>
        </div>
      </section>
      <hr class="border-desa-background" />
      <section id="Status" class="flex items-center justify-between">
        <p
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Status
        </p>
        <div class="flex flex-1 gap-6 shrink-0">
          <label
            class="group flex w-full items-center h-14 rounded-2xl p-4 ring-[1.5px] ring-desa-background gap-2 has-[:checked]:ring-desa-dark-green transition-setup"
          >
            <input
              v-model="payload.marital_status"
              value="single"
              type="radio"
              name="status"
              id=""
              class="flex size-[18px] shrink-0 accent-desa-secondary checked:accent-desa-dark-green transition-setup"
            />
            <span
              class="font-medium leading-5 text-desa-secondary w-full group-has-[:checked]:text-desa-dark-green transition-setup"
            >
              Belum Menikah
            </span>
            <div class="flex size-6 shrink-0">
              <img
                src="@/assets/images/icons/profile-secondary-green.svg"
                class="size-6 flex group-has-[:checked]:hidden"
                alt="icon"
              />
              <img
                src="@/assets/images/icons/profile-dark-green.svg"
                class="size-6 hidden group-has-[:checked]:flex"
                alt="icon"
              />
            </div>
          </label>
          <label
            class="group flex w-full items-center h-14 rounded-2xl p-4 ring-[1.5px] ring-desa-background gap-2 has-[:checked]:ring-desa-dark-green transition-setup"
          >
            <input
              v-model="payload.marital_status"
              value="married"
              type="radio"
              name="status"
              id=""
              class="flex size-[18px] shrink-0 accent-desa-secondary checked:accent-desa-dark-green transition-setup"
            />
            <span
              class="font-medium leading-5 text-desa-secondary w-full group-has-[:checked]:text-desa-dark-green transition-setup"
            >
              Sudah Menikah
            </span>
            <div class="flex size-6 shrink-0">
              <img
                src="@/assets/images/icons/profile-2user-secondary-green.svg"
                class="size-6 flex group-has-[:checked]:hidden"
                alt="icon"
              />
              <img
                src="@/assets/images/icons/profile-2user-dark-green.svg"
                class="size-6 hidden group-has-[:checked]:flex"
                alt="icon"
              />
            </div>
          </label>
        </div>
      </section>
      <hr class="border-desa-background w-[calc(100%+48px)] -mx-6" />
      <p class="font-medium leading-5">Akun Dashboard</p>
      <section id="Email" class="flex items-center justify-between">
        <p
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Email Address
        </p>
        <div class="flex flex-col gap-3 flex-1 shrink-0">
          <Input
            v-model="payload.email"
            type="email"
            placeholder="Ketik email valid"
            :error-message="error?.email"
            :icon="IconSmsSecondaryGreen"
            :filled-icon="IconSmsBlack"
          />
        </div>
      </section>
      <hr class="border-desa-background" />
      <section id="Passwords" class="flex items-center justify-between">
        <p
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Passwords
        </p>
        <div class="flex flex-col gap-3 flex-1 shrink-0">
          <Input
            v-model="payload.password"
            type="password"
            placeholder="Ketik password"
            :error-message="error?.password"
            :icon="IconKeySecondaryGreen"
            :filled-icon="IconKeyBlack"
          />
        </div>
      </section>
      <hr class="border-desa-background" />
      <section id="Buttons" class="flex items-center justify-end gap-4">
        <router-link :to="{ name: 'head-of-family' }">
          <div
            class="py-[18px] rounded-2xl bg-desa-red w-[180px] text-center flex justify-center font-medium text-white"
          >
            Batal, Tidak jadi
          </div>
        </router-link>
        <button
          :disabled="loading"
          id="submitButton"
          type="submit"
          class="py-[18px] rounded-2xl disabled:bg-desa-grey w-[180px] text-center flex justify-center font-medium text-white bg-desa-dark-green transition-all duration-300"
        >
          <span v-if="!loading">Create Now</span>
          <span v-else>Loading...</span>
        </button>
      </section>
    </div>
  </form>
</template>

<script setup>
import { useHeadOfFamilyStore } from "@/stores/HeadOfFamily";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import IconProfileSecondaryGreen from "@/assets/images/icons/user-secondary-green.svg";
import IconProfileBlack from "@/assets/images/icons/user-black.svg";
import IconKeyboardSecondaruGreen from "@/assets/images/icons/keyboard-secondary-green.svg";
import IconKeyboardBlack from "@/assets/images/icons/keyboard-black.svg";
import IconCallSecondaryGreen from "@/assets/images/icons/call-secondary-green.svg";
import IconCallBlack from "@/assets/images/icons/call-black.svg";
import IconBriefcaseSecondaryGreen from "@/assets/images/icons/briefcase-secondary-green.svg";
import IconBriefcaseBlack from "@/assets/images/icons/briefcase-black.svg";
import IconCalendarSecondaryGreen from "@/assets/images/icons/calendar-2-secondary-green.svg";
import IconCalendarBlack from "@/assets/images/icons/calendar-2-black.svg";
import IconSmsSecondaryGreen from "@/assets/images/icons/sms-secondary-green.svg";
import IconSmsBlack from "@/assets/images/icons/sms-black.svg";
import IconKeySecondaryGreen from "@/assets/images/icons/key-secondary-green.svg";
import IconKeyBlack from "@/assets/images/icons/key-black.svg";
import Input from "@/components/ui/Input.vue";

const headOfFamilyStore = useHeadOfFamilyStore();

const { createHeadOfFamily } = headOfFamilyStore;
const { loading, error } = storeToRefs(headOfFamilyStore);

const payload = ref({
  name: "",
  email: "",
  password: "",
  profile_picture: null,
  profile_picture_url: null,
  identity_number: "",
  gender: "",
  date_of_birth: null,
  age: 0,
  phone_number: "",
  occupation: "",
  marital_status: "",
});

const handleCreate = async () => {
  await createHeadOfFamily(payload.value);
};

const handleImageChange = (event) => {
  const file = event.target.files[0];
  payload.value.profile_picture = file;
  payload.value.profile_picture_url = URL.createObjectURL(file);
};

const calculateAge = (dateString) => {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

watch(
  () => payload.value.date_of_birth,
  (newDate) => {
    payload.value.age = calculateAge(newDate);
  }
);
</script>

<style lang="scss" scoped></style>
