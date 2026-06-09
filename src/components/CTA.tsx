"use client";

import React from "react";
import Link from "next/link";
import { CornerSvg } from "./icons";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export const CTA: React.FC<CTAProps> = ({
  title = "Turn risk management into a competitive advantage.",
  description = "Join the hundreds of builders and operators saving with Shepherd.",
  buttonText = "CONTACT US",
  buttonHref = "/contact",
}) => {
  return (
    <section className="u-section u-theme-light">
      <div className="section_spacer">
        <div className="u-container">
          <div className="u-content v-flex-8">
            <div className="content-flex v-flex-8">
              <div className="card-wrap u-theme-orange">
                <CornerSvg className="corner-svg" />
                <div className="card-padding">
                  <div className="split-card-content-flex is-large">
                    <div>
                      <div className="div-block-3">
                        <h2 className="split-card-title u-text-style-h3">
                          {title}
                        </h2>
                        <div className="div-block-4">
                          <div
                            data-wf--button-main--variant="primary"
                            className="button_main_wrap"
                            data-button=" "
                            data-trigger="hover focus"
                          >
                            <div className="clickable_wrap u-cover-absolute">
                              <Link
                                href={buttonHref}
                                className="clickable_link w-inline-block"
                              >
                                <span className="clickable_text u-sr-only">
                                  {buttonText}
                                </span>
                              </Link>
                            </div>
                            <div className="button_main_element">
                              <div
                                aria-hidden="true"
                                className="button_main_text u-text-style-small"
                              >
                                {buttonText}
                              </div>
                              <div className="button_main_icon u-hide-if-empty"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="split-card-content-btn-flex v-flex-6">
                      <div className="u-text-style-main">
                        {description}
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

