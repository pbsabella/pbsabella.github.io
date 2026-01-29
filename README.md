# Paula Bianca Abella - Personal Portfolio

A modern, fully-typed React portfolio website.

**Live:** https://pbsabella.github.io

## Status

[![Deploy to GitHub Pages](https://github.com/pbsabella/pbsabella.github.io/actions/workflows/jekyll.yml/badge.svg)](https://github.com/pbsabella/pbsabella.github.io/actions/workflows/jekyll.yml)
[![Percy Visual Tests](https://github.com/pbsabella/pbsabella.github.io/actions/workflows/percy.yml/badge.svg)](https://github.com/pbsabella/pbsabella.github.io/actions/workflows/percy.yml)
[![CodeQL](https://github.com/pbsabella/pbsabella.github.io/actions/workflows/codeql.yml/badge.svg)](https://github.com/pbsabella/pbsabella.github.io/actions/workflows/codeql.yml)

## Tech Stack

- **Frontend:** React 19, TypeScript, React Router v7
- **Build:** Vite with esbuild
- **Styling:** CSS Modules + design tokens (CSS variables)
- **Testing:** Vitest (unit), Cypress (E2E), Percy (visual)
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
| `npm run lighthouse:ci`  | Lighthouse performance audit   |

**→ See [TESTING_STRATEGY.md](TESTING_STRATEGY.md) for detailed testing philosophy, what to test, and examples.**

**Performance** - Lighthouse audits:

```bash
npm run lighthouse:ci    # CI Lighthouse check (requires built dist/)
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

### Performance Tests (`npm run lighthouse:ci`)

- **Tool:** Lighthouse CI
- **Metrics:** Performance, Accessibility, Best Practices, SEO
- **Thresholds:** Performance ≥0.85, others ≥0.90
- **Run:** In CI only (requires built output)

## Local Development

```bash
npm run dev              # Start dev server
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

```
src/
├── components/
│   ├── layout/        # Page layout (Header, Footer, Layout)
│   ├── sections/      # Content sections (Hero, About, Work)
│   └── ui/            # Reusable UI components (Tag, Button, Card)
├── constants/
│   └── routes.ts      # Centralized route & nav definitions
├── context/
│   └── ThemeContext.tsx  # Dark/light theme management
├── hooks/
│   └── useScrollManager.ts  # Scroll-based header behavior
├── pages/
│   ├── Home.tsx       # Main portfolio page
│   └── Styleguide.tsx # Design system showcase
├── styles/
│   ├── tokens.css     # Design system (colors, spacing, typography)
│   └── base.css       # Global styles
└── test/
    └── setup.ts       # Test configuration & matchers

cypress/
├── e2e/
│   └── portfolio.cy.ts  # E2E test specs
└── support/
    ├── e2e.ts         # Cypress command setup
    └── cypress.d.ts   # Custom command types
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
| `lighthouserc.json`    | Lighthouse CI thresholds                      |
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
npm run dev              # Start dev server
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
5. **Performance:** Check thresholds in `lighthouserc.json` before tweaking config
