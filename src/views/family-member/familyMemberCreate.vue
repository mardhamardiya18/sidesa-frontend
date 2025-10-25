<template>
  <header class="flex flex-col gap-2">
    <p class="flex items-center gap-1">
      <span class="leading-5 text-desa-secondary">Kepala Keluarga</span
      ><span class="font-medium leading-5 text-desa-dark-green">/</span
      ><span class="font-medium leading-5 text-desa-dark-green"
        >Tambah Anggota Keluarga</span
      >
    </p>
    <h1 class="font-semibold text-2xl leading-[30px]">
      Tambah Anggota Keluarga
    </h1>
  </header>
  <form @submit.prevent="handleCreate" id="myForm" class="capitalize">
    <div class="shrink-0 rounded-3xl p-6 bg-white flex flex-col gap-6 h-fit">
      <section id="Photo-Profile" class="flex items-center">
        <h2
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Photo Profile
        </h2>
        <div class="flex items-center justify-between flex-1">
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
      <section id="Jenis-Kelamin" class="flex items-center">
        <h2
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Jenis Kelamin
        </h2>
        <div class="flex-1 grid grid-cols-2 gap-6">
          <label
            class="relative group flex items-center justify-between rounded-2xl border border-desa-background p-4 hover:border-transparent hover:bg-desa-foreshadow has-[:checked]:bg-desa-foreshadow has-[:checked]:border-transparent transition-all duration-300"
          >
            <div class="flex items-center gap-2">
              <input
                v-model="payload.gender"
                value="male"
                required
                type="radio"
                name="gender"
                id="pria"
                class="flex size-[18px] shrink-0 accent-desa-dark-green"
              />
              <p class="w-full font-medium text-desa-secondary leading-5">
                Pria
              </p>
            </div>
            <img
              src="@/assets/images/icons/man-secondary-green.svg"
              class="flex size-6 shrink-0 group-has-[:checked]:hidden"
              alt="icon"
            />
            <img
              src="@/assets/images/icons/man-dark-green.svg"
              class="hidden size-6 shrink-0 group-has-[:checked]:flex"
              alt="icon"
            />
          </label>
          <label
            class="relative group flex items-center justify-between rounded-2xl border border-desa-background p-4 hover:border-transparent hover:bg-desa-foreshadow has-[:checked]:bg-desa-foreshadow has-[:checked]:border-transparent transition-all duration-300"
          >
            <div class="flex items-center gap-2">
              <input
                required
                v-model="payload.gender"
                value="female"
                type="radio"
                name="gender"
                id="wanita"
                class="flex size-[18px] shrink-0 accent-desa-dark-green"
              />
              <p class="w-full font-medium text-desa-secondary leading-5">
                Wanita
              </p>
            </div>
            <img
              src="@/assets/images/icons/woman-secondary-green.svg"
              class="flex size-6 shrink-0 group-has-[:checked]:hidden"
              alt="icon"
            />
            <img
              src="@/assets/images/icons/woman-dark-green.svg"
              class="hidden size-6 shrink-0 group-has-[:checked]:flex"
              alt="icon"
            />
          </label>
        </div>
      </section>
      <hr class="border-desa-background" />
      <section id="Nama-Keluarga" class="flex items-center">
        <h2
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Nama Keluarga
        </h2>
        <label class="flex-1 relative">
          <input
            required
            v-model="payload.name"
            type="text"
            placeholder="Masukan nama lengkap keluarga"
            class="peer w-full py-[18px] rounded-2xl border border-desa-background pl-[48px] pr-4 focus:outline-none bg-white font-medium leading-5 placeholder:text-desa-secondary placeholder:font-medium placeholder:leading-5 focus:ring-[1.5px] focus:ring-desa-dark-green transition-all duration-300"
          />
          <img
            src="@/assets/images/icons/user-secondary-green.svg"
            alt="icon"
            class="peer-placeholder-shown:block hidden size-6 shrink-0 absolute left-4 top-1/2 -translate-y-1/2"
          />
          <img
            src="@/assets/images/icons/user-black.svg"
            alt="icon"
            class="peer-placeholder-shown:hidden size-6 shrink-0 absolute left-4 top-1/2 -translate-y-1/2"
          />
        </label>
      </section>
      <hr class="border-desa-background" />
      <section id="Nomor-Induk-Kependudukan" class="flex items-center">
        <h2
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Nomor Induk Kependudukan
        </h2>
        <label class="flex-1 relative">
          <input
            v-model="payload.identity_number"
            required
            type="number"
            placeholder="Ketik NIK"
            class="peer w-full py-[18px] rounded-2xl border border-desa-background pl-[48px] pr-4 focus:outline-none bg-white font-medium leading-5 placeholder:text-desa-secondary placeholder:font-medium placeholder:leading-5 focus:ring-[1.5px] focus:ring-desa-dark-green transition-all duration-300"
          />
          <img
            src="@/assets/images/icons/keyboard-secondary-green.svg"
            alt="icon"
            class="peer-placeholder-shown:block hidden size-6 shrink-0 absolute left-4 top-1/2 -translate-y-1/2"
          />
          <img
            src="@/assets/images/icons/keyboard-black.svg"
            alt="icon"
            class="peer-placeholder-shown:hidden size-6 shrink-0 absolute left-4 top-1/2 -translate-y-1/2"
          />
        </label>
      </section>
      <hr class="border-desa-background" />
      <section id="Pekerjaan" class="flex items-center">
        <h2
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Pekerjaan
        </h2>
        <label class="flex-1 relative">
          <input
            required
            v-model="payload.occupation"
            type="text"
            placeholder="Masukan nama pekerjaan"
            class="peer w-full py-[18px] rounded-2xl border border-desa-background pl-[48px] pr-4 focus:outline-none bg-white font-medium leading-5 placeholder:text-desa-secondary placeholder:font-medium placeholder:leading-5 focus:ring-[1.5px] focus:ring-desa-dark-green transition-all duration-300"
          />
          <img
            src="@/assets/images/icons/briefcase-secondary-green.svg"
            alt="icon"
            class="peer-placeholder-shown:block hidden size-6 shrink-0 absolute left-4 top-1/2 -translate-y-1/2"
          />
          <img
            src="@/assets/images/icons/briefcase-black.svg"
            alt="icon"
            class="peer-placeholder-shown:hidden size-6 shrink-0 absolute left-4 top-1/2 -translate-y-1/2"
          />
        </label>
      </section>
      <hr class="border-desa-background" />
      <section id="Tanggal-Lahir" class="flex items-center">
        <p
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Tanggal Lahir
        </p>
        <div class="flex items-center gap-6 flex-1 shrink-0">
          <label class="relative group peer w-full valid">
            <input
              v-model="payload.date_of_birth"
              required
              type="date"
              id="birthdate"
              placeholder="Masukan tanggal lahir"
              class="appearance-none outline-none w-full h-14 rounded-2xl ring-[1.5px] ring-desa-background focus:ring-desa-black p-4 pl-12 gap-2 font-medium invalid:text-desa-secondary transition-all duration-300 [&::-webkit-calendar-picker-indicator]:hidden"
              onclick="this.showPicker();"
            />
            <div
              class="absolute transform -translate-y-1/2 top-1/2 left-4 flex size-6 shrink-0"
            >
              <img
                src="@/assets/images/icons/calendar-2-secondary-green.svg"
                class="size-6 hidden group-has-[:invalid]:flex"
                alt="icon"
              />
              <img
                src="@/assets/images/icons/calendar-2-black.svg"
                class="size-6 flex group-has-[:invalid]:hidden"
                alt="icon"
              />
            </div>
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
      <section id="Status" class="flex items-center">
        <h2
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Status
        </h2>
        <div class="flex-1 grid grid-cols-2 gap-6">
          <label
            class="relative group flex items-center justify-between rounded-2xl border border-desa-background p-4 hover:border-transparent hover:bg-desa-foreshadow has-[:checked]:bg-desa-foreshadow has-[:checked]:border-transparent transition-all duration-300"
          >
            <div class="flex items-center gap-2">
              <input
                required
                v-model="payload.marital_status"
                value="single"
                type="radio"
                name="status"
                id="Belum-Menikah"
                class="flex size-[18px] shrink-0 accent-desa-dark-green"
              />
              <p class="w-full font-medium text-desa-secondary leading-5">
                Belum Menikah
              </p>
            </div>
            <img
              src="@/assets/images/icons/profile-secondary-green.svg"
              class="flex size-6 shrink-0 group-has-[:checked]:hidden"
              alt="icon"
            />
            <img
              src="@/assets/images/icons/profile-dark-green.svg"
              class="hidden size-6 shrink-0 group-has-[:checked]:flex"
              alt="icon"
            />
          </label>
          <label
            class="relative group flex items-center justify-between rounded-2xl border border-desa-background p-4 hover:border-transparent hover:bg-desa-foreshadow has-[:checked]:bg-desa-foreshadow has-[:checked]:border-transparent transition-all duration-300"
          >
            <div class="flex items-center gap-2">
              <input
                v-model="payload.marital_status"
                value="married"
                required
                type="radio"
                name="status"
                id="Sudah-Menikah"
                class="flex size-[18px] shrink-0 accent-desa-dark-green"
              />
              <p class="w-full font-medium text-desa-secondary leading-5">
                Sudah Menikah
              </p>
            </div>
            <img
              src="@/assets/images/icons/profile-2user-secondary-green.svg"
              class="flex size-6 shrink-0 group-has-[:checked]:hidden"
              alt="icon"
            />
            <img
              src="@/assets/images/icons/profile-2user-dark-green.svg"
              class="hidden size-6 shrink-0 group-has-[:checked]:flex"
              alt="icon"
            />
          </label>
        </div>
      </section>
      <hr class="border-desa-background" />
      <section id="Kategori-Keluarga" class="flex items-center">
        <h2
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Kategori Keluarga
        </h2>
        <div class="flex-1 grid grid-cols-3 gap-6">
          <label
            class="relative flex items-center gap-2 rounded-2xl border border-desa-background p-4 hover:border-transparent hover:bg-desa-foreshadow has-[:checked]:bg-desa-foreshadow hover:ring-[1.5px] hover:ring-desa-dark-green has-[:checked]:ring-[1.5px] has-[:checked]:ring-desa-dark-green transition-all duration-300"
          >
            <input
              v-model="payload.relation"
              value="wife"
              required
              type="radio"
              name="kategori-keluarga"
              id="Istri"
              class="peer flex size-[18px] shrink-0 accent-desa-dark-green"
            />
            <p
              class="w-full font-medium text-desa-secondary leading-5 peer-checked:text-desa-dark-green"
            >
              Istri
            </p>
          </label>
          <label
            class="relative flex items-center gap-2 rounded-2xl border border-desa-background p-4 hover:border-transparent hover:bg-desa-foreshadow has-[:checked]:bg-desa-foreshadow hover:ring-[1.5px] hover:ring-desa-dark-green has-[:checked]:ring-[1.5px] has-[:checked]:ring-desa-dark-green transition-all duration-300"
          >
            <input
              required
              v-model="payload.relation"
              value="child"
              type="radio"
              name="kategori-keluarga"
              id="Anak"
              class="peer flex size-[18px] shrink-0 accent-desa-dark-green"
            />
            <p
              class="w-full font-medium text-desa-secondary leading-5 peer-checked:text-desa-dark-green"
            >
              Anak
            </p>
          </label>
          <label
            class="relative flex items-center gap-2 rounded-2xl border border-desa-background p-4 hover:border-transparent hover:bg-desa-foreshadow has-[:checked]:bg-desa-foreshadow hover:ring-[1.5px] hover:ring-desa-dark-green has-[:checked]:ring-[1.5px] has-[:checked]:ring-desa-dark-green transition-all duration-300"
          >
            <input
              required
              v-model="payload.relation"
              value="husband"
              type="radio"
              name="kategori-keluarga"
              id="Suami"
              class="peer flex size-[18px] shrink-0 accent-desa-dark-green"
            />
            <p
              class="w-full font-medium text-desa-secondary leading-5 peer-checked:text-desa-dark-green"
            >
              Suami
            </p>
          </label>
        </div>
      </section>
      <hr class="border-desa-background" />
      <section id="Nomor-Handphone" class="flex items-center">
        <h2
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Nomor Handphone
        </h2>
        <label class="flex-1 relative">
          <input
            v-model="payload.phone_number"
            required
            type="tel"
            placeholder="Masukan No. HP yang aktif"
            class="peer w-full py-[18px] rounded-2xl border border-desa-background pl-[48px] pr-4 focus:outline-none bg-white font-medium leading-5 placeholder:text-desa-secondary placeholder:font-medium placeholder:leading-5 focus:ring-[1.5px] focus:ring-desa-dark-green transition-all duration-300"
          />
          <img
            src="@/assets/images/icons/call-secondary-green.svg"
            alt="icon"
            class="peer-placeholder-shown:block hidden size-6 shrink-0 absolute left-4 top-1/2 -translate-y-1/2"
          />
          <img
            src="@/assets/images/icons/call-black.svg"
            alt="icon"
            class="peer-placeholder-shown:hidden size-6 shrink-0 absolute left-4 top-1/2 -translate-y-1/2"
          />
        </label>
      </section>
      <hr class="border-desa-background" />

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
      <section id="Buttons" class="flex items-center justify-end gap-4">
        <router-link :to="{ name: 'family-member' }">
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
import IconSmsSecondaryGreen from "@/assets/images/icons/sms-secondary-green.svg";
import IconSmsBlack from "@/assets/images/icons/sms-black.svg";
import IconKeySecondaryGreen from "@/assets/images/icons/key-secondary-green.svg";
import IconKeyBlack from "@/assets/images/icons/key-black.svg";
import Input from "@/components/ui/Input.vue";
import { useFamilyMemberStore } from "@/stores/familyMember";
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { calculateAge } from "@/helpers/format";
import { head } from "lodash";
import { useAuthStore } from "@/stores/auth";

const familyMemberStore = useFamilyMemberStore();
const { createFamilyMember } = familyMemberStore;
const { loading, error } = storeToRefs(familyMemberStore);

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

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
  relation: "",
});

const handleCreate = async () => {
  await createFamilyMember({
    ...payload.value,
    head_of_family_id: user.value.head_of_family.id,
  });
};

const handleImageChange = (event) => {
  const file = event.target.files[0];
  payload.value.profile_picture = file;
  payload.value.profile_picture_url = URL.createObjectURL(file);
};

watch(
  () => payload.value.date_of_birth,
  (newDate) => {
    payload.value.age = calculateAge(newDate);
  }
);
</script>

<style lang="scss" scoped></style>
