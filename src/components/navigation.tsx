"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Arrow, Mark } from "./icons";
const links = [
  ["projects", "Work"],
  ["experience", "Experience"],
  ["about", "About"],
  ["contact", "Contact"],
];
export function Navigation({ detail = false }: { detail?: boolean }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (detail) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: 0 },
    );
    [["hero"], ...links].forEach(([id]) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, [detail]);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="header-inner">
        <Link className="wordmark" href="/#hero" aria-label="Ben Zlatin, home">
          <Mark />
          <span>
            Ben Zlatin<span className="name-period">.</span>
          </span>
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav
          id="main-nav"
          aria-label="Main navigation"
          className={open ? "main-nav is-open" : "main-nav"}
        >
          {links.map(([id, label]) => (
            <a
              href={`${detail ? "/" : ""}#${id}`}
              key={id}
              aria-current={!detail && active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="nav-resume"
            href="mailto:btzlatin@gmail.com?subject=Resume%20request"
          >
            Request résumé <Arrow diagonal />
          </a>
        </nav>
      </div>
    </header>
  );
}
