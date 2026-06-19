import React from "react";
import Link from "next/link";

export const SavingsSection: React.FC = () => {
  return (
    <section className="u-section u-theme-light">
      <div className="section_spacer">
        <div className="u-container">
          <div className="u-content v-flex-8">
            <div className="content-flex v-flex-8">
              <div className="section-content-flex v-flex-5">
                <div className="split-card u-grid-custom u-theme-beige">
                  <div className="split-card-content">
                    <div className="split-card-content-flex">
                      <div className="v-flex-4">
                        <h2
                          data-max="ch15"
                          className="split-card-title u-text-style-h3"
                        >
                          Get rewarded for reducing risk.
                        </h2>
                        <div className="u-text-style-main">
                          Shepherd Savings delivers upfront credits to
                          builders by integrating technology partners
                          directly into underwriting. The best behaviors
                          earn the greatest rewards.
                        </div>
                      </div>
                      <div>
                        <div
                          data-wf--button-main--variant="primary"
                          className="button_main_wrap"
                          data-button=""
                          data-trigger="hover-focus"
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
                            <button
                              type="button"
                              className="clickable_btn"
                            >
                              <span className="clickable_text u-sr-only">
                                Learn more
                              </span>
                            </button>
                          </div>
                          <div className="button_main_element">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 12 16"
                              fill="none"
                              className="video-play"
                            >
                              <path
                                d="M11.25 7.79443L2.19575e-07 15.5887L9.00968e-07 0.000204548L11.25 7.79443Z"
                                fill="black"
                              ></path>
                            </svg>
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
                  <div className="split-card-img-wrap u-visual-wrap">
                    <div id="careers-video" className="u-visual">
                      <img
                        src="/assets/images/group-2147210653.webp"
                        loading="lazy"
                        alt=""
                        sizes="(max-width: 1360px) 100vw, 1360px"
                        srcSet="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/695854f3adb9cd4562a37b26_Group%202147210653-p-500.webp 500w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/695854f3adb9cd4562a37b26_Group%202147210653-p-800.webp 800w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/695854f3adb9cd4562a37b26_Group%202147210653-p-1080.webp 1080w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/695854f3adb9cd4562a37b26_Group%202147210653-p-1600.webp 1600w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/695854f3adb9cd4562a37b26_Group%202147210653-p-2000.webp 2000w, /assets/images/group-2147210653.webp 2720w"
                        className="u-visual-image"
                      />
                      <div className="u-visual-bk"></div>
                      <div className="img-overlay"></div>
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
