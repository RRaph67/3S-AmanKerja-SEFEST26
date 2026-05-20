import { useState } from 'react';
import type { FC } from 'react';
import { Home, AlertTriangle, MessageSquare, BookOpen, HelpCircle } from 'lucide-react';

type HeaderProps = {
  // Tambahkan 'edukasi' di sini
  currentPage: 'beranda' | 'bantuanDarurat' | 'laporBahaya' | 'tanyaHakmu' | 'edukasi';
  setCurrentPage: (page: 'beranda' | 'bantuanDarurat' | 'laporBahaya' | 'tanyaHakmu' | 'edukasi') => void;
};

export const Header: FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigation = (page: 'beranda' | 'bantuanDarurat' | 'laporBahaya' | 'tanyaHakmu' | 'edukasi') => {
    setCurrentPage(page);
    setSidebarOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white px-6 py-4 md:px-12">
        <div className="flex w-full items-center justify-between gap-4 px-6 md:px-12">        
          <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400"
            onClick={() => setSidebarOpen((open) => !open)}
            aria-label={sidebarOpen ? 'Tutup sidebar' : 'Buka sidebar'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="text-xl font-black tracking-wider text-black">AMAN KERJA</span>
        </div>

          <nav className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => handleNavigation('beranda')}
              className={`text-base font-medium transition-all relative py-1 ${currentPage === 'beranda'
                ? 'text-black font-bold after:absolute after:-bottom-[5px] after:left-0 after:h-[3px] after:w-full after:bg-red-500'
                : 'text-gray-600 hover:text-black'
                }`}
            >
              Beranda
            </button>
            <button
              onClick={() => handleNavigation('bantuanDarurat')}
              className={`text-base font-medium transition-all relative py-1 ${currentPage === 'bantuanDarurat'
                ? 'text-black font-bold after:absolute after:-bottom-[5px] after:left-0 after:h-[3px] after:w-full after:bg-red-500'
                : 'text-gray-600 hover:text-black'
                }`}
            >
              Bantuan Darurat
            </button>
            <button
              onClick={() => handleNavigation('laporBahaya')}
              className={`text-base font-medium transition-all relative py-1 ${currentPage === 'laporBahaya'
                ? 'text-black font-bold after:absolute after:-bottom-[5px] after:left-0 after:h-[3px] after:w-full after:bg-red-500'
                : 'text-gray-600 hover:text-black'
                }`}
            >
              Lapor Bahaya
            </button>
            <button
              onClick={() => handleNavigation('tanyaHakmu')}
              className={`text-base font-medium transition-all relative py-1 ${currentPage === 'tanyaHakmu'
                ? 'text-black font-bold after:absolute after:-bottom-[5px] after:left-0 after:h-[3px] after:w-full after:bg-red-500'
                : 'text-gray-600 hover:text-black'
                }`}
            >
              Tanya Hakmu
            </button>
            <button
              onClick={() => handleNavigation('edukasi')}
              className={`text-base font-medium transition-all relative py-1 ${currentPage === 'edukasi'
                ? 'text-black font-bold after:absolute after:-bottom-[5px] after:left-0 after:h-[3px] after:w-full after:bg-red-500'
                : 'text-gray-600 hover:text-black'
                }`}
            >
              Edukasi
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <button className="relative p-1 text-gray-600 hover:text-black" aria-label="Notifications">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </button>

            <button className="p-1 text-red-600 hover:text-red-700" aria-label="SOS">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex bg-black/20 backdrop-blur-sm">
          <button
            type="button"
            className="absolute inset-0 h-full w-full"
            aria-label="Tutup sidebar"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="relative z-50 h-full w-72 bg-white p-6 shadow-2xl sm:w-80">
            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Tutup
            </button>
            <nav className="flex flex-col gap-2 text-sm mt-4">
              {[
                { id: 'beranda', label: 'Beranda', icon: Home },
                { id: 'bantuanDarurat', label: 'Bantuan Darurat', icon: AlertTriangle },
                { id: 'laporBahaya', label: 'Lapor Bahaya', icon: MessageSquare },
                { id: 'tanyaHakmu', label: 'Tanya Hakmu', icon: HelpCircle },
                { id: 'edukasi', label: 'Edukasi', icon: BookOpen },
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id as any)}
                    className={`group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${currentPage === item.id
                        ? 'bg-red-50 text-red-600 font-bold'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-black'
                      }`}
                  >
                    <IconComponent size={20} className={currentPage === item.id ? "text-red-600" : "text-slate-400 group-hover:text-black"} />
                    <span className="font-semibold">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
};