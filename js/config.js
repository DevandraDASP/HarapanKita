// Pengaturan SidoarjoVerse.
// Kosongkan SUPABASE_URL untuk MODE DEMO (data disimpan di browser saja).
// Isi dengan Project URL & anon public key dari Supabase (Settings > API)
// supaya KTP warga dan perubahan admin tersimpan online untuk semua orang.
export const CONFIG = {
  SUPABASE_URL: 'https://fbwklpzamlfvccdowcwu.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_c2HwpIcKpn3UsGvdpJ653Q_c9hyRcAO',
  KOTA_ID: 'sidoarjo',
  // Hanya untuk mode demo. Di mode Supabase, admin login dengan email & password Supabase.
  DEMO_ADMIN_PASSWORD: 'admin',
  // Berapa karakter warga (dari KTP terbaru) yang ditampilkan berjalan di peta.
  MAKS_WARGA_DI_PETA: 30,
};

// Harapan Kita Custom Config
window.HARAPAN_KITA_CONFIG = {
    ADMIN_PASSWORD: 'akusayangnadya',
    AUTO_GROWTH: true,
    WEATHER_DISASTERS_ENABLED: true,
    CORRUPTION_AUTONOMY: true
};
