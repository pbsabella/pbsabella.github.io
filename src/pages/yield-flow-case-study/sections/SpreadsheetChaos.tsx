import styles from './SpreadsheetChaos.module.css';

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
          {/* Empty rows to simulate spreadsheet */}
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

export default SpreadsheetChaos;
