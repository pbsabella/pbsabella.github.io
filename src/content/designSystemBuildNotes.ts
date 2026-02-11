export const BUILD_NOTES_SECTIONS = [
  { id: 'motivation', label: 'Motivation' },
  { id: 'problem', label: 'Problem' },
  { id: 'approach', label: 'Approach' },
  { id: 'decisions', label: 'Key Decisions' },
  { id: 'wins', label: 'What Worked' },
  { id: 'challenges', label: 'What Was Hard' },
  { id: 'demo', label: 'Demo Snapshot' },
  { id: 'learnings', label: 'What I Learned' },
  { id: 'next-steps', label: 'Next Step' },
  { id: 'system-core', label: 'System Core Docs' },
];

export const BUILD_NOTES_META = [
  { label: 'Project', value: 'Personal' },
  { label: 'Stack', value: 'React + TypeScript' },
  { label: 'Focus', value: 'Token architecture' },
];

import type { TagVariant } from '@/components/ui/Tag/Tag';

export const BUILD_NOTES_TAGS: Array<{ label: string; variant: TagVariant }> = [
  { label: 'React', variant: 'info' },
  { label: 'Tokens', variant: 'success' },
  { label: 'Build Notes', variant: 'warning' },
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
      'Accessibility checks run as part of regular validation to prevent contrast and structure regressions from shipping.',
  },
  {
    title: 'Dogfood in production.',
    description:
      'Every section of the portfolio consumes the same token stack, so architecture decisions are tested in real usage.',
  },
];

export const BUILD_NOTES_WINS = [
  'Dark mode became a token remap, not a component rewrite.',
  'Component APIs stayed focused on structure while tokens handled visual intent.',
  'Cross-page typography, spacing, and states now share one enforceable baseline.',
];

export const BUILD_NOTES_CHALLENGES = [
  'Token naming was only one part of the challenge; the system needed multiple rounds of refactoring and reconfiguration to keep intent clear and implementation practical.',
  'Balancing semantic purity with shipping pressure required explicit tradeoff decisions.',
  'Design-system rigor and React implementation depth had to mature in parallel.',
];

export const BUILD_NOTES_NEXT_STEPS = [
  'Codify strict token usage rules (what can consume PR vs SEM vs COMP) and enforce them with linting.',
  'Expand component coverage to complex composition patterns and verify behavior under richer composition scenarios.',
  'Refine theming strategy further, including where concerns should live best: primitive, semantic, or a hybrid model.',
];
