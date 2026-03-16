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
    title: 'Design Systems 02: Scaling Identity',
    href: ROUTES.THEMING_BUILD_NOTES,
    description:
      'Evolving the architecture into a 4-tier injection model using CSS Cascade Layers and OKLCH for multi-brand scale.',
    tags: ['Build Notes', 'CSS Architecture', 'Multi-brand', 'OKLCH'],
    interactive: true,
  },
  {
    title: 'Design Systems 01: Token Architecture',
    href: ROUTES.DESIGN_SYSTEM_BUILD_NOTES,
    description:
      'A deep dive into a 3-tier token system designed to eliminate UI drift and manual refactors in React.',
    tags: ['Build Notes', 'React', 'Design Systems', 'Scalability'],
    interactive: true,
  },
  {
    title: 'System Core',
    href: ROUTES.SYSTEM_CORE,
    description:
      'Token reference, primitives, and component foundations. Browse the living docs that power the build notes and the rest of the portfolio.',
    tags: ['Documentation', 'Design System', 'Foundations'],
    interactive: true,
  },
];
