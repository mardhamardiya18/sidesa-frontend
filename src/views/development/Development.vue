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

  <div class="flex flex-col gap-[14px]">
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
          >
            <div class="flex items-center justify-between">
              <p class="flex items-center gap-1">
                <img
                  src="@/assets/images/icons/calendar-2-secondary-green.svg"
                  class="flex size-[18px] shrink-0"
                  alt="icon"
                />
                <span class="font-medium text-sm text-desa-secondary"
                  >Tue, 09 Jan 2025</span
                >
              </p>
              <div
                class="badge rounded-full p-3 gap-2 flex w-[100px] justify-center shrink-0 bg-desa-yellow"
              >
                <span class="font-semibold text-xs text-white uppercase"
                  >Menunggu</span
                >
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
                    Feri Prio Utomo
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
          <div
            class="card flex flex-col gap-6 rounded-3xl p-6 border border-desa-background bg-white"
          >
            <div class="flex items-center justify-between">
              <p class="flex items-center gap-1">
                <img
                  src="@/assets/images/icons/calendar-2-secondary-green.svg"
                  class="flex size-[18px] shrink-0"
                  alt="icon"
                />
                <span class="font-medium text-sm text-desa-secondary"
                  >Tue, 09 Jan 2025</span
                >
              </p>
              <div
                class="badge rounded-full p-3 gap-2 flex w-[100px] justify-center shrink-0 bg-desa-yellow"
              >
                <span class="font-semibold text-xs text-white uppercase"
                  >Menunggu</span
                >
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
                    Feri Prio Utomo
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
          <div
            class="card flex flex-col gap-6 rounded-3xl p-6 border border-desa-background bg-white"
          >
            <div class="flex items-center justify-between">
              <p class="flex items-center gap-1">
                <img
                  src="@/assets/images/icons/calendar-2-secondary-green.svg"
                  class="flex size-[18px] shrink-0"
                  alt="icon"
                />
                <span class="font-medium text-sm text-desa-secondary"
                  >Tue, 09 Jan 2025</span
                >
              </p>
              <div
                class="badge rounded-full p-3 gap-2 flex w-[100px] justify-center shrink-0 bg-desa-yellow"
              >
                <span class="font-semibold text-xs text-white uppercase"
                  >Menunggu</span
                >
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
                    Feri Prio Utomo
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
          <div
            class="card flex flex-col gap-6 rounded-3xl p-6 border border-desa-background bg-white"
          >
            <div class="flex items-center justify-between">
              <p class="flex items-center gap-1">
                <img
                  src="@/assets/images/icons/calendar-2-secondary-green.svg"
                  class="flex size-[18px] shrink-0"
                  alt="icon"
                />
                <span class="font-medium text-sm text-desa-secondary"
                  >Tue, 09 Jan 2025</span
                >
              </p>
              <div
                class="badge rounded-full p-3 gap-2 flex w-[100px] justify-center shrink-0 bg-desa-red"
              >
                <span class="font-semibold text-xs text-white uppercase"
                  >Ditolak</span
                >
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
                    Feri Prio Utomo
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
              <div
                class="flex items-center gap-3 justify-end shrink-0 w-[252px]"
              >
                <a
                  href="#"
                  class="flex items-center shrink-0 gap-[10px] rounded-2xl py-4 px-6 bg-desa-black"
                >
                  <span class="font-medium text-white">Manage</span>
                </a>
              </div>
            </div>
          </div>
          <div
            class="card flex flex-col gap-6 rounded-3xl p-6 border border-desa-background bg-white"
          >
            <div class="flex items-center justify-between">
              <p class="flex items-center gap-1">
                <img
                  src="@/assets/images/icons/calendar-2-secondary-green.svg"
                  class="flex size-[18px] shrink-0"
                  alt="icon"
                />
                <span class="font-medium text-sm text-desa-secondary"
                  >Tue, 09 Jan 2025</span
                >
              </p>
              <div
                class="badge rounded-full p-3 gap-2 flex w-[100px] justify-center shrink-0 bg-desa-dark-green"
              >
                <span class="font-semibold text-xs text-white uppercase"
                  >Diterima</span
                >
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
                    Feri Prio Utomo
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
              <div
                class="flex items-center gap-3 justify-end shrink-0 w-[252px]"
              >
                <a
                  href="#"
                  class="flex items-center shrink-0 gap-[10px] rounded-2xl py-4 px-6 bg-desa-black"
                >
                  <span class="font-medium text-white">Manage</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
import { formatRupiah, formatToClientTimezone } from "@/helpers/format";
import { can } from "@/helpers/permissionHelper";
import router from "@/router";
import { useAuthStore } from "@/stores/auth";
import { useDevelopmentStore } from "@/stores/development";
import { storeToRefs } from "pinia";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const developmentStore = useDevelopmentStore();
const route = useRoute();

const { fetchDevelopment, fetchDeleteDevelopment } = developmentStore;
const { loading, error, success } = storeToRefs(developmentStore);

const development = ref({});
const showModalDelete = ref(false);

const loadData = async () => {
  const res = await fetchDevelopment(route.params.id);

  development.value = res;
};

const handleDelete = async () => {
  await fetchDeleteDevelopment(route.params.id);

  router.push({ name: "development" });
};

const canEditDevelopment = computed(() => {
  return can("development-edit");
});

onMounted(() => {
  loadData();
  setTimeout(() => {
    success.value = null;
  }, 2500);
});
</script>

<style lang="scss" scoped></style>
