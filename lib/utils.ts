/** Join truthy class names. */
export const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ");

/** Whole years between `startYear` and `now` (never negative). */
export const yearsOfExperience = (
  startYear: number,
  now: Date = new Date(),
): number => Math.max(0, now.getFullYear() - startYear);

/** Build an absolute URL for a site-relative path. */
export const absoluteUrl = (base: string, path = "/"): string =>
  new URL(path, base.endsWith("/") ? base : `${base}/`).toString();
