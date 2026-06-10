"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProductsOverview() {
  const mainRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

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

      mm.add("(min-width: 992px)", () => {
        const items = gsap.utils.toArray<HTMLElement>(".scroll-dropdown-item");
        const triggers = gsap.utils.toArray<HTMLElement>(
          ".forced-scroll-section-triggers .trigger",
        );

        if (items.length === 0 || triggers.length === 0) return;

        const wrappers = items.map(
          (item) =>
            item.querySelector(".scroll-dropdown-bottom-wrap") as HTMLElement,
        );

        // Hide all bottom content wraps except the first one initially
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

        // Set cursor pointer and click navigation on headers
        items.forEach((item, idx) => {
          const header = item.querySelector(
            ".scroll-dropdown-top",
          ) as HTMLElement;
          const trigger = triggers[idx];
          if (header && trigger) {
            header.style.cursor = "pointer";

            const handleClick = () => {
              if (lenisRef.current) {
                lenisRef.current.scrollTo(trigger, {
                  offset: -window.innerHeight * 0.3,
                  duration: 1.2,
                });
              }
            };

            header.addEventListener("click", handleClick);
            (header as any)._cleanup = () =>
              header.removeEventListener("click", handleClick);
          }
        });

        // Create ScrollTrigger for each trigger element
        triggers.forEach((trigger, idx) => {
          ScrollTrigger.create({
            trigger: trigger,
            start: "top 50%",
            end: "bottom 50%",
            onToggle: (self) => {
              if (self.isActive) {
                // Open active item
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

                // Collapse other items
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
      });
    }, mainRef);

    return () => {
      ctx.revert();
      // Clean up header click listeners
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

        {/* Main Content Sections */}
        <div className="products-page-content">
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
                              Specialty insurance products{" "}
                              <span className="txt-icon-arrow"> </span> for
                              complex, high-hazard industries.
                            </h1>
                            <div className="hero-p u-text-style-main">
                              Solutions to empower the full lifecycle of
                              commercial assets, partnering from land
                              acquisition through construction and operations.
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
                    src="/assets/images/product-overview.webp"
                    loading="lazy"
                    alt=""
                    sizes="(max-width: 1360px) 100vw, 1360px"
                    srcSet="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696587db29e5799516310747_Product-overview-p-500.webp 500w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696587db29e5799516310747_Product-overview-p-800.webp 800w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696587db29e5799516310747_Product-overview-p-1080.webp 1080w, /assets/images/product-overview.webp 1440w"
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
                          Supporting middle market to enterprise scale customers
                          with the coverage they need to protect their biggest
                          projects or annual portfolios.
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
                                  src="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611033b8a3f81c4c8dc954_Rectangle%2084.webp"
                                  loading="lazy"
                                  alt=""
                                  sizes="(max-width: 1360px) 100vw, 1360px"
                                  srcSet="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611033b8a3f81c4c8dc954_Rectangle%2084-p-500.webp 500w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611033b8a3f81c4c8dc954_Rectangle%2084-p-800.webp 800w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611033b8a3f81c4c8dc954_Rectangle%2084-p-1080.webp 1080w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611033b8a3f81c4c8dc954_Rectangle%2084.webp 1340w"
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
                              Essential coverage that steadies progress when it
                              matters most.
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
                                <button type="button" className="clickable_btn">
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
                                  src="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611033a32faf015d487b68_Rectangle%20269.webp"
                                  loading="lazy"
                                  alt=""
                                  sizes="(max-width: 1360px) 100vw, 1360px"
                                  srcSet="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611033a32faf015d487b68_Rectangle%20269-p-500.webp 500w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611033a32faf015d487b68_Rectangle%20269-p-800.webp 800w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611033a32faf015d487b68_Rectangle%20269-p-1080.webp 1080w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611033a32faf015d487b68_Rectangle%20269.webp 1340w"
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
                              Additional protection that strengthens your safety
                              net for larger or complex risks.
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
                                <button type="button" className="clickable_btn">
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
                                      Builder’s Risk
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
                                  src="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611033e71fcc4ed2a3ab81_Rectangle%20272.webp"
                                  loading="lazy"
                                  alt=""
                                  sizes="(max-width: 1360px) 100vw, 1360px"
                                  srcSet="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611033e71fcc4ed2a3ab81_Rectangle%20272-p-500.webp 500w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611033e71fcc4ed2a3ab81_Rectangle%20272-p-800.webp 800w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611033e71fcc4ed2a3ab81_Rectangle%20272-p-1080.webp 1080w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611033e71fcc4ed2a3ab81_Rectangle%20272.webp 1340w"
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
                              First-party coverage designed to protect projects
                              while they're still taking shape.
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
                                <button type="button" className="clickable_btn">
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
                                  src="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611033a5e7dcd7b19d41f1_Rectangle%20273.webp"
                                  loading="lazy"
                                  alt=""
                                  sizes="(max-width: 1360px) 100vw, 1360px"
                                  srcSet="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611033a5e7dcd7b19d41f1_Rectangle%20273-p-500.webp 500w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611033a5e7dcd7b19d41f1_Rectangle%20273-p-800.webp 800w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611033a5e7dcd7b19d41f1_Rectangle%20273-p-1080.webp 1080w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69611033a5e7dcd7b19d41f1_Rectangle%20273.webp 1340w"
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
                              leaders across Construction, Renewable Energy, and
                              more.
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
                                <button type="button" className="clickable_btn">
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
                </div>
              </div>
            </div>
          </section>

          <section className="u-section u-theme-dark">
            <div id="careers-video" className="u-visual">
              <img
                src="/assets/images/group-2147210661.avif"
                loading="lazy"
                alt=""
                sizes="(max-width: 1360px) 100vw, 1360px"
                srcSet="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696e40c2ff7920cfa45fbb24_Group%202147210661-p-500.avif 500w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696e40c2ff7920cfa45fbb24_Group%202147210661-p-800.avif 800w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696e40c2ff7920cfa45fbb24_Group%202147210661-p-1080.avif 1080w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696e40c2ff7920cfa45fbb24_Group%202147210661-p-1600.avif 1600w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696e40c2ff7920cfa45fbb24_Group%202147210661-p-2000.avif 2000w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696e40c2ff7920cfa45fbb24_Group%202147210661-p-2600.avif 2600w, /assets/images/group-2147210661.avif 2880w"
                className="u-visual-image"
              />
              <div className="u-visual-bk"></div>
              <div
                style={{ opacity: "0.4" }}
                className="u-visual-overlay"
              ></div>
              <div className="img-overlay"></div>
            </div>
            <div pt-child="" className="section_spacer">
              <div className="u-container">
                <div className="full-img-section">
                  <div className="u-content v-flex-img-section">
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
                          Built for durability and consistency.{" "}
                        </h1>
                      </div>
                      <div>
                        <div className="u-text-style-main">
                          Technology and underwriting move together to remove
                          friction, unlock speed, and increase certainty.
                        </div>
                      </div>
                    </div>
                    <div className="card-grid-3 u-grid-custom">
                      <div
                        data-wf--centered-card--variant="transparent"
                        className="centered-card-slide"
                      >
                        <div className="centered-card-wrap w-variant-bb16849b-d250-e704-3f41-81eb2aacea29">
                          <div className="centered-card-content-abs">
                            <div className="div-block">
                              <div className="div-block-2">
                                <img
                                  src="/assets/gifs/speed-keeps-pace-white.gif"
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
                              Underwriting decisions in hours,not weeks.
                              Automation and AI streamline complexity.
                            </div>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            viewBox="0 0 60 60"
                            fill="none"
                            className="corner-svg w-variant-bb16849b-d250-e704-3f41-81eb2aacea29"
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
                        data-wf--centered-card--variant="transparent"
                        className="centered-card-slide"
                      >
                        <div className="centered-card-wrap w-variant-bb16849b-d250-e704-3f41-81eb2aacea29">
                          <div className="centered-card-content-abs">
                            <div className="div-block">
                              <div className="div-block-2">
                                <img
                                  src="/assets/gifs/intelligence-rewards-white.gif"
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
                              Data and technology to recognizesafer turning
                              innovation into tangible financial advantage.
                            </div>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            viewBox="0 0 60 60"
                            fill="none"
                            className="corner-svg w-variant-bb16849b-d250-e704-3f41-81eb2aacea29"
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
                        data-wf--centered-card--variant="transparent"
                        className="centered-card-slide"
                      >
                        <div className="centered-card-wrap w-variant-bb16849b-d250-e704-3f41-81eb2aacea29">
                          <div className="centered-card-content-abs">
                            <div className="div-block">
                              <div className="div-block-2">
                                <img
                                  src="/assets/gifs/single-connected-system-white.gif"
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
                              Our products work as one unified ecosystem,
                              designed around how real projects evolve not
                              traditional siloes.
                            </div>
                          </div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            viewBox="0 0 60 60"
                            fill="none"
                            className="corner-svg w-variant-bb16849b-d250-e704-3f41-81eb2aacea29"
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
          </section>

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
                                  <a
                                    href="/savings"
                                    className="clickable_link w-inline-block"
                                  >
                                    <span className="clickable_text u-sr-only">
                                      Learn more
                                    </span>
                                  </a>
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

          <section className="u-section u-theme-beige">
            <div className="section_spacer">
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
                                Why Speed Still Wins When It’s Backed by Value
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
                                          src="/assets/images/screenshot-2026-01-22.avif"
                                          loading="lazy"
                                          alt=""
                                          sizes="(max-width: 1360px) 100vw, 1360px"
                                          srcSet="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69723c1cccdbbf0b5f1633dc_Screenshot%202026-01-22%20at%2010.02.49%E2%80%AFAM-p-500.avif 500w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69723c1cccdbbf0b5f1633dc_Screenshot%202026-01-22%20at%2010.02.49%E2%80%AFAM-p-800.avif 800w, /assets/images/screenshot-2026-01-22.avif 980w"
                                          className="u-visual-image"
                                        />
                                        <video
                                          src="https://player.vimeo.com/progressive_redirect/playback/1153772744/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=c4ac92803f9d63ef877cc23e01bd1c7ddc2540d4649a08842c79efe70cf0a603"
                                          loop={true}
                                          playsInline={true}
                                          autoPlay={true}
                                          muted={true}
                                          className="u-visual-video"
                                        ></video>
                                        <div className="u-visual-bk"></div>
                                        <div
                                          style={{ opacity: "0.2" }}
                                          className="u-visual-overlay"
                                        ></div>
                                        <div className="img-overlay"></div>
                                      </div>
                                      <div className="abs-video-btn">
                                        <div
                                          data-wf--button-main--variant="video"
                                          data-barba-prevent=""
                                          className="button_main_wrap u-pointer-on"
                                          data-button=""
                                          data-trigger="hover-focus"
                                        >
                                          <div className="clickable_wrap u-cover-absolute">
                                            <a
                                              href="#"
                                              className="clickable_link w-inline-block"
                                            >
                                              <span className="clickable_text u-sr-only">
                                                PLAY VIDEO
                                              </span>
                                            </a>
                                            <button
                                              type="button"
                                              className="clickable_btn"
                                            >
                                              <span className="clickable_text u-sr-only">
                                                PLAY VIDEO
                                              </span>
                                            </button>
                                          </div>
                                          <div className="button_main_element w-variant-f3411d48-6319-fd1f-022f-07d76f9c73e0">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="100%"
                                              viewBox="0 0 12 16"
                                              fill="none"
                                              className="video-play w-variant-f3411d48-6319-fd1f-022f-07d76f9c73e0"
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
                                              PLAY VIDEO
                                            </div>
                                            <div className="button_main_icon u-hide-if-empty"></div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="scroll-dropdown-bottom-content">
                                  <div className="u-text-style-main">
                                    “Shepherd is differentiated in how they
                                    assess risk — a forward-thinking,
                                    data-driven approach that rewards
                                    contractors for doing things the right way.”
                                    <br />
                                    <br />
                                    Wendy Sue Ash
                                    <br />
                                    Regional Broking Leader, WTW
                                  </div>
                                  <div></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="scroll-dropdown-item">
                            <div className="scroll-dropdown-top">
                              <div className="scroll-dropdown-top-text u-text-style-h4">
                                $250M Telecommunications and Electrical
                                Contractor in Ohio utilizing Casualty Pro
                              </div>
                            </div>
                            <div className="scroll-dropdown-bottom-wrap">
                              <div className="scroll-dropdown-bottom-grid u-grid-custom">
                                <div className="scroll-dropdown-bottom-video-col u-column-span-2">
                                  <div
                                    video-parent=""
                                    className="scroll-dropdown-bottom-video-wrap"
                                  >
                                    <div
                                      id="careers-video"
                                      className="u-visual"
                                    >
                                      <img
                                        src="/assets/images/rectangle-190.avif"
                                        loading="lazy"
                                        alt=""
                                        sizes="(max-width: 1360px) 100vw, 1360px"
                                        srcSet="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696e3c7708c6dfca62ed8e12_Rectangle%20190-p-500.avif 500w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696e3c7708c6dfca62ed8e12_Rectangle%20190-p-800.avif 800w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696e3c7708c6dfca62ed8e12_Rectangle%20190-p-1080.avif 1080w, /assets/images/rectangle-190.avif 1440w"
                                        className="u-visual-image"
                                      />
                                      <div className="u-visual-bk"></div>
                                      <div className="img-overlay"></div>
                                    </div>
                                    <div className="abs-video-btn"></div>
                                  </div>
                                </div>
                                <div className="scroll-dropdown-bottom-content">
                                  <div className="u-text-style-main">
                                    &quot;Shepherd leverages well known
                                    construction technologies, that our
                                    construction clients already use, to further
                                    their ability to gain insight and more
                                    effectively underwrite a risk.&quot;
                                    <br />
                                    <br />
                                    Ryan Gilway
                                    <br />
                                    Regional Brokerage Leader, Aon
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
                                          href="/case-studies/246m-telecommunications-and-electrical-contractor-in-ohio-utilizing-casualty-pro"
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
                                Data center developer opts into Shepherd Savings
                                for $315M OCIP in VA
                              </div>
                            </div>
                            <div className="scroll-dropdown-bottom-wrap">
                              <div className="scroll-dropdown-bottom-grid u-grid-custom">
                                <div className="scroll-dropdown-bottom-video-col u-column-span-2">
                                  <div
                                    video-parent=""
                                    className="scroll-dropdown-bottom-video-wrap"
                                  >
                                    <div
                                      id="careers-video"
                                      className="u-visual"
                                    >
                                      <img
                                        src="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69723d542fe8f0ffcb2c7f2b_esmonde-yong-SxZCMlMZxTM-unsplash.avif"
                                        loading="lazy"
                                        alt=""
                                        sizes="(max-width: 1360px) 100vw, 1360px"
                                        srcSet="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69723d542fe8f0ffcb2c7f2b_esmonde-yong-SxZCMlMZxTM-unsplash-p-500.avif 500w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69723d542fe8f0ffcb2c7f2b_esmonde-yong-SxZCMlMZxTM-unsplash-p-800.avif 800w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69723d542fe8f0ffcb2c7f2b_esmonde-yong-SxZCMlMZxTM-unsplash-p-1080.avif 1080w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69723d542fe8f0ffcb2c7f2b_esmonde-yong-SxZCMlMZxTM-unsplash-p-1600.avif 1600w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69723d542fe8f0ffcb2c7f2b_esmonde-yong-SxZCMlMZxTM-unsplash.avif 1920w"
                                        className="u-visual-image"
                                      />
                                      <div className="u-visual-bk"></div>
                                      <div className="img-overlay"></div>
                                    </div>
                                    <div className="abs-video-btn"></div>
                                  </div>
                                </div>
                                <div className="scroll-dropdown-bottom-content">
                                  <div className="u-text-style-main">
                                    &quot;Shepherd exceeded all expectations as
                                    the insurance partner for our client's $315M
                                    Virginia data center project. Their speed &
                                    adaptability impressed us most—delivering a
                                    quote within 24 hours which allowed us to
                                    work efficiently with our client and
                                    demonstrated their commitment to the
                                    program.&quot;
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
        </div>

        <Footer />
      </div>
    </div>
  );
}
