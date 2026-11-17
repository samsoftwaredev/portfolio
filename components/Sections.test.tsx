import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Services from "./Services";
import Awards from "./Awards";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import JsonLd from "./JsonLd";
import { AWARDS, SERVICES, SITE } from "@/data/site";

describe("Services", () => {
  it("lists each service under a labelled region", () => {
    render(<Services />);
    expect(screen.getByRole("region", { name: /everything between/i })).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(SERVICES.length);
  });
});

describe("Awards", () => {
  it("renders every award with an external link", () => {
    render(<Awards />);
    for (const a of AWARDS) {
      expect(screen.getByRole("link", { name: new RegExp(a.cta) })).toHaveAttribute("href", a.href);
    }
  });
});

describe("About", () => {
  it("shows a portrait with alt text and grouped skills", () => {
    render(<About />);
    expect(screen.getByRole("img", { name: /portrait of samuel ruiz/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Front-end" })).toBeInTheDocument();
  });
});

describe("Contact", () => {
  it("offers the contact form and social profiles", () => {
    render(<Contact />);
    expect(screen.getByTitle(/contact form/i)).toHaveAttribute("src", SITE.contactFormEmbedUrl);
    expect(screen.getByRole("link", { name: /open form in new tab/i })).toHaveAttribute("href", SITE.contactFormUrl);
    expect(screen.getByRole("link", { name: /open it in a new tab/i })).toHaveAttribute("href", SITE.contactFormUrl);
    expect(screen.getByRole("link", { name: /linkedin/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /github/i })).toBeInTheDocument();
  });
});

describe("Footer", () => {
  it("shows the current year", () => {
    render(<Footer now={new Date(2030, 4, 5)} />);
    expect(screen.getByText(/2030/)).toBeInTheDocument();
  });
});

describe("JsonLd", () => {
  it("escapes '<' so payloads cannot break out of the script tag", () => {
    const { container } = render(<JsonLd data={{ a: "</script><b>" }} />);
    const script = container.querySelector('script[type="application/ld+json"]')!;
    expect(script.innerHTML).not.toContain("</script>");
    expect(JSON.parse(script.innerHTML)).toEqual({ a: "</script><b>" });
  });
});
