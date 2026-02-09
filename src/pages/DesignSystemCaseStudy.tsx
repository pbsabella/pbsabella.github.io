import React, { useState, useEffect } from 'react';
import {
  Palette,
  Terminal,
  CheckCircle2,
  Sun,
  Moon,
  Code2,
  Layout,
  Maximize2,
  Github,
  BookOpen
} from 'lucide-react';
import styles from './DesignSystemCaseStudy.module.css';

/**
 * Types for the Design System Data
 */
interface ColorToken {
  name: string;
  token: string;
  value: string;
}

interface SpacingToken {
  token: string;
  value: string;
}

interface CardProps {
  children: React.ReactNode;
  variant?: 'elevated' | 'flat' | 'ghost';
  isInteractive?: boolean;
}

// --- MOCK DATA ---
const COLOR_GROUPS = {
  primitives: {
    green: [
      { name: 'Green 200', token: 'green-200', value: '#bbf7d0' },
      { name: 'Green 500', token: 'green-500', value: '#03b787' },
      { name: 'Green 800', token: 'green-800', value: '#166534' },
    ] as ColorToken[]
  }
};

const SPACING_SCALE: SpacingToken[] = [
  { token: 'unit-1', value: '4px' },
  { token: 'unit-2', value: '8px' },
  { token: 'unit-4', value: '16px' },
  { token: 'unit-8', value: '32px' },
  { token: 'unit-16', value: '64px' },
];

// --- REFACTORED UI COMPONENTS ---
const Card: React.FC<CardProps> = ({ children, variant = 'elevated', isInteractive = false }) => {
  const combinedClass = [
    styles.cardBase,
    styles[variant],
    isInteractive ? styles.interactive : ""
  ].join(' ');

  return <div className={combinedClass}>{children}</div>;
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const themeClass = theme === 'dark' ? styles.darkTheme : styles.lightTheme;

  return (
    <div className={`${styles.appWrapper} ${themeClass}`}>

      {/* 1. HERO / SUMMARY */}
      <header className={`${styles.hero} ${styles.container}`}>
        <div className={styles.heroBadgeRow}>
          <span className={styles.badge}>First React Project</span>
          <div className={styles.lineDivider}></div>
          <span className={styles.metaSmall}>Case Study 01</span>
        </div>

        <h1 className={styles.titleLarge}>
          The Architecture <br/>
          <span className={styles.brandText}>of Consistency</span>
        </h1>

        <p className={styles.heroLead}>
          A deep dive into building a themeable UI framework from the ground up,
          focusing on token architecture and the logic of scalable systems.
        </p>

        <div className={styles.metaGrid}>
          {[
            { label: "Role", val: "Frontend Architect" },
            { label: "Stack", val: "React + TypeScript" },
            { label: "Timeline", val: "3 Week Sprint" },
            { label: "Focus", val: "Design Tokens" }
          ].map((item, i) => (
            <div key={i}>
              <p className={styles.metaItemTitle}>{item.label}</p>
              <p className={styles.metaItemValue}>{item.val}</p>
            </div>
          ))}
        </div>
      </header>

      {/* 2 & 3. CONTEXT & PROBLEM */}
      <section className={styles.sectionAlt}>
        <div className={`${styles.container} ${styles.grid2Col}`}>
          <div>
            <h2 className={styles.sectionLabel}>01. Motivation</h2>
            <h3 className={styles.sectionHeading}>Learning through systems</h3>
            <div className={styles.bodyText}>
              <p>
                My first foray into React was not about making a simple app. It was about solving the problem of UI drift before it could happen. I wanted to understand how big teams maintain visual harmony across thousands of components.
              </p>
              <p>
                The goal was intentional: build a system that works as a "Source of Truth," where changing a single variable updates the entire application's mood and metrics.
              </p>
            </div>
          </div>

          <div>
            <h2 className={styles.sectionLabelRed}>02. Problem</h2>
            <h3 className={styles.sectionHeading}>The friction of manual UI</h3>
            <ul className={styles.list}>
              {[
                { title: "UI Drift", desc: "Disjointed styles across pages due to lack of constraints." },
                { title: "Hardcoded Values", desc: "Magic numbers in CSS that are impossible to audit." },
                { title: "Theming Friction", desc: "Dark mode implementation requiring manual overrides." }
              ].map((item, i) => (
                <li key={i} className={styles.listItem}>
                  <span className={styles.listIconRed}><Terminal size={18} /></span>
                  <div className={styles.listItemContent}>
                    <h4 className={styles.listItemTitle}>{item.title}</h4>
                    <p className={styles.listItemDesc}>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. APPROACH */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={`${styles.sectionLabel} text-center mb-16`}>03. The Strategy</h2>

          <div className={styles.strategyGrid}>
            <div className={`${styles.strategyCard} ${styles.prCard}`}>
              <div className={styles.tokenIcon} style={{backgroundColor: '#03b787'}}>PR</div>
              <h4 className="text-xl font-bold mb-3">Primitives</h4>
              <p className="text-sm opacity-70">Raw values without context. Hex codes, pixel scales, and raw animations. The "physics" of the system.</p>
            </div>
            <div className={`${styles.strategyCard} ${styles.semCard}`}>
              <div className={styles.tokenIcon} style={{backgroundColor: '#3b82f6'}}>SEM</div>
              <h4 className="text-xl font-bold mb-3">Semantic</h4>
              <p className="text-sm opacity-70">Contextual intent. mapping "Green 500" to "Action-Primary." This is where the theme logic lives.</p>
            </div>
            <div className={`${styles.strategyCard} ${styles.compCard}`}>
              <div className={styles.tokenIcon} style={{backgroundColor: '#a855f7'}}>COMP</div>
              <h4 className="text-xl font-bold mb-3">Component</h4>
              <p className="text-sm opacity-70">Specific implementation overrides. Defining how a Button differs from a Card in the same theme.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DESIGN SYSTEM CORE */}
      <section className={styles.sectionCore}>
        <div className={styles.container}>
          <div className={styles.coreHeader}>
            <div>
              <h2 className="text-4xl font-serif mb-4">System Core</h2>
              <p className="opacity-60">The living reference of tokens powering this project.</p>
            </div>
            <button onClick={toggleTheme} className={styles.themeToggle}>
              {theme === 'light' ? <Moon size={14} /> : <Sun size={14} />} TOGGLE THEME
            </button>
          </div>

          <div className={styles.coreLayout}>
            <aside className={styles.sidebar}>
              <div>
                <h4 className={styles.sidebarTitle}><Palette size={14} /> Color Architecture</h4>
                <div className={styles.sidebarGroup}>
                  {COLOR_GROUPS.primitives.green.map(color => (
                    <div key={color.token} className={styles.colorRow}>
                      <div className="flex items-center gap-3">
                        <div className={styles.colorChip} style={{ backgroundColor: color.value }}></div>
                        <span className={styles.tokenName}>--pr-{color.token}</span>
                      </div>
                      <span className={styles.tokenHex}>{color.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className={styles.sidebarTitle}><Maximize2 size={14} /> Spacing Base</h4>
                <div className="space-y-3">
                  {SPACING_SCALE.map(item => (
                    <div key={item.token} className={styles.spacingRow}>
                      <div className={styles.spacingBar} style={{ width: item.value }}></div>
                      <span className="text-[10px] font-mono opacity-40">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            <main className={styles.mainDocs}>
              <div className={styles.docsCardWrapper}>
                <h4 className="text-xs uppercase tracking-widest font-bold opacity-40 mb-8">Component Reference</h4>
                <div className={styles.componentGrid}>
                  <Card isInteractive={true}>
                    <h5 className="font-bold mb-2">Elevated Card</h5>
                    <p className="text-xs opacity-60 mb-4">Uses semantic tokens for shadow and background.</p>
                    <span className="px-2 py-0.5 bg-blue-500/10 text-blue-500 text-[9px] font-bold rounded">SEMANTIC</span>
                  </Card>
                  <Card variant="flat">
                    <h5 className="font-bold mb-2">Flat Container</h5>
                    <p className="text-xs opacity-60 mb-4">Structural grouping without the visual depth.</p>
                    <span className="px-2 py-0.5 bg-purple-500/10 text-purple-500 text-[9px] font-bold rounded">PRIMITIVE</span>
                  </Card>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* 6. REACT INTEGRATION */}
      <section className={styles.sectionDark}>
        <div className={`${styles.container} ${styles.integrationGrid}`}>
          <div>
            <h2 className={styles.sectionLabel}>04. React Integration</h2>
            <h3 className="text-4xl font-serif mb-6">Decoupled styling</h3>
            <p className="opacity-70 leading-relaxed mb-8">
              By exporting tokens as CSS Variables, components remain completely agnostic of the specific theme logic. They consume intents, not colors.
            </p>
            <div className="space-y-4">
              <div className={styles.iconFeature}>
                <Code2 className={styles.brandText} />
                <p className="text-sm">Zero prop drilling for theme-specific styles.</p>
              </div>
              <div className={styles.iconFeature}>
                <Layout className={styles.brandText} />
                <p className="text-sm">Native CSS variables ensure no "flash of unstyled content".</p>
              </div>
            </div>
          </div>
          <div className={styles.codeBlockWrapper}>
            <div className={styles.codeHeader}>
              <div className={`${styles.dot} bg-red-500/50`}></div>
              <div className={`${styles.dot} bg-yellow-500/50`}></div>
              <div className={`${styles.dot} bg-green-500/50`}></div>
            </div>
            <pre className={styles.pre}>
              <code className={styles.brandText}>
{`/* Semantic Mapping */
:root[data-theme='light'] {
  --sem-color-bg-base: var(--pr-neutral-100);
  --sem-color-text-primary: var(--pr-neutral-900);
}

:root[data-theme='dark'] {
  --sem-color-bg-base: var(--pr-neutral-900);
  --sem-color-text-primary: var(--pr-neutral-100);
}`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* 7. LEARNINGS */}
      <section className={styles.section}>
        <div className={styles.learningGrid}>
          <h2 className={`${styles.sectionLabel} text-center mb-12`}>05. Learnings</h2>
          <div className={styles.learningItem}>
            <h4 className={styles.learningTitle}>
              <CheckCircle2 size={20} className={styles.brandText} />
              Systemic thinking vs Visual thinking
            </h4>
            <p className="opacity-70">
              Building a system forced me to think about the math behind the beauty. I learned that a good UI is not just about what looks right in a single frame, but what scales across every possible viewport and theme.
            </p>
          </div>
          <div className={styles.learningItem}>
            <h4 className={styles.learningTitle}>
              <CheckCircle2 size={20} className={styles.brandText} />
              The power of "Boring" defaults
            </h4>
            <p className="opacity-70">
              Spending time on a spacing scale of 4px saved hours of debate later in the project. Standardization is the ultimate productivity tool for developers.
            </p>
          </div>
        </div>
      </section>

      {/* 8. NEXT STEPS */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <h2 className="text-3xl font-serif mb-6">The Journey Continues</h2>
          <p className="opacity-60 mb-10">
            A design system is never "done". Next, I am exploring automated accessibility auditing and integrating Storybook for team collaboration.
          </p>
          <div className={styles.btnRow}>
            <button className={styles.btnPrimary}>
              <Github size={18} className="inline mr-2" /> View on GitHub
            </button>
            <button className={styles.btnOutline}>
              <BookOpen size={18} className="inline mr-2" /> Full Documentation
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DesignSystemCaseStudy;
