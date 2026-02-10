import { ReactNode } from 'react';
import styles from './Table.module.css';

type TableVariant = 'default' | 'compact' | 'striped' | 'grid';

interface TableProps {
  caption?: string;
  columns: ReactNode[];
  rows: ReactNode[][];
  label?: string;
  variant?: TableVariant;
  stacked?: boolean;
}

const Table = ({
  caption,
  columns,
  rows,
  label,
  variant = 'default',
  stacked = true,
}: TableProps) => {
  const classNames = [styles.table, styles[variant], stacked ? styles.stacked : '']
    .filter(Boolean)
    .join(' ');
  const ariaLabel = caption ? undefined : label;

  return (
    <table className={classNames} aria-label={ariaLabel} data-component="table">
      {caption && <caption className={styles.caption}>{caption}</caption>}
      <thead className={styles.head}>
        <tr>
          {columns.map((column, idx) => (
            <th scope="col" className={styles.headCell} key={`col-${idx}`}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr className={styles.row} key={`row-${rowIndex}`}>
            {row.map((cell, cellIndex) => (
              <td
                className={styles.cell}
                data-label={columns[cellIndex]}
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
