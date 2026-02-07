import FeaturedSection from '@components/sections/FeaturedSection';
import WorkItem from './WorkItem';
import { PROJECTS } from '@/content/projects';

const Work = () => {
  return (
    <FeaturedSection id="work" introText="work" title="Selected Projects" noContainer>
      {PROJECTS.map(({ id, ...project }) => (
        <WorkItem key={id} {...project} />
      ))}
    </FeaturedSection>
  );
};

export default Work;
