import { useState, useEffect } from 'react';
import { Beranda } from './pages/Beranda';
import { TanyaHakmu } from './pages/TanyaHakMu';
import { BantuanDarurat } from './pages/BantuanDarurat';
import { LaporBahaya } from './pages/LaporBahaya';

type PageType = 'beranda' | 'bantuanDarurat' | 'laporBahaya' | 'tanyaHakmu';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('beranda');

  // Sinkronisasi URL saat halaman pertama kali dimuat atau ditekan tombol Back/Forward di browser
  useEffect(() => {
    const handleUrlChange = () => {
      const path = window.location.pathname;
      if (path === '/bantuan-darurat') {
        setCurrentPage('bantuanDarurat');
      } else if (path === '/lapor-bahaya') {
        setCurrentPage('laporBahaya');
      } else if (path === '/tanya-hakmu') {
        setCurrentPage('tanyaHakmu');
      } else {
        setCurrentPage('beranda');
      }
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  // Handler transisi halaman dan perubahan URL
  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
    let newPath = '/';
    if (page === 'bantuanDarurat') newPath = '/bantuan-darurat';
    if (page === 'laporBahaya') newPath = '/lapor-bahaya';
    if (page === 'tanyaHakmu') newPath = '/tanya-hakmu';
    
    window.history.pushState({}, '', newPath);
  };

  return (
    <>
      {currentPage === 'beranda' && (
        <Beranda currentPage={currentPage} setCurrentPage={handlePageChange} />
      )}
      {currentPage === 'bantuanDarurat' && (
        <BantuanDarurat currentPage={currentPage} setCurrentPage={handlePageChange} />
      )}
      {currentPage === 'laporBahaya' && (
        <LaporBahaya currentPage={currentPage} setCurrentPage={handlePageChange} />
      )}
      {currentPage === 'tanyaHakmu' && (
        <TanyaHakmu currentPage={currentPage} setCurrentPage={handlePageChange} />
      )}
    </>
  );
}

export default App;