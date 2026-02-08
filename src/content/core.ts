export interface SpacingToken {
  name: string;
  value: string;
  token: string;
}

export const SPACING_TOKENS: SpacingToken[] = [
  { name: 'XXXSmall', value: '4px', token: '--spacing-1' },
  { name: 'XXSmall', value: '8px', token: '--spacing-2' },
  { name: 'XSmall', value: '12px', token: '--spacing-3' },
  { name: 'Small', value: '16px', token: '--spacing-4' },
  { name: 'Medium', value: '24px', token: '--spacing-6' },
  { name: 'Large', value: '44px', token: '--spacing-11' },
  { name: 'XLarge', value: '64px', token: '--spacing-16' },
  { name: 'XXLarge', value: '84px', token: '--spacing-21' },
];
