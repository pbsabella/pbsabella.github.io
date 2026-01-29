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
  /** Card content - accepts any valid React elements */
  children: ReactNode;
  /** Optional additional CSS class for customization */
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export default Card;
