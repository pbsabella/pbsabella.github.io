import Container from '@components/layout/Container';
import Tag from '@components/ui/Tag';
import styles from './WorkItem.module.css';

interface WorkItemProps {
  image: string;
  title: string;
  company: string;
  period: string;
  position: string;
  description: string[];
  tags: string[];
  bgClass?: string;
}

const WorkItem = ({
  image,
  title,
  company,
  period,
  position,
  description,
  tags,
  bgClass = '',
}: WorkItemProps) => {
  const isMidImage = image.includes('sm-notifications') || image.includes('animation-knobs');

  return (
    <div className={bgClass}>
      <Container className={styles.workItem}>
        <img
          className={`${styles.workItemImage} ${isMidImage ? styles.workItemImageMid : ''}`}
          src={image}
          alt={title}
          width="1440"
          height="810"
          loading="lazy"
        />
        <div className={styles.workItemSubtitle}>
          <span className={styles.workItemCompany}>{company}</span>
          <span>{period}</span>
        </div>
        <div className={styles.workItemPosition}>{position}</div>
        <h4 className={`h3 ${styles.workItemTitle}`}>{title}</h4>
        {description.map((desc, index) => (
          <p key={index}>
            {desc}
          </p>
        ))}

        <div className={styles.workItemTags}>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WorkItem;
