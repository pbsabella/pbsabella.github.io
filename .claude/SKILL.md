# pbsabella.github.io — Session Context

Personal portfolio and design system lab. The site dogfoods its own design system — every new page should consume tokens and components from `src/components/ui/` and `src/styles/tokens.css`.

## Stack
- React 19 + TypeScript (strict) + Vite
- CSS Modules with CSS custom properties (no utility-first CSS)
- React Router v7 for client-side routing
- Hosted on Vercel at `https://pbsabella.vercel.app`

## Token System (`src/styles/tokens.css`)
Three-tier CSS variable hierarchy:

| Tier | Prefix | Purpose |
|------|--------|---------|
| Primitives | `--pr-` | Raw scale values (colors, spacing, type, radius…) |
| Semantic | `--sem-` | Intent-based tokens (text, bg, border, status, elevation…) |
| Component | `--comp-` | Per-component overrides (live in CSS Modules, not tokens.css) |

Theme switching: `data-theme="dark"` on `<body>` overrides the `--sem-` layer only. Managed by `ThemeContext` + `localStorage`.

### Rules
- Don't use `--pr-` tokens directly in components — only in `--sem-` token definitions.
- New components should consume `--sem-` tokens, not hardcoded values.
- Component-level overrides (`--comp-`) are for one-off exceptions, not general use.
- When adding new tokens, support both light and dark themes from the start and ensure accessibility (contrast) compliance.

## Design System (`src/components/ui/`)
10 components, each in its own directory with `Component.tsx`, `Component.module.css`, `Component.test.tsx`.

- Alert, Badge, Breadcrumbs, Button (polymorphic `as` prop), Card, Socials, Table, TableOfContents, Tag, ThemeToggle

New components follow the same 3-file pattern and consume `--sem-` tokens.

## Routing (`src/constants/routes.ts`)
Centralized `ROUTES` constants — no magic strings. Pages live in `src/pages/`, sections in `src/components/sections/`.

Current routes:
- `/` Home (Hero, Work, About, Contact)
- `/labs` Labs index
- `/labs/core` Design system docs
- `/labs/design-system-build-notes`
- `/labs/yield-flow-case-study`

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

Run all: `npm test` · E2E: `npm run cy:run` · Lint: `npm run lint`
