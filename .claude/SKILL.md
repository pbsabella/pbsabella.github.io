---
name: pbsabella-portfolio
description: Token rules, routing conventions, and engineering constraints for this portfolio site
---

# pbsabella.github.io

Personal portfolio that dogfoods its own design system. Every page must consume tokens from `src/styles/tokens.css` and components from `src/components/ui/`.

## Token Rules

**Never use raw values or primitives in component CSS:**

```css
/* ❌ Wrong */
color: #fff;
color: var(--pr-neutral-100);

/* ✅ Right */
color: var(--sem-text-default);
```

- Components consume **only `--sem-`** tokens — never `--pr-`, never hardcoded values
- Before adding a token, try `oklch()` relative syntax to derive from an existing anchor
- Every new semantic token requires both light and dark definitions
- Use `--comp-` tokens only as scoped last-resort exceptions
- Brands populate only `--brand-` slots — overriding `--sem-` or `--pr-` is prohibited

**Theme:** `[data-theme="dark"]` on `<body>` · **Brand:** `[data-brand="brandName"]` on `<html>`

## Routing

Use `ROUTES` (and `SECTION_ANCHORS`) from `src/constants/routes.ts` — no magic strings.

## Hooks

Prefer existing hooks in `src/hooks/` before writing scroll, focus, or nav logic.

## CSS Guardrails (enforced by lint)

- **Breakpoints:** only `421px, 768px, 900px, 1024px` are allowed in media queries
- **CSS Module class names** in `src/components/ui/` must start with the component name in lowerCamelCase (e.g. `Button.module.css` → all classes start with `button`)

## Engineering Rules

- Semantic HTML and accessibility are non-negotiable
- CSS Modules for component styles; global tokens stay in `tokens.css`
- DRY but not at the expense of clarity

## Testing

See [TESTING_STRATEGY.md](../TESTING_STRATEGY.md) for the full strategy and tool matrix.

## Commands

- `npm run check` — full build + quality + tests + perf
- `npm run lint` — ESLint + Stylelint + custom CSS prefix/breakpoint checks
