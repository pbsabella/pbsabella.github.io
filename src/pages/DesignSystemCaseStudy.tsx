import { Link } from 'react-router-dom';
import Container from '@/components/layout/Container';
import Tag from '@/components/ui/Tag/Tag';
import Badge from '@/components/ui/Badge/Badge';
import Card from '@/components/ui/Card/Card';
import ThemeToggle from '@/components/ui/ThemeToggle/ThemeToggle';
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
  { id: 'next-steps', label: 'Next Step' },
];

const metaStats = [
  { label: 'Role', value: 'Design System Lead' },
  { label: 'Stack', value: 'React + TypeScript' },
  { label: 'Timeline', value: '3-week sprint' },
  { label: 'Focus', value: 'Token architecture' },
];

const DesignSystemCaseStudy = () => {
  return (
    <section className={styles.pageWrap}>
      <Container className={styles.page}>
        <header className={styles.hero}>
          <div className={styles.heroBadgeRow}>
            <Tag size="sm" variant="outline" className={styles.heroBadge}>
              First React Project
            </Tag>
            <span className={styles.heroRule} />
            <span className={styles.heroMeta}>Case Study 01</span>
          </div>
          <h1 className={styles.title}>
            The Architecture <br />
            <span className={styles.titleAccent}>of Consistency</span>
          </h1>
          <p className={styles.subtitle}>
            Building a multi-tiered token architecture from scratch, then
            proving it in a real portfolio UI. My first React system, but not
            my first design system.
          </p>
          <div className={styles.heroStats}>
            {metaStats.map((item) => (
              <div key={item.label}>
                <p className={styles.heroStatLabel}>{item.label}</p>
                <p className={styles.heroStatValue}>{item.value}</p>
              </div>
            ))}
          </div>
          <div className={styles.meta}>
            <Tag size="sm" variant="info">React</Tag>
            <Tag size="sm" variant="success">Tokens</Tag>
            <Tag size="sm" variant="warning">Case Study</Tag>
          </div>
        </header>

        <div className={styles.layout}>
          <div className={styles.content}>
            <section id="problem" className={styles.section}>
              <p className={styles.sectionKicker}>01. Problem</p>
              <h2 className={styles.sectionTitle}>The friction of manual UI</h2>
              <p>
                I needed a design system that could scale from a personal
                portfolio to a larger product without re-authoring styles. The
                challenge was creating a token architecture that separates raw
                values from meaning and meaning from components, while still
                being approachable for my first React build.
              </p>
            </section>

            <section id="approach" className={styles.section}>
              <p className={`${styles.sectionKicker} ${styles.sectionKickerAccent}`}>02. Strategy</p>
              <h2 className={styles.sectionTitle}>Three layers, one source of truth</h2>
              <p>
                I structured the system into three layers:
                <strong> primitives</strong> (<code>--pr-*</code>) for raw values,
                <strong> semantic</strong> (<code>--sem-*</code>) for intent, and
                <strong> component</strong> (<code>--comp-*</code>) for usage.
                This keeps the UI stable even when themes, brands, or
                components evolve.
              </p>
              <div className={styles.tokenGrid}>
                <div className={`${styles.tokenCard} ${styles.tokenCardPr}`}>
                  <span className={styles.tokenBadge}>PR</span>
                  <h3>Primitive</h3>
                  <p>Base values: color, type, spacing, motion.</p>
                  <code>--pr-color-green-500</code>
                </div>
                <div className={`${styles.tokenCard} ${styles.tokenCardSem}`}>
                  <span className={styles.tokenBadge}>SEM</span>
                  <h3>Semantic</h3>
                  <p>Intent-driven aliases for UI meaning.</p>
                  <code>--sem-color-text-primary</code>
                </div>
                <div className={`${styles.tokenCard} ${styles.tokenCardComp}`}>
                  <span className={styles.tokenBadge}>COMP</span>
                  <h3>Component</h3>
                  <p>Productized tokens for UI parts.</p>
                  <code>--comp-card-bg</code>
                </div>
              </div>
            </section>

            <section id="wins" className={styles.section}>
              <p className={styles.sectionKicker}>03. Outcomes</p>
              <h2 className={styles.sectionTitle}>What worked in practice</h2>
              <ul className={styles.list}>
                <li>Dark mode became a token swap, not a component refactor.</li>
                <li>React components stayed thin and focused on structure.</li>
                <li>Typography and spacing stayed consistent across pages.</li>
              </ul>
            </section>

            <section id="challenges" className={styles.section}>
              <p className={styles.sectionKicker}>04. Friction</p>
              <h2 className={styles.sectionTitle}>Where it got hard</h2>
              <ul className={styles.list}>
                <li>Token naming required weeks of iteration to feel right.</li>
                <li>Balancing purity vs. shipping something usable.</li>
                <li>Learning React and system architecture simultaneously.</li>
              </ul>
            </section>

            <section id="demo" className={styles.section}>
              <p className={`${styles.sectionKicker} ${styles.sectionKickerAccent}`}>05. Demo</p>
              <h2 className={styles.sectionTitle}>The portfolio is the proof</h2>
              <div className={styles.demoCard}>
                <div className={styles.demoHeader}>
                  <div className={styles.demoDots}>
                    <span className={`${styles.demoDot} ${styles.dotError}`} />
                    <span className={`${styles.demoDot} ${styles.dotWarning}`} />
                    <span className={`${styles.demoDot} ${styles.dotSuccess}`} />
                  </div>
                  <span className={styles.demoLabel}>Token Pipeline</span>
                </div>
                <div className={styles.demoBody}>
                  <div className={styles.demoIntro}>
                    <p className={styles.demo}>
                      A tiny slice of the system in motion: primitive values
                      flow into semantics, then into components that re-skin
                      instantly across light and dark.
                    </p>
                    <div className={styles.demoCode}>
                      <code>--pr-color-green-500</code>
                      <span>→</span>
                      <code>--sem-color-border-brand</code>
                      <span>→</span>
                      <code>--comp-card-border</code>
                    </div>
                  </div>
                  <div className={styles.demoShowcase}>
                    <Card className={styles.demoMiniCard} isInteractive={true}>
                      <div className={styles.demoMiniTitle}>Primary Card</div>
                      <p className={styles.demoMiniCopy}>
                        Surface, text, and border all come from semantic tokens.
                      </p>
                      <div className={styles.demoMiniMeta}>
                        <Tag size="sm" variant="success">Live</Tag>
                        <Badge variant="info" size="md">3</Badge>
                      </div>
                    </Card>
                    <div className={styles.demoTokens}>
                      <div className={styles.demoControls}>
                        <span>Theme</span>
                        <ThemeToggle id="case-study-theme-toggle" variant="text" />
                      </div>
                      <div className={styles.demoTokenRow}>
                        <span className={styles.demoTokenLabel}>Surface</span>
                        <span className={styles.demoTokenSwatch} />
                        <code>--sem-color-bg-elevated</code>
                      </div>
                      <div className={styles.demoTokenRow}>
                        <span className={styles.demoTokenLabel}>Accent</span>
                        <span className={`${styles.demoTokenSwatch} ${styles.demoTokenSwatchAccent}`} />
                        <code>--sem-color-border-brand</code>
                      </div>
                      <div className={styles.demoTokenRow}>
                        <span className={styles.demoTokenLabel}>Radius</span>
                        <span className={styles.demoTokenValue}>var(--pr-radius-lg)</span>
                        <code>--comp-card-radius</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="learnings" className={styles.section}>
              <p className={styles.sectionKicker}>06. Learnings</p>
              <h2 className={styles.sectionTitle}>System thinking in React</h2>
              <p>
                Building a system in React reinforced how much clarity tokens
                provide to engineers. My background in systems gave me the
                vocabulary; React forced me to translate it into composable
                components and real constraints.
              </p>
            </section>

            <section id="next-steps" className={styles.section}>
              <p className={`${styles.sectionKicker} ${styles.sectionKickerAccent}`}>07. Next Step</p>
              <h2 className={styles.sectionTitle}>Deep dive into System Core</h2>
              <p>
                Explore the living System Core documentation to see every token,
                scale, and component hook that powers the case study.
              </p>
              <Link className="link" to={ROUTES.SYSTEM_CORE}>
                View System Core
              </Link>
            </section>
          </div>

          <aside className={styles.sidebar} aria-label="Case study sidebar">
            <div className={styles.sidebarGroup}>
              <TableOfContents sections={sections} scrollBehavior="auto" />
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
};

export default DesignSystemCaseStudy;
