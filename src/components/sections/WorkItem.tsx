import { Link } from 'react-router-dom';
import Container from '@components/layout/Container';
import Card from '@components/ui/Card/Card';
import TagList from '@components/ui/TagList/TagList';
import type { ProjectMediaPreset } from '@/content/projects';
import styles from './WorkItem.module.css';

interface WorkItemProps {
  image: string;
  imageAlt?: string;
  title: string;
  company: string;
  period?: string;
  position: string;
  description: string[];
  tags: string[];
  mediaPreset?: ProjectMediaPreset;
  imageObjectPosition?: string;
  tone?: 'default' | 'subtle';
  isFirst?: boolean;
  mediaSide?: 'left' | 'right';
  link?: string;
}

const WorkItem = ({
  image,
  imageAlt,
  title,
  company,
  period,
  position,
  description,
  tags,
  link,
  mediaPreset = 'default',
  imageObjectPosition,
  tone = 'default',
  isFirst = false,
  mediaSide = 'left',
}: WorkItemProps) => {
  const isInsetImage = mediaPreset === 'inset' || mediaPreset === 'notifications';
  const isNotificationsImage = mediaPreset === 'notifications';
  const isLeftCropImage = mediaPreset === 'left-crop';
  const isZoomOutImage = mediaPreset === 'zoom-out';

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

  const cardContent = (
    <Card
      as="article"
      variant="panel"
      isInteractive={!!link}
      data-tone={tone}
      data-media-side={mediaSide}
      data-media-preset={mediaPreset}
    >
      <div className={panelClassNames}>
        <div className={mediaClassNames}>
          <img
            className={imageClassNames}
            src={image}
            alt={imageAlt ?? `${title} project preview`}
            width="1440"
            height="810"
            loading="lazy"
            style={imageObjectPosition ? { objectPosition: imageObjectPosition } : undefined}
          />
        </div>

        <div className={styles.workItemBody}>
          <div className={`kicker ${styles.workItemSubtitle}`}>
            <span className={styles.workItemCompany}>{company}</span>
            {period && <time className={styles.workItemPeriod}>{period}</time>}
          </div>

          <h4 className={`h3 ${styles.workItemTitle}`}>{title}</h4>
          <p className={styles.workItemPosition}>{position}</p>

          <div className={styles.workItemDescription}>
            {description.map((desc) => (
              <p key={desc}>{desc}</p>
            ))}
          </div>

          <TagList
            tags={tags}
            label="Project technologies"
            className={styles.workItemTags}
          />
        </div>
      </div>
    </Card>
  );

  return (
    <div className={shellClassNames}>
      <Container className={styles.workItem} variant="wide">
        {link ? (
          <Link to={link}>
            {cardContent}
          </Link>
        ) : (
          cardContent
        )}
      </Container>
    </div>
  );
};

export default WorkItem;
