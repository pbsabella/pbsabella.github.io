# 🧪 Testing Strategy

**For quick reference and scripts:** See [README.md](README.md#testing-strategy)

This document provides detailed testing philosophy and examples.

---

## 🏗 The Testing Pyramid

The strategy is built on the **Testing Trophy** model, prioritizing integration over isolation to ensure high confidence with maintainable test suites.

### Layer 1: Static Analysis (TypeScript & ESLint)

- **Goal:** Catch type mismatches, code quality issues before runtime
- **Tools:** TypeScript strict mode, ESLint, Stylelint
- **Requirement:** `npm run type-check && npm run lint` must pass
- **Scope:** 100% of codebase

### Layer 2: Unit & Integration Tests (Vitest + React Testing Library)

- **Goal:** Verify business logic, hooks, and state transitions
- **Tools:** Vitest (runner), @testing-library/react (DOM utilities)
- **Mandatory coverage:**
  - Custom Hooks (`src/hooks/__tests__/`)
  - Context Providers (`src/context/__tests__/`)
  - Complex UI components with state
- **Command:** `npm run test` (single run) or `npm run test:watch` (development)
- **Speed:** <5 seconds for full suite

### Layer 3: End-to-End Tests (Cypress)

- **Goal:** Validate critical user workflows in a real browser
- **Tools:** Cypress + @testing-library/cypress
- **Coverage:** Navigation, theme persistence, focus management
- **Command:**
  - `npm run cypress:open` (interactive UI)
  - `npm run cypress:e2e` (headless)
  - `npm run test:local` (dev server + E2E)
- **Focus:** Only test behavior that requires user interaction

### Layer 4: Visual Regression (Percy)

- **Goal:** Prevent CSS regressions across device sizes
- **Tools:** Percy (via Cypress)
- **Coverage:** All snapshots in `cypress/e2e/portfolio.cy.ts`
- **Viewports:** Mobile (375px), Tablet (768px), Desktop (1280px)
- **Command:**
  - `npm run percy:test` (build + test)
  - `npm run percy:baseline` (update baseline on production)

### Layer 5: Performance (Lighthouse CLI)

- **Goal:** Track and enforce performance, accessibility, SEO scores
- **Tools:** Lighthouse CLI (multi-route runner)
- **Thresholds:** Performance ≥0.86 (warn), Accessibility/Best Practices/SEO = 100% (fail)
- **Command:** `npm run lighthouse` (uses `npm run preview` under the hood)
- **Quick check:** `npm run lighthouse:quick` (1 run per route)

### Layer 6: Cross-Browser Smoke (Playwright)

- **Goal:** Catch runtime issues Cypress/Percy/Vitest may miss across browser engines
- **Tools:** Playwright (Chromium, Firefox, WebKit)
- **Coverage:** Route load sanity, console errors, failed requests, accessibility checks in light/dark themes, and semantic token contrast contracts
- **Note:** A narrow filter excludes only `axe` `incomplete` color-contrast nodes tied to pseudo-content/page-wrap layering; hard failures still come from axe violations + explicit contrast assertions
- **Command:**
  - `npm run pw:install` (first-time browser install)
  - `npm run pw:smoke` (cross-browser smoke suite)
  - `npm run pw:test` (full Playwright suite)

### Layer 7: Manual Contrast Audit (Diagnostic)

- **Goal:** Independently verify text contrast using computed style + alpha compositing across route/theme combinations
- **Tool:** Custom Node script (`scripts/manual-contrast-audit.mjs`)
- **Command:** `npm run contrast:manual`
- **Role:** Local diagnostic sweep for validation and triage, not a blocking CI gate

## Tool Overlap (Concise)

- **Cypress vs Lighthouse overlap:** Both can surface accessibility and runtime quality issues.
- **Cypress strength:** User journey behavior and interaction correctness.
- **Lighthouse strength:** Page-level audits (performance, SEO, best-practices, accessibility score trends).
- **Current approach:** Keep both for confidence while the stack is stabilizing.
- **Optimization note:** We will reduce overlap later by cherry-picking the best tool per check and removing duplicate gates where signal is redundant.

---

## ⚖️ Test Inclusion Criteria

To maintain velocity, apply this decision matrix:

| Component Type        | Test Method          | Why                                |
| :-------------------- | :------------------- | :--------------------------------- |
| **Pure logic/utils**  | Unit (Vitest)        | Fast, isolated, deterministic      |
| **Context/state**     | Integration (Vitest) | Verify provider logic              |
| **Static layouts**    | Visual (Percy)       | Catches unintended shifts          |
| **User interactions** | E2E (Cypress)        | Only behavior needs manual testing |
| **Cross-browser runtime** | Smoke (Playwright) | Catches engine-specific regressions |
| **Manual contrast triage** | Manual sweep script | Independent verification beyond gated checks |
| **Third-party libs**  | Skip                 | Assume stable, trust maintainers   |
| **Accessibility**     | Lighthouse CLI       | Automated a11y checks via axe      |

---

## 🛠 Local Development Workflow

```bash
# 1. Watch tests while coding
npm run test:watch

# 2. Interactive testing with Cypress UI
npm run cypress:open

# 3. Full E2E with local dev server
npm run test:local

# 4. Pre-deployment checks
npm run build
npm run type-check && npm run lint && npm run test
npm run pw:smoke
npm run contrast:manual
npm run percy:test
```

## 🚦 CI/CD Pipeline

### Primary Workflow: `jekyll.yml` (Blocking)

- **Type Check** - `npm run type-check`
- **Unit Tests** - `npm run test`
- **Lint** - `npm run lint`
- **Build Verification** - `npm run build`
- **Cross-Browser Smoke** - `npm run pw:smoke`
- **Deploy to GitHub Pages** - On master push

### Visual Regression: `percy.yml` (Blocking)

- **Percy + Cypress** - Multi-device visual snapshots
- **Trigger:** HTML, JS, TS, or CSS changes
- **Baseline:** Update with `percy:baseline` after approved design changes

### Security: `codeql.yml` (Informational)

- **CodeQL Analysis** - Vulnerability scanning
- **Frequency:** Weekly + pull requests

---

## 📋 What to Test: Decision Guide

### ✅ DO TEST

- Navigation flows and routing
- Theme toggle persistence (state management)
- Focus management (side nav focus trap)
- Form submissions and validation
- Custom hooks
- Context providers
- Critical user journeys

### ❌ DON'T TEST

- Third-party library behavior (Percy is enough for visual)
- Styling details (Lighthouse CI + Percy handle this)
- Heading hierarchy (ESLint + Lighthouse handle this)
- Link text/labels (ESLint a11y plugin handles this)
- Built-in React/browser APIs

---

## 🔍 Accessibility Testing

Accessibility is verified at multiple layers:

| Layer           | Tool              | Check                                   |
| --------------- | ----------------- | --------------------------------------- |
| **Static**      | ESLint (jsx-a11y) | Missing alt text, bad ARIA, semantics   |
| **Interactive** | Cypress E2E       | Keyboard navigation, focus trapping     |
| **Audit**       | Lighthouse CI     | Color contrast, WCAG violations via axe |
| **Smoke**       | Playwright        | Missing accessible names + landmark sanity |
| **Diagnostic**  | Manual contrast script | Independent route/theme contrast verification |
| **Visual**      | Percy             | Layout breaks that hurt readability     |

---

## 📚 Test Examples

### Unit Test (Hook)

```typescript
// src/hooks/__tests__/useHeaderScroll.test.ts
it('should return header classes based on scroll position', () => {
  const { result } = renderHook(() => useHeaderScroll());
  expect(result.current.headerClass).toBe('');
});
```

### E2E Test (Interaction)

```typescript
// cypress/e2e/portfolio.cy.ts
it('should trap focus in mobile side nav', () => {
  cy.viewport(375, 667);
  cy.findByRole('button', { name: /open main menu/i }).click();
  cy.focused().should('have.id', 'side-menu-close');
});
```

### Visual Test (Percy)

```typescript
cy.percySnapshot('Homepage', { widths: [375, 768, 1280] });
```

---

## 🎯 Coverage Goals

- **Unit Tests:** 70%+ line coverage (quality > quantity)
- **E2E Tests:** Critical user paths (≥80% flow coverage)
- **Visual:** All public pages
- **Lighthouse:** No regressions below thresholds

## ❓ FAQ

**Q: Why skip unit tests for layout components?**
A: Percy visual tests catch 90% of issues with less maintenance. Unit tests for layout are brittle.

**Q: When should I use `npm run test:local` vs `npm run cypress:open`?**
A: Use `cypress:open` for interactive debugging. Use `test:local` for final verification before pushing.

**Q: Do I need to update Percy baseline after every styling change?**
A: Only after intentional design changes. Use `npm run percy:baseline` and commit on master.

**Q: What if Lighthouse fails?**
A: Check the CLI output in `lighthouse/*.json`. Performance warnings won’t fail the build, but accessibility/best-practices/SEO errors will. Run `npm run lighthouse` locally to debug.
