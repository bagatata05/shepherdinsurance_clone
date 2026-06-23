import React from 'react';

export const InvestingInYou: React.FC = () => {
  return (
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
  );
};
