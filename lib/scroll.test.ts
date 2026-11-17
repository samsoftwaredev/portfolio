import { describe, expect, it } from "vitest";
import { clamp01, progress } from "./scroll";

describe("scroll helpers", () => {
  it("clamps to 0–1", () => {
    expect(clamp01(-3)).toBe(0);
    expect(clamp01(0.4)).toBe(0.4);
    expect(clamp01(9)).toBe(1);
  });
  it("computes progress over a distance", () => {
    expect(progress(50, 200)).toBe(0.25);
    expect(progress(500, 200)).toBe(1);
    expect(progress(10, 0)).toBe(0);
  });
});
