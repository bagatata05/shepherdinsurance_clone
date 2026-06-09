"use client";

import React from "react";
import Link from "next/link";
import { FooterLogo } from "./icons";

export const Footer: React.FC = () => {
  return (
    <footer className="u-section footer u-theme-grey">
      <div className="section_spacer small">
        <div className="u-container">
          <div className="u-content v-flex-8">
            <div className="footer-grid u-grid-custom">
              {/* Logo */}
              <div className="footer-logo-wrap">
                <Link href="#" className="footer-logo-link w-inline-block">
                  <FooterLogo className="footer-logo-svg" />
                </Link>
              </div>

              {/* Columns */}
              <div
                id="w-node-_15a876a3-65fc-b2c1-20e4-5f5d1fc0d3ab-1fc0d3a1"
                className="div-block-5"
              >
                <div className="footer-links-grid u-grid-custom">
                  {/* Products */}
                  <section className="footer_group_wrap">
                    <h3 className="footer_group_title u-text-style-small u-margin-bottom-text">
                      PRODUCTS
                    </h3>
                    <div role="list" className="footer_group_list">
                      <div role="listitem" className="footer_group_item">
                        <Link
                          href="/products/primary-casualty"
                          className="footer_link_wrap w-inline-block"
                        >
                          <div className="footer_link_text u-text-style-small">
                            PRIMARY CASUALTY
                          </div>
                        </Link>
                      </div>
                      <div role="listitem" className="footer_group_item">
                        <Link
                          href="/products/excess-casualty"
                          className="footer_link_wrap w-inline-block"
                        >
                          <div className="footer_link_text u-text-style-small">
                            EXCESS CASUALTY
                          </div>
                        </Link>
                      </div>
                      <div role="listitem" className="footer_group_item">
                        <Link
                          href="/products/builders-risk"
                          className="footer_link_wrap w-inline-block"
                        >
                          <div className="footer_link_text u-text-style-small">
                            BUILDER’S RISK
                          </div>
                        </Link>
                      </div>
                    </div>
                  </section>

                  {/* Industries */}
                  <section className="footer_group_wrap">
                    <h3 className="footer_group_title u-text-style-small u-margin-bottom-text">
                      INDUSTRIES
                    </h3>
                    <div role="list" className="footer_group_list">
                      <div role="listitem" className="footer_group_item">
                        <Link
                          href="/industry/construction"
                          className="footer_link_wrap w-inline-block"
                        >
                          <div className="footer_link_text u-text-style-small">
                            CONSTRUCTION
                          </div>
                        </Link>
                      </div>
                      <div role="listitem" className="footer_group_item">
                        <Link
                          href="/industry/renewable-energy-power"
                          className="footer_link_wrap w-inline-block"
                        >
                          <div className="footer_link_text u-text-style-small">
                            RENEWABLE ENERGY &amp; POWER
                          </div>
                        </Link>
                      </div>
                    </div>
                  </section>

                  {/* Resources */}
                  <section className="footer_group_wrap">
                    <h3 className="footer_group_title u-text-style-small u-margin-bottom-text">
                      RESOURCES
                    </h3>
                    <div role="list" className="footer_group_list">
                      <div role="listitem" className="footer_group_item">
                        <Link
                          href="/customer-stories"
                          className="footer_link_wrap w-inline-block"
                        >
                          <div className="footer_link_text u-text-style-small">
                            CUSTOMER STORIES
                          </div>
                        </Link>
                      </div>
                      <div role="listitem" className="footer_group_item">
                        <Link
                          href="/blog"
                          className="footer_link_wrap w-inline-block"
                        >
                          <div className="footer_link_text u-text-style-small">
                            BLOG
                          </div>
                        </Link>
                      </div>
                      <div role="listitem" className="footer_group_item">
                        <Link
                          href="/savings"
                          className="footer_link_wrap w-inline-block"
                        >
                          <div className="footer_link_text u-text-style-small">
                            SHEPHERD SAVINGS
                          </div>
                        </Link>
                      </div>
                    </div>
                  </section>

                  {/* Company */}
                  <section className="footer_group_wrap">
                    <h3 className="footer_group_title u-text-style-small u-margin-bottom-text">
                      COMPANY
                    </h3>
                    <div role="list" className="footer_group_list">
                      <div role="listitem" className="footer_group_item">
                        <Link
                          href="/about"
                          className="footer_link_wrap w-inline-block"
                        >
                          <div className="footer_link_text u-text-style-small">
                            ABOUT
                          </div>
                        </Link>
                      </div>
                      <div role="listitem" className="footer_group_item">
                        <Link
                          href="/careers"
                          className="footer_link_wrap w-inline-block"
                        >
                          <div className="footer_link_text u-text-style-small">
                            CAREERS
                          </div>
                        </Link>
                      </div>
                    </div>
                  </section>
                </div>

                {/* Contact button spanning under columns */}
                <div
                  data-wf--button-main--variant="secondary"
                  className="button_main_wrap"
                  data-button=" "
                  data-trigger="hover focus"
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
                  </div>
                  <div className="button_main_element w-variant-e85564cd-af30-a478-692b-71732aefb3ab">
                    <div
                      aria-hidden="true"
                      className="button_main_text u-text-style-small"
                    >
                      CONTACT US
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
