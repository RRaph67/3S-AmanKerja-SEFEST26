import React, { useState } from 'react';
import { Header } from '../components/Header';

type LaporBahayaProps = {
  currentPage: 'beranda' | 'bantuanDarurat' | 'laporBahaya' | 'tanyaHakmu' | 'edukasi';
  setCurrentPage: (page: 'beranda' | 'bantuanDarurat' | 'laporBahaya' | 'tanyaHakmu' | 'edukasi') => void;
};

export const LaporBahaya: React.FC<LaporBahayaProps> = ({ currentPage, setCurrentPage }) => {
  const [kategori, setKategori] = useState<'kebakaran' | 'kimia' | 'fisik' | 'lainnya'>('kebakaran');
  const [isAnonim, setIsAnonim] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="max-w-[1200px] mx-auto px-6 py-8 space-y-10">
        {/* Header Title */}
        <div className="mb-10 max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Lapor Bahaya
          </h1>
          <p className="mt-2 text-sm text-slate-500 leading-relaxed">
            Lindungi diri Anda dan rekan kerja dengan melaporkan potensi bahaya di lingkungan kerja secara cepat dan akurat.
          </p>
        </div>

        {/* Layout Utama: 2 Kolom */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Kolom Kiri: Form Pelaporan */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-100 p-6 md:p-8 shadow-2xs">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              
              {/* Kategori Bahaya */}
              <div>
                <label className="text-xs font-bold text-slate-900 block mb-3">Kategori Bahaya</label>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  
                  {/* Kebakaran */}
                  <button
                    type="button"
                    onClick={() => setKategori('kebakaran')}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all ${
                      kategori === 'kebakaran'
                        ? 'border-red-500 bg-red-50/50 text-red-600 font-semibold'
                        : 'border-slate-100 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-lg mb-1">🔥</span>
                    <span className="text-3xs tracking-wide">Kebakaran</span>
                  </button>

                  {/* Kimia */}
                  <button
                    type="button"
                    onClick={() => setKategori('kimia')}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all ${
                      kategori === 'kimia'
                        ? 'border-red-500 bg-red-50/50 text-red-600 font-semibold'
                        : 'border-slate-100 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-lg mb-1">🧪</span>
                    <span className="text-3xs tracking-wide">Kimia</span>
                  </button>

                  {/* Fisik */}
                  <button
                    type="button"
                    onClick={() => setKategori('fisik')}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all ${
                      kategori === 'fisik'
                        ? 'border-red-500 bg-red-50/50 text-red-600 font-semibold'
                        : 'border-slate-100 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-lg mb-1">🏗️</span>
                    <span className="text-3xs tracking-wide">Fisik</span>
                  </button>

                  {/* Lainnya */}
                  <button
                    type="button"
                    onClick={() => setKategori('lainnya')}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border text-center transition-all ${
                      kategori === 'lainnya'
                        ? 'border-red-500 bg-red-50/50 text-red-600 font-semibold'
                        : 'border-slate-100 bg-white text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-lg mb-1">•••</span>
                    <span className="text-3xs tracking-wide">Lainnya</span>
                  </button>

                </div>
              </div>

              {/* Input Lokasi & Waktu (Grid) */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-bold text-slate-900 block mb-2">Lokasi Kejadian</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">📍</span>
                    <input
                      type="text"
                      placeholder="Contoh: Lantai 3, Area Produksi"
                      className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] py-3 pl-9 pr-4 text-xs outline-hidden focus:border-slate-400 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-900 block mb-2">Waktu Terdeteksi</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">🕒</span>
                    <input
                      type="text"
                      placeholder="Sekarang"
                      className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] py-3 pl-9 pr-4 text-xs outline-hidden focus:border-slate-400 focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Deskripsi Singkat */}
              <div>
                <label className="text-xs font-bold text-slate-900 block mb-2">Deskripsi Singkat</label>
                <textarea
                  rows={4}
                  placeholder="Jelaskan detail bahaya yang ditemukan..."
                  className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 text-xs outline-hidden focus:border-slate-400 focus:bg-white transition-all resize-none"
                ></textarea>
              </div>

              {/* Foto Bukti Area (Drag & Drop Mock) */}
              <div>
                <label className="text-xs font-bold text-slate-900 block mb-2">Foto Bukti (Opsional)</label>
                <div className="border-2 border-dashed border-slate-200 rounded-2xl bg-[#F8FAFC] p-8 text-center cursor-pointer hover:bg-slate-50 transition-all flex flex-col items-center justify-center">
                  <span className="text-2xl mb-2 text-slate-400">☁️</span>
                  <p className="text-xs font-bold text-slate-800">Tarik & Lepas foto di sini</p>
                  <p className="text-3xs text-slate-400 mt-1">Atau klik untuk memilih file dari perangkat Anda</p>
                </div>
              </div>

              {/* Toggle Lapor Secara Anonim */}
              <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4 border border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="text-base text-slate-500">👁️‍🗨️</span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Lapor Secara Anonim</h4>
                    <p className="text-3xs text-slate-400 mt-0.5">Identitas Anda tidak akan ditampilkan ke publik.</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsAnonim(!isAnonim)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
                    isAnonim ? 'bg-slate-900' : 'bg-slate-200'
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out ${
                      isAnonim ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-black py-3.5 text-xs font-bold text-white transition-all hover:bg-slate-900 active:scale-99"
              >
                <span>🚀</span> Submit Report
              </button>

            </form>
          </div>

          {/* Kolom Kanan: Status & Rekomendasi */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Box Status Laporan Terkirim */}
            <div className="rounded-3xl border border-amber-400 bg-white p-6 shadow-xs relative overflow-hidden before:absolute before:top-0 before:left-0 before:h-full before:w-1.5 before:bg-amber-400">
              <div className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-500 text-sm font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Laporan Terkirim!</h3>
                  <p className="text-3xs text-slate-400 mt-0.5 font-mono">ID Laporan: #AK-88291</p>
                  <p className="mt-3 text-3xs text-slate-500 leading-relaxed">
                    Terima kasih atas kontribusi Anda. Tim K3 kami akan segera meninjau lokasi dalam kurun waktu 15-30 menit ke depan.
                  </p>
                  <button className="mt-4 w-full rounded-xl border border-slate-900 bg-transparent py-2.5 text-3xs font-bold text-slate-900 transition-colors hover:bg-slate-50">
                    Lihat Status Laporan
                  </button>
                </div>
              </div>
            </div>

            {/* List Rekomendasi Tindakan */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold tracking-wider text-slate-400 uppercase">Rekomendasi Tindakan</h3>

              {/* Isolasi Area */}
              <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4">
                <span className="text-base mt-0.5">⚠️</span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Isolasi Area</h4>
                  <p className="text-3xs text-slate-400 mt-1 leading-relaxed">
                    Pastikan tidak ada rekan kerja yang mendekati area bahaya sebelum petugas tiba.
                  </p>
                </div>
              </div>

              {/* Beritahu Supervisor */}
              <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4">
                <span className="text-base mt-0.5">🗣️</span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Beritahu Supervisor</h4>
                  <p className="text-3xs text-slate-400 mt-1 leading-relaxed">
                    Laporkan secara verbal kepada pengawas terdekat untuk tindakan darurat lokal.
                  </p>
                </div>
              </div>

              {/* Pantau Perkembangan */}
              <div className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4">
                <span className="text-base mt-0.5">🔄</span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Pantau Perkembangan</h4>
                  <p className="text-3xs text-slate-400 mt-1 leading-relaxed">
                    Cek tab "Aktivitas Saya" secara berkala untuk pembaruan status laporan.
                  </p>
                </div>
              </div>
            </div>

            {/* Banner Zero Accident Visual */}
            <div className="relative overflow-hidden rounded-3xl bg-slate-900 h-44 flex flex-col justify-end p-5 text-white">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
                alt="Safety Banner"
                className="absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-multiply"
              />
              <div className="relative z-10">
                <span className="rounded bg-amber-500 px-1.5 py-0.5 text-4xs font-bold text-slate-950 uppercase tracking-wide">Tip Keselamatan</span>
                <h4 className="mt-2 text-base font-black tracking-tight leading-tight">Zero Accident<br />Dimulai Dari Anda.</h4>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};