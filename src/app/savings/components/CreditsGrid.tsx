import React from 'react';

export const CreditsGrid: React.FC = () => {
  return (
    <section className="u-section u-theme-dark">
      <div className="u-visual">
        <img
          src="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69584fde9bb5bf976273101a_Rectangle%20194.webp"
          loading="lazy"
          alt="Background details"
          className="u-visual-image"
        />
        <div style={{ opacity: 0.4 }} className="u-visual-overlay"></div>
      </div>
      <div className="section_spacer">
        <div className="u-container">
          <div className="full-img-section">
            <div className="u-content v-flex-img-section">
              <div className="section-header-grid u-grid-custom">
                <div className="section-header-title-col u-column-span-2">
                  <div className="heading-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 17 34" fill="none">
                      <path d="M16.9706 16.9705L2.07015e-05 -0.00010423L1.85557e-05 16.9705L1.641e-05 33.941L16.9706 16.9705Z" fill="#DA43E7"></path>
                    </svg>
                  </div>
                  <h1 className="section-heading u-text-style-h3">
                    Smarter solutions that reward you back.
                  </h1>
                </div>
                <div>
                  <div className="u-text-style-main">
                    Shepherd Savings turns real-world insight into momentum, empowering smarter decisions and stronger outcomes.
                  </div>
                </div>
              </div>

              <div className="saving-outline-grid u-grid-custom" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div className="outline-card" style={{ padding: '2rem 1.5rem', borderLeft: '1px solid rgba(255,255,255,0.2)' }}>
                  <div className="grid-title-txt u-text-style-h4" style={{ fontSize: '20px', fontWeight: 600, marginBottom: '1rem' }}>
                    Up to 25% lower premiums
                  </div>
                  <div className="grid-title-p u-text-style-main" style={{ opacity: 0.8 }}>
                    Automatic and upfront credits applied to practice or project (CIP) policies with target metrics to increase premium credits.
                  </div>
                </div>

                <div className="outline-card noleft-t" style={{ padding: '2rem 1.5rem', borderLeft: '1px solid rgba(255,255,255,0.2)' }}>
                  <div className="grid-title-txt u-text-style-h4" style={{ fontSize: '20px', fontWeight: 600, marginBottom: '1rem' }}>
                    Multi-year programs
                  </div>
                  <div className="grid-title-p u-text-style-main" style={{ opacity: 0.8 }}>
                    Rate renewal guarantees for multi-year programs dependent on technology utilization.
                  </div>
                </div>

                <div className="outline-card" style={{ padding: '2rem 1.5rem', borderLeft: '1px solid rgba(255,255,255,0.2)' }}>
                  <div className="grid-title-txt u-text-style-h4" style={{ fontSize: '20px', fontWeight: 600, marginBottom: '1rem' }}>
                    Analysis &amp; feedback
                  </div>
                  <div className="grid-title-p u-text-style-main" style={{ opacity: 0.8 }}>
                    Monthly reporting with recommendations for improving tech usage to reduce claims.
                  </div>
                </div>

                <div className="outline-card" style={{ padding: '2rem 1.5rem', borderLeft: '1px solid rgba(255,255,255,0.2)' }}>
                  <div className="grid-title-txt u-text-style-h4" style={{ fontSize: '20px', fontWeight: 600, marginBottom: '1rem' }}>
                    Dedicated savings specialists
                  </div>
                  <div className="grid-title-p u-text-style-main" style={{ opacity: 0.8 }}>
                    Direct access to dedicated Savings specialists with additional support for unique program requests or project requirements.
                  </div>
                </div>

                <div className="outline-card" style={{ padding: '2rem 1.5rem', borderLeft: '1px solid rgba(255,255,255,0.2)' }}>
                  <div className="grid-title-txt u-text-style-h4" style={{ fontSize: '20px', fontWeight: 600, marginBottom: '1rem' }}>
                    Effortless participation
                  </div>
                  <div className="grid-title-p u-text-style-main" style={{ opacity: 0.8 }}>
                    Simple opt-in, clear impact, no downside. Customers execute data authorization agreements.
                  </div>
                </div>

                <div className="outline-card" style={{ padding: '2rem 1.5rem', borderLeft: '1px solid rgba(255,255,255,0.2)' }}>
                  <div className="grid-title-txt u-text-style-h4" style={{ fontSize: '20px', fontWeight: 600, marginBottom: '1rem' }}>
                    Initial utilization report and quote comparisons
                  </div>
                  <div className="grid-title-p u-text-style-main" style={{ opacity: 0.8 }}>
                    We share analysis along with data used in the underwriting process.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
