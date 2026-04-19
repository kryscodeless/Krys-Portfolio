# krystal-portfolio

Personal portfolio for Krystal Nguyen — Next.js 14 (App Router) + TypeScript + Tailwind.

## Quick start

```bash
cd portfolio
npm install
npm run dev
```

Open http://localhost:3000

## Scripts

- `npm run dev` — local dev server with hot reload
- `npm run build` — production build
- `npm start` — serve production build
- `npm run lint` — Next.js lint

## Project structure

```
app/
  layout.tsx     # Root layout + Google Fonts (Inter / Fraunces / Caveat)
  page.tsx       # Home page — composes all sections
  globals.css    # Tailwind + paper texture + utility classes
components/
  Nav.tsx        # Sticky top nav
  Hero.tsx       # Hero with hand-lettered accents
  About.tsx      # Intro + "currently / looking for" cards
  Experience.tsx # 4 roles, timeline-style
  Projects.tsx   # Featured + compact project grid
  Skills.tsx     # Toolkit by category
  Education.tsx  # Deakin University
  Achievements.tsx
  Footer.tsx     # Contact CTA on dark background
data/
  content.ts     # ← EDIT HERE for all text content
```

## Editing content

All copy lives in `data/content.ts`. Update experience, projects, skills, etc. there — components read from this file.

### Adding OpenClaw (or any new project)

Edit the `projects` array in `data/content.ts`:

```ts
{
  name: "OpenClaw",
  category: "AI/ML",
  description: "...",
  highlights: ["...", "..."],
  stack: ["Python", "PyTorch"],
  github: "https://github.com/...",
  featured: true,   // shows in the 2-column featured grid
  accent: "peach",  // peach | sage | butter | rose | sky
}
```

## Design tokens

Defined in `tailwind.config.ts`:

- **Colors**: `cream`, `paper`, `ink`, `mocha`, `peach`, `sage`, `butter`, `rose`, `sky`
- **Fonts**: `font-serif` (Fraunces), `font-sans` (Inter), `font-hand` (Caveat)
- **Animations**: `animate-wiggle`, `animate-float`, `animate-fadeUp`

## Deploy

The easiest path is [Vercel](https://vercel.com):

```bash
npx vercel
```

Or connect this repo to Vercel for automatic deploys on push.

## Updating from Notion

Content was migrated from [Krystal's Notion portfolio](https://krystalnguyen.notion.site/Krystal-Nguyen-Data-Science-Machine-Learning-AI-1ad478690a488016b2bee5c0a9d8c192). To resync, fetch the page + project databases (ML/AI, Data Viz, SQL, DevOps) and update `data/content.ts`.

---

Made with Next.js, Tailwind & ☕.
