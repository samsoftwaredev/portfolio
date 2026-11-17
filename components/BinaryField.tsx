"use client";

import { useEffect, useRef } from "react";
import {
  createParticle,
  particleCount,
  scrollBoost,
  stepParticle,
  type Particle,
} from "@/lib/binary-field";

/** Decorative canvas of drifting 0s and 1s that speed up while scrolling. */
export default function BinaryField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const parent = canvas.parentElement!;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let raf = 0;
    let last = 0;
    let lastY = window.scrollY;
    let boost = 1;
    let visible = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = particleCount(width, height);
      particles = Array.from({ length: n }, () => createParticle(width, height));
    };

    const frame = (t: number) => {
      raf = 0;
      if (!visible || document.hidden) return;
      const dt = Math.min((t - last) / 1000 || 0.016, 0.05);
      last = t;
      const y = window.scrollY;
      const target = scrollBoost((y - lastY) / dt);
      lastY = y;
      boost += (target - boost) * Math.min(1, dt * 6); // smooth ease

      ctx.clearRect(0, 0, width, height);
      ctx.textBaseline = "top";
      particles = particles.map((p) => {
        const n = stepParticle(p, dt, boost, width, height);
        ctx.font = `${Math.round(9 + n.z * 11)}px ui-monospace, SFMono-Regular, Menlo, monospace`;
        const a = (0.12 + n.z * 0.5) * Math.min(1, 0.7 + boost * 0.08);
        ctx.fillStyle =
          n.hue === "cyan" ? `rgba(34,211,238,${a})` : `rgba(167,139,250,${a})`;
        ctx.fillText(n.ch, n.x, n.y);
        return n;
      });
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (!raf && visible && !document.hidden) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };

    resize();
    start();
    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) start();
    });
    io.observe(parent);
    document.addEventListener("visibilitychange", start);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", start);
    };
  }, []);

  return <canvas ref={ref} className="binary-field" aria-hidden="true" />;
}
