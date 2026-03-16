import { ROUTES } from '@constants/routes';

export const LABS_META = {
  title: 'Works & Research',
  description:
    'A curated archive of my journey through design and engineering. This space houses self-directed case studies, UX research projects, and technical experiments, focusing on the intersection of user experience and scalable architecture.',
  breadcrumbs: [
    { label: 'Home', to: ROUTES.HOME },
    { label: 'Labs' },
  ],
};

export const SYSTEM_CORE_META = {
  title: 'System Core',
  description:
    'A living reference of the design tokens, primitives, and components that power this portfolio. This system demonstrates a tiered token architecture (primitive → semantic → component) with a focus on maintainability, ensuring that the foundational elements used here translate directly into a cohesive and accessible user experience.',
  breadcrumbs: [
    { label: 'Home', to: ROUTES.HOME },
    { label: 'Labs', to: ROUTES.LABS },
    { label: 'System Core' },
  ],
};

export const BUILD_NOTES_META_PAGE = {
  breadcrumbs: [
    { label: 'Home', to: ROUTES.HOME },
    { label: 'Labs', to: ROUTES.LABS },
    { label: 'Design System' },
  ],
  heroBadge: 'React + Design Systems',
  heroKicker: 'Build Notes 01',
  heroTitle: 'The Architecture',
  heroTitleAccent: 'of Consistency',
  heroSubtitle:
    'Building a multi-tiered token architecture and proving it in a real portfolio UI.',
};

export const THEMING_BUILD_NOTES_META_PAGE = {
  breadcrumbs: [
    { label: 'Home', to: ROUTES.HOME },
    { label: 'Labs', to: ROUTES.LABS },
    { label: 'Theming' },
  ],
  heroBadge: 'CSS Architecture',
  heroKicker: 'Build Notes 02',
  heroTitle: 'Theming:',
  heroTitleAccent: 'The Logic of Identity',
  heroSubtitle:
    'A four-tier brand system where identity is injected once and felt everywhere.',
  heroStats: [
    { label: 'Project', value: 'Personal' },
    { label: 'Stack', value: 'React, CSS Modules, TypeScript' },
    { label: 'Focus', value: 'Token architecture, @layer, oklch color space' },
  ],
};

export const YIELD_FLOW_META_PAGE = {
  breadcrumbs: [
    { label: 'Home', to: ROUTES.HOME },
    { label: 'Labs', to: ROUTES.LABS },
    { label: 'YieldFlow' },
  ],
  heroBadge: 'Design Engineering',
  heroKicker: 'Case Study 01',
  heroTitle: 'YieldFlow: Outgrowing the',
  heroTitleAccent: 'Spreadsheet',
  heroSubtitle:
    'Replacing a multi-tab spreadsheet with a tool built around urgency, not balances.',
};
