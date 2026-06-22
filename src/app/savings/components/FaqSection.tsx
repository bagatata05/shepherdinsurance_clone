'use client';

import React, { useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface FAQItem {
  question: string;
  answerHtml: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: "What is Shepherd Savings?",
    answerHtml: (
      <>
        <p className="margin-bottom-sm">
          Shepherd Savings is a partnership program created to reward technology-enabled contractors. By incorporating verified activity and usage data into our underwriting process, Shepherd can offer insurance proposals with premium savings of up to 25%.
        </p>
        <p className="margin-bottom-sm">
          Shepherd Savings currently includes partners across several key jobsite technology categories:
        </p>
        <p className="margin-bottom-sm">
          - <strong>Project Management</strong>: Procore, Autodesk, Raken<br />
          - <strong>Reality Capture</strong>: OpenSpace, DroneDeploy<br />
          - <strong>Telematics</strong>: Samsara, Motive<br />
          - <strong>IoT &amp; Sensors</strong>: Brickeye, WINT, Kairos
        </p>
        <p>
          Contractors who receive a proposal from Shepherd and actively use one or more participating partner platforms may be eligible for Shepherd Savings. In addition, contractors and owners can choose to purchase partner solutions directly as part of their Shepherd proposal.
        </p>
      </>
    )
  },
  {
    question: "How do I enroll in Shepherd Savings?",
    answerHtml: (
      <p>
        Enrollment is simple. When insureds participate in Shepherd Savings, they agree to a data-share process with the applicable technology partner(s). Shepherd uses verified usage metrics from these partners as part of the underwriting process to evaluate eligibility for savings and apply any applicable pricing credits.
      </p>
    )
  },
  {
    question: "Do I get access to my data and how it was used in underwriting?",
    answerHtml: (
      <p>
        Yes. All Shepherd Savings clients receive a regular Utilization Report that summarizes the technology usage data reviewed during the underwriting process.
      </p>
    )
  },
  {
    question: "How does Shepherd use this data, and why does it lead to savings?",
    answerHtml: (
      <p>
        Shepherd uses technology data to better understand real-world risk on the jobsite. We map behavior-based loss control signals—such as consistent tool usage, monitoring, and safety-related activity—to expected loss outcomes. When clients use Shepherd Savings partners, these signals translate into measurable pricing credits. These credits are grounded in prior studies conducted with partners and validated against actual claims data. Beyond underwriting, we use the same data to guide clients toward targeted actions and technology investments that further reduce risk and improve loss performance over time.
      </p>
    )
  },
  {
    question: "Is there a possibility of the utilization data resulting in a premium increase?",
    answerHtml: (
      <p>
        By default, we underwrite every client based on their exposure and loss history. If usage data shows low or minimal activity, the insured is simply treated as a contractor that does not use construction technology for underwriting purposes.
      </p>
    )
  },
  {
    question: "What if I use a different technology product that isn&rsquo;t listed?",
    answerHtml: (
      <>
        <p className="margin-bottom-sm">
          If a different technology solution is being utilized, please share that information with your Shepherd underwriting team during the submission process.
        </p>
        <p>
          Shepherd is continually evaluating new partners and technologies, and we regularly expand the Shepherd Savings program to reward tools that demonstrate a measurable impact on claims outcomes.
        </p>
      </>
    )
  }
];

export const FaqSection: React.FC = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  const handleFaqToggle = (index: number) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  };

  return (
    <section className="u-section u-theme-light">
      <div className="section_spacer">
        <div className="u-container">
          <div className="u-content v-flex-8">
            <div className="content-flex v-flex-6">
              <div className="faq-grid u-grid-custom" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>
                <div className="section-header-title-col">
                  <div className="heading-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 17 34" fill="none">
                      <path d="M16.9706 16.9705L2.07015e-05 -0.00010423L1.85557e-05 16.9705L1.641e-05 33.941L16.9706 16.9705Z" fill="#DA43E7"></path>
                    </svg>
                  </div>
                  <h1 className="section-heading u-text-style-h3">FAQ</h1>
                </div>
                <div className="faq-span u-column-span-2">
                  <div className="accordion_wrap">
                    <div className="accordion_list" style={{ borderTop: '1px solid #e0e0e0' }}>
                      {faqItems.map((item, idx) => {
                        const isOpen = activeFaqIndex === idx;
                        return (
                          <div key={idx} className={`accordion_item ${isOpen ? 'is-active' : ''}`} style={{ borderBottom: '1px solid #e0e0e0' }}>
                            <div className="accordion_component">
                              <h3 className="accordion_toggle_heading">
                                <button
                                  type="button"
                                  aria-expanded={isOpen ? "true" : "false"}
                                  onClick={() => handleFaqToggle(idx)}
                                  className="accordion_toggle_button"
                                  style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                    padding: '2rem 0',
                                    textAlign: 'left',
                                    background: 'none',
                                    border: 'none',
                                  }}
                                >
                                  <span className="accordion_toggle_text u-text-style-h4" style={{ fontSize: '18px', fontWeight: 600 }}>
                                    {item.question}
                                  </span>
                                  <span
                                    className="accordion_toggle_icon"
                                    style={{
                                      width: '16px',
                                      height: '16px',
                                      transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                                      transition: 'transform 0.3s ease',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      opacity: 0.6,
                                    }}
                                  >
                                    <svg viewBox="0 0 66 70" fill="none" width="100%" height="100%" aria-hidden="true" className="u-svg">
                                      <path d="M17 2L50 34.9999L17 68" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                  </span>
                                </button>
                              </h3>
                              <div
                                className="accordion_content_wrap"
                                style={{
                                  maxHeight: isOpen ? '1000px' : '0px',
                                  overflow: 'hidden',
                                  transition: 'max-height 0.4s ease-in-out',
                                }}
                              >
                                <div className="accordion_content_padding" style={{ paddingBottom: '2rem' }}>
                                  <div className="faq-answer">
                                    <div className="u-rich-text w-richtext" style={{ fontSize: '15px', lineHeight: 1.6, opacity: 0.8 }}>
                                      {item.answerHtml}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
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
