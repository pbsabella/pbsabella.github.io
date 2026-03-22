import EditorialBlock from '@/components/sections/EditorialBlock';

const IntroSection = () => (
  <EditorialBlock id="context" kicker="01. Context" title="The Logic of Identity">
    <p>
      Supporting one brand is trivial. Supporting an infinite scale, including
      white-label clients, without a graveyard of <code className="code">!important</code> flags
      requires actual architecture. This refactor shifts the system from
      brute-force overrides toward a declarative injection model so new brands and
      themes do not demand hand-tuned overrides.
    </p>
  </EditorialBlock>
);

export default IntroSection;
