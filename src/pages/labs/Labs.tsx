import { Link } from 'react-router-dom';
import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card/Card';
import Tag from '@/components/ui/Tag/Tag';
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';
import { LABS_META } from '@/content/pageMeta';
import { LABS_PROJECTS } from '@/content/labs';
import styles from './Labs.module.css';

const Labs = () => {
  return (
    <section className={styles.pageWrap}>
      <Container className={styles.labs} variant="wide">
        <Breadcrumbs items={LABS_META.breadcrumbs} />
        <h1 className={styles.labsTitle}>{LABS_META.title}</h1>
        <p className={styles.labsDescription}>{LABS_META.description}</p>
        <hr />

        <ul className={styles.labsGrid} aria-label="Labs projects">
          {LABS_PROJECTS.map((project) => {
            const card = (
              <Card
                variant={project.variant ?? 'elevated'}
                tone={project.tone ?? 'default'}
                isInteractive={project.interactive}
              >
                <h2 className="h4">{project.title}</h2>
                <p>{project.description}</p>
                {project.tags.length > 0 && (
                  <div className={styles.cardTags}>
                    {project.tags.map((tag) => (
                      <Tag key={tag} size="sm">{tag}</Tag>
                    ))}
                  </div>
                )}
              </Card>
            );

            return project.href ? (
              <li key={project.title} className={styles.cardItem}>
                <Link className={styles.cardLink} to={project.href}>
                  {card}
                </Link>
              </li>
            ) : (
              <li key={project.title} className={styles.cardItem}>
                {card}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Labs;
