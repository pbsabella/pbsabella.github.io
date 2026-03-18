import styles from './Skeleton.module.css';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}

const Skeleton = ({
  width = '100%',
  height = '1rem',
}: SkeletonProps) => {
  const style: React.CSSProperties = {
    maxWidth: width,
    height,
  };

  return (
    <div
      className={styles.skeleton}
      style={style}
      aria-hidden="true"
    />
  );
};

export default Skeleton;
