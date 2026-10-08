import React from 'react';
import { SITE_CONTENT } from '../content/content';
import { ProtectedEmail } from './ProtectedEmail';

interface FooterProps {
  onNavigate: (pageId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container-fluid footer-content">
        {/* Top Segment: Brand and Location */}
        <div className="footer-top-grid">
          <div className="footer-brand-column">
            <span className="footer-wordmark">{SITE_CONTENT.brand.wordmark}</span>
            <p className="footer-descriptor">{SITE_CONTENT.brand.descriptor}</p>
            <div className="footer-meta-item">
              <span className="meta-label">Standort</span>
              <span className="meta-value">{SITE_CONTENT.brand.location}</span>
            </div>
          </div>

          <div className="footer-nav-column">
            <span className="footer-column-heading">Navigation</span>
            <ul className="footer-link-list">
              {SITE_CONTENT.navigation.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className="footer-nav-link"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact-column">
            <span className="footer-column-heading">Elektronische Post</span>
            <p className="footer-contact-note">
              Geschützte Zustellung zur Vermeidung automatisierter Erfassung:
            </p>
            <ProtectedEmail className="footer-email-reveal" />
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" aria-hidden="true"></div>

        {/* Bottom Segment: Legal and Copyright */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} {SITE_CONTENT.brand.wordmark}. Alle Rechte vorbehalten.
          </div>

          <div className="footer-legal-links">
            <button
              type="button"
              onClick={() => handleNavClick('impressum')}
              className="footer-legal-link"
            >
              Impressum
            </button>
            <span className="legal-separator" aria-hidden="true">&bull;</span>
            <button
              type="button"
              onClick={() => handleNavClick('datenschutz')}
              className="footer-legal-link"
            >
              Datenschutz
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
