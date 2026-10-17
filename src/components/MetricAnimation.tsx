import React from 'react';

interface MetricAnimationProps {
  type: 'speed' | 'craft' | 'network' | 'direct';
}

export const MetricAnimation: React.FC<MetricAnimationProps> = ({ type }) => {
  if (type === 'speed') {
    // 1. Ladezeit (< 1s): Schneller Performance-Tacho mit rotierendem Speed-Sweep
    return (
      <div className="metric-anim-wrap speed-anim" aria-hidden="true">
        <svg viewBox="0 0 44 44" className="metric-svg" fill="none">
          {/* Hintergrundkreis */}
          <circle cx="22" cy="22" r="17" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.15" />
          {/* Schneller Ladebogen (< 1s) */}
          <circle
            cx="22"
            cy="22"
            r="17"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="106"
            strokeDashoffset="106"
            strokeLinecap="round"
            className="speed-arc-progress"
          />
          {/* Pulsierender Ziel-Indikator */}
          <circle cx="34" cy="11" r="2.5" className="speed-pulse-dot" />
          {/* Zeigerlinie */}
          <line x1="22" y1="22" x2="31" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="speed-needle" />
        </svg>
      </div>
    );
  }

  if (type === 'craft') {
    // 2. Maßarbeit (100%): Präzise Code-Tags & blinkender Cursor
    return (
      <div className="metric-anim-wrap craft-anim" aria-hidden="true">
        <svg viewBox="0 0 44 44" className="metric-svg" fill="none">
          {/* Präzisions-Gitterecken */}
          <path d="M 6 12 L 6 6 L 12 6" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
          <path d="M 38 12 L 38 6 L 32 6" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
          <path d="M 6 32 L 6 38 L 12 38" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
          <path d="M 38 32 L 38 38 L 32 38" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
          {/* Code-Klammer links: < */}
          <path d="M 17 16 L 12 22 L 17 28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="craft-bracket-left" />
          {/* Slash: / */}
          <line x1="20" y1="28" x2="24" y2="16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="craft-slash" />
          {/* Code-Klammer rechts: > */}
          <path d="M 27 16 L 32 22 L 27 28" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="craft-bracket-right" />
          {/* Blinkender Terminal-Cursor */}
          <line x1="35" y1="18" x2="35" y2="26" stroke="currentColor" strokeWidth="1.5" className="craft-cursor" />
        </svg>
      </div>
    );
  }

  if (type === 'network') {
    // 3. DACH-Fokus: 3 Knotenpunkte (DE, AT, CH) mit Signal-Wellen
    return (
      <div className="metric-anim-wrap network-anim" aria-hidden="true">
        <svg viewBox="0 0 44 44" className="metric-svg" fill="none">
          {/* Verbindungsdreieck DE - AT - CH */}
          <polygon points="22,9 11,33 33,33" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" strokeOpacity="0.4" />
          {/* Expandierende Radarwelle aus dem Zentrum */}
          <circle cx="22" cy="25" r="7" stroke="currentColor" strokeWidth="1" className="network-radar-ring" />
          {/* Knotenpunkt 1 (DE - Nord) */}
          <circle cx="22" cy="9" r="3" className="network-node-dot" />
          <circle cx="22" cy="9" r="6" stroke="currentColor" strokeWidth="1" className="network-node-pulse" />
          {/* Knotenpunkt 2 (CH - Südwest) */}
          <circle cx="11" cy="33" r="2.5" className="network-node-dot" />
          {/* Knotenpunkt 3 (AT - Südost) */}
          <circle cx="33" cy="33" r="2.5" className="network-node-dot" />
          {/* Fließender Daten-Punkt */}
          <circle cx="22" cy="9" r="1.5" className="network-travel-dot" />
        </svg>
      </div>
    );
  }

  // 4. Direktkontakt (1:1): Zwei Endpunkte mit direktem Hin- und Her-Signal
  return (
    <div className="metric-anim-wrap direct-anim" aria-hidden="true">
      <svg viewBox="0 0 44 44" className="metric-svg" fill="none">
        {/* Direkte Verbindungslinie */}
        <line x1="9" y1="22" x2="35" y2="22" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.25" />
        {/* Subtile Resonanz-Kurve */}
        <path d="M 9 22 Q 22 13 35 22" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.3" className="direct-wave" />
        {/* Endpunkt A (Kunde) */}
        <circle cx="9" cy="22" r="3.5" stroke="currentColor" strokeWidth="1.5" className="direct-node-a" />
        <circle cx="9" cy="22" r="1.5" fill="currentColor" />
        {/* Endpunkt B (selimi.tech) */}
        <circle cx="35" cy="22" r="3.5" stroke="currentColor" strokeWidth="1.5" className="direct-node-b" />
        <circle cx="35" cy="22" r="1.5" fill="currentColor" />
        {/* Aktiver Daten-Impuls, der direkt zwischen beiden Punkten hin- und hergleitet */}
        <circle cx="9" cy="22" r="2" className="direct-travel-signal" />
      </svg>
    </div>
  );
};
