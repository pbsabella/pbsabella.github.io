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
  return (
    <ul className={`${styles.socials} ${className ?? ''}`} {...props}>
      <li className={styles.socialsItem}>
        <a
          className={`${styles.socialsLink} link`}
          href="https://www.linkedin.com/in/pbsabella/"
          rel="noopener noreferrer"
          target="_blank"
          title="LinkedIn profile"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  );
};

export default Socials;
