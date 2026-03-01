import { Link } from 'react-router-dom';
import styles from './DesignSystemBuildNotes.module.css';
import Alert from '@/components/ui/Alert/Alert';
import Badge from '@/components/ui/Badge/Badge';
import Button from '@/components/ui/Button/Button';
import Card from '@/components/ui/Card/Card';
import Tag from '@/components/ui/Tag/Tag';
import ThemeToggle from '@/components/ui/ThemeToggle/ThemeToggle';
import EditorialBlock from '@/components/sections/EditorialBlock';
import IconList from '@/components/sections/IconList';
import AsideNote from '@/components/sections/AsideNote';
import { ROUTES } from '@/constants/routes';
import { useTheme } from '@context/ThemeContext';
import {
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  Layers,
  Palette,
  Group,
  Component,
  Shuffle,
  Code2,
  Moon,
  Timer,
  Ship,
  ShieldCheck,
  Contrast,
  Search,
  Scale,
} from 'lucide-react';
import {
  BUILD_NOTES_CHALLENGES,
  BUILD_NOTES_CHALLENGE_NOTE,
  BUILD_NOTES_DECISIONS,
  BUILD_NOTES_NEXT_STEPS,
  BUILD_NOTES_PROBLEM_ITEMS,
} from '@/content/designSystemBuildNotes';

const PipelineConnector = () => (
  <span className={styles.demoPipelineConnector}>
    <ArrowRight size={12} role="img" aria-label="to" />
  </span>
);

export const MotivationSection = () => (
  <EditorialBlock id="motivation" kicker="01. Motivation" title="Learning through systems" rhythm="16">
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
    <AsideNote><strong>Constraints:</strong> Solo build, GitHub Pages deployment, no backend.</AsideNote>
  </EditorialBlock>
);

export const ProblemSection = () => (
  <EditorialBlock id="problem" kicker="02. Problem" title="The friction of manual UI" rhythm="21">
    <p>
      This portfolio is updated in bursts. When I come back after a gap, I
      don&apos;t want to play detective with my own CSS. Without a system, I kept
      re-making the same spacing and color decisions, and that cognitive load
      killed momentum.
    </p>
    <AsideNote>
      Dark mode was the immediate trigger, but the real goal was removing UI
      guesswork and making the system easier to re-enter and scale.
    </AsideNote>
    <IconList
      items={[
        {
          icon: <Shuffle size={20} className={styles.iconAccent} />,
          title: BUILD_NOTES_PROBLEM_ITEMS[0].title,
          description: BUILD_NOTES_PROBLEM_ITEMS[0].description,
        },
        {
          icon: <Code2 size={20} className={styles.iconAccent} />,
          title: BUILD_NOTES_PROBLEM_ITEMS[1].title,
          description: BUILD_NOTES_PROBLEM_ITEMS[1].description,
        },
        {
          icon: <Moon size={20} className={styles.iconAccent} />,
          title: BUILD_NOTES_PROBLEM_ITEMS[2].title,
          description: BUILD_NOTES_PROBLEM_ITEMS[2].description,
        },
      ]}
    />
  </EditorialBlock>
);

export const ApproachSection = () => (
  <EditorialBlock id="approach" kicker="03. Approach" title="Three layers, one source of truth" rhythm="16">
    <p>
      I use a strict three-layer stack: <strong>primitives</strong> for raw
      options, <strong>semantics</strong> for intent, and
      <strong> component tokens</strong> for UI consumption. It adds upfront
      structure, but creates a buffer between raw values and product UI so
      components stay stable as themes and brands evolve.
    </p>
    <div className={styles.layerGrid}>
      <Card variant="flat">
        <div className={styles.layerCard}>
          <div className={styles.layerHeader}>
            <span className={styles.layerIcon} aria-hidden="true">
              <Palette size={24} className={styles.iconAccent} />
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
        </div>
      </Card>
      <Card variant="flat">
        <div className={styles.layerCard}>
          <div className={styles.layerHeader}>
            <span className={styles.layerIcon} aria-hidden="true">
              <Group size={24} className={styles.iconAccent} />
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
        </div>
      </Card>
      <Card variant="flat">
        <div className={styles.layerCard}>
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
        </div>
      </Card>
    </div>
    <Alert
      variant="info"
      role="note"
      aria-live="off"
      title="Design Rationale"
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
  </EditorialBlock>
);

export const KeyDecisionsSection = () => (
  <EditorialBlock
    id="decisions"
    kicker="04. Key Decisions"
    title="What I locked in early"
    rhythm="21"
  >
    <IconList
      variant="grid"
      items={[
        {
          icon: <Search size={24} className={styles.iconAccent} />,
          title: BUILD_NOTES_DECISIONS[0].title,
          description: BUILD_NOTES_DECISIONS[0].description,
        },
        {
          icon: <Layers size={24} className={styles.iconAccent} />,
          title: BUILD_NOTES_DECISIONS[1].title,
          description: BUILD_NOTES_DECISIONS[1].description,
        },
        {
          icon: <CheckCircle2 size={24} className={styles.iconAccent} />,
          title: BUILD_NOTES_DECISIONS[2].title,
          description: BUILD_NOTES_DECISIONS[2].description,
        },
        {
          icon: <ShieldCheck size={24} className={styles.iconAccent} />,
          title: BUILD_NOTES_DECISIONS[3].title,
          description: BUILD_NOTES_DECISIONS[3].description,
        },
        {
          icon: <Ship size={24} className={styles.iconAccent} />,
          title: BUILD_NOTES_DECISIONS[4].title,
          description: BUILD_NOTES_DECISIONS[4].description,
        },
      ]}
    />
  </EditorialBlock>
);

export const WinsSection = () => (
  <EditorialBlock
    id="wins"
    kicker="05. Outcomes"
    title="What worked in practice"
    variant="twoCol"
    rhythm="16"
  >
    <IconList
      items={[
        {
          icon: <CheckCircle2 size={24} className={styles.iconSuccess} />,
          description: 'Moved theme work from component-level edits to semantic remapping.',
        },
        {
          icon: <CheckCircle2 size={24} className={styles.iconSuccess} />,
          description: 'Shifted component APIs toward structural patterns, letting tokens handle visual intent.',
        },
        {
          icon: <CheckCircle2 size={24} className={styles.iconSuccess} />,
          description: 'Made constraints explicit, so one-off values are now easier to audit and eliminate.',
        },
      ]}
    />
  </EditorialBlock>
);

export const ChallengesSection = () => (
  <EditorialBlock id="challenges" kicker="06. Friction" title="What got messy" rhythm="21">
    <IconList
      items={[
        {
          icon: <Timer size={24} className={styles.iconAccent} />,
          description: BUILD_NOTES_CHALLENGES[0],
        },
        {
          icon: <Scale size={24} className={styles.iconAccent} />,
          description: BUILD_NOTES_CHALLENGES[1],
        },
        {
          icon: <Contrast size={24} className={styles.iconAccent} />,
          description: BUILD_NOTES_CHALLENGES[2],
        },
      ]}
    />
  </EditorialBlock>
);

export const DemoSection = () => {
  const { theme } = useTheme();
  const isDarkTheme = theme === 'dark';
  const cardBgPrimitive = isDarkTheme ? '--pr-color-gray-900' : '--pr-color-neutral-100';
  const cardShadowPrimitive = isDarkTheme ? '--pr-shadow-400' : '--pr-shadow-100';
  const badgeSuccessPrimitive = '--pr-color-success-600';
  const tagInfoPrimitive = isDarkTheme ? '--pr-color-info-400' : '--pr-color-info-600';

  return (
    <EditorialBlock id="demo" kicker="07. Demo" title="The portfolio is the proof" rhythm="16">
      <figure>
        <Card variant="panel">
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
                A tiny slice of the system in motion: component tokens map
                to semantics, then resolve to theme-specific primitives.
                Toggle the theme to see
                this demo adapt in real time.
              </p>
              <div className={styles.demoThemeRow}>
                <p className={styles.demoHierarchy}>Trace flow: COMP → SEM → PR</p>
                <ThemeToggle id="build-notes-theme-toggle" variant="text" />
              </div>
            </div>
            <div className={styles.demoShowcase}>
              <Card isInteractive={true}>
                <div className={styles.demoMiniTitle}>Elevated Card</div>
                <p className={styles.demoMiniCopy}>
                  Interactive elevated card using component tokens, fed by semantic intent.
                </p>
                <div className={styles.demoPipelines}>
                  <div className={styles.demoPipelineRow}>
                    <code>--comp-card-bg</code>
                    <PipelineConnector />
                    <code>--sem-color-bg-base</code>
                    <PipelineConnector />
                    <code className={styles.demoPipelineValue}>{cardBgPrimitive}</code>
                  </div>
                  <div className={styles.demoPipelineRow}>
                    <code>--comp-card-shadow</code>
                    <PipelineConnector />
                    <code>--sem-elevation-low</code>
                    <PipelineConnector />
                    <code className={styles.demoPipelineValue}>{cardShadowPrimitive}</code>
                  </div>
                </div>
              </Card>
              <Card variant="flat">
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
                      <code>--sem-color-bg-success</code>
                      <PipelineConnector />
                      <code className={styles.demoPipelineValue}>{badgeSuccessPrimitive}</code>
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
                      <code>--sem-color-border-info</code>
                      <PipelineConnector />
                      <code className={styles.demoPipelineValue}>{tagInfoPrimitive}</code>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Card>
        <figcaption className={styles.demoCaption}>
          Two compact examples showing how token intent stays consistent while visuals adapt by theme.
        </figcaption>
      </figure>
    </EditorialBlock>
  );
};

export const LearningsSection = () => (
  <EditorialBlock id="learnings" kicker="08. Learnings" title="What this exposed" rhythm="21">
    <p>
      This was an opportunity to apply enterprise design-system architecture in
      a fresh React environment and validate how CSS Modules, theming, and
      component APIs hold up under token-heavy UI.
    </p>
    <p>
      Designing and implementing in parallel was the hard part: defining naming, structure, and ownership while
      validating decisions in real UI.
      It took multiple refactors, and while the system is now clearer and easier to evolve, it is still evolving.
    </p>
    <AsideNote className={styles.asideNote}>{BUILD_NOTES_CHALLENGE_NOTE}</AsideNote>
  </EditorialBlock>
);

export const NextStepsSection = () => (
  <EditorialBlock
    id="next-steps"
    kicker="09. Next Steps"
    title="The journey continues"
    rhythm="16"
  >
    <p>
      The system is stable enough to scale, but the next milestone is resilience:
      validating that new variants and brand constraints can be
      added without eroding the semantic contract.
    </p>
    <IconList
      items={BUILD_NOTES_NEXT_STEPS.map((item) => ({
        icon: <ArrowUpRight size={24} className={styles.iconAccent} />,
        description: item,
      }))}
    />
  </EditorialBlock>
);

export const SystemCoreSection = () => (
  <EditorialBlock id="system-core" kicker="10. System Core" title="Deep dive into System Core" rhythm="21">
    <p>
      Explore the live token tables, primitives, and component
      foundations that back these build notes.
    </p>
    <Link to={ROUTES.SYSTEM_CORE}>
      <Button variant="secondary" size="md">View System Core</Button>
    </Link>
  </EditorialBlock>
);
