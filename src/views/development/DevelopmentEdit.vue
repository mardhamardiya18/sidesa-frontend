<template>
  <div id="Header" class="flex items-center justify-between">
    <div class="flex flex-col gap-2">
      <div class="flex gap-1 items-center leading-5 text-desa-secondary">
        <p
          class="last-of-type:text-desa-dark-green last-of-type:font-semibold capitalize"
        >
          Pembangunan Desa
        </p>
        <span>/</span>
        <p
          class="last-of-type:text-desa-dark-green last-of-type:font-semibold capitalize"
        >
          Edit Pembangunan Desa
        </p>
      </div>
      <h1 class="font-semibold text-2xl">Edit Pembangunan Desa</h1>
    </div>
  </div>
  <form @submit.prevent="handleSubmit" id="myForm" class="capitalize">
    <div class="shrink-0 rounded-3xl p-6 bg-white flex flex-col gap-6 h-fit">
      <section id="Thumbnail" class="flex items-center justify-between">
        <h2
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Thumbnail Event Terkait
        </h2>
        <div class="flex-1 flex items-center justify-between">
          <div
            id="Photo-Preview"
            class="flex itce justify-center w-[120px] h-[100px] rounded-2xl overflow-hidden bg-desa-foreshadow"
          >
            <img
              id="Photo"
              :src="development.thumbnail_url"
              alt="image"
              class="size-full object-cover"
            />
          </div>
          <div class="relative">
            <input
              id="File"
              type="file"
              name="file"
              class="absolute opacity-0 left-0 w-full top-0 h-full"
              @change="handleImageChange"
              ref="thumbnail"
            />
            <button
              id="Upload"
              type="button"
              class="relative flex items-center py-4 px-6 rounded-2xl bg-desa-black gap-[10px]"
              @click="$refs.thumbnail.click()"
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
      <section id="Nama-Projek" class="flex items-center justify-between">
        <p
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Nama Projek Pembangunan
        </p>
        <div class="flex flex-col gap-3 flex-1 shrink-0">
          <label class="relative group peer w-full">
            <Input
              v-model="development.name"
              type="text"
              :error-message="error?.name"
              :icon="IconEditInActive"
              :filled-icon="IconEditActive"
            />
          </label>
        </div>
      </section>
      <hr class="border-desa-background" />
      <section id="Penanggung-Jawab" class="flex items-center justify-between">
        <p
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Penanggung Jawab
        </p>
        <div class="flex flex-col gap-3 flex-1 shrink-0">
          <label class="relative group peer w-full">
            <Input
              v-model="development.person_in_charge"
              type="text"
              :error-message="error?.name"
              :icon="IconProfileInActive"
              :filled-icon="IconProfileActive"
            />
          </label>
        </div>
      </section>
      <hr class="border-desa-background" />
      <section id="Status" class="flex items-center justify-between">
        <p
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Status Pembangunan
        </p>
        <div class="flex flex-1 gap-6 shrink-0">
          <label
            class="group flex w-full items-center h-14 rounded-2xl p-4 ring-[1.5px] ring-desa-background gap-2 has-[:checked]:ring-none has-[:checked]:bg-desa-foreshadow transition-setup"
          >
            <input
              type="radio"
              v-model="development.status"
              value="in_progress"
              :checked="
                development.status === 'on_hold' ||
                development.status === 'planned' ||
                development.status === 'in_progress'
              "
              name="status"
              id=""
              class="flex size-[18px] shrink-0 accent-desa-secondary checked:accent-desa-dark-green transition-setup"
            />
            <span
              class="font-medium leading-5 text-desa-secondary w-full group-has-[:checked]:text-desa-dark-green transition-setup"
            >
              On Going
            </span>
            <div class="flex size-6 shrink-0">
              <img
                src="@/assets/images/icons/tick-circle-secondary-green.svg"
                class="size-6 flex group-has-[:checked]:hidden"
                alt="icon"
              />
              <img
                src="@/assets/images/icons/tick-circle-dark-green.svg"
                class="size-6 hidden group-has-[:checked]:flex"
                alt="icon"
              />
            </div>
          </label>
          <label
            class="group flex w-full items-center h-14 rounded-2xl p-4 ring-[1.5px] ring-desa-background gap-2 has-[:checked]:ring-none has-[:checked]:bg-desa-foreshadow transition-setup"
          >
            <input
              v-model="development.status"
              type="radio"
              name="status"
              value="completed"
              :checked="development.status === 'completed'"
              id=""
              class="flex size-[18px] shrink-0 accent-desa-secondary checked:accent-desa-dark-green transition-setup"
            />
            <span
              class="font-medium leading-5 text-desa-secondary w-full group-has-[:checked]:text-desa-dark-green transition-setup"
            >
              Completed
            </span>
            <div class="flex size-6 shrink-0">
              <img
                src="@/assets/images/icons/close-circle-secondary-green.svg"
                class="size-6 flex group-has-[:checked]:hidden"
                alt="icon"
              />
              <img
                src="@/assets/images/icons/close-circle-secondary-green.svg"
                class="size-6 hidden group-has-[:checked]:flex"
                alt="icon"
              />
            </div>
          </label>
        </div>
      </section>
      <hr class="border-desa-background" />
      <section
        id="Tanggal-Pembangunan"
        class="flex items-center justify-between"
      >
        <p
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Tanggal Pembangunan
        </p>
        <div class="flex items-center gap-6 flex-1 shrink-0">
          <label class="relative group peer w-full">
            <Input
              v-model="development.start_date"
              type="date"
              placeholder="Pilih tanggal lahir"
              :error-message="error?.start_date"
              :icon="IconCalendarSecondaryGreen"
              :filled-icon="IconCalendarBlack"
            />
          </label>
        </div>
      </section>
      <hr class="border-desa-background" />
      <section id="Hari" class="flex items-center justify-between">
        <p
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Hari yang dibutuhkan
        </p>
        <div class="flex flex-col gap-3 flex-1 shrink-0">
          <label class="relative group peer w-full">
            <input
              type="number"
              v-model="development.day"
              placeholder="Ketik hari yang dibutuhkan"
              class="appearance-none outline-none w-full h-14 rounded-2xl ring-[1.5px] ring-desa-background focus:ring-desa-black py-4 px-12 pr-[98px] gap-2 font-medium placeholder:text-desa-secondary transition-all duration-300"
            />
            <div
              class="absolute transform -translate-y-1/2 top-1/2 left-4 flex size-6 shrink-0"
            >
              <img
                src="@/assets/images/icons/timer-secondary-green.svg"
                class="size-6 hidden group-has-[:placeholder-shown]:flex"
                alt="icon"
              />
              <img
                src="@/assets/images/icons/timer-black.svg"
                class="size-6 flex group-has-[:placeholder-shown]:hidden"
                alt="icon"
              />
            </div>
            <div
              class="absolute transform -translate-y-1/2 top-1/2 right-4 flex shrink-0 gap-6"
            >
              <div class="w-px h-6 border border-desa-background"></div>
              <span
                class="font-medium leading-5 text-desa-dark-green group-has-[:placeholder-shown]:text-desa-secondary"
                >Hari</span
              >
            </div>
          </label>
        </div>
      </section>
      <hr class="border-desa-background" />
      <section id="Deskripsi" class="flex items-center justify-between">
        <p
          class="font-medium leading-5 text-desa-secondary w-[calc(424/904*100%)]"
        >
          Deskripsi Pembangunan
        </p>
        <div class="flex flex-col gap-3 flex-1 shrink-0">
          <textarea
            name=""
            id=""
            placeholder="Jelaskan lebih detail tentang pembangunan"
            rows="6"
            class="appearance-none outline-none w-full rounded-2xl ring-[1.5px] ring-desa-background focus:ring-desa-black py-4 px-4 gap-2 font-medium placeholder:text-desa-secondary transition-all duration-300"
          >
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, cupiditate.
                                    </textarea
          >
        </div>
      </section>
      <hr class="border-desa-background w-[calc(100%+48px)] -mx-6" />
      <section id="Buttons" class="flex items-center justify-end gap-4">
        <router-link
          :to="{ name: 'manage-development', params: { id: route.params.id } }"
        >
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
          <span v-if="!loading">Update Now</span>
          <span v-else>Loading...</span>
        </button>
      </section>
    </div>
  </form>
</template>

<script setup>
import IconEditInActive from "@/assets/images/icons/edit-secondary-green.svg";
import IconEditActive from "@/assets/images/icons/edit-black.svg";
import IconProfileInActive from "@/assets/images/icons/profile-circle-secondary-green.svg";
import IconProfileActive from "@/assets/images/icons/profile-circle-black.svg";
import IconCalendarSecondaryGreen from "@/assets/images/icons/calendar-2-secondary-green.svg";
import IconCalendarBlack from "@/assets/images/icons/calendar-2-black.svg";
import { useDevelopmentStore } from "@/stores/development";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Input from "@/components/ui/Input.vue";
import { storeToRefs } from "pinia";
import { formatToClientTimezone } from "@/helpers/format";

const developmentStore = useDevelopmentStore();
const route = useRoute();

const { fetchDevelopment, fetchDevelopmentUpdate } = developmentStore;
const { error, loading } = storeToRefs(developmentStore);

const development = ref({
  thumbnail: null,
  thumbnail_url: null,
  name: "",
  description: "",
  person_in_charge: "",
  start_date: "",
  end_date: "",
  budget: 0,
  status: "",
  day: 0,
});

const loadData = async () => {
  const res = await fetchDevelopment(route.params.id);
  development.value = res;
  development.value.thumbnail_url = res.thumbnail;
  development.value.thumbnail = null;
  development.value.day =
    Math.round(
      new Date(development.value.end_date).getTime() -
        new Date(development.value.start_date).getTime()
    ) /
    (24 * 60 * 60 * 1000);
};

const handleImageChange = (event) => {
  const file = event.target.files[0];
  development.value.thumbnail = file;
  development.value.thumbnail_url = URL.createObjectURL(file);
};

const handleSubmit = async () => {
  await fetchDevelopmentUpdate({
    ...development.value,
  });
};

watch(
  () => development.value.day,
  (newDay) => {
    development.value.day = newDay;
    development.value.end_date = new Date(
      new Date(`${development.value.start_date}T00:00:00`).getTime() +
        newDay * 24 * 60 * 60 * 1000
    )
      .toISOString()
      .split("T")[0];
  }
);

onMounted(loadData);
</script>

<style lang="scss" scoped></style>
