import { ElementType, HTMLAttributes, ReactNode } from 'react';
import styles from './Card.module.css';

export type CardVariant = 'elevated' | 'flat' | 'panel';
export type CardTone = 'default' | 'dashed';

const variantMap: Record<CardVariant, string> = {
  elevated: styles.cardElevated,
  flat: styles.cardFlat,
  panel: styles.cardPanel,
};

const toneMap: Record<CardTone, string> = {
  default: '',
  dashed: styles.cardToneDashed,
};

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
  /** The visual style of the card */
  variant?: CardVariant;
  /** Optional tone treatment applied on top of the variant */
  tone?: CardTone;
  /** Card content */
  children: ReactNode;
  /** Enables hover affordance styles */
  isInteractive?: boolean;
  /** Underlying element type for semantic wrappers */
  as?: ElementType;
}

/**
 * Card Component
 *
 * Purpose:
 * - Layout container for grouped content blocks.
 *
 * Usage:
 * ```tsx
 * <Card variant="panel" tone="default">...</Card>
 * <Card variant="elevated" isInteractive={true}>...</Card>
 * ```
 *
 * Accessibility:
 * - `isInteractive` is visual only
 * - For actual interaction use semantic wrappers (`button`, `a`, or linked parent) with keyboard support
 */
const Card = ({
  children,
  variant = 'elevated',
  tone = 'default',
  isInteractive = false,
  as: Component = 'div',
  ...props
}: CardProps) => {
  const classes = [
    styles.card,
    variantMap[variant],
    toneMap[tone],
    isInteractive && styles.cardInteractive,
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Card;
