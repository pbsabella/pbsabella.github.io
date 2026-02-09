import smDsWide from '@assets/sm-ds-wide.png';
import smNotifications from '@assets/sm-notifications.png';
import flDsWide from '@assets/fl-ds-wide.png';
import wireframingTool from '@assets/wireframing-tool-frame.png';
import animationKnobs from '@assets/animation-knobs.png';

export interface Project {
  id: string;
  image: string;
  title: string;
  company: string;
  period: string;
  position: string;
  description: string[];
  tags: string[];
  bgClass?: string;
}

/**
 * Static portfolio content
 */
export const PROJECTS: Project[] = [
  {
    id: 'siteminder-design-system-patterns',
    image: smDsWide,
    title: 'Design System & Patterns',
    company: 'SiteMinder',
    period: 'May 2021 - Jan 2026',
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
  },
  {
    id: 'siteminder-notifications-platform',
    image: smNotifications,
    title: 'Notifications Platform',
    company: 'SiteMinder',
    period: 'May 2021 - Jan 2026',
    position: 'Senior Frontend Engineer / Feature Lead',
    description: [
      'Led the frontend delivery of a centralized messaging system, acting as the technical bridge between product requirements and scalable UI implementation. Leveraged the design system to ensure seamless user interaction and visual consistency across the platform.',
    ],
    tags: ['Microfrontend Architecture', 'Vue.js', 'TypeScript', 'GraphQL', 'Accessibility (WCAG)', 'Performance Optimization'],
    bgClass: 'bgAccentPrimaryLight',
  },
  {
    id: 'freelancer-design-system',
    image: flDsWide,
    title: 'Design System',
    company: 'Freelancer.com',
    period: 'July 2015 - May 2021',
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
  },
  {
    id: 'freelancer-wireframing-app',
    image: wireframingTool,
    title: 'Wireframing Application',
    company: 'Freelancer.com',
    period: 'July 2015 - May 2021',
    position: 'Software Engineer',
    description: [
      'Developed a high-fidelity internal tool that allowed product managers to prototype using real code components. This project bridged the gap between design and engineering by rendering live system components with form-based controls.',
    ],
    tags: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Node.js'],
    bgClass: 'bgAccentCyanLight',
  },
  {
    id: 'freelancer-motion-system',
    image: animationKnobs,
    title: 'Motion System',
    company: 'Freelancer.com',
    period: 'July 2015 - May 2021',
    position: 'Software Engineer',
    description: [
      "Architected the platform's animation infrastructure. Created a library of exportable animation tokens and keyframes to standardize motion and transitions across all web products.",
    ],
    tags: ['Angular', 'Angular Animations', 'TypeScript', 'HTML', 'CSS'],
  },
];
