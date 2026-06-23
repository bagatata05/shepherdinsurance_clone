import React from 'react';

export const TeamCarousel: React.FC = () => {
  return (
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
  );
};
