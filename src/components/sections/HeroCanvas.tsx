import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

interface PointerState {
  x: number;
  y: number;
  active: boolean;
}

interface Palette {
  dot: string;
  line: string;
}

const MAX_DPR = 2; // Limit pixel density so canvas stays crisp without getting heavy
const GRID_GAP = 24; // px between background dot anchors
const AMBIENT_SPEED = 0.00095; // animation speed multiplier applied to RAF timestamp (ms)
const BASE_RADIUS = 230; // px pointer influence radius on desktop
const MOBILE_BREAKPOINT = 768; // px viewport width threshold for mobile tuning
const MIN_LINES = 2; // ambient lines
const MAX_LINES = 4; // ambient lines
const DOT_ALPHA = 0.64; // base opacity for the background dot grid

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const getPalette = (): Palette => {
  const computed = getComputedStyle(document.body);

  return {
    dot: computed.getPropertyValue('--sem-color-divider-strong').trim() || 'rgba(63, 68, 78, 0.55)',
    line: computed.getPropertyValue('--sem-color-divider-base').trim() || 'rgba(106, 116, 130, 0.7)',
  };
};

const HeroCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const target = canvas.parentElement;
    if (!target) return;

    const mediaQuery =
      typeof window.matchMedia === 'function'
        ? window.matchMedia('(prefers-reduced-motion: reduce)')
        : null;

    const pointer: PointerState = { x: 0, y: 0, active: false };
    let width = 0;
    let height = 0;
    let dpr = 1;
    // Pointer influence distance in px (controls affected area, not dot size).
    let radius = BASE_RADIUS;
    let palette = getPalette();
    let animationFrame = 0;
    let isReduced = mediaQuery?.matches ?? false;

    // Scale horizontal line density with canvas width while keeping a bounded range.
    // Example: 840px -> 2 lines, 1260px -> 3 lines, 1680px+ -> 4 lines (capped).
    const getLineCount = () => clamp(Math.floor(width / 420), MIN_LINES, MAX_LINES);

    const draw = (timestamp: number) => {
      context.clearRect(0, 0, width, height);

      context.fillStyle = palette.dot;
      context.globalAlpha = DOT_ALPHA;

      // Draw a fixed dot grid and gently pull nearby dots toward the pointer using distance-based falloff
      for (let y = 0; y <= height + GRID_GAP; y += GRID_GAP) {
        for (let x = 0; x <= width + GRID_GAP; x += GRID_GAP) {
          const distance = Math.hypot(pointer.x - x, pointer.y - y);
          const influence = pointer.active ? clamp(1 - distance / radius, 0, 1) : 0;
          const driftX = pointer.active ? (pointer.x - x) * 0.02 * influence : 0;
          const driftY = pointer.active ? (pointer.y - y) * 0.02 * influence : 0;
          context.beginPath();
          context.arc(x + driftX, y + driftY, 0.8 + influence * 0.35, 0, Math.PI * 2);
          context.fill();
        }
      }

      const motionTime = timestamp * AMBIENT_SPEED;
      const lineCount = getLineCount();
      const bandHeight = Math.max(120, height * 0.24);
      const yGap = bandHeight / Math.max(1, lineCount - 1);
      const startYBase = height * 0.5 - bandHeight * 0.5;

      // Draw animated horizontal guide lines with slight ambient drift, pointer pull, and center-line emphasis
      for (let index = 0; index < lineCount; index += 1) {
        const phase = index * 0.9;
        const baseY = startYBase + yGap * index;
        const centerX = width * 0.5;
        const distance = Math.hypot(pointer.x - centerX, pointer.y - baseY);
        const influence = pointer.active ? clamp(1 - distance / radius, 0, 1) : 0;
        const pullY = pointer.active ? (pointer.y - baseY) * 0.05 * influence : 0;
        const driftX = Math.sin(motionTime * 0.9 + phase) * 14;
        const settleY = Math.cos(motionTime * 0.6 + phase) * 1.2;
        const isCenter = index === Math.floor(lineCount / 2);

        context.strokeStyle = palette.line;
        context.lineWidth = isCenter ? 1.2 : 0.9;
        context.globalAlpha = isCenter ? 0.5 : 0.28;
        context.beginPath();
        context.moveTo(-32 + driftX, baseY + pullY + settleY);
        context.lineTo(width + 32 + driftX, baseY + pullY + settleY);
        context.stroke();
      }

      context.globalAlpha = 1;
    };

    const renderFrame = (timestamp: number) => {
      draw(timestamp);

      if (!isReduced) {
        animationFrame = window.requestAnimationFrame(renderFrame);
      }
    };

    const resize = () => {
      const bounds = target.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);

      // Backing pixel buffer (scaled by DPR so the canvas stays crisp on high-density screens)
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Draw using CSS pixel coordinates while writing into the larger DPR-scaled buffer
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Reduce pointer influence on smaller screens so motion stays subtle and readable
      radius = window.innerWidth < MOBILE_BREAKPOINT ? BASE_RADIUS * 0.7 : BASE_RADIUS;

      // Use high-resolution timestamp so motion timing remains smooth/consistent
      draw(performance.now());
    };

    // Track pointer position inside the hero surface to drive local dot/line influence
    const handlePointerMove = (event: PointerEvent) => {
      if (isReduced) {
        return;
      }

      const bounds = target.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.active = true;
    };

    // Disable pointer influence when the cursor leaves the hero surface
    const handlePointerLeave = () => {
      pointer.active = false;
    };

    const handleThemeChange = () => {
      palette = getPalette();
      draw(performance.now());
    };

    // React to reduced-motion preference changes by stopping or resuming the RAF loop
    const handleMotionChange = (event: MediaQueryListEvent) => {
      isReduced = event.matches;
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;

      if (isReduced) {
        draw(performance.now());
        return;
      }

      animationFrame = window.requestAnimationFrame(renderFrame);
    };

    const hasResizeObserver = typeof ResizeObserver !== 'undefined';
    const resizeObserver = hasResizeObserver ? new ResizeObserver(resize) : null;
    const themeObserver = new MutationObserver(handleThemeChange);

    if (resizeObserver) {
      resizeObserver.observe(target);
    } else {
      window.addEventListener('resize', resize);
    }

    target.addEventListener('pointermove', handlePointerMove);
    target.addEventListener('pointerleave', handlePointerLeave);
    mediaQuery?.addEventListener('change', handleMotionChange);
    themeObserver.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] });

    // Initialize
    resize();

    if (!isReduced) {
      animationFrame = window.requestAnimationFrame(renderFrame);
    }

    return () => {
      window.cancelAnimationFrame(animationFrame);

      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener('resize', resize);
      }

      themeObserver.disconnect();
      target.removeEventListener('pointermove', handlePointerMove);
      target.removeEventListener('pointerleave', handlePointerLeave);
      mediaQuery?.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.heroCanvas} aria-hidden="true" />;
};

export default HeroCanvas;
