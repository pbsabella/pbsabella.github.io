import { ROUTES } from '@constants/routes';
import type { CardTone, CardVariant } from '@/components/ui/Card/Card';

type LabsProject = {
  title: string;
  description: string;
  tags: string[];
  interactive?: boolean;
  href?: string;
  variant?: CardVariant;
  tone?: CardTone;
};

export const LABS_PROJECTS: LabsProject[] = [
  {
    title: 'YieldFlow',
    href: ROUTES.YIELD_FLOW_CASE_STUDY,
    description:
      'A case study of how I turned my personal finance tracking from a messy spreadsheet into a full-fledged application.',
    tags: ['Case Study', 'Design Engineering', 'Personal Finance', 'Next.js'],
    interactive: true,
  },
  {
    title: 'Theming - Part 2',
    href: ROUTES.THEMING_BUILD_NOTES,
    description:
      'Continuation of the design system build notes. Adds brand anchors, white-label support, and instant re-skinning via CSS layers.',
    tags: ['Build Notes', 'Token Architecture', 'White-label', 'Cascade Layers'],
    interactive: true,
  },
  {
    title: 'Design System - Part 1',
    href: ROUTES.DESIGN_SYSTEM_BUILD_NOTES,
    description:
      'The original system build notes: component architecture, semantic tokens, and light/dark theming.',
    tags: ['Build Notes', 'Token Architecture', 'Light/Dark', 'React'],
    interactive: true,
  },
  {
    title: 'System Core',
    href: ROUTES.SYSTEM_CORE,
    description:
      'Token reference, primitives, and component foundations. Browse the living docs that power the build notes and the rest of the portfolio.',
    tags: ['Documentation', 'Tokens', 'Foundations'],
    interactive: true,
  },
];
