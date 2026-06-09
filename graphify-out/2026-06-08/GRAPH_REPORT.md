# Graph Report - .  (2026-06-08)

## Corpus Check
- Large corpus: 157 files · ~1,840,842 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 235 nodes · 269 edges · 19 communities (16 shown, 3 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.87)
- Token cost: 0 input · 39,121 output

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
- `index.css (global styles)` --uses--> `tailwindcss ^3.4.0`  [EXTRACTED]
  /Users/vaidikshah/Projects/portfolio/Portfolio/src/index.css → /Users/vaidikshah/Projects/portfolio/Portfolio/package.json
- `CSS class: paper-card` --uses_color--> `color: ink (#181512)`  [EXTRACTED]
  /Users/vaidikshah/Projects/portfolio/Portfolio/src/index.css → /Users/vaidikshah/Projects/portfolio/Portfolio/tailwind.config.ts
- `CSS class: pill-filled` --uses_color--> `color: accent (#ffd166)`  [EXTRACTED]
  /Users/vaidikshah/Projects/portfolio/Portfolio/src/index.css → /Users/vaidikshah/Projects/portfolio/Portfolio/tailwind.config.ts
- `CSS class: paper-card` --uses_color--> `color: card (#fffaf0)`  [EXTRACTED]
  /Users/vaidikshah/Projects/portfolio/Portfolio/src/index.css → /Users/vaidikshah/Projects/portfolio/Portfolio/tailwind.config.ts
- `index.html — Vite Entry Point` --implements--> `Tech Stack: React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion + Lucide React`  [INFERRED]
  /Users/vaidikshah/Projects/portfolio/Portfolio/index.html → /Users/vaidikshah/Projects/portfolio/Portfolio/CLAUDE.md

## Communities (19 total, 3 thin omitted)

### Community 0 - "UI Section Components"
Cohesion: 0.07
Nodes (42): About component, About inView animation helper, About note cards (3 narrative notes), Contact component, Contact illustration (email scene with person silhouette), preserve-light-art wrapper (Contact illustration stays light in dark mode), Education component, Experience component (+34 more)

### Community 1 - "React Rebuild Plan"
Cohesion: 0.07
Nodes (39): Goal: Replace Vue 2 with React 18 + Vite + Tailwind, Plan: Portfolio React Rebuild Implementation, Task 1: Remove Vue 2, Scaffold React + Vite, Task 2: Design System CSS tokens, Task 12: Vercel Config Update, Component: About.tsx, Component: Contact.tsx, Component: Education.tsx (+31 more)

### Community 2 - "Component Functions"
Cohesion: 0.08
Nodes (12): About(), inView(), notes, fade(), Hero(), HeroProps, links, NavProps (+4 more)

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
Cohesion: 0.22
Nodes (10): Education: CSULB — MS Computer Science, Education: GTU — BS Computer Science, Experience: Cre-Art Solutions — Software Engineer Intern, Experience: ISRO — AI/ML Engineer Intern, Experience: Technolee — Software Engineer Data & ML, Project: DrugShield AI, Project: Osho Voice TTS, Project: PageSpeaks (+2 more)

### Community 8 - "TS Compiler (App)"
Cohesion: 0.25
Nodes (7): compilerOptions, allowSyntheticDefaultImports, composite, module, moduleResolution, skipLibCheck, include

### Community 9 - "Skills Data"
Cohesion: 0.29
Nodes (7): SkillGroup: AI / ML, skillGroups[] array, SkillGroup: Backend & Databases, SkillGroup: Cloud & DevOps, SkillGroup interface, SkillGroup: Languages, SkillGroup: Web & Other

### Community 10 - "Education Component"
Cohesion: 0.40
Nodes (3): icons, Degree, education

### Community 12 - "Vercel Deploy Config"
Cohesion: 0.50
Nodes (3): buildCommand, framework, outputDirectory

## Knowledge Gaps
- **113 isolated node(s):** `composite`, `skipLibCheck`, `module`, `moduleResolution`, `allowSyntheticDefaultImports` (+108 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `composite`, `skipLibCheck`, `module` to the rest of the system?**
  _114 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `UI Section Components` be split into smaller, more focused modules?**
  _Cohesion score 0.07084785133565621 - nodes in this community are weakly interconnected._
- **Should `React Rebuild Plan` be split into smaller, more focused modules?**
  _Cohesion score 0.06747638326585695 - nodes in this community are weakly interconnected._
- **Should `Component Functions` be split into smaller, more focused modules?**
  _Cohesion score 0.07881773399014778 - nodes in this community are weakly interconnected._
- **Should `NPM Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.11 - nodes in this community are weakly interconnected._
- **Should `Package Config` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Should `Work Experience Data` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._