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
      'Exploring component architecture and tiered token systems in React. Shows how design tokens scale from documentation to production.',
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
      'Currently untangling multi-layered theming. How do primitives, semantic tokens, and component overrides hold up when you add light/dark modes and brand variants?',
    tags: [],
    variant: 'flat',
    tone: 'dashed',
  },
];
