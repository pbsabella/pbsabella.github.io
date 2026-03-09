import { ChevronDown } from 'lucide-react';
import Card from '@/components/ui/Card/Card';
import Tag from '@/components/ui/Tag/Tag';
import styles from './CashflowMockup.module.css';

interface MaturityRowProps {
  name: string;
  bankName: string;
  principal: string;
  amount: string;
  status: 'settled' | 'due';
}

interface MonthlyRowProps {
  bankName: string;
  name: string;
  amount: string;
}

const MaturityRow = ({ name, bankName, principal, amount, status }: MaturityRowProps) => (
  <div className={styles.row}>
    <div className={styles.rowLeft}>
      <div className={styles.bankInfo}>
        <span className={styles.name}>{name}</span>
        {' · '}
        <span>{bankName}</span>
      </div>
      <span className={styles.principal}>+{principal} principal returned</span>
    </div>
    <div className={styles.rowRight}>
      <Tag variant={status === 'due' ? 'error' : 'success'} size="sm">
        {status === 'due' ? 'Due now' : 'Settled'}
      </Tag>
      <span className={styles.amount}>{amount}</span>
    </div>
  </div>
);

const MonthlyRow = ({ name, bankName, amount }: MonthlyRowProps) => (
  <div className={styles.row}>
    <div className={styles.bankInfo}>
      <span className={styles.name}>{name}</span>
      {' · '}
      <span>{bankName}</span>
    </div>
    <div className={styles.rowRight}>
      <span className={styles.amount}>{amount}</span>
    </div>
  </div>
);

const CashflowMockup = () => (
  <Card variant="panel">
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.month}>Feb 2026</span>
          <Tag variant="info" size="sm">Current month</Tag>
        </div>
        <div className={styles.headerRight}>
          <span className={styles.total}>$421</span>
          <ChevronDown size={16} className={styles.chevron} />
        </div>
      </div>

      <section className={styles.section}>
        <p className={styles.sectionLabel}>At Maturity Payouts</p>
        <MaturityRow
          name="360D TD Pro"
          bankName="Arcvault"
          principal="$2,500"
          amount="$95"
          status="settled"
        />
        <MaturityRow
          name="Short term - Time Deposit"
          bankName="Zenith"
          principal="$5,000"
          amount="$185"
          status="due"
        />
        <MaturityRow
          name="Personal Goal"
          bankName="Lumio"
          principal="$3,000"
          amount="$88"
          status="settled"
        />
      </section>

      <section className={styles.section}>
        <p className={styles.sectionLabel}>Monthly Payouts</p>
        <MonthlyRow name="Savings Account (Boosted)" bankName="Lumio" amount="$22" />
        <MonthlyRow name="Meridian Savings" bankName="Meridian" amount="$31" />
      </section>
    </div>
  </Card>
);

export default CashflowMockup;
