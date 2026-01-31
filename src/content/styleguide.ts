export interface SpacingToken {
  name: string;
  value: string;
  token: string;
}

export const SPACING_TOKENS: SpacingToken[] = [
  { name: 'XXXSmall', value: '4px', token: '--spacing-xxxsmall' },
  { name: 'XXSmall', value: '8px', token: '--spacing-xxsmall' },
  { name: 'XSmall', value: '12px', token: '--spacing-xsmall' },
  { name: 'Small', value: '16px', token: '--spacing-small' },
  { name: 'Medium', value: '24px', token: '--spacing-medium' },
  { name: 'Large', value: '44px', token: '--spacing-large' },
  { name: 'XLarge', value: '64px', token: '--spacing-xlarge' },
  { name: 'XXLarge', value: '84px', token: '--spacing-xxlarge' },
];

