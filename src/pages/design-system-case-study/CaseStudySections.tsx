import { Link } from 'react-router-dom';
import styles from '../DesignSystemCaseStudy.module.css';
import Alert from '@/components/ui/Alert/Alert';
import Badge from '@/components/ui/Badge/Badge';
import Button from '@/components/ui/Button/Button';
import Card from '@/components/ui/Card/Card';
import Tag from '@/components/ui/Tag/Tag';
import ThemeToggle from '@/components/ui/ThemeToggle/ThemeToggle';
import { ROUTES } from '@/constants/routes';
import { CheckCircle2, ArrowUpRight, Layers, Type, Component, Shuffle, Code2, Moon } from 'lucide-react';

export const MotivationSection = () => (
  <section id="motivation" className={styles.section}>
    <p className={styles.sectionKicker}>01. Motivation</p>
    <h2 className={styles.sectionTitle}>Learning through systems</h2>
    <p>
      My portfolio has existed for years, evolving from static HTML and JavaScript with
      plain CSS, to Sass, then back to CSS with BEM naming conventions, and now React
      with CSS Modules. Each rebuild made the next redesign harder because there was no
      single source of truth or documentation to anchor decisions.
    </p>
    <p>
      I also wanted hands-on React experience while starting a design system from
      scratch. I&apos;ve worked on design systems for years, but never built one from
      the ground up. So I asked: if I had full freedom, what would I build?
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
      The portfolio isn’t something I revisit daily, which makes long-term
      maintainability a real challenge. Each update becomes a mini archaeology
      project instead of a clean iteration.
    </p>
    <p className={styles.noteText}>
      Dark mode and theming were the first test case—if I could solve that cleanly,
      the rest of the system could scale with it.
    </p>
    <ul className={`${styles.listIcon} ${styles.problemList}`}>
      <li>
        <Shuffle size={20} className={styles.iconAccent} aria-hidden="true" />
        <div>
          <strong>UI Drift</strong>
          <p>Disjointed styles across pages due to lack of constraints.</p>
        </div>
      </li>
      <li>
        <Code2 size={20} className={styles.iconAccent} aria-hidden="true" />
        <div>
          <strong>Hardcoded Values</strong>
          <p>Magic numbers in CSS that are impossible to audit.</p>
        </div>
      </li>
      <li>
        <Moon size={20} className={styles.iconAccent} aria-hidden="true" />
        <div>
          <strong>Theming Friction</strong>
          <p>Dark mode implementation requiring manual overrides.</p>
        </div>
      </li>
    </ul>
  </section>
);

export const ApproachSection = () => (
  <section id="approach" className={styles.section}>
    <p className={styles.sectionKicker}>03. Strategy</p>
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
    <ol className={styles.decisionList}>
      <li>
        <strong>Audit before build.</strong> Since the portfolio already existed, I audited
        existing UI patterns first to lock in tokens before refactoring the UI.
      </li>
      <li>
        <strong>Tokens before components.</strong> I defined primitives and semantics first
        so components inherit intent instead of raw values.
      </li>
      <li>
        <strong>Visual testing.</strong> The portfolio itself acts as a live visual test,
        with Percy snapshots to catch drift as tokens evolve.
      </li>
      <li>
        <strong>Automated a11y checks.</strong> Bake in basic accessibility verification
        to prevent regressions as the system evolves.
      </li>
      <li>
        <strong>Dogfood in production.</strong> The portfolio UI doubles as the testing ground
        for token scaling and accessibility.
      </li>
    </ol>
  </section>
);

export const WinsSection = () => (
  <section id="wins" className={`${styles.section} ${styles.sectionTwoCol}`}>
    <p className={styles.sectionKicker}>05. Outcomes</p>
    <h2 className={styles.sectionTitle}>What worked in practice</h2>
    <ul className={styles.listIcon}>
      <li>
        <CheckCircle2 size={24} className={styles.iconSuccess} aria-hidden="true" />
        Dark mode became a token swap, not a component refactor.
      </li>
      <li>
        <CheckCircle2 size={24} className={styles.iconSuccess} aria-hidden="true" />
        React components stayed thin and focused on structure.
      </li>
      <li>
        <CheckCircle2 size={24} className={styles.iconSuccess} aria-hidden="true" />
        Typography and spacing stayed consistent across pages.
      </li>
    </ul>
  </section>
);

export const ChallengesSection = () => (
  <section id="challenges" className={`${styles.section} ${styles.sectionTwoCol}`}>
    <p className={styles.sectionKicker}>06. Friction</p>
    <h2 className={styles.sectionTitle}>Where it got hard</h2>
    <ul className={styles.listIcon}>
      <li>
        <Shuffle size={24} className={`${styles.iconAccent} ${styles.problemIcon}`} aria-hidden="true" />
        Token naming required weeks of iteration to feel right.
      </li>
      <li>
        <Code2 size={24} className={`${styles.iconAccent} ${styles.problemIcon}`} aria-hidden="true" />
        Balancing purity vs. shipping something usable.
      </li>
      <li>
        <Moon size={24} className={`${styles.iconAccent} ${styles.problemIcon}`} aria-hidden="true" />
        Learning React and system architecture simultaneously.
      </li>
    </ul>
  </section>
);

export const DemoSection = () => (
  <section id="demo" className={styles.section}>
    <p className={styles.sectionKicker}>07. Demo</p>
    <h2 className={styles.sectionTitle}>The portfolio is the proof</h2>
    <p className={styles.noteText}>This portfolio is the demo.</p>
    <div className={styles.demoCard}>
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
    <p className={styles.demoCaption}>
      A single UI slice showing primitives flowing into semantic tokens and landing in
      components that swap cleanly across themes.
    </p>
  </section>
);

export const LearningsSection = () => (
  <section id="learnings" className={styles.section}>
    <p className={styles.sectionKicker}>08. Learnings</p>
    <h2 className={styles.sectionTitle}>System thinking in React</h2>
    <p>
      Building a system in React sharpened how I think about component
      architecture. The tokens gave structure; React forced it to be
      composable, testable, and real.
    </p>
  </section>
);

export const NextStepsSection = () => (
  <section id="next-steps" className={styles.section}>
    <p className={styles.sectionKicker}>09. Next Step</p>
    <h2 className={styles.sectionTitle}>The journey continues</h2>
    <p>
      The system is not perfect yet. The next experiments focus on proving the
      theming model and pressure-testing component coverage.
    </p>
    <ul className={styles.listIcon}>
      <li>
        <ArrowUpRight size={24} className={styles.iconAccent} aria-hidden="true" />
        Refine the theming layer by making the override rule explicit
        (primitives vs. semantics vs. both) and validating the cascade.
      </li>
      <li>
        <ArrowUpRight size={24} className={styles.iconAccent} aria-hidden="true" />
        Extend the UI/components to cover more complex patterns and
        see where the system scales or breaks.
      </li>
      <li>
        <ArrowUpRight size={24} className={styles.iconAccent} aria-hidden="true" />
        Tighten design system documentation and clarify AI-assisted workflows
        as the system matures.
      </li>
    </ul>
  </section>
);

export const SystemCoreSection = () => (
  <section className={styles.section}>
    <p className={styles.sectionKicker}>System Core</p>
    <h2 className={styles.sectionTitle}>Deep dive into System Core</h2>
    <p>
      Explore the live token tables, primitives, and component
      foundations that back this case study.
    </p>
    <Link to={ROUTES.SYSTEM_CORE}>
      <Button variant="secondary" size="md">View System Core</Button>
    </Link>
  </section>
);
