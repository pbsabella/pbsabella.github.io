import { ReactNode, TableHTMLAttributes } from 'react';
import styles from './Table.module.css';

type TableVariant = 'default' | 'compact' | 'striped' | 'grid';

type TableColumn = {
  label: string;
  header?: ReactNode;
};

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  /** Optional visible caption (preferred for accessibility) */
  caption?: string;
  /** Column definitions used for headers and stacked labels */
  columns: TableColumn[];
  /** Table rows; each cell maps to the same-index column */
  rows: ReactNode[][];
  /** Fallback accessible label when no caption is provided */
  label?: string;
  /** Visual style variant */
  variant?: TableVariant;
  /** Enables mobile stacked row layout */
  stacked?: boolean;
  className?: string;
}

/**
 * Table Component
 *
 * Purpose:
 * - Responsive data table with optional stacked mobile layout.
 *
 * Usage:
 * ```tsx
 * <Table caption="Semantic tokens" columns={columns} rows={rows} />
 * ```
 *
 * Accessibility:
 * - Prefer `caption`; use `label`/`aria-label` when caption is omitted.
 */
const Table = ({
  caption,
  columns,
  rows,
  label,
  variant = 'default',
  stacked = true,
  className,
  ...props
}: TableProps) => {
  const variantClass = styles[`table${variant.charAt(0).toUpperCase() + variant.slice(1)}`];
  const classNames = [styles.table, variantClass, stacked ? styles.tableStacked : '', className]
    .filter(Boolean)
    .join(' ');
  const ariaLabel = caption ? undefined : label ?? props['aria-label'];

  return (
    <table {...props} className={classNames} aria-label={ariaLabel} data-component="table">
      {caption && <caption className={styles.tableCaption}>{caption}</caption>}
      <thead className={styles.tableHead}>
        <tr>
          {columns.map((column, idx) => (
            <th scope="col" className={styles.tableHeadCell} key={`col-${idx}`}>
              {column.header ?? column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr className={styles.tableRow} key={`row-${rowIndex}`}>
            {row.map((cell, cellIndex) => (
              <td
                className={styles.tableCell}
                data-label={columns[cellIndex]?.label ?? ''}
                key={`cell-${rowIndex}-${cellIndex}`}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
