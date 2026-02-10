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
    status: [
      { name: 'Success', token: '--pr-color-success' },
      { name: 'Warning', token: '--pr-color-warning' },
      { name: 'Info', token: '--pr-color-info' },
      { name: 'Error', token: '--pr-color-error' },
    ]
  },
  semantic: {
    surface: [
      {
        name: 'BG Base',
        token: '--sem-color-bg-base',
        border: true,
        references: 'Light: Neutral 200 | Dark: Gray 900'
      },
      {
        name: 'BG Subtle',
        token: '--sem-color-bg-subtle',
        border: true,
        references: 'Light: Neutral 300 | Dark: Gray 800'
      },
      {
        name: 'BG Elevated',
        token: '--sem-color-bg-elevated',
        border: true,
        references: 'Light: Neutral 100 | Dark: Gray 700'
      },
      {
        name: 'BG Overlay',
        token: '--sem-color-bg-overlay',
        references: 'Light: Black 80% | Dark: Gray 900'
      },
    ],
    text: [
      {
        name: 'Text Primary',
        token: '--sem-color-text-primary',
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
        references: 'Light: Neutral 600 | Dark: Gray 100'
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
        name: 'Border Window',
        token: '--sem-color-border-window',
        border: true,
        references: 'Light: Neutral 400 | Dark: Gray 700'
      },
      {
        name: 'Divider Subtle',
        token: '--sem-color-divider-subtle',
        references: 'Light: Neutral 300 | Dark: Gray 700'
      },
      {
        name: 'Divider Base',
        token: '--sem-color-divider-base',
        references: 'Light: Neutral 400 | Dark: Gray 600'
      },
      {
        name: 'Divider Strong',
        token: '--sem-color-divider-strong',
        references: 'Light: Neutral 600 | Dark: Gray 500'
      },
    ],
    state: [
      {
        name: 'Accent Green',
        token: '--sem-color-accent-green',
        references: 'Light: Green 200 | Dark: Gray 800'
      },
      {
        name: 'Accent Yellow',
        token: '--sem-color-accent-yellow',
        references: 'Light: Yellow | Dark: Gray 800'
      },
      {
        name: 'Accent Orange',
        token: '--sem-color-accent-orange',
        references: 'Light: Orange | Dark: Gray 800'
      },
      {
        name: 'Accent Cyan',
        token: '--sem-color-accent-cyan',
        references: 'Light: Cyan 100 | Dark: Gray 800'
      },
      {
        name: 'Accent Slate',
        token: '--sem-color-accent-gray',
        references: 'Light: Gray 100 | Dark: Gray 800'
      },
      {
        name: 'Focus Ring',
        token: '--sem-color-focus-ring',
        references: 'Green 500'
      },
      {
        name: 'Success',
        token: '--sem-color-bg-success',
        references: 'Light: Success | Dark: Green 500'
      },
      {
        name: 'Warning',
        token: '--sem-color-bg-warning',
        references: 'Light: Warning | Dark: Warning'
      },
      {
        name: 'Info',
        token: '--sem-color-bg-info',
        references: 'Light: Info | Dark: Info'
      },
      {
        name: 'Error',
        token: '--sem-color-bg-error',
        references: 'Light: Error | Dark: Error'
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
 * TYPE_SCALE
 */
export const TYPE_SCALE = [
  { element: 'h1', token: '--sem-text-heading-lg', leading: '--pr-leading-110' },
  { element: 'h2', token: '--sem-text-heading-md', leading: '--pr-leading-120' },
  { element: 'h3', token: '--sem-text-heading-sm', leading: '--pr-leading-120' },
  { element: 'h4', token: '--pr-text-400', leading: '--pr-leading-150' },
  {
    element: 'p',
    token: '--sem-text-body',
    leading: '--pr-leading-150',
    text: 'Standard reading rhythm for long-form content.'
  },
  {
    element: 'small',
    token: '--sem-text-caption',
    leading: '--pr-leading-100',
    text: 'Used for labels, badges, and secondary meta-data.'
  },
  {
    element: 'span',
    token: '--sem-text-kicker',
    leading: '--pr-leading-100',
    text: 'Editorial kicker text for overlines and section labels.'
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
