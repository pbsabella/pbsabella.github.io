import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './DesignSystemBuildNotes.module.css';
import Alert from '@/components/ui/Alert/Alert';
import Badge from '@/components/ui/Badge/Badge';
import Button from '@/components/ui/Button/Button';
import Card from '@/components/ui/Card/Card';
import Tag from '@/components/ui/Tag/Tag';
import ThemeToggle from '@/components/ui/ThemeToggle/ThemeToggle';
import { ROUTES } from '@/constants/routes';
import { CheckCircle2, ArrowUpRight, ArrowRight, Layers, Type, Component, Shuffle, Code2, Moon, Timer, Ship, ShieldCheck, Contrast, Search, Lightbulb } from 'lucide-react';
import {
  BUILD_NOTES_CHALLENGES,
  BUILD_NOTES_DECISIONS,
  BUILD_NOTES_NEXT_STEPS,
  BUILD_NOTES_PROBLEM_ITEMS,
  BUILD_NOTES_WINS,
} from '@/content/designSystemBuildNotes';

const PipelineConnector = () => (
  <span className={styles.demoPipelineConnector}>
    <ArrowRight size={12} role="img" aria-label="to" />
  </span>
);

type BuildNotesBlockProps = {
  id: string;
  kicker: string;
  title: string;
  className?: string;
  children: ReactNode;
};

const BuildNotesBlock = ({ id, kicker, title, className, children }: BuildNotesBlockProps) => (
  <section id={id} className={[styles.section, className].filter(Boolean).join(' ')}>
    <p className={styles.sectionKicker}>{kicker}</p>
    <h2 className={styles.sectionTitle}>{title}</h2>
    {children}
  </section>
);

export const MotivationSection = () => (
  <BuildNotesBlock id="motivation" kicker="01. Motivation" title="Learning through systems">
    <p>
      My portfolio has gone through multiple rewrites, each reflecting a different stage of my frontend journey. Every
      version exposed the same friction point: without a documented source of truth, redesigns became expensive manual
      refactors.
    </p>
    <p>
      This rebuild brings design-systems strategy into production React, where decisions have to hold up in real UI, not
      just in theory. I used it to validate token naming, component APIs, theming behavior, and accessibility as one
      connected system.
    </p>
    <p className={styles.noteText}>
      <strong>Constraints:</strong> Solo build, GitHub Pages deployment, no backend.
    </p>
  </BuildNotesBlock>
);

export const ProblemSection = () => (
  <BuildNotesBlock id="problem" kicker="02. Problem" title="The friction of manual UI">
    <p>
      This portfolio is updated in bursts. When I come back after a gap, I
      don&apos;t want to play detective with my own CSS. Without a system, I kept
      re-making the same spacing and color decisions, and that cognitive load
      killed momentum.
    </p>
    <p className={styles.noteText}>
      Dark mode was the immediate trigger, but the real goal was removing UI
      guesswork and making the system easier to re-enter and scale.
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
  </BuildNotesBlock>
);

export const ApproachSection = () => (
  <BuildNotesBlock id="approach" kicker="03. Approach" title="Three layers, one source of truth">
    <p>
      I use a strict three-layer stack: <strong>primitives</strong> for raw
      options, <strong>semantics</strong> for intent, and
      <strong> component tokens</strong> for UI consumption. It adds upfront
      structure, but creates a buffer between raw values and product UI so
      components stay stable as themes and brands evolve.
    </p>
    <div className={styles.layerGrid}>
      <Card variant="flat" className={styles.layerCard}>
        <div className={styles.layerHeader}>
          <span className={styles.layerIcon} aria-hidden="true">
            <Layers size={24} className={styles.iconAccent} />
          </span>
        </div>
        <h3 className={styles.layerTitle}>Primitive</h3>
        <p>Raw values that define the palette, scale, and motion.</p>
        <p className={styles.layerToken}>
          <code>--pr-[category]-[scale]</code>
          <span className={styles.layerTokenExample}>
            <span>e.g.</span>
            <code>--pr-color-neutral-800</code>
          </span>
        </p>
      </Card>
      <Card variant="flat" className={styles.layerCard}>
        <div className={styles.layerHeader}>
          <span className={styles.layerIcon} aria-hidden="true">
            <Type size={24} className={styles.iconAccent} />
          </span>
        </div>
        <h3 className={styles.layerTitle}>Semantic</h3>
        <p>Intent-based aliases that describe how UI should behave.</p>
        <p className={styles.layerToken}>
          <code>--sem-[domain]-[property]-[role]</code>
          <span className={styles.layerTokenExample}>
            <span>e.g.</span>
            <code>--sem-color-text-primary</code>
          </span>
        </p>
      </Card>
      <Card variant="flat" className={styles.layerCard}>
        <div className={styles.layerHeader}>
          <span className={styles.layerIcon} aria-hidden="true">
            <Component size={24} className={styles.iconAccent} />
          </span>
        </div>
        <h3 className={styles.layerTitle}>Component</h3>
        <p>Component-level tokens that bind styles to real UI pieces.</p>
        <p className={styles.layerToken}>
          <code>--comp-[component]-[property]</code>
          <span className={styles.layerTokenExample}>
            <span>e.g.</span>
            <code>--comp-card-border</code>
          </span>
        </p>
      </Card>
    </div>
    <Alert
      variant="info"
      className={styles.rationaleAlert}
      role="note"
      aria-live="off"
      title={(
        <span className={styles.alertRationaleTitle}>
          <Lightbulb size={20} aria-hidden="true" />
          <span>Design Rationale</span>
        </span>
      )}
    >
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
  </BuildNotesBlock>
);

export const KeyDecisionsSection = () => (
  <BuildNotesBlock id="decisions" kicker="04. Key Decisions" title="What I locked in early">
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
  </BuildNotesBlock>
);

export const WinsSection = () => (
  <BuildNotesBlock
    id="wins"
    kicker="05. Outcomes"
    title="What worked in practice"
    className={styles.sectionTwoCol}
  >
    <ul className={styles.listIcon}>
      {BUILD_NOTES_WINS.map((item) => (
        <li key={item}>
          <CheckCircle2 size={24} className={styles.iconSuccess} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  </BuildNotesBlock>
);

export const ChallengesSection = () => (
  <BuildNotesBlock id="challenges" kicker="06. Friction" title="What got messy">
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
  </BuildNotesBlock>
);

export const DemoSection = () => (
  <BuildNotesBlock id="demo" kicker="07. Demo" title="The portfolio is the proof">
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
            <div className={styles.demoMiniTitle}>Elevated Card</div>
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
            <div className={styles.demoMiniTitle}>Status Chips</div>
            <p className={styles.demoMiniCopy}>
              Tags and badges consume status semantics while preserving consistent contrast across themes.
            </p>
            <div className={styles.demoPipelines}>
              <div className={styles.demoMiniMeta}>
                <div className={styles.demoChipRow}>
                  <Badge variant="success" size="md">12</Badge>
                  <Badge variant="warning" size="md">4</Badge>
                  <Badge variant="error" size="md">2</Badge>
                  <Badge variant="info" size="md">8</Badge>
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
                <div className={styles.demoChipRow}>
                  <Tag size="sm" variant="info">Info</Tag>
                  <Tag size="sm" variant="success">Success</Tag>
                  <Tag size="sm" variant="warning">Warning</Tag>
                  <Tag size="sm" variant="error">Error</Tag>
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
  </BuildNotesBlock>
);

export const LearningsSection = () => (
  <BuildNotesBlock id="learnings" kicker="08. Learnings" title="What this exposed">
    <p>
      This was an opportunity to apply enterprise design-system architecture in
      a fresh React environment and validate how CSS Modules, theming, and
      component APIs hold up under token-heavy UI.
    </p>
    <p>
      Designing and implementing in parallel was the hard part: defining naming, structure, and ownership while
      validating decisions in real UI.
      It took multiple refactors, but the result is a clearer system that is easier to evolve without losing quality.
    </p>
  </BuildNotesBlock>
);

export const NextStepsSection = () => (
  <BuildNotesBlock id="next-steps" kicker="09. Next Step" title="The journey continues">
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
  </BuildNotesBlock>
);

export const SystemCoreSection = () => (
  <BuildNotesBlock id="system-core" kicker="10. System Core" title="Deep dive into System Core">
    <p>
      Explore the live token tables, primitives, and component
      foundations that back these build notes.
    </p>
    <Link to={ROUTES.SYSTEM_CORE}>
      <Button variant="secondary" size="md">View System Core</Button>
    </Link>
  </BuildNotesBlock>
);
