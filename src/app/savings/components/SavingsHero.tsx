import React from 'react';
import Link from 'next/link';

export const SavingsHero: React.FC = () => {
  return (
    <section className="u-section u-theme-brand">
      <div className="pages-hero-grid u-grid-custom">
        <div className="hero-grid-left">
          <div className="hero-grid-left-max">
            <div className="section_spacer is-pages-hero">
              <div className="u-container is-hero">
                <div className="u-content v-flex-8">
                  <div className="content-flex v-flex-8 u-justify-content-between">
                    <div className="pages-heading-flex v-flex-6">
                      <h1 className="pages-hero-heading u-text-style-h2">
                        Savings designed to <span className="txt-icon-arrow"> </span> reward innovation.
                      </h1>
                      <div className="hero-p u-text-style-main">
                        An entirely new kind of partnership where the insurer, broker, and client work together to reduce risk and share the upside.
                      </div>
                    </div>
                    <div className="u-button-wrapper u-margin-top-0">
                      <div className="u-display-contents">
                        <div data-wf--button-main--variant="primary" className="button_main_wrap" data-button=" " data-trigger="hover focus">
                          <div className="clickable_wrap u-cover-absolute">
                            <Link href="/contact" className="clickable_link w-inline-block">
                              <span className="clickable_text u-sr-only">Contact us</span>
                            </Link>
                          </div>
                          <div className="button_main_element">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 16" fill="none" className="video-play">
                              <path d="M11.25 7.79443L2.19575e-07 15.5887L9.00968e-07 0.000204548L11.25 7.79443Z" fill="black"></path>
                            </svg>
                            <div aria-hidden="true" className="button_main_text u-text-style-small">Contact us</div>
                            <div className="button_main_icon u-hide-if-empty"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-grid-visual">
          <div id="careers-video" className="u-visual">
            <img
              src="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696560b0bdce86e38f97904a_60%20Walk%20on%20Site%20with%20Crane.webp"
              loading="lazy"
              alt="Savings hero image"
              className="u-visual-image"
            />
            <div className="u-visual-bk"></div>
            <div className="img-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
