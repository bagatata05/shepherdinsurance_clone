"use client";

import React, { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function RenewableEnergy() {
  const mainRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  const [activeProduct, setActiveProduct] = useState<"primary" | "excess">(
    "primary",
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const navComponent = document.querySelector(".nav_component");
    if (!navComponent) return;

    const showAnim = gsap
      .from(navComponent, {
        yPercent: -100,
        paused: true,
        duration: 0.3,
        ease: "power1.out",
      })
      .progress(1);

    const trigger = ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        if (self.direction === -1) {
          showAnim.play();
        } else {
          showAnim.reverse();
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      // Implement scroll-reveal dropdown logic strictly on viewport width >= 992px
      mm.add("(min-width: 992px)", () => {
        const items = gsap.utils.toArray<HTMLElement>(".scroll-dropdown-item");
        const triggers = gsap.utils.toArray<HTMLElement>(
          ".forced-scroll-section-triggers .trigger",
        );

        if (items.length === 0) return;

        const wrappers = items.map(
          (item) =>
            item.querySelector(".scroll-dropdown-bottom-wrap") as HTMLElement,
        );

        // Set up initial state (first panel open, others closed)
        wrappers.forEach((wrap, idx) => {
          if (!wrap) return;
          if (idx === 0) {
            gsap.set(wrap, { height: "auto", opacity: 1 });
            items[idx].classList.add("is-active");
          } else {
            gsap.set(wrap, { height: 0, opacity: 0 });
            items[idx].classList.remove("is-active");
          }
        });

        // Set cursor pointers and click transitions on headers
        items.forEach((item, idx) => {
          const header = item.querySelector(
            ".scroll-dropdown-top",
          ) as HTMLElement;
          const trigger = triggers[idx];
          if (header) {
            header.style.cursor = "pointer";

            const handleClick = () => {
              if (trigger && lenisRef.current) {
                lenisRef.current.scrollTo(trigger, {
                  offset: -window.innerHeight * 0.3,
                  duration: 1.2,
                });
              } else {
                // Fallback scroll behaviour if trigger elements aren't present
                // Toggle active manually when triggers don't drive scroll
                wrappers.forEach((w, i) => {
                  if (!w) return;
                  if (i === idx) {
                    gsap.to(w, {
                      height: "auto",
                      opacity: 1,
                      duration: 0.4,
                      ease: "power2.out",
                      overwrite: "auto",
                    });
                    items[i].classList.add("is-active");
                  } else {
                    gsap.to(w, {
                      height: 0,
                      opacity: 0,
                      duration: 0.4,
                      ease: "power2.out",
                      overwrite: "auto",
                    });
                    items[i].classList.remove("is-active");
                  }
                });
              }
            };

            header.addEventListener("click", handleClick);
            (header as any)._cleanup = () =>
              header.removeEventListener("click", handleClick);
          }
        });

        // If trigger elements are present in the HTML structure, bind them to ScrollTrigger
        if (triggers.length > 0) {
          triggers.forEach((trigger, idx) => {
            ScrollTrigger.create({
              trigger: trigger,
              start: "top 50%",
              end: "bottom 50%",
              onToggle: (self) => {
                if (self.isActive) {
                  // Expand active accordion slide
                  const activeWrap = wrappers[idx];
                  if (activeWrap) {
                    gsap.to(activeWrap, {
                      height: "auto",
                      opacity: 1,
                      duration: 0.4,
                      ease: "power2.out",
                      overwrite: "auto",
                    });
                    items[idx].classList.add("is-active");
                  }

                  // Collapse other accordion slides
                  wrappers.forEach((otherWrap, otherIdx) => {
                    if (otherIdx !== idx && otherWrap) {
                      gsap.to(otherWrap, {
                        height: 0,
                        opacity: 0,
                        duration: 0.4,
                        ease: "power2.out",
                        overwrite: "auto",
                      });
                      items[otherIdx].classList.remove("is-active");
                    }
                  });
                }
              },
            });
          });
        }
      });
    }, mainRef);

    return () => {
      ctx.revert();

      // Clean up click listeners
      const items = document.querySelectorAll(".scroll-dropdown-item");
      items.forEach((item) => {
        const header = item.querySelector(".scroll-dropdown-top") as any;
        if (header && header._cleanup) {
          header._cleanup();
        }
      });
    };
  }, []);

  return (
    <div ref={mainRef} id="main" className="page_wrap">
      <div data-barba="container" className="page_main">
        <Header />

        <div className="industries-page-content">
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
                              Protection built{" "}
                              <span className="txt-icon-arrow is-up"> </span>{" "}
                              for renewable energy and power.
                            </h1>
                            <div className="hero-p u-text-style-main">
                              Protecting the infrastructure powering the next
                              generation of the grid.
                            </div>
                          </div>
                          <div className="u-button-wrapper u-margin-top-0">
                            <div className="u-display-contents">
                              <div
                                data-wf--button-main--variant="primary"
                                className="button_main_wrap"
                                data-button=""
                                data-trigger="hover-focus"
                              >
                                <div className="clickable_wrap u-cover-absolute">
                                  <a
                                    href="/contact"
                                    className="clickable_link w-inline-block"
                                  >
                                    <span className="clickable_text u-sr-only">
                                      Contact us
                                    </span>
                                  </a>
                                  <button
                                    type="button"
                                    className="clickable_btn"
                                  >
                                    <span className="clickable_text u-sr-only">
                                      Contact us
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
                                    Contact us
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
                </div>
              </div>
              <div className="hero-grid-visual">
                <div id="careers-video" className="u-visual">
                  <img
                    src="/assets/images/american-public-power-association-xgazzylzn18-unsplash.avif"
                    loading="lazy"
                    alt=""
                    sizes="(max-width: 1360px) 100vw, 1360px"
                    srcSet="/assets/images/american-public-power-association-xgazzylzn18-unsplash-p-500.avif 500w, /assets/images/american-public-power-association-xgazzylzn18-unsplash-p-800.avif 800w, /assets/images/american-public-power-association-xgazzylzn18-unsplash-p-1080.avif 1080w, /assets/images/american-public-power-association-xgazzylzn18-unsplash-p-1600.avif 1600w, /assets/images/american-public-power-association-xgazzylzn18-unsplash.avif 1920w"
                    className="u-visual-image"
                  />
                  <div className="u-visual-bk"></div>
                  <div className="img-overlay"></div>
                </div>
              </div>
            </div>
          </section>

          <section className="u-section u-theme-light">
            <div className="section_spacer">
              <div className="u-container">
                <div className="u-content v-flex-8">
                  <div className="content-flex v-flex-8">
                    <div className="section-content-flex v-flex-5">
                      <div className="section-header-grid u-grid-custom">
                        <div className="section-header-title-col u-column-span-2">
                          <div className="heading-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 17 34"
                              fill="none"
                            >
                              <path
                                d="M16.9706 16.9705L2.07015e-05 -0.00010423L1.85557e-05 16.9705L1.641e-05 33.941L16.9706 16.9705Z"
                                fill="#DA43E7"
                              ></path>
                            </svg>
                          </div>
                          <h1
                            data-max="ch25"
                            className="section-heading u-text-style-h3"
                          >
                            Insurance solutions built for a changing world.
                          </h1>
                        </div>
                        <div>
                          <div className="u-text-style-main">
                            We&apos;re modernizing insurance from the ground up
                            to get faster decisions and clearer risk insights.
                          </div>
                        </div>
                      </div>
                      <div className="card-grid-3 u-grid-custom">
                        <div
                          data-wf--centered-card--variant="base"
                          className="centered-card-slide"
                        >
                          <div className="centered-card-wrap">
                            <div className="centered-card-content-abs">
                              <div className="div-block">
                                <div className="div-block-2">
                                  <img
                                    src="/assets/gifs/speed-that-keeps-pace.gif"
                                    loading="lazy"
                                    alt=""
                                    className="img-abs"
                                  />
                                </div>
                              </div>
                              <div className="u-text-style-large">
                                Speed that keeps pace
                              </div>
                              <div>
                                Underwriting decisions in hours, not weeks.
                                Automation and AI streamline complexity.
                              </div>
                            </div>
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
                          </div>
                          <div className="div-block-21">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="0px"
                              height="0px"
                              viewBox="0 0 440 440"
                              fill="none"
                              className="clip-svg"
                            >
                              <defs>
                                <clipPath
                                  id="Subtract"
                                  clipPathUnits="objectBoundingBox"
                                >
                                  <path
                                    d="M0.8636363636363636,-3.775068181818181e-8l0.13636363636363635,0.13636363636363635l0,0.8636363636363636l-1,0l0,-1l0.8636363636363636,0z"
                                    fill="black"
                                  ></path>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div
                          data-wf--centered-card--variant="base"
                          className="centered-card-slide"
                        >
                          <div className="centered-card-wrap">
                            <div className="centered-card-content-abs">
                              <div className="div-block">
                                <div className="div-block-2">
                                  <img
                                    src="/assets/gifs/intelligence-that-rewards.gif"
                                    loading="lazy"
                                    alt=""
                                    className="img-abs"
                                  />
                                </div>
                              </div>
                              <div className="u-text-style-large">
                                Intelligence that rewards
                              </div>
                              <div>
                                Pricing which proactively rewards the behaviors
                                that drive better outcomes.
                              </div>
                            </div>
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
                          </div>
                          <div className="div-block-21">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="0px"
                              height="0px"
                              viewBox="0 0 440 440"
                              fill="none"
                              className="clip-svg"
                            >
                              <defs>
                                <clipPath
                                  id="Subtract"
                                  clipPathUnits="objectBoundingBox"
                                >
                                  <path
                                    d="M0.8636363636363636,-3.775068181818181e-8l0.13636363636363635,0.13636363636363635l0,0.8636363636363636l-1,0l0,-1l0.8636363636363636,0z"
                                    fill="black"
                                  ></path>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div
                          data-wf--centered-card--variant="base"
                          className="centered-card-slide"
                        >
                          <div className="centered-card-wrap">
                            <div className="centered-card-content-abs">
                              <div className="div-block">
                                <div className="div-block-2">
                                  <img
                                    src="/assets/gifs/single-conected-system.gif"
                                    loading="lazy"
                                    alt=""
                                    className="img-abs"
                                  />
                                </div>
                              </div>
                              <div className="u-text-style-large">
                                A single connected system
                              </div>
                              <div>
                                Unified product suite designed to provide a
                                one-stop solution for clients.
                              </div>
                            </div>
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
                          </div>
                          <div className="div-block-21">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="0px"
                              height="0px"
                              viewBox="0 0 440 440"
                              fill="none"
                              className="clip-svg"
                            >
                              <defs>
                                <clipPath
                                  id="Subtract"
                                  clipPathUnits="objectBoundingBox"
                                >
                                  <path
                                    d="M0.8636363636363636,-3.775068181818181e-8l0.13636363636363635,0.13636363636363635l0,0.8636363636363636l-1,0l0,-1l0.8636363636363636,0z"
                                    fill="black"
                                  ></path>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="u-section u-theme-beige">
            <div className="section_spacer">
              <div className="u-container">
                <div className="u-content v-flex-8">
                  <div className="content-flex v-flex-8">
                    <div className="products-overview-grid u-grid-custom">
                      <div className="solution-right-flex">
                        <div data-max="ch16" className="u-text-style-h3">
                          Select product to view appetite details
                        </div>
                        <div
                          className={`dropdown-wrap is-appetite w-dropdown ${isDropdownOpen ? "w--open" : ""}`}
                          ref={dropdownRef}
                          style={{ position: "relative" }}
                        >
                          <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className={`dropdown-btn is-top w-dropdown-toggle ${isDropdownOpen ? "w--open" : ""}`}
                            type="button"
                            aria-haspopup="listbox"
                            aria-expanded={isDropdownOpen}
                          >
                            <div
                              className={`div-block-14 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M20.031 9.53104L12.531 17.031C12.4614 17.1008 12.3787 17.1561 12.2876 17.1938C12.1966 17.2316 12.099 17.251 12.0004 17.251C11.9019 17.251 11.8043 17.2316 11.7132 17.1938C11.6222 17.1561 11.5394 17.1008 11.4698 17.031L3.96979 9.53104C3.82906 9.39031 3.75 9.19944 3.75 9.00042C3.75 8.80139 3.82906 8.61052 3.96979 8.46979C4.11052 8.32906 4.30139 8.25 4.50042 8.25C4.69944 8.25 4.89031 8.32906 5.03104 8.46979L12.0004 15.4401L18.9698 8.46979C19.0395 8.40011 19.1222 8.34483 19.2132 8.30712C19.3043 8.26941 19.4019 8.25 19.5004 8.25C19.599 8.25 19.6965 8.26941 19.7876 8.30712C19.8786 8.34483 19.9614 8.40011 20.031 8.46979C20.1007 8.53947 20.156 8.6222 20.1937 8.71324C20.2314 8.80429 20.2508 8.90187 20.2508 9.00042C20.2508 9.09896 20.2314 9.19654 20.1937 9.28759C20.156 9.37863 20.1007 9.46136 20.031 9.53104Z"
                                  fill="black"
                                ></path>
                              </svg>
                            </div>
                            <div className="u-text-style-small uppercase">
                              {activeProduct === "primary" &&
                                "Primary Casualty"}
                              {activeProduct === "excess" && "Excess Casualty"}
                            </div>
                          </button>
                          <div
                            className={`dropdown-bottom w-dropdown-list ${isDropdownOpen ? "w--open" : ""}`}
                            style={{
                              height: isDropdownOpen ? "auto" : "0px",
                              overflow: isDropdownOpen ? "visible" : "hidden",
                              position: "absolute",
                              width: "100%",
                              zIndex: 10,
                              transition: "height 0.2s ease, opacity 0.2s ease",
                            }}
                          >
                            <div
                              data-lenis-prevent=""
                              className="dropdown-btn is-bottom"
                            >
                              <div className="state-dropdown-list">
                                <div
                                  onClick={() => {
                                    setActiveProduct("primary");
                                    setIsDropdownOpen(false);
                                    setActiveAccordion(0);
                                  }}
                                  className="state-dropdown-item cursor-pointer"
                                >
                                  <div className="products-flex">
                                    <div className="checkmark">
                                      <div
                                        className={`solution-check is-dropdown ${activeProduct === "primary" ? "is-active" : "w-condition-invisible"}`}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="100%"
                                          viewBox="0 0 18 18"
                                          fill="none"
                                          className="check-svg"
                                        >
                                          <path
                                            d="M3.5 10L7 13.3094L14.5 4"
                                            stroke="white"
                                            strokeWidth="2"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                    <div className="check-txt u-text-style-large">
                                      primary Casualty
                                    </div>
                                  </div>
                                </div>
                                <div
                                  onClick={() => {
                                    setActiveProduct("excess");
                                    setIsDropdownOpen(false);
                                    setActiveAccordion(0);
                                  }}
                                  className="state-dropdown-item cursor-pointer"
                                >
                                  <div className="products-flex">
                                    <div className="checkmark">
                                      <div
                                        className={`solution-check is-dropdown ${activeProduct === "excess" ? "is-active" : "w-condition-invisible"}`}
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="100%"
                                          viewBox="0 0 18 18"
                                          fill="none"
                                          className="check-svg"
                                        >
                                          <path
                                            d="M3.5 10L7 13.3094L14.5 4"
                                            stroke="white"
                                            strokeWidth="2"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                    <div className="check-txt u-text-style-large">
                                      Excess Casualty
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="appetite-right">
                        <div className="appetite-details-wrap-flex">
                          {/* Primary Casualty */}
                          <div
                            className="appetite-details"
                            style={{
                              display:
                                activeProduct === "primary" ? "flex" : "none",
                            }}
                          >
                            <div className="appetite-details-title">
                              Primary Casualty
                            </div>
                            <div className="accordion_wrap">
                              <div className="accordion_list" role="list">
                                <div
                                  className="accordion_item"
                                  role="listitem"
                                  style={
                                    {
                                      "--_state---false":
                                        activeAccordion === 0 ? 0 : 1,
                                      "--_state---true":
                                        activeAccordion === 0 ? 1 : 0,
                                    } as any
                                  }
                                >
                                  <div className="accordion_component">
                                    <h3 className="accordion_toggle_heading">
                                      <button
                                        onClick={() =>
                                          setActiveAccordion(
                                            activeAccordion === 0 ? null : 0,
                                          )
                                        }
                                        aria-expanded={
                                          activeAccordion === 0
                                            ? "true"
                                            : "false"
                                        }
                                        className="accordion_toggle_button"
                                        type="button"
                                      >
                                        <span className="accordion_toggle_text u-text-style-h4">
                                          Target Appetite
                                        </span>
                                        <span className="accordion_toggle_icon">
                                          <svg
                                            viewBox="0 0 66 70"
                                            fill="none"
                                            width="100%"
                                            height="100%"
                                            aria-hidden="true"
                                            className="u-svg"
                                          >
                                            <path
                                              d="M17 2L50 34.9999L17 68"
                                              className="u-path"
                                            ></path>
                                          </svg>
                                        </span>
                                      </button>
                                    </h3>
                                    <div
                                      className="accordion_content_wrap"
                                      style={{
                                        display:
                                          activeAccordion === 0
                                            ? "block"
                                            : "none",
                                      }}
                                    >
                                      <div className="accordion_content_padding">
                                        <div className="appetite-details-flex">
                                          {[
                                            "Solar",
                                            "Onshore Wind",
                                            "Biomass",
                                            "Microgrids",
                                            "Natural Gas Power Plants",
                                            "Fuel Cells",
                                            "Energy Storage Systems",
                                            "Hydroelectricty",
                                            "Steam Electric Power Plants",
                                            "Cogeneration Power Plants",
                                          ].map((item, idx) => (
                                            <div
                                              key={idx}
                                              className="div-block-20"
                                            >
                                              <div className="products-flex">
                                                <div className="checkmark">
                                                  <div className="solution-check"></div>
                                                </div>
                                                <div className="check-txt u-text-style-large">
                                                  {item}
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="accordion_item"
                                  role="listitem"
                                  style={
                                    {
                                      "--_state---false":
                                        activeAccordion === 1 ? 0 : 1,
                                      "--_state---true":
                                        activeAccordion === 1 ? 1 : 0,
                                    } as any
                                  }
                                >
                                  <div className="accordion_component">
                                    <h3 className="accordion_toggle_heading">
                                      <button
                                        onClick={() =>
                                          setActiveAccordion(
                                            activeAccordion === 1 ? null : 1,
                                          )
                                        }
                                        aria-expanded={
                                          activeAccordion === 1
                                            ? "true"
                                            : "false"
                                        }
                                        className="accordion_toggle_button"
                                        type="button"
                                      >
                                        <span className="accordion_toggle_text u-text-style-h4">
                                          Restricted or Ineligible
                                        </span>
                                        <span className="accordion_toggle_icon">
                                          <svg
                                            viewBox="0 0 66 70"
                                            fill="none"
                                            width="100%"
                                            height="100%"
                                            aria-hidden="true"
                                            className="u-svg"
                                          >
                                            <path
                                              d="M17 2L50 34.9999L17 68"
                                              className="u-path"
                                            ></path>
                                          </svg>
                                        </span>
                                      </button>
                                    </h3>
                                    <div
                                      className="accordion_content_wrap"
                                      style={{
                                        display:
                                          activeAccordion === 1
                                            ? "block"
                                            : "none",
                                      }}
                                    >
                                      <div className="accordion_content_padding">
                                        <div className="appetite-details-flex">
                                          {[
                                            "Traditional Oil & Gas risks",
                                            "Coal Fired Power Plants",
                                            "Residential Solar",
                                            "Solutions or Development companies without ownership",
                                            "Manufacturers of renewal components",
                                          ].map((item, idx) => (
                                            <div
                                              key={idx}
                                              className="div-block-20"
                                            >
                                              <div className="products-flex">
                                                <div className="checkmark">
                                                  <div className="solution-check"></div>
                                                </div>
                                                <div className="check-txt u-text-style-large">
                                                  {item}
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="accordion_item"
                                  role="listitem"
                                  style={
                                    {
                                      "--_state---false":
                                        activeAccordion === 2 ? 0 : 1,
                                      "--_state---true":
                                        activeAccordion === 2 ? 1 : 0,
                                    } as any
                                  }
                                >
                                  <div className="accordion_component">
                                    <h3 className="accordion_toggle_heading">
                                      <button
                                        onClick={() =>
                                          setActiveAccordion(
                                            activeAccordion === 2 ? null : 2,
                                          )
                                        }
                                        aria-expanded={
                                          activeAccordion === 2
                                            ? "true"
                                            : "false"
                                        }
                                        className="accordion_toggle_button"
                                        type="button"
                                      >
                                        <span className="accordion_toggle_text u-text-style-h4">
                                          Shepherd Savings Eligible Partnerships
                                        </span>
                                        <span className="accordion_toggle_icon">
                                          <svg
                                            viewBox="0 0 66 70"
                                            fill="none"
                                            width="100%"
                                            height="100%"
                                            aria-hidden="true"
                                            className="u-svg"
                                          >
                                            <path
                                              d="M17 2L50 34.9999L17 68"
                                              className="u-path"
                                            ></path>
                                          </svg>
                                        </span>
                                      </button>
                                    </h3>
                                    <div
                                      className="accordion_content_wrap"
                                      style={{
                                        display:
                                          activeAccordion === 2
                                            ? "block"
                                            : "none",
                                      }}
                                    >
                                      <div className="accordion_content_padding">
                                        <div className="appetite-details-flex">
                                          {[
                                            "Procore",
                                            "Autodesk",
                                            "Raken",
                                            "OpenSpace",
                                            "DroneDeploy",
                                            "RaptorMaps",
                                          ].map((item, idx) => (
                                            <div
                                              key={idx}
                                              className="div-block-20"
                                            >
                                              <div className="products-flex">
                                                <div className="checkmark">
                                                  <div className="solution-check"></div>
                                                </div>
                                                <div className="check-txt u-text-style-large">
                                                  {item}
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
                          </div>

                          {/* Excess Casualty */}
                          <div
                            className="appetite-details"
                            style={{
                              display:
                                activeProduct === "excess" ? "flex" : "none",
                            }}
                          >
                            <div className="appetite-details-title">
                              Excess Casualty
                            </div>
                            <div className="accordion_wrap">
                              <div className="accordion_list" role="list">
                                <div
                                  className="accordion_item"
                                  role="listitem"
                                  style={
                                    {
                                      "--_state---false":
                                        activeAccordion === 0 ? 0 : 1,
                                      "--_state---true":
                                        activeAccordion === 0 ? 1 : 0,
                                    } as any
                                  }
                                >
                                  <div className="accordion_component">
                                    <h3 className="accordion_toggle_heading">
                                      <button
                                        onClick={() =>
                                          setActiveAccordion(
                                            activeAccordion === 0 ? null : 0,
                                          )
                                        }
                                        aria-expanded={
                                          activeAccordion === 0
                                            ? "true"
                                            : "false"
                                        }
                                        className="accordion_toggle_button"
                                        type="button"
                                      >
                                        <span className="accordion_toggle_text u-text-style-h4">
                                          Target Appetite
                                        </span>
                                        <span className="accordion_toggle_icon">
                                          <svg
                                            viewBox="0 0 66 70"
                                            fill="none"
                                            width="100%"
                                            height="100%"
                                            aria-hidden="true"
                                            className="u-svg"
                                          >
                                            <path
                                              d="M17 2L50 34.9999L17 68"
                                              className="u-path"
                                            ></path>
                                          </svg>
                                        </span>
                                      </button>
                                    </h3>
                                    <div
                                      className="accordion_content_wrap"
                                      style={{
                                        display:
                                          activeAccordion === 0
                                            ? "block"
                                            : "none",
                                      }}
                                    >
                                      <div className="accordion_content_padding">
                                        <div className="appetite-details-flex">
                                          {[
                                            "Solar",
                                            "Onshore Wind",
                                            "Biomass",
                                            "Microgrids",
                                            "Natural Gas Power Plants",
                                            "Fuel Cells",
                                            "Energy Storage Systems",
                                            "Hydroelectricty",
                                            "Steam Electric Power Plants",
                                            "Cogeneration Power Plants",
                                          ].map((item, idx) => (
                                            <div
                                              key={idx}
                                              className="div-block-20"
                                            >
                                              <div className="products-flex">
                                                <div className="checkmark">
                                                  <div className="solution-check"></div>
                                                </div>
                                                <div className="check-txt u-text-style-large">
                                                  {item}
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="accordion_item"
                                  role="listitem"
                                  style={
                                    {
                                      "--_state---false":
                                        activeAccordion === 1 ? 0 : 1,
                                      "--_state---true":
                                        activeAccordion === 1 ? 1 : 0,
                                    } as any
                                  }
                                >
                                  <div className="accordion_component">
                                    <h3 className="accordion_toggle_heading">
                                      <button
                                        onClick={() =>
                                          setActiveAccordion(
                                            activeAccordion === 1 ? null : 1,
                                          )
                                        }
                                        aria-expanded={
                                          activeAccordion === 1
                                            ? "true"
                                            : "false"
                                        }
                                        className="accordion_toggle_button"
                                        type="button"
                                      >
                                        <span className="accordion_toggle_text u-text-style-h4">
                                          Restricted or Ineligible
                                        </span>
                                        <span className="accordion_toggle_icon">
                                          <svg
                                            viewBox="0 0 66 70"
                                            fill="none"
                                            width="100%"
                                            height="100%"
                                            aria-hidden="true"
                                            className="u-svg"
                                          >
                                            <path
                                              d="M17 2L50 34.9999L17 68"
                                              className="u-path"
                                            ></path>
                                          </svg>
                                        </span>
                                      </button>
                                    </h3>
                                    <div
                                      className="accordion_content_wrap"
                                      style={{
                                        display:
                                          activeAccordion === 1
                                            ? "block"
                                            : "none",
                                      }}
                                    >
                                      <div className="accordion_content_padding">
                                        <div className="appetite-details-flex">
                                          {[
                                            "Traditional Oil & Gas risks",
                                            "Coal Fired Power Plants",
                                            "Residential Solar",
                                            "Solutions or Development companies without ownership",
                                            "Manufacturers of renewal components",
                                          ].map((item, idx) => (
                                            <div
                                              key={idx}
                                              className="div-block-20"
                                            >
                                              <div className="products-flex">
                                                <div className="checkmark">
                                                  <div className="solution-check"></div>
                                                </div>
                                                <div className="check-txt u-text-style-large">
                                                  {item}
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="accordion_item"
                                  role="listitem"
                                  style={
                                    {
                                      "--_state---false":
                                        activeAccordion === 2 ? 0 : 1,
                                      "--_state---true":
                                        activeAccordion === 2 ? 1 : 0,
                                    } as any
                                  }
                                >
                                  <div className="accordion_component">
                                    <h3 className="accordion_toggle_heading">
                                      <button
                                        onClick={() =>
                                          setActiveAccordion(
                                            activeAccordion === 2 ? null : 2,
                                          )
                                        }
                                        aria-expanded={
                                          activeAccordion === 2
                                            ? "true"
                                            : "false"
                                        }
                                        className="accordion_toggle_button"
                                        type="button"
                                      >
                                        <span className="accordion_toggle_text u-text-style-h4">
                                          Shepherd Savings Eligible Partnerships
                                        </span>
                                        <span className="accordion_toggle_icon">
                                          <svg
                                            viewBox="0 0 66 70"
                                            fill="none"
                                            width="100%"
                                            height="100%"
                                            aria-hidden="true"
                                            className="u-svg"
                                          >
                                            <path
                                              d="M17 2L50 34.9999L17 68"
                                              className="u-path"
                                            ></path>
                                          </svg>
                                        </span>
                                      </button>
                                    </h3>
                                    <div
                                      className="accordion_content_wrap"
                                      style={{
                                        display:
                                          activeAccordion === 2
                                            ? "block"
                                            : "none",
                                      }}
                                    >
                                      <div className="accordion_content_padding">
                                        <div className="appetite-details-flex">
                                          {[
                                            "Procore",
                                            "Autodesk",
                                            "Raken",
                                            "OpenSpace",
                                            "DroneDeploy",
                                            "RaptorMaps",
                                          ].map((item, idx) => (
                                            <div
                                              key={idx}
                                              className="div-block-20"
                                            >
                                              <div className="products-flex">
                                                <div className="checkmark">
                                                  <div className="solution-check"></div>
                                                </div>
                                                <div className="check-txt u-text-style-large">
                                                  {item}
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="u-section u-theme-light">
            <div className="section_spacer">
              <div className="u-container">
                <div className="u-content v-flex-8">
                  <div className="product-large-img-wrap">
                    <div pt-child="" className="product-large-img-content">
                      <h1 className="section-heading u-text-style-h3">
                        Shepherd Savings Eligible Partnerships
                      </h1>
                      <div className="product-large-img-grid u-grid-custom">
                        <div className="div-block-19">
                          <div className="industry-eligble-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 17 34"
                              fill="none"
                              className="small-txt-icon"
                            >
                              <path
                                d="M16.9706 16.9705L2.07015e-05 -0.00010423L1.85557e-05 16.9705L1.641e-05 33.941L16.9706 16.9705Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <div className="u-text-style-large">PROCORE</div>
                          </div>
                          <div className="industry-eligble-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 17 34"
                              fill="none"
                              className="small-txt-icon"
                            >
                              <path
                                d="M16.9706 16.9705L2.07015e-05 -0.00010423L1.85557e-05 16.9705L1.641e-05 33.941L16.9706 16.9705Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <div className="u-text-style-large">AUTODESK</div>
                          </div>
                          <div className="industry-eligble-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 17 34"
                              fill="none"
                              className="small-txt-icon"
                            >
                              <path
                                d="M16.9706 16.9705L2.07015e-05 -0.00010423L1.85557e-05 16.9705L1.641e-05 33.941L16.9706 16.9705Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <div className="u-text-style-large">RAKEN</div>
                          </div>
                        </div>
                        <div className="div-block-19">
                          <div className="industry-eligble-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 17 34"
                              fill="none"
                              className="small-txt-icon"
                            >
                              <path
                                d="M16.9706 16.9705L2.07015e-05 -0.00010423L1.85557e-05 16.9705L1.641e-05 33.941L16.9706 16.9705Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <div className="u-text-style-large">OpenSpace</div>
                          </div>
                          <div className="industry-eligble-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 17 34"
                              fill="none"
                              className="small-txt-icon"
                            >
                              <path
                                d="M16.9706 16.9705L2.07015e-05 -0.00010423L1.85557e-05 16.9705L1.641e-05 33.941L16.9706 16.9705Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <div className="u-text-style-large">
                              DroneDeploy
                            </div>
                          </div>
                        </div>
                        <div className="div-block-19">
                          <div className="industry-eligble-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 17 34"
                              fill="none"
                              className="small-txt-icon"
                            >
                              <path
                                d="M16.9706 16.9705L2.07015e-05 -0.00010423L1.85557e-05 16.9705L1.641e-05 33.941L16.9706 16.9705Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <div className="u-text-style-large">Samsara</div>
                          </div>
                          <div className="industry-eligble-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 17 34"
                              fill="none"
                              className="small-txt-icon"
                            >
                              <path
                                d="M16.9706 16.9705L2.07015e-05 -0.00010423L1.85557e-05 16.9705L1.641e-05 33.941L16.9706 16.9705Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <div className="u-text-style-large">Motive</div>
                          </div>
                        </div>
                        <div className="div-block-19">
                          <div className="industry-eligble-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 17 34"
                              fill="none"
                              className="small-txt-icon"
                            >
                              <path
                                d="M16.9706 16.9705L2.07015e-05 -0.00010423L1.85557e-05 16.9705L1.641e-05 33.941L16.9706 16.9705Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <div className="u-text-style-large">Brickeye</div>
                          </div>
                          <div className="industry-eligble-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 17 34"
                              fill="none"
                              className="small-txt-icon"
                            >
                              <path
                                d="M16.9706 16.9705L2.07015e-05 -0.00010423L1.85557e-05 16.9705L1.641e-05 33.941L16.9706 16.9705Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <div className="u-text-style-large">WINT</div>
                          </div>
                          <div className="industry-eligble-flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 17 34"
                              fill="none"
                              className="small-txt-icon"
                            >
                              <path
                                d="M16.9706 16.9705L2.07015e-05 -0.00010423L1.85557e-05 16.9705L1.641e-05 33.941L16.9706 16.9705Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <div className="u-text-style-large">Kairos</div>
                          </div>
                        </div>
                      </div>
                      <div id="w-node-_46f25055-fbef-43db-4bd8-a0229d88c9a6-9d88c978">
                        <div
                          data-wf--button-main--variant="primary"
                          className="button_main_wrap"
                          data-button=""
                          data-trigger="hover-focus"
                        >
                          <div className="clickable_wrap u-cover-absolute">
                            <a
                              href="/savings"
                              className="clickable_link w-inline-block"
                            >
                              <span className="clickable_text u-sr-only">
                                Explore Shepherd Savings
                              </span>
                            </a>
                            <button type="button" className="clickable_btn">
                              <span className="clickable_text u-sr-only">
                                Explore Shepherd Savings
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
                              Explore Shepherd Savings
                            </div>
                            <div className="button_main_icon u-hide-if-empty"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="careers-video" className="u-visual">
                      <img
                        src="/assets/images/getty-images-vexwfefzrne-unsplash-1.webp"
                        loading="lazy"
                        alt=""
                        sizes="(max-width: 1360px) 100vw, 1360px"
                        srcSet="/assets/images/getty-images-vexwfefzrne-unsplash-1-p-500.webp 500w, /assets/images/getty-images-vexwfefzrne-unsplash-1-p-800.webp 800w, /assets/images/getty-images-vexwfefzrne-unsplash-1-p-1080.webp 1080w, /assets/images/getty-images-vexwfefzrne-unsplash-1-p-1600.webp 1600w, /assets/images/getty-images-vexwfefzrne-unsplash-1-p-2000.webp 2000w, /assets/images/getty-images-vexwfefzrne-unsplash-1-p-2600.webp 2600w, /assets/images/getty-images-vexwfefzrne-unsplash-1-p-3200.webp 3200w, /assets/images/getty-images-vexwfefzrne-unsplash-1.webp 4096w"
                        className="u-visual-image"
                      />
                      <div className="u-visual-bk"></div>
                      <div className="img-overlay"></div>
                    </div>
                    <div className="div-block-22"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="u-section u-theme-beige">
            <div className="section_spacer no-bottom-t">
              <div className="forced-scroll-section-height">
                <div className="forced-scroll-section">
                  <div className="u-container">
                    <div className="u-content v-flex-8">
                      <div className="content-flex v-flex-6">
                        <div className="section-content-flex v-flex-5">
                          <div className="section-header-grid u-grid-custom">
                            <div className="section-header-title-col u-column-span-2">
                              <div className="heading-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="100%"
                                  viewBox="0 0 17 34"
                                  fill="none"
                                >
                                  <path
                                    d="M16.9706 16.9705L2.07015e-05 -0.00010423L1.85557e-05 16.9705L1.641e-05 33.941L16.9706 16.9705Z"
                                    fill="#DA43E7"
                                  ></path>
                                </svg>
                              </div>
                              <h1
                                data-max="ch25"
                                className="section-heading u-text-style-h3"
                              >
                                Powered by tech. Proven in the field.
                              </h1>
                            </div>
                            <div>
                              <div className="u-text-style-main">
                                Learn how Shepherd integrates smarter
                                technology, and operators are raising the bar
                                for their industries.
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="scroll-dropdown-flex">
                          <div className="scroll-dropdown-item">
                            <div className="scroll-dropdown-top">
                              <div className="scroll-dropdown-top-text u-text-style-h4">
                                Coordinated Placement for Utility-Scale Solar
                                Contractor
                              </div>
                            </div>
                            <div className="scroll-dropdown-bottom-wrap">
                              <div className="scroll-dropdown-bottom-grid u-grid-custom">
                                <div className="scroll-dropdown-bottom-video-col u-column-span-2">
                                  <div>
                                    <div
                                      video-parent=""
                                      className="scroll-dropdown-bottom-video-wrap"
                                    >
                                      <div
                                        id="careers-video"
                                        className="u-visual"
                                      >
                                        <img
                                          src="/assets/images/shawn-rain-he-rebzofui-unsplash-1.webp"
                                          loading="lazy"
                                          alt=""
                                          sizes="(max-width: 1360px) 100vw, 1360px"
                                          srcSet="/assets/images/shawn-rain-he-rebzofui-unsplash-1-p-500.webp 500w, /assets/images/shawn-rain-he-rebzofui-unsplash-1-p-800.webp 800w, /assets/images/shawn-rain-he-rebzofui-unsplash-1-p-1080.webp 1080w, /assets/images/shawn-rain-he-rebzofui-unsplash-1-p-1600.webp 1600w, /assets/images/shawn-rain-he-rebzofui-unsplash-1.webp 1920w"
                                          className="u-visual-image"
                                        />
                                        <div className="u-visual-bk"></div>
                                        <div className="img-overlay"></div>
                                      </div>
                                      <div className="abs-video-btn"></div>
                                    </div>
                                  </div>
                                </div>
                                <div className="scroll-dropdown-bottom-content">
                                  <div className="u-text-style-main">
                                    &quot;What further strengthened the
                                    opportunity was the organization’s
                                    intentional use of drone technology for
                                    jobsite monitoring and oversight. This
                                    approach aligns closely with Shepherd&apos;s
                                    belief that technology can effectively
                                    improve visibility, safety, and risk
                                    management in construction operations.&quot;
                                  </div>
                                  <div>
                                    <div
                                      data-wf--button-main--variant="primary"
                                      className="button_main_wrap"
                                      data-button=""
                                      data-trigger="hover-focus"
                                    >
                                      <div className="clickable_wrap u-cover-absolute">
                                        <a
                                          href="/case-studies/coordinated-placement-for-utility-scale-solar-contractor"
                                          className="clickable_link w-inline-block"
                                        >
                                          <span className="clickable_text u-sr-only">
                                            READ MORE
                                          </span>
                                        </a>
                                        <button
                                          type="button"
                                          className="clickable_btn"
                                        >
                                          <span className="clickable_text u-sr-only">
                                            READ MORE
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
                                          READ MORE
                                        </div>
                                        <div className="button_main_icon u-hide-if-empty"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="scroll-dropdown-item">
                            <div className="scroll-dropdown-top">
                              <div className="scroll-dropdown-top-text u-text-style-h4">
                                Data Center Developer opts into Shepherd Savings
                                for $315M OCIP in VA
                              </div>
                            </div>
                            <div className="scroll-dropdown-bottom-wrap">
                              <div className="scroll-dropdown-bottom-grid u-grid-custom">
                                <div className="scroll-dropdown-bottom-video-col u-column-span-2">
                                  <div>
                                    <div
                                      video-parent=""
                                      className="scroll-dropdown-bottom-video-wrap"
                                    >
                                      <div
                                        id="careers-video"
                                        className="u-visual"
                                      >
                                        <img
                                          src="/assets/images/getty-images-0kdaczykk6y-unsplash-1_1x.webp"
                                          loading="lazy"
                                          alt=""
                                          sizes="(max-width: 1360px) 100vw, 1360px"
                                          srcSet="/assets/images/getty-images-0kdaczykk6y-unsplash-1_1x-p-500.webp 500w, /assets/images/getty-images-0kdaczykk6y-unsplash-1_1x-p-800.webp 800w, /assets/images/getty-images-0kdaczykk6y-unsplash-1_1x-p-1080.webp 1080w, /assets/images/getty-images-0kdaczykk6y-unsplash-1_1x-p-1600.webp 1600w, /assets/images/getty-images-0kdaczykk6y-unsplash-1_1x-p-2000.webp 2000w, /assets/images/getty-images-0kdaczykk6y-unsplash-1_1x-p-2600.webp 2600w, /assets/images/getty-images-0kdaczykk6y-unsplash-1_1x-p-3200.webp 3200w, /assets/images/getty-images-0kdaczykk6y-unsplash-1_1x.webp 4096w"
                                          className="u-visual-image"
                                        />
                                        <div className="u-visual-bk"></div>
                                        <div className="img-overlay"></div>
                                      </div>
                                      <div className="abs-video-btn"></div>
                                    </div>
                                  </div>
                                </div>
                                <div className="scroll-dropdown-bottom-content">
                                  <div className="u-text-style-main">
                                    &quot;Shepherd exceeded all expectations as
                                    the insurance partner for our client&apos;s
                                    $315M Virginia data center project. Their
                                    speed & adaptability impressed us
                                    most—delivering a quote within 24 hours
                                    which allowed us to work efficiently with
                                    our client and demonstrated their commitment
                                    to the program.&quot;
                                    <br />
                                    <br />
                                    Sam Russell
                                    <br />
                                    Insurance Broker, WTW
                                  </div>
                                  <div>
                                    <div
                                      data-wf--button-main--variant="primary"
                                      className="button_main_wrap"
                                      data-button=""
                                      data-trigger="hover-focus"
                                    >
                                      <div className="clickable_wrap u-cover-absolute">
                                        <a
                                          href="/case-studies/data-center-developer-partners-opts-into-shepherd-savings-for-315m-ocip-in-va"
                                          className="clickable_link w-inline-block"
                                        >
                                          <span className="clickable_text u-sr-only">
                                            READ MORE
                                          </span>
                                        </a>
                                        <button
                                          type="button"
                                          className="clickable_btn"
                                        >
                                          <span className="clickable_text u-sr-only">
                                            READ MORE
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
                                          READ MORE
                                        </div>
                                        <div className="button_main_icon u-hide-if-empty"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="scroll-dropdown-item">
                            <div className="scroll-dropdown-top">
                              <div className="scroll-dropdown-top-text u-text-style-h4">
                                Primary & Lead Excess for $255M for battery
                                manufacturer construction in Washington
                              </div>
                            </div>
                            <div className="scroll-dropdown-bottom-wrap">
                              <div className="scroll-dropdown-bottom-grid u-grid-custom">
                                <div className="scroll-dropdown-bottom-video-col u-column-span-2">
                                  <div>
                                    <div
                                      video-parent=""
                                      className="scroll-dropdown-bottom-video-wrap"
                                    >
                                      <div
                                        id="careers-video"
                                        className="u-visual"
                                      >
                                        <img
                                          src="/assets/images/roberto-sorin-zz3qxwfznrg-unsplash.avif"
                                          loading="lazy"
                                          alt=""
                                          sizes="(max-width: 1360px) 100vw, 1360px"
                                          srcSet="/assets/images/roberto-sorin-zz3qxwfznrg-unsplash-p-500.avif 500w, /assets/images/roberto-sorin-zz3qxwfznrg-unsplash-p-800.avif 800w, /assets/images/roberto-sorin-zz3qxwfznrg-unsplash-p-1080.avif 1080w, /assets/images/roberto-sorin-zz3qxwfznrg-unsplash-p-1600.avif 1600w, /assets/images/roberto-sorin-zz3qxwfznrg-unsplash.avif 1920w"
                                          className="u-visual-image"
                                        />
                                        <div className="u-visual-bk"></div>
                                        <div className="img-overlay"></div>
                                      </div>
                                      <div className="abs-video-btn"></div>
                                    </div>
                                  </div>
                                </div>
                                <div className="scroll-dropdown-bottom-content">
                                  <div className="u-text-style-main">
                                    Shepherd launched capabilities to support
                                    Primary Casualty coverage for contractor
                                    practice programs and projects, including
                                    wrap-ups and JVs. These new products
                                    complement Shepherd&apos;s existing Excess
                                    program.
                                  </div>
                                  <div>
                                    <div
                                      data-wf--button-main--variant="primary"
                                      className="button_main_wrap"
                                      data-button=""
                                      data-trigger="hover-focus"
                                    >
                                      <div className="clickable_wrap u-cover-absolute">
                                        <a
                                          href="/case-studies/primary-lead-excess-for-255m-for-battery-manufacturer-construction-in-washington"
                                          className="clickable_link w-inline-block"
                                        >
                                          <span className="clickable_text u-sr-only">
                                            READ MORE
                                          </span>
                                        </a>
                                        <button
                                          type="button"
                                          className="clickable_btn"
                                        >
                                          <span className="clickable_text u-sr-only">
                                            READ MORE
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
                                          READ MORE
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="forced-scroll-section-triggers">
                  <div className="trigger"></div>
                  <div className="trigger"></div>
                  <div className="trigger"></div>
                </div>
              </div>
            </div>
          </section>

          <section className="u-section u-theme-light">
            <div className="section_spacer">
              <div className="u-container">
                <div className="u-content v-flex-8">
                  <div className="content-flex v-flex-8">
                    <div className="section-content-flex v-flex-6">
                      <div className="section-header-grid u-grid-custom">
                        <div className="section-header-title-col u-column-span-2">
                          <div className="heading-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              viewBox="0 0 17 34"
                              fill="none"
                            >
                              <path
                                d="M16.9706 16.9705L2.07015e-05 -0.00010423L1.85557e-05 16.9705L1.641e-05 33.941L16.9706 16.9705Z"
                                fill="#DA43E7"
                              ></path>
                            </svg>
                          </div>
                          <h1
                            data-max="ch25"
                            className="section-heading u-text-style-h3"
                          >
                            Essential coverage for annual programs or projects.
                          </h1>
                        </div>
                        <div>
                          <div className="u-text-style-main">
                            Supporting middle market to enterprise scale
                            customers with the coverage they need to protect
                            their biggest projects or annual portfolios.
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="cta-cards-grid u-grid-custom">
                          <div
                            data-wf--solution-card--variant="base"
                            className="cta-card-flex v-flex-3"
                          >
                            <div className="cta-card-wrap">
                              <a
                                hov-img=""
                                href="/products/primary-casualty"
                                className="card-wrap u-theme-dark w-inline-block"
                              >
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
                                <div className="solution-top-left">
                                  <div className="split-card-content-flex is-large">
                                    <div>
                                      <div
                                        data-max="ch30"
                                        className="solution-top-txt u-text-style-large"
                                      >
                                        Primary Casualty
                                      </div>
                                    </div>
                                  </div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                    className="solution-corner"
                                  >
                                    <path
                                      d="M60 60L60 -2.14577e-06L30 30L-2.14577e-06 60L60 60Z"
                                      fill="white"
                                    ></path>
                                  </svg>
                                </div>
                                <div id="careers-video" className="u-visual">
                                  <img
                                    src="/assets/images/rectangle-84.webp"
                                    loading="lazy"
                                    alt=""
                                    sizes="(max-width: 1360px) 100vw, 1360px"
                                    srcSet="/assets/images/rectangle-84-p-500.webp 500w, /assets/images/rectangle-84-p-800.webp 800w, /assets/images/rectangle-84-p-1080.webp 1080w, /assets/images/rectangle-84.webp 1340w"
                                    className="u-visual-image"
                                  />
                                  <div className="u-visual-bk"></div>
                                  <div
                                    style={{ opacity: "0.1" }}
                                    className="u-visual-overlay"
                                  ></div>
                                  <div className="img-overlay"></div>
                                </div>
                              </a>
                            </div>
                            <div>
                              <div className="u-text-style-main">
                                Essential coverage that steadies progress when
                                it matters most.
                              </div>
                              <div
                                data-wf--button-main--variant="link"
                                className="button_main_wrap w-variant-625d5df4-ad91-f7dc-9e2f-2e69f3fd7400"
                                data-button=""
                                data-trigger="hover-focus"
                              >
                                <div className="clickable_wrap u-cover-absolute">
                                  <a
                                    href="/products/primary-casualty"
                                    className="clickable_link w-inline-block"
                                  >
                                    <span className="clickable_text u-sr-only">
                                      LEARN MORE
                                    </span>
                                  </a>
                                  <button
                                    type="button"
                                    className="clickable_btn"
                                  >
                                    <span className="clickable_text u-sr-only">
                                      LEARN MORE
                                    </span>
                                  </button>
                                </div>
                                <div className="button_main_element w-variant-625d5df4-ad91-f7dc-9e2f-2e69f3fd7400">
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
                                    LEARN MORE
                                  </div>
                                  <div className="button_main_icon u-hide-if-empty"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-wf--solution-card--variant="base"
                            className="cta-card-flex v-flex-3"
                          >
                            <div className="cta-card-wrap">
                              <a
                                hov-img=""
                                href="/products/excess-casualty"
                                className="card-wrap u-theme-dark w-inline-block"
                              >
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
                                <div className="solution-top-left">
                                  <div className="split-card-content-flex is-large">
                                    <div>
                                      <div
                                        data-max="ch30"
                                        className="solution-top-txt u-text-style-large"
                                      >
                                        Excess Casualty
                                      </div>
                                    </div>
                                  </div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                    className="solution-corner"
                                  >
                                    <path
                                      d="M60 60L60 -2.14577e-06L30 30L-2.14577e-06 60L60 60Z"
                                      fill="white"
                                    ></path>
                                  </svg>
                                </div>
                                <div id="careers-video" className="u-visual">
                                  <img
                                    src="/assets/images/rectangle-269.webp"
                                    loading="lazy"
                                    alt=""
                                    sizes="(max-width: 1360px) 100vw, 1360px"
                                    srcSet="/assets/images/rectangle-269-p-500.webp 500w, /assets/images/rectangle-269-p-800.webp 800w, /assets/images/rectangle-269-p-1080.webp 1080w, /assets/images/rectangle-269.webp 1340w"
                                    className="u-visual-image"
                                  />
                                  <div className="u-visual-bk"></div>
                                  <div
                                    style={{ opacity: "0.1" }}
                                    className="u-visual-overlay"
                                  ></div>
                                  <div className="img-overlay"></div>
                                </div>
                              </a>
                            </div>
                            <div>
                              <div className="u-text-style-main">
                                Additional protection that strengthens your
                                safety net for larger or complex risks.
                              </div>
                              <div
                                data-wf--button-main--variant="link"
                                className="button_main_wrap w-variant-625d5df4-ad91-f7dc-9e2f-2e69f3fd7400"
                                data-button=""
                                data-trigger="hover-focus"
                              >
                                <div className="clickable_wrap u-cover-absolute">
                                  <a
                                    href="/products/excess-casualty"
                                    className="clickable_link w-inline-block"
                                  >
                                    <span className="clickable_text u-sr-only">
                                      LEARN MORE
                                    </span>
                                  </a>
                                  <button
                                    type="button"
                                    className="clickable_btn"
                                  >
                                    <span className="clickable_text u-sr-only">
                                      LEARN MORE
                                    </span>
                                  </button>
                                </div>
                                <div className="button_main_element w-variant-625d5df4-ad91-f7dc-9e2f-2e69f3fd7400">
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
                                    LEARN MORE
                                  </div>
                                  <div className="button_main_icon u-hide-if-empty"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-wf--solution-card--variant="base"
                            className="cta-card-flex v-flex-3"
                          >
                            <div className="cta-card-wrap">
                              <a
                                hov-img=""
                                href="/products/builders-risk"
                                className="card-wrap u-theme-dark w-inline-block"
                              >
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
                                <div className="solution-top-left">
                                  <div className="split-card-content-flex is-large">
                                    <div>
                                      <div
                                        data-max="ch30"
                                        className="solution-top-txt u-text-style-large"
                                      >
                                        Builder&apos;s Risk
                                      </div>
                                    </div>
                                  </div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                    className="solution-corner"
                                  >
                                    <path
                                      d="M60 60L60 -2.14577e-06L30 30L-2.14577e-06 60L60 60Z"
                                      fill="white"
                                    ></path>
                                  </svg>
                                </div>
                                <div id="careers-video" className="u-visual">
                                  <img
                                    src="/assets/images/rectangle-272.webp"
                                    loading="lazy"
                                    alt=""
                                    sizes="(max-width: 1360px) 100vw, 1360px"
                                    srcSet="/assets/images/rectangle-272-p-500.webp 500w, /assets/images/rectangle-272-p-800.webp 800w, /assets/images/rectangle-272-p-1080.webp 1080w, /assets/images/rectangle-272.webp 1340w"
                                    className="u-visual-image"
                                  />
                                  <div className="u-visual-bk"></div>
                                  <div
                                    style={{ opacity: "0.1" }}
                                    className="u-visual-overlay"
                                  ></div>
                                  <div className="img-overlay"></div>
                                </div>
                              </a>
                            </div>
                            <div>
                              <div className="u-text-style-main">
                                First-party coverage designed to protect
                                projects while they&apos;re still taking shape.
                              </div>
                              <div
                                data-wf--button-main--variant="link"
                                className="button_main_wrap w-variant-625d5df4-ad91-f7dc-9e2f-2e69f3fd7400"
                                data-button=""
                                data-trigger="hover-focus"
                              >
                                <div className="clickable_wrap u-cover-absolute">
                                  <a
                                    href="/products/builders-risk"
                                    className="clickable_link w-inline-block"
                                  >
                                    <span className="clickable_text u-sr-only">
                                      LEARN MORE
                                    </span>
                                  </a>
                                  <button
                                    type="button"
                                    className="clickable_btn"
                                  >
                                    <span className="clickable_text u-sr-only">
                                      LEARN MORE
                                    </span>
                                  </button>
                                </div>
                                <div className="button_main_element w-variant-625d5df4-ad91-f7dc-9e2f-2e69f3fd7400">
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
                                    LEARN MORE
                                  </div>
                                  <div className="button_main_icon u-hide-if-empty"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-wf--solution-card--variant="base"
                            className="cta-card-flex v-flex-3"
                          >
                            <div className="cta-card-wrap">
                              <a
                                hov-img=""
                                href="/industries"
                                className="card-wrap u-theme-dark w-inline-block"
                              >
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
                                <div className="solution-top-left">
                                  <div className="split-card-content-flex is-large">
                                    <div>
                                      <div
                                        data-max="ch30"
                                        className="solution-top-txt u-text-style-large"
                                      >
                                        Built for your industry
                                      </div>
                                    </div>
                                  </div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    viewBox="0 0 60 60"
                                    fill="none"
                                    className="solution-corner"
                                  >
                                    <path
                                      d="M60 60L60 -2.14577e-06L30 30L-2.14577e-06 60L60 60Z"
                                      fill="white"
                                    ></path>
                                  </svg>
                                </div>
                                <div id="careers-video" className="u-visual">
                                  <img
                                    src="/assets/images/rectangle-273.webp"
                                    loading="lazy"
                                    alt=""
                                    sizes="(max-width: 1360px) 100vw, 1360px"
                                    srcSet="/assets/images/rectangle-273-p-500.webp 500w, /assets/images/rectangle-273-p-800.webp 800w, /assets/images/rectangle-273-p-1080.webp 1080w, /assets/images/rectangle-273.webp 1340w"
                                    className="u-visual-image"
                                  />
                                  <div className="u-visual-bk"></div>
                                  <div
                                    style={{ opacity: "0.1" }}
                                    className="u-visual-overlay"
                                  ></div>
                                  <div className="img-overlay"></div>
                                </div>
                              </a>
                            </div>
                            <div>
                              <div className="u-text-style-main">
                                Discover how Shepherd partners with industry
                                leaders across Construction, Renewable Energy,
                                and more.
                              </div>
                              <div
                                data-wf--button-main--variant="link"
                                className="button_main_wrap w-variant-625d5df4-ad91-f7dc-9e2f-2e69f3fd7400"
                                data-button=""
                                data-trigger="hover-focus"
                              >
                                <div className="clickable_wrap u-cover-absolute">
                                  <a
                                    href="/industries"
                                    className="clickable_link w-inline-block"
                                  >
                                    <span className="clickable_text u-sr-only">
                                      LEARN MORE
                                    </span>
                                  </a>
                                  <button
                                    type="button"
                                    className="clickable_btn"
                                  >
                                    <span className="clickable_text u-sr-only">
                                      LEARN MORE
                                    </span>
                                  </button>
                                </div>
                                <div className="button_main_element w-variant-625d5df4-ad91-f7dc-9e2f-2e69f3fd7400">
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
                                    LEARN MORE
                                  </div>
                                  <div className="button_main_icon u-hide-if-empty"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                                Let’s build together.
                              </h2>
                              <div className="div-block-4">
                                <div
                                  data-wf--button-main--variant="primary"
                                  className="button_main_wrap"
                                  data-button=""
                                  data-trigger="hover-focus"
                                >
                                  <div className="clickable_wrap u-cover-absolute">
                                    <a
                                      href="/contact"
                                      className="clickable_link w-inline-block"
                                    >
                                      <span className="clickable_text u-sr-only">
                                        CONTACT US
                                      </span>
                                    </a>
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
                              Learn more about how Shepherd can work with you.
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
        </div>

        <Footer />
      </div>
    </div>
  );
}
