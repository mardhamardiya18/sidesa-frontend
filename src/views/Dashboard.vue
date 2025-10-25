<template>
  <div id="dashboard-admin" v-if="user?.role === 'admin'">
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
            Wujudkan kesejahteraan desa dengan bantuan sosial yang tepat
            sasaran.
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
            <p
              class="font-semibold text-[20px] leading-[25px] text-left w-full"
            >
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
            <span class="font-medium text-desa-dark-green"
              >Download Laporan</span
            >
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
            <p class="font-medium text-sm text-desa-secondary">
              Jumlah Penduduk
            </p>
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
  </div>

  <div id="dashboard-kepala-keluarga" v-if="user?.role === 'head-of-family'">
    <header class="mb-4">
      <h1 class="font-semibold text-2xl leading-[30px]">Rumah Tangga Stats</h1>
    </header>
    <div class="flex gap-[14px]">
      <div class="flex flex-col gap-[14px] shrink-0 w-[calc(463/1000*100%)]">
        <section
          id="Bantuan-Sosial"
          class="flex flex-col gap-6 p-6 gradient-vertical rounded-2xl"
        >
          <img
            src="@/assets/images/icons/bag-orange-background.svg"
            alt="icon"
            class="size-[86px] shrink-0"
          />
          <div class="flex flex-col gap-[12px]">
            <h2 class="font-medium text-sm leading-[17.5px] text-[#DEFF6E]">
              — Bantuan Sosial
            </h2>
            <h3 class="font-semibold text-2xl leading-[30px] text-white">
              Dari Desa Untuk Warga ❤️
            </h3>
            <p class="leading-6 text-white">
              Terima bantuan sosial dari desa yang tepat untuk kebutuhan
              spesifikmu setiap saat. 🫶🏻
            </p>
          </div>
          <router-link :to="{ name: 'social-assistance' }">
            <div
              class="flex items-center justify-between px-4 py-[18px] bg-white rounded-2xl"
            >
              <p class="font-medium leading-5 text-desa-dark-green">
                Ajukan Bantuan Sosial
              </p>
              <img
                src="@/assets/images/icons/add-square-dark-green.svg"
                alt="icon"
                class="size-6 shrink-0"
              />
            </div>
          </router-link>
        </section>
        <section
          id="Events-Joined"
          class="flex flex-col gap-6 p-6 bg-white rounded-2xl"
        >
          <div class="flex items-center justify-between">
            <div class="flex flex-col gap-[6px]">
              <strong class="font-semibold text-[32px] leading-[40px]">{{
                eventParticipants.length
              }}</strong>
              <h2 class="font-medium leading-5 text-desa-secondary">
                Events Joined
              </h2>
            </div>
            <div
              class="p-[12px] rounded-full flex justify-center items-center bg-desa-foreshadow shrink-0"
            >
              <img
                src="@/assets/images/icons/calendar-2-dark-green.svg"
                alt="icon"
                class="size-6 shrink-0"
              />
            </div>
          </div>
          <hr class="border-desa-background" />
          <div id="Recent-Event" class="flex flex-col gap-4">
            <h3 class="font-medium leading-5 text-desa-secondary">
              Recent Events
            </h3>
            <div
              v-for="(item, index) in eventParticipants"
              :key="index"
              class="event py-4 rounded-2xl border border-desa-background flex flex-col gap-4"
            >
              <div class="time px-4 flex items-center justify-between">
                <p
                  class="font-medium text-sm leading-[17.5px] text-desa-secondary"
                >
                  {{ item.event.date }}
                </p>
                <img
                  src="@/assets/images/icons/calendar-2-secondary-green.svg"
                  alt="icon"
                  class="size-[18px] shrink-0"
                />
              </div>
              <hr class="border-desa-background mx-4" />
              <div class="card px-4 flex items-center gap-3">
                <div
                  class="flex items-center justify-center w-[100px] h-[80px] shrink-0 rounded-2xl overflow-auto"
                >
                  <img
                    :src="item.event.thumbnail"
                    alt="image"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="flex flex-col gap-[6px] w-full">
                  <h4
                    class="font-semibold text-lg leading-[22.5px] line-clamp-1"
                  >
                    {{ item.event.name }}
                  </h4>
                  <div class="flex items-center gap-1">
                    <img
                      src="@/assets/images/icons/profile-2user-orange.svg"
                      alt="icon"
                      class="size-[18px] shrink-0"
                    />
                    <p
                      class="font-semibold text-sm leading-[17.5px] text-desa-orange"
                    >
                      {{ item.event.event_participants.length }}
                    </p>
                    <p
                      class="font-semibold text-sm leading-[17.5px] text-desa-orange line-clamp-1"
                    >
                      total partisipasi
                    </p>
                  </div>
                </div>
              </div>
              <hr class="border-desa-background" />
              <div class="harga-event px-4 flex items-center justify-between">
                <p
                  class="font-medium text-sm leading-[17.5px] text-desa-secondary"
                >
                  Harga Event:
                </p>
                <p class="font-medium leading-5 text-desa-red">
                  Rp {{ formatRupiah(item.event.price) }}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="Pembangunan"
          class="flex flex-col gap-6 p-6 bg-white rounded-2xl"
        >
          <div class="flex items-center justify-between">
            <div class="flex flex-col gap-[6px]">
              <strong class="font-semibold text-[32px] leading-[40px]"
                >5 Applicants</strong
              >
              <h2 class="font-medium leading-5 text-desa-secondary">
                Pembangunan
              </h2>
            </div>
            <div
              class="p-[12px] rounded-full flex justify-center items-center bg-desa-foreshadow shrink-0"
            >
              <img
                src="@/assets/images/icons/calendar-2-dark-green.svg"
                alt="icon"
                class="size-6 shrink-0"
              />
            </div>
          </div>
          <hr class="border-desa-background" />
          <div id="Recent-Applicants" class="flex flex-col gap-4">
            <h3 class="font-medium leading-5 text-desa-secondary">
              Recent Applicants
            </h3>
            <div
              class="applicant p-4 rounded-2xl border border-desa-background flex flex-col gap-4"
            >
              <div class="flex items-center justify-between">
                <div
                  class="flex items-center justify-center w-[100px] h-[80px] shrink-0 rounded-2xl overflow-hidden"
                >
                  <img
                    src="@/assets/images/thumbnails/kk-dashboard-3.png"
                    alt="image"
                    class="size-full shrink-0"
                  />
                </div>
                <div class="group menunggu">
                  <span
                    class="group-[&.menunggu]:flex hidden rounded-full py-[12px] w-[100px] justify-center bg-desa-yellow text-white font-semibold text-xs leading-[15px] shrink-0"
                    >MENUNGGU</span
                  >
                  <span
                    class="group-[&.ditolak]:flex hidden rounded-full py-[12px] w-[100px] justify-center bg-desa-red text-white font-semibold text-xs leading-[15px] shrink-0"
                    >DITOLAK</span
                  >
                  <span
                    class="group-[&.diterima]:flex hidden rounded-full py-[12px] w-[100px] justify-center bg-desa-dark-green text-white font-semibold text-xs leading-[15px] shrink-0"
                    >DITERIMA</span
                  >
                </div>
              </div>
              <div class="flex flex-col gap-1">
                <h5 class="font-semibold text-lg leading-[22.5px] line-clamp-1">
                  Pembangunan Puskesmas Desa
                </h5>
                <div class="flex gap-1">
                  <p class="font-medium leading-5 text-desa-secondary">
                    Penanggung Jawab:
                  </p>
                  <p class="font-semibold leading-5 text-desa-dark-green">
                    Uzumaki Asep
                  </p>
                </div>
              </div>
              <hr class="border-desa-background" />
              <div
                id="Tanggal-Pelaksanaan"
                class="flex items-center gap-[12px]"
              >
                <div
                  class="size-[48px] shrink-0 rounded-full bg-desa-foreshadow flex items-center justify-center"
                >
                  <img
                    src="@/assets/images/icons/calendar-2-dark-green.svg"
                    alt="icon"
                    class="size-6 shrink-0"
                  />
                </div>
                <div class="flex flex-col gap-1">
                  <p class="font-semibold leading-5 text-desa-dark-green">
                    3 Jan 2025
                  </p>
                  <h6
                    class="font-medium text-sm leading-[17.5px] text-desa-secondary"
                  >
                    Tanggal Pelaksanaan
                  </h6>
                </div>
              </div>
              <hr class="border-desa-background" />
              <div id="Waktu-Pelaksanaan" class="flex items-center gap-[12px]">
                <div
                  class="size-[48px] shrink-0 rounded-full bg-desa-foreshadow flex items-center justify-center"
                >
                  <img
                    src="@/assets/images/icons/timer-dark-green.svg"
                    alt="icon"
                    class="size-6 shrink-0"
                  />
                </div>
                <div class="flex flex-col gap-1">
                  <p class="font-semibold leading-5 text-desa-dark-green">
                    24 Hari
                  </p>
                  <h6
                    class="font-medium text-sm leading-[17.5px] text-desa-secondary"
                  >
                    Waktu Pelaksanaan
                  </h6>
                </div>
              </div>
            </div>
            <div
              class="applicant p-4 rounded-2xl border border-desa-background flex flex-col gap-4"
            >
              <div class="flex items-center justify-between">
                <div
                  class="flex items-center justify-center w-[100px] h-[80px] shrink-0 rounded-2xl overflow-hidden"
                >
                  <img
                    src="@/assets/images/thumbnails/kk-dashboard-4.png"
                    alt="image"
                    class="size-full shrink-0"
                  />
                </div>
                <div class="group diterima">
                  <span
                    class="group-[&.menunggu]:flex hidden rounded-full py-[12px] w-[100px] justify-center bg-desa-yellow text-white font-semibold text-xs leading-[15px] shrink-0"
                    >MENUNGGU</span
                  >
                  <span
                    class="group-[&.ditolak]:flex hidden rounded-full py-[12px] w-[100px] justify-center bg-desa-red text-white font-semibold text-xs leading-[15px] shrink-0"
                    >DITOLAK</span
                  >
                  <span
                    class="group-[&.diterima]:flex hidden rounded-full py-[12px] w-[100px] justify-center bg-desa-dark-green text-white font-semibold text-xs leading-[15px] shrink-0"
                    >DITERIMA</span
                  >
                </div>
              </div>
              <div class="flex flex-col gap-1">
                <h5 class="font-semibold text-lg leading-[22.5px] line-clamp-1">
                  Pembangunan Jalanan Utama
                </h5>
                <div class="flex gap-1">
                  <p class="font-medium leading-5 text-desa-secondary">
                    Penanggung Jawab:
                  </p>
                  <p class="font-semibold leading-5 text-desa-dark-green">
                    Uzumaki Asep
                  </p>
                </div>
              </div>
              <hr class="border-desa-background" />
              <div
                id="Tanggal-Pelaksanaan"
                class="flex items-center gap-[12px]"
              >
                <div
                  class="size-[52px] shrink-0 rounded-2xl bg-desa-foreshadow flex items-center justify-center"
                >
                  <img
                    src="@/assets/images/icons/calendar-2-dark-green.svg"
                    alt="icon"
                    class="size-6 shrink-0"
                  />
                </div>
                <div class="flex flex-col gap-1">
                  <p class="font-semibold leading-5 text-desa-dark-green">
                    3 Jan 2025
                  </p>
                  <h6
                    class="font-medium text-sm leading-[17.5px] text-desa-secondary"
                  >
                    Tanggal Pelaksanaan
                  </h6>
                </div>
              </div>
              <hr class="border-desa-background" />
              <div id="Waktu-Pelaksanaan" class="flex items-center gap-[12px]">
                <div
                  class="size-[52px] shrink-0 rounded-2xl bg-desa-foreshadow flex items-center justify-center"
                >
                  <img
                    src="@/assets/images/icons/timer-dark-green.svg"
                    alt="icon"
                    class="size-6 shrink-0"
                  />
                </div>
                <div class="flex flex-col gap-1">
                  <p class="font-semibold leading-5 text-desa-dark-green">
                    24 Hari
                  </p>
                  <h6
                    class="font-medium text-sm leading-[17.5px] text-desa-secondary"
                  >
                    Waktu Pelaksanaan
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="flex flex-col gap-[14px] flex-1">
        <section
          id="Anggota-Keluarga"
          class="flex flex-col gap-6 p-6 bg-white rounded-2xl"
        >
          <div class="flex items-center justify-between">
            <div class="flex flex-col gap-[6px]">
              <strong class="font-semibold text-[32px] leading-[40px]">{{
                familyMembers.length
              }}</strong>
              <h2 class="font-medium leading-5 text-desa-secondary">
                Anggota Keluarga
              </h2>
            </div>
            <div
              class="p-[16px] rounded-full flex justify-center items-center bg-desa-foreshadow shrink-0"
            >
              <img
                src="@/assets/images/icons/profile-2user-dark-green.svg"
                alt="icon"
                class="size-6 shrink-0"
              />
            </div>
          </div>
          <div class="box h-[1px] w-full"></div>
          <div class="people flex flex-col gap-[14px]">
            <div
              v-for="(item, index) in familyMembers"
              :key="index"
              class="rounded-2xl border border-desa-background p-4 flex flex-col gap-6"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-[12px]">
                  <div
                    class="flex size-[64px] shrink-0 rounded-full overflow-hidden bg-desa-foreshadow"
                  >
                    <img
                      :src="item.profile_picture"
                      class="w-full h-full object-cover"
                      alt="photo"
                    />
                  </div>
                  <div class="flex flex-col gap-[6px]">
                    <h4
                      class="font-semibold text-lg leading-[22.5px] line-clamp-1"
                    >
                      {{ item.user.name }}
                    </h4>
                    <div class="flex items-center gap-1">
                      <img
                        src="@/assets/images/icons/briefcase-secondary-green.svg"
                        alt="icon"
                        class="size-[18px] shrink-0"
                      />
                      <p
                        class="font-medium leading-5 text-desa-secondary line-clamp-1"
                      >
                        {{ item.occupation }}
                      </p>
                    </div>
                  </div>
                </div>
                <p class="font-medium leading-5">
                  {{ calculateAge(item.head_of_family_id?.date_of_birth) }}
                  tahun
                </p>
              </div>
              <hr class="border-desa-foreshadow" />
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-1">
                  <img
                    src="@/assets/images/icons/keyboard-secondary-green.svg"
                    alt="icon"
                    class="size-[18px] shrink-0"
                  />
                  <p
                    class="font-medium text-sm leading-[17.5px] text-desa-secondary"
                  >
                    Nomor Induk Kependudukan:
                  </p>
                </div>
                <p class="font-medium leading-5">{{ item.identity_number }}</p>
              </div>
            </div>
          </div>

          <a href="kk-anggota-keluarga.html">
            <div
              class="rounded-2xl py-[18px] bg-desa-dark-green flex justify-center items-center"
            >
              <p class="font-medium leading-5 text-white">View Details</p>
            </div>
          </a>
        </section>
        <section
          id="Pengajuan-Bantuan-Sosial"
          class="flex flex-col gap-6 p-6 bg-white rounded-2xl"
        >
          <div class="flex items-center justify-between">
            <div class="flex flex-col gap-[6px]">
              <strong class="font-semibold text-[32px] leading-[40px]"
                >{{ socialAssistanceRecipients.length }} Pengajuan</strong
              >
              <h2 class="font-medium leading-5 text-desa-secondary">
                Bantuan Sosial
              </h2>
            </div>
            <div
              class="p-[16px] rounded-full flex justify-center items-center bg-desa-foreshadow shrink-0"
            >
              <img
                src="@/assets/images/icons/note-dark-green.svg"
                alt="icon"
                class="size-6 shrink-0"
              />
            </div>
          </div>
          <div class="box h-[1px] w-full"></div>
          <div class="people flex flex-col gap-4">
            <h3 class="font-medium leading-5 text-desa-secondary">
              Recent Bansos
            </h3>
            <div
              v-for="(item, index) in socialAssistanceRecipients"
              :key="index"
              class="bantuan p-4 rounded-2xl border border-desa-background flex flex-col gap-4"
            >
              <div class="flex items-center justify-between">
                <p
                  class="font-medium text-sm leading-[17.5px] text-desa-secondary"
                >
                  {{ formatDateTime(item.created_at) }}
                </p>
                <img
                  src="@/assets/images/icons/calendar-2-secondary-green.svg"
                  alt="icon"
                  class="size-[18px] shrink-0"
                />
              </div>
              <hr class="border-desa-background" />
              <h4 class="font-semibold text-lg leading-[22.5px]">
                {{ item.social_assistance?.name }}
              </h4>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div
                    class="size-[52px] shrink-0 rounded-2xl flex justify-center items-center bg-desa-foreshadow"
                  >
                    <img
                      src="@/assets/images/icons/money-dark-green.svg"
                      alt="icon"
                      class="size-6 shrink-0"
                    />
                  </div>
                  <div class="flex flex-col gap-[6px]">
                    <h5 class="font-semibold text-lg leading-[22.5px]">
                      Rp {{ formatRupiah(item.social_assistance?.amount) }}
                    </h5>
                    <p
                      class="font-medium text-sm leading-[17.5px] text-desa-secondary"
                    >
                      Nominal Pengajuan
                    </p>
                  </div>
                </div>
                <div class="group menunggu">
                  <span
                    class="group-[&.menunggu]:flex hidden rounded-full py-[12px] w-[100px] justify-center text-white font-semibold text-xs leading-[15px] shrink-0 uppercase"
                    :class="{
                      'bg-desa-yellow': item.status == 'approved',
                      'bg-desa-red': item.status == 'pending',
                      'bg-desa-dark-green': item.status == 'rejected',
                    }"
                    >{{
                      item.status === "pending"
                        ? "Tertunda"
                        : item.status === "approved"
                        ? "disetujui"
                        : item.status === "rejected"
                        ? "ditolak"
                        : "unknown"
                    }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="Unduh-Rumah-Tangga-Stat"
          class="rounded-2xl gradient-horizontal pt-[32px] px-[32px] pb-[34px] flex flex-col gap-[32px]"
        >
          <div class="flex items-center gap-4">
            <img
              src="@/assets/images/icons/document-download-orange-background.svg"
              alt="icon"
              class="size-[86px] shrink-0"
            />
            <div class="flex flex-col gap-[6px]">
              <h2 class="font-medium text-sm leading-[17.5px] text-desa-lime">
                — Unduh Rumah Tangga Stat
              </h2>
              <strong class="font-semibold text-2xl leading-[30px] text-white"
                >Statistik Rumah Tangga</strong
              >
            </div>
          </div>
          <button
            type="button"
            class="flex items-center justify-between px-4 py-[18px] bg-white rounded-2xl"
          >
            <p class="font-medium leading-5 text-desa-dark-green">
              Download Laporan
            </p>
            <img
              src="@/assets/images/icons/receive-square-dark-green.svg"
              alt="icon"
              class="size-6 shrink-0"
            />
          </button>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  calculateAge,
  formatDateTime,
  formatRupiah,
  formatToClientTimezone,
} from "@/helpers/format";
import { useAuthStore } from "@/stores/auth";
import { useDashboardStore } from "@/stores/dashboard";
import { useEventParticipantStore } from "@/stores/eventParticipant";
import { useFamilyMemberStore } from "@/stores/familyMember";
import { useSosialAssistanceRecipientStore } from "@/stores/socialAssistanceRecipient";
import { Chart } from "chart.js/auto";
import { storeToRefs } from "pinia";
import { onMounted, watch } from "vue";

const dashboardStore = useDashboardStore();
const { dashboardData, loading } = storeToRefs(dashboardStore);
const { fetchDashboardData } = dashboardStore;

const familyMemberStore = useFamilyMemberStore();
const { fetchFamilyMembers } = familyMemberStore;
const { familyMembers, loading: familyMembersLoading } =
  storeToRefs(familyMemberStore);

const eventParticipantStore = useEventParticipantStore();
const { fetchEventParticipants } = eventParticipantStore;
const { eventParticipants, loading: eventParticipantsLoading } = storeToRefs(
  eventParticipantStore
);

const socialAssistanceRecipientStore = useSosialAssistanceRecipientStore();
const { fetchSocialAssistanceRecipients } = socialAssistanceRecipientStore;
const {
  socialAssistanceRecipients,
  loading: socialAssistanceRecipientsLoading,
} = storeToRefs(socialAssistanceRecipientStore);

const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

const getResidentStatistic = () => {
  const chart = document.getElementById("myChart");

  new Chart(chart, {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [114210, 97200, 24300, 7290],
          backgroundColor: ["#34613A", "#8EBD55", "#FA7139", "#FBAD48"],
          borderRadius: 6,
          spacing: 2,
          cutout: "69%",
        },
      ],
    },
    options: {
      plugins: {
        legend: { display: false },
      },
    },
  });
};

watch(
  () => user.value?.role,
  (newRole) => {
    if (newRole === "admin") {
      fetchDashboardData();
      getResidentStatistic();
    } else if (newRole === "head-of-family") {
      fetchFamilyMembers();
      fetchSocialAssistanceRecipients();
      fetchEventParticipants();
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped></style>
