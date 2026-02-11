import { ElementType } from 'react';
import Table from '@/components/ui/Table/Table';
import { SPACING_SCALE, TYPE_SCALE, FONT_WEIGHTS, LAYOUT_CONSTRAINTS } from '@/content/core';
import styles from './SystemCoreSections.module.css';

type TokenRow = { name: string; token: string; border?: boolean };

export const TokenTable = ({ tokens, showValue = false }: { tokens: TokenRow[]; showValue?: boolean }) => {
  const computedStyles = showValue && typeof window !== 'undefined'
    ? getComputedStyle(document.documentElement)
    : null;

  const rows = tokens.map((token) => {
    const baseCells = [
      <div
        key={`${token.token}-preview`}
        className={`${styles.tableSwatch} ${token.border ? styles.swatchBoxBorder : ''}`}
        style={{ backgroundColor: `var(${token.token})` }}
      />,
      token.name,
      <code key={`${token.token}-token`}>{token.token}</code>,
    ];

    if (!showValue) {
      return baseCells;
    }

    const resolvedValue = computedStyles?.getPropertyValue(token.token).trim();
    return [...baseCells, <code key={`${token.token}-value`}>{resolvedValue || '—'}</code>];
  });

  return (
    <div className={styles.tokenTable}>
      <Table
        variant="compact"
        columns={
          showValue
            ? [
              { label: 'Preview' },
              { label: 'Name' },
              { label: 'Token' },
              { label: 'Value' },
            ]
            : [
              { label: 'Preview' },
              { label: 'Name' },
              { label: 'Token' },
            ]
        }
        rows={rows}
      />
    </div>
  );
};

export const SpacingTable = () => (
  <div className={styles.tokenTable}>
    <Table
      variant="compact"
      columns={[
        { label: 'Preview' },
        { label: 'Token' },
        { label: 'Value' },
      ]}
      rows={SPACING_SCALE.map((item) => [
        <div key={`${item.token}-preview`} className={styles.tableBar} style={{ width: item.value }} />,
        <code key={`${item.token}-token`}>{item.token}</code>,
        item.value,
      ])}
    />
  </div>
);

export const LayoutConstraintsTable = () => (
  <div className={styles.tokenTable}>
    <Table
      variant="compact"
      columns={[
        { label: 'Token' },
        { label: 'Value' },
        { label: 'Usage' },
      ]}
      rows={LAYOUT_CONSTRAINTS.map((item) => [
        <code key={`${item.token}-token`}>{item.token}</code>,
        item.value,
        item.use,
      ])}
    />
  </div>
);

export const TypeScaleTable = () => (
  <div className={styles.tokenTable}>
    <Table
      variant="striped"
      columns={[
        { label: 'Sample' },
        { label: 'Token' },
        { label: 'Leading' },
      ]}
      rows={TYPE_SCALE.map((type, idx) => {
        const Element = type.element as ElementType;
        return [
          <Element key={`${type.token}-sample`} className={styles.typeSample}>
            {type.text || `Heading Level ${idx + 1}`}
          </Element>,
          <code key={`${type.token}-token`}>{type.token}</code>,
          <code key={`${type.token}-leading`}>{type.leading}</code>,
        ];
      })}
    />
  </div>
);

export const FontWeightTable = () => (
  <div className={styles.tokenTable}>
    <Table
      variant="striped"
      columns={[
        { label: 'Weight' },
        { label: 'Token' },
      ]}
      rows={FONT_WEIGHTS.map((weight) => [
        <span key={`${weight.token}-label`} style={{ fontWeight: weight.weight }}>
          {weight.label} ({weight.weight})
        </span>,
        <code key={`${weight.token}-token`}>{weight.token}</code>,
      ])}
    />
  </div>
);
