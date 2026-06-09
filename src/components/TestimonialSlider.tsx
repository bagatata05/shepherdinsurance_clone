"use client";

import React, { useState } from "react";
import Link from "next/link";

export interface Testimonial {
  title: string;
  quote: string;
  authorImg?: string;
  authorInfo?: React.ReactNode;
  btnLink: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  staticImage: string;
  staticImageSrcSet?: string;
}

export function TestimonialSlider({
  testimonials,
  staticImage,
  staticImageSrcSet,
}: TestimonialSliderProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSlide((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="split-card u-grid-custom u-theme-beige is-testimonials">
      <div
        className="div-block-10"
        style={{ overflow: "hidden", position: "relative" }}
      >
        <div
          data-wf--slider--variant="overflow-hidden"
          className="slider_wrap w-variant-bfb8c45c-dbfa-13cc-2dfc-0c02a34504e4"
          data-slider="component"
          style={{ overflow: "hidden", width: "100%" }}
        >
          <div
            style={
              {
                "--lg": "1",
                "--md": "1",
                "--sm": "1",
                "--xs": "1",
              } as React.CSSProperties
            }
            className="slider_offset w-variant-bfb8c45c-dbfa-13cc-2dfc-0c02a34504e4"
          >
            <div
              data-speed="600"
              data-follow-finger="true"
              data-free-mode="false"
              data-mousewheel="true"
              data-slide-to-clicked="false"
              className="slider_element swiper w-variant-bfb8c45c-dbfa-13cc-2dfc-0c02a34504e4"
              style={{ overflow: "hidden", width: "100%" }}
            >
              <div
                data-slot=""
                className="slider_list swiper-wrapper"
                style={{
                  display: "flex",
                  transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
                  transform: `translateX(-${activeSlide * 100}%)`,
                  width: "100%",
                }}
              >
                {testimonials.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="testimonial-slide"
                    style={{
                      flex: "0 0 100%",
                      width: "100%",
                      minWidth: "100%",
                    }}
                  >
                    <div className="div-block-11">
                      <div className="testimonial-top-flex v-flex-4">
                        <div className="testimonial-title u-text-style-h3">
                          {testimonial.title}
                        </div>
                        <div className="u-text-style-main">
                          {testimonial.quote}
                        </div>
                      </div>
                      <div className="testimonial-botton-flex">
                        <div className="testimonial-bottom">
                          {testimonial.authorImg && (
                            <img
                              src={testimonial.authorImg}
                              loading="lazy"
                              alt=""
                              className="testimonial-img"
                            />
                          )}
                          {testimonial.authorInfo && (
                            <div className="u-text-style-small">
                              {testimonial.authorInfo}
                            </div>
                          )}
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
                                href={testimonial.btnLink}
                                className="clickable_link w-inline-block"
                              >
                                <span className="clickable_text u-sr-only">
                                  READ MORE
                                </span>
                              </Link>
                              <button type="button" className="clickable_btn">
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
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="slider_controls w-variant-bfb8c45c-dbfa-13cc-2dfc-0c02a34504e4">
          <div className="slider_button_layout">
            {/* Prev Button */}
            <div
              data-wf--button-arrow--variant="primary-medium"
              data-slider="previous"
              className="button_arrow_wrap"
              data-button=""
              data-trigger="hover-focus"
              onClick={handlePrev}
              style={{ cursor: "pointer" }}
            >
              <div className="button_arrow_element">
                <div aria-hidden="true" className="button_arrow_icon">
                  <svg
                    data-wf--icon-arrow-full--variant="left"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 33 26"
                    fill="none"
                    aria-hidden="true"
                    className="u-svg w-variant-1c3f028b-116e-d4eb-db7f-8484491bbf2e"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 10 10"
                      fill="none"
                    >
                      <path
                        d="M0 8.28L7.53998 5.14L0 1.56V0L9.41998 4.7V5.7L0 9.84V8.28Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </svg>
                </div>
              </div>
              <div className="clickable_wrap u-cover-absolute">
                <a
                  href="#"
                  className="clickable_link w-inline-block"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="clickable_text u-sr-only">Previous</span>
                </a>
                <button type="button" className="clickable_btn">
                  <span className="clickable_text u-sr-only">Previous</span>
                </button>
              </div>
            </div>

            {/* Counter */}
            <div className="slider-count-txt u-text-style-large">
              <span>{activeSlide + 1}</span> OF{" "}
              <span>{testimonials.length}</span>
            </div>

            {/* Next Button */}
            <div
              data-wf--button-arrow--variant="primary-medium"
              data-slider="next"
              className="button_arrow_wrap"
              data-button=""
              data-trigger="hover-focus"
              onClick={handleNext}
              style={{ cursor: "pointer" }}
            >
              <div className="button_arrow_element">
                <div aria-hidden="true" className="button_arrow_icon">
                  <svg
                    data-wf--icon-arrow-full--variant="right"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 33 26"
                    fill="none"
                    aria-hidden="true"
                    className="u-svg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 10 10"
                      fill="none"
                    >
                      <path
                        d="M0 8.28L7.53998 5.14L0 1.56V0L9.41998 4.7V5.7L0 9.84V8.28Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </svg>
                </div>
              </div>
              <div className="clickable_wrap u-cover-absolute">
                <a
                  href="#"
                  className="clickable_link w-inline-block"
                  onClick={(e) => e.preventDefault()}
                >
                  <span className="clickable_text u-sr-only">Next</span>
                </a>
                <button type="button" className="clickable_btn">
                  <span className="clickable_text u-sr-only">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="split-card-img-wrap u-visual-wrap">
        <div id="careers-video" className="u-visual">
          <img
            src={staticImage}
            loading="lazy"
            alt=""
            sizes="(max-width: 1360px) 100vw, 1360px"
            srcSet={staticImageSrcSet}
            className="u-visual-image"
          />
          <div className="u-visual-bk"></div>
          <div className="img-overlay"></div>
        </div>
      </div>
    </div>
  );
}
