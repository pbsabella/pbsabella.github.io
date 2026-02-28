import styles from './Figure.module.css';

interface FigureProps {
  label: string;
  desc: string;
  caption?: string;
  isWhite?: boolean;
  aspectRatio?: string;
}

const Figure = ({
  label,
  desc,
  caption,
  isWhite,
  aspectRatio = '16/9',
}: FigureProps) => {
  const placeholderClass = [
    styles.figurePlaceholder,
    isWhite ? styles.figurePlaceholderWhite : styles.figurePlaceholderMuted,
  ].join(' ');

  return (
    <figure className={styles.figure}>
      <div
        className={placeholderClass}
        style={{ '--aspect-ratio': aspectRatio } as React.CSSProperties}
      >
        <span className={styles.figureLabel}>{label}</span>
        <p className={styles.figureDesc}>{desc}</p>
      </div>
      {caption && (
        <figcaption className={styles.figureCaption}>{caption}</figcaption>
      )}
    </figure>
  );
};

export default Figure;
