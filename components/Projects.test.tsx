import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Projects from "./Projects";
import { PROJECTS } from "@/data/site";

describe("Projects", () => {
  it("renders an article with a heading for each project", () => {
    render(<Projects />);
    expect(screen.getAllByRole("article")).toHaveLength(PROJECTS.length);
    for (const p of PROJECTS) {
      expect(screen.getByRole("heading", { level: 3, name: new RegExp(p.title) })).toBeInTheDocument();
    }
  });

  it("features INRI Paint & Wall linking to its live site safely", () => {
    render(<Projects />);
    const card = screen.getByRole("article", { name: /INRI Paint & Wall/ });
    const link = within(card).getByRole("link", { name: /visit site/i });
    expect(link).toHaveAttribute("href", "https://www.inripaintwall.com/");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link.getAttribute("rel")).toContain("noopener");
  });

  it("gives every screenshot meaningful alt text", () => {
    render(<Projects />);
    for (const img of screen.getAllByRole("img")) {
      expect(img.getAttribute("alt")?.length).toBeGreaterThan(10);
    }
  });

  it("announces new-tab links to assistive tech", () => {
    render(<Projects />);
    expect(screen.getAllByText(/opens in a new tab/i).length).toBeGreaterThan(0);
  });
});
