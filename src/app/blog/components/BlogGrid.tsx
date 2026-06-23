'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowPinkRight, CornerSvg } from '@/components/icons';

interface BlogPost {
  title: string;
  slug: string;
  categories: string[];
  description: string;
  authorName: string;
  authorRole: string;
  publishDate: string;
  imageUrl: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    title: "The case for autonomous underwriting",
    slug: "the-case-for-autonomous-underwriting",
    categories: ["Insurance", "Company Announcements", "Engineering & Product"],
    description: "Automation asks: how do we make this faster? Autonomy asks: what authority has the system earned?",
    authorName: "Justin Levine",
    authorRole: "Co-Founder & CEO",
    publishDate: "April 8, 2026",
    imageUrl: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/69799bd50af391cce8bab645_image%2071.png"
  },
  {
    title: "The Evolution of Shepherd's Rules Engine",
    slug: "the-evolution-of-shepherds-rules-engine",
    categories: ["Engineering & Product"],
    description: "Inside Shepherd's Generative Rules Engine.",
    authorName: "Sierra Costanza",
    authorRole: "Software Engineer",
    publishDate: "April 2, 2026",
    imageUrl: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/696fc6b644b48b1a96236c60_Image%20Compressor%20dsc3088.avif"
  },
  {
    title: "Axios: Construction insurtech Shepherd raises $42M",
    slug: "axios-series-b",
    categories: ["Press"],
    description: "Infrastructure spending tied to AI is creating new demand for faster underwriting.",
    authorName: "Shepherd Press",
    authorRole: "Press Relations",
    publishDate: "March 26, 2026",
    imageUrl: "https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69585a2b266b23c64660b9ce_image%2071.webp"
  },
  {
    title: "Behind Our Series B: The Road to Autonomous Underwriting",
    slug: "the-road-to-autonomous-underwriting",
    categories: ["Engineering & Product"],
    description: "Our vision for fully agentic underwriting and the road to get there.",
    authorName: "Mo Mahallawy",
    authorRole: "Co-Founder & CTO",
    publishDate: "March 24, 2026",
    imageUrl: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/6967f936114b916c488c9436_dsc0483-2.avif"
  },
  {
    title: "Behind Our Series B: AI's Physical Layer, and Why We Just Raised $42M to Insure It",
    slug: "behind-our-42m-series-b",
    categories: ["Company Announcements"],
    description: "Read more from Shepherd's CEO about what's behind our $42M Series B led by Intact.",
    authorName: "Justin Levine",
    authorRole: "Co-Founder & CEO",
    publishDate: "March 24, 2026",
    imageUrl: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/69799bd50af391cce8bab645_image%2071.png"
  },
  {
    title: "Designing Nova: Shepherd's AI Engine",
    slug: "designing-nova-shepherds-ai-engine",
    categories: ["Engineering & Product"],
    description: "How we designed our custom AI engine to support real-time underwriting decisions.",
    authorName: "Esme Nava",
    authorRole: "Software Engineer",
    publishDate: "March 18, 2026",
    imageUrl: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/696fc960f5b147934607ac50_dsc8755.avif"
  },
  {
    title: "Nova, Shepherd's AI Assistant",
    slug: "nova-shepherds-ai-assistant",
    categories: ["Engineering & Product"],
    description: "How Shepherd scales underwriting with a bespoke AI assistant named Nova.",
    authorName: "Dmitry Zolotaryov",
    authorRole: "Software Engineer",
    publishDate: "March 10, 2026",
    imageUrl: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/69b076143874b796e6fdde2b_1737067314216-1.avif"
  },
  {
    title: "Building the Bloomberg Terminal for Commercial Insurance",
    slug: "building-the-bloomberg-terminal-for-commercial-insurance",
    categories: ["Engineering & Product"],
    description: "Most insurers rent their operating system. We built ours and turned it into a Bloomberg Terminal for commercial risk.",
    authorName: "Danil Kolesnikov",
    authorRole: "Founding Engineer",
    publishDate: "February 19, 2026",
    imageUrl: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/696fcb08f107f90e11408704_dsc8107-2-1.avif"
  },
  {
    title: "Your Evals Don't Matter",
    slug: "your-evals-dont-matter",
    categories: ["Engineering & Product"],
    description: "Why offline evaluation is a false promise for production AI systems.",
    authorName: "Prajwal Nellogi",
    authorRole: "Software Engineer",
    publishDate: "February 12, 2026",
    imageUrl: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/696fc2f668aae0a1714ecf3e_a7309272.avif"
  },
  {
    title: "Efficiency Is a Dead End",
    slug: "efficiency-is-a-dead-end",
    categories: ["Engineering & Product"],
    description: "Why autonomy is the real promise of AI at work.",
    authorName: "Avi Banerjee",
    authorRole: "Founding Engineer",
    publishDate: "February 10, 2026",
    imageUrl: "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/698b5f669d99dbd3ff2d4328_DSC08941.avif"
  }
];

const FILTER_CATEGORIES = [
  "Company Announcements",
  "Insurance",
  "Engineering & Product",
  "Press"
];

export const BlogGrid: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredPosts = BLOG_POSTS
    .filter(post => {
      if (selectedCategories.length === 0) return true;
      return post.categories.some(cat => selectedCategories.includes(cat));
    })
    .filter(post => {
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query)
      );
    });

  return (
    <section className="u-section u-theme-light">
      <div className="section_spacer">
        <div className="u-container is-hero">
          <div className="u-content v-flex-8">

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="u-text-style-small"
                style={{
                  flex: '1 1 280px',
                  padding: '0.75rem 1rem',
                  border: '1px solid rgba(0,0,0,0.15)',
                  borderRadius: '4px',
                  background: 'transparent',
                  outline: 'none',
                  fontFamily: 'inherit',
                }}
              />

              <div className="w-form" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div className="w-dyn-list">
                  <div role="list" className="collection-list w-dyn-items" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
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
            </div>

            <div className="w-dyn-list">
              {filteredPosts.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '4rem 0', opacity: 0.6 }}>
                  No posts found matching the selected filters.
                </div>
              ) : (
                <div className="blog-list u-grid-custom w-dyn-items">
                  {filteredPosts.map((post, idx) => {
                    const isSpanned = (idx % 7) === 0;
                    return (
                      <div
                        key={idx}
                        role="listitem"
                        className="blog-item w-dyn-item"
                        style={{
                          gridColumn: isSpanned ? 'span 2' : 'auto'
                        }}
                      >
                        <div className="cta-card-flex v-flex-3">

                          <div className="blog-clickable">
                            <Link href={`/blog/${post.slug}`} className="blog-link-abs w-inline-block"></Link>
                          </div>

                          <div className="blog-thumb w-inline-block hov-img" style={{ aspectRatio: isSpanned ? '21/10' : '1' }}>
                            <CornerSvg className="corner-svg" />
                            <img src={post.imageUrl} loading="lazy" alt={post.title} className="img-abs" />
                            <div className="img-overlay"></div>
                          </div>

                          <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between', zIndex: 2, pointerEvents: 'none' }}>
                            <div>
                              <div className="blog-category-flex" style={{ pointerEvents: 'auto' }}>
                                <div className="category-icon">
                                  <ArrowPinkRight className="svg" />
                                </div>
                                <div className="w-dyn-list">
                                  <div role="list" className="tags-list w-dyn-items">
                                    {post.categories.map((cat, catIdx) => (
                                      <div key={catIdx} role="listitem" className="tags-item w-dyn-item">
                                        <div className="u-text-style-small">{cat.toUpperCase()}</div>
                                        <div className="u-text-style-small coma">,</div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              <div className="u-text-style-h4" style={{ fontSize: '20px', fontWeight: 600, lineHeight: 1.3, color: '#1a1a1a', marginBottom: '0.5rem' }}>
                                {post.title}
                              </div>

                              <div className="u-text-style-main" style={{ fontSize: '14px', lineHeight: 1.4, opacity: 0.8, marginBottom: '2rem' }}>
                                {post.description}
                              </div>
                            </div>

                            {isSpanned && post.authorName !== "Shepherd Press" && (
                              <div className="blog-author" style={{ pointerEvents: 'auto' }}>
                                <img src={post.imageUrl} loading="lazy" alt={post.authorName} className="testimonial-img" />
                                <div className="v-flex-1">
                                  <div className="u-text-style-small" style={{ fontSize: '12px', fontWeight: 600 }}>{post.authorName}</div>
                                  <div className="u-text-style-small u-color-faded" style={{ fontSize: '11px', opacity: 0.6 }}>{post.authorRole}</div>
                                  <div className="u-text-style-small u-color-faded" style={{ fontSize: '11px', opacity: 0.6 }}>{post.publishDate}</div>
                                </div>
                              </div>
                            )}

                            <div data-wf--button-main--variant="link" className="button_main_wrap w-variant-625d5df4-ad91-f7dc-9e2f-2e69f3fd7400" data-button=" " data-trigger="hover focus" style={{ pointerEvents: 'auto' }}>
                              <div className="clickable_wrap u-cover-absolute">
                                <Link href={`/blog/${post.slug}`} className="clickable_link w-inline-block">
                                  <span className="clickable_text u-sr-only">READ</span>
                                </Link>
                              </div>
                              <div className="button_main_element w-variant-625d5df4-ad91-f7dc-9e2f-2e69f3fd7400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 16" fill="none" className="video-play">
                                  <path d="M11.25 7.79443L2.19575e-07 15.5887L9.00968e-07 0.000204548L11.25 7.79443Z" fill="black"></path>
                                </svg>
                                <div aria-hidden="true" className="button_main_text u-text-style-small">READ</div>
                                <div className="button_main_icon u-hide-if-empty"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
