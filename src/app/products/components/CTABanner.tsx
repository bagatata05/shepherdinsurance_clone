import React from "react";
import Link from "next/link";

export const CTABanner: React.FC = () => {
  return (
    <section className="u-section u-theme-light">
      <div className="section_spacer">
        <div className="u-container">
          <div className="u-content v-flex-8">
            <div className="content-flex v-flex-8">
              <div className="card-wrap u-theme-orange">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  viewBox="0 0 60 60"
                  fill="none"
                  className="corner-svg"
                >
                  <path
                    d="M60 60L60 -2.14577e-06L30 30L-2.14577e-06 60L60 60Z"
                    fill="white"
                  ></path>
                </svg>
                <div className="card-padding">
                  <div className="split-card-content-flex is-large">
                    <div>
                      <div className="div-block-3">
                        <h2
                          data-max="ch30"
                          className="split-card-title u-text-style-h3"
                        >
                          Turn risk management into a competitive
                          advantage.
                        </h2>
                        <div className="div-block-4">
                          <div
                            data-wf--button-main--variant="primary"
                            className="button_main_wrap"
                            data-button=""
                            data-trigger="hover-focus"
                          >
                            <div className="clickable_wrap u-cover-absolute">
                              <Link
                                href="/contact"
                                className="clickable_link w-inline-block"
                              >
                                <span className="clickable_text u-sr-only">
                                  CONTACT US
                                </span>
                              </Link>
                              <button
                                type="button"
                                className="clickable_btn"
                              >
                                <span className="clickable_text u-sr-only">
                                  CONTACT US
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
                                CONTACT US
                              </div>
                              <div className="button_main_icon u-hide-if-empty"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="split-card-content-btn-flex v-flex-6">
                      <div data-max="ch50" className="u-text-style-main">
                        Join the hundreds of builders who have saved with
                        Shepherd.
                      </div>
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
