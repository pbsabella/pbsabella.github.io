import { ReactNode } from 'react';
import Container from '@/components/layout/Container';
import TableOfContents from '@components/ui/TableOfContents/TableOfContents';
import styles from './ArticleLayout.module.css';

interface TocSection {
  id: string;
  label: string;
}

interface ArticleLayoutProps {
  children: ReactNode;
  hero?: ReactNode;
  tocSections: TocSection[];
  tocScrollBehavior?: 'auto' | 'instant' | 'smooth';
  tocLabel?: string;
  className?: string;
}

const ArticleLayout = ({
  children,
  hero,
  tocSections,
  tocScrollBehavior = 'auto',
  tocLabel = 'Article sidebar',
  className,
}: ArticleLayoutProps) => {
  return (
    <div className={[styles.pageWrap, className].filter(Boolean).join(' ')}>
      <Container className={styles.page}>
        {hero}
        <div className={styles.layout}>
          <div className={styles.content}>
            {children}
          </div>

          <aside className={styles.sidebar} aria-label={tocLabel}>
            <div className={styles.sidebarGroup}>
              <TableOfContents
                sections={tocSections}
                scrollBehavior={tocScrollBehavior}
              />
            </div>
          </aside>
        </div>
      </Container>
    </div>
  );
};

export default ArticleLayout;
