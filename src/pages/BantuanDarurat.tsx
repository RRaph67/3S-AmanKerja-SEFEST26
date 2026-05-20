import React from 'react';
import { Header } from '../components/Header';

type BantuanDaruratProps = {
  // Tambahkan 'edukasi' di sini
  currentPage: 'beranda' | 'bantuanDarurat' | 'laporBahaya' | 'tanyaHakmu' | 'edukasi';
  setCurrentPage: (page: 'beranda' | 'bantuanDarurat' | 'laporBahaya' | 'tanyaHakmu' | 'edukasi') => void;
};

export const BantuanDarurat: React.FC<BantuanDaruratProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="max-w-[1200px] mx-auto px-6 py-8 space-y-10">
        {/* Header Judul Halaman */}
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Pusat Bantuan Darurat
            </h1>
            <p className="mt-2 text-base text-slate-500">
              Tetap tenang. Kami di sini untuk membantu Anda mendapatkan bantuan secepat mungkin. Pilih tindakan di bawah ini.
            </p>
          </div>
          {/* Indikator Status GPS */}
          <div className="inline-flex self-start items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-xs font-semibold text-amber-800 border border-amber-100/60 sm:self-auto">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
            Sinyal GPS: Aktif & Akurat
          </div>
        </div>

        {/* Baris Atas: Tombol Utama SOS & Panduan Keselamatan */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Blok Tombol Utama SOS (Kiri) */}
          <div className="flex flex-col items-center justify-between rounded-3xl bg-white p-8 text-center border border-slate-100 shadow-2xs lg:col-span-5">
            <h3 className="text-xl font-bold text-slate-900">Butuh Bantuan Segera?</h3>
            
            {/* Tombol SOS Utama Interaktif */}
            <div className="my-8 flex items-center justify-center">
              <button className="group relative flex h-48 w-48 items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-red-200 transition-all duration-300 hover:bg-red-700 hover:shadow-xl active:scale-95">
                {/* Efek Wave Pulsing Ring */}
                <span className="absolute inset-0 rounded-full bg-red-600 opacity-20 animate-ping group-hover:opacity-30"></span>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-4xl font-bold">*</span>
                  <span className="text-lg font-black tracking-widest">DARURAT</span>
                </div>
              </button>
            </div>

            <p className="max-w-xs text-xs leading-relaxed text-slate-400">
              Tekan dan tahan selama 2 detik untuk mengaktifkan alarm dan mengirim lokasi Anda ke semua kontak keamanan terdekat.
            </p>

            {/* Aksi Sekunder */}
            <div className="mt-6 grid w-full grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 rounded-xl bg-slate-50 border border-slate-100 py-3 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-100">
                📞 Panggilan Darurat
              </button>
              <button className="flex items-center justify-center gap-2 rounded-xl bg-slate-50 border border-slate-100 py-3 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-100">
                ⚙️ Kirim Lokasi
              </button>
            </div>
          </div>

          {/* Blok Panduan Langkah Medis (Kanan) */}
          <div className="rounded-3xl bg-[#0F172A] p-6 text-white shadow-xl lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold">Panduan Keselamatan</h3>
                <span className="rounded-md bg-slate-800 px-2 py-1 text-3xs font-medium uppercase tracking-wider text-slate-400">
                  Langkah Medis
                </span>
              </div>

              {/* Daftar Prosedur */}
              <div className="mt-6 space-y-4">
                {/* No 1 */}
                <div className="flex items-start gap-4 rounded-xl bg-slate-800/40 p-4 border border-slate-800">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-red-600 text-xs font-bold text-white">
                    1
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">Amankan Lokasi</h4>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                      Pastikan tidak ada bahaya susulan (listrik, api, atau benda jatuh) sebelum menolong.
                    </p>
                  </div>
                </div>

                {/* No 2 */}
                <div className="flex items-start gap-4 rounded-xl bg-slate-800/40 p-4 border border-slate-800">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-slate-700 text-xs font-bold text-slate-300">
                    2
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">Cek Kesadaran</h4>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                      Panggil korban dengan suara keras dan tepuk bahunya perlahan.
                    </p>
                  </div>
                </div>

                {/* No 3 */}
                <div className="flex items-start gap-4 rounded-xl bg-slate-800/40 p-4 border border-slate-800">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-slate-700 text-xs font-bold text-slate-300">
                    3
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">Berikan CPR (Jika Perlu)</h4>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                      Tekan bagian tengah dada secara ritmis jika korban tidak bernapas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hint Notice */}
            <div className="mt-6 flex items-center gap-2 rounded-xl bg-amber-500/10 p-3 text-xs text-amber-400 border border-amber-500/20">
              <span>ℹ️</span>
              <p className="text-3xs tracking-wide">Ikuti instruksi suara yang akan dimulai saat tombol darurat ditekan.</p>
            </div>
          </div>
        </div>

        {/* Baris Bawah: Peta Evakuasi & Daftar Kontak Terdekat */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Mock Peta Lokasi (Kiri) */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-200 lg:col-span-8 min-h-[350px] lg:min-h-[450px]">
            {/* Background denah 3D Mockup */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80" 
              alt="Lokasi Peta Evakuasi" 
              className="absolute inset-0 h-full w-full object-cover opacity-85 brightness-90 grayscale-[10%]"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>

            {/* Floating Card Lokasi Terkunci */}
            <div className="absolute left-4 top-4 z-10 max-w-xs rounded-xl bg-white/95 backdrop-blur-md p-4 shadow-md border border-slate-100">
              <div className="flex items-center gap-2 text-red-600 font-bold text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-ping"></span>
                Lokasi Anda Terkunci
              </div>
              <p className="mt-1 text-xs font-semibold text-slate-800">Sektor 4 - Area Konstruksi Barat, Gudang B2</p>
            </div>
          </div>

          {/* Kontak Terdekat List (Kanan) */}
          <div className="flex flex-col justify-between lg:col-span-4 space-y-4">
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900 mb-1">Kontak Terdekat</h3>

              {/* Item Kontak 1 */}
              <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white p-4 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500">
                    🛡️
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Tim Keamanan Utama</h4>
                    <p className="text-3xs text-slate-400 mt-0.5">Jarak: 150m (2 Menit)</p>
                  </div>
                </div>
                <a href="tel:123" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-slate-700 hover:bg-slate-100 transition-colors">
                  📞
                </a>
              </div>

              {/* Item Kontak 2 */}
              <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white p-4 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
                    🏥
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Klinik & Medis</h4>
                    <p className="text-3xs text-slate-400 mt-0.5">Jarak: 400m (5 Menit)</p>
                  </div>
                </div>
                <a href="tel:123" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-slate-700 hover:bg-slate-100 transition-colors">
                  📞
                </a>
              </div>

              {/* Item Kontak 3 */}
              <div className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white p-4 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    👷‍♂️
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Supervisor Site</h4>
                    <p className="text-3xs text-slate-400 mt-0.5">Online: Lokasi Kantor</p>
                  </div>
                </div>
                <a href="tel:123" className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 border border-slate-100 text-slate-700 hover:bg-slate-100 transition-colors">
                  📞
                </a>
              </div>
            </div>

            {/* Tombol Lihat Semua Kontak */}
            <button className="w-full rounded-xl border border-dashed border-slate-300 bg-transparent py-3 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-50">
              Lihat Semua Kontak (12)
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};