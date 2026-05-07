# Splitea Project Landing Page

## Context

The portfolio site (`/Users/enzocolinecul/Documents/Dev/new-portfolio`) currently shows Splitea as just one card in the rotating Portfolio carousel — easy to miss. The user wants Splitea to feel like a featured, hero project: a prominent attention-grabbing button on the home page that opens (in a new tab) a dedicated, scroll-driven presentation at `/splitea-project`. The presentation must read as a real web page (no slide numbers, no "next slide" framing) and animate as the visitor scrolls between sections.

The reference content lives in `Splitea Presentation.html` at the repo root — a bundled, JavaScript-driven deck. We will translate its substance into a native React page using the portfolio's existing CSS conventions, so it loads fast and matches the rest of the site's tone.

## Architecture decisions

**Routing.** The project is React 17 CRA with no router. To get a real path like `/splitea-project` we add `react-router-dom` v6 and wrap `App` in `<BrowserRouter basename="/new-portfolio">` (matches the `homepage` field in `package.json`). For GitHub Pages deep-link / refresh support we add the standard `public/404.html` SPA fallback (the `rafgraph/spa-github-pages` trick). Locally the URL is `http://localhost:3000/splitea-project`; on GH Pages it is `https://enzocolinecul.github.io/new-portfolio/splitea-project`.

**No new heavy libs.** Animations use plain CSS keyframes + `IntersectionObserver` (custom hook). This matches the project's lightweight ethos — no Framer Motion, no GSAP.

**Section transitions.** CSS `scroll-snap-type: y mandatory` on the page container with `scroll-snap-align: start` on each `<section>` (each 100vh). Mouse wheel / trackpad / arrow keys naturally snap one section at a time. On touch devices the snap is also smooth.

**Branding.** The Splitea page uses its own palette (orange `#FF7A1A` on navy `#0F1A2A`) — independent from the portfolio's red/maroon — so it visually reads as "this is Splitea, not the portfolio."

## Files to create

| Path | Purpose |
| --- | --- |
| `public/404.html` | GH Pages SPA fallback that redirects deep links into `index.html` |
| `src/pages/Portfolio.jsx` | Wrapper that renders the existing portfolio sections (extract current `App` body here) |
| `src/pages/SpliteaProject/SpliteaProject.jsx` | The full Splitea landing page (sections + scroll snap container) |
| `src/pages/SpliteaProject/splitea.css` | All styling for the Splitea page (scoped via a top-level `.splitea` class) |
| `src/pages/SpliteaProject/sections/Cover.jsx` | Section 1 — hero / cover |
| `src/pages/SpliteaProject/sections/Problem.jsx` | Section 2 — the problem |
| `src/pages/SpliteaProject/sections/Product.jsx` | Section 3 — product tour |
| `src/pages/SpliteaProject/sections/AddExpense.jsx` | Section 4 — three input modes + AI scan |
| `src/pages/SpliteaProject/sections/Architecture.jsx` | Section 5 — system architecture diagram (CSS grid) |
| `src/pages/SpliteaProject/sections/AIWorkflow.jsx` | Section 6 — AI workflow steps |
| `src/pages/SpliteaProject/sections/Roadmap.jsx` | Section 7 — Now / Next / Later / Vision |
| `src/pages/SpliteaProject/sections/Closing.jsx` | Section 8 — closing + contact CTA |
| `src/pages/SpliteaProject/hooks/useInView.js` | Small `IntersectionObserver` hook returning `[ref, isInView]` |
| `src/components/header/SpliteaCTA.jsx` | The new attention-grabbing button (separate file so it has its own pulse animation styling) |
| `src/components/header/spliteaCTA.css` | Button styling (orange gradient, pulse ring, glow) |
| `SPLITEA-NEW-PAGE.md` | Copy of this plan at project root, per user request |

## Files to modify

| Path | Change |
| --- | --- |
| `package.json` | Add `react-router-dom` (^6) dependency |
| `src/App.jsx` | Wrap in `<BrowserRouter basename="/new-portfolio">` + `<Routes>`; route `/` → `<Portfolio />`, `/splitea-project` → `<SpliteaProject />`. Keep `<Toaster />` at top level only on `/` |
| `src/components/header/Header.jsx` | Render `<SpliteaCTA />` between the typing animation and the existing `<CTA />` (most visible spot, above the fold, not in the tab bar) |
| `src/components/header/CTA.jsx` | (no change) — kept as is so existing buttons remain |

## Key existing files referenced (read-only — for style patterns)

- `src/index.css` — global CSS variables and base typography (lines 1–80 define the color palette / fonts the new button must respect)
- `src/components/header/header.css` — `.cta` flex layout pattern reused for button placement
- `src/components/portfolio/Portfolio.jsx:36` — current Splitea entry; we keep it (it links to the GitHub repo) but the new featured button takes the spotlight
- `package.json:5` — `homepage` field; this dictates the `basename` for `<BrowserRouter>`

## The Splitea page — section-by-section

Each section is 100vh, scroll-snap aligned, and runs a fade-in + slide-up animation when its `useInView` hook reports `isInView === true`.

1. **Cover** — Big title `Splitea`, tagline `Shared expenses, sorted`, subtitle, tech stack pills (`React Native · Expo`, `FastAPI · MySQL · AWS`, `AI receipt workflows`). Animated chevron prompt: "scroll to explore."
2. **The Problem** — "Three friends, one receipt, 40 minutes." Pain-point cards (mental math, WhatsApp threads, spreadsheets, Venmo nudges). Stat row.
3. **The Product** — Net balance carousel mock + activity feed mock + bold orange CTA mock. Headline "Your money, at a glance."
4. **Add Expense (3 modes + AI scan)** — Three columns: Split with AI, Extract Total, Manual Entry. Inline AI examples list ("Split everything 4 ways," "Burgers equal, drinks only Juan"). Tools row: OCR · Voice · Reasoning.
5. **Architecture** — CSS-grid diagram: Client → API → Data + Infra + AI. Pure CSS boxes/arrows; no image needed.
6. **AI Workflow** — Numbered horizontal flow (1 Snap → 2 OCR → 3 Voice → 4 Bedrock → 5 Approve). Animation reveals each step with staggered delay.
7. **Roadmap** — Four columns: Now (Q2 2026) / Next (Q3 2026) / Later (Q4 2026) / Vision (2027). Each column animates in left-to-right.
8. **Closing** — "Settle up. Less time on the math. More time on the dinner." Email link to `enzocolinecul1997@gmail.com`. Small "← back to portfolio" link.

Wording is taken from the Phase-1 explorer's extraction of the source deck. **Every reference to "slide N", "next slide", "deck", or slide counts is removed.** Section transitions are visual (animations) not numbered.

## The new button — design

Component: `<SpliteaCTA />` — anchor `<a href="/splitea-project" target="_blank" rel="noopener noreferrer">` so it opens in a new tab.

Visual language to grab attention without clashing with the existing site:

- Pill-shaped, orange gradient (`#FF7A1A → #FFB066`) — Splitea's brand color, distinct from the site's red `--color-primary`
- Continuous **pulse ring** animation (CSS `@keyframes pulse` — outward expanding ring, 2s loop)
- Subtle **idle bob** (translateY ±2px, 3s loop) so it stays in motion peripherally
- Hover: scale(1.05), brighter glow, ring pause
- Inner content: a small spark/sparkle SVG + text **"Check my last project!"**
- Sits inside the header above the existing CTA row, with `margin-top: 1.5rem`

Mobile (≤600px): font-size shrinks, animation amplitude halved, pulse ring removed (perf).

## Animation system

`useInView(threshold = 0.35)` returns `[ref, isInView]`. Sections add the class `.splitea-section--visible` when `isInView` is true. CSS:

```css
.splitea-section { opacity: 0; transform: translateY(40px); transition: opacity 700ms ease, transform 700ms ease; }
.splitea-section--visible { opacity: 1; transform: translateY(0); }
.splitea-section--visible .stagger > * { animation: rise 600ms ease both; }
.splitea-section--visible .stagger > *:nth-child(1) { animation-delay: 100ms; }
.splitea-section--visible .stagger > *:nth-child(2) { animation-delay: 200ms; }
/* ...etc up to nth-child(6) */
```

This gives both a section-level fade and per-element stagger inside each section without any animation library.

## Scroll behavior

```css
.splitea { scroll-snap-type: y mandatory; overflow-y: scroll; height: 100vh; }
.splitea-section { scroll-snap-align: start; min-height: 100vh; }
```

Trackpad/wheel/space/arrow keys naturally move section-by-section. The browser's native scrollbar still works. We add `prefers-reduced-motion: reduce` overrides that disable snap + animations.

## Implementation order

1. Install `react-router-dom`: `npm install react-router-dom@^6`
2. Add `public/404.html` GH Pages SPA fallback
3. Refactor `App.jsx` → wrap in `<BrowserRouter>`, add routes, extract current body into `src/pages/Portfolio.jsx`
4. Build `useInView.js` hook
5. Build the eight section components + `SpliteaProject.jsx` shell + `splitea.css`
6. Build `SpliteaCTA.jsx` + CSS
7. Wire the button into `Header.jsx`
8. Copy this plan to `SPLITEA-NEW-PAGE.md` at the project root

## Verification

- `npm start` and visit `http://localhost:3000/` — the home page loads with all existing sections plus the new pulsing "Check my last project!" button between the typing line and the existing CTAs.
- Click the button — a **new tab** opens at `http://localhost:3000/splitea-project`. Confirm `target="_blank"` (cmd-click is not required — single click already opens new tab).
- On the Splitea page, scroll with the mouse wheel: page snaps section-by-section. Each section's content fades + slides in on entry.
- Scroll back up — animations re-trigger (acceptable; many sites do this).
- Refresh on `/splitea-project` — page still loads (router handles it; on GH Pages the 404.html fallback kicks in).
- Use keyboard: `↓` and `↑` arrow keys move between sections; `Tab` reaches the closing email link.
- Resize to mobile width (≤600px) — sections still fit, animations still play, button still visible.
- Verify no occurrence of the words "slide", "next slide", or slide-number references in any new file: `grep -ri "slide" src/pages/SpliteaProject/` should return nothing relevant.
- `npm run build` succeeds without warnings; deploy preview (`npm run deploy` if user requests) — direct link to `/new-portfolio/splitea-project` resolves via 404.html fallback.
