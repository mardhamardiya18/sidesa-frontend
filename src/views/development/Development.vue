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
          detail Pembangunan desa
        </p>
      </div>
      <h1 class="font-semibold text-2xl">Detail Pembangunan Desa</h1>
    </div>
    <div class="flex items-center gap-3">
      <button
        @click="showModalDelete = true"
        data-modal="Modal-Delete"
        class="flex items-center rounded-2xl py-4 px-6 gap-[10px] bg-desa-red"
        v-if="can('development-delete')"
      >
        <p class="font-medium text-white">Hapus Data</p>
        <img
          src="@/assets/images/icons/trash-white.svg"
          class="flex size-6 shrink-0"
          alt="icon"
        />
      </button>
      <router-link
        v-if="can('development-edit')"
        :to="{ name: 'edit-development', params: { id: route.params.id } }"
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

  <div v-if="user.role === 'admin'" class="flex flex-col gap-[14px]">
    <section
      id="Informasi"
      class="flex flex-col rounded-3xl p-6 gap-6 bg-white"
    >
      <p class="font-medium leading-5 text-desa-secondary">
        Informasi Pembangunan
      </p>
      <div class="flex items-center justify-between">
        <div
          class="flex w-[120px] h-[100px] shrink-0 rounded-2xl overflow-hidden bg-desa-foreshadow"
        >
          <img
            :src="development.thumbnail"
            class="w-full h-full object-cover"
            alt="photo"
          />
        </div>
        <div
          class="badge rounded-full p-3 px-4 gap-2 flex w-[100px] justify-center shrink-0"
          :class="{
            'bg-desa-red': development.status === 'planned',
            'bg-desa-soft-green': development.status === 'on_progress',
            'bg-desa-black': development.status === 'completed',
          }"
        >
          <span class="font-semibold text-xs text-white uppercase px-4">{{
            development.status === "planned"
              ? "dijadwalkan"
              : development.status === "on_progress"
              ? "berjalan"
              : development.status === "completed"
              ? "selesai"
              : "unknown"
          }}</span>
        </div>
      </div>
      <div class="flex flex-col gap-[6px] w-full">
        <p class="font-semibold text-lg leading-[22.5px] line-clamp-1">
          {{ development.name }}
        </p>
        <p class="font-medium text-sm text-desa-secondary">
          Penanggung Jawab:
          <span class="font-medium text-base text-desa-dark-green">
            {{ development.person_in_charge }}
          </span>
        </p>
      </div>
      <hr class="border-desa-foreshadow" />
      <div class="flex items-center justify-between">
        <div class="flex items-center w-full gap-3">
          <div
            class="flex size-[52px] shrink-0 rounded-2xl bg-desa-red/10 items-center justify-center"
          >
            <img
              src="@/assets/images/icons/wallet-3-red.svg"
              class="flex size-6 shrink-0"
              alt="icon"
            />
          </div>
          <div class="flex flex-col gap-1 w-full">
            <p class="font-semibold text-xl leading-[22.5px] text-desa-red">
              Rp {{ formatRupiah(development.budget) }}
            </p>
            <span class="font-medium text-desa-secondary">
              Dana Pembangunan
            </span>
          </div>
        </div>
        <div
          class="badge rounded-full p-3 gap-2 flex w-[100px] justify-center shrink-0 bg-desa-dark-green"
        >
          <span class="font-semibold text-xs text-white uppercase"
            >Tersedia</span
          >
        </div>
      </div>
      <hr class="border-desa-foreshadow" />
      <div class="grid grid-cols-2 gap-3">
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
              class="font-semibold text-xl leading-[22.5px] text-desa-dark-green"
            >
              {{ formatToClientTimezone(development.start_date) }}
            </p>
            <span class="font-medium text-desa-secondary">
              Tanggal Pelaksanaan
            </span>
          </div>
        </div>
        <div class="flex items-center w-full gap-3 justify-end">
          <div class="flex flex-col gap-1 w-full text-right">
            <p
              class="font-semibold text-xl leading-[22.5px] text-desa-dark-green"
            >
              {{ formatToClientTimezone(development.end_date) }}
            </p>
            <span class="font-medium text-desa-secondary">
              Perkiraan Selesai
            </span>
          </div>
          <div
            class="flex size-[52px] shrink-0 rounded-2xl bg-desa-foreshadow items-center justify-center"
          >
            <img
              src="@/assets/images/icons/calendar-2-dark-green.svg"
              class="flex size-6 shrink-0"
              alt="icon"
            />
          </div>
        </div>
      </div>
      <hr class="border-desa-foreshadow" />
      <div class="grid grid-cols-2 gap-3">
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
            <p class="font-semibold text-xl leading-[22.5px] text-desa-yellow">
              12:30 WIB
            </p>
            <span class="font-medium text-desa-secondary">
              Jam Pelaksanaan
            </span>
          </div>
        </div>
        <div class="flex items-center w-full gap-3 justify-end">
          <div class="flex flex-col gap-1 w-full text-right">
            <p class="font-semibold text-xl leading-[22.5px] text-desa-yellow">
              192 Hari
            </p>
            <span class="font-medium text-desa-secondary"> Days Needed </span>
          </div>
          <div
            class="flex size-[52px] shrink-0 rounded-2xl bg-desa-yellow/10 items-center justify-center"
          >
            <img
              src="@/assets/images/icons/clock-yellow.svg"
              class="flex size-6 shrink-0"
              alt="icon"
            />
          </div>
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
          <p class="font-semibold text-xl leading-[22.5px] text-desa-blue">
            9.250 Warga
          </p>
          <span class="font-medium text-desa-blue"> Total Partisipasi </span>
        </div>
      </div>
      <hr class="border-desa-foreshadow" />
      <div class="flex flex-col gap-3">
        <p class="font-medium text-sm text-desa-secondary">
          Tentang Pembangunan
        </p>
        <p class="font-medium leading-8">
          Pembangunan Jalan Utama adalah langkah strategis untuk meningkatkan
          aksesibilitas dan mobilitas masyarakat. Proyek ini bertujuan untuk
          memperbaiki konektivitas antarwilayah, mendukung kegiatan ekonomi
          lokal, serta menciptakan infrastruktur yang lebih aman dan nyaman bagi
          pengguna jalan.
        </p>
      </div>
    </section>
    <section
      id="Applicants"
      class="flex flex-col rounded-3xl p-6 gap-6 bg-white"
    >
      <div class="flex items-center justify-between">
        <p class="font-medium leading-5 text-desa-secondary">
          Pengajuan Applicants
        </p>
        <div id="Tabs-Button" class="grid grid-cols-4 gap-3">
          <button data-content="All" class="tab-btn group active">
            <div
              class="flex items-center justify-center rounded-full border border-desa-background py-[14px] px-[18px] group-hover:bg-desa-black group-[.active]:bg-desa-black transition-setup"
            >
              <span
                class="font-medium leading-5 text-desa-secondary group-hover:text-white group-[.active]:text-white transition-setup"
              >
                SEMUA
              </span>
            </div>
          </button>
          <button data-content="All" class="tab-btn group">
            <div
              class="flex items-center justify-center rounded-full border border-desa-background py-[14px] px-[18px] group-hover:bg-desa-black group-[.active]:bg-desa-black transition-setup"
            >
              <span
                class="font-medium leading-5 text-desa-secondary group-hover:text-white group-[.active]:text-white transition-setup"
              >
                MENUNGGU
              </span>
            </div>
          </button>
          <button data-content="All" class="tab-btn group">
            <div
              class="flex items-center justify-center rounded-full border border-desa-background py-[14px] px-[18px] group-hover:bg-desa-black group-[.active]:bg-desa-black transition-setup"
            >
              <span
                class="font-medium leading-5 text-desa-secondary group-hover:text-white group-[.active]:text-white transition-setup"
              >
                DITERIMA
              </span>
            </div>
          </button>
          <button data-content="All" class="tab-btn group">
            <div
              class="flex items-center justify-center rounded-full border border-desa-background py-[14px] px-[18px] group-hover:bg-desa-black group-[.active]:bg-desa-black transition-setup"
            >
              <span
                class="font-medium leading-5 text-desa-secondary group-hover:text-white group-[.active]:text-white transition-setup"
              >
                DITOLAK
              </span>
            </div>
          </button>
        </div>
      </div>
      <div id="Tabs-Content" class="flex flex-col">
        <div id="All" class="flex flex-col gap-6">
          <div
            class="card flex flex-col gap-6 rounded-3xl p-6 border border-desa-background bg-white"
            v-if="development.development_applicants?.length === 0"
          >
            <p>No applicant data was found.</p>
          </div>
          <div
            v-else
            v-for="(item, index) in development.development_applicants"
            :key="index"
            class="card flex flex-col gap-6 rounded-3xl p-6 border border-desa-background bg-white"
          >
            <div class="flex items-center justify-between">
              <p class="flex items-center gap-1">
                <img
                  src="@/assets/images/icons/calendar-2-secondary-green.svg"
                  class="flex size-[18px] shrink-0"
                  alt="icon"
                />
                <span class="font-medium text-sm text-desa-secondary">{{
                  formatDateTime(item.created_at)
                }}</span>
              </p>
              <div
                class="badge rounded-full p-3 gap-2 flex w-[100px] justify-center shrink-0"
                :class="{
                  'bg-desa-red': item.status === 'pending',
                  'bg-desa-soft-green': item.status === 'approved',
                  'bg-desa-black': item.status === 'rejected',
                }"
              >
                <span class="font-semibold text-xs text-white uppercase">{{
                  item.status === "pending"
                    ? "menunggu"
                    : item.status === "approved"
                    ? "disetujui"
                    : item.status === "rejected"
                    ? "ditolak"
                    : "unknown"
                }}</span>
              </div>
            </div>
            <hr class="border-desa-background" />
            <div class="flex items-center gap-6 justify-between">
              <div class="flex items-center gap-3 w-[302px] shrink-0">
                <div
                  class="flex size-[54px] rounded-full bg-desa-foreshadow overflow-hidden"
                >
                  <img
                    src="@/assets/images/photos/kk-photo-1.png"
                    class="w-full h-full object-cover"
                    alt="icon"
                  />
                </div>
                <div class="flex flex-col gap-1">
                  <p class="font-semibold text-lg leading-5 text-desa-black">
                    {{ item.user?.name }}
                  </p>
                  <p class="flex items-center gap-1">
                    <img
                      src="@/assets/images/icons/briefcase-secondary-green.svg"
                      class="flex size-[18px] shrink-0"
                      alt="icon"
                    />
                    <span class="font-medium text-sm text-desa-secondary"
                      >Tukang Bangunan</span
                    >
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-3 w-[236px] shrink-0">
                <div class="flex flex-col gap-1">
                  <p class="flex items-center gap-1">
                    <img
                      src="@/assets/images/icons/keyboard-secondary-green.svg"
                      class="flex size-[18px] shrink-0"
                      alt="icon"
                    />
                    <span class="font-medium text-sm text-desa-secondary"
                      >NIK</span
                    >
                  </p>
                  <p
                    class="font-semibold text-lg leading-5 text-desa-dark-green text-nowrap"
                  >
                    30183910948390193
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-3 justify-end shrink-0">
                <button
                  class="flex items-center w-[120px] justify-center shrink-0 gap-[10px] rounded-2xl py-4 px-6 bg-desa-red/10"
                >
                  <span class="font-medium text-desa-red">Tolak</span>
                </button>
                <button
                  class="flex items-center w-[120px] justify-center shrink-0 gap-[10px] rounded-2xl py-4 px-6 bg-desa-dark-green"
                >
                  <span class="font-medium text-white">Setuju</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div v-if="user.role === 'head-of-family'" class="flex gap-[14px]">
    <div
      class="w-[calc(545/1000*100%)] h-fit shrink-0 rounded-2xl bg-white p-6 flex flex-col gap-6"
    >
      <h2 class="font-medium text-sm leading-[17.5px] text-desa-secondary">
        Informasi Pembangunan
      </h2>
      <section id="Hero" class="flex items-center justify-between">
        <div
          class="flex justify-center items-center w-[120px] h-[100px] shrink-0 rounded-3xl overflow-hidden"
        >
          <img
            :src="development.thumbnail"
            alt="image"
            class="size-full object-cover"
          />
        </div>
        <span
          class="p-3 rounded-full bg-desa-orange font-semibold text-xs leading-[15px] text-white"
          >BELUM DIMULAI</span
        >
      </section>
      <section id="Title" class="flex flex-col gap-[6px]">
        <h3 class="font-semibold text-xl leading-7">
          {{ development.name }}
        </h3>
        <div class="flex items-center gap-1">
          <p class="font-medium leading-5 text-desa-secondary">
            Penanggung Jawab:
          </p>
          <p class="font-medium leading-5 text-desa-dark-green">
            {{ development.person_in_charge }}
          </p>
        </div>
      </section>
      <hr class="border-desa-background" />
      <section id="Points" class="flex flex-col gap-6">
        <div class="point flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="p-[14px] shrink-0 bg-[#FF507017] rounded-2xl">
              <img
                src="@/assets/images/icons/wallet-3-red.svg"
                alt="icon"
                class="size-6 shrink-0"
              />
            </div>
            <div class="flex flex-col gap-1">
              <p class="font-semibold text-lg leading-[22.5px] text-desa-red">
                Rp{{ formatRupiah(development.budget) }}
              </p>
              <h3
                class="font-medium text-sm leading-[17.5px] text-desa-secondary"
              >
                Dana Pembangunan
              </h3>
            </div>
          </div>
        </div>
        <hr class="border-desa-background" />
        <div class="point flex items-center gap-3">
          <div class="p-[14px] shrink-0 bg-[#005CAA17] rounded-2xl">
            <img
              src="@/assets/images/icons/profile-2user-blue.svg"
              alt="icon"
              class="size-6 shrink-0"
            />
          </div>
          <div class="flex flex-col gap-1">
            <p class="font-semibold text-lg leading-[22.5px] text-desa-blue">
              {{ development.development_applicants?.length }} Warga
            </p>
            <h3
              class="font-medium text-sm leading-[17.5px] text-desa-secondary"
            >
              Total Partisipasi
            </h3>
          </div>
        </div>
        <hr class="border-desa-background" />
        <div class="point flex items-center gap-3">
          <div class="p-[14px] shrink-0 bg-desa-foreshadow rounded-2xl">
            <img
              src="@/assets/images/icons/calendar-2-dark-green.svg"
              alt="icon"
              class="size-6 shrink-0"
            />
          </div>
          <div class="flex flex-col gap-1">
            <p
              class="font-semibold text-lg leading-[22.5px] text-desa-dark-green"
            >
              {{ development.start_date }}
            </p>
            <h3
              class="font-medium text-sm leading-[17.5px] text-desa-secondary"
            >
              Tanggal Pelaksanaan
            </h3>
          </div>
        </div>
        <hr class="border-desa-background" />
      </section>
      <section id="Tentang-Pembangunan" class="flex flex-col gap-3">
        <h2 class="font-medium text-sm leading-[17.5px] text-desa-secondary">
          Tentang Pembangunan
        </h2>
        <p class="font-medium leading-8">
          {{ development.description }}
        </p>
      </section>
    </div>
    <div class="flex flex-col gap-6 rounded-2xl flex-1 h-fit bg-white p-6">
      <section id="Applicant-Details" class="flex flex-col gap-6">
        <h2 class="font-medium text-sm leading-[17.5px] text-desa-secondary">
          Applicant Details
        </h2>
        <div class="point flex items-center gap-3">
          <div class="p-[14px] shrink-0 bg-desa-foreshadow rounded-2xl">
            <img
              src="@/assets/images/icons/timer-dark-green.svg"
              alt="icon"
              class="size-6 shrink-0"
            />
          </div>
          <div class="flex flex-col gap-1">
            <p
              class="font-semibold text-lg leading-[22.5px] text-desa-dark-green"
            >
              {{ development.days }} Hari
            </p>
            <h3
              class="font-medium text-sm leading-[17.5px] text-desa-secondary"
            >
              Days Needed
            </h3>
          </div>
        </div>
        <hr class="border-desa-background" />
        <div class="point flex items-center gap-3">
          <div class="p-[14px] shrink-0 bg-desa-foreshadow rounded-2xl">
            <img
              src="@/assets/images/icons/calendar-tick-dark-green.svg"
              alt="icon"
              class="size-6 shrink-0"
            />
          </div>
          <div class="flex flex-col gap-1">
            <p
              class="font-semibold text-lg leading-[22.5px] text-desa-dark-green"
            >
              {{ formatToClientTimezone(development.end_date) }}
            </p>
            <h3
              class="font-medium text-sm leading-[17.5px] text-desa-secondary"
            >
              Perkiraan Selesai
            </h3>
          </div>
        </div>
        <hr class="border-desa-background" />
        <div class="point flex items-center gap-3">
          <div class="p-[14px] shrink-0 bg-desa-foreshadow rounded-2xl">
            <img
              src="@/assets/images/icons/dollar-square-dark-green.svg"
              alt="icon"
              class="size-6 shrink-0"
            />
          </div>
          <div class="flex flex-col gap-1">
            <p
              class="font-semibold text-lg leading-[22.5px] text-desa-dark-green"
            >
              Pembayaran diatur di balai desa.
            </p>
            <h3
              class="font-medium text-sm leading-[17.5px] text-desa-secondary"
            >
              Bayaran Kerja
            </h3>
          </div>
        </div>
        <hr class="border-desa-background" />
      </section>
      <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
        <button
          type="button"
          id="Pelamar-Applicant-Button"
          class="flex items-center justify-between"
          @click="showModalApplicant = true"
        >
          <div class="flex items-center gap-3">
            <div
              class="flex items-center justify-center size-[52px] shrink-0 rounded-full bg-desa-foreshadow overflow-hidden"
            >
              <img
                id="default-Profile-Image"
                src="@/assets/images/photos/kk-preview.png"
                alt="image"
                class="size-full object-cover"
              />
            </div>
            <div class="flex flex-col gap-1 items-start">
              <p
                id="default-Profile-Name"
                class="font-semibold text-lg leading-[22.5px]"
              >
                {{
                  applicant.user_id ? selectedUser.name : "Pelamar Applicant"
                }}
              </p>
              <div class="flex items-center gap-1">
                <img
                  id="Icon-If-Filled"
                  src="@/assets/images/icons/briefcase-secondary-green.svg"
                  alt="icon"
                  class="[&.input-is-filled]:block hidden size-[18px] shrink-0"
                />
                <h3
                  id="default-Profile-Status"
                  class="font-medium text-sm leading-[17.5px] text-desa-secondary"
                >
                  {{ applicant.user_id ? "" : "Pilih Anggota Keluarga" }}
                </h3>
              </div>
            </div>
          </div>
          <img
            src="@/assets/images/icons/arrow-square-right-secondary-green.svg"
            alt="icon"
            class="size-6 shrink-0"
          />
        </button>
        <hr class="border-desa-background" />
        <button
          :disabled="loadingApplicant"
          type="submit"
          class="font-medium leading-5 text-white py-[18px] flex justify-center items-center bg-desa-dark-green rounded-2xl gap-2 disabled:bg-desa-soft-green disabled:cursor-not-allowed"
        >
          <span v-if="!loadingApplicant">Confirm & Apply Now</span>
          <span v-else>Loading...</span>
        </button>
        <!-- modal -->
        <div
          id="modal"
          class="fixed inset-0 flex items-center justify-center bg-[#001B1ACC] z-50"
          v-if="showModalApplicant"
        >
          <div class="bg-white rounded-2xl p-4 w-[760px] flex flex-col gap-6">
            <div class="flex items-center justify-between">
              <div class="flex flex-col gap-2">
                <h3 class="font-semibold text-2xl leading-[30px]">
                  Pilih Pelamar Applicant
                </h3>
                <p
                  class="font-medium text-sm leading-[17.5px] text-desa-secondary"
                >
                  Pilih salah satu anggota keluarga
                </p>
              </div>
              <button
                @click="showModalApplicant = false"
                id="closeModal"
                class="py-4 px-6 border border-desa-background rounded-2xl bg-white flex items-center gap-2"
              >
                <img
                  src="@/assets/images/icons/close-square-secondary-green.svg"
                  alt="icon"
                  class="size-6 shrink-0"
                />
                <p class="font-medium leading-5 text-desa-secondary">Tutup</p>
              </button>
            </div>
            <hr class="border-desa-background" />
            <ul
              id="Profile-List"
              class="flex flex-col gap-6 max-h-[497px] overflow-y-auto hide-scrollbar px-[1.5px] pb-[2px]"
            >
              <li>
                <label class="profile flex flex-col gap-3 bg-white rounded-3xl">
                  <h4
                    class="font-medium leading-[17.5px] text-sm text-desa-secondary"
                  >
                    You
                  </h4>
                  <div
                    class="data rounded-2xl border border-desa-background p-6 flex items-center gap-[49px] hover:ring-[1.5px] hover:ring-desa-dark-green transition-all duration-300"
                  >
                    <div class="name flex items-center gap-3">
                      <div
                        class="flex size-[64px] shrink-0 rounded-full overflow-hidden bg-desa-foreshadow"
                      >
                        <img
                          :src="user.head_of_family?.profile_picture"
                          class="w-full h-full object-cover"
                          alt="photo"
                        />
                      </div>
                      <div class="flex flex-col gap-[6px]">
                        <h5
                          class="font-semibold text-lg leading-[22.5px] truncate w-[164px]"
                        >
                          {{ user.name }}
                        </h5>
                        <div class="flex items-center gap-1">
                          <img
                            src="@/assets/images/icons/briefcase-secondary-green.svg"
                            alt="icon"
                            class="size-[18px] shrink-0"
                          />
                          <p
                            class="font-medium leading-5 text-desa-secondary truncate w-[142px]"
                          >
                            {{ user.head_of_family?.occupation }}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="nik flex flex-col gap-[6px]">
                      <div class="flex items-center gap-1">
                        <img
                          src="@/assets/images/icons/keyboard-secondary-green.svg"
                          alt="icon"
                          class="size-[18px] shrink-0"
                        />
                        <h5
                          class="font-medium text-sm leading-[17.5px] text-desa-secondary"
                        >
                          NIK
                        </h5>
                      </div>
                      <p class="font-semibold leading-5 truncate w-[155px]">
                        {{ user.head_of_family?.identity_number }}
                      </p>
                    </div>
                    <div class="umur flex flex-col gap-[6px]">
                      <div class="flex items-center gap-1">
                        <img
                          src="@/assets/images/icons/timer-secondary-green.svg"
                          alt="icon"
                          class="size-[18px] shrink-0"
                        />
                        <h5
                          class="font-medium text-sm leading-[17.5px] text-desa-secondary"
                        >
                          Umur
                        </h5>
                      </div>
                      <p class="font-semibold leading-5 truncate w-[92px]">
                        {{ calculateAge(user.head_of_family?.date_of_birth) }}
                        Tahun
                      </p>
                    </div>
                    <input
                      @click="handleSelectApplicant(user)"
                      required
                      type="radio"
                      name="anggota1"
                      class="flex size-[30px] shrink-0 accent-desa-dark-green"
                    />
                  </div>
                </label>
              </li>
              <li v-for="(member, index) in familyMembers" :key="index">
                <label class="profile flex flex-col gap-3 bg-white rounded-3xl">
                  <h4
                    class="font-medium leading-[17.5px] text-sm text-desa-secondary"
                  >
                    Anggota Keluarga ({{ index + 1 }})
                  </h4>
                  <div
                    class="data rounded-2xl border border-desa-background p-6 flex items-center gap-[49px] hover:ring-[1.5px] hover:ring-desa-dark-green transition-all duration-300"
                  >
                    <div class="name flex items-center gap-3">
                      <div
                        class="flex size-[64px] shrink-0 rounded-full overflow-hidden bg-desa-foreshadow"
                      >
                        <img
                          :src="member.profile_picture"
                          class="w-full h-full object-cover"
                          alt="photo"
                        />
                      </div>
                      <div class="flex flex-col gap-[6px]">
                        <h5
                          class="font-semibold text-lg leading-[22.5px] truncate w-[164px]"
                        >
                          {{ member.user?.name }}
                        </h5>
                        <div class="flex items-center gap-1">
                          <img
                            src="@/assets/images/icons/briefcase-secondary-green.svg"
                            alt="icon"
                            class="size-[18px] shrink-0"
                          />
                          <p
                            class="font-medium leading-5 text-desa-secondary truncate w-[142px]"
                          >
                            {{ member.occupation }}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="nik flex flex-col gap-[6px]">
                      <div class="flex items-center gap-1">
                        <img
                          src="@/assets/images/icons/keyboard-secondary-green.svg"
                          alt="icon"
                          class="size-[18px] shrink-0"
                        />
                        <h5
                          class="font-medium text-sm leading-[17.5px] text-desa-secondary"
                        >
                          NIK
                        </h5>
                      </div>
                      <p class="font-semibold leading-5 truncate w-[155px]">
                        {{ member.identity_number }}
                      </p>
                    </div>
                    <div class="umur flex flex-col gap-[6px]">
                      <div class="flex items-center gap-1">
                        <img
                          src="@/assets/images/icons/timer-secondary-green.svg"
                          alt="icon"
                          class="size-[18px] shrink-0"
                        />
                        <h5
                          class="font-medium text-sm leading-[17.5px] text-desa-secondary"
                        >
                          Umur
                        </h5>
                      </div>
                      <p class="font-semibold leading-5 truncate w-[92px]">
                        {{ calculateAge(member.date_of_birth) }} Tahun
                      </p>
                    </div>
                    <input
                      @click="handleSelectApplicant(member.user)"
                      required
                      type="radio"
                      :name="'anggota' + (index + 2)"
                      class="flex size-[30px] shrink-0 accent-desa-dark-green"
                    />
                  </div>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  </div>

  <ModalDelete
    :loading="loading"
    :show="showModalDelete"
    title="Data Pembangunan"
    @close="showModalDelete = false"
    @confirm="handleDelete"
  />
</template>

<script setup>
import ModalDelete from "@/components/ui/ModalDelete.vue";
import {
  calculateAge,
  formatDateTime,
  formatRupiah,
  formatToClientTimezone,
} from "@/helpers/format";
import { can } from "@/helpers/permissionHelper";
import router from "@/router";
import { useAuthStore } from "@/stores/auth";
import { useDevelopmentStore } from "@/stores/development";
import { useDevelopmentApplicantStore } from "@/stores/developmentApplicant";
import { useFamilyMemberStore } from "@/stores/familyMember";
import { storeToRefs } from "pinia";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const developmentStore = useDevelopmentStore();
const developmentApplicantStore = useDevelopmentApplicantStore();

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

const familyMemberStore = useFamilyMemberStore();
const { fetchFamilyMembers } = familyMemberStore;
const { familyMembers } = storeToRefs(familyMemberStore);

const { fetchDevelopment, fetchDeleteDevelopment } = developmentStore;
const { loading, error, success } = storeToRefs(developmentStore);

const { fetchDevelopmentApplicantStore } = developmentApplicantStore;
const { loading: loadingApplicant } = storeToRefs(developmentApplicantStore);

const development = ref({});

const applicant = ref({
  development_id: null,
  user_id: null,
});

const selectedUser = ref({
  name: "",
});

const showModalDelete = ref(false);
const showModalApplicant = ref(false);

const loadData = async () => {
  const res = await fetchDevelopment(route.params.id);

  development.value = res;
  development.value.days = Math.ceil(
    (new Date(res.end_date) - new Date(res.start_date)) / (1000 * 60 * 60 * 24)
  );
  applicant.value.development_id = res.id;
};

const handleDelete = async () => {
  await fetchDeleteDevelopment(route.params.id);

  router.push({ name: "development" });
};

const handleSubmit = async () => {
  await fetchDevelopmentApplicantStore({
    ...applicant.value,
  });
};

const handleSelectApplicant = (user) => {
  applicant.value.user_id = user.id;
  selectedUser.value.name = user.name;
  showModalApplicant.value = false;
};

onMounted(() => {
  loadData();
  setTimeout(() => {
    success.value = null;
  }, 2500);
});

watch(
  user,
  (newUser) => {
    if (newUser?.role === "head-of-family") {
      fetchFamilyMembers();
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped></style>
