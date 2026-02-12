import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'sm' | 'md';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button label/content */
  children: ReactNode;
  /** Visual treatment variant */
  variant?: ButtonVariant;
  /** Size token mapping */
  size?: ButtonSize;
  className?: string;
}

/**
 * Button Component
 *
 * Purpose:
 * - Core action control for primary and secondary actions.
 *
 * Usage:
 * ```tsx
 * <Button variant="primary" size="md">Save</Button>
 * <Button variant="secondary" size="sm">Cancel</Button>
 * ```
 *
 * Accessibility:
 * - Defaults to `type="button"` to avoid accidental form submission.
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  className,
  ...props
}: ButtonProps) => {
  const variantClass = styles[`button${variant.charAt(0).toUpperCase() + variant.slice(1)}`];
  const sizeClass = styles[`button${size.charAt(0).toUpperCase() + size.slice(1)}`];
  const classNames = [styles.button, variantClass, sizeClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classNames} type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
