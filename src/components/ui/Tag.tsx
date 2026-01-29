import { ReactNode } from 'react';
import styles from './Tag.module.css';

/**
 * Tag Component
 *
 * A semantic badge component for displaying labels, skills, or categories.
 * Uses token-driven styling for semantic colors and borders that adapt
 * to the active theme.
 *
 * @component
 * @example
 * ```tsx
 * <Tag>React</Tag>
 * <Tag>TypeScript</Tag>
 * <Tag>CSS Modules</Tag>
 * ```
 *
 * @param {TagProps} props - Component props
 * @returns {React.ReactElement} The rendered tag element
 */

interface TagProps {
  /** Tag label text or content */
  children: ReactNode;
}

const Tag = ({ children }: TagProps) => {
  return <span className={styles.tag}>{children}</span>;
};

export default Tag;
