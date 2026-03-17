import type { CSSProperties } from 'react';
import styles from './TokenCascadeAnimation.module.css';

export type PlaybackMode = 'loop' | 'once' | 'static';

function len(value: string): CSSProperties {
  return { '--len': value } as CSSProperties;
}

interface TokenCascadeProps {
  playback?: PlaybackMode;
}

export default function TokenCascade({ playback = 'loop' }: TokenCascadeProps) {
  const modifierClass =
    playback === 'once' ? styles.playbackOnce :
      playback === 'static' ? styles.playbackStatic : '';

  return (
    <div className={`${styles.wrapper} ${modifierClass}`}>
      {/* ── Mobile SVG (static, vertical flow) ───────────── */}
      <svg
        className={styles.svgMobile}
        viewBox="0 0 380 625"
        role="img"
        aria-labelledby="tca-title-mobile"
      >
        <title id="tca-title-mobile">Stateless Token Cascade Architecture</title>

        {/* Zone 1: CSS Architecture — ladder stack, all centered at x=190 */}
        <text className={styles.sectionHeader} x="10" y="20">CSS ARCHITECTURE</text>
        <rect className={styles.layerBar} style={{ opacity: 1 }} x="10" y="35" width="360" height="24" rx="4" />
        <text className={styles.layerLabel} x="190" y="47">@layer components</text>
        <path className={styles.cascadeArrow} style={{ opacity: 1 }} d="M190,59 L190,67" />

        <rect className={styles.layerBar} style={{ opacity: 1 }} x="10" y="67" width="360" height="24" rx="4" />
        <text className={styles.layerLabel} x="190" y="79">@layer semantic</text>
        <path className={styles.cascadeArrow} style={{ opacity: 1 }} d="M190,91 L190,99" />

        <rect className={`${styles.layerBar} ${styles.layerBarBrand}`} style={{ opacity: 1 }} x="10" y="99" width="360" height="24" rx="4" />
        <text className={`${styles.layerLabel} ${styles.layerLabelBrand}`} x="182" y="111">@layer brand</text>
        <rect className={styles.newBadge} x="228" y="103" width="26" height="16" rx="8" />
        <text className={styles.newBadgeText} x="241" y="111.5" textAnchor="middle" dominantBaseline="middle">NEW</text>
        <path className={styles.cascadeArrow} style={{ opacity: 1 }} d="M190,123 L190,131" />

        <rect className={styles.layerBar} style={{ opacity: 1 }} x="10" y="131" width="360" height="24" rx="4" />
        <text className={styles.layerLabel} x="190" y="143">@layer primitives</text>

        {/* Inject connection from brand layer — rendered after primitives to sit on top */}
        <line
          className={styles.connectLine}
          style={{ opacity: 1, strokeDashoffset: 0, strokeDasharray: 'none' }}
          x1="190" y1="123" x2="190" y2="218"
        />
        <path className={styles.divider} d="M10,168 L370,168" />

        {/* Zone 2: Brand Slots — two nodes side by side, centered */}
        <text className={styles.sectionHeader} x="10" y="188">BRAND SLOTS</text>
        <text className={styles.injectLabel} style={{ opacity: 1 }} x="210" y="205">inject</text>

        {/* 2 × w=130, gap=10, total=270, margin=(380-270)/2=55 */}
        <g transform="translate(55, 218)">
          <rect className={styles.brandNode} fill="var(--sem-color-accent-base)" width="130" height="28" rx="8" />
          <text className={styles.textStrong} fill="var(--sem-color-text-on-bg)" x="65" y="15" textAnchor="middle">--brand-primary</text>
        </g>
        <g transform="translate(195, 218)">
          <rect className={styles.brandNode} fill="var(--sem-color-info-base)" width="130" height="28" rx="8" />
          <text className={styles.textStrong} fill="var(--sem-color-text-info-strong-on-bg)" x="65" y="15" textAnchor="middle">--brand-info</text>
        </g>
        <path className={styles.divider} d="M10,268 L370,268" />

        {/* Zone 3: Semantic Layer — two columns side by side */}
        <text className={styles.sectionHeader} x="10" y="286">SEMANTIC LAYER</text>

        {/* Fan lines from brand node centers to swatch columns */}
        <line className={styles.fanLine} style={{ opacity: 1, strokeDashoffset: 0, strokeDasharray: 'none' }} x1="120" y1="246" x2="82" y2="308" />
        <line className={styles.fanLine} style={{ opacity: 1, strokeDashoffset: 0, strokeDasharray: 'none' }} x1="260" y1="246" x2="288" y2="308" />

        {/* Primary column (x=10) */}
        <g transform="translate(10, 313)">
          <rect className={styles.swatch} fill="var(--sem-color-accent-base)" width="55" height="20" rx="3" />
          <text x="63" y="10" className={styles.swatchLabel}>accent-base</text>
        </g>
        <g transform="translate(10, 343)">
          <rect className={styles.swatch} fill="var(--sem-color-action)" width="55" height="20" rx="3" />
          <text x="63" y="10" className={styles.swatchLabel}>action</text>
        </g>
        <g transform="translate(10, 373)">
          <rect className={styles.swatch} fill="var(--sem-color-surface-tint-1)" stroke="var(--sem-color-border-base)" strokeWidth="1" width="55" height="20" rx="3" />
          <text x="63" y="10" className={styles.swatchLabel}>surface-tint-1</text>
        </g>

        {/* Info column (x=205) */}
        <g transform="translate(205, 313)">
          <rect className={styles.swatch} fill="var(--sem-color-info-base)" width="55" height="20" rx="3" />
          <text x="63" y="10" className={styles.swatchLabel}>info-base</text>
        </g>
        <g transform="translate(205, 343)">
          <rect className={styles.swatch} fill="var(--sem-color-info-strong)" width="55" height="20" rx="3" />
          <text x="63" y="10" className={styles.swatchLabel}>info-strong</text>
        </g>
        <g transform="translate(205, 373)">
          <rect className={styles.swatch} fill="var(--sem-color-info-surface)" stroke="var(--sem-color-border-base)" strokeWidth="1" width="55" height="20" rx="3" />
          <text x="63" y="10" className={styles.swatchLabel}>info-surface</text>
        </g>
        <path className={styles.divider} d="M10,415 L370,415" />

        {/* Zone 4: UI Layer */}
        <text className={styles.sectionHeader} x="10" y="433">UI LAYER</text>
        <text className={styles.injectLabel} style={{ opacity: 1 }} x="210" y="455">powers</text>
        <line className={styles.connectLine} style={{ opacity: 1, strokeDashoffset: 0, strokeDasharray: 'none' }} x1="190" y1="415" x2="190" y2="465" />

        <g transform="translate(120, 465)">
          <rect className={styles.reactiveShape} fill="var(--sem-color-bg-base)" stroke="var(--sem-color-border-subtle)" strokeWidth="1" width="140" height="150" rx="var(--sem-radius-lg, 8)" />
          <text className={styles.textStrong} fill="var(--sem-color-text-strong)" x="15" y="17">Component</text>
          <rect className={styles.reactiveShape} fill="var(--sem-color-border-subtle)" x="1" y="30" width="138" height="1" />
          <rect className={styles.reactiveShape} fill="var(--sem-color-surface-tint-1)" x="15" y="40" width="80" height="7" rx="3" />
          <rect className={styles.reactiveShape} fill="var(--sem-color-surface-tint-1)" x="15" y="54" width="60" height="6" rx="3" />
          <rect className={styles.reactiveShape} fill="none" stroke="var(--sem-color-focus-ring)" strokeWidth="2" x="13" y="68" width="114" height="28" rx="calc(var(--sem-radius-md, 4) + 2px)" />
          <rect className={styles.reactiveShape} fill="var(--sem-color-action)" x="15" y="70" width="110" height="24" rx="var(--sem-radius-md, 4)" />
          <text className={styles.textStrong} fill="var(--sem-color-text-on-bg)" x="70" y="83" fontSize="8" textAnchor="middle">Execute</text>
          <rect className={styles.reactiveShape} fill="var(--sem-color-info-strong)" stroke="var(--sem-color-info-strong)" strokeWidth="1" x="15" y="107" width="35" height="22" rx="var(--sem-radius-md)" />
          <text className={styles.textStrong} fill="var(--sem-color-text-info-strong-on-bg)" x="32" y="119" fontSize="8" textAnchor="middle">New</text>
          <rect className={styles.reactiveShape} fill="var(--sem-color-info-surface)" stroke="var(--sem-color-info-surface)" strokeWidth="1" x="55" y="107" width="34" height="22" rx="var(--sem-radius-md)" />
          <text className={styles.textStrong} fill="var(--sem-color-text-info-on-surface)" x="72" y="119" fontSize="8" textAnchor="middle">v2.4</text>
        </g>
      </svg>

      {/* ── Desktop SVG (animated) ────────────────────────── */}
      <svg
        className={styles.svgDesktop}
        viewBox="0 0 840 404"
        role="img"
        aria-labelledby="tca-title"
      >
        <title id="tca-title">Stateless Token Cascade Architecture</title>

        {/* ── Background Zones & Headers ──────────────────────────── */}
        <text className={styles.sectionHeader} x="10" y="24">CSS ARCHITECTURE</text>
        <path className={styles.divider} d="M 175 30 L 175 380" />

        <text className={styles.sectionHeader} x="200" y="24">BRAND SLOTS</text>
        <path className={styles.divider} d="M 370 30 L 370 380" />

        <text className={styles.sectionHeader} x="400" y="24">SEMANTIC LAYER + RELATIVE COLOR SYNTAX</text>
        <path className={styles.divider} d="M 640 30 L 640 380" />

        <text className={styles.sectionHeader} x="670" y="24">UI/COMPONENT LAYER</text>

        {/* ── Zone 1: Cascade stack ─────────────────────────────── */}
        <rect className={`${styles.layerBar} ${styles.animLayerComp}`} x="10" y="140" width="135" height="24" rx="4" />
        <text className={`${styles.layerLabel} ${styles.animLayerComp}`} x="77" y="152">@layer components</text>

        <rect className={`${styles.layerBar} ${styles.animLayerSem}`} x="10" y="172" width="135" height="24" rx="4" />
        <text className={`${styles.layerLabel} ${styles.animLayerSem}`} x="77" y="184">@layer semantic</text>

        <rect className={`${styles.layerBar} ${styles.layerBarBrand} ${styles.animLayerBrand}`} x="10" y="204" width="135" height="24" rx="4" />
        <text className={`${styles.layerLabel} ${styles.layerLabelBrand} ${styles.animLayerBrand}`} x="65" y="216">@layer brand</text>

        <g className={styles.animLayerBrand}>
          <rect className={styles.newBadge} x="108" y="208" width="26" height="16" rx="8" />
          <text className={styles.newBadgeText} x="121" y="216.5" textAnchor="middle" dominantBaseline="middle">NEW</text>
        </g>

        <rect className={`${styles.layerBar} ${styles.animLayerPr}`} x="10" y="236" width="135" height="24" rx="4" />
        <text className={`${styles.layerLabel} ${styles.animLayerPr}`} x="77" y="248">@layer primitives</text>

        <path className={`${styles.cascadeArrow} ${styles.animArrow1}`} d="M77,164 L77,172" />
        <path className={`${styles.cascadeArrow} ${styles.animArrow2}`} d="M77,196 L77,203" />
        <path className={`${styles.cascadeArrow} ${styles.animArrow3}`} d="M77,229 L77,236" />

        {/* ── Zone 2: Brand Nodes ───────────────────────────────── */}
        {/* Inject lines from Brand Layer to the two Anchor nodes */}
        <line className={`${styles.connectLine} ${styles.animConnectLine}`} style={len('127')} x1="147" y1="216" x2="225" y2="115" />
        <line className={`${styles.connectLine} ${styles.animConnectLine}`} style={len('109')} x1="147" y1="216" x2="225" y2="274" />
        <text className={`${styles.injectLabel} ${styles.animInjectLabel}`} x="175" y="215">inject</text>

        {/* --brand-primary Anchor */}
        <g transform="translate(225, 100)">
          <g className={styles.animBrandNode}>
            <rect className={styles.brandNode} fill="var(--sem-color-accent-base)" width="115" height="28" rx="8" />
            <text className={styles.textStrong} fill="var(--sem-color-text-on-bg)" x="57.5" y="15" textAnchor="middle">--brand-primary</text>
          </g>
        </g>

        {/* --brand-info Anchor */}
        <g transform="translate(225, 260)">
          <g className={styles.animBrandNode} style={{ animationDelay: '150ms' }}>
            <rect className={styles.brandNode} fill="var(--sem-color-info-base)" width="115" height="28" rx="8" />
            <text className={styles.textStrong} fill="var(--sem-color-text-info-strong-on-bg)" x="57.5" y="15" textAnchor="middle">--brand-info</text>
          </g>
        </g>

        {/* ── Zone 3: Semantic Derivation ───────────────────────── */}

        {/* --- Primary Group --- */}
        <line className={`${styles.fanLine} ${styles.animFanLine1}`} style={len('77')} x1="340" y1="115" x2="400" y2="71" />
        <line className={`${styles.fanLine} ${styles.animFanLine2}`} style={len('60')} x1="340" y1="115" x2="400" y2="111" />
        <line className={`${styles.fanLine} ${styles.animFanLine3}`} style={len('67')} x1="340" y1="115" x2="400" y2="151" />

        <g transform="translate(400, 60)">
          <g className={styles.animSwatch1}>
            <rect className={styles.swatch} fill="var(--sem-color-accent-base)" width="90" height="22" rx="3" />
            <text x="100" y="12" className={styles.swatchLabel}>--sem-color-accent-base</text>
            <text x="100" y="23" className={styles.swatchMath}>var(--brand-primary)</text>
          </g>
        </g>
        <g transform="translate(400, 100)">
          <g className={styles.animSwatch2}>
            <rect className={styles.swatch} fill="var(--sem-color-action)" width="90" height="22" rx="3" />
            <text x="100" y="12" className={styles.swatchLabel}>--sem-color-action</text>
            <text x="100" y="23" className={`${styles.swatchMath} ${styles.mathLight}`}>oklch(from primary &lt;x&gt; c h)</text>
            <text x="100" y="23" className={`${styles.swatchMath} ${styles.mathDark}`}>oklch(from primary &lt;x&gt; c h)</text>
          </g>
        </g>
        <g transform="translate(400, 140)">
          <g className={styles.animSwatch3}>
            <rect className={styles.swatch} fill="var(--sem-color-surface-tint-1)" stroke="var(--sem-color-border-base)" strokeWidth="1" width="90" height="22" rx="3" />
            <text x="100" y="12" className={styles.swatchLabel}>--sem-color-surface-tint-1</text>
            <text x="100" y="23" className={`${styles.swatchMath} ${styles.mathLight}`}>oklch(from tint &lt;x&gt; &lt;y&gt; h)</text>
            <text x="100" y="23" className={`${styles.swatchMath} ${styles.mathDark}`}>oklch(from tint &lt;x&gt; &lt;y&gt; h)</text>
          </g>
        </g>

        {/* --- Info Group --- */}
        <line className={`${styles.fanLine} ${styles.animFanLine4}`} style={len('77')} x1="340" y1="275" x2="400" y2="231" />
        <line className={`${styles.fanLine} ${styles.animFanLine5}`} style={len('60')} x1="340" y1="275" x2="400" y2="271" />
        <line className={`${styles.fanLine} ${styles.animFanLine6}`} style={len('67')} x1="340" y1="275" x2="400" y2="311" />

        <g transform="translate(400, 220)">
          <g className={styles.animSwatch4}>
            <rect className={styles.swatch} fill="var(--sem-color-info-base)" width="90" height="22" rx="3" />
            <text x="100" y="12" className={styles.swatchLabel}>--sem-color-info-base</text>
            <text x="100" y="23" className={styles.swatchMath}>var(--brand-info)</text>
          </g>
        </g>
        <g transform="translate(400, 260)">
          <g className={styles.animSwatch5}>
            <rect className={styles.swatch} fill="var(--sem-color-info-strong)" width="90" height="22" rx="3" />
            <text x="100" y="12" className={styles.swatchLabel}>--sem-color-info-strong</text>
            <text x="100" y="23" className={`${styles.swatchMath} ${styles.mathLight}`}>oklch(from info &lt;x&gt; c h)</text>
            <text x="100" y="23" className={`${styles.swatchMath} ${styles.mathDark}`}>oklch(from info &lt;x&gt; c h)</text>
          </g>
        </g>
        <g transform="translate(400, 300)">
          <g className={styles.animSwatch6}>
            <rect className={styles.swatch} fill="var(--sem-color-info-surface)" stroke="var(--sem-color-border-base)" strokeWidth="1" width="90" height="22" rx="3" />
            <text x="100" y="12" className={styles.swatchLabel}>--sem-color-info-surface</text>
            <text x="100" y="23" className={`${styles.swatchMath} ${styles.mathLight}`}>oklch(from info &lt;x&gt; &lt;y&gt; h)</text>
            <text x="100" y="23" className={`${styles.swatchMath} ${styles.mathDark}`}>oklch(from info &lt;x&gt; &lt;y&gt; h)</text>
          </g>
        </g>

        {/* ── Zone 4: Component Layer ───────────────────────────── */}
        <line className={`${styles.connectLine} ${styles.animUiCardLine}`} style={len('60')} x1="620" y1="205" x2="680" y2="205" />
        <text className={`${styles.injectLabel} ${styles.animUiCardLine}`} x="650" y="197">powers</text>

        {/* Merged Component Card */}
        <g transform="translate(680, 105)">
          <g className={styles.animUiCard}>
            <rect className={styles.reactiveShape} fill="var(--sem-color-bg-base)" stroke="var(--sem-color-border-subtle)" strokeWidth="1" width="140" height="180" rx="var(--sem-radius-lg, 8)" />
            <text className={styles.textStrong} fill="var(--sem-color-text-strong)" x="15" y="20">Component</text>
            <rect className={styles.reactiveShape} fill="var(--sem-color-border-subtle)" x="1" y="38" width="138" height="1" />

            <rect className={styles.reactiveShape} fill="var(--sem-color-surface-tint-1)" x="15" y="48" width="80" height="7" rx="3" />
            <rect className={styles.reactiveShape} fill="var(--sem-color-surface-tint-1)" x="15" y="62" width="60" height="6" rx="3" />
            <rect className={styles.reactiveShape} fill="var(--sem-color-surface-tint-1)" x="15" y="74" width="45" height="6" rx="3" />

            <rect className={styles.reactiveShape} fill="none" stroke="var(--sem-color-focus-ring)" strokeWidth="2" x="13" y="90" width="114" height="28" rx="calc(var(--sem-radius-md, 4) + 2px)" />
            <rect className={styles.reactiveShape} fill="var(--sem-color-action)" x="15" y="92" width="110" height="24" rx="var(--sem-radius-md, 4)" />
            <text className={styles.textStrong} fill="var(--sem-color-text-on-bg)" x="70" y="105" fontSize="8" textAnchor="middle">Execute</text>

            <rect className={styles.reactiveShape} fill="var(--sem-color-info-strong)" stroke="var(--sem-color-info-strong)" strokeWidth="1" x="15" y="133" width="35" height="22" rx="var(--sem-radius-md)" />
            <text className={styles.textStrong} fill="var(--sem-color-text-info-strong-on-bg)" x="32" y="145" fontSize="8" textAnchor="middle">New</text>

            <rect className={styles.reactiveShape} fill="var(--sem-color-info-surface)" stroke="var(--sem-color-info-surface)" strokeWidth="1" x="55" y="133" width="34" height="22" rx="var(--sem-radius-md)" />
            <text className={styles.textStrong} fill="var(--sem-color-text-info-on-surface)" x="72" y="145" fontSize="8" textAnchor="middle">v2.4</text>
          </g>
        </g>

      </svg>
    </div>
  );
}
