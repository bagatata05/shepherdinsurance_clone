'use client';

import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Import components
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Underwriting } from '@/components/Underwriting';
import { Industries } from '@/components/Industries';
import { Coverage } from '@/components/Coverage';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  useGSAP(() => {
    // Header show/hide on scroll direction
    const navComponent = document.querySelector('.nav_component');
    if (!navComponent) return;

    // Create header show/hide animation timeline
    const showAnim = gsap.from(navComponent, {
      yPercent: -100,
      paused: true,
      duration: 0.3,
      ease: 'power1.out',
    }).progress(1); // Set to finished state by default (header visible)

    ScrollTrigger.create({
      start: 'top top',
      end: 99999,
      onUpdate: (self) => {
        // self.direction matches 1 for scroll down (hide), -1 for scroll up (show)
        if (self.direction === -1) {
          showAnim.play();
        } else {
          showAnim.reverse();
        }
      },
    });
  }, { scope: mainRef });

  return (
    <div ref={mainRef} id="main" className="page_wrap">
      <div data-barba="container" className="page_main">
        <Header />
        <Hero />
        <Underwriting />
        <Industries />
        <Coverage />
        <CTA />
        <Footer />
      </div>
    </div>
  );

}
