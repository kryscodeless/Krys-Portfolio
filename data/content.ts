// Central content file — update here; components read from this.

export const profile = {
  name: "Krystal Nguyen",
  fullName: "Phuc Anh Thu (Krystal) Nguyen",
  location: "Melbourne, Australia",
  email: "krystalnguyenwork@gmail.com",
  github: "https://github.com/kryscodeless",
  linkedin: "https://www.linkedin.com/in/krystal-nguyen-63014b283/",
  tagline: "At the intersection of industry, research and university.",
  role: "AI Engineer · Data Scientist · Researcher",
  intro:
    "I'm at the intersection of industry, research and university — bringing multiple perspectives to complex challenges. I build end-to-end solutions: from AWS-powered pipelines delivering 200+ weekly reports to interactive dashboards for 300 coaches.",
  about:
    "Currently an AI Engineer at Premier Data and an AI Research Intern at Deakin A2I2 working on visual reasoning for the ARC challenge. Before that I won the SAS Hackathon (→ intern building loan default & credit risk models), led teams to victory at Deakin × Microsoft AI Challenge and VicHack 2024, and shipped a fintech product that reached the finals of a major youth incubator.",
  funFact:
    "When I'm not coding, I'm behind the espresso machine — nearly two years as a barista means I know how to brighten mornings with the perfect cup.",
};

export const education = {
  school: "Deakin University",
  degree: "Bachelor of Data Science",
  dates: "Mar 2023 – Nov 2025",
  gpa: "6.8 / 7.0",
  activities: ["SEBE Peer Mentor", "Business Analytics Club", "Software Engineer Club"],
  coursework: [
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Statistics & Linear Algebra",
    "Feature Engineering",
    "Data Wrangling",
    "Database Fundamentals",
    "LLM Fine-tuning (Team Project)",
    "Business Analytics",
  ],
};

export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  dates: string;
  location: string;
  bullets: string[];
  skills: string[];
};

export const experience: Experience[] = [
  {
    role: "AI Engineer",
    company: "Premier Data",
    companyUrl: "https://www.premierdata.com.au/",
    dates: "Jul 2025 — Present · Part-time",
    location: "Melbourne, Australia · Hybrid",
    bullets: [
      "Full-stack & cloud architecture: maintain a high-availability reporting platform — React + TypeScript UI, Python services/data in Docker on AWS (S3, CloudFront, Lambda, API Gateway), Terraform for reproducible infra.",
      "Operational efficiency: automated workflows for 500+ weekly reports via CI/CD (GitHub Actions); statistical analysis and strategy visualisations for clients.",
      "Product ownership: execute the full development lifecycle for the Premier Data reporting ecosystem, serving insights to coaches, fans, and clubs.",
      "Version control: Git workflows and software best practices to ensure code maintainability and system reliability.",
      "Tech strategy: partner with leadership on roadmaps; LLMs / NLP via GPT & Gemini APIs and scalable AI-assisted products.",
    ],
    skills: [
      "React",
      "TypeScript",
      "Python",
      "Docker",
      "AWS (S3, CloudFront, Lambda, API Gateway)",
      "Terraform",
      "GitHub Actions",
      "GPT / Gemini APIs",
      "Stakeholder Management",
      "Generative AI",
    ],
  },
  {
    role: "AI Researcher",
    company: "A2I2 Applied AI Institute",
    companyUrl: "https://a2i2.deakin.edu.au/",
    dates: "Jul 2025 — Present · Internship",
    location: "Burwood, Victoria · On-site",
    bullets: [
      "Work on the ARC challenge (Abstract Reasoning Corpus) — a north star toward AGI.",
      "Develop a reasoning system using advanced AI models (Llama Vision and GPT-5) to solve complex visual puzzles and generate executable code through strategic prompting.",
      "Engage with professors and PhDs on implementation optimization; present technical findings to AI division stakeholders.",
    ],
    skills: [
      "Artificial Intelligence",
      "Analytical Skills",
      "Python",
      "PyTorch",
      "Program Synthesis",
      "Neural-Symbolic Integration",
      "Research Methodology",
    ],
  },
  {
    role: "Data Science Intern",
    company: "SAS",
    companyUrl: "https://www.sas.com/en_au/home.html",
    dates: "Nov 2024 — Dec 2024",
    location: "Melbourne, Australia",
    bullets: [
      "Designed and deployed credit risk models using Boosting algorithms in SAS Viya — 0.90 KS score, 4.67% misclassification rate.",
      "Engineered ML pipelines in SAS Cloud Analytics Server processing 50,000+ financial records at 96% accuracy; reduced processing time by 40%.",
      "Presented financial reports to C-suite leadership with strategic analysis on banking operations and market trends.",
    ],
    skills: ["Python", "SAS", "SAS Viya", "SQL", "Jupyter", "Technical Storytelling", "Business Acumen"],
  },
  {
    role: "Data Scientist",
    company: "FinBud AI",
    companyUrl: "https://finbud-ai.netlify.app/",
    dates: "Jun 2024 — Aug 2024",
    location: "Remote",
    bullets: [
      "Extracted Yahoo Finance data to build automated stock analysis pipelines with Dash/Plotly — cut manual analysis time by 60%.",
      "Formulated statistical risk models (GBM, GARCH, Monte Carlo) — 15% accuracy boost via advanced volatility assessments.",
      "Validated product-market fit through 20+ user interviews — drove 1,000+ trial signups and 30% engagement lift.",
      "Advanced the startup to the final round (top 10%) of a competitive youth tech incubator.",
    ],
    skills: [
      "Time Series Analysis",
      "Python",
      "Data Visualization",
      "HTML",
      "Financial Modeling",
      "Statistical Modeling",
    ],
  },
];

export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  name: string;
  category: ("Agents" | "LLMs" | "ML" | "NLP" | "Data Viz" | "Full-stack" | "DevOps")[];
  description: string;
  highlights: string[];
  stack: string[];
  github?: string;
  link?: string;
  links?: ProjectLink[];
  image?: string;
  featured?: boolean;
  accent?: "peach" | "sage" | "butter" | "rose" | "sky";
};

export const projects: Project[] = [
  {
    name: "Krysbot 🦞",
    category: ["Agents"],
    links: [{ label: "LinkedIn Post", url: "https://www.linkedin.com/posts/krystal-nguyen-63014b283_openclaw-aiagents-activity-7449681560443981824-XYqG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETmDcQBPPZzUtCk1kZIVbTV9ETucppWsoE" }],
    description:
      "Autonomous AI agent built on OpenClaw, self-hosted on a VPS with Gemini Flash as the backbone. Integrates cron scheduling, persistent memory, and multi-service orchestration via Telegram, connecting calendar, notes, and task tracking into a single automated workflow that cuts daily planning overhead.",
    highlights: [
      "4 cron-scheduled loops trigger context-aware actions across calendar, priorities, and wrap-ups",
      "Persistent memory synced across Obsidian vaults via Syncthing, retains context across sessions",
      "Orchestrates Telegram Bot API, Docker services, and note systems into one unified ops pipeline",
    ],
    stack: [
      "OpenClaw",
      "Gemini Flash",
      "Telegram Bot API",
      "Docker",
      "Hostinger VPS",
      "Obsidian",
      "Syncthing",
    ],
    featured: true,
    accent: "peach",
  },
  {
    name: "LLM Fine-Tuning for Healthcare",
    category: ["LLMs"],
    image: "/LLM.png",
    description:
      "Parameter-efficient fine-tuning of Falcon 7B for medical Q&A using PEFT/LoRA. Evaluated across 100+ clinical scenarios with BERT, ROUGE, and LLM-as-judge metrics. Deployed via Flask with custom prompt engineering for clinically grounded responses.",
    highlights: [
      "20% accuracy boost, 30% faster training via LoRA adapters",
      "80% answer correctness, 14% evidence-alignment lift",
      "Multi-metric eval pipeline: BERT, ROUGE, LLM-as-judge",
    ],
    stack: ["Falcon 7B", "PEFT / LoRA", "HuggingFace Transformers", "Flask", "BERT", "ROUGE"],
    github:
      "https://github.com/DataBytes-Organisation/Fine-Tuning-LLMs-for-Enterprise-Applications/tree/krystal_branch/QAChatbot",
    featured: true,
    accent: "rose",
  },
  {
    name: "Loan Default Prediction",
    category: ["ML", "Full-stack"],
    image: "/loan_default.png",
    description:
      "End-to-end ML app with SVM classifier, FastAPI backend, and Streamlit frontend. Containerised with Docker and deployed to AWS ECS for real-time inference. Includes IQR-based outlier detection and grid-search hyperparameter tuning.",
    highlights: [
      "95.7% accuracy with SVM + grid-search tuning",
      "IQR outlier detection and strategic imputation pipeline",
      "Dockerised FastAPI + Streamlit, deployed to AWS ECS",
    ],
    stack: ["Python", "SVM", "FastAPI", "Streamlit", "Docker", "AWS ECS", "scikit-learn"],
    github: "https://github.com/krystalcodess/loan_default_prediction",
    accent: "butter",
  },
  {
    name: "EV Chatbot Melbourne",
    category: ["Full-stack"],
    image: "/rasa.png",
    description:
      "NLP chatbot for Melbourne EV drivers built with Rasa NLU and a plain HTML/CSS frontend. Indexes 300+ charging stations via Google Maps API with real-time routing. Custom intent pipeline covering 15 intents at 85%+ classification accuracy.",
    highlights: [
      "300+ stations indexed with real-time routing via Google Maps API",
      "85%+ intent accuracy across 15 NLU intents",
      "Sub-5s response time with plain HTML/CSS frontend",
    ],
    stack: ["Rasa NLU", "Python", "HTML / CSS", "Google Maps API"],
    github: "https://github.com/Chameleon-company/EVAT-Chatbot",
    accent: "sky",
  },
  {
    name: "Australian Immigration Sentiment",
    category: ["NLP"],
    description:
      "Multi-source sentiment analysis pipeline scraping 1000+ data points from Twitter, Quora and The Guardian. LSTM and Neural Network classifiers combined with TextBlob lexical analysis. Trends visualised in Power BI for policy insight.",
    highlights: [
      "1000+ data points via APIs and BeautifulSoup scraping",
      "LSTM + Neural Network ensemble with TextBlob baseline",
      "Power BI dashboard tracking sentiment shifts over time",
    ],
    stack: ["Python", "LSTM", "BeautifulSoup", "TextBlob", "Power BI", "Twitter API"],
    github: "https://github.com/krystalcodess/Australian_Immigration_Sentiment_Analysis",
    accent: "sage",
  },
  {
    name: "PIMA Diabetes Classification",
    category: ["ML"],
    description:
      "Diabetes prediction with feature-engineered categorical variables and XGBoost boosting ensemble. Achieved 90%+ F1-score through custom feature construction and systematic hyperparameter search.",
    highlights: [
      "90%+ F1-score with XGBoost ensemble",
      "Custom categorical feature engineering from continuous variables",
      "Systematic grid-search and cross-validation pipeline",
    ],
    stack: ["Python", "XGBoost", "scikit-learn", "pandas"],
    github: "https://github.com/krystalcodess/Diabetes_Prediction",
    accent: "peach",
  },
  {
    name: "Black Friday Insights Dashboard",
    category: ["Data Viz"],
    image: "/sales_dashboard.png",
    description:
      "Power BI analytics consolidating $1.62B in retail revenue across 15 stores. DAX measures for APT, UPT and API KPIs with regional drill-downs and discount effectiveness scoring.",
    highlights: [
      "$1.62B revenue unified across 15 stores",
      "APT / UPT / API retail KPIs via DAX",
      "Discount effectiveness analysis with 30% decision lift",
    ],
    stack: ["Power BI", "DAX"],
    links: [{ label: "PDF", url: "/Black Friday Sales Dashboard.pdf" }],
    accent: "butter",
  },
  {
    name: "Australian Demographics and Income",
    category: ["Data Viz"],
    image: "/aus.png",
    description:
      "Interactive Power BI report on GovHack 2018 economic and demographic data across all Australian states. Includes year and location filtering, socio-economic indices, and correlation analysis.",
    highlights: [
      "State-level filtering by year and location",
      "Socio-economic index modelling",
      "Correlation analysis across income and education variables",
    ],
    stack: ["Power BI", "DAX"],
    accent: "sky",
  },
  {
    name: "Jenkins CI/CD Pipeline NutriSync",
    category: ["DevOps"],
    description:
      "End-to-end MLOps pipeline built with Jenkins, Docker and AWS. Five-stage workflow covering build, test, quality gate, staging and production. Cut deploy time from 2+ hours to 20 minutes.",
    highlights: [
      "Deploy time cut from 2+ hrs to 20 min",
      "5-stage pipeline: build, test, quality, staging, prod",
      "pytest, linting and Git-integrated quality gates",
    ],
    stack: ["Jenkins", "Docker", "AWS", "pytest", "Python"],
    github: "https://github.com/krystalcodess/JenkinsPipelineProject",
    links: [{ label: "PDF", url: "/jenkins.pdf" }],
    accent: "sage",
  },
];

export const skills = {
  languages: ["Python", "SQL", "R", "JavaScript", "HTML / CSS"],
  mlAi: ["Machine Learning", "Deep Learning", "NLP", "LLMs / GenAI", "Computer Vision"],
  cloud: ["AWS (API Gateway, Lambda, S3, SNS, ECS)", "Docker", "Jenkins"],
  data: ["Power BI", "Tableau", "SAS Viya", "Excel"],
  frameworks: ["PyTorch", "HuggingFace", "FastAPI", "Flask", "React", "Rasa", "Streamlit"],
};

export const achievements = [
  {
    title: "Deakin × Microsoft AI Challenge — 1st Place",
    detail: "Pitched an AI solution addressing sustainable and clean energy.",
  },
  {
    title: "Grad Girls × Leidos Hackathon — 1st Place",
    detail: "Ideated a healthcare solution under budget constraints.",
  },
  {
    title: "SAS Viya Challenge 2024 — 3rd Place",
    detail: "3rd Place National. Led team through loan prediction & credit risk modelling.",
  },
  {
    title: "AWS She Builds Mentee",
    detail: "Selected from 10,000+ global applicants. Practical skills in Amazon Leadership Principles and AWS cloud.",
  },
  {
    title: "Deakin Data Science ambassador",
    detail: "Featured in Deakin's Data Science course promotion video.",
  },
  { title: "VicHack 2024 — People's Choice Award", detail: "" },
  { title: "Unihack 2025", detail: "Innovated a Virtual Try-On experience." },
  {
    title: "MYOB Digital Challenge 2024",
    detail: "Recommendation system using ML to suggest flexible pricing plans.",
  },
  {
    title: "STEAM Ahead — selective program",
    detail: "Advocating for women in tech.",
  },
];
