import numeral from "numeral";
import { DateTime } from "luxon";

export function formatRupiah(value) {
  return numeral(value).format("0,0[.]00");
}

export function parseRupiah(value) {
  return numeral(value).value();
}

export function formatPercentage(value) {
  return numeral(value).format("0,0[.]00%");
}

export function formatDate(date) {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Date(date).toLocaleDateString("id-ID", options);
}

export function formatDateTime(date) {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
}

export function formatTime(time) {
  // --- Penambahan Cek Wajib ---
  // Pastikan 'time' BUKAN null, BUKAN undefined, dan bertipe string.
  if (!time || typeof time !== "string") {
    return ""; // Kembalikan string kosong atau nilai default lainnya
  }
  // -----------------------------

  // Pisahkan string berdasarkan ':'
  const parts = time.split(":");

  // Pastikan setidaknya ada Jam dan Menit (2 bagian)
  if (parts.length >= 2) {
    return `${parts[0]}:${parts[1]}`;
  }

  return time;
}

export function formatToClientTimezone(date) {
  const originalDate = DateTime.fromISO(date, { zone: "utc" });

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return originalDate
    .setZone(timezone)
    .setLocale("id")
    .toFormat("dd LLLL yyyy");
}

export function ucfirst(string) {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : "";
}
