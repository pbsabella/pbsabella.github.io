import { Link } from 'react-router-dom';
import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card/Card';
import { ROUTES } from '@constants/routes';
import styles from './Labs.module.css'

const Labs = () => {
  return (
    <section>
      <Container className={styles.labs}>
        <h1>Labs</h1>
        <p className={styles.labsDescription}>A curated archive of my professional projects and technical experiments.</p>
        <hr />

        <div className={styles.labsGrid}>
          <Link to={ROUTES.SYSTEM_CORE}>
            <Card isInteractive={true}>
              <h2 className="h4">Design System Case Study</h2>
              <p>
                <strong>Built with React</strong> to explore modern component architecture.
                This project implements an <strong>Atomic Design</strong> system with a
                tiered token structure, demonstrating how <strong>type-safe primitives</strong> scale
                from a documentation lab into a production interface.
              </p>
            </Card>
          </Link>

          <Card variant="ghost">
            <h2 className="h4">New Experiment</h2>
            <p>
              Currently drafting a new project entry. This slot will be updated
              with a fresh experiment once the documentation and code are
              ready for review.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  )
}

export default Labs;
