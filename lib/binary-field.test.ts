import { describe, expect, it } from "vitest";
import { createParticle, particleCount, scrollBoost, stepParticle } from "./binary-field";

const seq = (...vals: number[]) => {
  let i = 0;
  return () => vals[i++ % vals.length];
};

describe("particleCount", () => {
  it("scales with area but stays within sane bounds", () => {
    expect(particleCount(100, 100)).toBe(24);
    expect(particleCount(390, 800)).toBeGreaterThan(24);
    expect(particleCount(4000, 3000)).toBe(110);
  });
});

describe("scrollBoost", () => {
  it("is 1 at rest and grows with velocity (either direction), capped", () => {
    expect(scrollBoost(0)).toBe(1);
    expect(scrollBoost(700)).toBeCloseTo(3);
    expect(scrollBoost(-700)).toBeCloseTo(3);
    expect(scrollBoost(1e9)).toBe(8);
  });
});

describe("createParticle", () => {
  it("creates a binary digit inside the field with depth 0.3–1", () => {
    const p = createParticle(400, 300, seq(0.5, 0.5, 0.9, 0.9, 0.5, 0.5));
    expect(["0", "1"]).toContain(p.ch);
    expect(p.x).toBeGreaterThanOrEqual(0);
    expect(p.x).toBeLessThanOrEqual(400);
    expect(p.z).toBeGreaterThanOrEqual(0.3);
    expect(p.z).toBeLessThanOrEqual(1);
    expect(p.vy).toBeLessThan(0); // drifts upward
  });
});

describe("stepParticle", () => {
  const base = createParticle(400, 300, () => 0.5);

  it("moves up faster when boosted", () => {
    const slow = stepParticle(base, 0.1, 1, 400, 300);
    const fast = stepParticle(base, 0.1, 5, 400, 300);
    expect(fast.y).toBeLessThan(slow.y);
  });

  it("wraps from the top back to the bottom", () => {
    const p = stepParticle({ ...base, y: -19 }, 1, 1, 400, 300);
    expect(p.y).toBeGreaterThan(300);
  });

  it("flips its digit when the timer expires", () => {
    const p = stepParticle({ ...base, ch: "0", flip: 0.01 }, 0.1, 1, 400, 300, () => 0.5);
    expect(p.ch).toBe("1");
    expect(p.flip).toBeGreaterThan(0);
  });

  it("keeps x within the field", () => {
    const p = stepParticle({ ...base, x: 0.01 }, 5, 1, 400, 300);
    expect(p.x).toBeGreaterThanOrEqual(0);
    expect(p.x).toBeLessThan(400);
  });
});
