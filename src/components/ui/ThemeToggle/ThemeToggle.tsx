import { ButtonHTMLAttributes, MouseEvent, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@context/ThemeContext';
import styles from './ThemeToggle.module.css';
import Button from '@/components/ui/Button/Button';

interface ThemeToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Unique id for the toggle button */
  id: string;
  /** Visual presentation */
  variant?: 'icon' | 'text';
  /** Optional accessible text override */
  label?: string;
  className?: string;
}

/**
 * ThemeToggle Component
 *
 * Purpose:
 * - Switches between light and dark themes via ThemeContext.
 *
 * Usage:
 * ```tsx
 * <ThemeToggle id="theme-toggle" />
 * <ThemeToggle id="theme-toggle-inline" variant="text" />
 * ```
 *
 * Accessibility:
 * - Uses an action-oriented label (`Switch to {nextTheme} mode`) for both icon and text variants
 * - Exposes `aria-pressed` to reflect current theme state
 */
const ThemeToggle = ({ id, variant = 'icon', label, className, onClick, ...props }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  const [hasInteracted, setHasInteracted] = useState(false);
  const isDarkTheme = theme === 'dark';

  const handleToggle = () => {
    if (!hasInteracted) setHasInteracted(true);
    toggleTheme();
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) return;
    handleToggle();
  };

  const animationClass = hasInteracted ? styles.themeToggleIconAnimate : '';
  const nextTheme = theme === 'light' ? 'dark' : 'light';
  const buttonLabel = label ?? `Switch to ${nextTheme} mode`;
  const iconClassNames = [
    styles.themeToggleButton,
    styles.themeToggleButtonIcon,
    className,
  ].filter(Boolean).join(' ');

  return (
    variant === 'text' ? (
      <Button
        id={id}
        variant="secondary"
        size="md"
        onClick={handleClick}
        aria-label={buttonLabel}
        aria-pressed={isDarkTheme}
        className={className}
        {...props}
      >
        {buttonLabel}
      </Button>
    ) : (
      <button
        className={iconClassNames}
        id={id}
        onClick={handleClick}
        aria-label={buttonLabel}
        aria-pressed={isDarkTheme}
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
