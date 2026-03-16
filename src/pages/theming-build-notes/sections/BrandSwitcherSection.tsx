import { CircleCheck } from 'lucide-react';
import EditorialBlock from '@/components/sections/EditorialBlock';
import { useBrand } from '@/context/BrandContext';
import { BRAND_PRESETS } from '@/content/themingBuildNotes';
import styles from './BrandSwitcherSection.module.css';

const BrandSwitcherSection = () => {
  const { brand, setBrand } = useBrand();

  return (
    <EditorialBlock id="presets" kicker="06. Presets" title="Stress-testing the vibe" rhythm="21">
      <p>
        With the model and color math in place, these presets stress-test the
        architecture across various industries. Each one swaps the underlying
        brand anchors while the semantic logic remains fixed.
      </p>
      <p>
        Select a preset below to reskin every component instantly.
        These selections are persistent: the brand and theme controls remain
        available in the header and apply your chosen theme throughout the entire
        application as you navigate.
      </p>

      <div className={styles.presetGrid} role="group" aria-label="Brand presets">
        {BRAND_PRESETS.map((preset) => {
          const isSelected = brand === preset.id;
          const PresetIcon = preset.icon;
          return (
            <button
              key={preset.id}
              className={`${styles.presetCard} ${isSelected ? styles.presetCardSelected : ''}`}
              onClick={() => setBrand(preset.id)}
              aria-pressed={isSelected}
              aria-label={`${preset.label} — ${preset.industry}`}
              type="button"
            >
              <div className={styles.presetCardHeader}>
                <PresetIcon
                  size={24}
                  aria-hidden="true"
                  style={{ color: preset.accentColor, fill: 'none', stroke: 'currentColor' }}
                />
                {isSelected && (
                  <CircleCheck size={20} className={styles.presetCheck} aria-hidden="true" />
                )}
              </div>
              <strong className={styles.presetLabel}>{preset.label}</strong>
              <span className={styles.presetIndustry}>{preset.industry}</span>
              <p className={styles.presetDesc}>{preset.description}</p>
            </button>
          );
        })}
      </div>
    </EditorialBlock>
  );
};

export default BrandSwitcherSection;
