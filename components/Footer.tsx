import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer id="contact" style={{ padding: "80px 0 120px", background: "#2D1B2E", color: "#FDF4F8" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }}>
        <p className="font-hand mb-2.5" style={{ fontSize: 22, color: "#FF9FD8" }}>let&apos;s talk ✿</p>
        <h2
          className="font-serif font-bold"
          style={{ fontSize: "clamp(28px,4vw,52px)", lineHeight: 1.15, maxWidth: 660, color: "#FDF4F8", marginBottom: 40 }}
        >
          Have an idea, a role, or just want to chat about{" "}
          <em style={{ color: "#FF9FD8" }}>AI &amp; coffee</em>?
        </h2>

        <div className="flex flex-wrap gap-3 mb-16">
          <a
            href={`mailto:${profile.email}`}
            className="transition-all duration-200 hover:scale-105"
            style={{
              padding: "12px 24px", borderRadius: 10,
              background: "#FF4D8D", color: "#fff",
              textDecoration: "none", fontSize: 14, fontWeight: 700,
            }}
          >
            email me →
          </a>
          {[
            { label: "linkedin", href: profile.linkedin },
            { label: "github", href: profile.github },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-200 hover:bg-pink-accent/15"
              style={{
                padding: "12px 24px", borderRadius: 10,
                border: "1.5px solid rgba(255,159,216,.30)",
                color: "rgba(255,159,216,.90)", textDecoration: "none", fontSize: 14,
              }}
            >
              {s.label}
            </a>
          ))}
        </div>

        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center flex-wrap gap-2"
          style={{ borderTop: "1px solid rgba(255,159,216,.12)", paddingTop: 24 }}
        >
          <p style={{ fontSize: 12, color: "rgba(253,244,248,.45)" }}>
            © {new Date().getFullYear()} {profile.name}. Made with Next.js, Tailwind &amp; ☕.
          </p>
          <p className="font-hand" style={{ fontSize: 16, color: "rgba(255,159,216,.70)" }}>
            {profile.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
