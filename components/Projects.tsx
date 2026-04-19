"use client";

import { useState } from "react";
import { projects } from "@/data/content";

const CATEGORIES = ["All", "Agents", "LLMs", "ML", "NLP", "Data Viz", "Full-stack", "DevOps"] as const;

const catColors: Record<string, { bg: string; border: string; text: string }> = {
  "Agents":     { bg: "rgba(255,77,141,.10)",  border: "rgba(255,77,141,.28)",  text: "#c0325f" },
  "LLMs":       { bg: "rgba(157,92,255,.10)",  border: "rgba(157,92,255,.28)",  text: "#7040c0" },
  "ML":         { bg: "rgba(77,168,255,.10)",  border: "rgba(77,168,255,.28)",  text: "#2a6eaa" },
  "NLP":        { bg: "rgba(255,158,100,.12)", border: "rgba(255,158,100,.30)", text: "#a0521a" },
  "Data Viz":   { bg: "rgba(72,199,142,.12)",  border: "rgba(72,199,142,.30)",  text: "#1a7a50" },
  "Full-stack": { bg: "rgba(255,158,216,.12)", border: "rgba(255,158,216,.30)", text: "#b0406a" },
  "DevOps":     { bg: "rgba(168,213,255,.12)", border: "rgba(168,213,255,.30)", text: "#2a6eaa" },
};

function CategoryTags({ categories, size = "sm" }: { categories: string[]; size?: "sm" | "xs" }) {
  const pad = size === "sm" ? "3px 10px" : "2px 9px";
  const fs = size === "sm" ? 11 : 10;
  return (
    <div className="flex flex-wrap gap-1.5">
      {categories.map((cat) => {
        const c = catColors[cat] ?? catColors["ML"];
        return (
          <span key={cat} style={{ fontSize: fs, padding: pad, borderRadius: 9999, background: c.bg, border: `1px solid ${c.border}`, color: c.text, fontWeight: 600 }}>
            {cat}
          </span>
        );
      })}
    </div>
  );
}

function LinkButtons({ p }: { p: (typeof projects)[number] }) {
  const allLinks = [
    ...(p.github ? [{ label: "GitHub", url: p.github }] : []),
    ...(p.links ?? []),
  ];
  if (allLinks.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1.5 mt-3">
      {allLinks.map(({ label, url }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          style={{
            fontSize: 11, padding: "3px 10px", borderRadius: 9999,
            background: "rgba(45,27,46,.06)",
            border: "1px solid rgba(45,27,46,.15)",
            color: "rgba(45,27,46,.60)",
            textDecoration: "none", fontWeight: 500,
            transition: "all 0.15s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(157,92,255,.10)";
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(157,92,255,.30)";
            (e.currentTarget as HTMLAnchorElement).style.color = "#7040c0";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(45,27,46,.06)";
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(45,27,46,.15)";
            (e.currentTarget as HTMLAnchorElement).style.color = "rgba(45,27,46,.60)";
          }}
        >
          {label} ↗
        </a>
      ))}
    </div>
  );
}

function FeaturedCard({ p }: { p: (typeof projects)[number] }) {
  const [hov, setHov] = useState(false);
  const c = catColors[p.category[0]] ?? catColors["ML"];

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "block", borderRadius: 14, overflow: "hidden",
        background: hov ? c.bg : "rgba(255,255,255,.80)",
        border: `1px solid ${hov ? c.border : "rgba(157,92,255,.12)"}`,
        boxShadow: hov ? "0 8px 32px rgba(157,92,255,.12)" : "0 2px 8px rgba(45,27,46,.06)",
        transform: hov ? "translateY(-3px)" : "none",
        transition: "all 0.22s",
      }}
    >
      {p.image && (
        <div style={{ width: "100%", height: 180, overflow: "hidden", borderBottom: "1px solid rgba(157,92,255,.10)" }}>
          <img
            src={p.image}
            alt={`${p.name} demo`}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
          />
        </div>
      )}
      <div style={{ padding: "22px 26px" }}>
        <div className="flex justify-between items-center mb-3.5">
          <CategoryTags categories={p.category} size="sm" />
          <span className="font-hand" style={{ fontSize: 12, color: "rgba(45,27,46,.45)" }}>featured ✦</span>
        </div>
        <h3 className="font-serif mb-2.5" style={{ fontSize: "clamp(17px,2vw,22px)", color: "#2D1B2E", lineHeight: 1.25 }}>
          {p.name}
        </h3>
        <p style={{ fontSize: 13, color: "rgba(45,27,46,.75)", lineHeight: 1.65, marginBottom: 14 }}>{p.description}</p>
        {p.highlights.length > 0 && (
          <ul className="list-none flex flex-col gap-1 mb-3.5">
            {p.highlights.map((h, i) => (
              <li key={i} style={{ fontSize: 12, color: "rgba(45,27,46,.65)", paddingLeft: 14, position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "#FF4D8D" }}>→</span>{h}
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span key={s} style={{ fontSize: 10, padding: "2px 9px", borderRadius: 9999, background: "rgba(157,92,255,.08)", border: "1px solid rgba(157,92,255,.18)", color: "#7040c0" }}>
              {s}
            </span>
          ))}
        </div>
        <LinkButtons p={p} />
      </div>
    </div>
  );
}

function SmallCard({ p }: { p: (typeof projects)[number] }) {
  const [hov, setHov] = useState(false);
  const c = catColors[p.category[0]] ?? catColors["ML"];

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "block", borderRadius: 12, overflow: "hidden",
        background: hov ? c.bg : "rgba(255,255,255,.70)",
        border: `1px solid ${hov ? c.border : "rgba(157,92,255,.10)"}`,
        transform: hov ? "translateY(-2px)" : "none",
        boxShadow: hov ? "0 4px 16px rgba(157,92,255,.10)" : "0 1px 4px rgba(45,27,46,.05)",
        transition: "all 0.2s",
      }}
    >
      {p.image && (
        <div style={{ width: "100%", height: 130, overflow: "hidden", borderBottom: "1px solid rgba(157,92,255,.08)" }}>
          <img
            src={p.image}
            alt={`${p.name} demo`}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
          />
        </div>
      )}
      <div style={{ padding: "16px 18px" }}>
        <div className="mb-2">
          <CategoryTags categories={p.category} size="xs" />
        </div>
        <h3 className="font-serif mb-2" style={{ fontSize: 16, color: "#2D1B2E", lineHeight: 1.3 }}>{p.name}</h3>
        <p style={{ fontSize: 12, color: "rgba(45,27,46,.65)", lineHeight: 1.55, marginBottom: 10, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
          {p.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {p.stack.slice(0, 4).map((s) => (
            <span key={s} style={{ fontSize: 9.5, padding: "2px 7px", borderRadius: 9999, background: "rgba(157,92,255,.07)", border: "1px solid rgba(157,92,255,.15)", color: "#7040c0" }}>
              {s}
            </span>
          ))}
        </div>
        <LinkButtons p={p} />
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<string>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category.includes(active as never));
  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" style={{ padding: "52px 0 64px", background: "#F5EEFF" }}>
      <div className="section-inner">
        {/* Header */}
        <div className="flex items-baseline justify-between mb-10">
          <div>
            <p className="font-hand mb-2" style={{ fontSize: 22, color: "#FF4D8D" }}>things I&apos;ve built</p>
            <h2 className="font-serif font-bold" style={{ fontSize: "clamp(30px,4vw,46px)", color: "#2D1B2E" }}>Personal Projects</h2>
          </div>
          <p className="font-hand hidden md:block" style={{ fontSize: 17, color: "rgba(45,27,46,.45)" }}>
            {projects.length}+ shipped ✦
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = cat === active;
            const c = catColors[cat];
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: "7px 18px", borderRadius: 9999,
                  background: isActive ? (c ? c.bg : "rgba(45,27,46,.10)") : "transparent",
                  border: isActive
                    ? `1.5px solid ${c ? c.border : "rgba(45,27,46,.25)"}`
                    : "1.5px solid rgba(157,92,255,.18)",
                  color: isActive ? (c ? c.text : "#2D1B2E") : "rgba(45,27,46,.55)",
                  fontSize: 13, fontWeight: isActive ? 600 : 400,
                  cursor: "pointer", transition: "all 0.18s",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Featured grid */}
        {featured.length > 0 && (
          <div className={`mb-5 grid gap-5 ${featured.length === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
            {featured.map((p) => <FeaturedCard key={p.name} p={p} />)}
          </div>
        )}

        {/* Rest — 3-col grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[14px]">
            {rest.map((p) => <SmallCard key={p.name} p={p} />)}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-16 font-hand" style={{ fontSize: 20, color: "rgba(45,27,46,.40)" }}>
            No projects in this category yet ✦
          </div>
        )}
      </div>
    </section>
  );
}
