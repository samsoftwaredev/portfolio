import { describe, expect, it } from "vitest";
import { absoluteUrl, cx, yearsOfExperience } from "./utils";

describe("cx", () => {
  it("joins truthy values and drops falsy ones", () => {
    expect(cx("a", false, null, undefined, "b")).toBe("a b");
  });
});

describe("yearsOfExperience", () => {
  it("computes full years from the start year", () => {
    expect(yearsOfExperience(2016, new Date(2026, 5, 1))).toBe(10);
  });
  it("never returns a negative number", () => {
    expect(yearsOfExperience(2030, new Date(2026, 5, 1))).toBe(0);
  });
});

describe("absoluteUrl", () => {
  it("resolves paths against the base with or without trailing slash", () => {
    expect(absoluteUrl("https://a.com", "/x")).toBe("https://a.com/x");
    expect(absoluteUrl("https://a.com/", "x")).toBe("https://a.com/x");
  });
});
