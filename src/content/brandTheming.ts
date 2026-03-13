import { Newspaper, Zap, ChartArea, ServerCog, Notebook } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Brand } from '@/context/BrandContext';

export const BRAND_THEMING_SECTIONS = [
  { id: 'intro', label: 'Overview' },
  { id: 'brand-switcher', label: 'Brand Switcher' },
  { id: 'component-preview', label: 'Component Preview' },
  { id: 'token-architecture', label: 'Token Architecture' },
  { id: 'folder-structure', label: 'Folder Structure' },
  { id: 'dark-mode', label: 'Universal Dark Mode' },
  { id: 'brandable-slots', label: 'Supported Brandable Slots' },
  { id: 'anchor-reference', label: 'Brand Anchor Reference' },
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
    accentHex: 'oklch(49.5% 0.223 261deg)',
    industry: 'Financial Services',
    icon: ChartArea,
  },
  {
    id: 'saas',
    label: 'SaaS',
    description: 'Modern. System sans headings, pillowy 8-14px radius, violet tints.',
    accentHex: 'oklch(49.4% 0.258 296deg)',
    industry: 'Software',
    icon: ServerCog,
  },
  {
    id: 'editorial',
    label: 'Editorial',
    description: 'Print-heavy. Georgia body text, zero radius, orange tints.',
    accentHex: 'oklch(65.7% 0.216 35deg)',
    industry: 'Media',
    icon: Newspaper,
  },
  {
    id: 'neon',
    label: 'Neon City',
    description: 'Futuristic city glow. Pink primary with violet and blue haze.',
    accentHex: 'oklch(62.2% 0.270 349deg)',
    industry: 'Nightlife',
    icon: Zap,
  },
];
