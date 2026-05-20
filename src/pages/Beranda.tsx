import React from 'react';
import { Header } from '../components/Header';

type BerandaProps = {
  currentPage: 'beranda' | 'bantuanDarurat' | 'tanyaHakmu';
  setCurrentPage: (page: 'beranda' | 'bantuanDarurat' | 'tanyaHakmu') => void;
};

export const Beranda: React.FC<BerandaProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="mx-auto max-w-7xl px-4 py-8 md:px-12 space-y-8">
        <div className="overflow-hidden rounded-3xl bg-white border border-slate-100 p-6 md:p-10 shadow-2xs flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-xl space-y-3 text-center md:text-left">
            <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Selamat Pagi, Rekan Kerja.
            </h1>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed">
              Keselamatan Anda adalah prioritas utama kami hari ini. Tetap waspada, kenali hak hukum Anda, dan jangan ragu untuk melaporkan bahaya di tempat kerja.
            </p>
          </div>
          <div className="w-full md:w-[320px] shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" 
              alt="Pekerja Lapangan" 
              className="h-48 w-full rounded-2xl object-cover shadow-xs"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-3xl bg-[#BA0913] p-6 md:p-8 text-white shadow-md flex flex-col justify-between min-h-[240px]">
            <div>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-2xs font-bold uppercase tracking-wider text-white">
                🚨 Aksi Segera
              </span>
              <h2 className="mt-4 text-2xl font-black md:text-3xl">Butuh Bantuan Darurat?</h2>
              <p className="mt-2 text-xs md:text-sm text-white/80 leading-relaxed max-w-xl">
                Klik tombol di bawah untuk segera menghubungi tim tanggap darurat dan mendapatkan bantuan medis atau keamanan di lokasi Anda sekarang juga.
              </p>
            </div>
            <div className="mt-6">
              <button className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs md:text-sm font-black text-[#BA0913] shadow-xs hover:bg-slate-50 transition-colors">
                📞 HUBUNGI BANTUAN SEKARANG
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="cursor-pointer rounded-2xl border border-slate-100 bg-white p-4 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                ⚠️
              </div>
              <div className="mt-4">
                <h3 className="text-xs font-black text-slate-900">Lapor Bahaya</h3>
                <p className="text-3xs text-slate-400 mt-0.5">Temuan di site</p>
              </div>
            </div>

            <div 
              onClick={() => setCurrentPage('tanyaHakmu')}
              className="cursor-pointer rounded-2xl border border-slate-100 bg-white p-4 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                ⚖️
              </div>
              <div className="mt-4">
                <h3 className="text-xs font-black text-slate-900">Tanya Hakmu</h3>
                <p className="text-3xs text-slate-400 mt-0.5">Konsultasi Hukum</p>
              </div>
            </div>

            <div className="cursor-pointer rounded-2xl border border-slate-100 bg-white p-4 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                🎓
              </div>
              <div className="mt-4">
                <h3 className="text-xs font-black text-slate-900">Edukasi</h3>
                <p className="text-3xs text-slate-400 mt-0.5">Materi Pelatihan</p>
              </div>
            </div>

            <div className="cursor-pointer rounded-2xl border border-slate-100 bg-white p-4 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                📇
              </div>
              <div className="mt-4">
                <h3 className="text-xs font-black text-slate-900">Kontak Darurat</h3>
                <p className="text-3xs text-slate-400 mt-0.5">Daftar Kontak</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black text-slate-900">Tips Keselamatan Hari Ini</h2>
              <div className="flex gap-2">
                <button className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50" aria-label="Previous">
                  ‹
                </button>
                <button className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50" aria-label="Next">
                  ›
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white min-h-[260px] flex flex-col justify-end p-6 md:p-8">
              <img 
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80" 
                alt="Alat Pelindung Diri" 
                className="absolute inset-0 h-full w-full object-cover opacity-30"
              />
              <div className="relative z-10 space-y-2 max-w-xl">
                <span className="inline-block rounded-md bg-red-600 px-2 py-0.5 text-3xs font-bold uppercase tracking-wider">
                  Penting
                </span>
                <h3 className="text-lg font-black md:text-xl">Gunakan APD Lengkap di Area Produksi</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Memastikan helm, sepatu bot, dan rompi Anda dalam kondisi prima dapat mengurangi risiko kecelakaan hingga 85%.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-black text-slate-900">Aktivitas Terakhir</h2>
            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-2xs flex flex-col justify-between h-[260px]">
              <div className="space-y-4 overflow-y-auto pr-1">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 text-xs">
                    ✔️
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900">Laporan Diterima</h4>
                    <p className="text-3xs text-slate-400">Laporan bahaya kabel terkelupas telah diverifikasi.</p>
                    <span className="text-[10px] font-medium text-slate-400 mt-1 block">2 JAM YANG LALU</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 text-xs">
                    🎓
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900">Modul Selesai</h4>
                    <p className="text-3xs text-slate-400">Anda menyelesaikan 'Dasar K3 Perkebunan'.</p>
                    <span className="text-[10px] font-medium text-slate-400 mt-1 block">KEMARIN</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 text-xs">
                    📋
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-900">Update Kebijakan</h4>
                    <p className="text-3xs text-slate-400">Protokol kesehatan baru telah diunggah.</p>
                    <span className="text-[10px] font-medium text-slate-400 mt-1 block">3 HARI LALU</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-4 rounded-xl border border-slate-200 py-2.5 text-center text-xs font-black text-red-600 hover:bg-slate-50 transition-colors">
                Lihat Semua Riwayat
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};