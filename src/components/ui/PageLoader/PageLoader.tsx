import Container from '@/components/layout/Container';
import Skeleton from '@/components/ui/Skeleton/Skeleton';
import styles from './PageLoader.module.css';

const PageLoader = () => (
  <div className={styles.pageLoader} role="status" aria-label="Loading page">
    <Container className={styles.pageLoaderContent} variant="wide">
      <Skeleton width={160} height={18} />
      <Skeleton width={360} height={64} />
      <Skeleton width={720} height={148} />
      <span className="srOnly">Loading…</span>
    </Container>
  </div>
);

export default PageLoader;
