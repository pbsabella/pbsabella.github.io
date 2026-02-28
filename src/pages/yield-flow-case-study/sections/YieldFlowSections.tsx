import EditorialBlock from '@/components/sections/EditorialBlock';
import AsideNote from '@/components/sections/AsideNote';
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
import styles from '../YieldFlowCaseStudy.module.css';
import IconList from '@/components/sections/IconList';
import cashFlowMockup from '@assets/cashflow.png';
import DashboardCards from './DashboardMockup';
import Card from '@/components/ui/Card/Card';

const SpreadsheetChaos = () => (
  <div className={styles.spreadsheetContainer}>
    <div className={styles.spreadsheetHeader}>
      <div className={styles.spreadsheetName}>Fictional Financials</div>
      <div className={styles.spreadsheetMenu}>
        <span>File</span> <span>Edit</span> <span>View</span> <span>Insert</span> <span>Format</span> <span>Data</span> <span>Tools</span> <span>Extensions</span> <span>Help</span>
      </div>
    </div>
    <div className={styles.spreadsheetContent}>
      <table className={styles.spreadsheetTable}>
        <thead>
          <tr>
            <th className={styles.rowHeader}></th>
            <th className={styles.colHeader}>A</th>
            <th className={styles.colHeader}>B</th>
            <th className={styles.colHeader}>C</th>
            <th className={styles.colHeader}>D</th>
            <th className={styles.colHeader}>E</th>
            <th className={styles.colHeader}>F</th>
            <th className={styles.colHeader}>G</th>
            <th className={styles.colHeader}>H</th>
            <th className={styles.colHeader}>I</th>
          </tr>
          <tr className={styles.spreadsheetRowHeader}>
            <td className={styles.rowHeader}>1</td>
            <td>Name</td>
            <td>Principal</td>
            <td>Interest</td>
            <td>Start</td>
            <td>Term</td>
            <td>Maturity Date</td>
            <td>Gross Int.</td>
            <td>Net Int.</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.spreadsheetRowActive}>
            <td className={styles.rowHeader}>2</td>
            <td>Digital TD #402</td>
            <td>₱250,000.00</td>
            <td>6.50%</td>
            <td>Jan 12, 2025</td>
            <td>90 Days</td>
            <td>Apr 12, 2025</td>
            <td>₱4,062.50</td>
            <td>₱3,250.00</td>
            <td><span className={`${styles.statusBadge} ${styles.statusActive}`}>Active</span></td>
          </tr>
          <tr className={styles.spreadsheetRowMatured}>
            <td className={styles.rowHeader}>3</td>
            <td>High-Yield #12</td>
            <td>₱180,000.00</td>
            <td>5.75%</td>
            <td>Dec 05, 2024</td>
            <td>30 Days</td>
            <td>Jan 04, 2025</td>
            <td>₱862.50</td>
            <td>₱690.00</td>
            <td><span className={`${styles.statusBadge} ${styles.statusMatured}`}>Matured</span></td>
          </tr>
          <tr className={styles.spreadsheetRowPending}>
            <td className={styles.rowHeader}>4</td>
            <td>Special Promo A</td>
            <td>₱500,000.00</td>
            <td>7.00%</td>
            <td>Feb 01, 2025</td>
            <td>180 Days</td>
            <td>Jul 31, 2025</td>
            <td>₱17,500.00</td>
            <td>₱14,000.00</td>
            <td><span className={styles.statusBadge}>Pending</span></td>
          </tr>
          <tr>
            <td className={styles.rowHeader}>5</td>
            <td>Reserve #02</td>
            <td>₱50,000.00</td>
            <td>4.50%</td>
            <td>Feb 15, 2025</td>
            <td>30 Days</td>
            <td>Mar 17, 2025</td>
            <td>₱187.50</td>
            <td>₱150.00</td>
            <td><span className={`${styles.statusBadge} ${styles.statusActive}`}>Active</span></td>
          </tr>
          {/* Empty Rows to simulate spreadsheet */}
          {[6, 7, 8].map(i => (
            <tr key={i}>
              <td className={styles.rowHeader}>{i}</td>
              <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.spreadsheetDivider}></div>

      <table className={[styles.spreadsheetTable, styles.spreadsheetSmallTable].join(' ')}>
        <thead>
          <tr>
            <th className={styles.rowHeader}></th>
            <th className={styles.colHeader}>A</th>
            <th className={styles.colHeader}>B</th>
          </tr>
          <tr className={styles.spreadsheetRowHeader}>
            <td className={styles.rowHeader}>1</td>
            <td>Month</td>
            <td>Expected Net Inflow</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.rowHeader}>2</td>
            <td>January</td>
            <td className={styles.cellActive}>₱690.00</td>
          </tr>
          <tr>
            <td className={styles.rowHeader}>3</td>
            <td>February</td>
            <td>₱0.00</td>
          </tr>
          <tr>
            <td className={styles.rowHeader}>4</td>
            <td>March</td>
            <td>₱150.00</td>
          </tr>
          <tr>
            <td className={styles.rowHeader}>5</td>
            <td>April</td>
            <td>₱3,250.00</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className={styles.spreadsheetTabs}>
      <div className={styles.spreadsheetTab}>Sheet1</div>
      <div className={`${styles.spreadsheetTab} ${styles.spreadsheetTabInactive}`}>Drafts</div>
      <div className={`${styles.spreadsheetTab} ${styles.spreadsheetTabInactive}`}>Old_Rates</div>
    </div>
  </div>
);

export const TldrSection = () => (
  <div className={[styles.featuredBlock, styles.marginB8].join(' ')}>
    <p className={styles.quoteTitle}>TL;DR</p>
    <p>Five banks, overlapping maturities, one spreadsheet I kept patching. I built an app to replace it. This is the design story.</p>
    <div className={styles.marginT4}>
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

    <div className={styles.assetContainer}>
      <SpreadsheetChaos />
      <p className={styles.figureCaption}>
        Figure 1. The original &quot;engine&quot; for my financial planning. On mobile, the horizontal scrolling illustrates the friction of managing this much data at once.
      </p>
    </div>

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
      <div>
        <DashboardCards />
        <p className={styles.figureCaption}>
          Figure 2. High-level dashboard focusing on action items rather than just totals.
        </p>
      </div>
    </div>
    <div className={`${styles.featuredBlock}`}>
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
    <IconList
      className={styles.marginB8}
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
          description: "Users can set an optional cap per institution. The app warns when you're approaching or over it. Over-concentration is easy to miss when your money is spread across five banks. The UI makes it visible.",
        },
      ]}
    />

    <p className={[styles.quoteTitle, styles.marginT8].join(' ')}>Designed Without a Manual</p>
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
    <div className={styles.sectionTwoCol}>
      <div>
        <p>My first instinct was to reduce entry friction to zero. The concept: a <b>smart setup wizard</b> that already knows each bank&apos;s products. You pick your bank, pick the product, and the form pre-fills the rate, tenure, and tax logic automatically.</p>
        <p>It looked great. Then I thought it through.</p>
        <p>Digital banks change their rates constantly; sometimes weekly. Maintaining a live database of every product from every bank would be a full-time job I wasn&apos;t signing up for.</p>
      </div>
      <div className={styles.wireframes}>
        <WizardInteractive />
        <p className={styles.figureCaption}>
          Figure 3. Two-step wizard flow for quick setup. Click Next to step through the flow.
        </p>
      </div>
    </div>
    <div className={styles.marginT8}>
      <p>If the wizard confidently pre-filled a rate that expired last Tuesday, I&apos;d be giving users false numbers on their financial planning. That&apos;s worse than no tool at all.</p>
      <p className={styles.fontWeight600}>So I killed it.</p>
      <p>I pivoted to a single, entry form where the user provides the data directly. It&apos;s a small amount of extra friction: worth it to make the app&apos;s output trustworthy.</p>
      <p>This is a decision-support tool, not an automation.</p>
      <div className={styles.wireframes}>
        <UnifiedModal />
        <p className={styles.figureCaption}>
          Figure 4. The unified entry form that replaced the wizard. It requires more manual input but is more reliable and future-proof.
        </p>
      </div>
    </div>
  </EditorialBlock>
);

export const BuildSection = () => (
  <EditorialBlock id="build" kicker="04. Prototype" title="Browser as the Design Medium" rhythm="21">
    <p>I skipped Figma and went straight to code. I know, I was breaking the process. But as someone playing both designer and engineer, I was eager to get into the browser. For a solo project, iterating on a Figma file felt like an unnecessary middle step; I wanted the immediate feedback that only the actual medium provides.</p>
    <p>My process was: write down what I wanted in plain language, have AI generate the implementation fast, then shape it until it felt right. Less Figma, more conversation.</p>
    <div className={[styles.codeBlockCard].join(' ')}>
      <div className={styles.aiMessage}>
        <div className={styles.userPrompt}>
          <span className={styles.terminalPrompt}>&gt;</span>
          Build the cash flow collapsible card with this layout
        </div>
        <pre className={styles.asciiCode}>
          {`March 2025.                   ₱15,600 expected
---------------------------------------------------
MATURITY PAYOUTS
Deposit A · Bank                  [Due now]  ₱8,000
  +₱200,000 principal returned
Deposit B · Bank (settled)                   ₱3,200

MONTHLY PAYOUTS
Deposit C · Bank                  [Due now]  ₱4,400
----------------------------------------------------`}
        </pre>
      </div>
      <p className={styles.figureCaption}>
        Figure 5. Plain-language prompt describing the layout and content.
      </p>
    </div>

    <div className={[styles.grid2Col, styles.alignStart].join(' ')}>
      <div>
        <p className={[styles.fontWeight600, styles.marginB4].join(' ')}>The insight that came out of building fast:</p>
        <p className={styles.textSm}>The cash flow projection needed to show two very different things in the same view: interest earned (what I budget) and principal returned (what I can move). These look like the same number in a spreadsheet. They&apos;re completely different decisions.</p>
      </div>
      <div className={styles.mockupImage}>
        <Card variant="panel">
          <img
            src={cashFlowMockup} alt="Cash flow card mockup"
          />
        </Card>
        <p className={styles.figureCaption}>
          Figure 6. The cash flow card, showing the visual hierarchy and information architecture that supports quick decision-making.
        </p>
      </div>
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
    <div className={styles.marginT6}>
      <Button as="a" href="https://yield-flow-lab.vercel.app/" target="_blank" rel="noopener noreferrer" variant="primary" size="md">
        View prototype
        <ExternalLink size={14} />
      </Button>
    </div>
  </EditorialBlock>
);

export const TakeawaySection = () => (
  <EditorialBlock id="takeaway" kicker="06. Learnings" title="What I Took Away" rhythm="21">
    <div className={[styles.featuredBlock, styles.text125rem].join(' ')}>
      &quot;The Design Thinking Framework taught me to stop thinking about features and start thinking about tasks. YieldFlow isn&apos;t a calculator: it&apos;s a decision-support tool.&quot;
    </div>
    <div>
      <p>That reframe changed every choice in this project. The wizard died because it optimized for setup speed instead of the actual task (trusting the math). The tooltip ban happened because the task is decision-making under mild stress, not a tutorial. The net-of-tax default exists because the task is budgeting real cash, not reading a statement.</p>
      <p>I&apos;ve shipped a lot of products over the past decade. The best ones always had a designer nearby who could say &quot;but what is the user actually trying to do right now?&quot;. This project was the first time I internalized that question well enough to ask it myself; and let it override my first instinct.</p>
    </div>
    <div>
      <p className={styles.closingStatement}>That&apos;s the intersection I was after.</p>
    </div>
  </EditorialBlock>
);
