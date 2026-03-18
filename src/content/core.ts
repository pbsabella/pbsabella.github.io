/**
 * COLOR_GROUPS
 * Organized by hierarchy: primitives → semantic
 */
export const COLOR_GROUPS = {
  primitives: {
    gray: [
      { name: 'Gray 100', token: '--pr-color-gray-100' },
      { name: 'Gray 300', token: '--pr-color-gray-300' },
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
      { name: 'Neutral 700', token: '--pr-color-neutral-700' },
      { name: 'Neutral 800', token: '--pr-color-neutral-800' },
      { name: 'Neutral 900', token: '--pr-color-neutral-900' },
    ],
    status: [
      { name: 'Info', token: '--pr-info' },
      { name: 'Success', token: '--pr-success' },
      { name: 'Warning', token: '--pr-warning' },
      { name: 'Error', token: '--pr-error' },
    ]
  },
  semantic: {
    surface: [
      {
        name: 'BG Base',
        token: '--sem-color-bg-base',
        border: true,
        references: 'Light: Neutral 100 | Dark: Gray 900'
      },
      {
        name: 'BG Subtle',
        token: '--sem-color-bg-subtle',
        border: true,
        references: 'Light: Neutral 200 | Dark: Gray 800'
      },
      {
        name: 'BG Inset',
        token: '--sem-color-bg-inset',
        border: true,
        references: 'Light: Neutral 300 | Dark: Gray 600'
      },
      // {
      //   name: 'BG Elevated',
      //   token: '--sem-color-bg-elevated',
      //   border: true,
      //   references: 'Light: Neutral 100 | Dark: Gray 700'
      // },
      {
        name: 'BG Overlay',
        token: '--sem-color-bg-overlay',
        references: 'Light: Black 80% | Dark: Gray 900'
      },
    ],
    text: [
      {
        name: 'Text Primary',
        token: '--sem-color-text-base',
        references: 'Light: Neutral 800 | Dark: Gray 100'
      },
      {
        name: 'Text Strong',
        token: '--sem-color-text-strong',
        references: 'Light: Neutral 900 | Dark: Gray 100'
      },
      {
        name: 'Text Muted',
        token: '--sem-color-text-muted',
        references: 'Light: Neutral 700 | Dark: Gray 300'
      },
      {
        name: 'Text Accent',
        token: '--sem-color-accent-strong',
        references: 'Light: Green 600 | Dark: Green 500'
      },
      {
        name: 'Text On Accent',
        token: '--sem-color-accent-strong-on-bg',
        references: 'Light: Neutral 100 | Dark: Neutral 100'
      },
    ],
    border: [
      {
        name: 'Border Subtle',
        token: '--sem-color-border-subtle',
        border: true,
        references: 'Light: Neutral 300 | Dark: Gray 700'
      },
      {
        name: 'Border Base',
        token: '--sem-color-border-base',
        border: true,
        references: 'Light: Neutral 400 | Dark: Gray 600'
      },
      {
        name: 'Border Strong',
        token: '--sem-color-border-strong',
        references: 'Light: Neutral 800 | Dark: Gray 500'
      },
      {
        name: 'Border Accent',
        token: '--sem-color-accent-base',
        references: 'Light: Green 500 | Dark: Green 600'
      },
      {
        name: 'Border Success',
        token: '--sem-color-success-border',
        border: true,
        references: 'Light: Success 600 | Dark: Success 500'
      },
    ],
    state: [
      {
        name: 'Accent Bold',
        token: '--sem-color-accent-secondary',
        references: 'Light: brand palette-1 | Dark: L re-pinned to 72% — preserves brand hue/chroma for icon contrast on dark surfaces'
      },
      {
        name: 'BG Tint 1',
        token: '--sem-color-surface-tint-1',
        references: 'Light: Green 200 (L≈97%) | Dark: collapsed L≈22% — backgrounds only'
      },
      {
        name: 'BG Tint 2',
        token: '--sem-color-surface-tint-2',
        references: 'brand-surface-tint L≈98% | Dark: L≈18% — backgrounds only'
      },
      {
        name: 'Focus Ring',
        token: '--sem-color-focus-ring',
        references: 'Green 500'
      },
      {
        name: 'Success',
        token: '--sem-color-success-surface',
        references: 'Light: Success 600 | Dark: Success 600'
      },
      {
        name: 'Warning',
        token: '--sem-color-warning-surface',
        references: 'Light: Warning 600 | Dark: Warning 600'
      },
      {
        name: 'Info',
        token: '--sem-color-info-surface',
        references: 'Light: Info 600 | Dark: Info 600'
      },
      {
        name: 'Error',
        token: '--sem-color-error-surface',
        references: 'Light: Error 500 | Dark: Error 600'
      },
    ],
  },
};

/**
 * SPACING_SCALE
 */
export const SPACING_SCALE = [
  { token: '--pr-spacing-1', value: '4px' },
  { token: '--pr-spacing-2', value: '8px' },
  { token: '--pr-spacing-3', value: '12px' },
  { token: '--pr-spacing-4', value: '16px' },
  { token: '--pr-spacing-6', value: '24px' },
  { token: '--pr-spacing-8', value: '32px' },
  { token: '--pr-spacing-11', value: '44px' },
  { token: '--pr-spacing-16', value: '64px' },
  { token: '--pr-spacing-21', value: '84px' },
];

/**
 * LAYOUT_CONSTRAINTS
 */
export const LAYOUT_CONSTRAINTS = [
  {
    token: '--sem-layout-content-max',
    value: 'var(--pr-size-600)',
    use: 'Readable content regions and dense section bodies',
  },
  {
    token: '--sem-layout-prose-sm',
    value: '64ch',
    use: 'Compact long-form blocks (hero notes/callouts)',
  },
  {
    token: '--sem-layout-prose',
    value: '68ch',
    use: 'Default prose width for long reading content',
  },
  {
    token: '--sem-layout-container-max',
    value: 'var(--pr-size-1200)',
    use: 'Primary page container for most layouts',
  },
  {
    token: '--sem-layout-page-max',
    value: 'var(--pr-size-1440)',
    use: 'Full-width page shells and wide compositions',
  },
];

/**
 * TYPE_SCALE
 */
export const TYPE_SCALE = [
  { element: 'h1', token: '--sem-text-heading-lg', leading: '--pr-leading-110' },
  { element: 'h2', token: '--sem-text-heading-md', leading: '--pr-leading-120' },
  { element: 'h3', token: '--sem-text-heading-sm', leading: '--pr-leading-120' },
  { element: 'h4', token: '--sem-text-feature', leading: '--pr-leading-150' },
  {
    element: 'span',
    token: '--sem-text-lede',
    leading: '--pr-leading-150',
    text: 'Intro or lead paragraph — larger than body, used for article openers.',
  },
  {
    element: 'span',
    token: '--sem-text-body',
    leading: '--pr-leading-150',
    text: 'Standard reading rhythm for long-form content.',
  },
  {
    element: 'span',
    token: '--sem-text-caption',
    leading: '--pr-leading-100',
    text: 'Used for labels, badges, and secondary meta-data.',
  },
  {
    element: 'span',
    token: '--sem-text-kicker',
    leading: '--pr-leading-100',
    text: 'Editorial kicker text for overlines and section labels.',
  },
];

/**
 * FONT_WEIGHTS
 */
export const FONT_WEIGHTS = [
  { weight: 300, token: '--pr-weight-300', label: 'Light' },
  { weight: 400, token: '--pr-weight-400', label: 'Regular' },
  { weight: 500, token: '--pr-weight-500', label: 'Medium' },
];

/**
 * ELEVATIONS
 */
export const ELEVATIONS = [
  {
    level: 'Low',
    token: '--sem-elevation-low',
    desc: 'Default card depth. References --pr-shadow-100',
    className: 'elevationLow',
  },
  {
    level: 'Medium',
    token: '--sem-elevation-medium',
    desc: 'Interaction depth (Hover). References --pr-shadow-200',
    className: 'elevationMedium',
  },
  {
    level: 'High',
    token: '--sem-elevation-high',
    desc: 'Overlay depth (Modals). References --pr-shadow-300',
    className: 'elevationHigh',
  },
];

/**
 * ANIMATION
 */
export const ANIMATION = {
  durations: [
    { name: 'Fast', token: '--pr-duration-fast', value: '0.2s', desc: 'Quick feedback (hover, button states)' },
    { name: 'Base', token: '--pr-duration-base', value: '0.3s', desc: 'Standard interactions (slides, fades)' },
    { name: 'Slow', token: '--pr-duration-slow', value: '0.4s', desc: 'Deliberate animations (theme toggle)' },
  ],
  easings: [
    { name: 'Ease-out', token: '--pr-easing-out', value: 'ease-out', desc: 'UI reactions (instant start, smooth finish) — appears, responds, closes' },
    { name: 'Ease in-out', token: '--pr-easing-in-out', value: 'ease-in-out', desc: 'User navigation (smooth acceleration/deceleration) — drawers, overlays, sliding' },
  ]
};

/**
 * A11Y_FEATURES
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
  {
    title: 'Reduced Motion',
    desc: 'Global animation reset via media query (prefers-reduced-motion).'
  },
];
