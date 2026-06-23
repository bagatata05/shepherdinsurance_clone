import React from 'react';
import Link from 'next/link';

export const BlogHero: React.FC = () => {
  return (
    <section className="u-section u-theme-light">
      <div className="section_spacer is-pages-hero">
        <div className="u-container is-hero">
          <div className="u-content v-flex-4">
            <div className="u-text-style-h2" style={{ marginBottom: '3rem' }}>The Shepherd Blog</div>

            <div className="collection-list-wrapper w-dyn-list">
              <div role="list" className="collection-list-2 w-dyn-items">
                <div role="listitem" className="collection-item w-dyn-item">
                  <div className="featured-blog-wrap" style={{ position: 'relative', overflow: 'hidden' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 60 60" fill="none" className="corner-svg">
                      <path d="M60 60L60 -2.14577e-06L30 30L-2.14577e-06 60L60 60Z" fill="white"></path>
                    </svg>
                    <div id="careers-video" className="u-visual">
                      <img
                        src="https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/69c27cc3504b4219e8b52ea0_justin-mo-smlr.avif"
                        loading="lazy"
                        alt="Featured Post"
                        className="u-visual-image"
                      />
                      <div className="u-visual-bk"></div>
                      <div className="img-overlay"></div>
                    </div>

                    <div className="featured-blog-text">
                      <div className="blog-category-flex" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                        <div className="category-icon" style={{ width: '8px', color: '#DA43E7' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 17 34" fill="none" className="svg">
                            <path d="M16.9706 16.9705L2.07015e-05 -0.00010423L1.85557e-05 16.9705L1.641e-05 33.941L16.9706 16.9705Z" fill="currentColor"></path>
                          </svg>
                        </div>
                        <div className="u-text-style-small" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fff', opacity: 0.9 }}>
                          Company Announcements
                        </div>
                      </div>

                      <div className="u-text-style-large" style={{ color: '#fff', fontSize: '24px', fontWeight: 600, lineHeight: 1.2 }}>
                        Behind Our Series B: AI&apos;s Physical Layer, and Why We Just Raised $42M to Insure It
                      </div>

                      <div data-wf--button-main--variant="link-white" className="button_main_wrap w-variant-28dbea6b-1838-df17-d642-59092f70edf3" data-button=" " data-trigger="hover focus" style={{ marginTop: '2rem' }}>
                        <div className="clickable_wrap u-cover-absolute">
                          <Link href="/blog/behind-our-42m-series-b" className="clickable_link w-inline-block">
                            <span className="clickable_text u-sr-only">LEARN MORE</span>
                          </Link>
                        </div>
                        <div className="button_main_element w-variant-28dbea6b-1838-df17-d642-59092f70edf3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 16" fill="none" className="video-play">
                            <path d="M11.25 7.79443L2.19575e-07 15.5887L9.00968e-07 0.000204548L11.25 7.79443Z" fill="white"></path>
                          </svg>
                          <div aria-hidden="true" className="button_main_text u-text-style-small" style={{ color: 'white' }}>LEARN MORE</div>
                          <div className="button_main_icon u-hide-if-empty"></div>
                        </div>
                      </div>
                    </div>

                    <div className="featured-blog-overlay"></div>
                    <div className="blog-clickable">
                      <Link href="/blog/behind-our-42m-series-b" className="blog-link-abs w-inline-block"></Link>
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
