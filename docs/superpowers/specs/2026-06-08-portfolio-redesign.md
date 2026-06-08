# Portfolio Redesign Spec
**Date:** 2026-06-08
**Reference:** thapa-manish.com.np

## Goal
Full rewrite of vaidikshah.com portfolio from Vue 2 → React 18 + Vite + Tailwind CSS. Exact same visual design as thapa-manish.com.np with Vaidik's content. Serve locally first, then deploy to Vercel.

---

## Stack
- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (with arbitrary values for exact color matching)
- **Animations:** Framer Motion (scroll fade-ins, hover effects, accordion)
- **Font:** Inter (via Google Fonts CDN)
- **Icons:** Lucide React (for nav icons, social links)
- **Deployment:** Vercel (pointing at `dist/`)

---

## Design System (identical to thapa-manish.com.np)

| Token | Value |
|---|---|
| Background | `#f8f1df` |
| Text | `#181512` |
| Accent | `#ffd166` |
| Card bg | `#fffaf0` |
| Border | `2px solid #181512` |
| Shadow | `3px 3px 0 #181512` |
| Radius (large) | `2rem` |
| Radius (medium) | `1rem` |
| Font | Inter |
| H1 size | `72px` |
| H2 size | `60px` |
| Grid bg | Repeating 32px grid lines at 3% opacity |

---

## Sections & Content

### Nav
- Sticky top, `backdrop-blur`, `bg-[#f8f1df]/85`, `border-b-2 border-[#181512]`
- Logo: "VS" in `#ffd166` circle with 2px border + 3px offset shadow
- Links: About · Projects · Skills · Experience · Education · Contact
- Right: `resume` pill button + `say hi` filled button

### Hero
- Tagline: **"I build AI systems with clean pipelines and a little soul."**
- Sub: `MS CS @ CSULB · Ex-ISRO · Software Engineer (Data & ML)`
- Social pills: GitHub, LinkedIn, Email, Resume
- Framer Motion: staggered fade-in on load

### About
- Short bio: software engineer focused on AI/ML and data engineering, building systems from satellite pipelines (ISRO) to medication safety platforms. Currently pursuing MS CS at CSULB.
- AWS cert badge

### Projects
- Cards with: name, 1-line description, tech stack tags, GitHub link, live demo link
- Projects (from existing site + resume):
  1. DrugShield AI — FastAPI, Next.js, OpenAI, RxNav
  2. PageSpeaks — PyTorch, F5-TTS, Whisper, Modal, FastAPI
  3. AI Professor Rating — LangChain, Pinecone, FastAPI, Redis
  4. Osho Voice TTS Pipeline
  5. + remaining projects from OtherProjectsData.ts

### Skills
Grouped tag clouds (same style as Manish):
- **Languages:** Python, JavaScript, TypeScript, Java, C++, Golang, Rust, C#
- **Backend & DB:** Node.js, Express.js, PostgreSQL, MySQL, MongoDB, DynamoDB
- **AI/ML:** PyTorch, TensorFlow, LangChain, Scikit-learn, NumPy, Pandas, XGBoost, NLP, Computer Vision
- **Cloud/DevOps:** AWS, GCP, Azure, Docker, CI/CD, Git, Linux
- **Web:** React, Angular, Vue, HTML5/CSS, Bootstrap, Web3

### Experience (accordion)
1. **Technolee** — Software Engineer (Data & ML) · Jul 2024 – Jul 2025 · Ahmedabad, India
   - REST API with ML predictions <200ms, real-time dashboards for 20+ product lines
   - Logistic regression on 30K+ sales records, +25% forecasting accuracy
   - PostgreSQL + NLP ETL pipeline on AWS, 50K+ daily records

2. **ISRO** — AI/ML Engineer Intern · Jan 2024 – Jul 2024 · Ahmedabad, India
   - Satellite data pipeline, 99.9% data integrity, 1+GB daily
   - LSTM forecasting (PyTorch/CUDA), -25% prediction error, +20% efficiency
   - Matplotlib/Seaborn dashboards, -40% reporting cycles

3. **Cre-Art Solutions** — Software Engineer Intern · Jun 2023 – Aug 2023 · Ahmedabad, India
   - Django REST APIs, +20% performance, 50K+ daily financial transactions
   - Automated validation framework, -18% discrepancies
   - Power BI dashboards with SQL, -30% reporting time

### Education (in Notes position)
Cards for:
1. **CSULB** — MS Computer Science · May 2027 · Long Beach, CA
   - Courses: AI, ML, Distributed Computing, NLP
2. **GTU** — BS Computer Science · Jun 2024 · Ahmedabad, India
   - Courses: OOP, Data Structures, RDBMS, Networks, System Design

### Contact (dark section)
- Heading: **"Got an AI problem, research idea, or exciting engineering challenge?"**
- Links: vaidikshah03@gmail.com · LinkedIn · GitHub
- CTA: "say hi →" button

---

## Animations (Framer Motion)
- Hero text: staggered fade-up on mount (0.1s delay between elements)
- All sections: `whileInView` fade-up, `once: true`, threshold 0.1
- Project cards: `whileHover` scale(1.02) + shadow lift
- Accordion: `AnimatePresence` + height animation for expand/collapse
- Nav: color/blur transition on scroll

---

## File Structure (new React app replaces Vue 2 at repo root)

```
Portfolio/
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── package.json
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   └── education.ts
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── index.css
└── dist/           ← Vercel build output
```

---

## Migration Plan
1. Keep old Vue 2 code in git history (don't delete, just overwrite at root)
2. Remove Vue-specific files: `src/` (old), `public/` (old), `vue.config.js`, `babel.config.js`
3. Scaffold new Vite + React app at repo root
4. Update `vercel.json` to point output at `dist/`
5. Update `CLAUDE.md` to reflect new stack

---

## Out of Scope
- Dark mode (Manish has it, we skip for v1 to keep it simple)
- Blog/Notes section (no content yet — Education replaces it)
- GitHub API integration (Manish's old repo had it, live site doesn't)
