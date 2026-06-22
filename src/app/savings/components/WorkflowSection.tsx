import React from 'react';

export const WorkflowSection: React.FC = () => {
  return (
    <section className="u-section u-theme-light">
      <div className="section_spacer">
        <div className="u-container">
          <div className="u-content v-flex-8">
            <div className="content-flex v-flex-8">
              <div className="section-header-grid u-grid-custom">
                <div className="section-header-title-col u-column-span-2">
                  <div className="heading-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 17 34" fill="none">
                      <path d="M16.9706 16.9705L2.07015e-05 -0.00010423L1.85557e-05 16.9705L1.641e-05 33.941L16.9706 16.9705Z" fill="#DA43E7"></path>
                    </svg>
                  </div>
                  <h1 className="section-heading u-text-style-h3">How Shepherd Savings works</h1>
                </div>
                <div>
                  <div className="u-text-style-main">
                    Receive regular insight, shared benchmarks, and continued alignment as expectations grow and performance evolves.
                  </div>
                </div>
              </div>

              <div className="card-grid-3 u-grid-custom" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                <div className="saving-card-wrap">
                  <div className="savings-card" style={{ border: '1px solid #e0e0e0', padding: '2.5rem 2rem', position: 'relative', minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fafafa' }}>
                    <div className="u-text-style-large" style={{ fontSize: '20px', fontWeight: 600, lineHeight: 1.3 }}>
                      1<br />Review Shepherd <br />Savings quote
                    </div>
                    <div className="savings-card-main-txt" style={{ marginTop: '1.5rem' }}>
                      <div className="u-text-style-main" style={{ opacity: 0.8 }}>
                        Premium savings are calculated upfront.
                      </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 60 60" fill="none" className="corner-svg" style={{ position: 'absolute', bottom: 0, right: 0, width: '30px', height: '30px' }}>
                      <path d="M60 60L60 -2.14577e-06L30 30L-2.14577e-06 60L60 60Z" fill="white"></path>
                    </svg>
                  </div>
                </div>

                <div className="saving-card-wrap">
                  <div className="savings-card" style={{ border: '1px solid #e0e0e0', padding: '2.5rem 2rem', position: 'relative', minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fafafa' }}>
                    <div className="u-text-style-large" style={{ fontSize: '20px', fontWeight: 600, lineHeight: 1.3 }}>
                      2<br />Bind your program with Shepherd
                    </div>
                    <div className="savings-card-main-txt" style={{ marginTop: '1.5rem' }}>
                      <div className="u-text-style-main" style={{ opacity: 0.8 }}>
                        Purchase your policy and activate your coverage.
                      </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 60 60" fill="none" className="corner-svg" style={{ position: 'absolute', bottom: 0, right: 0, width: '30px', height: '30px' }}>
                      <path d="M60 60L60 -2.14577e-06L30 30L-2.14577e-06 60L60 60Z" fill="white"></path>
                    </svg>
                  </div>
                </div>

                <div className="saving-card-wrap">
                  <div className="savings-card" style={{ border: '1px solid #e0e0e0', padding: '2.5rem 2rem', position: 'relative', minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fafafa' }}>
                    <div className="u-text-style-large" style={{ fontSize: '20px', fontWeight: 600, lineHeight: 1.3 }}>
                      3<br />Enroll in Shepherd Savings data Sharing
                    </div>
                    <div className="savings-card-main-txt" style={{ marginTop: '1.5rem' }}>
                      <div className="u-text-style-main" style={{ opacity: 0.8 }}>
                        Onboard as new or leverage existing technology usage.
                      </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 60 60" fill="none" className="corner-svg" style={{ position: 'absolute', bottom: 0, right: 0, width: '30px', height: '30px' }}>
                      <path d="M60 60L60 -2.14577e-06L30 30L-2.14577e-06 60L60 60Z" fill="white"></path>
                    </svg>
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
