"use client";

import { useEffect, useRef } from "react";
import { progress } from "@/lib/scroll";

/**
 * Drives scroll-linked visuals with one passive listener + rAF:
 *  - page progress bar
 *  - `--p` (0→1) on the hero scene so the machine drifts and the windows fan out
 *  - pauses hero animations once the hero is off-screen
 */
export default function ScrollEffects() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = document.querySelector<HTMLElement>("[data-scene]");
    const hero = document.querySelector<HTMLElement>("[data-hero]");
    let raf = 0;

    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) {
        bar.current.style.transform = `scaleX(${progress(y, max).toFixed(4)})`;
      }
      if (hero && scene && !reduced) {
        const p = progress(y, hero.offsetHeight * 0.9);
        scene.style.setProperty("--p", p.toFixed(3));
        hero.toggleAttribute("data-paused", p >= 1);
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="progress" aria-hidden="true">
      <div ref={bar} className="progress__bar" />
    </div>
  );
}
