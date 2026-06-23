"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { DurabilitySection } from "@/components/DurabilitySection";
import { IndustriesHero } from "./components/IndustriesHero";
import { SolutionsGrid } from "./components/SolutionsGrid";
import { SavingsPromo } from "./components/SavingsPromo";
import { ScrollDropdowns } from "./components/ScrollDropdowns";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function IndustriesOverview() {
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

        if (items.length === 0) return;

        const wrappers = items.map(
          (item) =>
            item.querySelector(".scroll-dropdown-bottom-wrap") as HTMLElement,
        );

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

        items.forEach((item, idx) => {
          const header = item.querySelector(
            ".scroll-dropdown-top",
          ) as HTMLElement;
          const trigger = triggers[idx];
          if (header) {
            header.style.cursor = "pointer";

            const handleClick = () => {
              if (trigger && lenisRef.current) {
                lenisRef.current.scrollTo(trigger, {
                  offset: -window.innerHeight * 0.3,
                  duration: 1.2,
                });
              } else {
                wrappers.forEach((w, i) => {
                  if (!w) return;
                  if (i === idx) {
                    gsap.to(w, {
                      height: "auto",
                      opacity: 1,
                      duration: 0.4,
                      ease: "power2.out",
                      overwrite: "auto",
                    });
                    items[i].classList.add("is-active");
                  } else {
                    gsap.to(w, {
                      height: 0,
                      opacity: 0,
                      duration: 0.4,
                      ease: "power2.out",
                      overwrite: "auto",
                    });
                    items[i].classList.remove("is-active");
                  }
                });
              }
            };

            header.addEventListener("click", handleClick);
            (header as any)._cleanup = () =>
              header.removeEventListener("click", handleClick);
          }
        });

        if (triggers.length > 0) {
          triggers.forEach((trigger, idx) => {
            ScrollTrigger.create({
              trigger: trigger,
              start: "top 50%",
              end: "bottom 50%",
              onToggle: (self) => {
                if (self.isActive) {
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
        }
      });
    }, mainRef);

    return () => {
      ctx.revert();

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

        <div className="industries-page-content">
          <IndustriesHero />
          <SolutionsGrid />
          <SavingsPromo />
          <DurabilitySection
            theme="dark"
            heading="Built for durability and consistency."
            description="Technology and underwriting move together to remove friction, unlock speed, and increase certainty."
            gifSuffix="-white"
          />
          <ScrollDropdowns />
          <CTA
            title="Turn risk management into a competitive advantage."
            description="Join the hundreds of builders who have saved with Shepherd."
          />
        </div>

        <Footer />
      </div>
    </div>
  );
}
