/**
 * COLOR_GROUPS
 * Organized by hierarchy: primitives → semantic
 */
export const COLOR_GROUPS = {
  primitives: {
    green: [
      { name: 'Green 100', token: '--pr-color-green-100' },
      { name: 'Green 200', token: '--pr-color-green-200' },
      { name: 'Green 300', token: '--pr-color-green-300' },
      { name: 'Green 500', token: '--pr-color-green-500' },
      { name: 'Green 600', token: '--pr-color-green-600' },
    ],
    gray: [
      { name: 'Gray 100', token: '--pr-color-gray-100' },
      { name: 'Gray 500', token: '--pr-color-gray-500' },
      { name: 'Gray 600', token: '--pr-color-gray-600' },
      { name: 'Gray 700', token: '--pr-color-gray-700' },
      { name: 'Gray 800', token: '--pr-color-gray-800' },
      { name: 'Gray 900', token: '--pr-color-gray-900' },
    ],
    neutral: [
      { name: 'Neutral 100', token: '--pr-color-neutral-100', border: true },
      { name: 'Neutral 200', token: '--pr-color-neutral-200', border: true },
      { name: 'Neutral 300', token: '--pr-color-neutral-300' },
      { name: 'Neutral 400', token: '--pr-color-neutral-400' },
      { name: 'Neutral 600', token: '--pr-color-neutral-600' },
      { name: 'Neutral 800', token: '--pr-color-neutral-800' },
      { name: 'Neutral 900', token: '--pr-color-neutral-900' },
    ],
    accent: [
      { name: 'Orange', token: '--pr-color-orange' },
      { name: 'Yellow', token: '--pr-color-yellow' },
      { name: 'Cyan 100', token: '--pr-color-cyan-100' },
    ],
  },
  semantic: {
    brand: [
      {
        name: 'Brand',
        token: '--color-text-brand',
        references: 'Light: --pr-color-green-500 | Dark: --pr-color-green-500-dark'
      },
      {
        name: 'Brand Light',
        token: '--color-text-brand-light',
        references: 'Light: --pr-color-green-300 | Dark: --pr-color-green-300-dark'
      },
      {
        name: 'Brand Strong',
        token: '--color-text-brand-strong',
        references: 'Light: --pr-color-green-600 | Dark: --pr-color-green-500'
      },
    ],
    core: [
      {
        name: 'BG Base',
        token: '--sem-color-bg-base',
        border: true,
        references: 'Light: --pr-color-neutral-200 | Dark: --pr-color-gray-900'
      },
      {
        name: 'BG Subtle',
        token: '--sem-color-bg-subtle',
        border: true,
        references: 'Light: --pr-color-neutral-300 | Dark: --pr-color-gray-800'
      },
      {
        name: 'BG Elevated',
        token: '--sem-color-bg-elevated',
        border: true,
        references: 'Light: --pr-color-neutral-100 | Dark: --pr-color-gray-700'
      },
      {
        name: 'Text Primary',
        token: '--sem-color-text-primary',
        references: 'Light: --pr-color-neutral-800 | Dark: --pr-color-gray-100'
      },
      {
        name: 'Text Strong',
        token: '--sem-color-text-strong',
        references: 'Light: --pr-color-neutral-900 | Dark: --pr-color-gray-100-light'
      },
      {
        name: 'Text Secondary',
        token: '--sem-color-text-secondary',
        references: 'Light: --pr-color-neutral-600 | Dark: --pr-color-gray-400-light'
      },
    ],
    borders: [
      {
        name: 'Border Base',
        token: '--sem-color-border-base',
        border: true,
        references: 'Light: --pr-color-neutral-300 | Dark: --pr-color-gray-600'
      },
      {
        name: 'Border Strong',
        token: '--sem-color-border-strong',
        references: 'Light: --pr-color-neutral-600 | Dark: --pr-color-gray-500'
      },
      {
        name: 'Accent Green',
        token: '--sem-color-accent-green',
        references: 'Light: --pr-color-green-200 | Dark: --pr-color-gray-800'
      },
      {
        name: 'Accent Slate',
        token: '--sem-color-accent-gray',
        references: 'Light: --pr-color-gray-100 | Dark: --pr-color-gray-800'
      },
    ],
  },
};

/**
 * SPACING_SCALE
 * Primitive spacing tokens (4px base unit)
 */
export const SPACING_SCALE = [
  { token: '--pr-spacing-1', value: '4px' },
  { token: '--pr-spacing-2', value: '8px' },
  { token: '--pr-spacing-3', value: '12px' },
  { token: '--pr-spacing-4', value: '16px' },
  { token: '--pr-spacing-6', value: '24px' },
  { token: '--pr-spacing-11', value: '44px' },
  { token: '--pr-spacing-16', value: '64px' },
  { token: '--pr-spacing-21', value: '84px' },
];

/**
 * TYPE_SCALE
 * Typography scale with element mappings
 */
export const TYPE_SCALE = [
  { element: 'h1', token: '--sem-text-heading-lg', leading: '--pr-leading-110' },
  { element: 'h2', token: '--sem-text-heading-md', leading: '--pr-leading-150' },
  { element: 'h3', token: '--pr-text-500', leading: '--pr-leading-150' },
  { element: 'h4', token: '--pr-text-400', leading: '--pr-leading-150' },
  {
    element: 'p',
    token: '--sem-text-body',
    leading: '--pr-leading-150',
    text: 'This is body text. It defines the rhythm and readability of the page.'
  },
];

/**
 * FONT_WEIGHTS
 * Font weight scale
 */
export const FONT_WEIGHTS = [
  { weight: 300, token: '--pr-weight-300', label: 'Light' },
  { weight: 400, token: '--pr-weight-400', label: 'Regular' },
  { weight: 500, token: '--pr-weight-500', label: 'Medium' },
];

/**
 * ELEVATIONS
 * Shadow scale for depth/hierarchy
 */
export const ELEVATIONS = [
  {
    level: 'Low',
    token: '--sem-elevation-low',
    desc: 'Best for: Cards, small buttons',
    className: 'elevationLow',
  },
  {
    level: 'Medium',
    token: '--sem-elevation-medium',
    desc: 'Best for: Hover states, dropdowns',
    className: 'elevationMedium',
  },
  {
    level: 'High',
    token: '--sem-elevation-high',
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
    token: '--pr-duration-fast: 0.2s',
    desc: 'Quick feedback (hover, button states)'
  },
  {
    name: 'Base',
    token: '--pr-duration-base: 0.3s',
    desc: 'Standard interactions (slides, fades)'
  },
  {
    name: 'Slow',
    token: '--pr-duration-slow: 0.4s',
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
    token: '--pr-easing-out: ease-out',
    desc: 'UI reactions (instant start, smooth finish) — appears, responds, closes'
  },
  {
    name: 'Ease in-out',
    token: '--pr-easing-in-out: ease-in-out',
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
