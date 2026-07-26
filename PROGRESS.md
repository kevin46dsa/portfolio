# Portfolio Redesign — Progress Tracker

Branch: `vite-migration` (based off `master`, will merge back when complete).
Plan reference: Vite migration + scrollytelling landing redesign.

## Decisions locked in
- Full CRA → Vite migration, using `portfoliov2/` scaffold (React 19 + Vite 7 + TS) as the tooling baseline.
- Deploy target: AWS S3 + CloudFront (workflow already drafted in `portfoliov2/.github/workflows/deploy.yml`), replacing Netlify. AWS secrets must be added manually by Kevin in GitHub repo settings — not something the agent can do.
- Stale branches `refactor/createreactapp-to-vite`, `refactor/projects-display-cards`, `refactor/bootstrap-to-mantine` — intentionally ignored, starting fresh from `master`.
- Staying on Bootstrap/react-bootstrap for this pass (no Tailwind/Mantine/Radix swap now — deferred as a separate future project).
- Animation: framer-motion, used for scroll reveals (staggered), scroll-linked parallax on Top-3-Projects, and hero entrance choreography. Must respect `prefers-reduced-motion` and be dialed back on mobile.
- Landing page (`/`) becomes: Hero → Top 3 Projects (parallax) → Work Experience preview → About Me preview. Only these 4 blocks are part of the scroll narrative. Existing Header (incl. Hobbies dropdown) and all other routes (Photography/Music/Bookshelf/Blog/Resume/Sitemap) stay as separate pages, unchanged in nav.
- Section titles ("Projects", "Work Experience", "About Me") are hyperlinks to `/projects` and `/about` respectively.
- Mobile-first is a hard requirement (majority of traffic is mobile).
- Featured projects: OffTheFrame, 3D T-Shirt Customizer, SoulMate.
- Dead code dropped during migration (not ported): `RentPipe.jsx`, `UnderConstruction/`, `Music/MusicSetComponents/Slider.jsx`, `SocialLinks.css` (empty). Unused deps dropped: `emailjs-com`, `styled-components`, `react-hide-on-scroll`.

## Phase 0 — Git setup
- [x] Create `vite-migration` branch off `master`
- [x] Create this PROGRESS.md

## Phase 1 — CRA → Vite migration (full parity, no redesign yet) — DONE
- [x] Vite tooling/config in place (vite.config.ts, tsconfig*, eslint.config.js, index.html, main.tsx)
- [x] Env vars renamed REACT_APP_* → VITE_*, call sites updated (only octokit.js uses one; YOUTUBE key was already unused pre-migration)
- [x] package.json rebuilt (Vite deps + only actually-used runtime deps)
- [x] All Components/Constants/Assets ported (edited in place — no separate copy step needed since work happens directly in `portfolio/`)
- [x] Dead files dropped: RentPipe.jsx, UnderConstruction/, Music/MusicSetComponents/Slider.jsx, SocialLinks.css (+ its now-removed import), empty Page/Feed dir. Unused deps dropped: emailjs-com, react-hide-on-scroll, country-codes-list (confirmed 0 usages, an addition beyond the original 3 — also unused).
- [x] **Correction to plan**: `styled-components` had to be added back (not left dropped) — `react-photo-collage`'s bundled dist code does an internal `require("styled-components")` that isn't declared in its own package.json. Confirmed via runtime error, not a code review — genuinely needed, not unused.
- [x] **react-icons pinned to ^4.8.0, not upgraded to 5.x** — react-icons 5.x removed all AWS-related Simple Icons (`SiAwslambda`, `SiAmazonaws`, `SiAmazondynamodb`, `SiAwsamplify`, `SiAmazonec2`, `SiAmazonapigateway` — all 6 used in `About/Skills/AWSServices.tsx`) upstream, likely a trademark-driven delisting. 4.8.0 still has them and is fully React-19 compatible (peer dep is just `react: '*'`).
- [x] `react-photo-collage` peer deps (React 16 only) forced via package.json `overrides` (react/react-dom/@types both directions) — no upstream React 19 release from this package.
- [x] Added a real Playwright E2E suite (not just a manual check) — `playwright.config.ts` + `e2e/smoke.spec.ts`, run via `npm run test:e2e`. Covers all 9 real routes + the 404 fallback. Distinguishes real crashes (`pageerror`, always asserted zero) from console noise on pages with known flaky third-party embeds (`/photography`, `/bookshelf`, `/resume`, `/music` — Goodreads CORS proxy, Google Drive iframe 403, react-photo-collage's React-19-legacy-API warnings, Spotify/YouTube permissions-policy noise — all pre-existing, unrelated to the migration, confirmed via screenshot that pages still render correctly).
- [x] `npm run dev` — all routes verified working
- [x] `npx playwright test` (`npm run test:e2e`) — 10/10 passing
- [x] `npm run build` — production build succeeds (767 modules, tsc type-check passes with relaxed strictness — see note below)
- Note: `tsconfig.app.json` sets `strict: false`/`checkJs: false` deliberately, to avoid a wall of type errors across loosely-typed pre-existing `.jsx`/`.tsx` files during a parity-focused migration. Tightening this incrementally is a reasonable future follow-up, not done here.
- Note: production bundle has one >500kB JS chunk (909KB main bundle) — Vite warns about this. Not addressed here (no route-based code-splitting) — flagged as a future optimization, out of scope for this pass.

## Phase 2 — Design tokens + shared primitives
- [ ] `src/styles/tokens.css` created + imported globally
- [ ] `Reveal` component (framer-motion, stagger support, reduced-motion aware)
- [ ] `SectionHeading` component (clickable title + arrow)
- [ ] `ProjectHome.jsx` / `About.jsx` rewired to use `Reveal` (old IntersectionObserver hooks removed)
- [ ] Retheme pass: Header, Footer, Bookshelf, Photography, Pagenotfound, HorizontalScroller, SplitVideoSection → accent token

## Phase 3 — Scrollytelling landing narrative
- [ ] Project `id` slugs added to TempProjectData.ts
- [ ] `experienceData` exported from Experience.tsx
- [ ] `aboutSummary` lifted from AboutCard.tsx
- [ ] `Hero` component
- [ ] `ProjectsPreview` component (parallax, staggered, mobile-safe)
- [ ] `ExperiencePreview` component
- [ ] `AboutPreview` component
- [ ] `Home.tsx` rewritten as orchestrator

## Phase 4 — Deploy
- [ ] `deploy.yml` copied into `portfolio/.github/workflows/`, trigger branch fixed to `master`
- [ ] **Manual step flagged to Kevin**: add AWS secrets in GitHub repo settings (AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, S3_BUCKET_NAME, CLOUDFRONT_DISTRIBUTION_ID)

## Final verification
- [ ] Responsive check (375/390/768/1024/1440px)
- [ ] `prefers-reduced-motion` respected
- [ ] Section-heading hyperlinks navigate correctly
- [ ] All pre-existing routes still render correctly
- [ ] `npm run build` succeeds
