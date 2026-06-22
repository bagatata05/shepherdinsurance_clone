"use client";

import React from "react";

interface DurabilitySectionProps {
  theme: "dark" | "light";
  heading: string;
  description: string;
  gifSuffix?: string;
}

const cards = [
  {
    title: "Speed that keeps pace",
    text: "Underwriting decisions in hours, not weeks. Automation and AI streamline complexity.",
    gif: "speed-that-keeps-pace",
  },
  {
    title: "Intelligence that rewards",
    text: "Pricing which proactively rewards the behaviors that drive better outcomes.",
    gif: "intelligence-that-rewards",
  },
  {
    title: "A single connected system",
    text: "Unified product suite designed to provide a one-stop solution for clients.",
    gif: "single-conected-system",
  },
];

const CardGrid: React.FC<{ isDark: boolean; gifSuffix: string }> = ({
  isDark,
  gifSuffix,
}) => (
  <div className="card-grid-3 u-grid-custom">
    {cards.map((card, idx) => (
      <div
        key={idx}
        data-wf--centered-card--variant={isDark ? "transparent" : "base"}
        className="centered-card-slide"
      >
        <div className={`centered-card-wrap${isDark ? " w-variant-bb16849b-d250-e704-3f41-81eb2aacea29" : ""}`}>
          <div className="centered-card-content-abs">
            <div className="div-block">
              <div className="div-block-2">
                <img
                  src={`/assets/gifs/${card.gif}${gifSuffix}.gif`}
                  loading="lazy"
                  alt=""
                  className="img-abs"
                />
              </div>
            </div>
            <div className="u-text-style-large">{card.title}</div>
            <div>{card.text}</div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            viewBox="0 0 60 60"
            fill="none"
            className={`corner-svg${isDark ? " w-variant-bb16849b-d250-e704-3f41-81eb2aacea29" : ""}`}
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
              <clipPath id="Subtract" clipPathUnits="objectBoundingBox">
                <path
                  d="M0.8636363636363636,-3.775068181818181e-8l0.13636363636363635,0.13636363636363635l0,0.8636363636363636l-1,0l0,-1l0.8636363636363636,0z"
                  fill="black"
                ></path>
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    ))}
  </div>
);

const SectionHeader: React.FC<{ heading: string; description: string }> = ({
  heading,
  description,
}) => (
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
      <h1 data-max="ch25" className="section-heading u-text-style-h3">
        {heading}
      </h1>
    </div>
    <div>
      <div className="u-text-style-main">{description}</div>
    </div>
  </div>
);

export const DurabilitySection: React.FC<DurabilitySectionProps> = ({
  theme,
  heading,
  description,
  gifSuffix = "",
}) => {
  const isDark = theme === "dark";

  if (isDark) {
    return (
      <section className="u-section u-theme-dark">
        <div id="careers-video" className="u-visual">
          <img
            src="/assets/images/group-2147210673.webp"
            loading="lazy"
            alt=""
            sizes="(max-width: 1360px) 100vw, 1360px"
            srcSet="/assets/images/group-2147210673-p-500.webp 500w, /assets/images/group-2147210673-p-800.webp 800w, /assets/images/group-2147210673-p-1080.webp 1080w, /assets/images/group-2147210673-p-1600.webp 1600w, /assets/images/group-2147210673-p-2000.webp 2000w, /assets/images/group-2147210673-p-2600.webp 2600w, /assets/images/group-2147210673.webp 2880w"
            className="u-visual-image"
          />
          <div className="u-visual-bk"></div>
          <div style={{ opacity: "0.4" }} className="u-visual-overlay"></div>
          <div className="img-overlay"></div>
        </div>
        <div pt-child="" className="section_spacer">
          <div className="u-container">
            <div className="full-img-section">
              <div className="u-content v-flex-img-section">
                <SectionHeader heading={heading} description={description} />
                <CardGrid isDark={isDark} gifSuffix={gifSuffix} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="u-section u-theme-light">
      <div className="section_spacer">
        <div className="u-container">
          <div className="u-content v-flex-8">
            <div className="content-flex v-flex-8">
              <div className="section-content-flex v-flex-5">
                <SectionHeader heading={heading} description={description} />
                <CardGrid isDark={isDark} gifSuffix={gifSuffix} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
