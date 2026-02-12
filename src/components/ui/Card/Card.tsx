import { ElementType, HTMLAttributes, ReactNode } from 'react';
import styles from './Card.module.css';

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

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** The visual style of the card */
  variant?: CardVariant;
  /** Optional tone treatment applied on top of the variant */
  tone?: CardTone;
  /** Card content */
  children: ReactNode;
  /** Optional additional CSS class */
  className?: string;
  /** Enables hover affordance styles */
  isInteractive?: boolean;
  /** Underlying element type for semantic wrappers */
  as?: ElementType;
}

export type CardVariant = 'elevated' | 'flat' | 'panel';
export type CardTone = 'default' | 'dashed';

const Card = ({
  children,
  className,
  variant = 'elevated',
  tone = 'default',
  isInteractive = false,
  as: Component = 'div',
  ...props
}: CardProps) => {
  const variantClass = styles[`card${variant.charAt(0).toUpperCase() + variant.slice(1)}`];
  const toneClass = styles[`cardTone${tone.charAt(0).toUpperCase() + tone.slice(1)}`];
  const classes = [
    styles.card,
    variantClass,
    toneClass,
    isInteractive && styles.cardInteractive,
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

export default Card;
