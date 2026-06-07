'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowPinkRight, CornerSvg } from './icons';


export const Coverage: React.FC = () => {
  const cards = [
    {
      title: 'Primary Casualty',
      desc: 'Essential coverage that steadies progress when it matters most.',
      link: '/products/primary-casualty',
      img: '/assets/images/coverage-1.webp',
    },
    {
      title: 'Excess Casualty',
      desc: 'Additional protection that strengthens your safety net for larger or complex risks.',
      link: '/products/excess-casualty',
      img: '/assets/images/coverage-2.webp',
    },
    {
      title: 'Builder’s Risk',
      desc: 'First-party coverage designed to protect projects while they’re still taking shape.',
      link: '/products/builders-risk',
      img: '/assets/images/coverage-3.webp',
    },
    {
      title: 'Built for your industry',
      desc: 'Discover how Shepherd partners with industry leaders across Construction, Renewable Energy, and more.',
      link: '/industries',
      img: '/assets/images/coverage-4.webp',
    },
  ];

  return (
    <section className="u-section u-theme-light">
      <div className="section_spacer">
        <div className="u-container">
          <div className="u-content v-flex-8">
            <div className="content-flex v-flex-8">
              
              {/* Vision Card Banner */}
              <div className="card-wrap">
                <CornerSvg className="corner-svg" />
                <div className="card-padding">
                  <div className="split-card-content-flex is-large">
                    <div>
                      <div className="div-block-3">
                        <h2 className="split-card-title u-text-style-h3">
                          A new vision for commercial insurance.
                        </h2>
                        <div className="div-block-4">
                          <div data-wf--button-main--variant="primary" className="button_main_wrap" data-button=" " data-trigger="hover focus">
                            <div className="clickable_wrap u-cover-absolute">
                              <Link href="/about" className="clickable_link w-inline-block">
                                <span className="clickable_text u-sr-only">ABOUT SHEPHERD</span>
                              </Link>
                            </div>
                            <div className="button_main_element">
                              <div aria-hidden="true" className="button_main_text u-text-style-small">ABOUT SHEPHERD</div>
                              <div className="button_main_icon u-hide-if-empty"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="split-card-content-btn-flex v-flex-6">
                      <div className="u-text-style-main">
                        Where speed, intelligence, and human judgment work together to build a risk management platform for the modern era.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coverage Header */}
              <div className="section-content-flex v-flex-6">
                <div className="section-header-grid u-grid-custom">
                  <div className="section-header-title-col u-column-span-2">
                    <div className="heading-icon">
                      <ArrowPinkRight />
                    </div>
                    <h1 className="section-heading u-text-style-h3">
                      Essential coverage for annual programs or projects.
                    </h1>
                  </div>
                  <div>
                    <div className="u-text-style-main">
                      Supporting middle market to enterprise scale customers with the coverage they need to protect their biggest projects or annual portfolios.
                    </div>
                  </div>
                </div>

                {/* Cards Grid */}
                <div>
                  <div className="cta-cards-grid u-grid-custom">
                    {cards.map((card, idx) => (
                      <div key={`coverage-card-${idx}`} data-wf--solution-card--variant="base" className="cta-card-flex v-flex-3">
                        <div className="cta-card-wrap">
                          <Link href={card.link} className="card-wrap u-theme-dark w-inline-block">
                            <CornerSvg className="corner-svg" />
                            <div className="solution-top-left">
                              <div className="split-card-content-flex is-large">
                                <div>
                                  <div className="solution-top-txt u-text-style-large">{card.title}</div>
                                </div>
                              </div>
                              <CornerSvg className="solution-corner" />

                            </div>
                            <div id="careers-video" className="u-visual">
                              <img 
                                src={card.img} 
                                loading="lazy" 
                                alt={card.title} 
                                className="u-visual-image"
                              />
                              <div className="u-visual-bk"></div>
                              <div className="u-visual-overlay" style={{ opacity: 0.1 }}></div>
                              <div className="img-overlay"></div>
                            </div>
                          </Link>
                        </div>
                        <div>
                          <div className="u-text-style-main">{card.desc}</div>
                          <div data-wf--button-main--variant="link" className="button_main_wrap w-variant-625d5df4-ad91-f7dc-9e2f-2e69f3fd7400" data-button=" " data-trigger="hover focus">
                            <div className="clickable_wrap u-cover-absolute">
                              <Link href={card.link} className="clickable_link w-inline-block">
                                <span className="clickable_text u-sr-only">LEARN MORE</span>
                              </Link>
                            </div>
                            <div className="button_main_element w-variant-625d5df4-ad91-f7dc-9e2f-2e69f3fd7400">
                              <div aria-hidden="true" className="button_main_text u-text-style-small">LEARN MORE</div>
                              <div className="button_main_icon u-hide-if-empty"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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
