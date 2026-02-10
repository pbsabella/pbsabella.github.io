import { Link } from 'react-router-dom';
import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card/Card';
import Tag from '@/components/ui/Tag/Tag';
import { ROUTES } from '@constants/routes';
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';
import styles from './Labs.module.css'

const Labs = () => {
  return (
    <section className={styles.pageWrap}>
      <Container className={styles.labs} variant="wide">
        <Breadcrumbs
          items={[
            { label: 'Home', to: ROUTES.HOME },
            { label: 'Labs' },
          ]}
        />
        <h1 className={styles.labsTitle}>Works & Research</h1>
        <p className={styles.labsDescription}>
          A curated archive of my journey through design and engineering. This space houses self-directed case studies, UX research projects, and technical experiments, focusing on the intersection of user experience and scalable architecture.
        </p>
        <hr />

        <div className={styles.labsGrid}>
          <Link className={styles.cardLink} to={ROUTES.DESIGN_SYSTEM_CASE_STUDY}>
            <Card isInteractive={true}>
              <h2 className="h4">Design System Case Study</h2>
              <p>
                <strong>Built with React</strong> to explore modern component architecture.
                This project implements an <strong>Atomic Design</strong> system with a
                tiered token structure, demonstrating how <strong>type-safe primitives</strong> scale
                from a documentation lab into a production interface.
              </p>
              <div className={styles.cardTags}>
                <Tag size="sm">Case Study</Tag>
                <Tag size="sm">Design System</Tag>
                <Tag size="sm">React</Tag>
              </div>
            </Card>
          </Link>

          <Link className={styles.cardLink} to={ROUTES.SYSTEM_CORE}>
            <Card isInteractive={true} className={styles.systemCoreCard}>
              <h2 className="h4">System Core Documentation</h2>
              <p>
                Token reference, primitives, and component foundations. Browse the
                living docs that power the case study and the rest of the portfolio.
              </p>
              <div className={styles.cardTags}>
                <Tag size="sm">Documentation</Tag>
                <Tag size="sm">Tokens</Tag>
                <Tag size="sm">Foundations</Tag>
              </div>
            </Card>
          </Link>

          <Card variant="ghost">
            <h2 className="h4">Theming Architectures</h2>
            <p>
              Currently exploring a scalable approach to multi-layered theming. This experiment explores the relationship between global primitives, semantic aliases, and component-level overrides to support high-contrast modes and multi-brand identities without code duplication.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export default Labs;
