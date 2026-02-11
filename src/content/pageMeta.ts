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

export const CASE_STUDY_META_PAGE = {
  breadcrumbs: [
    { label: 'Home', to: ROUTES.HOME },
    { label: 'Labs', to: ROUTES.LABS },
    { label: 'Design System Build Notes' },
  ],
  heroBadge: 'First React Project',
  heroKicker: 'Build Notes 01',
  heroTitle: 'The Architecture',
  heroTitleAccent: 'of Consistency',
  heroSubtitle:
    'Building a multi-tiered token architecture from scratch, then proving it in a real portfolio UI.',
};
