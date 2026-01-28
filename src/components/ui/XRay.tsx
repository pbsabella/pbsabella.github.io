import { useState, useEffect, useRef, CSSProperties } from 'react';
import styles from './XRay.module.css';

const XRay = () => {
  const [isActive, setIsActive] = useState(false);
  const [tooltip, setTooltip] = useState({
    display: false,
    content: '',
    top: 0,
    left: 0,
  });
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive) {
      document.body.classList.add('is-xray-active');
    } else {
      document.body.classList.remove('is-xray-active');
    }
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-tokens]') as HTMLElement;
      if (target) {
        const tokenString = target.dataset.tokens || '';
        const tokens = tokenString.split(' | ');

        const resolvedTokens = tokens.map((token) => {
          const parts = token.split(': ');
          if (parts.length < 2) return token;

          const prop = parts[0];
          const value = parts[1];

          if (value.startsWith('--')) {
            const computedValue = window.getComputedStyle(target).getPropertyValue(value).trim();
            return `${prop}: ${value} <span class="${styles.tooltipValue}">(${computedValue})</span>`;
          }

          return token;
        });

        const rect = target.getBoundingClientRect();
        setTooltip({
          display: true,
          content: resolvedTokens.join('<br>'),
          top: rect.bottom + 8 + window.scrollY,
          left: rect.left + window.scrollX,
        });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-tokens]');
      if (target) {
        setTooltip((prev) => ({ ...prev, display: false }));
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isActive]);

  const toggleXRay = () => {
    setIsActive((prev) => !prev);
    if (isActive) {
      setTooltip((prev) => ({ ...prev, display: false }));
    }
  };

  return (
    <>
      <button
        id="xray-toggle"
        className={`${styles.xrayToggle} ${isActive ? styles.isActive : ''}`}
        onClick={toggleXRay}
        aria-label="Toggle X-Ray Mode"
      >
        <span className={styles.xrayIndicator}></span>
        System X-Ray
      </button>

      {tooltip.display && (
        <div
          className={styles.xrayTooltip}
          style={
            {
              '--tooltip-top': `${tooltip.top}px`,
              '--tooltip-left': `${tooltip.left}px`,
            } as CSSProperties
          }
          dangerouslySetInnerHTML={{ __html: tooltip.content }}
          ref={tooltipRef}
        />
      )}
    </>
  );
};

export default XRay;
