import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

interface PointerState {
  x: number;
  y: number;
  active: boolean;
}

interface Palette {
  dot: string;
  stroke: string;
}

const MAX_DPR = 2;
const GRID_GAP = 24;
const AMBIENT_SPEED = 0.00095;
const BASE_RADIUS = 230;
const MOBILE_BREAKPOINT = 768;
const MIN_STROKES = 3;
const MAX_STROKES = 5;

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const getPalette = (): Palette => {
  const computed = getComputedStyle(document.body);
  return {
    dot: computed.getPropertyValue('--sem-color-divider-strong').trim() || 'rgba(0, 0, 0, 0.38)',
    stroke: computed.getPropertyValue('--sem-color-border-accent').trim() || 'rgba(1, 126, 91, 0.82)',
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
    let radius = BASE_RADIUS;
    let palette = getPalette();
    let animationFrame = 0;
    let isReduced = mediaQuery?.matches ?? false;

    const getStrokeCount = () => clamp(Math.floor(width / 360), MIN_STROKES, MAX_STROKES);

    const strokeCurve = (
      startX: number,
      startY: number,
      cp1x: number,
      cp1y: number,
      cp2x: number,
      cp2y: number,
      endX: number,
      endY: number,
      strokeStyle: string,
      lineWidth: number,
      alpha: number
    ) => {
      context.strokeStyle = strokeStyle;
      context.lineWidth = lineWidth;
      context.globalAlpha = alpha;
      context.beginPath();
      context.moveTo(startX, startY);
      context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, endX, endY);
      context.stroke();
    };

    const draw = (timestamp: number) => {
      context.clearRect(0, 0, width, height);

      context.fillStyle = palette.dot;
      context.globalAlpha = 0.38;
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
      const strokeCount = getStrokeCount();
      const bandHeight = Math.max(150, height * 0.28);
      const yGap = bandHeight / Math.max(1, strokeCount - 1);
      const startYBase = height * 0.5 - bandHeight * 0.5;

      for (let index = 0; index < strokeCount; index += 1) {
        const phase = index * 0.85;
        const baseY = startYBase + yGap * index;
        const wave = Math.sin(motionTime + phase) * 9;
        const centerX = width * 0.5;
        const distance = Math.hypot(pointer.x - centerX, pointer.y - baseY);
        const influence = pointer.active ? clamp(1 - distance / radius, 0, 1) : 0;
        const pullX = pointer.active ? (pointer.x - centerX) * 0.12 * influence : 0;
        const pullY = pointer.active ? (pointer.y - baseY) * 0.09 * influence : 0;

        const startX = -24;
        const endX = width + 24;
        const startY = baseY + wave * 0.6;
        const endY = baseY - wave * 0.45;
        const cp1x = width * 0.33 + Math.cos(motionTime * 1.45 + phase) * 22 + pullX * 0.75;
        const cp2x = width * 0.66 + Math.sin(motionTime * 1.2 + phase) * 19 + pullX;
        const cp1y = startY + wave + pullY;
        const cp2y = endY - wave + pullY;

        strokeCurve(
          startX,
          startY,
          cp1x,
          cp1y,
          cp2x,
          cp2y,
          endX,
          endY,
          palette.stroke,
          index === Math.floor(strokeCount / 2) ? 1.85 : 1.3,
          index === Math.floor(strokeCount / 2) ? 0.82 : 0.42
        );
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
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      radius = window.innerWidth < MOBILE_BREAKPOINT ? BASE_RADIUS * 0.7 : BASE_RADIUS;
      draw(performance.now());
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = target.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.active = true;
      if (isReduced) {
        draw(performance.now());
      }
    };

    const handlePointerLeave = () => {
      pointer.active = false;
      if (isReduced) {
        draw(performance.now());
      }
    };

    const handleThemeChange = () => {
      palette = getPalette();
      draw(performance.now());
    };

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
