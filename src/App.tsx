import { useState, useEffect } from 'react';
import { Beranda } from './pages/Beranda';
import { TanyaHakmu } from './pages/TanyaHakMu';
import { BantuanDarurat } from './pages/BantuanDarurat';
import { LaporBahaya } from './pages/LaporBahaya';
import { Edukasi } from './pages/Edukasi';

type PageType = 'beranda' | 'bantuanDarurat' | 'laporBahaya' | 'tanyaHakmu' | 'edukasi';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('beranda');

  useEffect(() => {
    const handleUrlChange = () => {
      const path = window.location.pathname;
      if (path === '/bantuan-darurat') setCurrentPage('bantuanDarurat');
      else if (path === '/lapor-bahaya') setCurrentPage('laporBahaya');
      else if (path === '/tanya-hakmu') setCurrentPage('tanyaHakmu');
      else if (path === '/edukasi') setCurrentPage('edukasi');
      else setCurrentPage('beranda');
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  const handlePageChange = (page: PageType) => {
    setCurrentPage(page);
    let newPath = '/';
    if (page === 'bantuanDarurat') newPath = '/bantuan-darurat';
    else if (page === 'laporBahaya') newPath = '/lapor-bahaya';
    else if (page === 'tanyaHakmu') newPath = '/tanya-hakmu';
    else if (page === 'edukasi') newPath = '/edukasi'; // Tambahkan ini

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
      {currentPage === 'edukasi' && (
        <Edukasi currentPage={currentPage} setCurrentPage={handlePageChange} />
      )}
    </>
  );
}

export default App;