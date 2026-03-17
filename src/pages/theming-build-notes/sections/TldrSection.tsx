
import styles from '../ThemingBuildNotes.module.css';
import FigureBlock from '@/components/sections/FigureBlock';
import layerDigram from '@assets/layer-diagram.png';
import layerDiagramMobile from '@assets/layer-diagram-mobile.png';

const TldrSection = () => {
  return (
    <>
      <div className={styles.blockContainer}>
        <p className={styles.tlDrTitle}>TL;DR</p>
        <p className={styles.tlDrContent}>Four cascade layers. One injection point. Derived tokens.</p>
      </div>

      <FigureBlock className={`${styles.blockContainer}`} caption="Illustration of the four-layer token cascade architecture, with a single brand anchor feeding into the semantic layer's color math to generate a full palette.">
        <picture className={styles.tldrFigure}>
          <source media="(min-width: 641px)" srcSet={layerDigram} />
          <img src={layerDiagramMobile} alt="Diagram of the token cascade flow from brand anchor to semantic palette." />
        </picture>
      </FigureBlock>
    </>
  );
}

export default TldrSection;
