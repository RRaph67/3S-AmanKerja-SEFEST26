import React, { useState } from 'react';
import { Header } from '../components/Header';

type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

type TanyaHakmuProps = {
  currentPage: 'beranda' | 'bantuanDarurat' | 'laporBahaya' | 'tanyaHakmu' | 'edukasi';
  setCurrentPage: (page: 'beranda' | 'bantuanDarurat' | 'laporBahaya' | 'tanyaHakmu' | 'edukasi') => void;
};

export const TanyaHakmu: React.FC<TanyaHakmuProps> = ({ currentPage, setCurrentPage }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(2); 

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'Apakah perusahaan boleh memotong gaji karena alasan inventaris rusak?',
      answer: 'Pemotongan gaji untuk ganti rugi barang inventaris yang rusak hanya dapat dilakukan jika ada perjanjian tertulis sebelumnya atau diatur dalam Peraturan Perusahaan (PP) / Perjanjian Kerja Bersama (PKB), dan nilainya tidak boleh melebihi batas maksimal pemotongan upah yang sah menurut hukum.'
    },
    {
      id: 2,
      question: 'Berapa lama maksimal perusahaan boleh menunda gaji?',
      answer: 'Secara hukum, gaji harus dibayarkan sesuai tanggal yang diperjanjikan. Keterlambatan lebih dari 3 hari sudah mulai dikenakan denda administratif yang harus dibayarkan perusahaan kepada pekerja.'
    },
    {
      id: 3,
      question: 'Apa yang harus dilakukan jika perusahaan bangkrut?',
      answer: 'Jika perusahaan pailit atau bangkrut, upah pekerja dan hak-hak normatif lainnya merupakan utang yang didahulukan pembayarannya sesuai dengan ketentuan undang-undang yang berlaku.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 antialiased">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="max-w-[1200px] mx-auto px-6 py-8 space-y-10">
        <div className="mb-10 max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Halo, Apa yang Ingin Kamu Ketahui Tentang Hakmu?
          </h1>
          <p className="mt-3 text-base text-slate-500">
            Kami di sini untuk membantumu memahami perlindungan hukum dan hak-hakmu sebagai pekerja dengan cara yang sederhana dan mudah dimengerti.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="cursor-pointer rounded-2xl border border-slate-100 bg-white p-5 transition-shadow hover:shadow-md">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
              </svg>
            </div>
            <h3 className="mt-4 text-sm font-bold text-slate-900">Kecelakaan Kerja</h3>
            <p className="mt-1 text-xs text-slate-400">Prosedur klaim, biaya pengobatan, dan santunan.</p>
          </div>

          <div className="cursor-pointer rounded-2xl border border-slate-100 bg-white p-5 transition-shadow hover:shadow-md">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125H3.75m16.5 0h.008v.008h-.008v-.008Zm0-3h.008v.008h-.008v-.008Z" />
              </svg>
            </div>
            <h3 className="mt-4 text-sm font-bold text-slate-900">Gaji Tak Dibayar</h3>
            <p className="mt-1 text-xs text-slate-400">Keterlambatan upah, potongan tidak sah, dan lembur.</p>
          </div>

          <div className="cursor-pointer rounded-2xl border border-slate-100 bg-white p-5 transition-shadow hover:shadow-md">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h3 className="mt-4 text-sm font-bold text-slate-900">Jam Kerja</h3>
            <p className="mt-1 text-xs text-slate-400">Waktu istirahat, cuti tahunan, dan jam kerja maksimal.</p>
          </div>

          <div className="cursor-pointer rounded-2xl border border-slate-100 bg-white p-5 transition-shadow hover:shadow-md">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.5a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
              </svg>
            </div>
            <h3 className="mt-4 text-sm font-bold text-slate-900">PHK Sepihak</h3>
            <p className="mt-1 text-xs text-slate-400">Pesangon, alasan pemecatan, dan hak uang pisah.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-3xl bg-white p-6 md:p-8 border border-slate-100">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#1E293B] px-3 py-1 text-2xs font-semibold uppercase tracking-wider text-white">
                  Topik Aktif
                </span>
                <h2 className="text-lg font-bold text-slate-900">Gaji Tidak Dibayar & Upah Lembur</h2>
              </div>
              
              <p className="mt-4 text-sm leading-relaxed text-slate-500">
                Berdasarkan Peraturan Pemerintah (PP) No. 35 Tahun 2021, pengusaha wajib membayar upah pada waktu yang telah disepakati. Jika terjadi keterlambatan, kamu berhak atas denda keterlambatan.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-amber-50/50 p-4 border border-amber-100/50">
                  <div className="flex items-center gap-2 text-amber-800">
                    <span className="text-sm font-bold">ℹ️ Denda Keterlambatan</span>
                  </div>
                  <p className="mt-2 text-xs text-amber-900/80 leading-relaxed">
                    Mulai hari ke-4 sampai ke-8, denda 5% untuk setiap hari keterlambatan dari upah yang seharusnya dibayar.
                  </p>
                </div>

                <div className="rounded-xl bg-orange-50/50 p-4 border border-orange-100/50">
                  <div className="flex items-center gap-2 text-orange-800">
                    <span className="text-sm font-bold">📌 Dasar Hukum</span>
                  </div>
                  <p className="mt-2 text-xs text-orange-900/80 leading-relaxed">
                    UU Cipta Kerja No. 11 Tahun 2020 dan PP No. 36 Tahun 2021 tentang Pengupahan.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-bold text-slate-900">Langkah yang Disarankan:</h4>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-teal-500 bg-teal-50 text-teal-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-3 w-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900">Kumpulkan Bukti Kehadiran</h5>
                      <p className="text-xs text-slate-400">Pastikan kamu memiliki catatan absen atau log kerja yang valid.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-5 w-5 shrink-0 rounded-md border-2 border-slate-300 bg-white"></div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900">Bipartit (Diskusi Internal)</h5>
                      <p className="text-xs text-slate-400">Ajukan keberatan secara tertulis kepada manajemen atau HRD secara baik-baik.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-5 w-5 shrink-0 rounded-md border-2 border-slate-300 bg-white"></div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900">Simpan Slip Gaji Terakhir</h5>
                      <p className="text-xs text-slate-400">Gunakan slip gaji sebagai bukti nominal upah yang biasanya diterima.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-bold text-slate-900">Pertanyaan Sering Diajukan</h3>
              <div className="space-y-3">
                {faqs.map((faq) => {
                  const isOpen = openFaq === faq.id;
                  return (
                    <div key={faq.id} className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-2xs">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                        className={`flex w-full items-center justify-between p-5 text-left transition-colors ${
                          isOpen ? 'bg-[#111827] text-white' : 'text-slate-900 hover:bg-slate-50'
                        }`}
                      >
                        <span className="text-sm font-bold">{faq.question}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </button>
                      
                      {isOpen && (
                        <div className="bg-white p-5 border-t border-slate-100">
                          <p className="text-sm leading-relaxed text-slate-500">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl bg-[#0F172A] p-6 text-white shadow-xl">
              <h3 className="text-xl font-bold">Masih Bingung?</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Tim ahli hukum kami siap membantumu melakukan konsultasi gratis secara anonim.
              </p>
              
              <div className="mt-6 space-y-3">
                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-50">
                  <span>💬</span> Chat dengan Konselor
                </button>
                <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-transparent py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800">
                  <span>📞</span> Hubungi via WhatsApp
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-2xs">
              <div className="flex items-center gap-2 text-amber-500">
                <span className="text-sm font-bold tracking-wide uppercase text-slate-800">🏆 KISAH SUKSES PEKERJA</span>
              </div>

              <div className="mt-5 space-y-6 divide-y divide-slate-100">
                <div className="pt-0">
                  <p className="text-xs italic leading-relaxed text-slate-500">
                    &ldquo;Berkat panduan dari AMAN KERJA, saya tahu cara mengajukan klaim kecelakaan kerja ke BPJS Ketenagakerjaan dengan benar.&rdquo;
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=50&q=80"
                      alt="Andi"
                      className="h-6 w-6 rounded-full object-cover"
                    />
                    <span className="text-2xs font-bold text-slate-800">Andi, Konstruksi</span>
                  </div>
                </div>

                <div className="pt-5">
                  <p className="text-xs italic leading-relaxed text-slate-500">
                    &ldquo;Saya hampir menyerah saat gaji tidak dibayar 2 bulan. Fitur Tanya Hakmu membantu saya bernegosiasi bipartit.&rdquo;
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=50&q=80"
                      alt="Siti"
                      className="h-6 w-6 rounded-full object-cover"
                    />
                    <span className="text-2xs font-bold text-slate-800">Siti, Tekstil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};