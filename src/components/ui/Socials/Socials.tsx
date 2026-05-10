import { HTMLAttributes } from 'react';
import styles from './Socials.module.css';
import { FileUser, Mail } from 'lucide-react';

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
const Socials = ({ ...props }: Omit<HTMLAttributes<HTMLUListElement>, 'className'>) => {
  const { 'aria-label': ariaLabel = 'Social links', ...restProps } = props;

  return (
    <ul className={styles.socials} aria-label={ariaLabel} {...restProps}>
      <li className={styles.socialsItem}>
        <a
          className={`${styles.socialsLink} link`}
          href="mailto:pau.abella@gmail.com"
          aria-label="Email (opens in default email client)"
        >
          <Mail className={styles.socialsIcon} size={16} aria-hidden="true" /> Email
        </a>
      </li>

      <li className={styles.socialsItem}>
        <a
          className={`${styles.socialsLink} link`}
          href="https://www.linkedin.com/in/pbsabella/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="LinkedIn (opens in a new tab)"
        >
          <FileUser className={styles.socialsIcon} size={16} aria-hidden="true" /> LinkedIn
        </a>
      </li>
    </ul>
  );
};

export default Socials;
