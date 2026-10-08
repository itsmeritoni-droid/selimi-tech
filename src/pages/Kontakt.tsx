import React from 'react';
import { SITE_CONTENT } from '../content/content';
import { ProtectedEmail } from '../components/ProtectedEmail';

export const Kontakt: React.FC = () => {
  const { contact, brand } = SITE_CONTENT;

  return (
    <div className="page-kontakt">
      <section className="page-intro-header">
        <div className="container-fluid">
          <span className="section-category">Direkter Austausch</span>
          <h1 className="page-title">
            Beginnen wir ein Gespräch
          </h1>
          <p className="page-description">
            Wir freuen uns darauf, von Ihrem Unternehmen und Ihrem geplanten Vorhaben zu hören. Schreiben Sie uns eine unkomplizierte Nachricht per E-Mail.
          </p>
        </div>
      </section>

      <section className="section-kontakt-body">
        <div className="container-fluid">
          <div className="contact-page-grid">
            {/* Linke Spalte: Ablauf einer Anfrage */}
            <div className="contact-guide-column">
              <span className="section-category">Ablauf</span>
              <h2 className="contact-column-title">Wie die Kontaktaufnahme abläuft</h2>

              <ol className="contact-steps-list-extended">
                <li className="contact-step-extended-item">
                  <span className="step-num-badge">1</span>
                  <div className="step-num-content">
                    <h3 className="step-num-title">E-Mail-Adresse freischalten</h3>
                    <p className="step-num-desc">{contact.howItWorks.step1}</p>
                  </div>
                </li>
                <li className="contact-step-extended-item">
                  <span className="step-num-badge">2</span>
                  <div className="step-num-content">
                    <h3 className="step-num-title">Projekt schildern</h3>
                    <p className="step-num-desc">{contact.howItWorks.step2}</p>
                  </div>
                </li>
                <li className="contact-step-extended-item">
                  <span className="step-num-badge">3</span>
                  <div className="step-num-content">
                    <h3 className="step-num-title">Rückmeldung & Erstgespräch</h3>
                    <p className="step-num-desc">{contact.howItWorks.step3}</p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Rechte Spalte: Kontaktdaten & Freischaltung */}
            <div className="contact-action-column">
              <div className="contact-highlight-card">
                <span className="section-category">Elektronische Post</span>
                <h3 className="contact-action-heading">Direkte E-Mail-Adresse</h3>
                <p className="contact-action-text">
                  {contact.direct.description}
                </p>
                <div className="contact-reveal-wrap">
                  <ProtectedEmail buttonText={contact.direct.revealButton} />
                </div>
              </div>

              <div className="contact-highlight-card">
                <span className="section-category">Standort</span>
                <h3 className="contact-action-heading">{brand.location}</h3>
                <p className="contact-action-text">
                  Wir arbeiten überregional und remote mit Unternehmen im gesamten deutschsprachigen Raum.
                </p>
              </div>

              <div className="contact-highlight-card is-quiet">
                <span className="section-category">Antwortzeit</span>
                <p className="contact-action-text">
                  Jede Anfrage wird persönlich und sorgfältig geprüft. In der Regel erhalten Sie innerhalb von ein bis zwei Werktagen eine verlässliche Antwort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontakt;
