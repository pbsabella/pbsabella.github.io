import EditorialBlock from '@/components/sections/EditorialBlock';
import Figure from '@/components/sections/Figure';
import AsideNote from '@/components/sections/AsideNote';
import {
  AlertCircle,
  Zap,
  Search,
  Layout,
  HandCoins,
  MousePointerBan,
  Banknote
} from 'lucide-react';
import {
  YIELD_FLOW_CONTENT,
  YIELD_FLOW_DECISIONS,
} from '@/content/yieldFlowCaseStudy';
import { UnifiedModal, WizardStep1, WizardStep2 } from './Wireframes';
import styles from '../YieldFlowCaseStudy.module.css';
import IconList from '@/components/sections/IconList';

const SpreadsheetChaos = () => (
  <div className={styles.spreadsheetContainer}>
    <div className={styles.spreadsheetHeader}>
      <div className={styles.spreadsheetName}>Make believe finances</div>
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

export const ItchSection = () => (
  <EditorialBlock id="itch" kicker="01. Empathize" title="The Itch">
    <div>
      <p>{YIELD_FLOW_CONTENT.itch.paragraphs[0]}</p>
      <ul className={styles.list}>
        {YIELD_FLOW_CONTENT.itch.list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>{YIELD_FLOW_CONTENT.itch.paragraphs[1]}</p>
    </div>

    <div className={styles.assetContainer}>
      <SpreadsheetChaos />
      <p className={styles.spreadsheetCaption}>
        Figure 1. The original &quot;engine&quot; for my financial planning: data-rich but decision-poor. On mobile, the horizontal scrolling illustrates the friction of managing this much data at once.
      </p>
    </div>

    <div>
      <p>{YIELD_FLOW_CONTENT.itch.paragraphs[2]}</p>
    </div>
  </EditorialBlock>
);

export const ProblemSection = () => (
  <EditorialBlock id="problem" kicker="02. Define" title="The Problem, Defined">
    <div>
      <p>{YIELD_FLOW_CONTENT.problem.paragraphs[0]}</p>
      <p>{YIELD_FLOW_CONTENT.problem.paragraphs[1]}</p>
    </div>
    <div className={[styles.grid2Col, styles.alignStart].join(' ')}>
      <Figure
        label="Screenshot: YieldFlow Dashboard"
        desc="Dashboard UI showing the 'Net Take-Home' prominent header"
        caption="Figure 2. High-level dashboard focusing on action items rather than just totals."
        isWhite
      />

      <ul className={styles.listIcon}>
        {YIELD_FLOW_CONTENT.problem.items.map((item, index) => {
          const icons = [
            <Zap key="liquid" size={24} className={styles.iconAccent} />,
            <Search key="interest" size={24} className={styles.iconAccent} />,
            <AlertCircle key="idle" size={24} className={styles.iconAccent} />,
          ];
          return (
            <li key={item.title}>
              {icons[index]}
              <p><strong>{item.title}</strong> {item.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
    <div className={styles.featuredBlock}>
      <p className={styles.quoteTitle}>User Story</p>
      <blockquote className={styles.quote}>
        &quot;{YIELD_FLOW_CONTENT.problem.story}&quot;
      </blockquote>
    </div>
  </EditorialBlock>
);

export const PivotSection = () => (
  <EditorialBlock id="pivot" kicker="03. Ideate" title="The Idea That Didn't Make It" rhythm="16">
    <div className={styles.sectionTwoCol}>
      <div>
        <p>{YIELD_FLOW_CONTENT.pivot.paragraphs[0]}</p>
        <p>{YIELD_FLOW_CONTENT.pivot.paragraphs[1]}</p>
        <p>{YIELD_FLOW_CONTENT.pivot.paragraphs[2]}</p>
      </div>
      {/* <Figure
        label="Comparison: Automated vs. Trustworthy"
        desc="Killing the feature that promised speed at the expense of accuracy."
        caption="Figure 3. Killing the feature that promised speed at the expense of accuracy."
      /> */}
      <div className={styles.wireframes}>
        <WizardStep1 />
        <WizardStep2 className={styles.rightAligned} />
      </div>
    </div>
    <div>
      <p>{YIELD_FLOW_CONTENT.pivot.paragraphs[3]}</p>
      <p className={styles.fontWeight600}>{YIELD_FLOW_CONTENT.pivot.highlight}</p>
      <p>{YIELD_FLOW_CONTENT.pivot.paragraphs[4] ?? ''}</p>
      <p>{YIELD_FLOW_CONTENT.pivot.note}</p>
      <UnifiedModal />
    </div>
  </EditorialBlock>
);

export const BuildSection = () => (
  <EditorialBlock id="build" kicker="04. Prototype" title="How I Built It" rhythm="21">
    <p>{YIELD_FLOW_CONTENT.build.paragraphs[0]}</p>
    <p>{YIELD_FLOW_CONTENT.build.paragraphs[1]}</p>
    <div className={[styles.codeBlockCard, styles.marginT8].join(' ')}>
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
    </div>
    <div className={styles.asideNote}>
      <AsideNote>&quot;{YIELD_FLOW_CONTENT.build.quote}&quot;</AsideNote>
    </div>
    <div className={styles.grid2Col}>
      <div>
        <p className={[styles.fontWeight600, styles.marginB4].join(' ')}>{YIELD_FLOW_CONTENT.build.insight.title}</p>
        <p className={styles.textSm}>{YIELD_FLOW_CONTENT.build.insight.content}</p>
      </div>
      <Figure
        label="UI Detail: Principal nesting"
        desc="Visual nesting of principal return below interest payouts: solving the budget vs. rotation dilemma."
        caption="Figure 4. Visual nesting of principal return below interest payouts."
      />
    </div>
    <p>{YIELD_FLOW_CONTENT.build.paragraphs[2]}</p>
  </EditorialBlock>
);

export const DecisionsSection = () => (
  <EditorialBlock id="decisions" kicker="05. Decisions" title="Decisions Worth Calling Out" rhythm="21">
    <IconList
      variant="grid"
      items={[
        {
          icon: <HandCoins size={24} className={styles.iconAccent} />,
          title: YIELD_FLOW_DECISIONS[0].title,
          description: YIELD_FLOW_DECISIONS[0].description,
        },
        {
          icon: <Banknote size={24} className={styles.iconAccent} />,
          title: YIELD_FLOW_DECISIONS[1].title,
          description: YIELD_FLOW_DECISIONS[1].description,
        },
        {
          icon: <MousePointerBan size={24} className={styles.iconAccent} />,
          title: YIELD_FLOW_DECISIONS[2].title,
          description: YIELD_FLOW_DECISIONS[2].description,
        },
        {
          icon: <Layout size={24} className={styles.iconAccent} />,
          title: YIELD_FLOW_DECISIONS[3].title,
          description: YIELD_FLOW_DECISIONS[3].description,
        },
      ]}
    />

    <div className={styles.marginT16}>
      <Figure
        label="UI Composition: Accessibility and Flow"
        desc="Designing for accessibility through permanent labels and semantic HTML structures."
        caption="Figure 5. Designing for accessibility through permanent labels and semantic HTML structures."
        aspectRatio="21/9"
      />
    </div>
  </EditorialBlock>
);

export const CurrentStateSection = () => (
  <EditorialBlock id="status" kicker="06. Test" title="Where It Is Now" rhythm="16">
    <div>
      <p>{YIELD_FLOW_CONTENT.status.paragraphs[0]}</p>
      <p>{YIELD_FLOW_CONTENT.status.paragraphs[1]}</p>
    </div>
  </EditorialBlock>
);

export const TakeawaySection = () => (
  <EditorialBlock id="takeaway" kicker="07. Learnings" title="What I Took Away" rhythm="21">
    <div className={[styles.grid2Col, styles.gridTakeaway].join(' ')}>
      <div className={[styles.featuredBlock, styles.text125rem].join(' ')}>
        &quot;{YIELD_FLOW_CONTENT.takeaway.quote}&quot;
      </div>
      <Figure
        label="Iconography: Task-based"
        desc="🔍"
        aspectRatio="1/1"
      />
    </div>
    <div>
      <p>{YIELD_FLOW_CONTENT.takeaway.paragraphs[0]}</p>
      <p>{YIELD_FLOW_CONTENT.takeaway.paragraphs[1]}</p>
    </div>
    <div className={styles.footerWrapper}>
      <p>{YIELD_FLOW_CONTENT.takeaway.footerNote}</p>
      <p className={styles.closingStatement}>{YIELD_FLOW_CONTENT.takeaway.closing}</p>
    </div>
  </EditorialBlock>
);
