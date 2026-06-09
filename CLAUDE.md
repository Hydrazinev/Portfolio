# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Dev server
npm run dev

# Production build → outputs to dist/
npm run build

# Preview production build locally
npm run preview
```

## Architecture

**Stack:** React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide React.

**Build output:** `dist/` — Vercel points at this via `vercel.json` with `"framework": "vite"`.

**Structure:** Single-page app. All sections scroll on one page — no routing needed.

```
src/
  main.tsx          ← React root mount
  App.tsx           ← Assembles all section components in order
  index.css         ← Tailwind + custom utility classes (paper-card, paper-card-soft, section-label, pill, notebook-grid, etc.)
  data/
    projects.ts     ← Project[] array — update here to add/edit projects
    skills.ts       ← SkillGroup[] array — grouped tag clouds
    experience.ts   ← Job[] array — static grid entries (NOT accordion)
    education.ts    ← Degree[] array — degree cards
  components/
    Nav.tsx         ← Sticky header with scroll-blur effect
    Hero.tsx        ← Tagline + CSS smiley face illustration + terminal card
    About.tsx       ← Bio card (left) + 3 note cards (right)
    Projects.tsx    ← Card grid from data/projects.ts with whileHover lift
    Skills.tsx      ← Tag clouds from data/skills.ts, 2-col grid, Braces icon
    Experience.tsx  ← Static date-badge grid layout (no accordion)
    Education.tsx   ← Degree cards from data/education.ts
    Contact.tsx     ← Dark CTA card + email illustration (right column)
    Footer.tsx      ← Copyright line
```

## Design system

Neubrutalist design system.

- **Background:** `#f8f1df` (cream)
- **Text:** `#181512` (ink)
- **Accent:** `#ffd166` (yellow)
- **Card bg:** `#fffaf0`
- **Amber label color:** `#6f4d00` (section labels, company names, note labels)
- **Muted text:** `#51483f`, `#3d352f`
- **Borders:** `2px solid #181512`
- **Shadows:** `3–4px offset` box shadows (e.g. `shadow-[4px_4px_0_#181512]`)
- **Font:** Inter via Google Fonts CDN
- **Grid bg:** `notebook-grid` class — repeating CSS gradients at 32px

### Custom CSS classes (src/index.css)

- **`paper-card`** — `bg-[#fffaf0] border-2 border-[#181512] rounded-[2rem] shadow-[4px_4px_0_#181512]`
- **`paper-card-soft`** — `border-2 border-[#181512] shadow-[4px_4px_0_#181512]` (no bg/radius — set per element)
- **`section-label`** — `text-xs font-black uppercase tracking-[0.2em] text-[#6f4d00] mb-4`
- **`notebook-grid`** — repeating CSS gradient creating a grid pattern

## Component details

### Hero
- Grid: `md:grid-cols-[1fr_0.9fr]`
- Right column: outer `paper-card overflow-visible rounded-[2rem] bg-[#fffaf0] p-5`, yellow inner card, cream circle with CSS smiley face (`h-40 w-40`), "deep work" + "compiling..." badges
- Terminal card: `absolute -bottom-10 ... md:-bottom-14 md:w-72` with `shadow-[4px_4px_0_#ffd166]`
- Wrapper needs `pb-40 md:pb-36` to avoid clipping the terminal card
- Primary button: `bg-[#181512] shadow-[5px_5px_0_#ffd166]`
- Secondary button: `bg-white shadow-[5px_5px_0_#181512]`

### Projects (02 · Projects)
- `Project` interface: `id`, `caseNum` (e.g. "case-001"), `status` ('BUILT'|'DEPLOYED'|'PRODUCTION'), `category`, `name`, `shortDescription` (bold), `description`, `tags[]`, `github?`, `live?`, `accent` (hex for header bg)
- Cards: `paper-card flex min-h-[28rem] flex-col rounded-[1.75rem] bg-white p-5`
- `whileHover={{ y: -6 }}` lift on cards; colored header has `whileHover={{ scale: 1.02 }}`
- Links: underline "Open case file ↗", pushed to bottom with `mt-auto`

### Skills (03 · Skills)
- 2-col grid, `paper-card-soft rounded-[1.5rem] bg-[#fffaf0] p-6`
- Braces icon from lucide-react, white pills with `shadow-[2px_2px_0_#181512]`

### Experience (04 · Experience)
- Static layout — NO accordion
- Each entry: `paper-card-soft grid gap-4 rounded-[1.5rem] bg-white p-5 md:grid-cols-[12rem_1fr]`
- Date badge: yellow `rounded-full border-2 border-[#181512] bg-[#ffd166] px-4 py-2 text-center text-sm font-black`
- Company name: `font-black text-[#6f4d00]`

### Contact
- Outer: `paper-card overflow-hidden rounded-[2rem] bg-[#181512] p-8 md:p-12`
- Grid: `lg:grid-cols-[1fr_0.8fr]`
- Right column: `paper-card-soft rounded-[2rem] bg-[#fffaf0] p-5` → inner blue (`bg-[#90e0ef]`) scene with:
  - Floating email card (cream, traffic lights, envelope clip-path, "ping" badge)
  - Person silhouette (yellow `rounded-t-full` body, cream head, dark hair bar, pink arms)
  - "signal: strong" badge (cream, `rotate-6`, top right)
  - "reply latency: low" badge (`bg-[#ffadad]`, `-rotate-3`, bottom right)
  - Decorative stars ✦ ✶ ✧ and dashed rotating circles

## Animations

Framer Motion throughout:
- All sections: `whileInView` fade-up (`initial: { opacity: 0, y: 24 }`)
- Hero: staggered fade-in on load
- Projects: `whileHover={{ y: -6 }}` on cards, `whileHover={{ scale: 1.02 }}` on colored header
- No `AnimatePresence` accordion — Experience is static

## Adding a project

Add an entry to `src/data/projects.ts`. Required fields: `id`, `caseNum`, `status`, `category`, `name`, `shortDescription`, `description`, `tags`, `accent`. Optional: `github`, `live`.
