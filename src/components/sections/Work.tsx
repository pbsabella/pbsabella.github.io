import Section from '@components/layout/Section';
import WorkItem from './WorkItem';
import { PROJECTS } from '@/content/projects';

const Work = () => {
  return (
    <Section id="work" introText="work" title="Selected Projects" noContainer>
      {PROJECTS.map(({ id, ...project }) => (
        <WorkItem key={id} {...project} />
      ))}
    </Section>
  );
};

export default Work;
