'use client';

import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CTA } from '@/components/CTA';
import { SavingsHero } from './components/SavingsHero';
import { CreditsGrid } from './components/CreditsGrid';
import { PartnerMarquee } from './components/PartnerMarquee';
import { SavingsVideo } from './components/SavingsVideo';
import { WorkflowSection } from './components/WorkflowSection';
import { FaqSection } from './components/FaqSection';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SavingsPage() {
  const mainRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={mainRef} id="main" className="page_wrap">
      <div data-barba="container" className="page_main">
        <Header />

        <div className="page_content">
          <SavingsHero />
          <CreditsGrid />
          <PartnerMarquee />
          <SavingsVideo />
          <WorkflowSection />
          <FaqSection />

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
