"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductsOverviewHero } from "./components/ProductsOverviewHero";
import { CoverageGrid } from "./components/CoverageGrid";
import { DurabilitySection } from "./components/DurabilitySection";
import { SavingsSection } from "./components/SavingsSection";
import { ScrollDropdowns } from "./components/ScrollDropdowns";
import { CTABanner } from "./components/CTABanner";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProductsOverview() {
  const mainRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });
    lenisRef.current = lenis;

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
      lenisRef.current = null;
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

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 992px)", () => {
        const items = gsap.utils.toArray<HTMLElement>(".scroll-dropdown-item");
        const triggers = gsap.utils.toArray<HTMLElement>(
          ".forced-scroll-section-triggers .trigger",
        );

        if (items.length === 0 || triggers.length === 0) return;

        const wrappers = items.map(
          (item) =>
            item.querySelector(".scroll-dropdown-bottom-wrap") as HTMLElement,
        );

        // Hide all bottom content wraps except the first one initially
        wrappers.forEach((wrap, idx) => {
          if (!wrap) return;
          if (idx === 0) {
            gsap.set(wrap, { height: "auto", opacity: 1 });
            items[idx].classList.add("is-active");
          } else {
            gsap.set(wrap, { height: 0, opacity: 0 });
            items[idx].classList.remove("is-active");
          }
        });

        // Set cursor pointer and click navigation on headers
        items.forEach((item, idx) => {
          const header = item.querySelector(
            ".scroll-dropdown-top",
          ) as HTMLElement;
          const trigger = triggers[idx];
          if (header && trigger) {
            header.style.cursor = "pointer";

            const handleClick = () => {
              if (lenisRef.current) {
                lenisRef.current.scrollTo(trigger, {
                  offset: -window.innerHeight * 0.3,
                  duration: 1.2,
                });
              }
            };

            header.addEventListener("click", handleClick);
            (header as any)._cleanup = () =>
              header.removeEventListener("click", handleClick);
          }
        });

        // Create ScrollTrigger for each trigger element
        triggers.forEach((trigger, idx) => {
          ScrollTrigger.create({
            trigger: trigger,
            start: "top 50%",
            end: "bottom 50%",
            onToggle: (self) => {
              if (self.isActive) {
                // Open active item
                const activeWrap = wrappers[idx];
                if (activeWrap) {
                  gsap.to(activeWrap, {
                    height: "auto",
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.out",
                    overwrite: "auto",
                  });
                  items[idx].classList.add("is-active");
                }

                // Collapse other items
                wrappers.forEach((otherWrap, otherIdx) => {
                  if (otherIdx !== idx && otherWrap) {
                    gsap.to(otherWrap, {
                      height: 0,
                      opacity: 0,
                      duration: 0.4,
                      ease: "power2.out",
                      overwrite: "auto",
                    });
                    items[otherIdx].classList.remove("is-active");
                  }
                });
              }
            },
          });
        });
      });
    }, mainRef);

    return () => {
      ctx.revert();
      // Clean up header click listeners
      const items = document.querySelectorAll(".scroll-dropdown-item");
      items.forEach((item) => {
        const header = item.querySelector(".scroll-dropdown-top") as any;
        if (header && header._cleanup) {
          header._cleanup();
        }
      });
    };
  }, []);

  return (
    <div ref={mainRef} id="main" className="page_wrap">
      <div data-barba="container" className="page_main">
        <Header />

        {/* Main Content Sections */}
        <div className="products-page-content">
          <ProductsOverviewHero />
          <CoverageGrid />
          <DurabilitySection />
          <SavingsSection />
          <ScrollDropdowns />
          <CTABanner />
        </div>

        <Footer />
      </div>
    </div>
  );
}
