const skillsData: { category: string; items: string[]; accent: string }[] = [
  { category: "Languages",      items: ["Python", "SQL", "R", "JavaScript", "HTML / CSS"],                        accent: "#3B82F6" },
  { category: "Agents / ML / AI", items: ["OpenClaw", "LLMs / GenAI", "AI Agents", "Machine Learning", "Deep Learning", "NLP", "Computer Vision"], accent: "#3B82F6" },
  { category: "Cloud / DevOps", items: ["AWS (S3, CloudFront, Lambda, API Gateway, ECR)", "Docker", "Jenkins", "Terraform", "GitHub Actions"], accent: "#3B82F6" },
  { category: "Data & BI",      items: ["Power BI", "Tableau", "SAS Viya", "Excel"],                              accent: "#3B82F6" },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "80px 0 100px", background: "#F5EEFF" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }}>
        <h2 className="font-serif font-bold mb-11" style={{ fontSize: "clamp(30px,4vw,46px)", color: "#2D1B2E" }}>
          Skills
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 28 }}>
          {skillsData.map(({ category, items, accent }) => (
            <div key={category}>
              <p className="mb-3.5 font-semibold" style={{ fontSize: 13, color: accent, textTransform: "uppercase", letterSpacing: "0.08em" }}>{category}</p>
              <div className="flex flex-col gap-1.5">
                {items.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: 13, padding: "7px 16px", borderRadius: 9999,
                      background: "rgba(255,255,255,.80)",
                      border: "1px solid rgba(255,77,141,.18)",
                      color: "rgba(45,27,46,.80)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
