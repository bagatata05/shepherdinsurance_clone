'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowPinkRight } from '@/components/icons';

interface CaseStudy {
  title: string;
  slug: string;
  categories: string[];
  imageUrl: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Independent Power Producer Locks in Build-to-Operate Coverage with Shepherd",
    slug: "independent-power-producer-locks-in-build-to-operate-coverage-with-shepherd",
    categories: ["Renewable Energy", "Casualty"],
    imageUrl: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/6a1ed68bfe9c5fc820e37446_the-blowup-qafbp6O0Rr0-unsplash.jpg",
  },
  {
    title: "IMA Places a $36M TIV Builder's Risk for Tapani with Shepherd",
    slug: "tailored-builders-risk-solution-for-site-roadway-project-in-wa",
    categories: ["Construction", "Property"],
    imageUrl: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/69839adc1a021853f651f55d_6971534408788912eb5ba9a2_69714ad2725ae3f3d33d7a68_Getty%2520Images%2520Unsplash%25201.avif",
  },
  {
    title: "Seamless Insurance Placement for Rail Yard Modernization Project",
    slug: "seamless-insurance-placement-for-rail-yard-modernization-project",
    categories: ["Construction", "Casualty"],
    imageUrl: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/696fd59496a4929b95b836cd_696a3737e4d06dc6b34b5a29_Graphic%2520Node%2520Unsplash%2520(1).webp",
  },
  {
    title: "How Partnership and Trust are Driving Shepherd's Primary Practice Expansion",
    slug: "how-partnership-and-trust-are-driving-shepherds-primary-practice-expansion",
    categories: ["Construction", "Casualty"],
    imageUrl: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/696003c8aa9eb058f47bea1a_jr-harris-5dnq8ipduuw-unsplash.webp",
  },
  {
    title: "Shepherd's Technical Expertise Fuels Primary Practice Expansion",
    slug: "shepherd-s-technical-expertise-fuels-primary-practice-expansion",
    categories: ["Construction", "Casualty"],
    imageUrl: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/696fd594a584450be9114445_696a3656ca32872b689b1912_Yunus%2520Tug%2520Unsplash%2520(1).webp",
  },
  {
    title: "Shepherd Grows Primary Practice Portfolio with High-Touch Approach",
    slug: "shepherd-s-high-touch-approach-fuels-primary-practice-growth",
    categories: ["Construction", "Casualty"],
    imageUrl: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/696fd58a28b2bc7616b17db0_696a3ca76def75bcf4edcade_Dayne%2520Topkin%2520Unsplash%2520(1).avif",
  }
];

const FILTER_CATEGORIES = [
  "Construction",
  "Renewable Energy",
  "Casualty",
  "Property",
  "Shepherd Savings"
];

export const StoriesGrid: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredStories = selectedCategories.length === 0
    ? CASE_STUDIES
    : CASE_STUDIES.filter(story =>
        story.categories.some(cat => selectedCategories.includes(cat))
      );

  return (
    <section className="u-section u-theme-light">
      <div className="section_spacer">
        <div className="u-container is-hero">
          <div className="u-content v-flex-8">

            <div className="w-form">
              <div className="w-dyn-list">
                <div role="list" className="collection-list w-dyn-items">
                  {FILTER_CATEGORIES.map((category, idx) => {
                    const isActive = selectedCategories.includes(category);
                    return (
                      <div key={idx} role="listitem" className="w-dyn-item">
                        <label
                          className={`w-checkbox filter-check cursor-pointer ${isActive ? 'is-active' : ''}`}
                        >
                          <input
                            type="checkbox"
                            className="w-checkbox-input hidden"
                            checked={isActive}
                            onChange={() => handleCategoryToggle(category)}
                          />
                          <span className="u-text-style-small w-form-label" style={{ userSelect: 'none' }}>
                            {category.toUpperCase()}
                          </span>
                          <div className="filter-x">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 12" fill="none">
                              <path d="M0.53125 0.53125L10.5098 10.5117" stroke="currentColor" strokeWidth="1.5"></path>
                              <path d="M10.5117 0.53125L0.53125 10.5098" stroke="currentColor" strokeWidth="1.5"></path>
                            </svg>
                          </div>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="w-dyn-list">
              {filteredStories.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '4rem 0', opacity: 0.6 }}>
                  No stories found matching the selected filters.
                </div>
              ) : (
                <div className="cs-list u-grid-custom w-dyn-items">
                  {filteredStories.map((story, idx) => (
                    <div key={idx} role="listitem" className="cs-item w-dyn-item">
                      <div className="cta-card-flex v-flex-3">

                        <Link hov-img="" href={`/case-studies/${story.slug}`} className="blog-thumb w-inline-block">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 60 60" fill="none" className="corner-svg">
                            <path d="M60 60L60 -2.14577e-06L30 30L-2.14577e-06 60L60 60Z" fill="white"></path>
                          </svg>
                          <img src={story.imageUrl} loading="lazy" alt={story.title} className="img-abs" />
                          <div className="img-overlay"></div>
                        </Link>

                        <div>
                          <div className="blog-category-flex">
                            <div className="category-icon">
                              <ArrowPinkRight className="svg" />
                            </div>
                            <div className="w-dyn-list">
                              <div role="list" className="tags-list w-dyn-items">
                                {story.categories.map((cat, catIdx) => (
                                  <div key={catIdx} role="listitem" className="tags-item w-dyn-item">
                                    <div className="u-text-style-small">{cat.toUpperCase()}</div>
                                    <div className="u-text-style-small coma">,</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <Link href={`/case-studies/${story.slug}`} className="w-inline-block">
                            <div className="u-text-style-main">
                              {story.title}
                            </div>
                          </Link>

                          <div data-wf--button-main--variant="link" className="button_main_wrap w-variant-625d5df4-ad91-f7dc-9e2f-2e69f3fd7400" data-button=" " data-trigger="hover focus">
                            <div className="clickable_wrap u-cover-absolute">
                              <Link href={`/case-studies/${story.slug}`} className="clickable_link w-inline-block">
                                <span className="clickable_text u-sr-only">LEARN MORE</span>
                              </Link>
                              <button type="button" className="clickable_btn">
                                <span className="clickable_text u-sr-only">LEARN MORE</span>
                              </button>
                            </div>
                            <div className="button_main_element w-variant-625d5df4-ad91-f7dc-9e2f-2e69f3fd7400">
                              <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 16" fill="none" className="video-play">
                                <path d="M11.25 7.79443L2.19575e-07 15.5887L9.00968e-07 0.000204548L11.25 7.79443Z" fill="black"></path>
                              </svg>
                              <div aria-hidden="true" className="button_main_text u-text-style-small">LEARN MORE</div>
                              <div className="button_main_icon u-hide-if-empty"></div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
