import { HTMLAttributes } from 'react';
import styles from './Socials.module.css';

/**
 * Socials Component
 *
 * Displays a list of social media links. Links open in new tabs and include
 * proper accessibility labels. Styles adapt to theme.
 *
 * @component
 * @example
 * ```tsx
 * <Socials />
 * ```
 *
 * @returns {React.ReactElement} The rendered social links list
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
