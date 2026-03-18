import styles from './PageLoader.module.css';

const PageLoader = () => (
  <div className={styles.pageLoader} role="status" aria-label="Loading page">
    <span className={styles.pageLoaderSpinner} aria-hidden="true" />
    <span className="srOnly">Loading…</span>
  </div>
);

export default PageLoader;
