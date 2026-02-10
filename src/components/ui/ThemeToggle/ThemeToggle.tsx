import { ButtonHTMLAttributes, MouseEvent, useState } from 'react';
import { useTheme } from '@context/ThemeContext';
import styles from './ThemeToggle.module.css';
import Button from '@/components/ui/Button/Button';

/**
 * ThemeToggle Component
 *
 * An accessible theme switcher that toggles between light and dark modes.
 * Includes smooth animated SVG icons and respects prefers-reduced-motion.
 * Persists theme preference to localStorage via ThemeContext.
 *
 * @component
 * @example
 * ```tsx
 * <ThemeToggle id="theme-toggle-button" />
 * ```
 *
 * @param {ThemeToggleProps} props - Component props
 * @returns {React.ReactElement} The rendered toggle button
 */

interface ThemeToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Unique HTML id for the button element */
  id: string;
  /** Visual style of the toggle */
  variant?: 'icon' | 'text';
  /** Optional text label override */
  label?: string;
  className?: string;
}

const ThemeToggle = ({ id, variant = 'icon', label, className, onClick, ...props }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleToggle = () => {
    if (!hasInteracted) setHasInteracted(true);
    toggleTheme();
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    handleToggle();
  };

  const animationClass = hasInteracted ? styles.themeToggleIconAnimate : '';
  const nextTheme = theme === 'light' ? 'dark' : 'light';
  const buttonLabel = label ?? `Switch to ${nextTheme} mode`;

  return (
    variant === 'text' ? (
      <Button
        id={id}
        variant="secondary"
        size="sm"
        onClick={handleClick}
        aria-label={buttonLabel}
        className={className}
        {...props}
      >
        {buttonLabel}
      </Button>
    ) : (
      <button
        className={`${styles.themeToggleButton} ${styles.themeToggleButtonIcon} ${className ?? ''}`}
        id={id}
        onClick={handleClick}
        aria-label="Toggle theme"
        {...props}
      >
        <>
          <svg
            className={`${styles.themeToggleIcon} ${animationClass} ${styles.themeToggleSun}`}
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <circle cx="12" cy="12" r="5" />
            <g strokeLinecap="round">
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </g>
          </svg>
          <svg
            className={`${styles.themeToggleIcon} ${animationClass} ${styles.themeToggleMoon}`}
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 1021 12.79z" />
          </svg>
        </>
      </button>
    )
  );
};

export default ThemeToggle;
