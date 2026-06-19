"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductsHero } from "@/components/ProductsHero";
import { StateSelector } from "@/components/StateSelector";

import { FoundationSection } from "./components/FoundationSection";
import { SupportSection } from "./components/SupportSection";
import { EligiblePartnerships } from "./components/EligiblePartnerships";
import { SubmissionSection } from "./components/SubmissionSection";
import { DurabilitySection } from "./components/DurabilitySection";
import { CoverageGrid } from "./components/CoverageGrid";
import { CTABanner } from "./components/CTABanner";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BuildersRisk() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  useEffect(() => {
    const navComponent = document.querySelector(".nav_component");
    if (!navComponent) return;

    const showAnim = gsap
      .from(navComponent, {
        yPercent: -100,
        paused: true,
        duration: 0.3,
        ease: "power1.out",
      })
      .progress(1);

    const trigger = ScrollTrigger.create({
      start: "top top",
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
        <Header theme="light" />

        {/* Section #1: Products Hero */}
        <ProductsHero
          title={
            <>
              Builder's <br />
              Risk
            </>
          }
          subtitle="Coverage for materials, work in progress, and capital at risk during construction."
          imageSrc="https://cdn.prod.website-files.com/6941fd8f651ca29cd5bc3597/69690037f2b35d13a5daf8eb_mads-eneqvist-J9jYy9S1zAk-unsplash_1x.webp"
        />

        {/* Section #2: Interactive State Selector */}
        <StateSelector />

        {/* Custom page-specific sections */}
        <div className="product-details-sections">
          <FoundationSection />
          <SupportSection />
          <EligiblePartnerships />
          <SubmissionSection />
          <DurabilitySection />
          <CoverageGrid />
          <CTABanner />
        </div>

        <Footer />
      </div>
    </div>
  );
}
