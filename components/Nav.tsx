"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#achievements", label: "achievements" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-paper/80 backdrop-blur border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-serif text-xl font-semibold tracking-tight">
          krystal<span className="text-peach">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline hover:text-mocha">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:krystalnguyenwork@gmail.com"
          className="hidden md:inline-block text-sm px-4 py-2 rounded-full border border-ink/20 hover:bg-ink hover:text-cream transition"
        >
          say hi →
        </a>
      </nav>
    </header>
  );
}
