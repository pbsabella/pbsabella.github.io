/**
 * COLOR_GROUPS
 * Organized by hierarchy: primitives → semantic
 */
export const COLOR_GROUPS = {
  primitives: {
    green: [
      { name: 'Green 100', token: '--color-green-100', cssVar: 'color-green-100' },
      { name: 'Green 200', token: '--color-green-200', cssVar: 'color-green-200' },
      { name: 'Green 300', token: '--color-green-300', cssVar: 'color-green-300' },
      { name: 'Green 500', token: '--color-green-500', cssVar: 'color-green-500' },
      { name: 'Green 600', token: '--color-green-600', cssVar: 'color-green-600' },
    ],
    gray: [
      { name: 'Gray 100', token: '--color-gray-100', cssVar: 'color-gray-100' },
      { name: 'Gray 500', token: '--color-gray-500', cssVar: 'color-gray-500' },
      { name: 'Gray 600', token: '--color-gray-600', cssVar: 'color-gray-600' },
      { name: 'Gray 700', token: '--color-gray-700', cssVar: 'color-gray-700' },
      { name: 'Gray 800', token: '--color-gray-800', cssVar: 'color-gray-800' },
      { name: 'Gray 900', token: '--color-gray-900', cssVar: 'color-gray-900' },
    ],
    neutral: [
      { name: 'Neutral 100', token: '--color-neutral-100', cssVar: 'color-neutral-100', border: true },
      { name: 'Neutral 200', token: '--color-neutral-200', cssVar: 'color-neutral-200', border: true },
      { name: 'Neutral 300', token: '--color-neutral-300', cssVar: 'color-neutral-300' },
      { name: 'Neutral 400', token: '--color-neutral-400', cssVar: 'color-neutral-400' },
      { name: 'Neutral 600', token: '--color-neutral-600', cssVar: 'color-neutral-600' },
      { name: 'Neutral 800', token: '--color-neutral-800', cssVar: 'color-neutral-800' },
      { name: 'Neutral 900', token: '--color-neutral-900', cssVar: 'color-neutral-900' },
    ],
    accent: [
      { name: 'Orange', token: '--color-orange', cssVar: 'color-orange' },
      { name: 'Yellow', token: '--color-yellow', cssVar: 'color-yellow' },
      { name: 'Cyan 100', token: '--color-cyan-100', cssVar: 'color-cyan-100' },
    ],
  },
  semantic: {
    brand: [
      {
        name: 'Brand',
        token: '--color-text-brand',
        cssVar: 'color-text-brand',
        references: 'Light: --color-green-500 | Dark: --color-green-500-dark'
      },
      {
        name: 'Brand Light',
        token: '--color-text-brand-light',
        cssVar: 'color-text-brand-light',
        references: 'Light: --color-green-300 | Dark: --color-green-300-dark'
      },
      {
        name: 'Brand Strong',
        token: '--color-text-brand-strong',
        cssVar: 'color-text-brand-strong',
        references: 'Light: --color-green-600 | Dark: --color-green-500'
      },
    ],
    core: [
      {
        name: 'BG Base',
        token: '--color-bg-base',
        cssVar: 'color-bg-base',
        border: true,
        references: 'Light: --color-neutral-200 | Dark: --color-gray-900'
      },
      {
        name: 'BG Subtle',
        token: '--color-bg-subtle',
        cssVar: 'color-bg-subtle',
        border: true,
        references: 'Light: --color-neutral-300 | Dark: --color-gray-800'
      },
      {
        name: 'BG Elevated',
        token: '--color-bg-elevated',
        cssVar: 'color-bg-elevated',
        border: true,
        references: 'Light: --color-neutral-100 | Dark: --color-gray-700'
      },
      {
        name: 'Text Primary',
        token: '--color-text-primary',
        cssVar: 'color-text-primary',
        references: 'Light: --color-neutral-800 | Dark: --color-gray-100'
      },
      {
        name: 'Text Strong',
        token: '--color-text-strong',
        cssVar: 'color-text-strong',
        references: 'Light: --color-neutral-900 | Dark: --color-gray-100-light'
      },
      {
        name: 'Text Secondary',
        token: '--color-text-secondary',
        cssVar: 'color-text-secondary',
        references: 'Light: --color-neutral-600 | Dark: --color-gray-400-light'
      },
    ],
    borders: [
      {
        name: 'Border Base',
        token: '--color-border-base',
        cssVar: 'color-border-base',
        border: true,
        references: 'Light: --color-neutral-300 | Dark: --color-gray-600'
      },
      {
        name: 'Border Strong',
        token: '--color-border-strong',
        cssVar: 'color-border-strong',
        references: 'Light: --color-neutral-600 | Dark: --color-gray-500'
      },
      {
        name: 'Accent Green',
        token: '--color-accent-green',
        cssVar: 'color-accent-green',
        references: 'Light: --color-green-200 | Dark: --color-gray-800'
      },
      {
        name: 'Accent Gray',
        token: '--color-accent-gray',
        cssVar: 'color-accent-gray',
        references: 'Light: --color-gray-100 | Dark: --color-gray-800'
      },
    ],
  },
};

/**
 * SPACING_SCALE
 * Primitive spacing tokens (4px base unit)
 */
export const SPACING_SCALE = [
  { token: '--spacing-1', value: '4px' },
  { token: '--spacing-2', value: '8px' },
  { token: '--spacing-3', value: '12px' },
  { token: '--spacing-4', value: '16px' },
  { token: '--spacing-6', value: '24px' },
  { token: '--spacing-11', value: '44px' },
  { token: '--spacing-16', value: '64px' },
  { token: '--spacing-21', value: '84px' },
];

/**
 * TYPE_SCALE
 * Typography scale with element mappings
 */
export const TYPE_SCALE = [
  { element: 'h1', token: '--text-scale-900', leading: '--leading-110' },
  { element: 'h2', token: '--text-scale-700', leading: '--leading-150' },
  { element: 'h3', token: '--text-scale-500', leading: '--leading-150' },
  { element: 'h4', token: '--text-scale-400', leading: '--leading-150' },
  {
    element: 'p',
    token: '--text-scale-300',
    leading: '--leading-150',
    text: 'This is body text. It defines the rhythm and readability of the page.'
  },
];

/**
 * FONT_WEIGHTS
 * Font weight scale
 */
export const FONT_WEIGHTS = [
  { weight: 300, token: '--font-weight-300', label: 'Light' },
  { weight: 400, token: '--font-weight-400', label: 'Regular' },
  { weight: 500, token: '--font-weight-500', label: 'Medium' },
];

/**
 * ELEVATIONS
 * Shadow scale for depth/hierarchy
 */
export const ELEVATIONS = [
  {
    level: 'Low',
    token: '--elevation-low',
    desc: 'Best for: Cards, small buttons',
    className: 'elevationLow',
  },
  {
    level: 'Medium',
    token: '--elevation-medium',
    desc: 'Best for: Hover states, dropdowns',
    className: 'elevationMedium',
  },
  {
    level: 'High',
    token: '--elevation-high',
    desc: 'Best for: Modals, fixed tooltips',
    className: 'elevationHigh',
  },
];

/**
 * DURATIONS
 * Animation duration scale
 */
export const DURATIONS = [
  {
    name: 'Fast',
    token: '--duration-fast: 0.2s',
    desc: 'Quick feedback (hover, button states)'
  },
  {
    name: 'Base',
    token: '--duration-base: 0.3s',
    desc: 'Standard interactions (slides, fades)'
  },
  {
    name: 'Slow',
    token: '--duration-slow: 0.4s',
    desc: 'Deliberate animations (theme toggle)'
  },
];

/**
 * EASINGS
 * Easing function examples
 */
export const EASINGS = [
  {
    name: 'Ease-out',
    token: '--easing-out: ease-out',
    desc: 'UI reactions (instant start, smooth finish) — appears, responds, closes'
  },
  {
    name: 'Ease in-out',
    token: '--easing-in-out: ease-in-out',
    desc: 'User navigation (smooth acceleration/deceleration) — drawers, overlays, sliding'
  },
];

/**
 * A11Y_FEATURES
 * Accessibility feature descriptions
 */
export const A11Y_FEATURES = [
  {
    title: 'Keyboard Navigation',
    desc: 'All interactive elements are keyboard accessible with visible focus indicators.'
  },
  {
    title: 'Color Contrast',
    desc: 'Text meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text).'
  },
  {
    title: 'Semantic HTML',
    desc: 'Proper heading hierarchy, landmarks, and ARIA labels where needed.'
  },
];
