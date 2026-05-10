import FeaturedSection from '@components/sections/FeaturedSection';
import WorkItem from '@/components/sections/WorkItem';
import { PROJECTS } from '@/content/projects';

const Work = () => {
  return (
    <FeaturedSection
      id="work"
      introText="work"
      title="Selected projects"
      description="A collection of product and platform initiatives focused on long-term quality. This work covers the full frontend lifecycle, moving from technical strategy to shipping component systems that actually work in production."
      noContainer
    >
      {PROJECTS.map(({ id, ...project }, index) => (
        <WorkItem
          key={id}
          tone={index % 2 === 0 ? 'default' : 'subtle'}
          mediaSide={index % 2 === 0 ? 'left' : 'right'}
          isFirst={index === 0}
          {...project}
        />
      ))}
    </FeaturedSection>
  );
};

export default Work;
