import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import styles from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'sm' | 'md';

const variantMap: Record<ButtonVariant, string> = {
  primary: styles.buttonPrimary,
  secondary: styles.buttonSecondary,
};

const sizeMap: Record<ButtonSize, string> = {
  md: styles.buttonMd,
  sm: styles.buttonSm,
};

type ButtonOwnProps<T extends ElementType> = {
  as?: T;
  /** Button label/content */
  children: ReactNode;
  /** Visual treatment variant */
  variant?: ButtonVariant;
  /** Size token mapping */
  size?: ButtonSize;
  className?: string;
};

type ButtonProps<T extends ElementType> = ButtonOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>;

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
const Button = <T extends ElementType = 'button'>({
  as,
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps<T>) => {
  const Component = as || 'button';

  const classNames = [
    styles.button,
    variantMap[variant],
    sizeMap[size],
    className
  ].filter(Boolean).join(' ');

  const isNativeButton = Component === 'button';
  const hasType = 'type' in props;

  return (
    <Component
      className={classNames}
      {...(isNativeButton && !hasType ? { type: 'button' } : {})}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
