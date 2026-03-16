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
  accentColor: string;
  industry: string;
  icon: LucideIcon;
};

export const BRAND_PRESETS: BrandPreset[] = [
  {
    id: 'portfolio',
    label: 'Default',
    description: 'Minimalist. DM Serif headings, 4px radius. The default baseline.',
    accentColor: 'var(--sem-color-accent-base)',
    industry: 'Portfolio',
    icon: Notebook,
  },
  {
    id: 'fintech',
    label: 'Fintech',
    description: 'Formal and precise. Georgia headings, sharp 2px radius, blue tints.',
    accentColor: 'var(--sem-color-accent-base)',
    industry: 'Financial Services',
    icon: ChartArea,
  },
  {
    id: 'saas',
    label: 'SaaS',
    description: 'Modern. System sans headings, pillowy 8-14px radius, violet tints.',
    accentColor: 'var(--sem-color-accent-base)',
    industry: 'Software',
    icon: ServerCog,
  },
  {
    id: 'editorial',
    label: 'Editorial',
    description: 'Print-heavy. Georgia body text, zero radius, orange tints.',
    accentColor: 'var(--sem-color-accent-base)',
    industry: 'Media',
    icon: Newspaper,
  },
  {
    id: 'neon',
    label: 'Neon City',
    description: 'Futuristic city glow. Pink primary with violet and blue haze.',
    accentColor: 'var(--sem-color-accent-base)',
    industry: 'Nightlife',
    icon: Zap,
  },
];
