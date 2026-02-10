import FeaturedSection from '@components/sections/FeaturedSection';
import WorkItem from './WorkItem';
import { PROJECTS } from '@/content/projects';

const Work = () => {
  return (
    <FeaturedSection
      id="work"
      introText="work"
      title="Selected Projects"
      description="A handful of systems and platform features I've led or co-built, focused on scalable UI, reliability, and the details that make products feel cohesive."
      noContainer
    >
      {PROJECTS.map(({ id, ...project }) => (
        <WorkItem key={id} {...project} />
      ))}
    </FeaturedSection>
  );
};

export default Work;
