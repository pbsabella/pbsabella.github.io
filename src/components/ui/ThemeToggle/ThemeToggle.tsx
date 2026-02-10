import { ButtonHTMLAttributes, MouseEvent, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
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
          <Sun
            aria-hidden="true"
            className={`${styles.themeToggleIcon} ${animationClass} ${styles.themeToggleSun}`}
          />
          <Moon
            aria-hidden="true"
            className={`${styles.themeToggleIcon} ${animationClass} ${styles.themeToggleMoon}`}
          />
        </>
      </button>
    )
  );
};

export default ThemeToggle;
