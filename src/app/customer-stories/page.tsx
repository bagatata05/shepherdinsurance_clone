'use client';

import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CTA } from '@/components/CTA';
import Link from 'next/link';
import { ArrowPinkRight } from '@/components/icons';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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

export default function CustomerStories() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  useEffect(() => {
    const navComponent = document.querySelector('.nav_component');
    if (!navComponent) return;

    const showAnim = gsap.from(navComponent, {
      yPercent: -100,
      paused: true,
      duration: 0.3,
      ease: 'power1.out',
    }).progress(1);

    const trigger = ScrollTrigger.create({
      start: 'top top',
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
    <div ref={mainRef} id="main" className="page_wrap">
      <div data-barba="container" className="page_main">
        <Header theme="light" />

        <div className="customer-stories-content">
          {/* Section 0: Hero & Featured */}
          <section className="u-section u-theme-light">
            <div className="section_spacer is-pages-hero">
              <div className="u-container is-hero">
                <div className="u-content v-flex-4">
                  <div className="u-text-style-h2">Customer Stories</div>
                  
                  {/* Spotlight Featured Card */}
                  <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="featured-blog-wrap">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 60 60" fill="none" className="corner-svg">
                            <path d="M60 60L60 -2.14577e-06L30 30L-2.14577e-06 60L60 60Z" fill="white"></path>
                          </svg>
                          <div id="careers-video" className="u-visual">
                            <img 
                              src="https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/69839adc1a021853f651f55d_6971534408788912eb5ba9a2_69714ad2725ae3f3d33d7a68_Getty%2520Images%2520Unsplash%25201.avif" 
                              loading="lazy" 
                              alt="Featured Case Study" 
                              className="u-visual-image" 
                            />
                            <div className="u-visual-bk"></div>
                            <div className="img-overlay"></div>
                          </div>
                          
                          <div className="featured-blog-text">
                            <div className="u-text-style-main">
                              IMA Places a $36M TIV Builder&apos;s Risk for Tapani with Shepherd
                            </div>
                            <div data-wf--button-main--variant="link-white" className="button_main_wrap w-variant-28dbea6b-1838-df17-d642-59092f70edf3" data-button=" " data-trigger="hover focus">
                              <div className="clickable_wrap u-cover-absolute">
                                <Link href="/case-studies/tailored-builders-risk-solution-for-site-roadway-project-in-wa" className="clickable_link w-inline-block">
                                  <span className="clickable_text u-sr-only">LEARN MORE</span>
                                </Link>
                                <button type="button" className="clickable_btn">
                                  <span className="clickable_text u-sr-only">LEARN MORE</span>
                                </button>
                              </div>
                              <div className="button_main_element w-variant-28dbea6b-1838-df17-d642-59092f70edf3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 16" fill="none" className="video-play">
                                  <path d="M11.25 7.79443L2.19575e-07 15.5887L9.00968e-07 0.000204548L11.25 7.79443Z" fill="black"></path>
                                </svg>
                                <div aria-hidden="true" className="button_main_text u-text-style-small">LEARN MORE</div>
                                <div className="button_main_icon u-hide-if-empty"></div>
                              </div>
                            </div>
                          </div>
                          <div className="featured-blog-overlay"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Section 1: Filters & Grid */}
          <section className="u-section u-theme-light">
            <div className="section_spacer">
              <div className="u-container is-hero">
                <div className="u-content v-flex-8">
                  
                  {/* Category filters */}
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

                  {/* Stories Grid */}
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
        </div>

        {/* Section 2: Shared CTA */}
        <CTA 
          title="The future of commercial risk is frictionless. Shepherd is building it."
          description="Learn more about how Shepherd products can bring your next project to life."
          buttonText="Contact us"
          buttonHref="/contact"
        />

        <Footer />
      </div>
    </div>
  );
}
