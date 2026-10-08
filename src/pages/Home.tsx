import React from 'react';
import { SITE_CONTENT } from '../content/content';
import { ProtectedEmail } from '../components/ProtectedEmail';

interface HomeProps {
  onNavigate: (pageId: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const { hero, intro, services, methodology, contact, brand } = SITE_CONTENT;

  return (
    <div className="page-home">
      {/* 1. Hero-Bereich */}
      <section className="section-hero" aria-labelledby="hero-heading">
        <div className="container-fluid hero-container">
          <div className="hero-meta-kicker">
            <span className="hairline-dash" aria-hidden="true"></span>
            <span className="kicker-text">{hero.kicker}</span>
          </div>

          <h1 id="hero-heading" className="hero-display-headline">
            {hero.headline}
          </h1>

          <p className="hero-subtext">
            {hero.subtext}
          </p>

          <div className="hero-actions">
            <button
              type="button"
              onClick={() => {
                const contactEl = document.getElementById('kontakt-bereich');
                if (contactEl) {
                  contactEl.scrollIntoView({ behavior: 'smooth' });
                } else {
                  onNavigate('kontakt');
                }
              }}
              className="btn-primary"
            >
              {hero.cta}
            </button>
            <button
              type="button"
              onClick={() => onNavigate('leistungen')}
              className="btn-text-link"
            >
              Leistungen ansehen &rarr;
            </button>
          </div>
        </div>

        {/* Feines geometrisches Linienelement */}
        <div className="hero-subtle-geometry" aria-hidden="true">
          <svg viewBox="0 0 400 60" fill="none" className="geometry-svg">
            <line x1="0" y1="30" x2="400" y2="30" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 6" />
            <circle cx="200" cy="30" r="3" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* 2. Intro Statement */}
      <section className="section-intro" aria-label="Überblick">
        <div className="container-fluid">
          <div className="intro-grid">
            <div className="intro-label-col">
              <span className="section-number">00</span>
              <span className="section-category">Wer wir sind</span>
            </div>
            <div className="intro-content-col">
              <p className="intro-lead">
                {intro.statement}
              </p>
              <p className="intro-detail">
                {intro.context}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Overview */}
      <section className="section-services" aria-labelledby="services-overview-heading">
        <div className="container-fluid">
          <div className="section-header-row">
            <div>
              <span className="section-category">Was wir bieten</span>
              <h2 id="services-overview-heading" className="section-heading">
                Unsere Kernleistungen
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('leistungen')}
              className="btn-text-link"
            >
              Alle Details zu den Leistungen &rarr;
            </button>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article key={service.id} className="service-card">
                <div className="service-card-meta">
                  <span className="service-number">{service.number}</span>
                  <span className="service-tag">Bereich</span>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-summary">{service.summary}</p>
                <ul className="service-keypoints">
                  {service.benefits.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="service-keypoint-item">
                      <span className="bullet-dash" aria-hidden="true">&mdash;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Working Method Overview */}
      <section className="section-methodology" aria-labelledby="method-heading">
        <div className="container-fluid">
          <div className="section-header-row">
            <div>
              <span className="section-category">Zusammenarbeit</span>
              <h2 id="method-heading" className="section-heading">
                In 4 klaren Schritten zum fertigen Projekt
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('arbeitsweise')}
              className="btn-text-link"
            >
              Mehr zur Vorgehensweise &rarr;
            </button>
          </div>

          <div className="method-steps-grid">
            {methodology.map((step) => (
              <div key={step.number} className="method-step-card">
                <span className="step-roman">{step.number}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <div className="step-focus">
                  <span className="focus-label">Ergebnis:</span>
                  <span className="focus-text">{step.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Closing Contact Section (Ohne Formular, direkt & sauber) */}
      <section id="kontakt-bereich" className="section-contact" aria-labelledby="contact-heading">
        <div className="container-fluid">
          <div className="contact-box-wide">
            <div className="contact-box-header">
              <span className="section-category">Projekt anfragen</span>
              <h2 id="contact-heading" className="section-heading">
                {contact.title}
              </h2>
              <p className="contact-lead">
                {contact.lead}
              </p>
            </div>

            <div className="contact-box-grid">
              {/* Ablauf */}
              <div className="contact-process-card">
                <h3 className="contact-card-headline">So einfach funktioniert es</h3>
                <ol className="contact-steps-list">
                  <li className="contact-step-row">
                    <span className="step-index">1</span>
                    <p>{contact.howItWorks.step1}</p>
                  </li>
                  <li className="contact-step-row">
                    <span className="step-index">2</span>
                    <p>{contact.howItWorks.step2}</p>
                  </li>
                  <li className="contact-step-row">
                    <span className="step-index">3</span>
                    <p>{contact.howItWorks.step3}</p>
                  </li>
                </ol>
              </div>

              {/* Kontaktdaten & E-Mail-Schaltfläche */}
              <div className="contact-action-card">
                <div className="action-card-segment">
                  <span className="meta-label">Standort</span>
                  <p className="action-card-val">{brand.location}</p>
                  <p className="action-card-subnote">
                    Wir arbeiten überregional und remote mit Unternehmen im deutschsprachigen Raum.
                  </p>
                </div>

                <div className="action-card-divider" aria-hidden="true"></div>

                <div className="action-card-segment">
                  <span className="meta-label">{contact.direct.label}</span>
                  <p className="action-card-subnote">
                    {contact.direct.description}
                  </p>
                  <ProtectedEmail buttonText={contact.direct.revealButton} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
