import { HTMLAttributes } from 'react';
import styles from './Socials.module.css';

/**
 * Socials Component
 *
 * Purpose:
 * - Renders external profile links for contact/discovery.
 *
 * Usage:
 * ```tsx
 * <Socials />
 * ```
 *
 * Accessibility:
 * - External links include descriptive `title`.
 * - Links open in a new tab with `rel="noopener noreferrer"`.
 */

const Socials = ({ className, ...props }: HTMLAttributes<HTMLUListElement>) => {
  const { 'aria-label': ariaLabel = 'Social links', ...restProps } = props;
  const classNames = [styles.socials, className].filter(Boolean).join(' ');

  return (
    <ul className={classNames} aria-label={ariaLabel} {...restProps}>
      <li className={styles.socialsItem}>
        <a
          className={`${styles.socialsLink} link`}
          href="https://www.linkedin.com/in/pbsabella/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="LinkedIn (opens in a new tab)"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  );
};

export default Socials;
