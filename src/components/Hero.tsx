'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Hero: React.FC = () => {
  const brokerLogos = [
    { src: '/assets/logos/procore.png', alt: 'Procore' },
    { src: '/assets/logos/autodesk.png', alt: 'Autodesk' },
    { src: '/assets/logos/wtw.avif', alt: 'WTW' },
    { src: '/assets/logos/usi.avif', alt: 'USI' },
    { src: '/assets/logos/lockton.avif', alt: 'Lockton' },
    { src: '/assets/logos/shepherd-small.avif', alt: 'Shepherd' },
    { src: '/assets/logos/logo-2.png', alt: 'Logo 2' },
    { src: '/assets/logos/logo-64.avif', alt: 'Logo 64' },
    { src: '/assets/logos/logo-68.avif', alt: 'Logo 68' },
    { src: '/assets/logos/logo-60.avif', alt: 'Logo 60' },
    { src: '/assets/logos/marsh.png', alt: 'Marsh' },
    { src: '/assets/logos/logo-69.avif', alt: 'Logo 69' },
    { src: '/assets/logos/logo-62.avif', alt: 'Logo 62' },
    { src: '/assets/logos/logo-61.avif', alt: 'Logo 61' },
    { src: '/assets/logos/logo-59.avif', alt: 'Logo 59' },
  ];

  return (
    <section className="u-section u-theme-brand">
      <div className="section_spacer is-hero">
        <div className="u-container">
          <div className="u-content v-flex-8">
            <div className="content-flex v-flex-8">
              <h1 className="hero-heading u-text-style-h1">
                Making risk <em>frictionless </em>
                <span className="txt-icon-arrow"> </span>
                <em><br /></em>
                Insurance <span className="txt-icon-arrow is-up"> </span> for the builders and operators shaping <span className="txt-icon-arrow is-square"> </span> our <br />
                physical <span className="txt-icon-arrow is-img"> </span> world.
              </h1>
              
              <div className="u-button-wrapper u-margin-top-0">
                <div className="u-display-contents">
                  <div data-wf--button-main--variant="primary" className="button_main_wrap" data-button=" " data-trigger="hover focus">
                    <div className="clickable_wrap u-cover-absolute">
                      <Link href="/contact" className="clickable_link w-inline-block">
                        <span className="clickable_text u-sr-only">Contact us</span>
                      </Link>
                    </div>
                    <div className="button_main_element">
                      <div aria-hidden="true" className="button_main_text u-text-style-small">Contact us</div>
                      <div className="button_main_icon u-hide-if-empty"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="div-block-8">
              <div className="div-block-9">
                <div className="u-text-style-small">
                  Trusted by<br />leading retail brokerages
                </div>
              </div>
              <div className="ticker-gradient is-left"></div>
              <div className="ticker-gradient is-right"></div>
              
              <div data-speed="50s" pause-on-hover="true" className="ticker-wrap is-offices is-home">
                {/* Loop 1 */}
                <div className="ticker-contain">
                  <div className="ticker-coll-wrap is-offices w-dyn-list">
                    <div role="list" className="ticker-coll-list is-offices w-dyn-items">
                      {brokerLogos.map((logo, idx) => (
                        <div key={`logo-1-${idx}`} role="listitem" className="ticker-coll-item is-offices w-dyn-item">
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            loading="lazy"
                            className="solutions-logos"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Loop 2 (required for infinite marquee effect) */}
                <div className="ticker-contain">
                  <div className="ticker-coll-wrap is-offices w-dyn-list">
                    <div role="list" className="ticker-coll-list is-offices w-dyn-items">
                      {brokerLogos.map((logo, idx) => (
                        <div key={`logo-2-${idx}`} role="listitem" className="ticker-coll-item is-offices w-dyn-item">
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            loading="lazy"
                            className="solutions-logos"
                          />
                        </div>
                      ))}
                    </div>
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
