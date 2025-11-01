<template>
  <div id="Header" class="flex items-center justify-between">
    <div class="flex flex-col gap-2">
      <div class="flex gap-1 items-center leading-5 text-desa-secondary">
        <p
          class="last-of-type:text-desa-dark-green last-of-type:font-semibold capitalize"
        >
          Events desa
        </p>
        <span>/</span>
        <p
          class="last-of-type:text-desa-dark-green last-of-type:font-semibold capitalize"
        >
          Detail Event Desa
        </p>
      </div>
      <h1 class="font-semibold text-2xl">Detail Event Desa</h1>
    </div>
    <router-link
      v-if="can('event-edit')"
      :to="{ name: 'edit-event', params: { id: payload.id } }"
      class="flex items-center rounded-2xl py-4 px-6 gap-[10px] bg-desa-black"
    >
      <p class="font-medium text-white">Ubah Data</p>
      <img
        src="@/assets/images/icons/edit-white.svg"
        class="flex size-6 shrink-0"
        alt="icon"
      />
    </router-link>
  </div>

  <div
    v-if="success"
    class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-2xl relative mb-4"
    role="alert"
  >
    <span class="block sm:inline">{{ success }}</span>
  </div>

  <div
    v-if="error"
    class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-2xl relative mb-4"
    role="alert"
  >
    <span class="block sm:inline">{{ error }}</span>
    <button
      type="button"
      @click="error = null"
      class="absolute top-1/2 -translate-y-1/2 right-4"
    >
      <img
        src="@/assets/images/icons/close-circle-red-fill.svg"
        class="flex size-6 shrink-0"
        alt=""
      />
    </button>
  </div>

  <div class="flex gap-[14px]">
    <section
      id="Informasi"
      class="flex flex-col shrink-0 w-[calc(525/1000*100%)] h-fit rounded-3xl p-6 gap-6 bg-white"
    >
      <p class="font-medium leading-5 text-desa-secondary">Informasi Event</p>
      <div class="flex items-center w-full">
        <div
          class="flex w-[100px] h-20 shrink-0 rounded-2xl overflow-hidden bg-desa-foreshadow"
        >
          <img
            :src="payload.thumbnail"
            class="w-full h-full object-cover"
            alt="photo"
          />
        </div>
        <div class="flex flex-col gap-[6px] w-full ml-4 mr-9">
          <p class="font-semibold text-lg leading-[22.5px] line-clamp-1">
            {{ payload.name }}
          </p>
          <div class="flex items-center gap-1">
            <img
              src="@/assets/images/icons/ticket-secondary-green.svg"
              class="flex size-[18px] shrink-0"
              alt="icon"
            />
            <p class="font-medium text-sm text-desa-secondary">
              Registration:
              <span
                class="font-medium text-base"
                :class="{
                  'text-desa-soft-green': payload.is_active,
                  'text-desa-red': !payload.is_active,
                }"
              >
                {{ payload.is_active ? "Open" : "Closed" }}
              </span>
            </p>
          </div>
        </div>
      </div>
      <hr class="border-desa-foreshadow" />
      <div class="flex items-center w-full gap-3">
        <div
          class="flex size-[52px] shrink-0 rounded-2xl bg-desa-red/10 items-center justify-center"
        >
          <img
            src="@/assets/images/icons/ticket-2-red.svg"
            class="flex size-6 shrink-0"
            alt="icon"
          />
        </div>
        <div class="flex flex-col gap-1 w-full">
          <p class="font-semibold text-lg leading-[22.5px] text-desa-red">
            Rp {{ formatRupiah(payload.price) }}
          </p>
          <span class="font-medium text-desa-secondary"> Harga Event </span>
        </div>
      </div>
      <hr class="border-desa-foreshadow" />
      <div class="flex items-center w-full gap-3">
        <div
          class="flex size-[52px] shrink-0 rounded-2xl bg-desa-blue/10 items-center justify-center"
        >
          <img
            src="@/assets/images/icons/profile-2user-blue.svg"
            class="flex size-6 shrink-0"
            alt="icon"
          />
        </div>
        <div class="flex flex-col gap-1 w-full">
          <p class="font-semibold text-lg leading-[22.5px] text-desa-blue">
            {{ payload.event_participants?.length }} Warga
          </p>
          <span class="font-medium text-desa-secondary">
            Total Partisipasi
          </span>
        </div>
      </div>
      <hr class="border-desa-foreshadow" />
      <div class="flex items-center w-full gap-3">
        <div
          class="flex size-[52px] shrink-0 rounded-2xl bg-desa-foreshadow items-center justify-center"
        >
          <img
            src="@/assets/images/icons/calendar-2-dark-green.svg"
            class="flex size-6 shrink-0"
            alt="icon"
          />
        </div>
        <div class="flex flex-col gap-1 w-full">
          <p
            class="font-semibold text-lg leading-[22.5px] text-desa-dark-green"
          >
            {{ formatDate(payload.date) }}
          </p>
          <span class="font-medium text-desa-secondary">
            Tanggal Pelaksaaan
          </span>
        </div>
      </div>
      <hr class="border-desa-foreshadow" />
      <div class="flex items-center w-full gap-3">
        <div
          class="flex size-[52px] shrink-0 rounded-2xl bg-desa-yellow/10 items-center justify-center"
        >
          <img
            src="@/assets/images/icons/clock-yellow.svg"
            class="flex size-6 shrink-0"
            alt="icon"
          />
        </div>
        <div class="flex flex-col gap-1 w-full">
          <p class="font-semibold text-lg leading-[22.5px] text-desa-yellow">
            {{ formatTime(payload.time) }} WIB
          </p>
          <span class="font-medium text-desa-secondary">
            Tanggal Pelaksaaan
          </span>
        </div>
      </div>
      <hr class="border-desa-foreshadow" />
      <div class="flex flex-col gap-3">
        <p class="font-medium text-sm text-desa-secondary">Tentang Event</p>
        <p class="font-medium leading-8">
          {{ payload.description }}
        </p>
      </div>
    </section>
    <section
      v-if="user?.role === 'admin'"
      id="Participants"
      class="flex flex-col flex-1 h-fit shrink-0 rounded-3xl p-6 gap-6 bg-white"
    >
      <p class="font-medium leading-5 text-desa-secondary">
        Latest Participants
      </p>
      <div class="flex flex-col gap-[14px]">
        <div
          v-for="(item, index) in payload.event_participants"
          :key="index"
          class="flex items-center gap-3 w-[302px] shrink-0"
        >
          <div
            class="flex size-[54px] rounded-full bg-desa-foreshadow overflow-hidden"
          >
            <img
              :src="item.head_of_family?.profile_picture"
              class="w-full h-full object-cover"
              alt="icon"
            />
          </div>
          <div class="flex flex-col gap-1">
            <p class="font-semibold text-lg leading-5 text-desa-black">
              {{ item.head_of_family?.user?.name }}
            </p>
            <p class="flex items-center gap-1">
              <img
                src="@/assets/images/icons/briefcase-secondary-green.svg"
                class="flex size-[18px] shrink-0"
                alt="icon"
              />
              <span class="font-medium text-sm text-desa-secondary">{{
                item.head_of_family?.occupation
              }}</span>
            </p>
          </div>
        </div>
      </div>
      <a
        href="#"
        class="flex items-center justify-center h-14 rounded-2xl py-4 px-6 gap-[10px] bg-desa-dark-green"
      >
        <span class="font-medium leading-5 text-white">View All</span>
      </a>
    </section>

    <form
      @submit.prevent="handleSubmitEventParticipant"
      class="flex-1"
      v-if="user.role === 'head-of-family'"
    >
      <div class="flex flex-col h-fit gap-6 rounded-2xl bg-white py-6 flex-1">
        <h2
          class="font-medium text-sm leading-[17.5px] text-desa-secondary px-6"
        >
          Detail Pembayaran
        </h2>
        <section
          id="Harga-Event"
          class="flex items-center justify-between px-6"
        >
          <div class="point flex items-center gap-3">
            <div class="p-[14px] shrink-0 bg-[#FF507017] rounded-2xl">
              <img
                src="@/assets/images/icons/ticket-2-red.svg"
                alt="icon"
                class="size-6 shrink-0"
              />
            </div>
            <div class="flex flex-col gap-1">
              <p class="font-semibold text-lg leading-[22.5px] text-desa-red">
                Rp {{ formatRupiah(payload.price) }}
              </p>
              <h3
                class="font-medium text-sm leading-[17.5px] text-desa-secondary"
              >
                Harga Event
              </h3>
            </div>
          </div>
          <div
            id="CountButton"
            class="py-3 px-4 rounded-2xl border border-desa-background flex items-center gap-3"
          >
            <button @click="decrementQty" type="button" id="decrementBtn">
              <img
                src="@/assets/images/icons/minus-square-secondary-green.svg"
                alt="icon"
                class="size-6 shrink-0"
              />
            </button>
            <p
              id="counterValue"
              class="font-medium text-[22px] leading-[27.5px] text-center text-[#000000]"
            >
              {{ eventParticipant.quantity }}
            </p>
            <button @click="incrementQty" type="button" id="incrementBtn">
              <img
                src="@/assets/images/icons/add-square-secondary-green.svg"
                alt="icon"
                class="size-6 shrink-0"
              />
            </button>
          </div>
        </section>
        <hr class="border-desa-background" />
        <section id="Detail-Payment" class="flex flex-col gap-6 px-6">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-[6px]">
              <img
                src="@/assets/images/icons/receipt-2-secondary-green.svg"
                alt="icon"
                class="size-6 shrink-0"
              />
              <h4
                class="font-medium text-sm leading-[17.5px] text-desa-secondary"
              >
                Metode Pembayaran
              </h4>
            </div>
            <img
              src="@/assets/images/icons/midtrans.svg"
              alt="icon"
              class="w-[108px] shrink-0"
            />
          </div>
          <hr class="border-desa-background" />

          <div class="flex items-center justify-between">
            <div class="flex items-center gap-[6px]">
              <img
                src="@/assets/images/icons/profile-2user-secondary-green-bold.svg"
                alt="icon"
                class="size-6 shrink-0"
              />
              <h4
                class="font-medium text-sm leading-[17.5px] text-desa-secondary"
              >
                Quanity
              </h4>
            </div>
            <p class="font-semibold text-lg leading-[22.5px]">
              {{ eventParticipant.quantity }}x warga
            </p>
          </div>
          <hr class="border-desa-background" />
          <label class="flex items-center justify-between">
            <div class="flex items-center gap-[6px]">
              <img
                src="@/assets/images/icons/money-secondary-green.svg"
                alt="icon"
                class="size-6 shrink-0"
              />
              <h4
                class="font-medium text-sm leading-[17.5px] text-desa-secondary"
              >
                Harga Total
              </h4>
            </div>
            <input
              type="text"
              name="harga_total"
              v-model="eventParticipant.total_price"
              class="font-semibold text-lg leading-[22.5px] text-right focus:outline-none"
              readonly
            />
          </label>
          <hr class="border-desa-background" />
        </section>
        <button
          :disabled="loadingEventParticipant"
          type="submit"
          class="bg-desa-dark-green mx-6 rounded-2xl py-[18px] flex justify-center items-center text-center text-white font-medium leading-5"
        >
          <span v-if="!loadingEventParticipant">Bayar Sekarang</span>
          <span v-else>Loading...</span>
        </button>
      </div>
    </form>
  </div>

  <div
    v-if="showModalSuccess"
    id="modal"
    class="fixed inset-0 flex items-center justify-center bg-[#001B1ACC] z-50"
  >
    <div
      class="bg-white rounded-2xl p-4 w-[320px] flex flex-col items-center gap-6"
    >
      <div class="flex flex-col items-center gap-4">
        <h3 class="font-semibold text-2xl leading-8 text-desa-secondary">
          Pembayaran Berhasil
        </h3>
        <p class="font-medium text-base leading-5 text-desa-secondary">
          Terima kasih telah berpartisipasi dalam acara ini.
        </p>
      </div>
      <button
        type="button"
        class="bg-desa-dark-green rounded-2xl py-[18px] flex justify-center items-center text-center text-white font-medium leading-5 w-full"
        @click="showModalSuccess = false"
      >
        Tutup
      </button>
    </div>
  </div>
</template>

<script setup>
import { formatDate, formatRupiah, formatTime } from "@/helpers/format";
import { can } from "@/helpers/permissionHelper";
import { useAuthStore } from "@/stores/auth";
import { useEventStore } from "@/stores/event";
import { useEventParticipantStore } from "@/stores/eventParticipant";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const eventStore = useEventStore();
const { fetchEvent } = eventStore;
const { loading, success, error } = storeToRefs(eventStore);

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

const eventParticipantStore = useEventParticipantStore();
const { fetchEventParticipantStore } = eventParticipantStore;
const { loading: loadingEventParticipant } = storeToRefs(eventParticipantStore);

const showModalSuccess = ref(false);

const payload = ref({});
const eventParticipant = ref({
  event_id: null,
  quantity: 0,
});

const incrementQty = () => {
  eventParticipant.value.quantity += 1;

  eventParticipant.value.total_price = formatRupiah(
    eventParticipant.value.quantity * payload.value.price
  );
};

const decrementQty = () => {
  if (eventParticipant.value.quantity > 0) {
    eventParticipant.value.quantity -= 1;
  }

  eventParticipant.value.total_price = formatRupiah(
    eventParticipant.value.quantity * payload.value.price
  );
};

const handleSubmitEventParticipant = async () => {
  const res = await fetchEventParticipantStore(eventParticipant.value);

  window.snap.pay(res.snap_token, {
    onSuccess: function (result) {
      showModalSuccess.value = true;
      eventParticipant.value.quantity = 0;
      eventParticipant.value.total_price = 0;
    },
    onPending: function (result) {
      alert("Menunggu pembayaran!");
      console.log(result);
    },
    onError: function (result) {
      alert("Pembayaran gagal!");
      console.log(result);
    },
    onClose: function () {
      alert("Anda menutup popup tanpa menyelesaikan pembayaran");
    },
  });
};

const loadData = async () => {
  const res = await fetchEvent(route.params.id);
  payload.value = res;
  eventParticipant.value.event_id = res.id;
};

onMounted(() => {
  loadData();
  setTimeout(() => {
    success.value = null;
  }, 2500);
});
</script>

<style lang="scss" scoped></style>
