import FeaturedSection from '@components/sections/FeaturedSection';
import WorkItem from './WorkItem';
import { PROJECTS } from '@/content/projects';

const Work = () => {
  return (
    <FeaturedSection
      id="work"
      introText="work"
      title="Selected Projects"
      description="A set of platform and product initiatives where I led implementation, system quality, and interaction consistency from concept through production."
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
