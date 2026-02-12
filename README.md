# Paula Abella - Personal Portfolio

A modern, fully-typed React portfolio showcasing **Design Systems expertise**—demonstrating component architecture, token-driven design, and scalable CSS practices.

**Live:** https://pbsabella.github.io

## 🎨 Design Systems Focus

This portfolio is a **Design System in practice**:
- **Tiered Token Architecture:** Primitive → Semantic tokens for maintainable, theme-aware styling
- **Component Patterns:** Reusable, typed components with consistent interfaces
- **CSS Scalability:** CSS Modules + design tokens instead of utility-first approaches
- **Theme Support:** Full dark mode via CSS variable overrides
- **Accessibility First:** WCAG 2.1 AA compliance, keyboard navigation, semantic HTML

**View the Design System:** [SystemCore](https://pbsabella.github.io/#/labs/core)

## Status

[![Deploy to GitHub Pages](https://github.com/pbsabella/pbsabella.github.io/actions/workflows/jekyll.yml/badge.svg)](https://github.com/pbsabella/pbsabella.github.io/actions/workflows/jekyll.yml)
[![Percy Visual Tests](https://github.com/pbsabella/pbsabella.github.io/actions/workflows/percy.yml/badge.svg)](https://github.com/pbsabella/pbsabella.github.io/actions/workflows/percy.yml)
[![CodeQL](https://github.com/pbsabella/pbsabella.github.io/actions/workflows/codeql.yml/badge.svg)](https://github.com/pbsabella/pbsabella.github.io/actions/workflows/codeql.yml)

## Architecture

### Token-Driven Design

Design decisions are encoded as CSS variables, enabling:
- **Theme switching** without recompiling CSS
- **Consistent spacing** via 8px base scale
- **Responsive typography** using CSS clamp()
- **Semantic color tokens** that adapt to light/dark themes

```css
/* Primitive (scale) → Semantic (usage) */
--pr-color-neutral-800: #37373a;           /* primitive */
--sem-color-text-primary: var(--pr-color-neutral-800);  /* semantic */
```

See: [src/styles/tokens.css](src/styles/tokens.css)

### Component Hierarchy

```
src/components/
├── layout/       # Page structure (Header, Footer, Layout)
├── sections/     # Feature sections (Hero, About, Work)
└── ui/           # Atomic components (Card, Tag, ThemeToggle)
```

Each component:
- Has a TypeScript interface for props
- Uses CSS Modules for scoped styles
- Includes unit tests

### Page Structure

```
src/pages/
├── home/Home.tsx                                # Portfolio landing
├── labs/Labs.tsx                                # Labs index
├── system-core/SystemCore.tsx                   # Design system docs
└── design-system-build-notes/DesignSystemBuildNotes.tsx
```

---

## Tech Stack

- **Frontend:** React 19, TypeScript, React Router v7
- **Build:** Vite with esbuild
- **Styling:** CSS Modules + design tokens (CSS variables)
- **Testing:** Vitest (unit), Cypress (E2E), Playwright (smoke), Percy (visual)
- **Quality:** ESLint, Stylelint, TypeScript strict mode, Prettier
- **CI/CD:** GitHub Actions, Lighthouse CI

## Quick Start

```bash
# Install dependencies
npm install

# Development
npm run dev          # Start dev server at http://localhost:5173

# Build & Preview
npm run build        # Production build
npm run preview      # Preview production build locally

# Type checking & Linting
npm run type-check   # TypeScript type checking
npm run lint         # ESLint + Stylelint
npm run format       # Prettier format
```

## NPM Scripts

### Development

| Command           | Purpose                               |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start Vite dev server with hot reload |
| `npm run build`   | Build for production to `dist/`       |
| `npm run preview` | Preview production build locally      |

### Quality & Testing

| Command                  | Purpose                        |
| ------------------------ | ------------------------------ |
| `npm run type-check`     | TypeScript type checking       |
| `npm run lint`           | ESLint + Stylelint checks      |
| `npm run format`         | Format all files with Prettier |
| `npm run test`           | Unit tests (vitest)            |
| `npm run test:watch`     | Unit tests in watch mode       |
| `npm run cypress:open`   | Interactive Cypress UI         |
| `npm run cypress:e2e`    | Headless Cypress tests         |
| `npm run test:local`     | Dev server + Cypress tests     |
| `npm run percy:test`     | Visual regression tests        |
| `npm run percy:baseline` | Update Percy baseline          |
| `npm run lighthouse`      | Lighthouse CLI audit (all routes) |
| `npm run lighthouse:quick`| Lighthouse CLI audit (1 run per route) |
| `npm run pw:install`      | Install Playwright browsers    |
| `npm run pw:test`         | Run all Playwright tests       |
| `npm run pw:smoke`        | Cross-browser sanity smoke tests |
| `npm run pw:headed`       | Run Playwright in headed mode  |
| `npm run contrast:manual` | Manual contrast sweep across routes/themes |

**→ See [TESTING_STRATEGY.md](TESTING_STRATEGY.md) for detailed testing philosophy, what to test, and examples.**

**Performance** - Lighthouse CLI audits:

```bash
npm run lighthouse        # Multi-route CLI audit (runs against preview server)
npm run lighthouse:quick  # 1 run per route (faster local check)
```

## Testing Strategy

### Unit Tests (`npm run test`)

- **Tool:** Vitest + @testing-library/react
- **Location:** `src/**/__tests__/`
- **Coverage:** Components, hooks, context logic
- **Run:** Locally or CI on every push

### E2E Tests (`npm run cypress:e2e`)

- **Tool:** Cypress + @testing-library/cypress
- **Location:** `cypress/e2e/`
- **Focus:** Interactive behavior (focus management, navigation, theme persistence)
- **Run:** Locally during development or in CI

### Visual Tests (`npm run percy:test`)

- **Tool:** Percy (via Cypress)
- **Purpose:** Catch visual regressions across devices (mobile, tablet, desktop)
- **Run:** Before deploying
- **Baseline:** Update with `percy:baseline` on production changes

### Performance Tests (`npm run lighthouse`)

- **Tool:** Lighthouse CLI (multi-route runner)
- **Metrics:** Performance, Accessibility, Best Practices, SEO
- **Thresholds:** Performance ≥0.86 (warn), others 100% (fail)
- **Run:** In CI and locally (uses `npm run preview` under the hood)

### Browser Smoke Tests (`npm run pw:smoke`)

- **Tool:** Playwright (Chromium, Firefox, WebKit)
- **Coverage:** Hash routes load, console/runtime errors, failed network requests, dual-theme accessibility checks (axe), and semantic token contrast contracts
- **Run:** In CI and locally
- **First-time setup:** `npm run pw:install`

### Manual Contrast Sweep (`npm run contrast:manual`)

- **Tool:** Custom Node script (`scripts/manual-contrast-audit.mjs`)
- **Purpose:** Independent contrast math audit across all primary routes/themes
- **Run:** Local diagnostic tool (not a CI gate)
- **Output:** Per-route PASS/FAIL summary + `TOTAL_FAILS`

## Local Development

```bash
npm run dev             # Start dev server
npm run test:watch      # Watch tests in parallel
npm run lint            # Check before commit (auto-fixed by Husky)
```

## Pre-Deployment

```bash
npm run type-check
npm run lint
npm run test
npm run build
npm run preview         # Verify production build
npm run percy:test      # Visual regression check
```

## Configuration Files

| File                   | Purpose                                       |
| ---------------------- | --------------------------------------------- |
| `vite.config.ts`       | Vite + Vitest config (aliases, test setup)    |
| `tsconfig.json`        | TypeScript strict config                      |
| `eslint.config.mjs`    | ESLint flat config (TS, React, A11y, Cypress) |
| `stylelint.config.mjs` | CSS linting                                   |
| `cypress.config.js`    | Cypress E2E config                            |
| `.percyrc.json`        | Percy visual testing config                   |
| `.husky/`              | Git hooks (pre-commit linting)                |

## Design System

All styling uses **CSS tokens** for maintainability:

- **Colors:** Light/dark theme via CSS variables
- **Typography:** Fluid responsive scales
- **Spacing:** 8px-based scale (4px, 8px, 12px, 16px, 24px, etc.)
- **Breakpoints:** Mobile-first responsive design

View design tokens: `src/styles/tokens.css`

## Common Workflows

### Local Development

```bash
npm run dev             # Start dev server
npm run test:watch      # Watch tests in parallel
npm run lint            # Check before commit (auto-fixed by Husky)
```

### Pre-Deployment

```bash
npm run type-check
npm run lint
npm run test
npm run build
npm run preview         # Verify production build
npm run percy:test      # Visual regression check
```

### After Fixing Styling/Design

```bash
npm run percy:baseline  # Update Percy snapshots on production
```

## CI/CD Pipeline

**Workflows:**

- **`jekyll.yml`:** Build + Deploy to GitHub Pages (on push to master)
- **`percy.yml`:** Visual regression tests (on code/style changes)
- **`codeql.yml`:** Security scanning (automatic)

**Status Badges:**

- [![CodeQL](https://github.com/pbsabella/pbsabella.github.io/actions/workflows/codeql.yml/badge.svg)](https://github.com/pbsabella/pbsabella.github.io/actions/workflows/codeql.yml)

## Development Tips

1. **Type Safety:** Run `npm run type-check` early and often
2. **Quick Feedback:** Use `npm run test:watch` while coding
3. **Before Commit:** Husky auto-fixes ESLint/Prettier issues
4. **Visual Changes:** Always run `npm run percy:test` before deploying styling changes
5. **Performance:** Check thresholds in `scripts/lighthouse-routes.mjs` before tweaking config
