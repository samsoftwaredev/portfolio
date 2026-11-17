import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, render } from "@testing-library/react";
import ScrollEffects from "./ScrollEffects";

const setScroll = (y: number) => {
  Object.defineProperty(window, "scrollY", { value: y, configurable: true });
  window.dispatchEvent(new Event("scroll"));
};

describe("ScrollEffects", () => {
  beforeEach(() => {
    vi.stubGlobal("matchMedia", (q: string) => ({ matches: false, media: q }));
    vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => {
      cb(0);
      return 1;
    });
    document.body.innerHTML = '<section data-hero></section><div data-scene></div>';
    Object.defineProperty(document.documentElement, "scrollHeight", { value: 2000, configurable: true });
    Object.defineProperty(window, "innerHeight", { value: 1000, configurable: true });
    Object.defineProperty(HTMLElement.prototype, "offsetHeight", { value: 500, configurable: true });
  });
  afterEach(() => vi.unstubAllGlobals());

  it("updates progress bar and scene variable on scroll", () => {
    const { container } = render(<ScrollEffects />, { container: document.body.appendChild(document.createElement("div")) });
    const bar = container.querySelector<HTMLElement>(".progress__bar")!;
    act(() => setScroll(500));
    expect(bar.style.transform).toBe("scaleX(0.5)");
    const scene = document.querySelector<HTMLElement>("[data-scene]")!;
    expect(scene.style.getPropertyValue("--p")).toBe("1.000");
    expect(document.querySelector("[data-hero]")).toHaveAttribute("data-paused");
  });

  it("is hidden from assistive tech", () => {
    const { container } = render(<ScrollEffects />, { container: document.body.appendChild(document.createElement("div")) });
    expect(container.querySelector(".progress")).toHaveAttribute("aria-hidden", "true");
  });

  it("skips the scene animation for reduced-motion users", () => {
    vi.stubGlobal("matchMedia", (q: string) => ({ matches: true, media: q }));
    render(<ScrollEffects />, { container: document.body.appendChild(document.createElement("div")) });
    act(() => setScroll(500));
    expect(document.querySelector<HTMLElement>("[data-scene]")!.style.getPropertyValue("--p")).toBe("");
  });
});
