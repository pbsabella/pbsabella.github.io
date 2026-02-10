import { ElementType } from 'react';
import Table from '@/components/ui/Table/Table';
import { SPACING_SCALE, TYPE_SCALE, FONT_WEIGHTS } from '@/content/core';
import styles from './SystemCoreSections.module.css';

type TokenRow = { name: string; token: string; border?: boolean };

export const TokenTable = ({ tokens }: { tokens: TokenRow[] }) => (
  <div className={styles.tokenTable}>
    <Table
      variant="compact"
      columns={['Preview', 'Name', 'Token']}
      rows={tokens.map((token) => [
        <div
          key={`${token.token}-preview`}
          className={`${styles.tableSwatch} ${token.border ? styles.swatchBoxBorder : ''}`}
          style={{ backgroundColor: `var(${token.token})` }}
        />,
        token.name,
        <code key={`${token.token}-token`}>{token.token}</code>,
      ])}
    />
  </div>
);

export const SpacingTable = () => (
  <div className={styles.tokenTable}>
    <Table
      variant="compact"
      columns={['Preview', 'Token', 'Value']}
      rows={SPACING_SCALE.map((item) => [
        <div key={`${item.token}-preview`} className={styles.tableBar} style={{ width: item.value }} />,
        <code key={`${item.token}-token`}>{item.token}</code>,
        item.value,
      ])}
    />
  </div>
);

export const TypeScaleTable = () => (
  <div className={styles.tokenTable}>
    <Table
      variant="striped"
      columns={['Sample', 'Token', 'Leading']}
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
      columns={['Weight', 'Token']}
      rows={FONT_WEIGHTS.map((weight) => [
        <span key={`${weight.token}-label`} style={{ fontWeight: weight.weight }}>
          {weight.label} ({weight.weight})
        </span>,
        <code key={`${weight.token}-token`}>{weight.token}</code>,
      ])}
    />
  </div>
);
