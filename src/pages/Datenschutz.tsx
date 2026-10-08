import React from 'react';
import { SITE_CONTENT } from '../content/content';

export const Datenschutz: React.FC = () => {
  const { datenschutz } = SITE_CONTENT;

  return (
    <div className="page-legal">
      <section className="page-intro-header">
        <div className="container-fluid">
          <span className="section-category">Datenschutz</span>
          <h1 className="page-title">{datenschutz.title}</h1>
          <p className="legal-notice-banner">
            {datenschutz.note}
          </p>
        </div>
      </section>

      <section className="section-legal-body">
        <div className="container-fluid">
          <div className="legal-content-card">
            {datenschutz.sections.map((section, idx) => (
              <div key={idx} className="legal-block">
                <h2 className="legal-subheading">{section.heading}</h2>
                <p className="legal-text">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Datenschutz;
