import { Link } from 'react-router-dom';
import styles from './DesignSystemBuildNotes.module.css';
import Alert from '@/components/ui/Alert/Alert';
import Badge from '@/components/ui/Badge/Badge';
import Button from '@/components/ui/Button/Button';
import Card from '@/components/ui/Card/Card';
import Tag from '@/components/ui/Tag/Tag';
import ThemeToggle from '@/components/ui/ThemeToggle/ThemeToggle';
import { ROUTES } from '@/constants/routes';
import { CheckCircle2, ArrowUpRight, ArrowRight, Layers, Type, Component, Shuffle, Code2, Moon, Timer, Ship, ShieldCheck, Contrast, Search } from 'lucide-react';
import {
  BUILD_NOTES_CHALLENGES,
  BUILD_NOTES_DECISIONS,
  BUILD_NOTES_NEXT_STEPS,
  BUILD_NOTES_PROBLEM_ITEMS,
  BUILD_NOTES_WINS,
} from '@/content/designSystemBuildNotes';

const PipelineConnector = () => (
  <span className={styles.demoPipelineConnector}>
    <ArrowRight size={12} aria-hidden="true" />
    <span>to</span>
  </span>
);

export const MotivationSection = () => (
  <section id="motivation" className={styles.section}>
    <p className={styles.sectionKicker}>01. Motivation</p>
    <h2 className={styles.sectionTitle}>Learning through systems</h2>
    <p>
      My portfolio has mirrored the evolution of frontend web development: starting with static HTML/CSS, moving through
      Sass and BEM, and finally landing on React with CSS Modules. However, each migration revealed a recurring friction
      point: without a documented source of truth, every redesign became an expensive, manual refactor.
    </p>
    <p>
      This rebuild bridged design systems strategy with day-to-day React execution and helped me level up implementation depth in parallel.
      The goal was to pressure-test the model in code, where token naming, component APIs, theming behavior, and accessibility either reinforce each other or break.
    </p>
    <p className={styles.noteText}>
      <strong>Constraints:</strong> Solo build, GitHub Pages deployment, no backend.
    </p>
  </section>
);

export const ProblemSection = () => (
  <section id="problem" className={styles.section}>
    <p className={styles.sectionKicker}>02. Problem</p>
    <h2 className={styles.sectionTitle}>The friction of manual UI</h2>
    <p>
      This portfolio is updated in bursts, not in a perfect daily flow.
      That cadence exposes weak architecture fast. If updates require tracing
      one-off values and styling side effects, momentum drops and quality starts to drift.
    </p>
    <p className={styles.noteText}>
      Dark mode was the first test case; brand theming is the ultimate stress test for the architecture.
    </p>
    <ul className={`${styles.listIcon} ${styles.problemList}`}>
      {BUILD_NOTES_PROBLEM_ITEMS.map((item, index) => {
        const icons = [
          <Shuffle key="ui-drift" size={20} className={styles.iconAccent} aria-hidden="true" />,
          <Code2 key="hardcoded" size={20} className={styles.iconAccent} aria-hidden="true" />,
          <Moon key="theming" size={20} className={styles.iconAccent} aria-hidden="true" />,
        ];

        return (
          <li key={item.title}>
            {icons[index]}
            <div>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  </section>
);

export const ApproachSection = () => (
  <section id="approach" className={styles.section}>
    <p className={styles.sectionKicker}>03. Approach</p>
    <h2 className={styles.sectionTitle}>Three layers, one source of truth</h2>
    <p>
      I structured the system into three layers:
      <strong> primitives</strong> (<code>--pr-*</code>) for raw values,
      <strong> semantic</strong> (<code>--sem-*</code>) for intent, and
      <strong> component</strong> (<code>--comp-*</code>) for usage.
      This keeps the UI stable even when themes, brands, or
      components evolve.
    </p>
    <Alert variant="info" title="Thinking process">
      <p>
        The naming is intentional: <strong>prefixes</strong> make a token&apos;s
        role obvious at a glance, while grouping by
        <strong> surface / text / border / state</strong> mirrors how teams
        reason about UI. The prefixes also make misuse easier to catch
        in reviews, since you can quickly see when a component is
        reaching past the semantic layer. If strict adherence is
        required, these prefixes are also easy to lint against.
      </p>
    </Alert>
    <div className={styles.layerGrid}>
      <Card variant="flat" className={styles.layerCard}>
        <div className={styles.layerHeader}>
          <span className={styles.layerIcon} aria-hidden="true">
            <Layers size={24} className={styles.iconAccent} />
          </span>
        </div>
        <h3 className={styles.layerTitle}>Primitive</h3>
        <p>Raw values that define the palette, scale, and motion.</p>
      </Card>
      <Card variant="flat" className={styles.layerCard}>
        <div className={styles.layerHeader}>
          <span className={styles.layerIcon} aria-hidden="true">
            <Type size={24} className={styles.iconAccent} />
          </span>
        </div>
        <h3 className={styles.layerTitle}>Semantic</h3>
        <p>Intent-based aliases that describe how UI should behave.</p>
      </Card>
      <Card variant="flat" className={styles.layerCard}>
        <div className={styles.layerHeader}>
          <span className={styles.layerIcon} aria-hidden="true">
            <Component size={24} className={styles.iconAccent} />
          </span>
        </div>
        <h3 className={styles.layerTitle}>Component</h3>
        <p>Component-level tokens that bind styles to real UI pieces.</p>
      </Card>
    </div>
  </section>
);

export const KeyDecisionsSection = () => (
  <section id="decisions" className={styles.section}>
    <p className={styles.sectionKicker}>04. Key Decisions</p>
    <h2 className={styles.sectionTitle}>What I locked in early</h2>
    <ul className={`${styles.listIcon} ${styles.decisionListIcon} ${styles.decisionListGrid}`}>
      {BUILD_NOTES_DECISIONS.map((item, index) => {
        const icons = [
          <Search key="search" size={24} className={`${styles.iconAccent} ${styles.problemIcon}`} aria-hidden="true" />,
          <Layers key="layers" size={24} className={`${styles.iconAccent} ${styles.problemIcon}`} aria-hidden="true" />,
          <CheckCircle2 key="check" size={24} className={`${styles.iconAccent} ${styles.problemIcon}`} aria-hidden="true" />,
          <ShieldCheck key="shield-check" size={24} className={`${styles.iconAccent} ${styles.problemIcon}`} aria-hidden="true" />,
          <Ship key="ship" size={24} className={`${styles.iconAccent} ${styles.problemIcon}`} aria-hidden="true" />,
        ];

        return (
        <li key={item.title}>
          {icons[index]}
          <div>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </div>
        </li>
      )})}
    </ul>
  </section>
);

export const WinsSection = () => (
  <section id="wins" className={`${styles.section} ${styles.sectionTwoCol}`}>
    <p className={styles.sectionKicker}>05. Outcomes</p>
    <h2 className={styles.sectionTitle}>What worked in practice</h2>
    <ul className={styles.listIcon}>
      {BUILD_NOTES_WINS.map((item) => (
        <li key={item}>
          <CheckCircle2 size={24} className={styles.iconSuccess} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  </section>
);

export const ChallengesSection = () => (
  <section id="challenges" className={styles.section}>
    <p className={styles.sectionKicker}>06. Friction</p>
    <h2 className={styles.sectionTitle}>What got messy</h2>
    <ul className={`${styles.listIcon} ${styles.challengeListSingle}`}>
      {BUILD_NOTES_CHALLENGES.map((item, index) => {
        const icons = [
          <Timer key="timer" size={24} className={`${styles.iconAccent} ${styles.problemIcon}`} aria-hidden="true" />,
          <Ship key="ship" size={24} className={`${styles.iconAccent} ${styles.problemIcon}`} aria-hidden="true" />,
          <Contrast key="contrast" size={24} className={`${styles.iconAccent} ${styles.problemIcon}`} aria-hidden="true" />,
        ];

        return (
          <li key={item}>
            {icons[index]}
            {item}
          </li>
        );
      })}
    </ul>
  </section>
);

export const DemoSection = () => (
  <section id="demo" className={styles.section}>
    <p className={styles.sectionKicker}>07. Demo</p>
    <h2 className={styles.sectionTitle}>The portfolio is the proof</h2>
    <Card variant="panel" className={styles.demoCard}>
      <div className={styles.demoHeader}>
        <div className={styles.demoDots}>
          <span className={`${styles.demoDot} ${styles.dotError}`} />
          <span className={`${styles.demoDot} ${styles.dotWarning}`} />
          <span className={`${styles.demoDot} ${styles.dotSuccess}`} />
        </div>
      </div>
      <div className={styles.demoBody}>
        <div className={styles.demoIntro}>
          <p className={styles.demo}>
            A tiny slice of the system in motion: primitive values
            flow into semantics, then into components that re-skin
            instantly across light and dark. Toggle the theme to see
            this demo adapt in real time.
          </p>
          <div className={styles.demoThemeRow}>
            <p className={styles.demoHierarchy}>PR → SEM → COMP</p>
            <ThemeToggle id="build-notes-theme-toggle" variant="text" />
          </div>
        </div>
        <div className={styles.demoShowcase}>
          <Card className={styles.demoMiniCard} isInteractive={true}>
            <div className={styles.demoMiniTitle}>Demo 1: Elevated Card</div>
            <p className={styles.demoMiniCopy}>
              Interactive elevated card using component tokens, fed by semantic intent.
            </p>
            <div className={styles.demoPipelines}>
              <div className={styles.demoPipelineRow}>
                <code>--pr-color-neutral-800</code>
                <PipelineConnector />
                <code>--sem-color-text-primary</code>
                <PipelineConnector />
                <code>--comp-card-text</code>
                <PipelineConnector />
                <code>.card</code>
              </div>
              <div className={styles.demoPipelineRow}>
                <code>--pr-shadow-100</code>
                <PipelineConnector />
                <code>--sem-elevation-low</code>
                <PipelineConnector />
                <code>--comp-card-shadow</code>
                <PipelineConnector />
                <code>.cardElevated</code>
              </div>
            </div>
          </Card>
          <Card variant="flat" className={styles.demoMiniCard}>
            <div className={styles.demoMiniTitle}>Demo 2: Status Chips</div>
            <p className={styles.demoMiniCopy}>
              Tags and badges consume status semantics while preserving consistent contrast across themes.
            </p>
            <div className={styles.demoPipelines}>
              <div className={styles.demoMiniMeta}>
                <div>
                  <Badge variant="success" size="md">12</Badge>
                </div>
                <div className={styles.demoPipelineRow}>
                  <code>--pr-color-success-600</code>
                  <PipelineConnector />
                  <code>--sem-color-bg-success</code>
                  <PipelineConnector />
                  <code>.badgeSuccess</code>
                </div>
              </div>

              <div className={styles.demoMiniMeta}>
                <div>
                  <Tag size="sm" variant="info">Info</Tag>
                </div>
                <div className={styles.demoPipelineRow}>
                  <code>--pr-color-info-600</code>
                  <PipelineConnector />
                  <code>--sem-color-border-info</code>
                  <PipelineConnector />
                  <code>.tagInfo</code>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Card>
    <p className={styles.demoCaption}>
      Two compact examples showing how token intent stays consistent while visuals adapt by theme.
    </p>
  </section>
);

export const LearningsSection = () => (
  <section id="learnings" className={styles.section}>
    <p className={styles.sectionKicker}>08. Learnings</p>
    <h2 className={styles.sectionTitle}>What this exposed</h2>
    <p>
      This was my first end-to-end React build, and I paired it with a from-scratch system setup at the same time.
      Instead of only consuming handed-off tokens and design decisions, I had to define structure, naming, and ownership in code, then validate what actually looked right on real UI elements.
      It took multiple refactors, but the result is a clearer system that is easier to evolve without losing quality.
    </p>
  </section>
);

export const NextStepsSection = () => (
  <section id="next-steps" className={styles.section}>
    <p className={styles.sectionKicker}>09. Next Step</p>
    <h2 className={styles.sectionTitle}>The journey continues</h2>
    <p>
      The system is stable enough to scale, but the next milestone is resilience:
      validating that new variants, page types, and brand constraints can be
      added without eroding the semantic contract.
    </p>
    <ul className={styles.listIcon}>
      {BUILD_NOTES_NEXT_STEPS.map((item) => (
        <li key={item}>
          <ArrowUpRight size={24} className={styles.iconAccent} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  </section>
);

export const SystemCoreSection = () => (
  <section id="system-core" className={styles.section}>
    <p className={styles.sectionKicker}>10. System Core</p>
    <h2 className={styles.sectionTitle}>Deep dive into System Core</h2>
    <p>
      Explore the live token tables, primitives, and component
      foundations that back these build notes.
    </p>
    <Link to={ROUTES.SYSTEM_CORE}>
      <Button variant="secondary" size="md">View System Core</Button>
    </Link>
  </section>
);
