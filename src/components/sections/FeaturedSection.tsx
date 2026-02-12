import { ReactNode } from 'react';
import Container from '@components/layout/Container';
import styles from './FeaturedSection.module.css';

interface FeaturedSectionProps {
  id?: string;
  title?: ReactNode;
  introText?: string;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  noContainer?: boolean;
  containerVariant?: 'default' | 'wide';
}

const FeaturedSection = ({
  id,
  title,
  introText,
  description,
  children,
  className = '',
  noContainer = false,
  containerVariant = 'wide',
}: FeaturedSectionProps) => {
  const hasHeader = Boolean(introText || title || description);

  return (
    <section id={id} className={`${styles.featuredSection} ${className}`}>
      {noContainer ? (
        <>
          <Container variant={containerVariant}>
            {hasHeader && (
              <div className={styles.featuredSectionInner}>
                {introText && (
                  <div className={styles.featuredSectionIntro}>
                    <span className={styles.featuredSectionIntroDivider} aria-hidden="true"></span>
                    <h2 className={styles.featuredSectionIntroText}>{introText}</h2>
                  </div>
                )}
                {title && <h3 className={styles.featuredSectionTitle}>{title}</h3>}
                {description && <p className={styles.featuredSectionDesc}>{description}</p>}
              </div>
            )}
          </Container>
          <div>{children}</div>
        </>
      ) : (
        <Container variant={containerVariant}>
          {hasHeader && (
            <div className={styles.featuredSectionInner}>
              {introText && (
                <div className={styles.featuredSectionIntro}>
                  <span className={styles.featuredSectionIntroDivider} aria-hidden="true"></span>
                  <h2 className={styles.featuredSectionIntroText}>{introText}</h2>
                </div>
              )}
              {title && <h3 className={styles.featuredSectionTitle}>{title}</h3>}
              {description && <p className={styles.featuredSectionDesc}>{description}</p>}
            </div>
          )}
          <div>{children}</div>
        </Container>
      )}
    </section>
  );
};

export default FeaturedSection;
