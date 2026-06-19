import React from "react";
import { TestimonialSlider } from "@/components/TestimonialSlider";

export const FoundationSection: React.FC = () => {
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
                      data-max="ch25"
                      className="section-heading u-text-style-h3"
                    >
                      The foundation beneath every complex build.
                    </h1>
                  </div>
                  <div>
                    <div className="u-text-style-main">
                      Coverage designed to protect projects through every
                      phase of the build, from first delivery to final
                      handoff.
                    </div>
                  </div>
                </div>
              </div>
              <TestimonialSlider
                testimonials={[
                  {
                    title:
                      "Tailored Builder’s Risk Solution for Site & Roadway Project in WA",
                    quote:
                      "“When Shepherd launched its Builder’s Risk unit, I was eager to partner with them—particularly given the strength of their underwriting leadership and the involvement of industry respected builder’s risk expertise in developing the program. Shepherd continues to differentiate itself through its speed to market, disciplined underwriting, and high- quality insurance solutions. They are valued partners, and I look forward to continuing to work with them as our relationship grows.”",
                    authorImg: "/assets/images/bethany.webp",
                    authorInfo: (
                      <>
                        Bethany Sutherland
                        <br />
                        Commercial Client Executive, IMA
                      </>
                    ),
                    btnLink:
                      "https://www.shepherdinsurance.com/case-studies/tailored-builders-risk-solution-for-site-roadway-project-in-wa",
                  },
                  {
                    title:
                      "A Holistic Underwriting Approach Across Casualty and Builder’s Risk",
                    quote:
                      "“Shepherd's Builder's Risk offering created a comprehensive coverage package for the insured, combining P&C product lines under a single underwriting and serving team.”",
                    btnLink:
                      "/case-studies/shepherd-s-combined-casualty-builder-s-risk-offering-for-87m-life-sciences-develo",
                  },
                  {
                    title:
                      "Shepherd’s Combined Casualty & Builder’s Risk Offering for $87M Life Sciences Development Project",
                    quote:
                      "“Shepherd creates a high touch underwriting experience tailored to client needs, combining product lines for commercial project specific placements.”",
                    btnLink:
                      "/case-studies/shepherd-s-combined-casualty-builder-s-risk-offering-for-87m-life-sciences-develo",
                  },
                ]}
                staticImage="/assets/images/andy-quezada.webp"
                staticImageSrcSet="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69690ef79cbaa7de910b48f7_andy-quezada-epLx0ZVNiLM-unsplash_1x-p-500.webp 500w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69690ef79cbaa7de910b48f7_andy-quezada-epLx0ZVNiLM-unsplash_1x-p-800.webp 800w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69690ef79cbaa7de910b48f7_andy-quezada-epLx0ZVNiLM-unsplash_1x-p-1080.webp 1080w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69690ef79cbaa7de910b48f7_andy-quezada-epLx0ZVNiLM-unsplash_1x-p-1600.webp 1600w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69690ef79cbaa7de910b48f7_andy-quezada-epLx0ZVNiLM-unsplash_1x-p-2000.webp 2000w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69690ef79cbaa7de910b48f7_andy-quezada-epLx0ZVNiLM-unsplash_1x-p-2600.webp 2600w, https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69690ef79cbaa7de910b48f7_andy-quezada-epLx0ZVNiLM-unsplash_1x-p-3200.webp 3200w, /assets/images/andy-quezada.webp 4096w"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
