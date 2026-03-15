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
        These presets demonstrate the range of the injection model across different industries.
        Each preset swaps the underlying brand anchors while the semantic logic stays fixed.
        Select one below — every component on this page re-skins instantly via{' '}
        <code>data-brand</code> on <code>html</code>, with no component code changes.
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
