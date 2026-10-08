import React from 'react';
import { SITE_CONTENT } from '../content/content';

interface LeistungenProps {
  onNavigate: (pageId: string) => void;
}

export const Leistungen: React.FC<LeistungenProps> = ({ onNavigate }) => {
  const { services, hero } = SITE_CONTENT;

  return (
    <div className="page-leistungen">
      {/* Header */}
      <section className="page-intro-header">
        <div className="container-fluid">
          <span className="section-category">Leistungsangebot</span>
          <h1 className="page-title">
            Was wir für Ihr Unternehmen umsetzen
          </h1>
          <p className="page-description">
            Wir unterstützen Sie in vier Kernbereichen: von der technischen Programmierung Ihrer Website bis hin zu Werbeanzeigen, die tatsächlich neue Kundenanfragen bringen.
          </p>
        </div>
      </section>

      {/* Detail Sections per Service */}
      <div className="services-detailed-list">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`service-detail-section ${index % 2 === 1 ? 'is-alternating' : ''}`}
            aria-labelledby={`service-heading-${service.id}`}
          >
            <div className="container-fluid">
              <div className="service-detail-grid">
                {/* Meta Column */}
                <div className="service-detail-meta">
                  <span className="detail-number">{service.number}</span>
                  <span className="detail-tag">Leistung</span>
                </div>

                {/* Content Column */}
                <div className="service-detail-body">
                  <h2 id={`service-heading-${service.id}`} className="service-detail-title">
                    {service.title}
                  </h2>
                  <p className="service-detail-summary">
                    {service.summary}
                  </p>
                  <p className="service-detail-text">
                    {service.whatWeDo}
                  </p>

                  <div className="deliverables-box">
                    <h3 className="deliverables-heading">Konkrete Vorteile für Ihr Unternehmen</h3>
                    <ul className="deliverables-list">
                      {service.benefits.map((item, idx) => (
                        <li key={idx} className="deliverables-item">
                          <span className="item-marker" aria-hidden="true">&bull;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Bottom Quiet Callout */}
      <section className="section-quiet-callout">
        <div className="container-fluid callout-box">
          <h2 className="callout-heading">Haben Sie Fragen zu einer bestimmten Leistung?</h2>
          <p className="callout-subtext">
            Schreiben Sie uns eine Nachricht. Wir beraten Sie offen und finden gemeinsam heraus, was für Ihre aktuelle Situation am meisten Sinn ergibt.
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

export default Leistungen;
