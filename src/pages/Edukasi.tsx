import React from 'react';
import { Header } from '../components/Header';
import { Share, Heart, FileText, Download, Target, Award, Clock } from 'lucide-react';

type EdukasiProps = {
  currentPage: 'beranda' | 'bantuanDarurat' | 'laporBahaya' | 'tanyaHakmu' | 'edukasi';
  setCurrentPage: (page: 'beranda' | 'bantuanDarurat' | 'laporBahaya' | 'tanyaHakmu' | 'edukasi') => void;
};

export const Edukasi: React.FC<EdukasiProps> = ({ currentPage, setCurrentPage }) => {
  // Data untuk Modul agar gambar bisa dinamis
  const modulData = [
    { title: 'Teknik Mengangkat Beban yang Benar', img: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=400&auto=format&fit=crop' },
    { title: 'Prosedur Pemadaman Api Ringan (APAR)', img: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=400&auto=format&fit=crop' },
    { title: 'Pertolongan Pertama pada Kecelakaan (P3K)', img: 'https://picsum.photos/id/20/400/200' },
    { title: 'Kesehatan Mental & Kesejahteraan Kerja', img: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?q=80&w=400&auto=format&fit=crop' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900 pb-20">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="max-w-[1200px] mx-auto px-6 py-8 space-y-10">
        
        {/* --- SECTION 1: HERO --- */}
        <section className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-6">
          <div className="relative rounded-[2rem] bg-slate-900 p-10 text-white overflow-hidden shadow-xl min-h-[360px] flex flex-col justify-between">
            <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Hero" />
            <div className="relative z-10 space-y-4 max-w-lg">
              <span className="bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest inline-block mb-4">Edukasi Keselamatan</span>
              <h1 className="text-4xl font-extrabold leading-[1.1]">Wujudkan Tempat Kerja Yang Aman Bersama-sama</h1>
              <p className="text-gray-300 text-sm">Pelajari hak Anda, kuasai teknik keselamatan terbaru, dan jadilah pahlawan keselamatan di tempat kerja Anda hari ini.</p>
            </div>
            <button className="relative z-10 bg-white text-slate-900 px-8 py-3.5 rounded-full font-bold text-sm w-max hover:bg-gray-100 transition">Mulai Belajar →</button>
          </div>

          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between">
            <div className="flex gap-4">
              <div className="bg-yellow-50 p-4 h-14 w-14 rounded-2xl text-yellow-600"><FileText size={24} /></div>
              <div>
                <h3 className="font-bold text-lg">Tips Hari Ini</h3>
                <p className="text-xs text-gray-400">Selasa, 16 Mei 2023</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed italic my-4">"Selalu pastikan jalur evakuasi bebas dari rintangan. Satu detik yang terbuang karena hambatan bisa berakibat fatal."</p>
            <div className="border-t pt-4 flex justify-between items-center text-slate-400">
              <span className="text-xs font-semibold uppercase">Bagikan Tips</span>
              <div className="flex gap-3"><Share size={18} /> <Heart size={18} /></div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: STATS --- */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Progres Belajar', val: '6/8 Selesai', icon: Target, col: 'text-red-500', bg: 'bg-red-50' },
            { title: 'Lencana Diraih', val: '12 Badge', icon: Award, col: 'text-yellow-600', bg: 'bg-yellow-50' },
            { title: 'Waktu Belajar', val: '24.5 Jam', icon: Clock, col: 'text-teal-600', bg: 'bg-teal-50' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex items-center gap-5">
              <div className={`p-4 rounded-2xl ${item.bg} ${item.col}`}><item.icon size={28} /></div>
              <div>
                <p className="text-[10px] uppercase text-gray-400 font-bold tracking-wider">{item.title}</p>
                <p className="font-extrabold text-xl">{item.val}</p>
              </div>
            </div>
          ))}
        </section>

        {/* --- SECTION 3: MODUL --- */}
        <section>
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl font-extrabold">Modul Pembelajaran</h2>
            <a href="#" className="text-sm font-bold text-red-600">Lihat Semua →</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modulData.map((item, i) => (
              <div key={i} className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition">
                <img src={item.img} alt={item.title} className="w-full h-40 object-cover" />
                <div className="p-6 space-y-4">
                  <h4 className="font-bold text-sm h-10">{item.title}</h4>
                  <button className="w-full bg-red-600 text-white py-3 rounded-xl font-bold text-xs hover:bg-red-700 transition">Mulai Belajar</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 4: INFOGRAFIS & DOKUMEN --- */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold mb-6">Infografis Keselamatan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Ergonomi Ruang Kerja', img: 'https://images.unsplash.com/photo-1506377872008-6645d9d29ef7?q=80&w=200&auto=format&fit=crop' },
                { title: 'Ergonomi Ruang Kerja', img: 'https://picsum.photos/id/21/400/200' },
                { title: 'Penggunaan Alat Pelindung Diri', img: 'https://picsum.photos/id/22/400/200' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-4">
                  <img src={item.img} className="w-16 h-16 rounded-2xl object-cover" alt="Info" />
                  <div>
                    <h4 className="font-bold text-sm">{item.title}</h4>
                    <p className="text-[10px] text-red-600 font-bold mt-1 cursor-pointer">Perbesar →</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold mb-6">Dokumen Penting</h2>
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex justify-between items-center border-b pb-4 last:border-0 last:pb-0">
                  <div className="flex items-center gap-3">
                    <FileText size={20} className="text-red-500" />
                    <div>
                      <p className="text-xs font-bold">Panduan Evakuasi Gempa</p>
                      <p className="text-[10px] text-gray-400">PDF • 2.4 MB</p>
                    </div>
                  </div>
                  <Download size={18} className="text-gray-400 cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col md:flex-row gap-12">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-extrabold leading-tight">Pahami Hak Anda Sebagai Pekerja</h2>
            <p className="text-sm text-gray-500">Undang-Undang Keselamatan Kerja melindungi Anda. Jangan ragu untuk menuntut hak Anda demi keselamatan bersama.</p>
            <button className="bg-slate-900 text-white px-8 py-3.5 rounded-2xl font-bold text-sm">Buka Modul Hukum Kerja</button>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            {['Pasal 12', 'Pasal 13', 'Pasal 15', 'Konsultasi'].map((title, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl border">
                <div className="text-xl mb-2">⚖️</div>
                <h4 className="font-bold text-sm">{title}</h4>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};