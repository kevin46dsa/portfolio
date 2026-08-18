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

## Phase 2 — Design tokens + shared primitives — DONE
- [x] `src/styles/tokens.css` created + imported globally via `src/index.css`
- [x] `Reveal` / `RevealGroup` / `RevealItem` components (`src/Components/Reveal/`) — framer-motion `whileInView`, stagger support for the upcoming Landing sections, `useReducedMotion()` aware, custom ease-out curve via `--ease-out-soft` token
- [x] `SectionHeading` component (`src/Components/SectionHeading/`) — clickable title + animated hover arrow, styled with tokens
- [x] `ProjectHome.jsx` / `About.jsx` rewired to use `Reveal` — old duplicated `IntersectionObserver` hooks removed from both; dead `.fade-up`/`.fade-right`/`.animate`/`fadeIn`/`fadeIn2` CSS removed from `MyCard.css`/`Projects.css`
- [x] Retheme pass:
  - Header/Footer: nav link hover/active states → `var(--color-accent)` (Footer.css created, its import was previously commented out)
  - Pagenotfound: CTA button color → accent
  - HorizontalScroller/SplitVideoSection: local `--hs-accent`/`--svs-accent` now alias `var(--color-accent)` instead of duplicating the hex literal
  - **Bootstrap `.btn-primary` retheme** (bigger win than spot-fixing individual files): added `src/styles/bootstrap-overrides.css`, imported in `App.tsx` right after `bootstrap.min.css` (import order matters — must load after Bootstrap to win the cascade). Overrides `.btn-primary`'s own `--bs-btn-bg`/`--bs-btn-border-color`/hover/active/disabled variables directly, since Bootstrap 5.3's compiled CSS bakes literal hex values on `.btn-primary` itself rather than referencing a root `--bs-primary` var — retheming the root var alone would not have worked. This retheme's every `variant="primary"` button site-wide (Home, Projects, etc.) in one place instead of touching each file.
  - Bookshelf/Photography CSS: confirmed no actual blue/Bootstrap-primary colors present to swap (already neutral grays) — left untouched per "no unnecessary churn."
- [x] Verified: `npx playwright test` (10/10, after confirming one failure was a transient Vite dep-optimization hiccup from `framer-motion`'s first import, not a real bug), `npm run build`, visual screenshot check of `/projects` and `/about`.

## Phase 3 — Scrollytelling landing narrative — DONE
- [x] Project `id` slugs added to all 6 entries in TempProjectData.ts (additive, non-breaking to the full `/projects` page)
- [x] `experienceData` exported from Experience.tsx; its react-chrono theme colors updated from black to the accent hex (`#6366f1`, kept in sync by convention/comment since react-chrono's theme prop takes literal strings, not CSS vars)
- [x] `aboutSummary` (`{heading, teaser}`) lifted from AboutCard.tsx — the component's own rendered output on `/about` is unchanged, just the first paragraph's plain text was factored out for reuse
- [x] `Hero` (`src/Components/Landing/Hero/`) — Home.tsx's original content moved here; CTA buttons switched from `variant="secondary"` to `variant="primary"` (picks up the accent retheme from Phase 2 automatically); `min-height: 100vh` + `100svh` fallback for the iOS address-bar jump; entrance choreography via a framer-motion stagger container (heading → illustration → CTA buttons animate in sequence on mount, not simultaneously) — separate mechanism from `Reveal` since it fires on mount, not on scroll-into-view
- [x] `ProjectsPreview` — filters `TempProjectData` by 3 featured ids (`off-the-frame`, `3d-tshirt-customizer`, `soulmate`, in that order), each card is its own `ProjectCard` subcomponent with an independent `useScroll`/`useTransform` (image drifts more than caption for a depth effect, plus a subtle scale "settle" on scroll), parallax range zeroed below 768px and under `prefers-reduced-motion` via a shared `useIsMobile` hook, `RevealGroup`/`RevealItem` stagger entrance, mobile-first grid (1 col → 2 col @768px → 3 col @1024px)
- [x] `ExperiencePreview` — 2 most recent `experienceData` entries as condensed cards (no react-chrono instance), stagger entrance, stacks on mobile / row on desktop
- [x] `AboutPreview` — profile photo + `aboutSummary` teaser, two-column on desktop, stacked/centered on mobile
- [x] Added a shared `SectionDivider` component (thin accent line that grows in per-section via `whileInView`) — used identically by all 3 preview sections, giving the scroll narrative distinct visual "beats" per the professional-animation requirement
- [x] `Home.tsx` rewritten as the orchestrator (`<Hero/><ProjectsPreview/><ExperiencePreview/><AboutPreview/>`) — `App.tsx`'s routing table needed no changes
- [x] Extended the E2E suite (`e2e/smoke.spec.ts`) with a `landing page scroll narrative` describe block: all 4 sections present, all 3 section-heading hyperlinks navigate to the correct full page (`/projects`, `/about` ×2), and a dedicated `prefers-reduced-motion` context test — 13/13 passing
- [x] Verified via screenshots at 1280px and 390px (mobile): Hero, Projects (parallax cards + accent CTAs), Experience, About all render correctly; confirmed zero horizontal overflow at 375px
- **Pre-existing content issue found, not caused by this work**: the SoulMate project's screenshot images (hosted on a Firebase Storage bucket) return HTTP 402 (Payment Required) — a Firebase billing/quota issue on the original project, unrelated to the migration. Same broken image would show on the current live CRA site today. Flagged for Kevin to fix by re-hosting those 2 images (e.g. same S3 bucket the other projects already use) — not something addressable in code.

## Phase 4 — Deploy — DONE (mostly already existed)
- **Correction to plan**: the plan assumed `.github/workflows/deploy.yml` needed to be copied over from `portfoliov2/` and its trigger branch fixed from `main` to `master`. In fact, a real, working deploy workflow already existed on `master` (3 real commits: "added GitHub Actions workflow...", "refactored...", "fix: correct path for S3 deployment...") — it was already correctly triggering on `master` and already using `npm ci --legacy-peer-deps`. So AWS S3+CloudFront deploy was already live/wired up before this session, not something to newly set up.
- [x] **The one real break from the Vite migration**: the workflow ran `aws s3 sync build/ ...` (CRA's output dir). Vite outputs to `dist/` (set in `vite.config.ts`). Fixed the sync path to `dist/`.
- [x] Verified `npm ci --legacy-peer-deps` (the exact command CI runs) succeeds against the new lockfile, and `npm run build` produces the `dist/` directory the workflow now expects (including `_redirects`, `manifest.json`, etc. correctly copied through from `public/`).
- [x] AWS secrets (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `S3_BUCKET_NAME`, `CLOUDFRONT_DISTRIBUTION_ID`) were presumably already configured in GitHub repo settings for the existing workflow to have worked before — no action needed unless Kevin sees deploy failures.
- **Flagged for Kevin (infra-level, can't verify without AWS console access)**: this is a client-side-routed SPA (react-router). The existing Netlify setup handled deep-link/refresh routing via `public/_redirects`. Confirm the S3+CloudFront setup has an equivalent fallback (typically: CloudFront custom error response mapping 403/404 → `/index.html` with a 200 status) — otherwise directly visiting or refreshing on `/about`, `/projects`, etc. would fail at the S3/CloudFront layer before React Router ever sees the request.

## Final verification — DONE
- [x] Responsive check at 375px/390px (mobile) and 1280px (desktop) via screenshots — no horizontal overflow, cards stack correctly, parallax visible on desktop and absent (but still fade/slide-in) on mobile
- [x] `prefers-reduced-motion` respected — dedicated E2E test using a `reducedMotion: "reduce"` browser context, zero uncaught errors
- [x] Section-heading hyperlinks navigate correctly — dedicated E2E test clicking all 3 (Projects → /projects, Work Experience → /about, About Me → /about)
- [x] All pre-existing routes still render correctly — full E2E suite, 13/13 passing, run three times across this session (after Phase 1, Phase 2, Phase 3, and once more on a fully clean `rm -rf node_modules && npm install && npm run build`)
- [x] `npm run build` succeeds (clean install verified)
- [x] `npm ci --legacy-peer-deps` succeeds (the exact command the deploy workflow runs)

## Status as of this checkpoint
- **Merged to master** — the `vite-migration` work above landed via PR #6-#9.
- **SoulMate project images**: fixed — see the 2026-08-17 checkpoint below (was Firebase Storage 402, now re-hosted to S3).
- **Confirm CloudFront SPA fallback** — still unconfirmed, can't verify without AWS console access. Still Kevin's to check.
- **Bundle size**: still ~830KB minified / ~272KB gzipped, Vite still warns. Not addressed in the checkpoint below either — still open, not currently tracked as a GitHub issue.
- **UI library**: moving off Bootstrap is still explicitly deferred, no timeline.
- **TypeScript strictness**: `tsconfig.app.json` still has `strict: false`/`checkJs: false` deliberately. Still open.

## Where planned/future work is tracked
As of this checkpoint, **GitHub Issues is the backlog** (`gh issue list`), not this file. This file stays a historical record of what's shipped, updated at checkpoints — see `CLAUDE.md` for the full convention. Anything above still marked open (CloudFront fallback, bundle size, UI library migration, TS strictness) hasn't been turned into a tracked issue yet; file one before starting on it rather than reviving it from this note.

---

# Checkpoint — 2026-08-17

Everything below happened in a single continuous session after the Vite migration above had already merged to `master`. Four PRs shipped, in order:

## PR #17 — Fix photography lightbox crash + mosaic redesign
- **Bug**: clicking a photo on `/photography` to view it full-screen showed a blank white page, and Escape did nothing. Root-caused live (not guessed from CSS) by reproducing it with a throwaway Playwright script against the dev server: `react-photo-collage`'s lightbox is built on a transitive dependency, `react-images@1.1.7` (peer deps cap at React 16, last published 2018), which calls `ReactDOM.findDOMNode()` — an API removed outright in React 19. The crash happened inside the same subtree that would own the Escape handler, which is why Escape did nothing either.
- **Fix**: replaced `react-photo-collage` + `react-images` entirely with native `MosaicGrid`/`Lightbox` components (`src/Components/Photography/`) — portal-rendered, focus trap, Escape/backdrop/arrow-key navigation, framer-motion entrance respecting `prefers-reduced-motion`, tokenized to match the rest of the site. Also dropped `styled-components`, which PROGRESS.md itself had noted was only kept around for `react-photo-collage`'s undeclared internal dependency on it.
- Added a "Featured" mosaic section to the page (`FeaturedPhotos` in `PhotographyData.ts`).
- New `e2e/photography-page.spec.ts`, written and run against the broken code first to confirm real repro (7/8 failed), then against the fix (8/8 passed) — the specific regression check is asserting zero `pageerror` events through the full open/navigate/close flow.

## PR #18 — Featured section: swipeable filmstrip on mobile
- Kevin's feedback after #17 shipped: the Featured section looked boring on phone (desktop's mosaic grid just squeezed into 2 columns). Replaced with a horizontally-scrolling filmstrip on mobile only (CSS scroll-snap, no JS needed for the swipe gesture, dot indicators via a small `IntersectionObserver`) — scoped entirely to `size="featured"` in `MosaicGrid`, desktop and per-album grids are pixel-identical to before.

## PR #19 — Update OffTheFrame, 3D T-Shirt, and SoulMate project screenshots
- Kevin uploaded new images to S3 (`projects/offtheframe/`, `projects/3dshirt/`, `projects/soulmate/`); `TempProjectData.ts` updated to point at them.
- Side effect: fixed SoulMate's images, which had been pointed at Firebase Storage URLs returning HTTP 402 (Payment Required) — exactly the issue this file flagged as open above, now resolved.
- Noticed in passing, not fixed: RentPipe's own screenshots are separately broken (different pre-existing hosting issue) — now tracked as its own GitHub issue rather than left as a stray note.

## PR #20 — Redesign /projects: centered featured column + horizontal scroll
- Kevin didn't like the desktop "bento" layout (3 featured projects alternating left/right via `grid-template-areas`). Replaced with a single centered column for the 3 featured projects, and a horizontal-scroll "All Projects" row for everything else — automatically picks up any project added to `TempProjectData.ts` later, no hardcoded count. Applied at every breakpoint per Kevin's direction, since mobile previously had no Featured/All distinction at all.
- Reused the scroll-snap/peeking-card CSS pattern from #18's filmstrip, and the mouse-wheel-to-horizontal technique already proven in `HorizontalScroller.tsx`.

## Verification, all 4 PRs
Each PR: full `npm run test:e2e` suite green before merge (43/43 as of #20), `npx tsc -b` clean, `npm run build` succeeds, Playwright screenshots at 1280px and 375px/390px reviewed before calling it done. Each on its own feature branch, PR opened via `gh pr create`, reviewed and merged by Kevin — never pushed directly to `master` (it auto-deploys to production on push, no staging step).
