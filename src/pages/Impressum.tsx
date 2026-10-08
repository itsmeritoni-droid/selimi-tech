import React from 'react';
import { SITE_CONTENT } from '../content/content';

export const Impressum: React.FC = () => {
  const { impressum } = SITE_CONTENT;

  return (
    <div className="page-legal">
      <section className="page-intro-header">
        <div className="container-fluid">
          <span className="section-category">Rechtliche Hinweise</span>
          <h1 className="page-title">{impressum.title}</h1>
          <p className="legal-notice-banner">
            {impressum.note}
          </p>
        </div>
      </section>

      <section className="section-legal-body">
        <div className="container-fluid">
          <div className="legal-content-card">
            {impressum.sections.map((section, idx) => (
              <div key={idx} className="legal-block">
                <h2 className="legal-subheading">{section.heading}</h2>
                {section.lines.map((line, lIdx) => (
                  <p key={lIdx} className="legal-line">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impressum;
