import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero", () => {
  it("has exactly one h1 describing the role", () => {
    render(<Hero now={new Date(2026, 0, 1)} />);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toHaveTextContent(/React & Next\.js Developer/i);
  });

  it("shows years of experience derived from the supplied date", () => {
    render(<Hero now={new Date(2026, 0, 1)} />);
    expect(screen.getByText("10+")).toBeInTheDocument();
  });

  it("links to the contact and work sections", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /start a project/i })).toHaveAttribute("href", "#contact");
    expect(screen.getByRole("link", { name: /see my work/i })).toHaveAttribute("href", "#work");
  });
});
