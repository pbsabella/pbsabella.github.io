import { ReactNode } from 'react';
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

interface CardProps {
  /** The visual style of the card */
  variant?: CardVariant;
  /** Card content - accepts any valid React elements */
  children: ReactNode;
  /** Optional additional CSS class for customization */
  className?: string;
  /** If the card should have hover scale/shadow effects */
  isInteractive?: boolean;
}

type CardVariant = 'elevated' | 'flat' | 'ghost'

const Card = ({
  children,
  className = '',
  variant = 'elevated',
  isInteractive = false,
  ...props
}: CardProps) => {
  const classes = [
    styles.card,
    styles[variant],
    isInteractive && styles.interactive,
    className
  ].filter(Boolean).join(' ');

   return <div className={classes} {...props}>{children}</div>;
};

export default Card;
