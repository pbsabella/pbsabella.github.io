import { ReactNode, TableHTMLAttributes } from 'react';
import styles from './Table.module.css';

type TableVariant = 'default' | 'compact' | 'striped' | 'grid';

type TableColumn = {
  label: string;
  header?: ReactNode;
};

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  caption?: string;
  columns: TableColumn[];
  rows: ReactNode[][];
  label?: string;
  variant?: TableVariant;
  stacked?: boolean;
  className?: string;
}

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
