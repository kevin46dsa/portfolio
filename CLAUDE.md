# CLAUDE.md

Orientation for future agents working on this repo. This is Kevin D'sa's personal portfolio — a public-facing site, so treat design/UX changes as real product decisions, not just code changes.

## Before starting anything

**Run `gh issue list` first.** GitHub Issues is the backlog for this project — planned work, known bugs, and design asks live there, not in this file or in conversation memory. `PROGRESS.md` is a historical record of what's shipped (updated at checkpoints), not a task list. If you're about to do speculative/discretionary work and there's no issue for it, consider filing one before starting, so the backlog stays the source of truth.

## Tech stack

- React 19 + TypeScript + Vite (migrated off Create React App — see `PROGRESS.md` for that history). `npm run dev` (port 3000), `npm run build` (`tsc -b && vite build`), `npm run test:e2e` (Playwright, config auto-starts the dev server).
- `react-bootstrap` for primitives (`Button`, `Nav`, `Container`, etc.), `framer-motion` for animation, `react-router-dom` for routing (`src/App.tsx`).
- `tsconfig.app.json` deliberately has `strict: false`/`checkJs: false` — a lot of older components are loosely-typed `.jsx`, not just `.tsx`. Don't be surprised by that; tightening it incrementally is fine, but it's not an error to fix reflexively.

## Design system

- `src/styles/tokens.css` — colors, spacing (4px-scale `--space-1`...`--space-8`), radii, shadows, one easing curve (`--ease-out-soft`). Imported globally via `src/index.css`. No dark mode, no duration tokens yet (every component hardcodes its own transition duration) — tracked in issue #16.
- Canonical breakpoints are documented in `tokens.css` as 480/768/1024/1400, but not consistently followed across older CSS files (also #16) — new/rewritten CSS should stick to that scale.
- **Reference components** for the bar new work should hit — hover/transition treatment, mobile-first responsiveness, `prefers-reduced-motion` handling: `src/Components/ProjectCard/`, `src/Components/Landing/Hero/`, `src/Components/SectionHeading/`, `src/Components/Reveal/` (`Reveal`/`RevealGroup`/`RevealItem` for scroll-entrance animation), `src/Components/Photography/MosaicGrid.tsx`+`Lightbox.tsx` (portal, focus trap, scroll-snap filmstrip pattern — reuse this pattern before inventing a new horizontal-scroll mechanism). Older pages (Resume) predate this pattern and are known-inconsistent — that's what #16 is for, not a reason to copy their style into new work.

## Git workflow — read this before touching git

**Never push directly to `master`.** Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds and deploys straight to production (S3 + CloudFront) with **no staging step**. Every change goes: new feature branch off `master` → implement → verify (see below) → push → `gh pr create` → Kevin reviews and merges himself. `gh` is installed and authenticated in this environment.

Keep PRs small and single-purpose — one bug fix or one design change per PR, not bundled. This has been the working pattern for every PR so far (#17-#20) and Kevin has explicitly asked for "one thing at a time" when scoping multi-part requests.

## Verification bar before opening a PR

For any non-trivial change: `npx tsc -b`, `npm run test:e2e` (full suite must stay green), `npm run build`. For UI changes, actually look at it — start the dev server and take Playwright screenshots at a mobile width (375-390px) and a desktop width (1280px); most first-time visitors to this site are on a phone, so mobile is not an afterthought. If you're fixing a bug, write the test first, confirm it fails against the broken code, then fix it (established pattern: `e2e/photography-page.spec.ts` was written and run against the crash before the fix landed).

## A few things not to re-litigate

- "Get in touch"/"Contact" (Header, Footer) link straight to Kevin's LinkedIn profile (`https://www.linkedin.com/in/kevindsa2017`), not an in-app contact form — deliberate, not a placeholder. There's no public LinkedIn URL scheme that opens a message-compose box for arbitrary visitors, so a profile link is the correct, final answer here, not a stopgap. A proper Recommendations page (visitor submits name/email/text → stored in DynamoDB → Kevin approves → shows on About page) is tracked as future work in issue #10 — a separate, larger project, not a contact form.
- The Header logo's continuous bounce animation is intentional, not a bug — Kevin wants to keep it (and add more decorative motion later, deliberately deferred).
- `src/Constants/TempProjectData.ts` is the real, permanent source of truth for project content on both `/projects` and the landing page preview, despite the "Temp" name.
