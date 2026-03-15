import { ReactNode } from 'react';
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';
import Tag from '@/components/ui/Tag/Tag';
import styles from './ArticleHero.module.css';

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface StatItem {
  label: string;
  value: string;
}

interface ArticleHeroProps {
  title: ReactNode;
  titleAccent?: ReactNode;
  subtitle?: string;
  kicker?: string;
  badge?: string;
  breadcrumbs?: BreadcrumbItem[];
  stats?: StatItem[];
}

const ArticleHero = ({
  title,
  titleAccent,
  subtitle,
  kicker,
  badge,
  breadcrumbs,
  stats,
}: ArticleHeroProps) => {
  return (
    <header className={styles.hero}>
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}

      {(badge || kicker) && (
        <div className={styles.heroBadgeRow}>
          {badge && (
            <Tag size="lg" variant="primary">
              {badge}
            </Tag>
          )}
          {kicker && (
            <>
              <span className={styles.heroRule} />
              <span className={styles.heroMeta}>{kicker}</span>
            </>
          )}
        </div>
      )}

      <h1 className={styles.title}>
        {title}
        {titleAccent && (
          <>
            {' '}
            <br />
            <span className={styles.titleAccent}>{titleAccent}</span>
          </>
        )}
      </h1>

      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

      {stats && stats.length > 0 && (
        <div className={styles.heroStats}>
          {stats.map((item) => (
            <div key={item.label} className={styles.heroStatItem}>
              <p className={styles.heroStatLabel}>{item.label}</p>
              <p className={styles.heroStatValue}>{item.value}</p>
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default ArticleHero;
