import Tag from '@components/ui/Tag/Tag';
import type { TagVariant, TagSize } from '@components/ui/Tag/Tag';
import styles from './TagList.module.css';

interface TagListProps {
  tags: string[];
  /** aria-label for the list element */
  label?: string;
  variant?: TagVariant;
  size?: TagSize;
  className?: string;
}

/**
 * TagList Component
 *
 * Purpose:
 * - Renders a horizontal, wrapping list of Tag chips from a string array.
 * - Consolidates the ul > li > Tag pattern used across WorkItem, case studies, etc.
 *
 * Usage:
 * ```tsx
 * <TagList tags={['React', 'TypeScript', 'Vite']} />
 * <TagList tags={project.tags} label="Project technologies" size="sm" />
 * ```
 */
const TagList = ({ tags, label = 'Tags', variant = 'default', size = 'md', className }: TagListProps) => {
  const classNames = [styles.tagList, className].filter(Boolean).join(' ');

  return (
    <ul className={classNames} aria-label={label}>
      {tags.map((tag) => (
        <li key={tag} className={styles.tagListItem}>
          <Tag variant={variant} size={size}>{tag}</Tag>
        </li>
      ))}
    </ul>
  );
};

export default TagList;
