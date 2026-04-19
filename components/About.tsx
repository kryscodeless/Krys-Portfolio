export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "80px 0 100px", background: "#F5EEFF" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }}>
        <p
          className="text-center uppercase tracking-widest mb-1"
          style={{
            fontSize: 11,
            color: "rgba(45,27,46,.38)",
            letterSpacing: "0.14em",
          }}
        >
          Get To Know
        </p>
        <h2
          className="font-serif font-bold text-center mb-14"
          style={{ fontSize: "clamp(28px,4vw,40px)", color: "#2D1B2E" }}
        >
          About Me
        </h2>

        <div
          className="grid gap-14 items-center"
          style={{ gridTemplateColumns: "1fr 1.3fr" }}
        >
          {/* LEFT: Avatar */}
          <div className="flex justify-center items-center relative">
            <div
              className="absolute rounded-full"
              style={{
                width: 260,
                height: 260,
                background:
                  "linear-gradient(135deg, rgba(157,92,255,.12), rgba(255,77,141,.10))",
                filter: "blur(36px)",
              }}
            />
            <div
              className="relative flex items-center justify-center overflow-hidden"
              style={{
                zIndex: 2,
                width: 240,
                height: 240,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #B09FCC, #D0BEEF)",
                border: "3px solid rgba(157,92,255,.25)",
                boxShadow: "0 6px 32px rgba(157,92,255,.18)",
              }}
            >
              <img
                src="/photo.png"
                alt="Krystal Nguyen"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* RIGHT: bio + cards */}
          <div>
            <div
              className="mb-6"
              style={{
                fontSize: 14.5,
                color: "rgba(45,27,46,.80)",
                lineHeight: 1.85,
              }}
            >
              <p className="mb-4">
                Hey, I&apos;m Krystal! 👩🏻‍💻👋 A{" "}
                <strong style={{ color: "#2D1B2E", fontWeight: 600 }}>
                  full-stack data scientist
                </strong>{" "}
                and{" "}
                <strong style={{ color: "#2D1B2E", fontWeight: 600 }}>
                  AI engineer
                </strong>{" "}
                pursuing Honours with a specialisation in{" "}
                <strong style={{ color: "#2D1B2E", fontWeight: 600 }}>
                  Computer Vision
                </strong>
                . I came from a medical background in high school, made the
                switch to tech, and have been expanding ever since; from data
                and AI to software engineering and agent-based systems.
              </p>
              <p className="mb-4">
                I pick up new things quickly and have a drive to excel in
                whatever I take on. I&apos;m curious by nature, have worn many
                hats, and genuinely understand people as much as systems. The
                best products aren&apos;t just technically strong, there&apos;s
                always a human factor, and great solutions address that.
              </p>
              <p className="mb-5" style={{ color: "rgba(45,27,46,.80)" }}>
                I&apos;m looking for my next challenge where I can contribute in a high-performing, collaborative team.
              </p>
              <p
                className="mb-1.5"
                style={{ fontSize: 13.5, color: "rgba(45,27,46,.58)", fontStyle: "italic", lineHeight: 1.7 }}
              >
                When not coding, you&apos;ll find me at tech events, building
                connections across diverse communities, and staying current on
                industry innovations.
              </p>
              <p
                style={{ fontSize: 13, color: "rgba(45,27,46,.52)", fontStyle: "italic" }}
              >
                ☕ Coffee lover. Let&apos;s connect over a cup!
              </p>
            </div>

            {/* Education + Skills cards */}
            <div
              className="grid gap-3.5 mb-6"
              style={{ gridTemplateColumns: "1fr 1fr" }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,.85)",
                  borderRadius: 12,
                  padding: "18px 20px",
                  border: "1px solid rgba(157,92,255,.16)",
                }}
              >
                <p
                  className="mb-2.5"
                  style={{
                    fontSize: 11,
                    color: "#9D5CFF",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  🎓 Education
                </p>
                <p style={{ fontSize: 13, color: "#2D1B2E", fontWeight: 600, lineHeight: 1.3, marginBottom: 10 }}>
                  Deakin University
                </p>
                <p style={{ fontSize: 12, color: "rgba(45,27,46,.70)", fontWeight: 600, marginBottom: 3 }}>
                  Bachelor of IT (Honours)
                </p>
                <p style={{ fontSize: 11.5, color: "rgba(45,27,46,.45)", marginBottom: 12 }}>
                  Mar 2026 – Nov 2026<br />
                  <span style={{ fontWeight: 600, color: "rgba(45,27,46,.60)" }}>Software · AI · CV</span>
                </p>
                <p style={{ fontSize: 12, color: "rgba(45,27,46,.70)", fontWeight: 600, marginBottom: 3 }}>
                  Bachelor of Data Science
                </p>
                <p style={{ fontSize: 11.5, color: "rgba(45,27,46,.45)", marginBottom: 10 }}>
                  Mar 2023 – Nov 2025
                </p>
                <p style={{ fontSize: 11.5, color: "#9D5CFF", fontWeight: 500 }}>
                  GPA 6.8 / 7.0 · WAM 86
                </p>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,.85)",
                  borderRadius: 12,
                  padding: "18px 20px",
                  border: "1px solid rgba(157,92,255,.16)",
                }}
              >
                <p
                  className="mb-3"
                  style={{
                    fontSize: 11,
                    color: "#9D5CFF",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  &lt;/&gt; Technical Areas
                </p>
                {[
                  "AI Agents · LLMs · Computer Vision",
                  "Data Science and Analytics",
                  "Full-Stack Engineering",
                  "Cloud and DevOps",
                ].map((line, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: 13,
                      color: "rgba(45,27,46,.70)",
                      marginBottom: 10,
                      lineHeight: 1.4,
                      paddingLeft: 14,
                      position: "relative",
                    }}
                  >
                    <span style={{ position: "absolute", left: 0, top: "0.45em", width: 5, height: 5, borderRadius: "50%", background: "#9D5CFF", display: "block" }} />
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block transition-all duration-200 hover:scale-105"
              style={{
                padding: "11px 28px",
                background: "#9D5CFF",
                color: "#fff",
                borderRadius: 9999,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Let&apos;s Talk ✦
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
