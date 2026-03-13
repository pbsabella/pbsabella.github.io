import EditorialBlock from '@/components/sections/EditorialBlock';

const IntroSection = () => (
  <EditorialBlock id="intro" kicker="01. Overview" title="Branding Without Rewrites">
    <p>
      Build Notes 01 was about getting light and dark to behave. This is the sequel. I wanted to
      keep the same token engine, but let the identity swap without rewiring components or touching
      layout code.
    </p>
    <p>
      That meant carving out a brand anchor layer and treating it like an API. Once the contract
      is in place, a new brand is just one file, and the rest of the system follows along.
    </p>
  </EditorialBlock>
);

export default IntroSection;
