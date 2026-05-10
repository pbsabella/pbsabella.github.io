import { Activity, Command, Component, Cpu, Eye, Layers, ShieldCheck, Wrench } from 'lucide-react';

/**
 * Static "About" content
 */
export const COMPETENCIES = [
  {
    icon: <Component size={20} />,
    title: "Design Systems",
    description: "Architecture, Tokens, and Component Lifecycle Management at scale",
  },
  {
    icon: <Activity size={20} />,
    title: "Frontend Architecture",
    description: "Microfrontends, Web Vitals performance, and Component Design",
  },
  {
    icon: <Eye size={20} />,
    title: "Inclusive Design",
    description: "WCAG Compliance, ARIA Patterns, and Accessibility Audits",
  },
  {
    icon: <Command size={20} />,
    title: "Engineering Leadership",
    description: "Mentoring, System Governance, and Quality Standards",
  }
];

export const TECH_STACK = [
  {
    icon: <Cpu size={20} />,
    title: "Runtime",
    description: "TypeScript, JavaScript, Vue.js, React, Angular",
  },
  {
    icon: <Layers size={20} />,
    title: "Interface",
    description: "HTML5, CSS3, Tailwind CSS, Design Tokens",
  },
  {
    icon: <Wrench size={20} />,
    title: "Tooling",
    description: "GraphQL, Vite, Webpack, Figma, Storybook, Copilot, Claude",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Testing",
    description: "Jest, Vitest, Cypress, Percy, Vue/React Testing Library",
  }
];
