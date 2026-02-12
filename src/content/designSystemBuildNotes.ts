export const BUILD_NOTES_SECTIONS = [
  { id: 'motivation', label: 'Motivation' },
  { id: 'problem', label: 'Problem' },
  { id: 'approach', label: 'Approach' },
  { id: 'decisions', label: 'Key Decisions' },
  { id: 'wins', label: 'Outcomes' },
  { id: 'challenges', label: 'Friction' },
  { id: 'demo', label: 'Demo' },
  { id: 'learnings', label: 'Learnings' },
  { id: 'next-steps', label: 'Next Step' },
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
      'I locked primitives and semantic roles first so components consume intent instead of reaching into raw values directly.',
  },
  {
    title: 'Validation in the loop.',
    description:
      'The portfolio itself acts as the regression surface, with automated smoke/contrast checks catching drift as tokens and components evolve.',
  },
  {
    title: 'A11y checks as a release gate.',
    description:
      'Accessibility checks now run as a two-layer gate: automated smoke audits plus a manual contrast sweep script. That setup has been reliable for catching regressions while keeping shipping confidence high.',
  },
  {
    title: 'Dogfood in production.',
    description:
      'Every section of the portfolio consumes the same token stack, so architecture decisions are tested in real usage.',
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
  'Contrast checks for a11y got flaky once layered backgrounds and pseudo-elements were introduced. I ended up adding a manual contrast sweep script so results stay stable and actionable.',
];

export const BUILD_NOTES_NEXT_STEPS = [
  'Define clear token consumption boundaries (what can consume PR vs SEM vs COMP) and enforce them with linting.',
  'Expand component coverage to complex composition patterns and verify behavior under richer composition scenarios.',
  'Refine theming strategy further, including where concerns should live best: primitive, semantic, or a hybrid model.',
];
