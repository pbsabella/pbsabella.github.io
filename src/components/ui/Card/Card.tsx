import { ElementType, HTMLAttributes, ReactNode } from 'react';
import styles from './Card.module.css';

/**
 * Card Component
 *
 * A reusable container component for content with consistent styling,
 * elevation, and theme-aware appearance. Includes subtle hover effects
 * and dark mode styling.
 *
 * @component
 * @example
 * ```tsx
 * <Card>
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 * ```
 *
 * @param {CardProps} props - Component props
 * @returns {React.ReactElement} The rendered card element
 */

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** The visual style of the card */
  variant?: CardVariant;
  /** Optional tone treatment applied on top of the variant */
  tone?: CardTone;
  /** Card content - accepts any valid React elements */
  children: ReactNode;
  /** Optional additional CSS class for customization */
  className?: string;
  /** If the card should have hover scale/shadow effects */
  isInteractive?: boolean;
  /** Underlying element type for semantic wrappers */
  as?: ElementType;
}

export type CardVariant = 'elevated' | 'flat' | 'panel';
export type CardTone = 'default' | 'dashed';

const Card = ({
  children,
  className = '',
  variant = 'elevated',
  tone = 'default',
  isInteractive = false,
  as: Component = 'div',
  ...props
}: CardProps) => {
  const classes = [
    styles.card,
    styles[`card${variant.charAt(0).toUpperCase() + variant.slice(1)}`],
    styles[`cardTone${tone.charAt(0).toUpperCase() + tone.slice(1)}`],
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
