import { Layers, Plug } from 'lucide-react';
import EditorialBlock from '@/components/sections/EditorialBlock';
import IconList from '@/components/sections/IconList';
import CodeBlock from './CodeBlock';
import sectionStyles from '../../system-core/SystemCoreSections.module.css';

const FILE_STRUCTURE_SNIPPET = `src/styles/
  tokens.css        -> core: layer declaration + primitives + brand defaults + semantic
  brands/
    fintech.css     -> fintech-specific anchors
    saas.css        -> saas-specific anchors
    editorial.css   -> editorial-specific anchors
  main.css          -> imports: tokens.css -> brands/*.css -> base.css`;

const WHITE_LABEL_SNIPPET = `/* client-acme.css */
@layer brand {
  [data-brand='acme'] {
    --brand-primary:      #c0392b; /* Acme red */
    --brand-primary-bg:   #a93226;
    --brand-font-display: 'Playfair Display', serif;
  }
}`;

const FolderStructureSection = () => (
  <EditorialBlock
    id="folder-structure"
    kicker="05. Folder Structure"
    title="White-Labeling in One File"
  >
    <p>
      The system is architected as a plug-and-play framework. A client only needs to do two things
      to spin up a new identity.
    </p>
    <IconList
      items={[
        {
          icon: <Layers size={20} />,
          title: 'Import the core',
          description: (
            <>
              Bring in <code>tokens.css</code> (the core engine and default anchors).
            </>
          ),
        },
        {
          icon: <Plug size={20} />,
          title: 'Inject a brand',
          description: (
            <>
              Add a brand file that targets <code>@layer brand</code>.
            </>
          ),
        },
      ]}
    />

    <h3 className={sectionStyles.subsectionTitle}>File structure</h3>
    <CodeBlock code={FILE_STRUCTURE_SNIPPET} label="where brands live" />

    <h3 className={sectionStyles.subsectionTitle}>White-label example</h3>
    <p>
      Adding a white-label brand requires zero changes to the core design system or component code.
      Only <code>--brand-primary</code> and <code>--brand-primary-bg</code> are required. Everything
      else inherits the defaults.
    </p>
    <CodeBlock code={WHITE_LABEL_SNIPPET} label="client-acme.css" />
  </EditorialBlock>
);

export default FolderStructureSection;
