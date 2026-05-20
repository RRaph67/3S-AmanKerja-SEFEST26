import React from 'react';

type HeaderProps = {
  currentPage: 'beranda' | 'bantuanDarurat' | 'tanyaHakmu';
  setCurrentPage: (page: 'beranda' | 'bantuanDarurat' | 'tanyaHakmu') => void;
};

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white px-6 py-4 md:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-black tracking-wider text-black">AMAN KERJA</span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <button
            onClick={() => setCurrentPage('beranda')}
            className={`text-sm font-medium transition-all relative py-1 ${
              currentPage === 'beranda'
                ? 'text-black font-bold after:absolute after:-bottom-[22px] after:left-0 after:h-[3px] after:w-full after:bg-red-500'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Beranda
          </button>
          <button
            onClick={() => setCurrentPage('bantuanDarurat')}
            className={`text-sm font-medium transition-all relative py-1 ${
              currentPage === 'bantuanDarurat'
                ? 'text-black font-bold after:absolute after:-bottom-[22px] after:left-0 after:h-[3px] after:w-full after:bg-red-500'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Bantuan Darurat
          </button>
          <a href="#lapor" className="text-sm font-medium text-gray-600 hover:text-black">Lapor Bahaya</a>
          <button
            onClick={() => setCurrentPage('tanyaHakmu')}
            className={`text-sm font-medium transition-all relative py-1 ${
              currentPage === 'tanyaHakmu'
                ? 'text-black font-bold after:absolute after:-bottom-[22px] after:left-0 after:h-[3px] after:w-full after:bg-red-500'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Tanya Hakmu
          </button>
          <a href="#edukasi" className="text-sm font-medium text-gray-600 hover:text-black">Edukasi</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="relative p-1 text-gray-600 hover:text-black" aria-label="Notifications">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          
          <button className="p-1 text-red-600 hover:text-red-700" aria-label="SOS">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
          </button>

          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
            alt="User Profile"
            className="h-9 w-9 rounded-full border border-teal-500 object-cover"
          />
        </div>
      </div>
    </header>
  );
};