# Clupai’s Portfolio — Animated Next.js developer showcase

## What it does
- Presents Samridh's work with animated hero, about, skills, projects, and CTA sections.
- Highlights featured projects with tags, imagery, and outbound links to code and live demos.
- Provides smooth scrolling, page transitions, and micro-interactions for a polished experience.
- Includes contact/social links for quick outreach.

## Key features
- **Motion & transitions:** GSAP-driven entrances, scroll-triggered reveals, animated loading counter, and page transition banner.
- **Navigation:** Overlay menu with section anchors (Home, About, Skills, Projects, Contact) and external socials.
- **Projects gallery:** Sticky split layout on large screens, per-project badges, descriptions, and CTA buttons.
- **Hero & About:** Emphasized typography, gradient/cover treatments, and word-level animations.
- **Skills marquee:** Animated skill chips entering on scroll.
- **Final CTA:** Logo lockup with scrolling image stacks and copy reveal on scroll.
- **Styling system:** Tailwind CSS with custom utilities, gradients, and CSS variables; Google Fonts (Outfit, IBM Plex Mono).
- **Content assets:** Local images for showcased projects (e.g., GovChat, Notes App, NMMUN, Krishnaveni, PAS).

## Tech stack
- Framework: Next.js 15 (App Router), React 19
- Styling: Tailwind CSS, PostCSS
- Animation & effects: GSAP + @gsap/react, Lenis, TSParticles, Lucide icons, class-variance-authority/clsx/tailwind-merge
- Language: TypeScript

## Architecture overview
- `app/` — Next.js entrypoints (`layout.tsx`, `page.tsx`, `template.tsx`, `not-found.tsx`) and global styles.
- `components/` — UI building blocks (navigation, content sections, containers, UI primitives).
- `lib/` — Utilities (`cn`, `generateKey`), animation helpers, link data, shared prop types.
- `public/` — Static assets (project images, icons).
- Config — `tailwind.config.ts`, `postcss.config.mjs`, `tsconfig.json`, `next.config.ts`, `components.json`.
- Scripts — `npm run dev|build|start|lint`.
- Flow — `layout` sets fonts + metadata → `template` shows loading/banner animation → `page` composes sections → components pull data/constants from `lib`.

## Getting started (local)
- Prerequisites: Node.js and npm.
- Install:
  ```bash
  npm install
  ```
- Run dev server:
  ```bash
  npm run dev
  ```
- Build for production:
  ```bash
  npm run build
  ```
- Start production build:
  ```bash
  npm run start
  ```
- Environment variables: None required; no env usage present in the code.

## Usage
- Visit `/` to experience the animated landing: hero → about → skills → projects → CTA → footer contact.
- Use the menu or anchor links (`#home`, `#about`, `#skills`, `#projects`, `#contact`) to navigate sections.

## Testing / Quality

  ```bash
  npm run lint
  ```

## Deployment (Vercel)
- Build command: `npm run build`
- Install command: `npm install`
- Output: Next.js (automatic by Vercel)
- Set Vercel project to Node.js/Next.js runtime; no env vars required based on current code.
