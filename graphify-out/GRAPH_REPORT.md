# Graph Report - Portfolio  (2026-07-31)

## Corpus Check
- 25 files · ~5,123 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 255 nodes · 294 edges · 20 communities (19 shown, 1 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `cc9e9db5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_UI Section Components|UI Section Components]]
- [[_COMMUNITY_React Rebuild Plan|React Rebuild Plan]]
- [[_COMMUNITY_Component Functions|Component Functions]]
- [[_COMMUNITY_NPM Dependencies|NPM Dependencies]]
- [[_COMMUNITY_Package Config|Package Config]]
- [[_COMMUNITY_Work Experience Data|Work Experience Data]]
- [[_COMMUNITY_TS Compiler (Node)|TS Compiler (Node)]]
- [[_COMMUNITY_Portfolio Content|Portfolio Content]]
- [[_COMMUNITY_TS Compiler (App)|TS Compiler (App)]]
- [[_COMMUNITY_Skills Data|Skills Data]]
- [[_COMMUNITY_Education Component|Education Component]]
- [[_COMMUNITY_Experience Component|Experience Component]]
- [[_COMMUNITY_Vercel Deploy Config|Vercel Deploy Config]]
- [[_COMMUNITY_Deploy Script|Deploy Script]]
- [[_COMMUNITY_Project README|Project README]]

## God Nodes (most connected - your core abstractions)
1. `CLAUDE.md — Portfolio Project Instructions` - 18 edges
2. `App (root component)` - 15 edges
3. `compilerOptions` - 13 edges
4. `Task 3: Static Data Files` - 10 edges
5. `projects[] array` - 10 edges
6. `index.css (global styles)` - 10 edges
7. `Neubrutalist Design System` - 8 edges
8. `Projects component` - 8 edges
9. `Spec: Portfolio Redesign (2026-06-08)` - 7 edges
10. `Hero component` - 7 edges

## Surprising Connections (you probably didn't know these)
- `index.html — Vite Entry Point` --implements--> `Tech Stack: React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide React`  [INFERRED]
  index.html → CLAUDE.md
- `Legacy Stack: Vue 2 + TypeScript + Vue Router + LESS` --superseded_by--> `Tech Stack: React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide React`  [INFERRED]
  docs/superpowers/specs/2026-06-07-claude-md-design.md → CLAUDE.md
- `Spec: Portfolio Redesign (2026-06-08)` --specifies--> `Vercel Deployment (dist/ output)`  [EXTRACTED]
  docs/superpowers/specs/2026-06-08-portfolio-redesign.md → CLAUDE.md
- `index.css (global styles)` --uses--> `tailwindcss ^3.4.0`  [EXTRACTED]
  src/index.css → package.json
- `CSS class: paper-card` --uses_color--> `color: ink (#181512)`  [EXTRACTED]
  src/index.css → tailwind.config.ts

## Communities (20 total, 1 thin omitted)

### Community 0 - "UI Section Components"
Cohesion: 0.07
Nodes (42): About component, About inView animation helper, About note cards (3 narrative notes), Contact component, Contact illustration (email scene with person silhouette), preserve-light-art wrapper (Contact illustration stays light in dark mode), Education component, Experience component (+34 more)

### Community 1 - "React Rebuild Plan"
Cohesion: 0.08
Nodes (30): Education: CSULB — MS Computer Science, Education: GTU — BS Computer Science, Experience: Cre-Art Solutions — Software Engineer Intern, Experience: ISRO — AI/ML Engineer Intern, Experience: Technolee — Software Engineer Data & ML, Goal: Replace Vue 2 with React 18 + Vite + Tailwind, Project: DrugShield AI, Project: Osho Voice TTS (+22 more)

### Community 2 - "Component Functions"
Cohesion: 0.07
Nodes (14): About(), inView(), notes, Props, wordVariant, fade(), Hero(), HeroProps (+6 more)

### Community 3 - "NPM Dependencies"
Cohesion: 0.11
Nodes (21): framer-motion ^11.0.0, lucide-react ^0.363.0, vaidik-portfolio (npm project), react ^18.2.0, tailwindcss ^3.4.0, typescript ^5.2.0, vite ^5.1.0, color: accent (#ffd166) (+13 more)

### Community 4 - "Package Config"
Cohesion: 0.09
Nodes (22): dependencies, framer-motion, lucide-react, react, react-dom, devDependencies, autoprefixer, postcss (+14 more)

### Community 5 - "Work Experience Data"
Cohesion: 0.13
Nodes (15): experience[] array, Job: Cre-Art Solutions - Software Engineer Intern, Job interface, Job: ISRO - AI/ML Engineer Intern, Job: Technolee - Software Engineer (Data & ML), projects[] array, Project: DrugShield AI (case-001), Project: H&M Reviews Scraper (case-008) (+7 more)

### Community 6 - "TS Compiler (Node)"
Cohesion: 0.13
Nodes (14): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleResolution, noEmit (+6 more)

### Community 7 - "Portfolio Content"
Cohesion: 0.13
Nodes (19): Component: About.tsx, Component: Contact.tsx, Component: Education.tsx, Component: Experience.tsx, Component: Footer.tsx, Component: Hero.tsx, Component: Nav.tsx, Component: Projects.tsx (+11 more)

### Community 8 - "TS Compiler (App)"
Cohesion: 0.25
Nodes (7): compilerOptions, allowSyntheticDefaultImports, composite, module, moduleResolution, skipLibCheck, include

### Community 9 - "Skills Data"
Cohesion: 0.29
Nodes (7): SkillGroup: AI / ML, skillGroups[] array, SkillGroup: Backend & Databases, SkillGroup: Cloud & DevOps, SkillGroup interface, SkillGroup: Languages, SkillGroup: Web & Other

### Community 10 - "Education Component"
Cohesion: 0.33
Nodes (4): icons, notes, Degree, education

### Community 11 - "Experience Component"
Cohesion: 0.40
Nodes (3): pillVariants, SkillGroup, skillGroups

### Community 12 - "Vercel Deploy Config"
Cohesion: 0.50
Nodes (3): buildCommand, framework, outputDirectory

### Community 13 - "Deploy Script"
Cohesion: 0.14
Nodes (12): Adding a project, Animations, Architecture, Commands, Component details, Contact, Custom CSS classes (src/index.css), Design system (+4 more)

## Knowledge Gaps
- **125 isolated node(s):** `composite`, `skipLibCheck`, `module`, `moduleResolution`, `allowSyntheticDefaultImports` (+120 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `CLAUDE.md — Portfolio Project Instructions` connect `Portfolio Content` to `React Rebuild Plan`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **Why does `Spec: Portfolio Redesign (2026-06-08)` connect `React Rebuild Plan` to `Portfolio Content`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **What connects `composite`, `skipLibCheck`, `module` to the rest of the system?**
  _126 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `UI Section Components` be split into smaller, more focused modules?**
  _Cohesion score 0.07084785133565621 - nodes in this community are weakly interconnected._
- **Should `React Rebuild Plan` be split into smaller, more focused modules?**
  _Cohesion score 0.07586206896551724 - nodes in this community are weakly interconnected._
- **Should `Component Functions` be split into smaller, more focused modules?**
  _Cohesion score 0.07308377896613191 - nodes in this community are weakly interconnected._
- **Should `NPM Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.11 - nodes in this community are weakly interconnected._