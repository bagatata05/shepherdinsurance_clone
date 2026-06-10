"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductsHero } from "@/components/ProductsHero";
import { StateSelector } from "@/components/StateSelector";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BuildersRisk() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

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

  return (
    <div ref={mainRef} id="main" className="page_wrap">
      <div data-barba="container" className="page_main">
        <Header theme="light" />

        {/* Section #1: Products Hero */}
        <ProductsHero
          title={
            <>
              Builder's <br />
              Risk
            </>
          }
          subtitle="Coverage for materials, work in progress, and capital at risk during construction."
          imageSrc="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69690037f2b35d13a5daf8eb_mads-eneqvist-J9jYy9S1zAk-unsplash_1x.webp"
        />

        {/* Section #2: Interactive State Selector */}
        <StateSelector />

        {/* Custom page-specific sections */}
        <div className="product-details-sections">
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
                            The foundation beneath every complex build.
                          </h1>
                        </div>
                        <div>
                          <div className="u-text-style-main">
                            Coverage designed to protect projects through every
                            phase of the build, from first delivery to final
                            handoff.
                          </div>
                        </div>
                      </div>
                    </div>
                    <TestimonialSlider
                      testimonials={[
                        {
                          title:
                            "Tailored Builder’s Risk Solution for Site & Roadway Project in WA",
                          quote:
                            "“When Shepherd launched its Builder’s Risk unit, I was eager to partner with them—particularly given the strength of their underwriting leadership and the involvement of industry respected builder’s risk expertise in developing the program. Shepherd continues to differentiate itself through its speed to market, disciplined underwriting, and high- quality insurance solutions. They are valued partners, and I look forward to continuing to work with them as our relationship grows.”",
                          authorImg: "/assets/images/bethany.webp",
                          authorInfo: (
                            <>
                              Bethany Sutherland
                              <br />
                              Commercial Client Executive, IMA
                            </>
                          ),
                          btnLink:
                            "https://www.shepherdinsurance.com/case-studies/tailored-builders-risk-solution-for-site-roadway-project-in-wa",
                        },
                        {
                          title:
                            "A Holistic Underwriting Approach Across Casualty and Builder’s Risk",
                          quote:
                            "“Shepherd's Builder's Risk offering created a comprehensive coverage package for the insured, combining P&C product lines under a single underwriting and serving team.”",
                          btnLink:
                            "/case-studies/shepherd-s-combined-casualty-builder-s-risk-offering-for-87m-life-sciences-develo",
                        },
                        {
                          title:
                            "Shepherd’s Combined Casualty & Builder’s Risk Offering for $87M Life Sciences Development Project",
                          quote:
                            "“Shepherd creates a high touch underwriting experience tailored to client needs, combining product lines for commercial project specific placements.”",
                          btnLink:
                            "/case-studies/shepherd-s-combined-casualty-builder-s-risk-offering-for-87m-life-sciences-develo",
                        },
                      ]}
                      staticImage="/assets/images/andy-quezada.webp"
                      staticImageSrcSet="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69690ef79cbaa7de910b48f7_andy-quezada-epLx0ZVNiLM-unsplash_1x-p-500.webp 500w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69690ef79cbaa7de910b48f7_andy-quezada-epLx0ZVNiLM-unsplash_1x-p-800.webp 800w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69690ef79cbaa7de910b48f7_andy-quezada-epLx0ZVNiLM-unsplash_1x-p-1080.webp 1080w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69690ef79cbaa7de910b48f7_andy-quezada-epLx0ZVNiLM-unsplash_1x-p-1600.webp 1600w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69690ef79cbaa7de910b48f7_andy-quezada-epLx0ZVNiLM-unsplash_1x-p-2000.webp 2000w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69690ef79cbaa7de910b48f7_andy-quezada-epLx0ZVNiLM-unsplash_1x-p-2600.webp 2600w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69690ef79cbaa7de910b48f7_andy-quezada-epLx0ZVNiLM-unsplash_1x-p-3200.webp 3200w, /assets/images/andy-quezada.webp 4096w"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="u-section u-theme-grey">
            <div className="section_spacer">
              <div className="u-container">
                <div className="u-content v-flex-8">
                  <div className="content-flex v-flex-8">
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
                          Comprehensive support from submission to renewal.
                        </h1>
                      </div>
                    </div>
                    <div className="submission-grid u-grid-custom">
                      <div className="submission-flex">
                        <div className="u-text-style-main">
                          Product Offering
                        </div>
                        <div className="support-bottom">
                          <div className="products-flex">
                            <div className="checkmark">
                              <div className="solution-check">
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
                              Project-Specific Placements
                            </div>
                          </div>
                          <div className="products-flex">
                            <div className="checkmark">
                              <div className="solution-check">
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
                              Master Programs
                            </div>
                          </div>
                          <div className="products-flex">
                            <div className="checkmark">
                              <div className="solution-check">
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
                              Quota Share
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="submission-flex">
                        <div className="u-text-style-main">
                          Coverage Capabilities
                        </div>
                        <div className="support-bottom">
                          <div className="products-flex">
                            <div className="checkmark">
                              <div className="solution-check">
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
                              Catastrophe (CAT) Coverage
                            </div>
                          </div>
                          <div className="products-flex">
                            <div className="checkmark">
                              <div className="solution-check">
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
                              Testing & Mechanical Break down
                            </div>
                          </div>
                          <div className="products-flex">
                            <div className="checkmark">
                              <div className="solution-check">
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
                              Modified Defective Design
                            </div>
                          </div>
                          <div className="products-flex">
                            <div className="checkmark">
                              <div className="solution-check">
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
                              Green Plus Coverage
                            </div>
                          </div>
                          <div className="products-flex">
                            <div className="checkmark">
                              <div className="solution-check">
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
                              Contigent Builders RIsk
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="submission-flex">
                        <div className="u-text-style-main">
                          Structure & Capacity
                        </div>
                        <div className="support-bottom">
                          <div className="products-flex">
                            <div className="checkmark">
                              <div className="solution-check">
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
                              Paper: A.M. Best A+ (Superior), FSC XV
                            </div>
                          </div>
                          <div className="products-flex">
                            <div className="checkmark">
                              <div className="solution-check">
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
                              Target project TIV up to $75M
                            </div>
                          </div>
                          <div className="products-flex">
                            <div className="checkmark">
                              <div className="solution-check">
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
                              Quota share participation on larger projects {">"}{" "}
                              $150M TIV
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
                        src="/assets/images/vitalii-khodzinskyi.webp"
                        loading="lazy"
                        alt=""
                        sizes="(max-width: 1360px) 100vw, 1360px"
                        srcSet="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696911d58e0326f06f835925_vitalii-khodzinskyi-5hoBVrTU0cc-unsplash%201-p-500.webp 500w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696911d58e0326f06f835925_vitalii-khodzinskyi-5hoBVrTU0cc-unsplash%201-p-800.webp 800w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696911d58e0326f06f835925_vitalii-khodzinskyi-5hoBVrTU0cc-unsplash%201-p-1080.webp 1080w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696911d58e0326f06f835925_vitalii-khodzinskyi-5hoBVrTU0cc-unsplash%201-p-1600.webp 1600w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696911d58e0326f06f835925_vitalii-khodzinskyi-5hoBVrTU0cc-unsplash%201-p-2000.webp 2000w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696911d58e0326f06f835925_vitalii-khodzinskyi-5hoBVrTU0cc-unsplash%201-p-2600.webp 2600w, /assets/images/vitalii-khodzinskyi.webp 2731w"
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

          <section className="u-section u-theme-light">
            <div className="section_spacer">
              <div className="u-container">
                <div className="u-content v-flex-8">
                  <div className="content-flex v-flex-8">
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
                          From submission to confidence.
                        </h1>
                      </div>
                    </div>
                    <div className="submission-grid u-grid-custom">
                      <div className="submission-flex">
                        <div className="u-text-style-large">Submissions</div>
                        <div className="sumbission-bottom">
                          <div className="u-text-style-main">
                            Email our{" "}
                            <a href="mailto:submissions@shepherdinsurance.com ">
                              submissions
                            </a>{" "}
                            inbox and receive a response within 24 hours.
                          </div>
                        </div>
                      </div>
                      <div className="submission-flex">
                        <div className="u-text-style-large">
                          Tech partnerships
                        </div>
                        <div className="sumbission-bottom">
                          <div className="u-text-style-main">
                            If eligible for Shepherd Savings, we’ll connect you
                            to improved pricing and terms.
                          </div>
                        </div>
                      </div>
                      <div className="submission-flex">
                        <div className="u-text-style-large">Quote Delivery</div>
                        <div className="sumbission-bottom">
                          <div className="u-text-style-main">
                            Online proposals are shared with full forms preview
                            and upfront clarity.
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
                src="/assets/images/rectangle-171.webp"
                loading="lazy"
                alt=""
                sizes="(max-width: 1360px) 100vw, 1360px"
                srcSet="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696113dff04f3eafcb2e413b_Rectangle%20171-p-500.webp 500w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696113dff04f3eafcb2e413b_Rectangle%20171-p-800.webp 800w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696113dff04f3eafcb2e413b_Rectangle%20171-p-1080.webp 1080w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696113dff04f3eafcb2e413b_Rectangle%20171-p-1600.webp 1600w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696113dff04f3eafcb2e413b_Rectangle%20171-p-2000.webp 2000w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696113dff04f3eafcb2e413b_Rectangle%20171-p-2600.webp 2600w, /assets/images/rectangle-171.webp 2880w"
                className="u-visual-image"
              />
              <div className="u-visual-bk"></div>
              <div
                style={{ opacity: "0.4" }}
                className="u-visual-overlay"
              ></div>
              <div className="img-overlay"></div>
            </div>
            <div className="section_spacer">
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
                          Increase certainty and unlock savings.
                        </h1>
                      </div>
                      <div>
                        <div className="u-text-style-main">
                          Technology and underwriting move together to remove
                          friction, unlock speed, and increase certainty
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
