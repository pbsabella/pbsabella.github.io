import EditorialBlock from '@/components/sections/EditorialBlock';
import AsideNote from '@/components/sections/AsideNote';
import FigureBlock from '@/components/sections/FigureBlock';
import Button from '@/components/ui/Button/Button';
import {
  AlertCircle,
  ArrowDownUp,
  Compass,
  ExternalLink,
  Zap,
  Search,
  Scale,
  Layout,
  HandCoins,
  MousePointerBan,
  Banknote,
  Smartphone
} from 'lucide-react';
import {
  UnifiedModal,
  WizardInteractive,
} from './Wireframes';
import SpreadsheetChaos from './SpreadsheetChaos';
import styles from '../YieldFlowCaseStudy.module.css';
import IconList from '@/components/sections/IconList';
import CashflowMockup from './CashflowMockup';
import DashboardCards from './DashboardMockup';
import MockupFrame from '@/components/sections/MockupFrame';

export const TldrSection = () => (
  <div className={[styles.featuredBlock, styles.tldrBlock].join(' ')}>
    <p className={styles.quoteTitle}>TL;DR</p>
    <p>Five banks, overlapping maturities, one spreadsheet I kept patching. I built an app to replace it. This is the design story.</p>
    <div className={styles.tldrButtonRow}>
      <Button as="a" href="https://yield-flow-lab.vercel.app/" target="_blank" rel="noopener noreferrer" variant="primary" size="md">
        YieldFlow prototype
        <ExternalLink size={14} />
      </Button>
    </div>
  </div>
);

export const ItchSection = () => (
  <EditorialBlock id="itch" kicker="01. Empathize" title="The Maintenance Tax">
    <div>
      <p>Every few weeks I&apos;d sit down with a messy multi-tab spreadsheet and try to answer three questions:</p>
      <ul className={styles.list}>
        <li>How much interest am I actually getting this month, after tax?</li>
        <li>When does each deposit mature, and do I need to act on it?</li>
        <li>Where should the money go next?</li>
      </ul>
      <p>I had 5+ different banks, overlapping tenures, and rates that change without warning. The spreadsheet technically had all the data. But turning it into a decision took way too long; and one missed maturity window means your cash sits idle while the market moves.</p>
    </div>

    <FigureBlock
      className={styles.assetContainer}
      caption={<>Figure 1. The original &quot;engine&quot; for my financial planning. On mobile, the horizontal scrolling illustrates the friction of managing this much data at once. <em>(Note: All figures and account balances shown are fictional.)</em></>}
    >
      <SpreadsheetChaos />
    </FigureBlock>

    <div>
      <p>I&apos;d been managing this ritual for months before the Google UX Design course gave it a name. Turns out I wasn&apos;t just annoyed at a spreadsheet. I was a user with an unmet need. That was enough to stop patching and start building.</p>
    </div>
  </EditorialBlock>
);

export const ProblemSection = () => (
  <EditorialBlock id="problem" kicker="02. Define" title="Beyond the Balance">
    <div>
      <p>The core issue wasn&apos;t missing data. It was scattered data with no single view of what I could actually spend or move.</p>
      <p>Most banking dashboards show you balances: the total pile. But when you&apos;re rotating money across multiple time deposits, what you need to know is:</p>
    </div>
    <div className={[styles.grid2Col, styles.alignStart].join(' ')}>
      <div>
        <IconList
          variant="list"
          items={[
            {
              icon: <Zap size={24} className={styles.iconAccent} />,
              title: "What's liquid now?",
              description: "(or becoming liquid soon)",
            },
            {
              icon: <Search size={24} className={styles.iconAccent} />,
              title: "What's the net interest hitting my account this month?",
              description: "(not gross: what I actually keep)",
            },
            {
              icon: <AlertCircle size={24} className={styles.iconAccent} />,
              title: "What's sitting idle and costing me yield?",
              description: "",
            },
          ]}
        />
      </div>
      <FigureBlock
        caption={<>Figure 2. High-level dashboard focusing on action items rather than just totals. <em>(Note: All figures and account balances shown are fictional.)</em></>}
      >
        <DashboardCards />
      </FigureBlock>
    </div>
    <div className={`${styles.featuredBlock} ${styles.asideNote}`}>
      <p className={styles.quoteTitle}>User Story</p>
      <blockquote className={styles.quote}>
        &quot;As someone actively rotating across banks, I need to see my real take-home interest per month, know exactly when my deposits mature, and have a clear signal for when to act: all in one place.&quot;
      </blockquote>
    </div>
  </EditorialBlock>
);

export const DecisionsSection = () => (
  <EditorialBlock id="decisions" kicker="03. Ideate" title="Design for High-Stakes Decisions" rhythm="21">
    <p>YieldFlow isn&apos;t about showing more data. It&apos;s about making the data you already have easier to act on. Every choice came back to one question: does this help me decide where my money goes next?</p>

    <p className={styles.quoteTitle}>Logic for Financial Reality</p>
    <div className={styles.decisionIconGroup}>
      <IconList
        variant="grid"
        items={[
          {
            icon: <HandCoins size={24} className={styles.iconAccent} />,
            title: "Net-of-tax by default.",
            description: "Showing gross figures is technically accurate but practically misleading. You can't spend the gross number, so the app calculates interest after withholding tax by default.",
          },
          {
            icon: <Banknote size={24} className={styles.iconAccent} />,
            title: "Intentional Friction",
            description: 'Matured deposits stay visible and flagged until explicitly marked "settled." A matured deposit is an idle asset. I keep this "noise" in the active view until the user dismisses it. The friction is the point.',
          },
          {
            icon: <ArrowDownUp size={24} className={styles.iconAccent} />,
            title: "Sorted by urgency, not date.",
            description: "The deposit list defaults to matured first, then by nearest maturity. Most tools sort alphabetically. Sorting by urgency means you see what needs action before you have to search for it.",
          },
          {
            icon: <Scale size={24} className={styles.iconAccent} />,
            title: "Bank exposure limits.",
            description: "Users can set a global safety cap to manage concentration risk. The dashboard dynamically audits the total principal per bank, making it easy to spot over-concentration that usually gets lost when money is spread across multiple banks and investments. The UI makes it visible.",
          },
        ]}
      />
    </div>

    <p className={[styles.quoteTitle, styles.quoteTitleSpaced].join(' ')}>Designed Without a Manual</p>
    <IconList
      variant="grid"
      items={[
        {
          icon: <MousePointerBan size={24} className={styles.iconAccent} />,
          title: "No tooltips.",
          description: "Tooltips are invisible to screen readers and difficult on mobile. I replaced them with permanent, inline helper text. Visible is accessible.",
        },
        {
          icon: <Layout size={24} className={styles.iconAccent} />,
          title: "shadcn/ui as foundation.",
          description: "I chose shadcn/ui because it gives me full control over styling while the accessibility heavy-lifting (ARIA, keyboard navigation) is handled correctly by default.",
        },
        {
          icon: <Compass size={24} className={styles.iconAccent} />,
          title: "No onboarding tour.",
          description: "If an app needs a tutorial to explain itself, the UI has already failed. YieldFlow is designed to be self-evident. No walkthroughs, no tooltips: the labels, hierarchy, and defaults do the teaching.",
        },
        {
          icon: <Smartphone size={24} className={styles.iconAccent} />,
          title: "Built mobile-first.",
          description: "Dense financial data is painful on a small screen. Building mobile-first forced the information hierarchy: only decision-critical data is visible at a glance, with detail on demand.",
        },
      ]}
    />

    {/* TODO: Add image here */}
  </EditorialBlock>
);

export const PivotSection = () => (
  <EditorialBlock id="pivot" kicker="3.5. Iterate" title="The Idea That Didn't Make It" rhythm="16">
    <p>One idea almost made it through the Ideate phase. Almost.</p>
    <div className={styles.pivotGrid}>
      <div>
        <p>My first instinct was to reduce entry friction to zero. The concept: a <b>smart setup wizard</b> that already knows each bank&apos;s products. You pick your bank, pick the product, and the form pre-fills the rate, tenure, and tax logic automatically.</p>
        <p>It looked great. Then I thought it through.</p>
        <p>Digital banks change their rates constantly; sometimes weekly. Maintaining a live database of every product from every bank would be a full-time job I wasn&apos;t signing up for.</p>
      </div>
      <div className={styles.wireframes}>
        <FigureBlock caption="Figure 3. Two-step wizard flow for quick setup. Click Next to step through the flow.">
          <WizardInteractive />
        </FigureBlock>
      </div>
    </div>
    <div className={styles.pivotContent}>
      <p>If the wizard confidently pre-filled a rate that expired last Tuesday, I&apos;d be giving users false numbers on their financial planning. That&apos;s worse than no tool at all.</p>
      <p><strong>So I killed it.</strong></p>
      <p>I pivoted to a single entry form where the user provides the data directly. It&apos;s a small amount of extra friction: worth it to make the app&apos;s output trustworthy.</p>
      <p>This is a decision-support tool, not an automation.</p>
      <div className={styles.wireframes}>
        <FigureBlock caption="Figure 4. The unified entry form that replaced the wizard. It requires more manual input but is more reliable and future-proof.">
          <UnifiedModal />
        </FigureBlock>
      </div>
    </div>
  </EditorialBlock>
);

export const BuildSection = () => (
  <EditorialBlock id="build" kicker="04. Prototype" title="Browser as the Design Medium" rhythm="21">
    <p>I skipped Figma and went straight to code. I know, I was breaking the process. But as someone playing both designer and engineer, I was eager to get into the browser. For a solo project, iterating on a Figma file felt like an unnecessary middle step; I wanted the immediate feedback that only the actual medium provides.</p>
    <p>My process was: write down what I wanted in plain language, have AI generate the implementation fast, then shape it until it felt right. Less Figma, more conversation.</p>

    <FigureBlock
      className={styles.codeBlockCard}
      caption={<>Figure 5. Plain-language prompt describing the layout and content. <em>(Note: All figures and account balances shown are fictional.)</em></>}
    >
      <MockupFrame variant="terminal">
        <div className={styles.userPrompt}>
          <span className={styles.terminalPrompt}>&gt;</span>
          Build the cash flow collapsible card with this layout
        </div>
        <pre className={styles.asciiCode}>
          {`Feb 2026                                 $421 total
---------------------------------------------------
MATURITY PAYOUTS
360D TD Pro (settled)                           $95
  +$2,500 principal returned
Short term - Time Deposit           [Due now]  $185
  +$5,000 principal returned
Personal Goal (settled)                         $88
  +$3,000 principal returned

MONTHLY PAYOUTS
Savings Account (Boosted)                       $22
Meridian Savings                                $31
----------------------------------------------------`}
        </pre>
      </MockupFrame>
    </FigureBlock>

    <div className={[styles.grid2Col, styles.alignStart].join(' ')}>
      <div>
        <p className={styles.buildSectionLead}>The insight that came out of building fast:</p>
        <p className={styles.textSm}>The cash flow projection needed to show two very different things in the same view: interest earned (what I budget) and principal returned (what I can move). These look like the same number in a spreadsheet. They&apos;re completely different decisions.</p>
      </div>
      <FigureBlock
        caption={<>Figure 6. Expanded cash flow card, showing the visual hierarchy and information architecture. <em>(Note: All figures and account balances shown are fictional.)</em></>}
      >
        <CashflowMockup />
      </FigureBlock>
    </div>
    <p>The hierarchy makes the budgeting question and the rotation question answerable at a glance. I solved it by nesting the principal return as subdued subtext under each maturity payout: visually present but clearly secondary.</p>

    <div className={styles.asideNote}>
      <AsideNote>
        Wearing the hats of product designer, engineer, and user simultaneously; and how AI made that workable without making it brainless; is a story for another post.
      </AsideNote>
    </div>
  </EditorialBlock>
);

export const CurrentStateSection = () => (
  <EditorialBlock id="status" kicker="05. Test" title="Where It Is Now" rhythm="16">
    <div>
      <p>YieldFlow is a living prototype. I&apos;m using it for my own finances, which means it&apos;s getting tested every time a deposit matures or a rate changes.</p>
      <p>Real-use testing catches what designed scenarios miss: the edge case you only hit on a Sunday night when you&apos;re tired and the numbers still need to make sense.</p>
      <p>It&apos;s not a product. It&apos;s a hypothesis I&apos;m testing one maturity date at a time.</p>
    </div>
    <div className={styles.statusButtonRow}>
      <Button as="a" href="https://yield-flow-lab.vercel.app/" target="_blank" rel="noopener noreferrer" variant="primary" size="md">
        View prototype
        <ExternalLink size={14} />
      </Button>
    </div>
  </EditorialBlock>
);

export const TakeawaySection = () => (
  <EditorialBlock id="takeaway" kicker="06. Learnings" title="What I Took Away" rhythm="21">
    <div className={[styles.featuredBlock, styles.takeawayFeatured].join(' ')}>
      &quot;The Design Thinking Framework taught me to stop thinking about features and start thinking about tasks. YieldFlow isn&apos;t a calculator: it&apos;s a decision-support tool.&quot;
    </div>
    <div>
      <p>That reframe changed every choice in this project. The wizard died because it optimized for setup speed instead of building trust in the math. The tooltip ban happened because the task is decision-making under mild stress, not a tutorial. The net-of-tax default exists because the task is budgeting real cash, not reading a statement.</p>
      <p>I&apos;ve shipped a lot of products over the past decade. The best ones always had a designer nearby who could say &quot;but what is the user actually trying to do right now?&quot;. This project was the first time I internalized that question well enough to ask it myself; and let it override my first instinct.</p>
    </div>
    <div>
      <p className={styles.closingStatement}>That&apos;s the intersection I was after.</p>
    </div>
  </EditorialBlock>
);
