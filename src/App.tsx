import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Leistungen from './pages/Leistungen';
import Arbeitsweise from './pages/Arbeitsweise';
import Kontakt from './pages/Kontakt';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

export const App: React.FC = () => {
  // Seiten-Routing basierend auf URL-Pfad
  const getInitialPage = (): string => {
    const path = window.location.pathname.replace(/^\/|\/$/g, '').toLowerCase();
    if (['leistungen', 'arbeitsweise', 'kontakt', 'impressum', 'datenschutz'].includes(path)) {
      return path;
    }
    return 'startseite';
  };

  const [activePage, setActivePage] = useState<string>(getInitialPage);

  // Synchronisation mit Browser-Historie
  useEffect(() => {
    const handlePopState = () => {
      setActivePage(getInitialPage());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (pageId: string) => {
    setActivePage(pageId);
    const targetPath = pageId === 'startseite' ? '/' : `/${pageId}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'leistungen':
        return <Leistungen onNavigate={navigateTo} />;
      case 'arbeitsweise':
        return <Arbeitsweise onNavigate={navigateTo} />;
      case 'kontakt':
        return <Kontakt />;
      case 'impressum':
        return <Impressum />;
      case 'datenschutz':
        return <Datenschutz />;
      case 'startseite':
      default:
        return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="site-wrapper">
      <Header activePage={activePage} onNavigate={navigateTo} />
      <main id="main-content" className="site-main" role="main">
        {renderActivePage()}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
