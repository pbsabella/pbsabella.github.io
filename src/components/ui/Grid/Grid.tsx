import { CSSProperties, ElementType, HTMLAttributes, ReactNode } from 'react';
import styles from './Grid.module.css';

/** Divisors of 12 only — produces clean equal-width columns with no remainders. */
type ColsValue = 1 | 2 | 3 | 4 | 6 | 12 | 'auto';

interface GridProps extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  /** Number of columns at base/mobile (< 480px container). Defaults to 1. */
  cols?: ColsValue;
  /** Number of columns at ≥ 480px container width. Use 'auto' for intrinsic auto-fit layout. */
  colsSm?: ColsValue;
  /** Number of columns at ≥ 768px container width. */
  colsMd?: ColsValue;
  /** Number of columns at ≥ 1024px container width. */
  colsLg?: ColsValue;
  /** Gap scale between grid items. Defaults to 'md' (24px). */
  gap?: 'sm' | 'md' | 'lg';
  /** Cross-axis alignment of grid items. Defaults to 'stretch'. */
  align?: 'start' | 'center' | 'stretch';
  /** Reverses column order at sm+. Only applies when colsSm is 2 or 3. */
  reverseOnDesktop?: boolean;
  /** Polymorphic element — defaults to <div>. */
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/**
 * Grid Component
 *
 * Purpose:
 * - Container-aware layout primitive. Responds to its container width via
 *   @container queries, not the viewport — making it portable in any context
 *   (sidebars, modals, narrow columns).
 * - The 'auto' variant uses an intrinsic RAM pattern (no queries needed).
 * - Column counts are set via CSS custom properties on the element; the CSS
 *   handles any valid ColsValue without enumerating rules per-value.
 *
 * Breakpoint props:
 * - cols    → base / mobile  (< 480px),  defaults to 1
 * - colsSm  → sm             (≥ 480px)
 * - colsMd  → md             (≥ 768px)
 * - colsLg  → lg             (≥ 1024px)
 *
 * Usage:
 * ```tsx
 * <Grid colsSm={2} gap="lg">
 *   <div>Left</div>
 *   <div>Right</div>
 * </Grid>
 *
 * <Grid colsSm={2} colsMd={3} colsLg={4}>
 *   {items.map(item => <Card key={item.id} {...item} />)}
 * </Grid>
 *
 * <Grid colsSm="auto" gap="md">
 *   {items.map(item => <Card key={item.id} {...item} />)}
 * </Grid>
 * ```
 */
const Grid = ({
  cols = 1,
  colsSm,
  colsMd,
  colsLg,
  gap = 'md',
  align = 'stretch',
  reverseOnDesktop = false,
  as: Tag = 'div',
  className,
  children,
  style,
  ...props
}: GridProps) => {
  const classNames = [styles.grid, className].filter(Boolean).join(' ');

  const cssVars = {
    '--cols':    typeof cols    === 'number' ? cols    : undefined,
    '--cols-sm': typeof colsSm  === 'number' ? colsSm  : undefined,
    '--cols-md': typeof colsMd  === 'number' ? colsMd  : undefined,
    '--cols-lg': typeof colsLg  === 'number' ? colsLg  : undefined,
  } as CSSProperties;

  return (
    <div className={styles.gridContainer}>
      <Tag
        className={classNames}
        style={{ ...cssVars, ...style }}
        data-cols-sm={colsSm === 'auto' ? 'auto' : undefined}
        data-gap={gap}
        data-align={align}
        data-reverse={reverseOnDesktop || undefined}
        {...props}
      >
        {children}
      </Tag>
    </div>
  );
};

export default Grid;
