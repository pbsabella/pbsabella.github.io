import { CSSProperties, useId, useState } from 'react';
import Card from '@/components/ui/Card/Card';
import styles from './OklchInteractiveAnchor.module.css';

const OklchInteractiveAnchor = () => {
  const baseId = useId();
  const lightnessId = `${baseId}-lightness`;
  const chromaId = `${baseId}-chroma`;
  const hueId = `${baseId}-hue`;

  const [lightness, setLightness] = useState(68);
  const [chroma, setChroma] = useState(0.16);
  const [hue, setHue] = useState(160);

  const styleVars = {
    '--oklch-l': `${lightness}%`,
    '--oklch-c': `${chroma}`,
    '--oklch-h': `${hue}deg`,
  } as CSSProperties;

  return (
    <Card variant="panel" tone="default">
      <div className={styles.anchor} style={styleVars}>
        <div className={styles.preview}>
          <div className={styles.previewSwatch} aria-hidden="true" />
          <div className={styles.previewMeta}>
            <span className={styles.previewValue}>
              oklch({lightness}% {chroma.toFixed(2)} {hue}deg)
            </span>
          </div>
        </div>

        <fieldset className={styles.controls}>
          <div className={styles.control}>
            <div className={styles.controlHeader}>
              <span className={styles.controlBadge}>L</span>
              <div>
                <label className={styles.controlTitle} htmlFor={lightnessId}>
                  Lightness
                </label>
                <span className={styles.controlHint}>Perceived brightness from 0% to 100% (C + H locked)</span>
              </div>
              <output className={styles.controlValue} htmlFor={lightnessId}>
                {lightness}%
              </output>
            </div>
            <div className={styles.controlTrack}>
              <div className={`${styles.controlBar} ${styles.controlBarLightness}`} aria-hidden="true" />
              <input
                id={lightnessId}
                className={styles.controlInput}
                type="range"
                min={0}
                max={100}
                step={1}
                value={lightness}
                onChange={(event) => setLightness(Number(event.target.value))}
                aria-describedby={`${lightnessId}-desc`}
              />
            </div>
            <span id={`${lightnessId}-desc`} className={styles.srOnly}>
              Changes how bright the color appears.
            </span>
          </div>

          <div className={styles.control}>
            <div className={styles.controlHeader}>
              <span className={styles.controlBadge}>C</span>
              <div>
                <label className={styles.controlTitle} htmlFor={chromaId}>
                  Chroma
                </label>
                <span className={styles.controlHint}>Intensity from gray to vivid (L + H locked)</span>
              </div>
              <output className={styles.controlValue} htmlFor={chromaId}>
                {chroma.toFixed(2)}
              </output>
            </div>
            <div className={styles.controlTrack}>
              <div className={`${styles.controlBar} ${styles.controlBarChroma}`} aria-hidden="true" />
              <input
                id={chromaId}
                className={styles.controlInput}
                type="range"
                min={0}
                max={0.32}
                step={0.01}
                value={chroma}
                onChange={(event) => setChroma(Number(event.target.value))}
                aria-describedby={`${chromaId}-desc`}
              />
            </div>
            <span id={`${chromaId}-desc`} className={styles.srOnly}>
              Changes how saturated the color feels.
            </span>
          </div>

          <div className={styles.control}>
            <div className={styles.controlHeader}>
              <span className={styles.controlBadge}>H</span>
              <div>
                <label className={styles.controlTitle} htmlFor={hueId}>
                  Hue
                </label>
                <span className={styles.controlHint}>Color identity from 0° to 360° (L + C locked)</span>
              </div>
              <output className={styles.controlValue} htmlFor={hueId}>
                {hue}°
              </output>
            </div>
            <div className={styles.controlTrack}>
              <div className={`${styles.controlBar} ${styles.controlBarHue}`} aria-hidden="true" />
              <input
                id={hueId}
                className={styles.controlInput}
                type="range"
                min={0}
                max={360}
                step={1}
                value={hue}
                onChange={(event) => setHue(Number(event.target.value))}
                aria-describedby={`${hueId}-desc`}
              />
            </div>
            <span id={`${hueId}-desc`} className={styles.srOnly}>
              Changes which hue the color appears to be.
            </span>
          </div>
        </fieldset>
      </div>
    </Card>
  );
};

export default OklchInteractiveAnchor;
