import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HeroScene from "./HeroScene";
import { PROJECTS } from "@/data/site";

describe("HeroScene", () => {
  it("is purely decorative and hidden from assistive tech", () => {
    const { container } = render(<HeroScene />);
    const scene = container.querySelector("[data-scene]")!;
    expect(scene).toHaveAttribute("aria-hidden", "true");
  });

  it("renders one floating window per project, in order", () => {
    const { container } = render(<HeroScene />);
    const wins = container.querySelectorAll(".win");
    expect(wins).toHaveLength(PROJECTS.length);
    wins.forEach((w, i) => {
      expect(w).toHaveAttribute("data-i", String(i));
      expect(w.textContent).toContain(PROJECTS[i].title);
    });
  });

  it("uses empty alt text for decorative screenshots", () => {
    const { container } = render(<HeroScene />);
    container.querySelectorAll("img").forEach((img) => expect(img).toHaveAttribute("alt", ""));
  });

  it("builds the 3D computer with six faces per box", () => {
    const { container } = render(<HeroScene />);
    expect(container.querySelectorAll(".box")).toHaveLength(2);
    expect(container.querySelectorAll(".box .face")).toHaveLength(12);
  });
});
