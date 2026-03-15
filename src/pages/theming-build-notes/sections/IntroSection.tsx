import EditorialBlock from '@/components/sections/EditorialBlock';
import styles from '../ThemingBuildNotes.module.css';

const IntroSection = () => (
  <EditorialBlock id="context" kicker="01. Context" title="The Logic of Identity">
    <p>
      Supporting one brand is trivial. Supporting an infinite scale, including
      white-label clients, without a graveyard of <code className={styles.code}>!important</code> flags
      requires actual architecture. This refactor shifts the system from
      brute-force overrides toward a declarative injection model.
      The goal is to eliminate hardcoded overrides that require manual maintenance
      for every new brand and theme combination.
    </p>
  </EditorialBlock>
);

export default IntroSection;
