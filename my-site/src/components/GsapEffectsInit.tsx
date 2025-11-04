"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GsapEffectsInit() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReducedMotion.matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const parallaxElements = gsap.utils.toArray<HTMLElement>("[data-parallax]");
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.dataset.parallaxSpeed ?? "0.15");
        gsap.fromTo(
          element,
          { yPercent: speed * 40 },
          {
            yPercent: speed * -40,
            ease: "power2.out",
            overwrite: true,
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      const revealElements = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      revealElements.forEach((element) => {
        gsap.fromTo(
          element,
          { y: 28, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: "power3.out",
            overwrite: true,
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              once: true,
            },
          }
        );
      });
    });

    const handleRefresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleRefresh);

    return () => {
      window.removeEventListener("resize", handleRefresh);
      ctx.revert();
    };
  }, []);

  return null;
}
