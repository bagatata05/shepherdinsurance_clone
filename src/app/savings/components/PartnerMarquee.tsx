import React from 'react';

const logoUrls = [
  "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/6971273c1f2bce38892affad_savings-logo-2.avif",
  "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/69712732d29602f5fc804db9_savings-logo.avif",
  "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/697105729521e60b5aac736b_image%2073.avif",
  "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/69710566e851f19543ddaaf4_image%2058.avif",
  "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/697105551032851fa2e1c146_image%2056.avif",
  "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/6971054d8ba5ac912910e8f9_image%2055.avif",
  "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/697105402dfba1d723393811_image%2054.avif",
  "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/69710534e5ab5e4726a8f9c1_image%2052.avif",
  "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/697105264d5c530348485837_image%2053.avif",
];

export const PartnerMarquee: React.FC = () => {
  return (
    <section className="u-section u-theme-light" style={{ overflow: 'hidden', padding: '4rem 0' }}>
      <div className="u-container">
        <div className="u-content v-flex-8">
          <div className="content-flex v-flex-6">
            <div className="centered-title-wrap" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h1 className="section-heading u-text-style-h3">Smarter solutions that reward you back.</h1>
            </div>

            <div className="ticker-wrap is-offices" style={{ display: 'flex', overflow: 'hidden', gap: '4rem', width: '100%' }}>
              <div
                className="ticker-coll-wrap is-offices"
                style={{
                  display: 'flex',
                  gap: '4rem',
                  flexShrink: 0,
                  animation: 'scroll 50s linear infinite',
                }}
              >
                {logoUrls.map((url, idx) => (
                  <div key={idx} className="ticker-coll-item is-offices" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={url} loading="lazy" alt="Partner Logo" className="solutions-logos" style={{ height: '35px', objectFit: 'contain' }} />
                  </div>
                ))}
              </div>
              <div
                className="ticker-coll-wrap is-offices"
                style={{
                  display: 'flex',
                  gap: '4rem',
                  flexShrink: 0,
                  animation: 'scroll 50s linear infinite',
                }}
                aria-hidden="true"
              >
                {logoUrls.map((url, idx) => (
                  <div key={`dup-${idx}`} className="ticker-coll-item is-offices" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={url} loading="lazy" alt="Partner Logo" className="solutions-logos" style={{ height: '35px', objectFit: 'contain' }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
