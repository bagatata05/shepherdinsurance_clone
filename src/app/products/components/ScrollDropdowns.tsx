import React from "react";
import Link from "next/link";

export const ScrollDropdowns: React.FC = () => {
  return (
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
                                  <Link
                                    href="/case-studies/246m-telecommunications-and-electrical-contractor-in-ohio-utilizing-casualty-pro"
                                    className="clickable_link w-inline-block"
                                  >
                                    <span className="clickable_text u-sr-only">
                                      READ MORE
                                    </span>
                                  </Link>
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
                                  <Link
                                    href="/case-studies/data-center-developer-partners-opts-into-shepherd-savings-for-315m-ocip-in-va"
                                    className="clickable_link w-inline-block"
                                  >
                                    <span className="clickable_text u-sr-only">
                                      READ MORE
                                    </span>
                                  </Link>
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
            <div className="forced-scroll-section-triggers">
              <div className="trigger"></div>
              <div className="trigger"></div>
              <div className="trigger"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
