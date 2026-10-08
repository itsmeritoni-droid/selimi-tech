import React, { useState } from 'react';
import { resolveProtectedContactAddress } from '../utils/security';

interface ProtectedEmailProps {
  buttonText?: string;
  className?: string;
}

export const ProtectedEmail: React.FC<ProtectedEmailProps> = ({ 
  buttonText = 'E-Mail-Adresse anzeigen',
  className = ''
}) => {
  const [revealedAddress, setRevealedAddress] = useState<string | null>(null);
  const [copyStatus, setCopyStatus] = useState<boolean>(false);

  const handleReveal = () => {
    const address = resolveProtectedContactAddress();
    setRevealedAddress(address);
  };

  const handleCopy = async () => {
    if (!revealedAddress) return;
    try {
      await navigator.clipboard.writeText(revealedAddress);
      setCopyStatus(true);
      setTimeout(() => setCopyStatus(false), 2400);
    } catch {
      // Fallback
    }
  };

  return (
    <div className={`protected-email-container ${className}`}>
      {revealedAddress ? (
        <div className="revealed-email-block">
          <a 
            href={`mailto:${revealedAddress}`} 
            className="revealed-email-link"
            title="E-Mail-Programm öffnen"
          >
            {revealedAddress}
          </a>
          <button 
            type="button" 
            onClick={handleCopy}
            className="btn-text-action"
            aria-label="E-Mail-Adresse in die Zwischenablage kopieren"
          >
            {copyStatus ? 'Kopiert' : 'Kopieren'}
          </button>
        </div>
      ) : (
        <button 
          type="button" 
          onClick={handleReveal}
          className="btn-reveal-email"
        >
          <span className="btn-reveal-indicator"></span>
          <span>{buttonText}</span>
        </button>
      )}

      <noscript>
        <div className="noscript-contact-note">
          <p>
            Zum Schutz vor automatisierter Datenerfassung ist die direkte E-Mail-Adresse im statischen Quelltext nicht hinterlegt. Bitte nutzen Sie das nachfolgende Kontaktformular für Ihre Anfrage.
          </p>
        </div>
      </noscript>
    </div>
  );
};

export default ProtectedEmail;
