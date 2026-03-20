
import styles from '../ThemingBuildNotes.module.css';
import FigureBlock from '@/components/sections/FigureBlock';
import layerDigram from '@assets/layer-diagram.png';
import layerDiagramMobile from '@assets/layer-diagram-mobile.png';
import Callout from '@/components/ui/Callout/Callout';

const TldrSection = () => {
  return (
    <div className="flow">
      <Callout label="TL;DR">
        <p>Four cascade layers. One injection point. Derived tokens.</p>
      </Callout>

      <div>
        <FigureBlock className={`${styles.blockContainer}`} caption="Illustration of the four-layer token cascade architecture, with a single brand anchor feeding into the semantic layer's color math to generate a full palette.">
          <picture className={styles.tldrFigure}>
            <source media="(min-width: 641px)" srcSet={layerDigram} />
            <img
              src={layerDiagramMobile}
              alt="Diagram of the token cascade flow from brand anchor to semantic palette."
              loading="lazy"
            />
          </picture>
        </FigureBlock>
      </div>
    </div>
  );
}

export default TldrSection;
