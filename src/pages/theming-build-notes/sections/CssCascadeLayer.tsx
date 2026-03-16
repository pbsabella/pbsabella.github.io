import FigureBlock from '@/components/sections/FigureBlock';
import styles from './CssCascadeLayer.module.css';

const CssCascadeLayer = () => {
  return (

    <FigureBlock className={styles.diagram} caption="Order is the policy. Brand sits in the middle and cannot override semantic logic.">
      <div className={styles.stackContainer}>
        {/* Layer 4: Components (Top) */}
        <div className={`${styles.layerGroup} ${styles.layerCompGroup}`}>
          <div className={styles.liftContainer}>
            <div className={`${styles.plane} ${styles.planeComp}`}>
              <span className={styles.labelMain}>components</span>
            </div>
          </div>
        </div>

        {/* Layer 3: Semantic */}
        <div className={`${styles.layerGroup} ${styles.layerSemGroup}`}>
          <div className={styles.liftContainer}>
            <div className={`${styles.plane} ${styles.planeSem}`}>
              <span className={styles.labelMain}>semantic (authoritative; system logic)</span>
            </div>
          </div>
        </div>

        {/* Layer 2: Brand */}
        <div className={`${styles.layerGroup} ${styles.layerBrandGroup}`}>
          <div className={styles.liftContainer}>
            <div className={`${styles.plane} ${styles.planeBrand}`}>
              <span className={styles.labelMain}>brand (anchors)</span>
            </div>
          </div>
        </div>

        {/* Layer 1: Primitives (Bottom) */}
        <div className={`${styles.layerGroup} ${styles.layerPrGroup}`}>
          <div className={styles.liftContainer}>
            <div className={`${styles.plane} ${styles.planePr}`}>
              <span className={styles.labelMain}>primitives</span>
            </div>
          </div>
        </div>

        {/* Priority Axis */}
        <div className={styles.priorityAxis}>
          <div className={styles.axisLine}></div>
          <span className={`${styles.axisLabel} ${styles.axisHigh}`}>Higher Priority</span>
          <span className={`${styles.axisLabel} ${styles.axisLow}`}>Lower Priority</span>
        </div>

      </div>
    </FigureBlock>
  )
};

export default CssCascadeLayer;
