export type Particle = {
  x: number;
  y: number;
  /** depth 0.3 (far) … 1 (near): drives size, speed and opacity */
  z: number;
  ch: "0" | "1";
  vy: number;
  phase: number;
  /** seconds until the digit flips */
  flip: number;
  hue: "violet" | "cyan";
};

type Rand = () => number;

export const particleCount = (width: number, height: number): number =>
  Math.round(Math.min(110, Math.max(24, (width * height) / 9000)));

/** Extra speed multiplier from scroll velocity (px/s). Always >= 1. */
export const scrollBoost = (velocity: number): number =>
  1 + Math.min(Math.abs(velocity) / 350, 7);

export function createParticle(
  width: number,
  height: number,
  rand: Rand = Math.random,
): Particle {
  const z = 0.3 + rand() * 0.7;
  return {
    x: rand() * width,
    y: rand() * height,
    z,
    ch: rand() > 0.5 ? "1" : "0",
    vy: -(12 + rand() * 28) * z,
    phase: rand() * Math.PI * 2,
    flip: 0.4 + rand() * 1.8,
    hue: rand() > 0.72 ? "cyan" : "violet",
  };
}

/** Advance a particle by `dt` seconds. Wraps vertically, flips digits. */
export function stepParticle(
  p: Particle,
  dt: number,
  boost: number,
  width: number,
  height: number,
  rand: Rand = Math.random,
): Particle {
  let y = p.y + p.vy * boost * dt;
  if (y < -20) y = height + 10;
  if (y > height + 20) y = -10;
  let { flip, ch } = p;
  flip -= dt;
  if (flip <= 0) {
    ch = ch === "0" ? "1" : "0";
    flip = 0.4 + rand() * 1.8;
  }
  const phase = p.phase + dt * 0.8;
  const x = p.x + Math.sin(phase) * 6 * p.z * dt;
  return { ...p, x: (x + width) % width, y, ch, flip, phase };
}
