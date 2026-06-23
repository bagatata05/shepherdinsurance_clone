'use client';

import React, { useState } from 'react';

export const LifeAtShepherd: React.FC = () => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  return (
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
