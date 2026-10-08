import React from 'react';
import { SITE_CONTENT } from '../content/content';

interface ArbeitsweiseProps {
  onNavigate: (pageId: string) => void;
}

export const Arbeitsweise: React.FC<ArbeitsweiseProps> = ({ onNavigate }) => {
  const { principles, methodology, hero } = SITE_CONTENT;

  return (
    <div className="page-arbeitsweise">
      {/* Intro Header */}
      <section className="page-intro-header">
        <div className="container-fluid">
          <span className="section-category">Vorgehensweise</span>
          <h1 className="page-title">
            Wie wir arbeiten und worauf wir achten
          </h1>
          <p className="page-description">
            Wir legen Wert auf transparente Abläufe, verständliche Sprache und handwerklich saubere Ergebnisse. Sie werden bei jedem Schritt genau wissen, woran wir arbeiten.
          </p>
        </div>
      </section>

      {/* Grundsätze / Principles */}
      <section className="section-principles">
        <div className="container-fluid">
          <div className="section-title-wrap">
            <span className="section-category">Grundsätze</span>
            <h2 className="section-heading">Unsere Werte in der Zusammenarbeit</h2>
          </div>

          <div className="principles-grid">
            {principles.map((p, idx) => (
              <div key={idx} className="principle-card">
                <span className="principle-number">0{idx + 1}</span>
                <h3 className="principle-title">{p.title}</h3>
                <p className="principle-statement">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodischer Ablauf */}
      <section className="section-method-process">
        <div className="container-fluid">
          <div className="section-title-wrap">
            <span className="section-category">Prozess</span>
            <h2 className="section-heading">Der Ablauf vom Erstgespräch bis zum fertigen System</h2>
          </div>

          <div className="process-timeline">
            {methodology.map((step) => (
              <div key={step.number} className="process-step-item">
                <div className="step-marker-col">
                  <span className="process-badge">{step.number}</span>
                  <div className="step-connector-line" aria-hidden="true"></div>
                </div>
                <div className="step-content-col">
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-text">{step.description}</p>
                  <div className="process-step-focus-box">
                    <span className="focus-tag-label">Ergebnis</span>
                    <span className="focus-tag-val">{step.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="section-quiet-callout">
        <div className="container-fluid callout-box">
          <h2 className="callout-heading">Möchten Sie Ihr Vorhaben mit uns besprechen?</h2>
          <p className="callout-subtext">
            Schreiben Sie uns eine kurze Nachricht. Wir freuen uns darauf, von Ihren Plänen zu hören.
          </p>
          <button
            type="button"
            onClick={() => {
              onNavigate('kontakt');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            {hero.cta}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Arbeitsweise;
