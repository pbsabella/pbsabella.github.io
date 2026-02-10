import { ROUTES } from '@constants/routes';

export const LABS_PROJECTS = [
  {
    title: 'Design System Case Study',
    href: ROUTES.DESIGN_SYSTEM_CASE_STUDY,
    description:
      'Built with React to explore modern component architecture. This project implements a tiered token structure, demonstrating how type-safe primitives scale from a documentation lab into a production interface.',
    tags: ['Case Study', 'Design System', 'React'],
    interactive: true,
  },
  {
    title: 'System Core Documentation',
    href: ROUTES.SYSTEM_CORE,
    description:
      'Token reference, primitives, and component foundations. Browse the living docs that power the case study and the rest of the portfolio.',
    tags: ['Documentation', 'Tokens', 'Foundations'],
    interactive: true,
  },
  {
    title: 'Theming Architectures',
    description:
      'Currently exploring a scalable approach to multi-layered theming. This experiment explores the relationship between global primitives, semantic aliases, and component-level overrides to support high-contrast modes and multi-brand identities without code duplication.',
    tags: [],
    variant: 'ghost',
  },
];
