"use client";

import React from "react";
import Link from "next/link";
import { ArrowPinkRight, DiamondBadgePink, CornerSvg, ClipSvg } from "./icons";

export const Underwriting: React.FC = () => {
  return (
    <section className="u-section u-theme-light">
      <div className="section_spacer">
        <div className="u-container">
          <div className="u-content v-flex-8">
            {/* Smarter Underwriting Section */}
            <div className="content-flex v-flex-8">
              <div className="section-content-flex v-flex-5">
                <div className="section-header-grid u-grid-custom">
                  <div className="section-header-title-col u-column-span-2">
                    <div className="heading-icon">
                      <ArrowPinkRight />
                    </div>
                    <h1 className="section-heading u-text-style-h3">
                      Smarter underwriting powered by data and technology.
                    </h1>
                  </div>
                  <div>
                    <div className="u-text-style-main">
                      We provide financial services for the companies that build
                      the world — and keep it running.
                    </div>
                  </div>
                </div>

                {/* Shepherd Savings Split Card */}
                <div className="split-card u-grid-custom u-theme-beige">
                  <div className="split-card-img-wrap u-visual-wrap">
                    <div id="careers-video" className="u-visual">
                      <img
                        src="/assets/images/underwriting-hero.webp"
                        loading="lazy"
                        alt="Smarter Underwriting"
                        className="u-visual-image"
                      />
                      <div className="u-visual-bk"></div>
                      <div className="img-overlay"></div>
                    </div>
                  </div>
                  <div className="split-card-content">
                    <div className="split-card-content-flex">
                      <div>
                        <div className="section-header-title-flex">
                          <div className="heading-icon is-big">
                            <DiamondBadgePink />
                          </div>
                          <h2 className="split-card-title u-text-style-h3">
                            Shepherd Savings
                          </h2>
                        </div>
                      </div>
                      <div className="split-card-content-btn-flex v-flex-6">
                        <h5 className="split-card-title u-text-style-h3 is-h4-t">
                          Rewarding builders who invest in technology to deliver
                          safer and better.
                        </h5>
                        <div>
                          <div
                            data-wf--button-main--variant="primary"
                            className="button_main_wrap"
                            data-button=" "
                            data-trigger="hover focus"
                          >
                            <div className="clickable_wrap u-cover-absolute">
                              <Link
                                href="/savings"
                                className="clickable_link w-inline-block"
                              >
                                <span className="clickable_text u-sr-only">
                                  Learn more
                                </span>
                              </Link>
                            </div>
                            <div className="button_main_element">
                              <div
                                aria-hidden="true"
                                className="button_main_text u-text-style-small"
                              >
                                Learn more
                              </div>
                              <div className="button_main_icon u-hide-if-empty"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Insurance Solutions Section */}
              <div className="section-content-flex v-flex-5">
                <div className="section-header-grid u-grid-custom">
                  <div className="section-header-title-col u-column-span-2">
                    <div className="heading-icon">
                      <ArrowPinkRight />
                    </div>
                    <h1 className="section-heading u-text-style-h3">
                      Insurance solutions built for a changing world.
                    </h1>
                  </div>
                  <div>
                    <div className="u-text-style-main">
                      We're modernizing insurance from the ground up to get
                      faster decisions and clearer risk insights.
                    </div>
                  </div>
                </div>

                {/* Card Grid */}
                <div className="card-grid-3 u-grid-custom">
                  {/* Card 1 */}
                  <div
                    data-wf--centered-card--variant="base"
                    className="centered-card-slide"
                  >
                    <div className="centered-card-wrap">
                      <div className="centered-card-content-abs">
                        <div className="div-block">
                          <div className="div-block-2">
                            <img
                              src="/assets/gifs/speed-keeps-pace.gif"
                              loading="lazy"
                              alt="Speed"
                              className="img-abs"
                            />
                          </div>
                        </div>
                        <div className="u-text-style-large">
                          Speed that keeps pace
                        </div>
                        <div>
                          Underwriting decisions in hours, not weeks. Automation
                          and AI streamline complexity.
                        </div>
                      </div>
                      <CornerSvg className="corner-svg" />
                    </div>
                    <div className="div-block-21">
                      <ClipSvg className="clip-svg" />
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div
                    data-wf--centered-card--variant="base"
                    className="centered-card-slide"
                  >
                    <div className="centered-card-wrap">
                      <div className="centered-card-content-abs">
                        <div className="div-block">
                          <div className="div-block-2">
                            <img
                              src="/assets/gifs/intelligence-rewards.gif"
                              loading="lazy"
                              alt="Intelligence"
                              className="img-abs"
                            />
                          </div>
                        </div>
                        <div className="u-text-style-large">
                          Intelligence that rewards
                        </div>
                        <div>
                          Pricing which proactively rewards the behaviors that
                          drive better outcomes.
                        </div>
                      </div>
                      <CornerSvg className="corner-svg" />
                    </div>
                    <div className="div-block-21">
                      <ClipSvg className="clip-svg" />
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div
                    data-wf--centered-card--variant="base"
                    className="centered-card-slide"
                  >
                    <div className="centered-card-wrap">
                      <div className="centered-card-content-abs">
                        <div className="div-block">
                          <div className="div-block-2">
                            <img
                              src="/assets/gifs/single-connected-system.gif"
                              loading="lazy"
                              alt="Connected System"
                              className="img-abs"
                            />
                          </div>
                        </div>
                        <div className="u-text-style-large">
                          A single connected system
                        </div>
                        <div>
                          Unified product suite designed to provide a one-stop
                          solution for clients.
                        </div>
                      </div>
                      <CornerSvg className="corner-svg" />
                    </div>
                    <div className="div-block-21">
                      <ClipSvg className="clip-svg" />
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
