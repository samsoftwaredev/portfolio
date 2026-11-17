"use client";

import { useEffect, useRef, useState } from "react";
import { NAV, SITE } from "@/data/site";
import { CloseIcon, MenuIcon } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="brand" aria-label={`${SITE.name} — home`}>
          <span className="brand__mark" aria-hidden="true">
            SR
          </span>
          <span className="brand__name">{SITE.name}</span>
        </a>

        <button
          ref={buttonRef}
          type="button"
          className="menu-button"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>

        <nav
          id="primary-nav"
          aria-label="Primary"
          className="nav"
          data-open={open}
        >
          <ul className="nav__list">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="nav__link"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn btn--primary btn--sm"
            onClick={() => setOpen(false)}
          >
            Hire me
          </a>
        </nav>
      </div>
    </header>
  );
}
