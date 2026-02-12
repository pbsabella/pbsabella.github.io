export const BUILD_NOTES_SECTIONS = [
  { id: 'motivation', label: 'Motivation' },
  { id: 'problem', label: 'Problem' },
  { id: 'approach', label: 'Approach' },
  { id: 'decisions', label: 'Key Decisions' },
  { id: 'wins', label: 'Outcomes' },
  { id: 'challenges', label: 'Friction' },
  { id: 'demo', label: 'Demo' },
  { id: 'learnings', label: 'Learnings' },
  { id: 'next-steps', label: 'Next Steps' },
  { id: 'system-core', label: 'System Core' },
];

export const BUILD_NOTES_META = [
  { label: 'Project', value: 'Personal' },
  { label: 'Stack', value: 'React + CSS Modules + TypeScript' },
  { label: 'Focus', value: 'Token architecture' },
];

export const BUILD_NOTES_PROBLEM_ITEMS = [
  {
    title: 'UI Drift',
    description: 'Patterns diverged across pages because visual decisions lived inside local component styles.',
  },
  {
    title: 'Hardcoded Values',
    description: 'One-off spacing and color values made consistency difficult to audit and refactor safely.',
  },
  {
    title: 'Theming Friction',
    description: 'Theme work relied on manual overrides instead of intent-driven token remapping.',
  },
];

export const BUILD_NOTES_DECISIONS = [
  {
    title: 'Audit before build.',
    description:
      'Before writing new components, I mapped recurring UI patterns to determine which tokens were foundational versus incidental.',
  },
  {
    title: 'Tokens before components.',
    description:
      'I started by defining primitives and semantic roles to move components toward intent-based consumption, then iterated where direct raw-value usage still surfaced.',
  },
  {
    title: 'Validation in the loop.',
    description:
      'The portfolio itself acts as the regression surface, with unit/integration, E2E, visual regression, and cross-browser smoke checks catching drift as tokens and components evolve.',
  },
  {
    title: 'A11y checks as a release gate.',
    description:
      'Accessibility validation runs as a dedicated release gate: automated smoke audits backed by a manual contrast sweep for layered and pseudo-element edge cases.',
  },
  {
    title: 'Dogfood in production.',
    description:
      'Most core sections now consume the same token stack, so architecture decisions are increasingly validated in real usage as coverage expands.',
  },
];

export const BUILD_NOTES_WINS = [
  'Theme work shifted from component edits to semantic remapping.',
  'Component APIs stayed structural while tokens handled visual intent.',
  'The system now enforces constraints, so random one-off values are harder to ship.',
];

export const BUILD_NOTES_CHALLENGES = [
  'Token naming was only one part of the challenge; the system needed multiple rounds of refactoring and reconfiguration to keep intent clear and implementation practical.',
  'Balancing semantic purity with shipping pressure was the hardest tradeoff. A few "clean" semantic splits were too granular in real UI, so I consolidated usage rules to keep decisions fast.',
  'Layered backgrounds and pseudo-elements made contrast automation noisy; adding a manual contrast sweep gave me a stable fallback for validating edge cases.',
];

export const BUILD_NOTES_CHALLENGE_NOTE =
  'Cherish your designers. Choosing color scales that look good and pass a11y in light and dark modes had me one token away from losing it.';

export const BUILD_NOTES_NEXT_STEPS = [
  'Define clear token consumption boundaries (what can consume PR vs SEM vs COMP) and enforce them with linting.',
  'Expand component coverage to complex composition patterns and verify behavior under richer composition scenarios.',
  'Refine theming strategy further, including where concerns should live best: primitive, semantic, or a hybrid model.',
];
