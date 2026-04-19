import { achievements } from "@/data/content";

const achAccents = [
  "#3B82F6",
  "#3B82F6",
  "#3B82F6",
  "#3B82F6",
  "#3B82F6",
  "#3B82F6",
  "#3B82F6",
  "#3B82F6",
  "#3B82F6",
];

// Map title → award label from the design
const awardLabels: Record<string, string> = {
  "Deakin × Microsoft AI Challenge — 1st Place": "1st Place 🥇",
  "Grad Girls × Leidos Hackathon — 1st Place": "1st Place 🥇",
  "SAS Viya Challenge 2024 — 3rd Place": "3rd Place National 🥉",
  "VicHack 2024 — People's Choice Award": "People's Choice Award",
  "Unihack 2025": "Participant",
  "MYOB Digital Challenge 2024": "Competitor",
  "AWS She Builds Mentee": "Selective",
  "STEAM Ahead — selective program": "Selective Program",
  "Deakin Data Science ambassador": "Featured",
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      style={{ padding: "52px 0 64px", background: "#F5EEFF" }}
    >
      <div className="section-inner">
        <p
          className="font-hand mb-2"
          style={{ fontSize: 22, color: "#3B82F6" }}
        >
          wins & highlights
        </p>
        <h2
          className="font-serif font-bold mb-10"
          style={{ fontSize: "clamp(30px,4vw,46px)", color: "#2D1B2E" }}
        >
          Achievements
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: 16,
          }}
        >
          {achievements.map((a, i) => (
            <div
              key={a.title}
              className="achievement-card"
              style={{
                padding: "20px 22px",
                borderRadius: 12,
                background: "rgba(255,255,255,.80)",
                border: "1px solid rgba(157,92,255,.12)",
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 3,
                  background: achAccents[i % achAccents.length],
                  borderRadius: 9999,
                  marginBottom: 12,
                }}
              />
              <h3
                className="font-serif mb-1.5"
                style={{ fontSize: 17, lineHeight: 1.3, color: "#2D1B2E" }}
              >
                {a.title}
              </h3>
              {awardLabels[a.title] && (
                <p
                  className="mb-1.5"
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: achAccents[i % achAccents.length],
                  }}
                >
                  {awardLabels[a.title]}
                </p>
              )}
              {a.detail && (
                <p
                  style={{
                    fontSize: 13.5,
                    color: "rgba(45,27,46,.60)",
                    lineHeight: 1.5,
                  }}
                >
                  {a.detail}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
