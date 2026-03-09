import { ReactNode, CSSProperties } from 'react';
import styles from './FigureBlock.module.css';

interface FigureBlockProps {
  caption: ReactNode;
  label?: string;
  variant?: 'default' | 'placeholder-white' | 'placeholder-muted';
  aspectRatio?: string;
  className?: string;
  children?: ReactNode;
}

const FigureBlock = ({
  caption,
  label,
  variant = 'default',
  aspectRatio,
  className,
  children,
}: FigureBlockProps) => {
  const isPlaceholder = variant !== 'default' && !children;
  const placeholderStyle = aspectRatio
    ? ({ '--aspect-ratio': aspectRatio } as CSSProperties)
    : undefined;

  return (
    <figure className={[styles.figure, className].filter(Boolean).join(' ')}>
      {children ?? (isPlaceholder && (
        <div
          className={[
            styles.placeholder,
            variant === 'placeholder-white' && styles.placeholderWhite,
            variant === 'placeholder-muted' && styles.placeholderMuted,
          ].filter(Boolean).join(' ')}
          style={placeholderStyle}
        />
      ))}
      {label && <span className={styles.label}>{label}</span>}
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
};

export default FigureBlock;
