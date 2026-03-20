import Card from '@/components/ui/Card/Card';
import Tag from '@/components/ui/Tag/Tag';
import styles from './DashboardMockup.module.css';
import Grid from '@/components/ui/Grid/Grid';

interface BadgeProps {
  label: string;
  variant: 'success' | 'warning';
}

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  subDescription?: string;
  badges?: BadgeProps[];
}

const StatCard = ({ title, value, description, subDescription, badges }: StatCardProps) => (
  <Card variant="flat">
    <h3 className={styles.title}>{title}</h3>
    <div>
      <div className={styles.value}>{value}</div>
      <p className={`${styles.description} ${styles.truncate}`}>{description}</p>
      {subDescription && (
        <p className={`${styles.subDescription} ${styles.truncate}`}>{subDescription}</p>
      )}

      {badges && badges.length > 0 && (
        <div className={styles.badgeStack}>
          {badges.map((badge, idx) => (
            <Tag key={idx} variant={badge.variant} size="sm">
              {badge.label}
            </Tag>
          ))}
        </div>
      )}
    </div>
  </Card>
);

const DashboardCards = () => {
  return (
    <Grid cols={1} gap="sm">
      <StatCard
        title="Income This Month"
        value="$421"
        description="Net interest · Feb 2026"
        badges={[
          { label: '$185 pending', variant: 'warning' },
          { label: '$236 settled', variant: 'success' },
        ]}
      />

      <StatCard
        title="Next Maturity"
        value="Mar 27, 2026"
        description="Short term - Time Deposit"
        subDescription="Zenith · $5,185 net"
      />
    </Grid>
  );
};

export default DashboardCards;
