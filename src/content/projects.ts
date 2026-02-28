import smDsWide from '@assets/sm-ds-wide.png';
import smNotifications from '@assets/sm-notifications.png';
import flDsWide from '@assets/fl-ds-wide.png';
import wireframingTool from '@assets/wireframing-tool-frame.png';
import animationKnobs from '@assets/animation-knobs.png';
import yfDashboard from '@assets/yf-dashboard.png';
import { ROUTES } from '@/constants/routes';

export type ProjectMediaPreset = 'default' | 'inset' | 'notifications' | 'left-crop' | 'zoom-out';

export interface Project {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  company: string;
  period?: string;
  position: string;
  description: string[];
  tags: string[];
  mediaPreset?: ProjectMediaPreset;
  link?: string;
}

/**
 * Static portfolio content
 */
export const PROJECTS: Project[] = [
  {
    id: 'yield-flow',
    image: yfDashboard,
    imageAlt: 'YieldFlow — High-fidelity financial dashboard interface.',
    title: 'YieldFlow',
    company: 'Personal Project',
    period: 'Feb 2026',
    position: 'UX Engineer',
    description: [
      'Engineered a high-precision investment tracking engine capable of simulating tiered interest rates and monthly cash flow projections for fixed-income assets.',
    ],
    tags: [
      'Next.js',
      'TypeScript',
      'Radix UI',
      'shadcn/ui',
      'Tailwind CSS',
      'Financial Modeling',
    ],
    mediaPreset: 'zoom-out',
    link: ROUTES.YIELD_FLOW_CASE_STUDY,
  },
  {
    id: 'siteminder-design-system-patterns',
    image: smDsWide,
    imageAlt: 'SiteMinder design system and patterns interface overview.',
    title: 'Design System & Patterns',
    company: 'SiteMinder',
    // period: 'May 2021 - Jan 2026',
    position: 'Senior Frontend Engineer',
    description: [
      'Governed the technical roadmap for reusable interaction patterns and themed components used across the entire engineering organization. Focused on scaling accessibility through WCAG 2.1 AA standards and creating cohesive UI layers that handle complex platform states.',
    ],
    tags: [
      'Vue.js',
      'TypeScript',
      'HTML',
      'CSS',
      'Design Tokens',
      'Component Lifecycle Management',
      'Accessibility (WCAG)',
      'Figma',
      'Storybook',
    ],
    mediaPreset: 'left-crop',
  },
  {
    id: 'siteminder-notifications-platform',
    image: smNotifications,
    imageAlt: 'Notifications platform UI showing centralized messaging components.',
    title: 'Notifications Platform',
    company: 'SiteMinder',
    // period: 'May 2021 - Jan 2026',
    position: 'Senior Frontend Engineer / Feature Lead',
    description: [
      'Led the frontend delivery of a centralized messaging system, acting as the technical bridge between product requirements and scalable UI implementation. Leveraged the design system to ensure seamless user interaction and visual consistency across the platform.',
    ],
    tags: ['Microfrontend Architecture', 'Vue.js', 'TypeScript', 'GraphQL', 'Accessibility (WCAG)', 'Performance Optimization'],
    mediaPreset: 'notifications',
  },
  {
    id: 'freelancer-design-system',
    image: flDsWide,
    imageAlt: 'Freelancer design system interface with reusable components.',
    title: 'Design System',
    company: 'Freelancer.com',
    // period: 'July 2015 - May 2021',
    position: 'Software Engineer',
    description: [
      "Developed core system components to ensure scalable UI implementation and consistency for all product feature teams. Maintained UI parity across desktop, iOS, and Android platforms by transforming high-fidelity wireframes into performance-oriented web components.",
    ],
    tags: [
      'Angular',
      'TypeScript',
      'HTML',
      'CSS',
      'Node.js',
      'Component Architecture',
      'Accessibility',
    ],
    mediaPreset: 'left-crop',
  },
  {
    id: 'freelancer-wireframing-app',
    image: wireframingTool,
    imageAlt: 'Internal wireframing tool with component-driven canvas view.',
    title: 'Wireframing Application',
    company: 'Freelancer.com',
    // period: 'July 2015 - May 2021',
    position: 'Software Engineer',
    description: [
      'Developed a high-fidelity internal tool that allowed product managers to prototype using real code components. This project bridged the gap between design and engineering by rendering live system components with form-based controls.',
    ],
    tags: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Node.js'],
    mediaPreset: 'zoom-out',
  },
  {
    id: 'freelancer-motion-system',
    image: animationKnobs,
    imageAlt: 'Motion system interface with animation controls and token values.',
    title: 'Motion System',
    company: 'Freelancer.com',
    // period: 'July 2015 - May 2021',
    position: 'Software Engineer',
    description: [
      "Architected the platform's animation infrastructure. Created a library of exportable animation tokens and keyframes to standardize motion and transitions across all web products.",
    ],
    tags: ['Angular', 'Angular Animations', 'TypeScript', 'HTML', 'CSS'],
    mediaPreset: 'inset',
  },
];
