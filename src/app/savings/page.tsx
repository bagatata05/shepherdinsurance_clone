'use client';

import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CTA } from '@/components/CTA';
import Link from 'next/link';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface FAQItem {
  question: string;
  answerHtml: React.ReactNode;
}

export default function SavingsPage() {
  const mainRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

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

  const handleFaqToggle = (index: number) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  };

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
      question: "What if I use a different technology product that isn’t listed?",
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

  const logoUrls = [
    "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/6971273c1f2bce38892affad_savings-logo-2.avif",
    "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/69712732d29602f5fc804db9_savings-logo.avif",
    "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/697105729521e60b5aac736b_image%2073.avif",
    "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/69710566e851f19543ddaaf4_image%2058.avif",
    "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/697105551032851fa2e1c146_image%2056.avif",
    "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/6971054d8ba5ac912910e8f9_image%2055.avif",
    "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/697105402dfba1d723393811_image%2054.avif",
    "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/69710534e5ab5e4726a8f9c1_image%2052.avif",
    "https://cdn.prod.website-files.com/6958565641ae3ff710efe50b/697105264d5c530348485837_image%2053.avif",
  ];

  return (
    <div ref={mainRef} id="main" className="page_wrap">
      <div data-barba="container" className="page_main">
        <Header />

        <div className="page_content">
          {/* Section 0: Hero */}
          <section className="u-section u-theme-brand">
            <div className="pages-hero-grid u-grid-custom">
              <div className="hero-grid-left">
                <div className="hero-grid-left-max">
                  <div className="section_spacer is-pages-hero">
                    <div className="u-container is-hero">
                      <div className="u-content v-flex-8">
                        <div className="content-flex v-flex-8 u-justify-content-between">
                          <div className="pages-heading-flex v-flex-6">
                            <h1 className="pages-hero-heading u-text-style-h2">
                              Savings designed to <span className="txt-icon-arrow"> </span> reward innovation.
                            </h1>
                            <div className="hero-p u-text-style-main">
                              An entirely new kind of partnership where the insurer, broker, and client work together to reduce risk and share the upside.
                            </div>
                          </div>
                          <div className="u-button-wrapper u-margin-top-0">
                            <div className="u-display-contents">
                              <div data-wf--button-main--variant="primary" className="button_main_wrap" data-button=" " data-trigger="hover focus">
                                <div className="clickable_wrap u-cover-absolute">
                                  <Link href="/contact" className="clickable_link w-inline-block">
                                    <span className="clickable_text u-sr-only">Contact us</span>
                                  </Link>
                                </div>
                                <div className="button_main_element">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 16" fill="none" className="video-play">
                                    <path d="M11.25 7.79443L2.19575e-07 15.5887L9.00968e-07 0.000204548L11.25 7.79443Z" fill="black"></path>
                                  </svg>
                                  <div aria-hidden="true" className="button_main_text u-text-style-small">Contact us</div>
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
              <div className="hero-grid-visual">
                <div id="careers-video" className="u-visual">
                  <img 
                    src="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/696560b0bdce86e38f97904a_60%20Walk%20on%20Site%20with%20Crane.webp" 
                    loading="lazy" 
                    alt="Savings hero image" 
                    className="u-visual-image"
                  />
                  <div className="u-visual-bk"></div>
                  <div className="img-overlay"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 1: Smarter solutions cards */}
          <section className="u-section u-theme-dark">
            <div className="u-visual">
              <img 
                src="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69584fde9bb5bf976273101a_Rectangle%20194.webp" 
                loading="lazy" 
                alt="Background details" 
                className="u-visual-image"
              />
              <div style={{ opacity: 0.4 }} className="u-visual-overlay"></div>
            </div>
            <div className="section_spacer">
              <div className="u-container">
                <div className="full-img-section">
                  <div className="u-content v-flex-img-section">
                    <div className="section-header-grid u-grid-custom">
                      <div className="section-header-title-col u-column-span-2">
                        <div className="heading-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 17 34" fill="none">
                            <path d="M16.9706 16.9705L2.07015e-05 -0.00010423L1.85557e-05 16.9705L1.641e-05 33.941L16.9706 16.9705Z" fill="#DA43E7"></path>
                          </svg>
                        </div>
                        <h1 className="section-heading u-text-style-h3">
                          Smarter solutions that reward you back.
                        </h1>
                      </div>
                      <div>
                        <div className="u-text-style-main">
                          Shepherd Savings turns real-world insight into momentum, empowering smarter decisions and stronger outcomes.
                        </div>
                      </div>
                    </div>

                    <div className="saving-outline-grid u-grid-custom" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                      <div className="outline-card" style={{ padding: '2rem 1.5rem', borderLeft: '1px solid rgba(255,255,255,0.2)' }}>
                        <div className="grid-title-txt u-text-style-h4" style={{ fontSize: '20px', fontWeight: 600, marginBottom: '1rem' }}>
                          Up to 25% lower premiums
                        </div>
                        <div className="grid-title-p u-text-style-main" style={{ opacity: 0.8 }}>
                          Automatic and upfront credits applied to practice or project (CIP) policies with target metrics to increase premium credits.
                        </div>
                      </div>
                      
                      <div className="outline-card noleft-t" style={{ padding: '2rem 1.5rem', borderLeft: '1px solid rgba(255,255,255,0.2)' }}>
                        <div className="grid-title-txt u-text-style-h4" style={{ fontSize: '20px', fontWeight: 600, marginBottom: '1rem' }}>
                          Multi-year programs
                        </div>
                        <div className="grid-title-p u-text-style-main" style={{ opacity: 0.8 }}>
                          Rate renewal guarantees for multi-year programs dependent on technology utilization.
                        </div>
                      </div>
                      
                      <div className="outline-card" style={{ padding: '2rem 1.5rem', borderLeft: '1px solid rgba(255,255,255,0.2)' }}>
                        <div className="grid-title-txt u-text-style-h4" style={{ fontSize: '20px', fontWeight: 600, marginBottom: '1rem' }}>
                          Analysis &amp; feedback
                        </div>
                        <div className="grid-title-p u-text-style-main" style={{ opacity: 0.8 }}>
                          Monthly reporting with recommendations for improving tech usage to reduce claims.
                        </div>
                      </div>
                      
                      <div className="outline-card" style={{ padding: '2rem 1.5rem', borderLeft: '1px solid rgba(255,255,255,0.2)' }}>
                        <div className="grid-title-txt u-text-style-h4" style={{ fontSize: '20px', fontWeight: 600, marginBottom: '1rem' }}>
                          Dedicated savings specialists
                        </div>
                        <div className="grid-title-p u-text-style-main" style={{ opacity: 0.8 }}>
                          Direct access to dedicated Savings specialists with additional support for unique program requests or project requirements.
                        </div>
                      </div>
                      
                      <div className="outline-card" style={{ padding: '2rem 1.5rem', borderLeft: '1px solid rgba(255,255,255,0.2)' }}>
                        <div className="grid-title-txt u-text-style-h4" style={{ fontSize: '20px', fontWeight: 600, marginBottom: '1rem' }}>
                          Effortless participation
                        </div>
                        <div className="grid-title-p u-text-style-main" style={{ opacity: 0.8 }}>
                          Simple opt-in, clear impact, no downside. Customers execute data authorization agreements.
                        </div>
                      </div>
                      
                      <div className="outline-card" style={{ padding: '2rem 1.5rem', borderLeft: '1px solid rgba(255,255,255,0.2)' }}>
                        <div className="grid-title-txt u-text-style-h4" style={{ fontSize: '20px', fontWeight: 600, marginBottom: '1rem' }}>
                          Initial utilization report and quote comparisons
                        </div>
                        <div className="grid-title-p u-text-style-main" style={{ opacity: 0.8 }}>
                          We share analysis along with data used in the underwriting process.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Logo Marquee Ticker */}
          <section className="u-section u-theme-light" style={{ overflow: 'hidden', padding: '4rem 0' }}>
            <div className="u-container">
              <div className="u-content v-flex-8">
                <div className="content-flex v-flex-6">
                  <div className="centered-title-wrap" style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 className="section-heading u-text-style-h3">Smarter solutions that reward you back.</h1>
                  </div>
                  
                  <div className="ticker-wrap is-offices" style={{ display: 'flex', overflow: 'hidden', gap: '4rem', width: '100%' }}>
                    {/* First rolling list */}
                    <div 
                      className="ticker-coll-wrap is-offices" 
                      style={{ 
                        display: 'flex', 
                        gap: '4rem', 
                        flexShrink: 0,
                        animation: 'scroll 50s linear infinite',
                      }}
                    >
                      {logoUrls.map((url, idx) => (
                        <div key={idx} className="ticker-coll-item is-offices" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <img src={url} loading="lazy" alt="Partner Logo" className="solutions-logos" style={{ height: '35px', objectFit: 'contain' }} />
                        </div>
                      ))}
                    </div>
                    {/* Second rolling list (exact duplicate for infinite scrolling) */}
                    <div 
                      className="ticker-coll-wrap is-offices" 
                      style={{ 
                        display: 'flex', 
                        gap: '4rem', 
                        flexShrink: 0,
                        animation: 'scroll 50s linear infinite',
                      }}
                      aria-hidden="true"
                    >
                      {logoUrls.map((url, idx) => (
                        <div key={`dup-${idx}`} className="ticker-coll-item is-offices" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <img src={url} loading="lazy" alt="Partner Logo" className="solutions-logos" style={{ height: '35px', objectFit: 'contain' }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Atlanta Case Study Video */}
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

          {/* Section 4: How it works */}
          <section className="u-section u-theme-light">
            <div className="section_spacer">
              <div className="u-container">
                <div className="u-content v-flex-8">
                  <div className="content-flex v-flex-8">
                    <div className="section-header-grid u-grid-custom">
                      <div className="section-header-title-col u-column-span-2">
                        <div className="heading-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 17 34" fill="none">
                            <path d="M16.9706 16.9705L2.07015e-05 -0.00010423L1.85557e-05 16.9705L1.641e-05 33.941L16.9706 16.9705Z" fill="#DA43E7"></path>
                          </svg>
                        </div>
                        <h1 className="section-heading u-text-style-h3">How Shepherd Savings works</h1>
                      </div>
                      <div>
                        <div className="u-text-style-main">
                          Receive regular insight, shared benchmarks, and continued alignment as expectations grow and performance evolves.
                        </div>
                      </div>
                    </div>

                    <div className="card-grid-3 u-grid-custom" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                      <div className="saving-card-wrap">
                        <div className="savings-card" style={{ border: '1px solid #e0e0e0', padding: '2.5rem 2rem', position: 'relative', minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fafafa' }}>
                          <div className="u-text-style-large" style={{ fontSize: '20px', fontWeight: 600, lineHeight: 1.3 }}>
                            1<br />Review Shepherd <br />Savings quote
                          </div>
                          <div className="savings-card-main-txt" style={{ marginTop: '1.5rem' }}>
                            <div className="u-text-style-main" style={{ opacity: 0.8 }}>
                              Premium savings are calculated upfront.
                            </div>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 60 60" fill="none" className="corner-svg" style={{ position: 'absolute', bottom: 0, right: 0, width: '30px', height: '30px' }}>
                            <path d="M60 60L60 -2.14577e-06L30 30L-2.14577e-06 60L60 60Z" fill="white"></path>
                          </svg>
                        </div>
                      </div>

                      <div className="saving-card-wrap">
                        <div className="savings-card" style={{ border: '1px solid #e0e0e0', padding: '2.5rem 2rem', position: 'relative', minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fafafa' }}>
                          <div className="u-text-style-large" style={{ fontSize: '20px', fontWeight: 600, lineHeight: 1.3 }}>
                            2<br />Bind your program with Shepherd
                          </div>
                          <div className="savings-card-main-txt" style={{ marginTop: '1.5rem' }}>
                            <div className="u-text-style-main" style={{ opacity: 0.8 }}>
                              Purchase your policy and activate your coverage.
                            </div>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 60 60" fill="none" className="corner-svg" style={{ position: 'absolute', bottom: 0, right: 0, width: '30px', height: '30px' }}>
                            <path d="M60 60L60 -2.14577e-06L30 30L-2.14577e-06 60L60 60Z" fill="white"></path>
                          </svg>
                        </div>
                      </div>

                      <div className="saving-card-wrap">
                        <div className="savings-card" style={{ border: '1px solid #e0e0e0', padding: '2.5rem 2rem', position: 'relative', minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fafafa' }}>
                          <div className="u-text-style-large" style={{ fontSize: '20px', fontWeight: 600, lineHeight: 1.3 }}>
                            3<br />Enroll in Shepherd Savings data Sharing
                          </div>
                          <div className="savings-card-main-txt" style={{ marginTop: '1.5rem' }}>
                            <div className="u-text-style-main" style={{ opacity: 0.8 }}>
                              Onboard as new or leverage existing technology usage.
                            </div>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 60 60" fill="none" className="corner-svg" style={{ position: 'absolute', bottom: 0, right: 0, width: '30px', height: '30px' }}>
                            <path d="M60 60L60 -2.14577e-06L30 30L-2.14577e-06 60L60 60Z" fill="white"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: FAQ Accordion */}
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

          {/* Section 6: Shared CTA */}
          <CTA 
            title="The future of commercial risk is frictionless. Shepherd is building it."
            description="Learn more about how Shepherd products can bring your next project to life."
            buttonText="Contact us"
            buttonHref="/contact"
          />

          <Footer />
        </div>
      </div>
    </div>
  );
}
