import { CSSProperties, ElementType, HTMLAttributes, ReactNode } from 'react';
import styles from './GridItem.module.css';

type SpanValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full';

interface GridItemProps extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  /** Column span at base/mobile. Defaults to 12 (full-width). */
  span?: SpanValue;
  /** Column span at ≥ 480px container width. */
  spanSm?: SpanValue;
  /** Column span at ≥ 768px container width. */
  spanMd?: SpanValue;
  /** Column span at ≥ 1024px container width. */
  spanLg?: SpanValue;
  /** Polymorphic element — defaults to <div>. */
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/**
 * GridItem Component
 *
 * Purpose:
 * - Companion to Grid. Use when children need unequal column widths (e.g. 2/3 + 1/3).
 * - Span values are responsive and respond to the parent Grid's container width
 *   via @container queries — not the viewport.
 * - 'full' spans all available columns regardless of count (grid-column: 1 / -1).
 * - Span values are driven by CSS custom properties; the CSS handles any valid
 *   integer without enumerating per-value rules.
 *
 * Requires a parent <Grid cols={12}> (or any cols count) to define the column template.
 * The span value must not exceed the parent's cols count.
 *
 * Usage:
 * ```tsx
 * // 2/3 + 1/3 layout, stacked on mobile
 * <Grid cols={12} gap="lg">
 *   <GridItem span={12} spanMd={8}>
 *     <MainContent />
 *   </GridItem>
 *   <GridItem span={12} spanMd={4}>
 *     <Sidebar />
 *   </GridItem>
 * </Grid>
 *
 * // Nested grid inside a half-width cell
 * <Grid cols={12}>
 *   <GridItem span={12} spanMd={6}>
 *     <Grid cols={1} colsSm={2}>
 *       <Card /><Card />
 *     </Grid>
 *   </GridItem>
 * </Grid>
 * ```
 */
const GridItem = ({
  span = 12,
  spanSm,
  spanMd,
  spanLg,
  as: Tag = 'div',
  className,
  children,
  style,
  ...props
}: GridItemProps) => {
  const classNames = [styles.gridItem, className].filter(Boolean).join(' ');

  const cssVars = {
    '--span': span !== 'full' ? span : undefined,
    '--span-sm': spanSm !== 'full' ? spanSm : undefined,
    '--span-md': spanMd !== 'full' ? spanMd : undefined,
    '--span-lg': spanLg !== 'full' ? spanLg : undefined,
  } as CSSProperties;

  return (
    <Tag
      className={classNames}
      style={{ ...cssVars, ...style }}
      data-span-full={span === 'full' || undefined}
      data-span-full-sm={spanSm === 'full' || undefined}
      data-span-full-md={spanMd === 'full' || undefined}
      data-span-full-lg={spanLg === 'full' || undefined}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default GridItem;
