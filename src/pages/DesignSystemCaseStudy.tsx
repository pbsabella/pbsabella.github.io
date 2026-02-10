import { Link } from 'react-router-dom';
import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card/Card';
import Tag from '@/components/ui/Tag/Tag';
import TableOfContents from '@components/ui/TableOfContents/TableOfContents';
import { ROUTES } from '@constants/routes';
import styles from './DesignSystemCaseStudy.module.css';

const sections = [
  { id: 'problem', label: 'Problem' },
  { id: 'approach', label: 'Approach' },
  { id: 'wins', label: 'What Worked' },
  { id: 'challenges', label: 'What Was Hard' },
  { id: 'demo', label: 'Demo Snapshot' },
  { id: 'learnings', label: 'What I Learned' },
];

const DesignSystemCaseStudy = () => {
  return (
    <section>
      <Container className={styles.page}>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Labs • Case Study</p>
          <h1 className={styles.title}>Design System Case Study</h1>
          <p className={styles.subtitle}>
            Building a multi-tiered token architecture from scratch, then
            proving it in a real portfolio UI. My first React system, but not
            my first design system.
          </p>
          <div className={styles.meta}>
            <Tag size="sm" variant="info">React</Tag>
            <Tag size="sm" variant="success">Tokens</Tag>
            <Tag size="sm" variant="warning">Case Study</Tag>
          </div>
        </header>

        <div className={styles.layout}>
          <div className={styles.content}>
            <section id="problem" className={styles.section}>
              <h2>Problem</h2>
              <p>
                I needed a design system that could scale from a personal
                portfolio to a larger product without re-authoring styles. The
                challenge was creating a token architecture that separates raw
                values from meaning and meaning from components, while still
                being approachable for my first React build.
              </p>
            </section>

            <section id="approach" className={styles.section}>
              <h2>Approach</h2>
              <p>
                I structured the system into three layers:
                <strong> primitives</strong> (<code>--pr-*</code>) for raw values,
                <strong> semantic</strong> (<code>--sem-*</code>) for intent, and
                <strong> component</strong> (<code>--comp-*</code>) for usage.
                This keeps the UI stable even when themes, brands, or
                components evolve.
              </p>
              <div className={styles.tokenGrid}>
                <div className={styles.tokenCard}>
                  <h3>Primitive</h3>
                  <p>Base values: color, type, spacing, motion.</p>
                  <code>--pr-color-green-500</code>
                </div>
                <div className={styles.tokenCard}>
                  <h3>Semantic</h3>
                  <p>Intent-driven aliases for UI meaning.</p>
                  <code>--sem-color-text-primary</code>
                </div>
                <div className={styles.tokenCard}>
                  <h3>Component</h3>
                  <p>Productized tokens for UI parts.</p>
                  <code>--comp-card-bg</code>
                </div>
              </div>
            </section>

            <section id="wins" className={styles.section}>
              <h2>What Worked</h2>
              <ul className={styles.list}>
                <li>Dark mode became a token swap, not a component refactor.</li>
                <li>React components stayed thin and focused on structure.</li>
                <li>Typography and spacing stayed consistent across pages.</li>
              </ul>
            </section>

            <section id="challenges" className={styles.section}>
              <h2>What Was Hard</h2>
              <ul className={styles.list}>
                <li>Token naming required weeks of iteration to feel right.</li>
                <li>Balancing purity vs. shipping something usable.</li>
                <li>Learning React and system architecture simultaneously.</li>
              </ul>
            </section>

            <section id="demo" className={styles.section}>
              <h2>Demo Snapshot</h2>
              <Card>
                <p className={styles.demo}>
                  This portfolio is the demo. Every layout, component, and
                  interaction is wired to the token layers above. The live
                  documentation shows how the tokens cascade from primitives to
                  components in practice.
                </p>
              </Card>
            </section>

            <section id="learnings" className={styles.section}>
              <h2>What I Learned</h2>
              <p>
                Building a system in React reinforced how much clarity tokens
                provide to engineers. My background in systems gave me the
                vocabulary; React forced me to translate it into composable
                components and real constraints.
              </p>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <TableOfContents sections={sections} scrollBehavior="auto" />
            <Card>
              <h3 className={styles.sidebarTitle}>Next Step</h3>
              <p className={styles.sidebarCopy}>
                Explore the living System Core documentation to see every token,
                scale, and component hook that powers the case study.
              </p>
              <Link className="link" to={ROUTES.SYSTEM_CORE}>
                View System Core
              </Link>
            </Card>
          </aside>
        </div>
      </Container>
    </section>
  );
};

export default DesignSystemCaseStudy;
