'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';

export const SavingsVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = (e: React.MouseEvent) => {
    e.preventDefault();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = false;
      videoRef.current.controls = true;
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <section className="u-section u-theme-beige">
      <div className="section_spacer">
        <div className="u-container">
          <div className="u-content v-flex-8">
            <div className="content-flex v-flex-8">
              <div className="section-content-flex v-flex-5">
                <div className="section-header-grid u-grid-custom">
                  <div className="section-header-title-col u-column-span-2">
                    <div className="heading-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 17 34" fill="none">
                        <path d="M16.9706 16.9705L2.07015e-05 -0.00010423L1.85557e-05 16.9705L1.641e-05 33.941L16.9706 16.9705Z" fill="#DA43E7"></path>
                      </svg>
                    </div>
                    <h1 className="section-heading u-text-style-h3">
                      Premium savings for tech-powered operations
                    </h1>
                  </div>
                  <div>
                    <div className="u-text-style-main">
                      Customers see measurable impacts, greater stability, and measurable improvement over time.
                    </div>
                  </div>
                </div>

                <div video-parent="" className="full-video-section-wrap" style={{ position: 'relative', overflow: 'hidden', width: '100%', aspectRatio: '16/9', borderRadius: '8px' }}>
                  <div id="careers-video" className="u-visual" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
                    <img
                      src="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69658c95dc551aa55ec4de83_Savings-thumbnail.webp"
                      loading="lazy"
                      alt="Video Thumbnail"
                      className="u-visual-image"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: isVideoPlaying ? 0 : 1,
                        transition: 'opacity 0.5s ease',
                        zIndex: isVideoPlaying ? 0 : 2
                      }}
                    />
                    <video
                      ref={videoRef}
                      src="https://player.vimeo.com/progressive_redirect/playback/1157667900/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&amp;signature=efcd0cfd87ba30604eca14cd90509a652be33c502208817eae236655d43fb062"
                      loop
                      playsInline
                      muted
                      className="u-visual-video"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: isVideoPlaying ? 5 : 1
                      }}
                    />
                    <div className="u-visual-bk" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.1)' }}></div>
                    <div className="img-overlay"></div>
                  </div>

                  {!isVideoPlaying && (
                    <div className="abs-video-btn" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10 }}>
                      <div data-wf--button-main--variant="video" className="button_main_wrap u-pointer-on" data-button=" " data-trigger="hover focus">
                        <div className="clickable_wrap u-cover-absolute">
                          <button type="button" onClick={handlePlayVideo} className="clickable_btn" style={{ background: 'none', border: 'none', width: '100%', height: '100%' }}>
                            <span className="clickable_text u-sr-only">PLAY VIDEO</span>
                          </button>
                        </div>
                        <div className="button_main_element w-variant-f3411d48-6319-fd1f-022f-07d76f9c73e0" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#ffffff', color: '#000000', padding: '0.75rem 1.5rem', borderRadius: '9999px', fontWeight: 600 }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none" className="video-play">
                            <path d="M11.25 7.79443L2.19575e-07 15.5887L9.00968e-07 0.000204548L11.25 7.79443Z" fill="black"></path>
                          </svg>
                          <div className="button_main_text u-text-style-small">PLAY VIDEO</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="split-grid u-grid-custom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', flexWrap: 'wrap', gap: '2rem' }}>
                  <div className="section-header-title-col" style={{ flex: '1 1 60%', minWidth: '300px' }}>
                    <h1 className="u-text-style-h4" style={{ fontSize: '24px', fontWeight: 600, lineHeight: 1.3 }}>
                      Owner Receives 15% Premium Savings with OpenSpace Activation on $260M OCIP in Atlanta
                    </h1>
                  </div>
                  <div className="div-block-6">
                    <div className="div-block-7">
                      <div data-wf--button-main--variant="primary" className="button_main_wrap" data-button=" " data-trigger="hover focus">
                        <div className="clickable_wrap u-cover-absolute">
                          <Link href="/case-studies/owner-receives-15-premium-savings-with-openspace-activation-on-260m-ocip-in-atlan" className="clickable_link w-inline-block">
                            <span className="clickable_text u-sr-only">READ THE CASE STUDY</span>
                          </Link>
                        </div>
                        <div className="button_main_element">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 16" fill="none" className="video-play">
                            <path d="M11.25 7.79443L2.19575e-07 15.5887L9.00968e-07 0.000204548L11.25 7.79443Z" fill="black"></path>
                          </svg>
                          <div aria-hidden="true" className="button_main_text u-text-style-small">READ THE CASE STUDY</div>
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
  );
};
