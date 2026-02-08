import { ReactNode } from 'react';
import Container from '@components/layout/Container';
import styles from './FeaturedSection.module.css';

interface FeaturedSectionProps {
  id?: string;
  title?: ReactNode;
  introText?: string;
  children: ReactNode;
  className?: string;
  bgClass?: string;
  noContainer?: boolean;
}

const FeaturedSection = ({
  id,
  title,
  introText,
  children,
  className = '',
  bgClass = '',
  noContainer = false,
}: FeaturedSectionProps) => {
  // Common header logic
  const renderHeader = () =>
    (introText || title) && (
      <div className={styles.featuredSectionInner}>
        {introText && (
          <div className={styles.featuredSectionIntro}>
            <span className={styles.featuredSectionIntroDivider}></span>
            <h2 className={styles.featuredSectionIntroText}>{introText}</h2>
          </div>
        )}
        {title && <h3 className={styles.featuredSectionTitle}>{title}</h3>}
      </div>
    );

  return (
    <section id={id} className={`${styles.featuredSection} ${bgClass} ${className}`}>
      {noContainer ? (
        <>
          <Container>{renderHeader()}</Container>
          <div>{children}</div>
        </>
      ) : (
        <Container>
          {renderHeader()}
          <div>{children}</div>
        </Container>
      )}
    </section>
  );
};

export default FeaturedSection;
