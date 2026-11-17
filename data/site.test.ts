import { describe, expect, it } from "vitest";
import { AWARDS, PROJECTS, SERVICES, SITE, SOCIALS } from "./site";

const isHttps = (u: string) => new URL(u).protocol === "https:";

describe("site content", () => {
  it("keeps the meta description within Google's snippet-friendly length", () => {
    expect(SITE.description.length).toBeGreaterThan(70);
    expect(SITE.description.length).toBeLessThanOrEqual(160);
  });

  it("keeps the title concise enough to avoid truncation", () => {
    expect(SITE.title.length).toBeLessThanOrEqual(65);
  });

  it("includes inripaintwall.com as a project", () => {
    const inri = PROJECTS.find((p) => p.websiteURL?.includes("inripaintwall.com"));
    expect(inri).toBeDefined();
    expect(inri?.title).toBe("INRI Paint & Wall");
  });

  it("has unique project slugs and only https links", () => {
    const slugs = PROJECTS.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const p of PROJECTS) {
      for (const u of [p.websiteURL, p.repositoryURL, p.videoURL]) {
        if (u) expect(isHttps(u)).toBe(true);
      }
      if (p.image) expect(p.image.alt.length).toBeGreaterThan(10);
    }
  });

  it("has valid external links for awards and socials", () => {
    for (const a of AWARDS) expect(isHttps(a.href)).toBe(true);
    for (const s of SOCIALS) expect(isHttps(s.url)).toBe(true);
  });

  it("defines an icon for every service", () => {
    expect(SERVICES.every((s) => s.icon)).toBe(true);
  });
});
