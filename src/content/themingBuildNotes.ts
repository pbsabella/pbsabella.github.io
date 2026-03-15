import { Newspaper, Zap, ChartArea, ServerCog, Notebook } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Brand } from '@/context/BrandContext';

export const THEMING_BUILD_NOTES_SECTIONS = [
  { id: 'context', label: 'Context' },
  { id: 'baseline', label: 'Baseline' },
  { id: 'breaking-point', label: 'Breaking Point' },
  { id: 'injection', label: 'Injection' },
  { id: 'oklch', label: 'OKLCH' },
  { id: 'presets', label: 'Presets' },
  { id: 'playground', label: 'Playground' },
  { id: 'the-contract', label: 'The Contract' },
  { id: 'constraints', label: 'Constraints' },
];

export type BrandPreset = {
  id: Brand;
  label: string;
  description: string;
  accentHex: string;
  industry: string;
  icon: LucideIcon;
};

export const BRAND_PRESETS: BrandPreset[] = [
  {
    id: 'portfolio',
    label: 'Default',
    description: 'Minimalist. DM Serif headings, 5px radius. The default baseline.',
    accentHex: 'oklch(67%   0.149 163deg)',
    industry: 'Portfolio',
    icon: Notebook,
  },
  {
    id: 'fintech',
    label: 'Fintech',
    description: 'Formal and precise. Georgia headings, sharp 2px radius, blue tints.',
    accentHex: 'oklch(38% 0.18 258deg);',
    industry: 'Financial Services',
    icon: ChartArea,
  },
  {
    id: 'saas',
    label: 'SaaS',
    description: 'Modern. System sans headings, pillowy 8-14px radius, violet tints.',
    accentHex: 'oklch(54% 0.29 308deg)',
    industry: 'Software',
    icon: ServerCog,
  },
  {
    id: 'editorial',
    label: 'Editorial',
    description: 'Print-heavy. Georgia body text, zero radius, orange tints.',
    accentHex: 'oklch(46% 0.19 24deg)',
    industry: 'Media',
    icon: Newspaper,
  },
  {
    id: 'neon',
    label: 'Neon City',
    description: 'Futuristic city glow. Pink primary with violet and blue haze.',
    accentHex: 'oklch(54% 0.31 342deg)',
    industry: 'Nightlife',
    icon: Zap,
  },
];
