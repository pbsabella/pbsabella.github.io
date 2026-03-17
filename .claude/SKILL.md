# pbsabella.github.io — Session Context

Personal portfolio and design system lab. The site dogfoods its own design system — every new page should consume tokens and components from `src/components/ui/` and `src/styles/tokens.css`.

## Stack
- React 19 + TypeScript (strict) + Vite
- CSS Modules with CSS custom properties (no utility-first CSS)
- React Router v7 for client-side routing
- Hosted on Vercel at `https://pbsabella.vercel.app` & GitHub Pages at `https://pbsabella.github.io/`

## Token Hierarchy

| Layer | Prefix | Responsibility | Data Source |
| :--- | :--- | :--- | :--- |
| **Primitives** | `--pr-` | **Raw Scales:** Core values for color, space, and time. | `tokens.css` |
| **Brand** | `--brand-` | **Anchors:** Identity slots for primary colors and fonts. | `brand/*.css` |
| **Semantic** | `--sem-` | **Intent:** Usage-based roles (Action, Surface, Text). | `tokens.css` |
| **Component** | `--comp-` | **Scope:** Local overrides for specific patterns. | `*.module.css` |

**Theme switching:** `[data-theme="dark"]` on `<body>`
**Brand switching:** `[data-brand="brandName"]` on `<html>`

### Implementation Rules

* **Primitives are private:** Never use `--pr-` tokens directly in components. They exist only to build the semantic layer.
* **Semantic is the API:** Components should only consume `--sem-` tokens. This ensures automatic adaptation to brand and theme changes.
* **Derive, don't define:** Before adding a new token, use `oklch()` relative syntax to derive values from existing anchors.
* **Theme parity is mandatory:** Every semantic token must be defined for light and dark modes from the start.
* **Component tokens as escape hatches:** Use `--comp-` tokens sparingly for one-off exceptions only.
* **Layer integrity:** Brands may only populate `--brand-` slots. Overriding `--sem-` or `--pr-` values is prohibited to prevent breaking system logic.

## Design System (`src/components/ui/`)
Each in its own directory with `Component.tsx`, `Component.module.css`, `Component.test.tsx`.
New components follow the same 3-file pattern and consume `--sem-` tokens.

## Routing (`src/constants/routes.ts`)
Centralized `ROUTES` constants — no magic strings. Pages live in `src/pages/`, sections in `src/components/sections/`.

## Key Hooks (`src/hooks/`)
`useScrollToSection`, `useActiveSection`, `useRouteScroll`, `useScrollLock`, `useFocusTrap` — prefer these over rolling new scroll/focus logic.

## Engineering Principles
- DRY but not at the expense of clarity — shared logic should be abstracted, but not if it makes the code harder to understand.
- Components should be flexible but not overly generic — find the right balance between reusability and simplicity.
- Prioritize semantic HTML and accessibility in all components and pages.
- Use CSS Modules for component styles, but keep the global token system in `tokens.css`.

## Testing
- Unit: Vitest + React Testing Library
- E2E: Cypress / Playwright / Percy
- Accessibility: axe-core/playwright
- Lighthouse CI on PRs

Run all: `npm run check` · Lint: `npm run lint`
