import React, { useState } from 'react';
import { SITE_CONTENT } from '../content/content';

interface HeaderProps {
  activePage: string;
  onNavigate: (pageId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header" role="banner">
      <div className="header-inner container-fluid">
        {/* Brand Text Wordmark */}
        <button
          type="button"
          onClick={() => handleNavClick('startseite')}
          className="brand-wordmark"
          aria-label="Zur Startseite"
        >
          <span className="wordmark-text">{SITE_CONTENT.brand.wordmark}</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Hauptnavigation">
          <ul className="nav-list">
            {SITE_CONTENT.navigation.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`nav-link ${activePage === item.id ? 'is-active' : ''}`}
                  aria-current={activePage === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Quiet CTA */}
        <div className="header-cta-wrapper">
          <button
            type="button"
            onClick={() => handleNavClick('kontakt')}
            className="btn-quiet-cta"
          >
            {SITE_CONTENT.hero.cta}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-menu-toggle"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
        >
          <span className="menu-toggle-line"></span>
          <span className="menu-toggle-line"></span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" role="dialog" aria-modal="true">
          <nav className="mobile-nav" aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {SITE_CONTENT.navigation.map((item) => (
                <li key={item.id} className="mobile-nav-item">
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`mobile-nav-link ${activePage === item.id ? 'is-active' : ''}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="mobile-nav-item mobile-cta-item">
                <button
                  type="button"
                  onClick={() => handleNavClick('kontakt')}
                  className="btn-quiet-cta full-width"
                >
                  {SITE_CONTENT.hero.cta}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
