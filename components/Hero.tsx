import { profile } from "@/data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #2D1B2E 0%, #5A3A7F 50%, #1F3B7F 100%)",
        padding: "52px 0 72px",
      }}
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: 420,
            height: 420,
            background: "#FF4D8D",
            filter: "blur(90px)",
            opacity: 0.12,
            top: "-15%",
            left: "-8%",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 460,
            height: 460,
            background: "#9D5CFF",
            filter: "blur(90px)",
            opacity: 0.12,
            bottom: "-10%",
            right: "-5%",
          }}
        />
      </div>

      {/* Floating stars */}
      <span
        className="animate-twinkle absolute text-white/55"
        style={{ top: "14%", left: "7%", fontSize: 22 }}
      >
        ✦
      </span>
      <span
        className="animate-twinkle absolute"
        style={{
          top: "62%",
          right: "4%",
          fontSize: 18,
          color: "#FF9FD8",
          opacity: 0.5,
          animationDelay: "1s",
        }}
      >
        ✧
      </span>
      <span
        className="animate-twinkle absolute"
        style={{
          bottom: "22%",
          left: "19%",
          fontSize: 16,
          color: "#A8D5FF",
          opacity: 0.45,
          animationDelay: "0.5s",
        }}
      >
        ⚡
      </span>
      <span
        className="animate-twinkle absolute"
        style={{
          top: "30%",
          left: "44%",
          fontSize: 14,
          color: "#FF4D8D",
          opacity: 0.35,
          animationDelay: "1.5s",
        }}
      >
        ✦
      </span>

      {/* Two-column grid */}
      <div className="section-inner relative z-10 w-full grid items-center gap-12 grid-cols-1 md:grid-cols-2">
        {/* LEFT: text */}
        <div>
          <p
            className="font-hand mb-3"
            style={{ fontSize: 22, color: "rgba(255,159,216,.85)" }}
          >
            Hello World! I&apos;m
          </p>
          <h1
            className="font-serif font-bold text-white leading-none mb-5"
            style={{
              fontSize: "clamp(52px, 7vw, 88px)",
              letterSpacing: "-0.02em",
            }}
          >
            Krystal
            <br />
            <em>Nguyen</em>
          </h1>
          <p
            className="font-serif font-semibold mb-9"
            style={{
              fontSize: 20,
              color: "rgba(255,159,216,.90)",
              letterSpacing: ".01em",
              lineHeight: 1.5,
            }}
          >
            Junior AI Engineer
            <br />
            Full-Stack Data Scientist
          </p>

          {/* CTAs */}
          <div className="flex flex-row flex-wrap gap-3 mb-8">
            <a
              href="#contact"
              className="transition-all duration-200 hover:scale-105"
              style={{
                padding: "12px 24px",
                borderRadius: 10,
                border: "2px solid rgba(255,159,216,.50)",
                color: "rgba(255,159,216,.95)",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 700,
                whiteSpace: "nowrap",
              }}
            >
              Let&apos;s connect!
            </a>
          </div>

          {/* Social icons */}
          <div className="flex flex-row gap-4">
            {/* GitHub */}
            <a
              href={profile.github}
              title="GitHub"
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-200 hover:scale-110"
              style={{
                color: "rgba(255,255,255,.75)",
                display: "inline-block",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href={profile.linkedin}
              title="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-200 hover:scale-110"
              style={{
                color: "rgba(255,255,255,.75)",
                display: "inline-block",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* Email */}
            <a
              href={`mailto:${profile.email}`}
              title="Email"
              className="transition-all duration-200 hover:scale-110"
              style={{
                color: "rgba(255,255,255,.75)",
                display: "inline-block",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT: animated visual */}
        <div
          className="relative hidden md:flex items-center justify-center"
          style={{ minHeight: 340 }}
        >
          {/* Outer spinning ring */}
          <div
            className="animate-spin-slow-rev absolute rounded-full"
            style={{
              width: 300,
              height: 300,
              border: "2px solid rgba(255,77,141,.30)",
            }}
          />
          {/* Inner spinning ring */}
          <div
            className="animate-spin-slow absolute rounded-full"
            style={{
              width: 220,
              height: 220,
              border: "1.5px solid rgba(77,168,255,.25)",
            }}
          />

          {/* Accent dots on ring */}
          <div className="absolute" style={{ width: 300, height: 300 }}>
            <div
              className="animate-twinkle absolute rounded-full"
              style={{
                top: 0,
                left: "50%",
                marginLeft: -5,
                width: 10,
                height: 10,
                background: "rgba(255,159,216,.80)",
              }}
            />
            <div
              className="animate-twinkle absolute rounded-full"
              style={{
                bottom: 0,
                right: 0,
                width: 8,
                height: 8,
                background: "rgba(157,92,255,.80)",
                animationDelay: "1s",
              }}
            />
            <div
              className="animate-twinkle absolute rounded-full"
              style={{
                top: "50%",
                right: 0,
                marginTop: -4,
                width: 8,
                height: 8,
                background: "rgba(77,168,255,.80)",
              }}
            />
          </div>

          {/* Central morphing blob */}
          <div
            className="blob-morph absolute"
            style={{ width: 180, height: 180 }}
          />

          {/* Center content */}
          <div className="relative text-center" style={{ zIndex: 3 }}>
            <p className="mb-2" style={{ fontSize: 52 }}>
              ✨
            </p>
            <p
              className="font-hand"
              style={{
                fontSize: 20,
                color: "rgba(255,255,255,.90)",
                letterSpacing: ".03em",
              }}
            >
              Data · AI · Software
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
