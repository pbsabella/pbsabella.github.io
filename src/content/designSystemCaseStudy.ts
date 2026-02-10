export const CASE_STUDY_SECTIONS = [
  { id: 'motivation', label: 'Motivation' },
  { id: 'problem', label: 'Problem' },
  { id: 'approach', label: 'Approach' },
  { id: 'decisions', label: 'Key Decisions' },
  { id: 'wins', label: 'What Worked' },
  { id: 'challenges', label: 'What Was Hard' },
  { id: 'demo', label: 'Demo Snapshot' },
  { id: 'learnings', label: 'What I Learned' },
  { id: 'next-steps', label: 'Next Step' },
];

export const CASE_STUDY_META = [
  { label: 'Project', value: 'Personal' },
  { label: 'Stack', value: 'React + TypeScript' },
  { label: 'Focus', value: 'Token architecture' },
];

import type { TagVariant } from '@/components/ui/Tag/Tag';

export const CASE_STUDY_TAGS: Array<{ label: string; variant: TagVariant }> = [
  { label: 'React', variant: 'info' },
  { label: 'Tokens', variant: 'success' },
  { label: 'Case Study', variant: 'warning' },
];

export const CASE_STUDY_PROBLEM_ITEMS = [
  {
    title: 'UI Drift',
    description: 'Disjointed styles across pages due to lack of constraints.',
  },
  {
    title: 'Hardcoded Values',
    description: 'Magic numbers in CSS that are impossible to audit.',
  },
  {
    title: 'Theming Friction',
    description: 'Dark mode implementation requiring manual overrides.',
  },
];

export const CASE_STUDY_DECISIONS = [
  {
    title: 'Audit before build.',
    description:
      'Since the portfolio already existed, I audited existing UI patterns first to lock in tokens before refactoring the UI.',
  },
  {
    title: 'Tokens before components.',
    description:
      'I defined primitives and semantics first so components inherit intent instead of raw values.',
  },
  {
    title: 'Visual testing.',
    description:
      'The portfolio itself acts as a live visual test, with Percy snapshots to catch drift as tokens evolve.',
  },
  {
    title: 'Automated a11y checks.',
    description:
      'Bake in basic accessibility verification to prevent regressions as the system evolves.',
  },
  {
    title: 'Dogfood in production.',
    description:
      'The portfolio UI doubles as the testing ground for token scaling and accessibility.',
  },
];

export const CASE_STUDY_WINS = [
  'Dark mode became a token swap, not a component refactor.',
  'React components stayed thin and focused on structure.',
  'Typography and spacing stayed consistent across pages.',
];

export const CASE_STUDY_CHALLENGES = [
  'Token naming required weeks of iteration to feel right.',
  'Balancing purity vs. shipping something usable.',
  'Learning React and system architecture simultaneously.',
];

export const CASE_STUDY_NEXT_STEPS = [
  'Refine the theming layer by making the override rule explicit (primitives vs. semantics vs. both) and validating the cascade.',
  'Extend the UI/components to cover more complex patterns and pressure-test the system.',
];
