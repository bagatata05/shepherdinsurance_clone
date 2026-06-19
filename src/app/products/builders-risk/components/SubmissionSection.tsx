import React from "react";

export const SubmissionSection: React.FC = () => {
  return (
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
                      <a href="mailto:submissions@shepherdinsurance.com">
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
  );
};
