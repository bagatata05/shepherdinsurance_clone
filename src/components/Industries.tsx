"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowPinkRight, PlayIcon } from "./icons";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Industries: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const stats = [
    { from: 450, to: 500, prefix: "1,", suffix: "+", label: "Policies iSSUED" },
    {
      from: 75,
      to: 90,
      prefix: "",
      suffix: "%",
      label: "Faster indication times",
    },
    { from: 350, to: 400, prefix: "$", suffix: "B+", label: "Insured volume" },
  ];

  useGSAP(
    () => {
      const targets = gsap.utils.toArray("[data-count-to]");

      targets.forEach((target: any) => {
        const fromVal = parseInt(
          target.getAttribute("data-count-from") || "0",
          10,
        );
        const toVal = parseInt(target.getAttribute("data-count-to") || "0", 10);

        gsap.fromTo(
          target,
          { innerHTML: fromVal },
          {
            innerHTML: toVal,
            duration: 2.2,
            ease: "power1.out",
            snap: { innerHTML: 1 },
            scrollTrigger: {
              trigger: target,
              start: "top bottom",
              once: true,
            },
          },
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <section className="u-section u-theme-beige" ref={containerRef}>
      <div className="section_spacer">
        <div className="u-container">
          <div className="u-content v-flex-8">
            <div className="content-flex v-flex-8">
              {/* Heading */}
              <div className="section-content-flex v-flex-5">
                <div className="section-header-grid u-grid-custom">
                  <div className="section-header-title-col u-column-span-2">
                    <div className="heading-icon">
                      <ArrowPinkRight />
                    </div>
                    <h1 className="section-heading u-text-style-h3">
                      Accelerating the world's most important commercial
                      industries.
                    </h1>
                  </div>
                  <div>
                    <div className="u-text-style-main">
                      Our technology, underwriting, and partnerships work
                      together in tandem to help businesses move faster, safer,
                      and with greater confidence.
                    </div>
                  </div>
                </div>

                {/* Video Block */}
                <div video-parent="" className="full-video-section-wrap">
                  <div id="careers-video" className="u-visual">
                    <img
                      src="/assets/images/industries-background.webp"
                      loading="lazy"
                      alt="Industries"
                      className="u-visual-image"
                    />
                    <video
                      src="https://player.vimeo.com/progressive_redirect/playback/1157667900/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=efcd0cfd87ba30604eca14cd90509a652be33c502208817eae236655d43fb062"
                      loop
                      playsInline
                      autoPlay
                      muted
                      className="u-visual-video"
                    />
                    <div className="u-visual-bk"></div>
                    <div
                      className="u-visual-overlay"
                      style={{ opacity: 0.2 }}
                    ></div>
                    <div className="img-overlay"></div>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="abs-video-btn">
                    <div
                      data-wf--button-main--variant="video"
                      data-barba-prevent=""
                      className="button_main_wrap u-pointer-on"
                      data-button=" "
                      data-trigger="hover focus"
                    >
                      <div className="button_main_element w-variant-f3411d48-6319-fd1f-022f-07d76f9c73e0">
                        <PlayIcon className="video-play w-variant-f3411d48-6319-fd1f-022f-07d76f9c73e0" />
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

                  {/* Stats Counter Overlay */}
                  <div className="abs-video-stats">
                    <div className="abs-video-stats-grid u-grid-custom">
                      {stats.map((stat, idx) => (
                        <div key={`stat-${idx}`} className="video-stats">
                          <div className="video-stat-text u-text-style-display">
                            {stat.prefix}
                            <span
                              data-count-from={stat.from}
                              data-count-to={stat.to}
                            >
                              {stat.from}
                            </span>
                            {stat.suffix}
                          </div>
                          <div className="video-stat-p u-text-style-large">
                            {stat.label}
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
    </section>
  );
};
