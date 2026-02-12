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
    title: 'Design System Build Notes',
    href: ROUTES.DESIGN_SYSTEM_BUILD_NOTES,
    description:
      'Built with React to explore modern component architecture. This project implements a tiered token structure, demonstrating how type-safe primitives scale from a documentation lab into a production interface.',
    tags: ['Build Notes', 'Design System', 'React'],
    interactive: true,
  },
  {
    title: 'System Core Documentation',
    href: ROUTES.SYSTEM_CORE,
    description:
      'Token reference, primitives, and component foundations. Browse the living docs that power the build notes and the rest of the portfolio.',
    tags: ['Documentation', 'Tokens', 'Foundations'],
    interactive: true,
  },
  {
    title: 'Theming Architectures',
    description:
      'Currently exploring a scalable approach to multi-layered theming. This experiment explores the relationship between global primitives, semantic aliases, and component-level overrides to support high-contrast modes and multi-brand identities without code duplication.',
    tags: [],
    variant: 'flat',
    tone: 'dashed',
  },
];
