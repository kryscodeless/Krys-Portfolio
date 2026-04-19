type Bullet = { text: string; bold: string[] };

type ExperienceItem = {
  role: string;
  company: string;
  companyUrl?: string;
  logo?: string;
  logoSize?: number;
  dates: string;
  workType: string;
  location: string;
  accent: string;
  bullets: Bullet[];
  skills: string[];
};

const experienceData: ExperienceItem[] = [
  {
    role: "AI Engineer",
    company: "Premier Data",
    companyUrl: "https://www.premierdata.com.au/",
    logo: "/premierdata.png",
    logoSize: 60,
    dates: "Jul 2025 – Present",
    workType: "Part-time",
    location: "Melbourne · Hybrid",
    accent: "#FF4D8D",
    bullets: [
      {
        text: "Built full-stack and cloud architecture with React + TypeScript interfaces and Python services in Docker on AWS (S3, CloudFront, Lambda, API Gateway), using Terraform for reproducible infrastructure.",
        bold: ["React + TypeScript", "AWS", "Docker", "Terraform"],
      },
      {
        text: "Automated workflows for 500+ weekly reports via CI/CD (GitHub Actions), combining statistical analysis and strategy visualisations for clients.",
        bold: ["500+ weekly reports"],
      },
      {
        text: "Conducted statistical analysis on 100+ team performance metrics to improve decision quality for coaches across 300+ clubs.",
        bold: ["100+ team performance metrics", "300+ clubs"],
      },
      {
        text: "Resolved multi-source data inconsistencies with validation workflows across 20,000+ player records over 5 years, improving accuracy by 40% and accelerating processing.",
        bold: ["20,000+ player records", "40%"],
      },
      {
        text: "Owned product delivery end to end and partnered with leadership on roadmap and AI strategy, including LLM and NLP features via GPT and Gemini APIs.",
        bold: ["AI strategy", "GPT and Gemini APIs"],
      },
    ],
    skills: [
      "React",
      "TypeScript",
      "Python",
      "Docker",
      "AWS",
      "Terraform",
      "GitHub Actions",
      "GPT/Gemini",
    ],
  },
  {
    role: "AI Researcher",
    company: "A2I2 Applied AI Institute",
    companyUrl: "https://a2i2.deakin.edu.au/",
    logo: "/a2i2.png",
    logoSize: 70,
    dates: "Jul 2025 – Present",
    workType: "Part-time",
    location: "Burwood · On-site",
    accent: "#9D5CFF",
    bullets: [
      {
        text: "Researching novel Computer Vision approaches for abstract visual reasoning toward AGI with multimodal architectures, LLMs, and visual processing pipelines.",
        bold: ["Computer Vision", "AGI"],
      },
      {
        text: "Managed GPU cluster resources and optimized model inference using Hugging Face quantization and configuration tuning, delivering 60% faster workflows and 35% lower GPU memory usage across 50+ model variations.",
        bold: ["60% faster", "35%", "50+ model variations"],
      },
      {
        text: "Conducted literature reviews and hypothesis-driven experiments, applying critical thinking to evaluate evidence, refine research direction, and strengthen core research methodology.",
        bold: [
          "literature reviews",
          "critical thinking",
          "research methodology",
        ],
      },
      {
        text: "Engage with professors and PhDs; present technical findings to AI division stakeholders.",
        bold: [],
      },
    ],
    skills: [
      "Python",
      "PyTorch",
      "Llama Vision",
      "GPT-5",
      "Computer Vision",
      "Research",
    ],
  },
  {
    role: "Data Science Intern",
    company: "SAS",
    companyUrl: "https://www.sas.com/en_au/home.html",
    logo: "/sas-vector-logo.png",
    dates: "Nov 2024 – Dec 2024",
    workType: "Internship",
    location: "Melbourne",
    accent: "#FF4D8D",
    bullets: [
      {
        text: "Designed and deployed credit risk models with Boosting algorithms in SAS Viya for loan default assessment, achieving a 0.90 KS score, 95.7% accuracy, and a low 4.67% misclassification rate.",
        bold: [
          "0.90 KS score",
          "95.7% accuracy",
          "4.67% misclassification rate",
        ],
      },
      {
        text: "Engineered ML pipelines across 50,000+ financial records, reducing processing time by 40% with 10+ validation metrics and edge-case testing for reliability.",
        bold: ["50,000+ financial records", "40%", "10+ validation metrics"],
      },
      {
        text: "Delivered weekly presentations and written reports to senior leadership, translating risk insights into profitability and lending decisions.",
        bold: [],
      },
    ],
    skills: [
      "Python",
      "SAS",
      "SAS Viya",
      "SQL",
      "Jupyter",
      "Technical Storytelling",
    ],
  },
  {
    role: "Data Scientist",
    company: "FinBud AI",
    companyUrl: "https://finbud-ai.netlify.app/",
    logo: "/finbud.png",
    logoSize: 60,
    dates: "Jun 2024 – Sep 2024",
    workType: "Freelance",
    location: "Remote",
    accent: "#9D5CFF",
    bullets: [
      {
        text: "Built statistical risk models (GBM, GARCH, Monte Carlo) that improved market pattern prediction accuracy by 15% for portfolio optimisation.",
        bold: ["15%"],
      },
      {
        text: "Built interactive Dash and Plotly dashboards that reduced daily stock analysis time by 1 hour through automation.",
        bold: ["1 hour"],
      },
      {
        text: "Conducted 20+ user interviews to validate model applications and translate technical risk capabilities into product features that drove 1,000+ signups; startup reached top 10% of youth tech incubator finals.",
        bold: ["20+ user interviews", "1,000+ signups", "top 10%"],
      },
    ],
    skills: [
      "Python",
      "Time Series Analysis",
      "Data Visualization",
      "Financial Modeling",
      "Plotly",
    ],
  },
];

function BoldHighlight({
  text,
  bolds,
  accent,
}: {
  text: string;
  bolds: string[];
  accent: string;
}) {
  if (!bolds.length) return <span>{text}</span>;

  type Part = { t: string; bold: boolean };
  let parts: Part[] = [{ t: text, bold: false }];

  for (const b of bolds) {
    parts = parts.flatMap((part) => {
      if (part.bold || !part.t.includes(b)) return [part];
      const idx = part.t.indexOf(b);
      return [
        { t: part.t.slice(0, idx), bold: false },
        { t: b, bold: true },
        { t: part.t.slice(idx + b.length), bold: false },
      ].filter((p) => p.t);
    });
  }

  return (
    <span>
      {parts.map((p, i) =>
        p.bold ? (
          <strong key={i} style={{ color: accent, fontWeight: 600 }}>
            {p.t}
          </strong>
        ) : (
          <span key={i}>{p.t}</span>
        ),
      )}
    </span>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ padding: "52px 0 64px", background: "#F5EEFF" }}
    >
      <div className="section-inner">
        <div className="flex items-baseline justify-between mb-10">
          <div>
            <h2
              className="font-serif font-bold"
              style={{ fontSize: "clamp(30px,4vw,46px)", color: "#2D1B2E" }}
            >
              Experience
            </h2>
          </div>
        </div>

        <ol className="list-none flex flex-col">
          {experienceData.map((e, idx) => (
            <li
              key={e.company}
              className="grid grid-cols-1 md:grid-cols-[160px_1fr]"
              style={{
                gap: 28,
                paddingBottom: 44,
                marginBottom: 44,
                borderBottom:
                  idx < experienceData.length - 1
                    ? "1px solid rgba(157,92,255,.12)"
                    : "none",
              }}
            >
              {/* Left: number + meta */}
              <div className="flex flex-row md:flex-col gap-4 md:gap-0">
                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(45,27,46,.80)",
                    lineHeight: 1.6,
                    fontWeight: 500,
                  }}
                >
                  {e.dates}
                </p>
                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(45,27,46,.50)",
                    marginTop: 6,
                  }}
                >
                  {e.location}
                </p>
                <p
                  style={{
                    marginTop: 4,
                    fontSize: 13.5,
                    color: "rgba(45,27,46,.42)",
                    fontStyle: "italic",
                  }}
                >
                  {e.workType}
                </p>
                {e.logo ? (
                  <img
                    src={e.logo}
                    alt={e.company}
                    style={{
                      marginTop: 14,
                      width: e.logoSize ?? 80,
                      height: e.logoSize ?? 80,
                      objectFit: "contain",
                      borderRadius: 8,
                    }}
                  />
                ) : (
                  <div
                    style={{
                      marginTop: 14,
                      width: 48,
                      height: 48,
                      borderRadius: 8,
                      background: "rgba(157,92,255,.10)",
                      border: "1px solid rgba(157,92,255,.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 9,
                      color: "rgba(45,27,46,.40)",
                      textAlign: "center",
                      lineHeight: 1.3,
                    }}
                  >
                    logo
                  </div>
                )}
              </div>

              {/* Right: content */}
              <div>
                <h3
                  className="font-serif leading-snug mb-1"
                  style={{
                    fontSize: "clamp(18px,2.2vw,26px)",
                    color: "#2D1B2E",
                  }}
                >
                  {e.role}{" "}
                  <span
                    style={{ color: "rgba(45,27,46,.35)", fontWeight: 400 }}
                  >
                    @{" "}
                  </span>
                  <a
                    href={e.companyUrl ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline"
                    style={{
                      fontStyle: "italic",
                      color: "#3B82F6",
                      textDecoration: "none",
                    }}
                  >
                    {e.company}
                  </a>
                </h3>

                <ul className="mt-4 flex flex-col gap-2.5 list-none">
                  {e.bullets.map((b, i) => (
                    <li
                      key={i}
                      style={{
                        paddingLeft: 18,
                        position: "relative",
                        fontSize: 13.5,
                        color: "rgba(45,27,46,.75)",
                        lineHeight: 1.75,
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "0.6em",
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "rgba(45,27,46,.30)",
                          display: "block",
                        }}
                      />
                      <BoldHighlight text={b.text} bolds={b.bold} accent="#2D1B2E" />
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {e.skills.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontSize: 11,
                        padding: "4px 12px",
                        borderRadius: 9999,
                        background: "rgba(157,92,255,.09)",
                        border: "1px solid rgba(157,92,255,.20)",
                        color: "#6B3FA0",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
