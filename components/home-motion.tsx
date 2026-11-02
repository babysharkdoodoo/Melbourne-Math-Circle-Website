"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function HomeMotion({ children, className = "" }: { children: ReactNode; className?: string }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current || !("IntersectionObserver" in window)) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    const targets = root.current.querySelectorAll<HTMLElement>(
      "h1, h2, [data-motion], .opening-copy > *, .chapter-heading > p, .community-chapter .chapter-heading > div, .intro-text > *, .game-intro > p, .counter-game, .interview-copy > p, .interview-copy > a, .interview-preview, .big-index > a, .home-faq-list > details, .home-volunteering > div, .join-chapter",
    );
    const frameTargets = document.querySelectorAll<HTMLElement>(
      ".mmc-header, .mmc-footer .footer-opening > *, .mmc-footer .footer-columns > *, .mmc-footer .footer-bottom",
    );
    const play = (target: Element, frames: Keyframe[], duration: number, delay = 0) => {
      if (preference.matches || !target.animate) return;
      const animation = target.animate(frames, {
        duration, delay, easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards",
      });
      animations.add(animation);
      animation.onfinish = animation.oncancel = () => animations.delete(animation);
    };
    const observer = new IntersectionObserver((entries) => {
      let order = 0;
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        if (preference.matches) continue;
        const target = entry.target;
        const delay = (order++ % 3) * 35;
        play(target, [
          { opacity: 0.7, transform: "translateY(5px)" },
          { opacity: 1, transform: "translateY(0)" },
        ], 420, delay);
      }
    }, { threshold: 0.08 });
    targets.forEach((target) => {
      if (!target.closest(".people-chapter, [data-no-motion]")) observer.observe(target);
    });
    frameTargets.forEach((target) => observer.observe(target));
    const disclosures = root.current.querySelectorAll("details");
    const openAnswer = (event: Event) => {
      const details = event.currentTarget as HTMLDetailsElement;
      if (!details.open) return;
      const answer = details.querySelector("p");
      if (answer) play(answer, [
        { opacity: 0.7, transform: "translateY(-3px)" },
        { opacity: 1, transform: "translateY(0)" },
      ], 250);
    };
    disclosures.forEach((details) => details.addEventListener("toggle", openAnswer));
    const stopMotion = () => {
      if (preference.matches) animations.forEach((animation) => animation.cancel());
    };
    preference.addEventListener("change", stopMotion);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", stopMotion);
      disclosures.forEach((details) => details.removeEventListener("toggle", openAnswer));
      animations.forEach((animation) => animation.cancel());
    };
  }, []);

  return <div ref={root} className={`mmc-home ${className}`.trim()}>{children}</div>;
}
