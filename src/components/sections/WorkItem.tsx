import Container from '@components/layout/Container';
import Card from '@components/ui/Card/Card';
import Tag from '@components/ui/Tag/Tag';
import styles from './WorkItem.module.css';

interface WorkItemProps {
  image: string;
  title: string;
  company: string;
  period?: string;
  position: string;
  description: string[];
  tags: string[];
  tone?: 'default' | 'subtle';
  isFirst?: boolean;
  mediaSide?: 'left' | 'right';
}

const WorkItem = ({
  image,
  title,
  company,
  period,
  position,
  description,
  tags,
  tone = 'default',
  isFirst = false,
  mediaSide = 'left',
}: WorkItemProps) => {
  const isInsetImage = title === 'Notifications Platform' || title === 'Motion System';
  const isNotificationsImage = title === 'Notifications Platform';
  const isLeftCropImage = title.includes('Design System');
  const isZoomOutImage = title === 'Wireframing Application';

  const mediaClassNames = [
    styles.workItemMedia,
    isInsetImage && styles.workItemMediaInset,
    isNotificationsImage && styles.workItemMediaInsetNotifications,
  ]
    .filter(Boolean)
    .join(' ');

  const imageClassNames = [
    styles.workItemImage,
    isInsetImage && styles.workItemImageInset,
    isNotificationsImage && styles.workItemImageNotifications,
    isLeftCropImage && styles.workItemImageLeftCrop,
    isZoomOutImage && styles.workItemImageZoomOut,
  ]
    .filter(Boolean)
    .join(' ');

  const shellClassNames = [
    styles.workItemShell,
    tone === 'subtle' ? styles.workItemToneSubtle : styles.workItemToneDefault,
    isFirst && styles.workItemIsFirst,
  ]
    .filter(Boolean)
    .join(' ');

  const panelClassNames = [
    styles.workItemPanel,
    mediaSide === 'right' && styles.workItemPanelMediaRight,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={shellClassNames}>
      <Container className={styles.workItem} variant="wide">
        <Card as="article" variant="panel" className={panelClassNames}>
          <div className={mediaClassNames}>
            <img
              className={imageClassNames}
              src={image}
              alt={title}
              width="1440"
              height="810"
              loading="lazy"
            />
          </div>

          <div className={styles.workItemBody}>
            <div className={styles.workItemSubtitle}>
              <span className={styles.workItemCompany}>{company}</span>
              {period && <span className={styles.workItemPeriod}>{period}</span>}
            </div>

            <h4 className={`h3 ${styles.workItemTitle}`}>{title}</h4>
            <p className={styles.workItemPosition}>{position}</p>

            <div className={styles.workItemDescription}>
              {description.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>

            <div className={styles.workItemTags}>
              {tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default WorkItem;
