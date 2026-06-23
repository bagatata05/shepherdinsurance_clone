import React from 'react';
import Link from 'next/link';

export const StoriesHero: React.FC = () => {
  return (
    <section className="u-section u-theme-light">
      <div className="section_spacer is-pages-hero">
        <div className="u-container is-hero">
          <div className="u-content v-flex-4">
            <div className="u-text-style-h2">Customer Stories</div>

            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items">
                <div role="listitem" className="w-dyn-item">
                  <div className="featured-blog-wrap">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 60 60" fill="none" className="corner-svg">
                      <path d="M60 60L60 -2.14577e-06L30 30L-2.14577e-06 60L60 60Z" fill="white"></path>
                    </svg>
                    <div id="careers-video" className="u-visual">
                      <img
                        src="https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/69839adc1a021853f651f55d_6971534408788912eb5ba9a2_69714ad2725ae3f3d33d7a68_Getty%2520Images%2520Unsplash%25201.avif"
                        loading="lazy"
                        alt="Featured Case Study"
                        className="u-visual-image"
                      />
                      <div className="u-visual-bk"></div>
                      <div className="img-overlay"></div>
                    </div>

                    <div className="featured-blog-text">
                      <div className="u-text-style-main">
                        IMA Places a $36M TIV Builder&apos;s Risk for Tapani with Shepherd
                      </div>
                      <div data-wf--button-main--variant="link-white" className="button_main_wrap w-variant-28dbea6b-1838-df17-d642-59092f70edf3" data-button=" " data-trigger="hover focus">
                        <div className="clickable_wrap u-cover-absolute">
                          <Link href="/case-studies/tailored-builders-risk-solution-for-site-roadway-project-in-wa" className="clickable_link w-inline-block">
                            <span className="clickable_text u-sr-only">LEARN MORE</span>
                          </Link>
                          <button type="button" className="clickable_btn">
                            <span className="clickable_text u-sr-only">LEARN MORE</span>
                          </button>
                        </div>
                        <div className="button_main_element w-variant-28dbea6b-1838-df17-d642-59092f70edf3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 16" fill="none" className="video-play">
                            <path d="M11.25 7.79443L2.19575e-07 15.5887L9.00968e-07 0.000204548L11.25 7.79443Z" fill="black"></path>
                          </svg>
                          <div aria-hidden="true" className="button_main_text u-text-style-small">LEARN MORE</div>
                          <div className="button_main_icon u-hide-if-empty"></div>
                        </div>
                      </div>
                    </div>
                    <div className="featured-blog-overlay"></div>
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
