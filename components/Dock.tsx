"use client";

import { useEffect, useState } from "react";

type Item = { href: string; label: string; icon: React.ReactNode };

const items: Item[] = [
  {
    href: "#top",
    label: "home",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10l9-7 9 7v10a2 2 0 01-2 2h-4v-6h-6v6H5a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    href: "#about",
    label: "about",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0116 0" />
      </svg>
    ),
  },
  {
    href: "#skills",
    label: "skills",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 01-4 0v-.1a1.7 1.7 0 00-1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 010-4h.1a1.7 1.7 0 001.5-1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 014 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 010 4h-.1a1.7 1.7 0 00-1.5 1z" />
      </svg>
    ),
  },
  {
    href: "#experience",
    label: "experience",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
      </svg>
    ),
  },
  {
    href: "#projects",
    label: "projects",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    href: "#achievements",
    label: "achievements",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4a2 2 0 01-2-2V5h4" />
        <path d="M18 9h2a2 2 0 002-2V5h-4" />
        <path d="M6 5h12v6a6 6 0 01-12 0z" />
        <path d="M12 15v4" />
        <path d="M8 21h8" />
      </svg>
    ),
  },
  {
    href: "#contact",
    label: "contact",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
];

export default function Dock() {
  const [active, setActive] = useState("top");
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight / 3;
      let current = "top";
      for (const it of items) {
        const el = document.querySelector(it.href) as HTMLElement | null;
        if (el && el.offsetTop <= y) current = it.href.slice(1);
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav
        aria-label="Section navigation"
        style={{
          display: "flex", alignItems: "center", gap: 4,
          background: "rgba(45,27,46,.88)", backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,159,216,.25)", borderRadius: 9999,
          padding: "10px 20px",
          boxShadow: "0 8px 32px rgba(0,0,0,.35)",
        }}
      >
        {items.map((it) => {
          const isActive = active === it.href.slice(1);
          return (
            <a
              key={it.href}
              href={it.href}
              aria-label={it.label}
              onMouseEnter={() => setHovered(it.href)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: "relative",
                padding: "6px 10px", borderRadius: 9999,
                fontSize: 12, fontWeight: 600, textDecoration: "none",
                whiteSpace: "nowrap", transition: "all 0.2s",
                display: "flex", alignItems: "center", gap: 5,
                background: isActive ? "rgba(255,77,141,.22)" : "transparent",
                color: isActive ? "#FF9FD8" : "rgba(255,255,255,.65)",
              }}
            >
              <span className="sm:hidden">{it.icon}</span>
              <span className="hidden sm:inline" style={{ padding: "0 4px" }}>{it.label}</span>
              {hovered === it.href && !isActive && (
                <span
                  className="sm:hidden"
                  style={{
                    position: "absolute", bottom: "calc(100% + 8px)", left: "50%",
                    transform: "translateX(-50%)", whiteSpace: "nowrap",
                    fontSize: 11, background: "rgba(45,27,46,.95)",
                    color: "#FF9FD8", padding: "3px 8px", borderRadius: 6,
                    border: "1px solid rgba(255,159,216,.25)",
                  }}
                >
                  {it.label}
                </span>
              )}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
