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

interface Job {
  title: string;
  location: string;
  team: string;
  url: string;
}

const JOBS: Job[] = [
  {
    title: "Actuarial Data Analyst",
    location: "New York City",
    team: "Actuarial",
    url: "https://jobs.ashbyhq.com/shepherd/6100294f-ac13-4a9a-bf5c-8b49a8925820",
  },
  {
    title: "Actuarial Developer",
    location: "New York City",
    team: "Actuarial",
    url: "https://jobs.ashbyhq.com/shepherd/b1b0adbd-fde7-4396-afe0-b77382ce68ab",
  },
  {
    title: "Actuarial Data Scientist",
    location: "San Francisco",
    team: "Actuarial",
    url: "https://jobs.ashbyhq.com/shepherd/c47ddfda-187d-4271-9d23-79a2cee10a59",
  },
  {
    title: "Software Engineer, Full Stack",
    location: "San Francisco",
    team: "Engineering",
    url: "https://jobs.ashbyhq.com/shepherd/c4081c3d-a79b-4ac9-aa19-78f5e1a24c4d",
  },
  {
    title: "Software Engineer, Backend",
    location: "San Francisco",
    team: "Engineering",
    url: "https://jobs.ashbyhq.com/shepherd/395f4b75-cf05-4581-8408-8f4fe0f1480b",
  },
  {
    title: "Software Engineer, AI Product + Agents",
    location: "San Francisco",
    team: "Engineering",
    url: "https://jobs.ashbyhq.com/shepherd/6cbab29e-1bbf-42b4-9308-3823693ca288",
  },
  {
    title: "Software Engineer, Applied AI",
    location: "San Francisco",
    team: "Engineering",
    url: "https://jobs.ashbyhq.com/shepherd/26959124-aab2-446e-aa4d-7265c83e0be5",
  },
  {
    title: "Founding Machine Learning Engineer",
    location: "San Francisco",
    team: "Engineering",
    url: "https://jobs.ashbyhq.com/shepherd/797316b4-bdcc-4c0c-8bc2-46d4648db240",
  },
  {
    title: "Marketing Engineer, Brokerage Growth",
    location: "New York City",
    team: "Marketing",
    url: "https://jobs.ashbyhq.com/shepherd/8b413a20-4309-4992-8e1d-648a018cfe30",
  },
  {
    title: "Brand and Experiences",
    location: "New York City",
    team: "Marketing",
    url: "https://jobs.ashbyhq.com/shepherd/2f724b0a-9f9d-4bc6-bc97-cbec2dc10a34",
  },
  {
    title: "People Operations Lead",
    location: "San Francisco",
    team: "Operations",
    url: "https://jobs.ashbyhq.com/shepherd/1b596fd0-ffb0-4f05-84aa-d84916174e0e",
  },
  {
    title: "GTM Analytics & Strategy",
    location: "San Francisco",
    team: "Operations",
    url: "https://jobs.ashbyhq.com/shepherd/21cf56ac-008c-42b8-9bb9-0dab34a9f205",
  },
  {
    title: "Senior Underwriter",
    location: "New York City",
    team: "Underwriting",
    url: "https://jobs.ashbyhq.com/shepherd/58df8295-f3cf-47b8-83b9-fa0ed2f01fa1",
  },
  {
    title: "Executive Underwriter",
    location: "New York City",
    team: "Underwriting",
    url: "https://jobs.ashbyhq.com/shepherd/587ef394-930b-42c8-9565-3c423c314ab4",
  },
  {
    title: "Business Development",
    location: "New York City",
    team: "Underwriting",
    url: "https://jobs.ashbyhq.com/shepherd/dd6a96c8-2eda-4457-9153-9960e88ed950",
  },
];

export default function Careers() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  // Header hide/show on scroll trigger
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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredJobs = JOBS.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.team.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div ref={mainRef} id="main" className="page_wrap">
      <div data-barba="container" className="page_main">
        {/* White theme navigation header */}
        <Header theme="light" />

        <div className="page_content">
          {/* Section 1: Yellow Brand Hero */}
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
                              <span className="txt-icon-arrow is-up"></span>
                              Enduring companies are built by exceptional teams.
                            </h1>
                            <div className="hero-p u-text-style-main">
                              We&apos;re entrepreneurs, dreamers, and leaders
                              from across both tech and insurance. We&apos;re
                              here to shape the future of financial services for
                              the world&apos;s most important industries.
                            </div>
                          </div>

                          <div className="u-button-wrapper u-margin-top-0">
                            <div className="u-display-contents">
                              <div
                                data-wf--button-main--variant="primary"
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
                                      Contact us
                                    </span>
                                  </Link>
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
                    src="/assets/images/careers-hero.webp"
                    loading="lazy"
                    alt="Shepherd Team"
                    className="u-visual-image"
                  />
                  <div className="u-visual-bk"></div>
                  <div className="img-overlay"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Life at Shepherd */}
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
                            {...({ max: "ch25" } as any)}
                            className="section-heading u-text-style-h3"
                          >
                            Life at Shepherd
                          </h1>
                        </div>
                        <div>
                          <div className="u-text-style-main">
                            This is an environment for people who need{" "}
                            <em>intellectual challenge</em>, thrive in progress,
                            and are motivated by the impact of their work.
                          </div>
                        </div>
                      </div>

                      <div video-parent="" className="full-video-section-wrap">
                        <div id="careers-video" className="u-visual">
                          {isPlayingVideo ? (
                            <video
                              src="https://player.vimeo.com/progressive_redirect/playback/1156957345/rendition/1080p/file.mp4?loc=external&amp;signature=ac8fb55f98c7da262994ff5fa0e312f192814da43554b7d6b3c69e88c4256ef3"
                              loop
                              playsInline
                              autoPlay
                              controls
                              className="u-visual-video"
                            ></video>
                          ) : (
                            <>
                              <img
                                src="/assets/images/careers-video-thumb.avif"
                                loading="lazy"
                                alt="Office video thumbnail"
                                className="u-visual-image"
                              />
                              <div className="u-visual-bk"></div>
                              <div
                                style={{ opacity: 0.2 }}
                                className="u-visual-overlay"
                              ></div>
                              <div className="img-overlay"></div>
                            </>
                          )}
                        </div>

                        {!isPlayingVideo && (
                          <div
                            className="abs-video-btn"
                            onClick={() => setIsPlayingVideo(true)}
                          >
                            <div
                              data-wf--button-main--variant="video"
                              data-barba-prevent=""
                              className="button_main_wrap u-pointer-on"
                              data-button=" "
                              data-trigger="hover focus"
                            >
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
                        )}
                      </div>
                    </div>

                    {/* Section 3: Investing in You */}
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
                            {...({ max: "ch25" } as any)}
                            className="section-heading u-text-style-h3"
                          >
                            Investing in You
                          </h1>
                        </div>
                        <div>
                          <div className="u-text-style-main">
                            Shepherd is where you can do your best work.
                          </div>
                        </div>
                      </div>

                      <div className="card-grid-3 u-grid-custom">
                        {/* Card 1 */}
                        <div
                          data-wf--centered-card--variant="base"
                          className="centered-card-slide"
                        >
                          <div className="centered-card-wrap">
                            <div className="centered-card-content-abs">
                              <div className="div-block">
                                <div className="div-block-2">
                                  <img
                                    src="/assets/images/careers-mask-1.svg"
                                    loading="lazy"
                                    alt="Health benefits icon"
                                    className="img-abs"
                                  />
                                </div>
                              </div>
                              <div className="u-text-style-large">
                                Health &amp; Wellness
                              </div>
                              <div>
                                100% contribution to top-tier health, dental,
                                and vision
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
                                  id="Subtract-1"
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

                        {/* Card 2 */}
                        <div
                          data-wf--centered-card--variant="base"
                          className="centered-card-slide"
                        >
                          <div className="centered-card-wrap">
                            <div className="centered-card-content-abs">
                              <div className="div-block">
                                <div className="div-block-2">
                                  <img
                                    src="/assets/images/careers-mask-2.svg"
                                    loading="lazy"
                                    alt="Unlimited PTO icon"
                                    className="img-abs"
                                  />
                                </div>
                              </div>
                              <div className="u-text-style-large">
                                Unlimited PTO
                              </div>
                              <div>
                                Flexibility to take the time off, recharge, and
                                perform
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
                                  id="Subtract-2"
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

                        {/* Card 3 */}
                        <div
                          data-wf--centered-card--variant="base"
                          className="centered-card-slide"
                        >
                          <div className="centered-card-wrap">
                            <div className="centered-card-content-abs">
                              <div className="div-block">
                                <div className="div-block-2">
                                  <img
                                    src="/assets/images/careers-group-svg.svg"
                                    loading="lazy"
                                    alt="Professional development icon"
                                    className="img-abs"
                                  />
                                </div>
                              </div>
                              <div className="u-text-style-large">
                                Professional Development
                              </div>
                              <div>
                                Premium coaching and leadership development
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
                                  id="Subtract-3"
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

          {/* Section 4: Team Carousel Banner */}
          <section className="u-section u-theme-light">
            <div className="section_spacer no-top">
              <div className="u-container">
                <div className="u-content v-flex-8">
                  <div className="career-caroussel">
                    <div className="w-dyn-list">
                      <div role="list" className="career-img-list w-dyn-items">
                        <div
                          role="listitem"
                          className="career-img w-dyn-item w-dyn-repeater-item"
                        >
                          <img
                            src="/assets/images/careers-carousel-1.avif"
                            loading="lazy"
                            alt="Team dink"
                            className="img-abs"
                          />
                        </div>
                        <div
                          role="listitem"
                          className="career-img w-dyn-item w-dyn-repeater-item"
                        >
                          <img
                            src="/assets/images/careers-carousel-2.avif"
                            loading="lazy"
                            alt="Office desk"
                            className="img-abs"
                          />
                        </div>
                        <div
                          role="listitem"
                          className="career-img w-dyn-item w-dyn-repeater-item"
                        >
                          <img
                            src="/assets/images/careers-carousel-3.avif"
                            loading="lazy"
                            alt="Team session"
                            className="img-abs"
                          />
                        </div>
                        <div
                          role="listitem"
                          className="career-img w-dyn-item w-dyn-repeater-item"
                        >
                          <img
                            src="/assets/images/careers-carousel-4.avif"
                            loading="lazy"
                            alt="Team social dinner"
                            className="img-abs"
                          />
                        </div>
                        <div
                          role="listitem"
                          className="career-img w-dyn-item w-dyn-repeater-item"
                        >
                          <img
                            src="/assets/images/careers-carousel-5.avif"
                            loading="lazy"
                            alt="Team canopy group photo"
                            className="img-abs"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="career-img-txt-wrap">
                      <div className="u-text-style-h3">
                        Be part of the team building the platform that will
                        define the next era of commercial risk.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Open Positions Table */}
          <section className="u-section u-theme-light">
            <div className="section_spacer no-top">
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
                            {...({ max: "ch25" } as any)}
                            className="section-heading u-text-style-h3"
                          >
                            Open positions
                          </h1>
                        </div>
                        <div>
                          <div className="u-text-style-main">
                            Work alongside some of the brightest minds in the
                            industry.
                          </div>
                        </div>
                      </div>

                      <div className="career">
                        {/* Search Filter Header */}
                        <div className="career-grid u-grid-custom is-top">
                          <div className="career-title u-column-span-2">
                            <div
                              fs-cmsfilter-element="filters"
                              className="filter-form w-form"
                            >
                              <form
                                id="email-form"
                                name="email-form"
                                data-name="Email Form"
                                onSubmit={(e) => e.preventDefault()}
                              >
                                <input
                                  className="search-field u-text-style-large w-input"
                                  maxLength={256}
                                  name="SEARCH"
                                  placeholder="SEARCH"
                                  type="text"
                                  id="SEARCH"
                                  value={searchQuery}
                                  onChange={handleSearchChange}
                                  autoComplete="off"
                                />
                              </form>
                            </div>
                          </div>
                          <div className="u-text-style-large uppercase">
                            location
                          </div>
                          <div
                            hide-mp=""
                            className="u-text-style-large uppercase"
                          >
                            team
                          </div>
                        </div>

                        {/* Jobs List */}
                        <div className="w-dyn-list">
                          {filteredJobs.length === 0 ? (
                            <div
                              style={{
                                textAlign: "center",
                                padding: "4rem 0",
                                opacity: 0.6,
                              }}
                            >
                              No positions match your search query.
                            </div>
                          ) : (
                            <div role="list" className="w-dyn-items">
                              {filteredJobs.map((job, idx) => (
                                <div
                                  key={idx}
                                  role="listitem"
                                  className="career-item w-dyn-item"
                                >
                                  <a
                                    href={job.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="career-grid u-grid-custom w-inline-block"
                                  >
                                    <div className="career-title u-column-span-2">
                                      <div className="u-text-style-large">
                                        {job.title}
                                      </div>
                                    </div>
                                    <div className="u-text-style-large">
                                      {job.location}
                                    </div>
                                    <div
                                      hide-mp=""
                                      className="u-text-style-large"
                                    >
                                      {job.team}
                                    </div>
                                  </a>
                                </div>
                              ))}
                            </div>
                          )}
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
