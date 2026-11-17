export const clamp01 = (n: number): number => Math.min(1, Math.max(0, n));

/** 0 → 1 as `scrollY` travels `distance` px. */
export const progress = (scrollY: number, distance: number): number =>
  distance <= 0 ? 0 : clamp01(scrollY / distance);
