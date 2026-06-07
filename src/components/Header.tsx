'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShepherdLogo, CloseIcon, DropdownArrow } from './icons';

export const Header: React.FC = () => {
  const [bannerVisible, setBannerVisible] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Navigation Backdrop */}
      <div className="nav_drop_backdrop" style={{ opacity: activeDropdown ? 1 : 0, pointerEvents: activeDropdown ? 'auto' : 'none' }}></div>
      
      <div 
        data-wf--nav--nav-position="overlap" 
        className="nav_component w-variant-dd866659-1d7d-6447-6461-66ca86ca367f u-theme-brand"
        style={{
          '--nav--banner-height': bannerVisible ? '2.5rem' : '0px',
          '--nav--height': '5rem',
        } as React.CSSProperties}
      >
        <Link href="#main" className="nav_skip_wrap w-inline-block">
          <div className="nav_skip_text u-text-style-small">Skip to main content</div>
        </Link>

        {/* Banner */}
        {bannerVisible && (
          <div aria-label="Announcement" role="region" className="nav_banner_wrap">
            <div className="nav_banner_contain">
              <Link href="/blog/behind-our-42m-series-b" className="nav_banner_link w-inline-block">
                <div className="nav_banner_text u-line-clamp-2 u-text-style-small">
                  SHEPHERD ANNOUNCES $42M SERIES B LED BY INTACT
                </div>
                <div className="div-block-24">
                  <div className="text-block-2">READ MORE</div>
                </div>
              </Link>
              <button
                onClick={() => setBannerVisible(false)}
                role="button"
                className="nav_banner_close_wrap"
              >
                <CloseIcon className="nav_banner_close_svg" />
                <span className="nav_screen-reader-text">Close Announcement Banner</span>
              </button>
            </div>
          </div>
        )}

        <header className="nav_desktop_wrap">
            <div className="nav_desktop_contain">
              <div className="nav_desktop_layout">
                <Link href="/" className="nav_desktop_logo w-inline-block w--current">
                  <div className="logo-svg">
                    <ShepherdLogo />
                  </div>
                </Link>

                <nav aria-label="Main" data-wf--menu--variant="desktop" className="nav_links_component w-variant-23049969-09ac-2789-520b-3c6ae895bbc6">
                  <ul role="list" className="nav_links_wrap w-variant-23049969-09ac-2789-520b-3c6ae895bbc6 w-list-unstyled">
                    
                    {/* Products Dropdown */}
                    <li 
                      className="nav_links_item w-variant-23049969-09ac-2789-520b-3c6ae895bbc6"
                      onMouseEnter={() => handleMouseEnter('products')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="nav_dropdown_component w-variant-23049969-09ac-2789-520b-3c6ae895bbc6 w-dropdown">
                        <div 
                          className="nav_links_link w-variant-23049969-09ac-2789-520b-3c6ae895bbc6 w-dropdown-toggle"
                          aria-expanded={activeDropdown === 'products'}
                        >
                          <Link href="/products" className="w-inline-block">
                            <div className="nav_links_text u-text-style-small">PRODUCTS</div>
                          </Link>
                          <div className="nav_links_svg">
                            <DropdownArrow />
                          </div>
                        </div>
                        <nav className={`nav_dropdown_mega_wrap w-variant-23049969-09ac-2789-520b-3c6ae895bbc6 w-dropdown-list ${activeDropdown === 'products' ? 'w--open' : ''}`}>
                          <div className="nav_dropdown_mega_content w-variant-23049969-09ac-2789-520b-3c6ae895bbc6">
                            <div data-lenis-prevent="" className="nav_dropdown_mega_scroll">
                              <div className="nav_dropdown_mega_contain w-variant-23049969-09ac-2789-520b-3c6ae895bbc6">
                                <div className="nav_dropdown_mega_layout w-variant-23049969-09ac-2789-520b-3c6ae895bbc6">
                                  <ul role="list" className="nav_dropdown_list">
                                    <li className="nav_dropdown_item">
                                      <Link href="/products" className="nav_dropdown_link w-variant-23049969-09ac-2789-520b-3c6ae895bbc6 w-inline-block">
                                        <div className="nav_links_text u-text-style-small">Overview</div>
                                      </Link>
                                    </li>
                                    <li className="nav_dropdown_item">
                                      <Link href="/products/primary-casualty" className="nav_dropdown_link w-variant-23049969-09ac-2789-520b-3c6ae895bbc6 w-inline-block">
                                        <div className="nav_links_text u-text-style-small">PRIMARY CASUALTY</div>
                                      </Link>
                                    </li>
                                    <li className="nav_dropdown_item">
                                      <Link href="/products/excess-casualty" className="nav_dropdown_link w-variant-23049969-09ac-2789-520b-3c6ae895bbc6 w-inline-block">
                                        <div className="nav_links_text u-text-style-small">EXCESS CASUALTY</div>
                                      </Link>
                                    </li>
                                    <li className="nav_dropdown_item">
                                      <Link href="/products/builders-risk" className="nav_dropdown_link w-variant-23049969-09ac-2789-520b-3c6ae895bbc6 w-inline-block">
                                        <div className="nav_links_text u-text-style-small">BUILDER’S RISK</div>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </li>

                    {/* Industries Dropdown */}
                    <li 
                      className="nav_links_item w-variant-23049969-09ac-2789-520b-3c6ae895bbc6"
                      onMouseEnter={() => handleMouseEnter('industries')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="nav_dropdown_component w-variant-23049969-09ac-2789-520b-3c6ae895bbc6 w-dropdown">
                        <div 
                          className="nav_links_link w-variant-23049969-09ac-2789-520b-3c6ae895bbc6 w-dropdown-toggle"
                          aria-expanded={activeDropdown === 'industries'}
                        >
                          <Link href="/industries" className="w-inline-block">
                            <div className="nav_links_text u-text-style-small">INDUSTRIES</div>
                          </Link>
                          <div className="nav_links_svg">
                            <DropdownArrow />
                          </div>
                        </div>
                        <nav className={`nav_dropdown_mega_wrap w-variant-23049969-09ac-2789-520b-3c6ae895bbc6 w-dropdown-list ${activeDropdown === 'industries' ? 'w--open' : ''}`}>
                          <div className="nav_dropdown_mega_content w-variant-23049969-09ac-2789-520b-3c6ae895bbc6">
                            <div data-lenis-prevent="" className="nav_dropdown_mega_scroll">
                              <div className="nav_dropdown_mega_contain w-variant-23049969-09ac-2789-520b-3c6ae895bbc6">
                                <div className="nav_dropdown_mega_layout w-variant-23049969-09ac-2789-520b-3c6ae895bbc6">
                                  <ul role="list" className="nav_dropdown_list">
                                    <li className="nav_dropdown_item">
                                      <Link href="/industries" className="nav_dropdown_link w-variant-23049969-09ac-2789-520b-3c6ae895bbc6 w-inline-block">
                                        <div className="nav_links_text u-text-style-small">Overview</div>
                                      </Link>
                                    </li>
                                    <li className="nav_dropdown_item">
                                      <Link href="/industry/construction" className="nav_dropdown_link w-variant-23049969-09ac-2789-520b-3c6ae895bbc6 w-inline-block">
                                        <div className="nav_links_text u-text-style-small">Construction</div>
                                      </Link>
                                    </li>
                                    <li className="nav_dropdown_item">
                                      <Link href="/industry/renewable-energy-power" className="nav_dropdown_link w-variant-23049969-09ac-2789-520b-3c6ae895bbc6 w-inline-block">
                                        <div className="nav_links_text u-text-style-small">Renewable energy &amp; power</div>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </li>

                    {/* Resources Dropdown */}
                    <li 
                      className="nav_links_item w-variant-23049969-09ac-2789-520b-3c6ae895bbc6"
                      onMouseEnter={() => handleMouseEnter('resources')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="nav_dropdown_component w-variant-23049969-09ac-2789-520b-3c6ae895bbc6 w-dropdown">
                        <div 
                          className="nav_links_link w-variant-23049969-09ac-2789-520b-3c6ae895bbc6 w-dropdown-toggle"
                          aria-expanded={activeDropdown === 'resources'}
                        >
                          <Link href="/resources" className="w-inline-block">
                            <div className="nav_links_text u-text-style-small">Resources</div>
                          </Link>
                          <div className="nav_links_svg">
                            <DropdownArrow />
                          </div>
                        </div>
                        <nav className={`nav_dropdown_mega_wrap w-variant-23049969-09ac-2789-520b-3c6ae895bbc6 w-dropdown-list ${activeDropdown === 'resources' ? 'w--open' : ''}`}>
                          <div className="nav_dropdown_mega_content w-variant-23049969-09ac-2789-520b-3c6ae895bbc6">
                            <div data-lenis-prevent="" className="nav_dropdown_mega_scroll">
                              <div className="nav_dropdown_mega_contain w-variant-23049969-09ac-2789-520b-3c6ae895bbc6">
                                <div className="nav_dropdown_mega_layout w-variant-23049969-09ac-2789-520b-3c6ae895bbc6">
                                  <ul role="list" className="nav_dropdown_list">
                                    <li className="nav_dropdown_item">
                                      <Link href="/customer-stories" className="nav_dropdown_link w-variant-23049969-09ac-2789-520b-3c6ae895bbc6 w-inline-block">
                                        <div className="nav_links_text u-text-style-small">customer stories</div>
                                      </Link>
                                    </li>
                                    <li className="nav_dropdown_item">
                                      <Link href="/blog" className="nav_dropdown_link w-variant-23049969-09ac-2789-520b-3c6ae895bbc6 w-inline-block">
                                        <div className="nav_links_text u-text-style-small">blog</div>
                                      </Link>
                                    </li>
                                    <li className="nav_dropdown_item">
                                      <Link href="/savings" className="nav_dropdown_link w-variant-23049969-09ac-2789-520b-3c6ae895bbc6 w-inline-block">
                                        <div className="nav_links_text u-text-style-small">SHEPHERD SAVINGS</div>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </li>

                    {/* Careers Link */}
                    <li className="nav_links_item w-variant-23049969-09ac-2789-520b-3c6ae895bbc6">
                      <div className="nav_links_link w-variant-23049969-09ac-2789-520b-3c6ae895bbc6">
                        <div role="listitem" className="footer_group_item">
                          <Link href="/careers" className="footer_link_wrap w-inline-block">
                            <div className="footer_link_text u-text-style-small">Careers</div>
                          </Link>
                        </div>
                      </div>
                    </li>

                  </ul>

                  <ul role="list" className="nav_actions_wrap w-variant-23049969-09ac-2789-520b-3c6ae895bbc6 w-list-unstyled">
                    <li className="nav_buttons_item is-main w-variant-23049969-09ac-2789-520b-3c6ae895bbc6">
                      <div data-wf--button-main--variant="secondary" className="button_main_wrap" data-button=" " data-trigger="hover focus">
                        <div className="clickable_wrap u-cover-absolute">
                          <Link href="/about" className="clickable_link w-inline-block">
                            <span className="clickable_text u-sr-only">About</span>
                          </Link>
                        </div>
                        <div className="button_main_element w-variant-e85564cd-af30-a478-692b-71732aefb3ab">
                          <div aria-hidden="true" className="button_main_text u-text-style-small">About</div>
                        </div>
                      </div>
                    </li>

                    <li className="nav_buttons_item">
                      <div data-wf--button-main--variant="primary" className="button_main_wrap" data-button=" " data-trigger="hover focus">
                        <div className="clickable_wrap u-cover-absolute">
                          <Link href="/contact" className="clickable_link w-inline-block">
                            <span className="clickable_text u-sr-only">Contact</span>
                          </Link>
                        </div>
                        <div className="button_main_element">
                          <div aria-hidden="true" className="button_main_text u-text-style-small">Contact</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>
        </div>
      </>
    );
  };
