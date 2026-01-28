# 🧪 Testing Strategy & Implementation

This document defines the testing architecture and standards for this repository. All contributions must adhere to this multi-layered verification strategy.

---

## 🏗 The Testing Pyramid

The strategy is built on the **Testing Trophy** model, prioritizing integration over isolation to ensure high confidence with maintainable test suites.

### 1. Static Analysis (TypeScript & ESLint)

- **Goal:** Catch syntax errors, type mismatches, and code-smell before execution.
- **Requirement:** `npm run type-check` must pass. No `any` types permitted.
- **Scope:** 100% of the codebase.

### 2. Unit & Integration (Vitest + React Testing Library)

- **Goal:** Verify business logic, custom hooks, and state transitions in a simulated environment (JSDOM).
- **Tooling:** Vitest (Runner), RTL (DOM Utilities).
- **Mandatory Coverage:**
  - Custom Hooks (`src/hooks/`)
  - Global State/Context Providers (`src/context/`)
  - Complex UI Logic (e.g., Filtering, Form validation)
- **Command:** `npm run test`

### 3. End-to-End (Cypress)

- **Goal:** Validate critical user journeys in a real browser engine.
- **Requirement:**
  - Successful navigation from Home to Labs.
  - Persistence of sub-routes (verifying `HashRouter` stability).
- **Command:** `npm run cypress:e2e` or `npm run test:local` (with dev server)

### 4. Visual Regression (Percy)

- **Goal:** Prevent CSS regressions and unintended layout shifts.
- **Integration:** Triggered via Cypress commands.
- **Requirement:** New UI components must include a `cy.percySnapshot()` check.

---

## ⚖️ Test Inclusion Criteria

To maintain velocity and prevent brittle suites, we apply engineering judgment to test selection:

| Component Type         | Test Method          | Priority |
| :--------------------- | :------------------- | :------- |
| **Pure Logic/Utils**   | Vitest (Unit)        | High     |
| **Context Providers**  | Vitest (Integration) | High     |
| **Static UI (Layout)** | Percy (Visual)       | Medium   |
| **Forms/Interactions** | RTL + Cypress        | High     |
| **Third-Party Libs**   | Skip (Assume Stable) | Low      |

---

## 🛠 Local Development Workflow

1.  **Development:** Run Vitest in watch mode: `npm run test:watch`.
2.  **Verification:** Run Cypress locally: `npm run cypress:open`.
3.  **E2E with server:** Run full E2E suite: `npm run test:local`.
4.  **Pre-flight:** Ensure production build passes: `npm run build`.

## 🚦 CI/CD Pipeline

Every Pull Request and push to `master` triggers:

### Primary Workflow (`jekyll.yml`)

1. **Type Check** (Blocking) - `npm run type-check`
2. **Unit Tests** (Blocking) - `npm test` (Vitest suite)
3. **Lint** (Blocking) - ESLint + Stylelint
4. **Build** (Blocking) - Production bundle verification

### Visual Regression (`percy.yml`)

- **Percy + Cypress** (Blocking) - Visual snapshots on all viewports
- Runs on HTML/CSS/JS changes only

### Security (`codeql.yml`)

- **CodeQL Analysis** (Informational) - Weekly scans + PR checks
