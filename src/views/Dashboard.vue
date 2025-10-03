<template>
  <h1 class="font-semibold text-2xl">Desa Statistics</h1>
  <div id="Row-1" class="flex gap-[14px]">
    <div
      class="flex flex-col w-[calc(389/1000*100%)] h-[358px] rounded-2xl p-6 gap-6 gradient-vertical"
    >
      <img
        src="@/assets/images/icons/gift-orange-background.svg"
        class="flex size-[86px] shrink-0"
        alt="icon"
      />
      <div class="flex flex-col gap-3">
        <p class="font-medium text-sm text-desa-lime">— Bantuan Sosial</p>
        <p class="font-semibold text-2xl text-white text-nowrap">
          Dari Desa untuk Warga ❤️
        </p>
        <p class="text-white">
          Wujudkan kesejahteraan desa dengan bantuan sosial yang tepat sasaran.
        </p>
      </div>
      <a
        href="#"
        class="flex items-center justify-between rounded-2xl p-4 gap-[10px] bg-white"
      >
        <span class="font-medium text-desa-dark-green leading-5"
          >Bikin Bantuan Sosial</span
        >
        <img
          src="@/assets/images/icons/add-square-dark-green.svg"
          class="flex size-6 shrink-0"
          alt="icon"
        />
      </a>
    </div>
    <section
      id="Statistics"
      class="grid grid-cols-2 flex-1 shrink-0 gap-[14px]"
    >
      <div class="card flex flex-col w-full rounded-2xl p-6 gap-3 bg-white">
        <div class="flex items-center justify-between">
          <p class="font-medium text-desa-secondary">Jumlah Penduduk</p>
          <img
            src="@/assets/images/icons/profil-2user-foreshadow-background.svg"
            class="flex size-12 shrink-0"
            alt="icon"
          />
        </div>
        <div class="flex flex-col gap-[6px]">
          <p class="font-semibold text-[32px] leading-10">
            {{ dashboardData?.residents }}
          </p>
          <div class="flex items-center gap-0.5">
            <img
              src="@/assets/images/icons/trend-up-dark-green-fill.svg"
              class="flex size-[18px] shrink-0"
              alt="icon"
            />
            <p class="font-medium text-sm text-desa-secondary">
              <span class="text-desa-dark-green">+12%</span>
              dari bulan sebelumnya
            </p>
          </div>
        </div>
      </div>
      <div class="card flex flex-col w-full rounded-2xl p-6 gap-3 bg-white">
        <div class="flex items-center justify-between">
          <p class="font-medium text-desa-secondary">Pembangunan</p>
          <img
            src="@/assets/images/icons/buildings-foreshadow-background.svg"
            class="flex size-12 shrink-0"
            alt="icon"
          />
        </div>
        <div class="flex flex-col gap-[6px]">
          <p class="font-semibold text-[32px] leading-10">
            {{ dashboardData?.developments }}
          </p>
          <div class="flex items-center gap-0.5">
            <img
              src="@/assets/images/icons/trend-up-dark-green-fill.svg"
              class="flex size-[18px] shrink-0"
              alt="icon"
            />
            <p class="font-medium text-sm text-desa-secondary">
              <span class="text-desa-dark-green">+12%</span>
              dari bulan sebelumnya
            </p>
          </div>
        </div>
      </div>
      <div class="card flex flex-col w-full rounded-2xl p-6 gap-3 bg-white">
        <div class="flex items-center justify-between">
          <p class="font-medium text-desa-secondary">Kepala Rumah</p>
          <img
            src="@/assets/images/icons/crown-foreshadow-background.svg"
            class="flex size-12 shrink-0"
            alt="icon"
          />
        </div>
        <div class="flex flex-col gap-[6px]">
          <p class="font-semibold text-[32px] leading-10">
            {{ dashboardData?.head_of_families }}
          </p>
          <div class="flex items-center gap-0.5">
            <img
              src="@/assets/images/icons/trend-up-dark-green-fill.svg"
              class="flex size-[18px] shrink-0"
              alt="icon"
            />
            <p class="font-medium text-sm text-desa-secondary">
              <span class="text-desa-dark-green">+12%</span>
              dari bulan sebelumnya
            </p>
          </div>
        </div>
      </div>
      <div class="card flex flex-col w-full rounded-2xl p-6 gap-3 bg-white">
        <div class="flex items-center justify-between">
          <p class="font-medium text-desa-secondary">Total Events</p>
          <img
            src="@/assets/images/icons/calendar-2-foreshadow-background.svg"
            class="flex size-12 shrink-0"
            alt="icon"
          />
        </div>
        <div class="flex flex-col gap-[6px]">
          <p class="font-semibold text-[32px] leading-10">
            {{ dashboardData?.events }}
          </p>
          <div class="flex items-center gap-0.5">
            <img
              src="@/assets/images/icons/trend-up-dark-green-fill.svg"
              class="flex size-[18px] shrink-0"
              alt="icon"
            />
            <p class="font-medium text-sm text-desa-secondary">
              <span class="text-desa-dark-green">+12%</span>
              dari bulan sebelumnya
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div id="Row-2" class="flex gap-[14px]">
    <section
      id="Bantuan-Sosial"
      class="flex flex-col w-[calc(497/1000*100%)] shrink-0 rounded-2xl bg-white"
    >
      <div class="flex flex-col gap-3 p-6">
        <div class="flex items-center justify-between">
          <p class="font-medium text-desa-secondary">Bantuan Sosial</p>
          <img
            src="@/assets/images/icons/bag-2-foreshadow-background.svg"
            class="flex size-12 shrink-0"
            alt="icon"
          />
        </div>
        <div class="flex flex-col gap-[6px]">
          <p class="font-semibold text-[32px] leading-10">192</p>
          <div class="flex items-center gap-0.5">
            <img
              src="@/assets/images/icons/trend-up-dark-green-fill.svg"
              class="flex size-[18px] shrink-0"
              alt="icon"
            />
            <p class="font-medium text-sm text-desa-secondary">
              <span class="text-desa-dark-green">+12%</span>
              dari bulan sebelumnya
            </p>
          </div>
        </div>
      </div>
      <hr class="border-desa-foreshadow" />
      <div class="flex flex-col gap-4 p-6">
        <p class="font-semibold text-[20px] leading-[25px] text-left w-full">
          Bansos Terakhir
        </p>
        <div class="card flex items-center w-full gap-3">
          <div
            class="flex size-[72px] shrink-0 rounded-2xl bg-desa-foreshadow items-center justify-center"
          >
            <img
              src="@/assets/images/icons/money-dark-green.svg"
              class="flex size-9 shrink-0"
              alt="icon"
            />
          </div>
          <div class="flex flex-col gap-[6px] w-full">
            <p class="font-semibold text-xl leading-[25px]">Rp362.500.000</p>
            <div
              class="flex items-center gap-0.5 font-medium text-desa-secondary"
            >
              <img
                src="@/assets/images/icons/profile-secondary-green.svg"
                class="flex size-[18px] shrink-0"
                alt="icon"
              />
              <span class="line-clamp-1"> Diberikan oleh Shayna Sakura </span>
            </div>
          </div>
          <div
            class="badge rounded-full p-3 gap-2 flex w-[100px] justify-center shrink-0 bg-desa-yellow"
          >
            <span class="font-semibold text-xs text-white uppercase"
              >Menunggu</span
            >
          </div>
        </div>
        <hr class="border-desa-foreshadow last-of-type:hidden" />
        <div class="card flex items-center w-full gap-3">
          <div
            class="flex size-[72px] shrink-0 rounded-2xl bg-desa-foreshadow items-center justify-center"
          >
            <img
              src="@/assets/images/icons/bag-2-dark-green.svg"
              class="flex size-9 shrink-0"
              alt="icon"
            />
          </div>
          <div class="flex flex-col gap-[6px] w-full">
            <p class="font-semibold text-xl leading-[25px]">Beras 10kg</p>
            <div
              class="flex items-center gap-0.5 font-medium text-desa-secondary"
            >
              <img
                src="@/assets/images/icons/profile-secondary-green.svg"
                class="flex size-[18px] shrink-0"
                alt="icon"
              />
              <span class="line-clamp-1"> Diberikan oleh Angga Hikari </span>
            </div>
          </div>
          <div
            class="badge rounded-full p-3 gap-2 flex w-[100px] justify-center shrink-0 bg-desa-dark-green"
          >
            <span class="font-semibold text-xs text-white uppercase"
              >Diterima</span
            >
          </div>
        </div>
        <hr class="border-desa-foreshadow last-of-type:hidden" />
        <div class="card flex items-center w-full gap-3">
          <div
            class="flex size-[72px] shrink-0 rounded-2xl bg-desa-foreshadow items-center justify-center"
          >
            <img
              src="@/assets/images/icons/money-dark-green.svg"
              class="flex size-9 shrink-0"
              alt="icon"
            />
          </div>
          <div class="flex flex-col gap-[6px] w-full">
            <p class="font-semibold text-xl leading-[25px]">Rp52.500.000</p>
            <div
              class="flex items-center gap-0.5 font-medium text-desa-secondary"
            >
              <img
                src="@/assets/images/icons/profile-secondary-green.svg"
                class="flex size-[18px] shrink-0"
                alt="icon"
              />
              <span class="line-clamp-1"> Diberikan oleh Obito Uciha </span>
            </div>
          </div>
          <div
            class="badge rounded-full p-3 gap-2 flex w-[100px] justify-center shrink-0 bg-desa-orange"
          >
            <span class="font-semibold text-xs text-white uppercase"
              >Ditolak</span
            >
          </div>
        </div>
        <hr class="border-desa-foreshadow last-of-type:hidden" />
        <div class="card flex items-center w-full gap-3">
          <div
            class="flex size-[72px] shrink-0 rounded-2xl bg-desa-foreshadow items-center justify-center"
          >
            <img
              src="@/assets/images/icons/money-dark-green.svg"
              class="flex size-9 shrink-0"
              alt="icon"
            />
          </div>
          <div class="flex flex-col gap-[6px] w-full">
            <p class="font-semibold text-xl leading-[25px]">Rp52.500.000</p>
            <div
              class="flex items-center gap-0.5 font-medium text-desa-secondary"
            >
              <img
                src="@/assets/images/icons/profile-secondary-green.svg"
                class="flex size-[18px] shrink-0"
                alt="icon"
              />
              <span class="line-clamp-1"> Diberikan oleh Masayoshi </span>
            </div>
          </div>
          <div
            class="badge rounded-full p-3 gap-2 flex w-[100px] justify-center shrink-0 bg-desa-dark-green"
          >
            <span class="font-semibold text-xs text-white uppercase"
              >Diterima</span
            >
          </div>
        </div>
        <hr class="border-desa-foreshadow last-of-type:hidden" />
        <div
          class="hidden m-auto h-[384px] flex flex-col shrink-0 justify-center items-center gap-6"
        >
          <img
            src="@/assets/images/icons/bag-cross-secondary.svg"
            class="flex size-[52px] shrink-0"
            alt="icon"
          />
          <p class="font-medium leading-5 text-center text-desa-secondary">
            Ups, nampaknya belum bansos
          </p>
        </div>
      </div>
    </section>
    <section
      id="Event"
      class="flex flex-col flex-1 shrink-0 rounded-2xl bg-white"
    >
      <div id="Date-Picker" class="flex flex-col gap-4 p-6">
        <div class="flex items-center justify-between">
          <button
            class="flex items-center justify-center size-14 rounded-2xl border border-desa-foreshadow hover:border-desa-dark-green"
          >
            <img
              src="@/assets/images/icons/arrow-left-secondary-green.svg"
              class="flex size-6 shrink-0"
              alt="icon"
            />
          </button>
          <p class="font-semibold text-xl">December 2024</p>
          <button
            class="flex items-center justify-center size-14 rounded-2xl border border-desa-foreshadow hover:border-desa-dark-green"
          >
            <img
              src="@/assets/images/icons/arrow-left-secondary-green.svg"
              class="flex size-6 shrink-0 rotate-180"
              alt="icon"
            />
          </button>
        </div>
        <div class="flex justify-between">
          <button
            class="group flex flex-col items-center w-[46px] h-[76px] shrink-0 gap-3"
          >
            <div
              class="flex rounded-full size-[46px] items-center justify-center bg-desa-foreshadow group-[.active]:bg-desa-soft-green"
            >
              <span
                class="font-medium text-desa-dark-green group-[.active]:text-white"
              >
                28
              </span>
            </div>
            <span
              class="font-medium text-sm text-desa-secondary group-[.active]:text-desa-black"
            >
              Sen
            </span>
          </button>
          <button
            class="group flex flex-col items-center w-[46px] h-[76px] shrink-0 gap-3"
          >
            <div
              class="flex rounded-full size-[46px] items-center justify-center bg-desa-foreshadow group-[.active]:bg-desa-soft-green"
            >
              <span
                class="font-medium text-desa-dark-green group-[.active]:text-white"
              >
                29
              </span>
            </div>
            <span
              class="font-medium text-sm text-desa-secondary group-[.active]:text-desa-black"
            >
              Sel
            </span>
          </button>
          <button
            class="group flex flex-col items-center w-[46px] h-[76px] shrink-0 gap-3"
          >
            <div
              class="flex rounded-full size-[46px] items-center justify-center bg-desa-foreshadow group-[.active]:bg-desa-soft-green"
            >
              <span
                class="font-medium text-desa-dark-green group-[.active]:text-white"
              >
                30
              </span>
            </div>
            <span
              class="font-medium text-sm text-desa-secondary group-[.active]:text-desa-black"
            >
              Rab
            </span>
          </button>
          <button
            class="group flex flex-col items-center w-[46px] h-[76px] shrink-0 gap-3 active"
          >
            <div
              class="flex rounded-full size-[46px] items-center justify-center bg-desa-foreshadow group-[.active]:bg-desa-soft-green"
            >
              <span
                class="font-medium text-desa-dark-green group-[.active]:text-white"
              >
                31
              </span>
            </div>
            <span
              class="font-medium text-sm text-desa-secondary group-[.active]:text-desa-black"
            >
              Kam
            </span>
          </button>
          <button
            class="group flex flex-col items-center w-[46px] h-[76px] shrink-0 gap-3"
          >
            <div
              class="flex rounded-full size-[46px] items-center justify-center bg-desa-foreshadow group-[.active]:bg-desa-soft-green"
            >
              <span
                class="font-medium text-desa-dark-green group-[.active]:text-white"
              >
                1
              </span>
            </div>
            <span
              class="font-medium text-sm text-desa-secondary group-[.active]:text-desa-black"
            >
              Jum
            </span>
          </button>
          <button
            class="group flex flex-col items-center w-[46px] h-[76px] shrink-0 gap-3"
          >
            <div
              class="flex rounded-full size-[46px] items-center justify-center bg-desa-foreshadow group-[.active]:bg-desa-soft-green"
            >
              <span
                class="font-medium text-desa-dark-green group-[.active]:text-white"
              >
                2
              </span>
            </div>
            <span
              class="font-medium text-sm text-desa-secondary group-[.active]:text-desa-black"
            >
              Sab
            </span>
          </button>
          <button
            class="group flex flex-col items-center w-[46px] h-[76px] shrink-0 gap-3"
          >
            <div
              class="flex rounded-full size-[46px] items-center justify-center bg-desa-foreshadow group-[.active]:bg-desa-soft-green"
            >
              <span
                class="font-medium text-desa-dark-green group-[.active]:text-white"
              >
                3
              </span>
            </div>
            <span
              class="font-medium text-sm text-desa-secondary group-[.active]:text-desa-black"
            >
              Min
            </span>
          </button>
        </div>
      </div>
      <div id="Events" class="flex flex-col flex-1 gap-4 p-6">
        <div class="flex items-center justify-between">
          <button>
            <img
              src="@/assets/images/icons/arrow-left-secondary-green.svg"
              class="flex size-6 shrink-0"
              alt="icon"
            />
          </button>
          <span class="font-medium text-desa-secondary"
            >Upcoming Events (2)</span
          >
          <button>
            <img
              src="@/assets/images/icons/arrow-left-secondary-green.svg"
              class="flex size-6 shrink-0 rotate-180"
              alt="icon"
            />
          </button>
        </div>
        <div
          class="event-card relative flex w-full h-[365px] shrink-0 rounded-2xl bg-desa-background overflow-hidden"
        >
          <img
            src="@/assets/images/thumbnails/event-image-1.png"
            class="w-full h-full object-cover object-top"
            alt="thumbnails"
          />
          <div
            class="absolute inset-3 top-auto text-white flex flex-col rounded-[18px] border border-white/20 p-4 gap-[6px] backdrop-blur-xl bg-white/[2%]"
          >
            <p class="font-semibold text-xl leading-[25px]">
              Belajar Coding Bersama
            </p>
            <div class="flex items-center gap-1">
              <img
                src="@/assets/images/icons/clock-white.svg"
                class="flex size-[18px] shrink-0"
                alt="icon"
              />
              <p class="font-medium">11:30 WIB</p>
            </div>
          </div>
        </div>
        <div
          class="event-empty-state hidden m-auto h-[384px] flex flex-col shrink-0 justify-center items-center gap-6"
        >
          <img
            src="@/assets/images/icons/calendar-remove-secondary-green.svg"
            class="flex size-[52px] shrink-0"
            alt="icon"
          />
          <p class="font-medium leading-5 text-center text-desa-secondary">
            Ups, nampaknya belum ada event
          </p>
        </div>
      </div>
    </section>
  </div>
  <div id="Row-3" class="flex gap-[14px]">
    <section
      id="Total-Aplicants"
      class="flex flex-col gap-[14px] w-[calc(603/1000*100%)]"
    >
      <div class="flex flex-col flex-1 shrink-0 rounded-2xl bg-white">
        <div class="flex flex-col gap-3 p-6">
          <div class="flex items-center justify-between">
            <p class="font-medium text-desa-secondary">Total Applicants</p>
            <img
              src="@/assets/images/icons/document-text-foreshadow-background.svg"
              class="flex size-12 shrink-0"
              alt="icon"
            />
          </div>
          <div class="flex flex-col gap-[6px]">
            <p class="font-semibold text-[32px] leading-10">1.200</p>
            <div class="flex items-center gap-0.5">
              <img
                src="@/assets/images/icons/trend-up-dark-green-fill.svg"
                class="flex size-[18px] shrink-0"
                alt="icon"
              />
              <p class="font-medium text-sm text-desa-secondary">
                <span class="text-desa-dark-green">+12%</span>
                dari bulan sebelumnya
              </p>
            </div>
          </div>
        </div>
        <hr class="border-desa-foreshadow" />
        <div class="flex flex-col gap-4 p-6">
          <p class="font-semibold text-[20px] leading-[25px] text-left w-full">
            Applicant Terakhir
          </p>
          <div class="card flex items-center w-full gap-3">
            <div
              class="flex size-[72px] shrink-0 rounded-2xl bg-desa-foreshadow overflow-hidden"
            >
              <img
                src="@/assets/images/thumbnails/kd-applicant-1.png"
                class="w-full h-full object-cover"
                alt="icon"
              />
            </div>
            <div class="flex flex-col gap-[6px] w-full">
              <div class="flex items-center gap-[6px]">
                <div
                  class="flex size-8 rounded-full overflow-hidden bg-desa-foreshadow"
                >
                  <img
                    src="@/assets/images/photos/kk-photo-1.png"
                    class="w-full h-full object-cover"
                    alt="icon"
                  />
                </div>
                <p class="font-medium text-xl leading-[22.5px] line-clamp-1">
                  Masayoshi
                </p>
              </div>
              <span class="font-medium text-desa-secondary line-clamp-1">
                Melamar pembangunan Jalanan Utama Desa
              </span>
            </div>
            <div
              class="badge rounded-full p-3 gap-2 flex w-[100px] justify-center shrink-0 bg-desa-yellow"
            >
              <span class="font-semibold text-xs text-white uppercase"
                >Menunggu</span
              >
            </div>
          </div>
          <hr class="border-desa-foreshadow last-of-type:hidden" />
          <div class="card flex items-center w-full gap-3">
            <div
              class="flex size-[72px] shrink-0 rounded-2xl bg-desa-foreshadow overflow-hidden"
            >
              <img
                src="@/assets/images/thumbnails/kd-applicant-2.png"
                class="w-full h-full object-cover"
                alt="icon"
              />
            </div>
            <div class="flex flex-col gap-[6px] w-full">
              <div class="flex items-center gap-[6px]">
                <div
                  class="flex size-8 rounded-full overflow-hidden bg-desa-foreshadow"
                >
                  <img
                    src="@/assets/images/photos/kk-photo-2.png"
                    class="w-full h-full object-cover"
                    alt="icon"
                  />
                </div>
                <p class="font-medium text-xl leading-[22.5px] line-clamp-1">
                  Surti Jasmine
                </p>
              </div>
              <span class="font-medium text-desa-secondary line-clamp-1">
                Melamar pembangunan Balai Desa
              </span>
            </div>
            <div
              class="badge rounded-full p-3 gap-2 flex w-[100px] justify-center shrink-0 bg-desa-dark-green"
            >
              <span class="font-semibold text-xs text-white uppercase"
                >Diterima</span
              >
            </div>
          </div>
          <hr class="border-desa-foreshadow last-of-type:hidden" />
          <div class="card flex items-center w-full gap-3">
            <div
              class="flex size-[72px] shrink-0 rounded-2xl bg-desa-foreshadow overflow-hidden"
            >
              <img
                src="@/assets/images/thumbnails/kd-applicant-3.png"
                class="w-full h-full object-cover"
                alt="icon"
              />
            </div>
            <div class="flex flex-col gap-[6px] w-full">
              <div class="flex items-center gap-[6px]">
                <div
                  class="flex size-8 rounded-full overflow-hidden bg-desa-foreshadow"
                >
                  <img
                    src="@/assets/images/photos/kk-photo-3.png"
                    class="w-full h-full object-cover"
                    alt="icon"
                  />
                </div>
                <p class="font-medium text-xl leading-[22.5px] line-clamp-1">
                  Mirna Wonongso
                </p>
              </div>
              <span class="font-medium text-desa-secondary line-clamp-1">
                Melamar pembangunan Puskemas Desa
              </span>
            </div>
            <div
              class="badge rounded-full p-3 gap-2 flex w-[100px] justify-center shrink-0 bg-desa-orange"
            >
              <span class="font-semibold text-xs text-white uppercase"
                >Ditolak</span
              >
            </div>
          </div>
          <hr class="border-desa-foreshadow last-of-type:hidden" />
          <div
            class="hidden m-auto h-[280px] flex flex-col shrink-0 justify-center items-center gap-6"
          >
            <img
              src="@/assets/images/icons/note-remove-secondary.svg"
              class="flex size-[52px] shrink-0"
              alt="icon"
            />
            <p class="font-medium leading-5 text-center text-desa-secondary">
              Ups, nampaknya belum ada Applicant
            </p>
          </div>
        </div>
      </div>
      <div
        class="flex items-center justify-between h-[125px] rounded-2xl p-8 gap-4 gradient-horizontal"
      >
        <div class="flex flex-col gap-[6px]">
          <p class="font-medium text-sm text-desa-lime">— Unduh Data Desa</p>
          <p class="font-semibold text-2xl text-white text-nowrap">
            Data Desa Terkini
          </p>
        </div>
        <a
          href="#"
          class="flex items-center flex-nowrap rounded-2xl p-4 gap-[10px] bg-white"
        >
          <span class="font-medium text-desa-dark-green">Download Laporan</span>
          <img
            src="@/assets/images/icons/receive-square-dark-green.svg"
            class="flex size-6 shrink-0"
            alt="icon"
          />
        </a>
      </div>
    </section>
    <section
      id="statistik-Penduduk"
      class="flex flex-col flex-1 shrink-0 gap-4 p-6 rounded-2xl bg-white"
    >
      <div class="flex items-center justify-between">
        <p class="font-medium text-desa-secondary">Statistics Penduduk</p>
        <img
          src="@/assets/images/icons/profile-2user-foreshadow-background.svg"
          class="flex size-12 shrink-0"
          alt="icon"
        />
      </div>
      <div class="relative">
        <div
          class="absolute flex flex-col gap-1 justify-center items-center text-center inset-0"
        >
          <p class="font-semibold text-[32px] leading-10">243.000</p>
          <p class="font-medium text-sm text-desa-secondary">Jumlah Penduduk</p>
        </div>
        <canvas id="myChart" class="size-[288px] mx-auto"></canvas>
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex items-center justify-between">
          <div class="flex flex-col gap-1">
            <p class="font-medium leading-5 flex">
              <span
                class="block size-2 rounded-full my-auto bg-desa-dark-green mr-[6px]"
              ></span>
              Pria
            </p>
            <p class="font-medium text-sm text-desa-secondary">
              Rentang usia: 32-36 tahun
            </p>
          </div>
          <p class="flex items-center font-medium leading-5">
            114.210
            <img
              src="@/assets/images/icons/user-black.svg"
              class="flex size-[18px] shrink-0 ml-0.5"
              alt="icon"
            />
          </p>
        </div>
        <hr class="border-desa-foreshadow" />
        <div class="flex items-center justify-between">
          <div class="flex flex-col gap-1">
            <p class="font-medium leading-5 flex">
              <span
                class="block size-2 rounded-full my-auto bg-desa-soft-green mr-[6px]"
              ></span>
              Wanita
            </p>
            <p class="font-medium text-sm text-desa-secondary">
              Rentang usia: 26-31 tahun
            </p>
          </div>
          <p class="flex items-center font-medium leading-5">
            97.200
            <img
              src="@/assets/images/icons/user-black.svg"
              class="flex size-[18px] shrink-0 ml-0.5"
              alt="icon"
            />
          </p>
        </div>
        <hr class="border-desa-foreshadow" />
        <div class="flex items-center justify-between">
          <div class="flex flex-col gap-1">
            <p class="font-medium leading-5 flex">
              <span
                class="block size-2 rounded-full my-auto bg-desa-orange mr-[6px]"
              ></span>
              Anak-anak
            </p>
            <p class="font-medium text-sm text-desa-secondary">
              Rentang usia: 6-12 tahun
            </p>
          </div>
          <p class="flex items-center font-medium leading-5">
            24.300
            <img
              src="@/assets/images/icons/user-black.svg"
              class="flex size-[18px] shrink-0 ml-0.5"
              alt="icon"
            />
          </p>
        </div>
        <hr class="border-desa-foreshadow" />
        <div class="flex items-center justify-between">
          <div class="flex flex-col gap-1">
            <p class="font-medium leading-5 flex">
              <span
                class="block size-2 rounded-full my-auto bg-desa-yellow mr-[6px]"
              ></span>
              Balita
            </p>
            <p class="font-medium text-sm text-desa-secondary">
              Rentang usia: 0-5 tahun
            </p>
          </div>
          <p class="flex items-center font-medium leading-5">
            7.290
            <img
              src="@/assets/images/icons/user-black.svg"
              class="flex size-[18px] shrink-0 ml-0.5"
              alt="icon"
            />
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useDashboardStore } from "@/stores/dashboard";
import { Chart } from "chart.js/auto";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const dashboardStore = useDashboardStore();
const { dashboardData, loading } = storeToRefs(dashboardStore);
const { fetchDashboardData } = dashboardStore;

const getResidentStatistic = () => {
  const chart = document.getElementById("myChart");

  new Chart(chart, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [114210, 97200, 24300, 7290],
          backgroundColor: ["#34613A", "#8EBD55", "#FA7139", "#FBAD48"],
        },
      ],
    },
    options: {
      scales: {
        display: false,
      },
      datasets: {
        doughnut: {
          spacing: 2,
          borderRadius: 6,
          cutout: "69%",
        },
      },
    },
  });
};

onMounted(() => {
  fetchDashboardData(), getResidentStatistic();
});
</script>

<style lang="scss" scoped></style>
