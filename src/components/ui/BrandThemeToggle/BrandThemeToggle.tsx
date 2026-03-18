import { CircleCheck, Moon, Sun } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useBrand } from '@/context/BrandContext';
import { useTheme } from '@context/ThemeContext';
import { BRAND_PRESETS } from '@/content/themingBuildNotes';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { useFocusTrap } from '@/hooks/useFocusTrap';
import { useFloatingPosition } from '@/hooks/useFloatingPosition';
import styles from './BrandThemeToggle.module.css';

interface BrandThemeToggleProps {
  /** Unique id for the trigger button */
  id: string;
  /** Lock page scroll while the dropdown is open. Use when the trigger is not in a fixed-position container. */
  lockScroll?: boolean;
}

const BrandThemeToggle = ({ id, lockScroll = false }: BrandThemeToggleProps) => {
  const { brand, setBrand } = useBrand();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { triggerRef, dropdownPos } = useFloatingPosition<HTMLButtonElement>(isOpen);
  useFocusTrap(dropdownRef, { isActive: isOpen, onEscape: useCallback(() => setIsOpen(false), []) });
  useBodyScrollLock(isOpen && lockScroll);

  useEffect(() => {
    if (!isOpen) return;
    const handleMouseDown = (e: MouseEvent) => {
      if (
        !dropdownRef.current?.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleMouseDown);
    return () => document.removeEventListener('mousedown', handleMouseDown);
  }, [isOpen, triggerRef]);

  const currentPreset = BRAND_PRESETS.find((p) => p.id === brand) ?? BRAND_PRESETS[0];
  const BrandIcon = currentPreset.icon;
  const isDark = theme === 'dark';

  const handleTrigger = () => {
    if (!hasInteracted) setHasInteracted(true);
    setIsOpen((prev) => !prev);
  };

  const handleThemeSelect = (target: 'light' | 'dark') => {
    if (theme !== target) toggleTheme();
  };

  const handleBrandSelect = (brandId: string) => {
    setBrand(brandId as typeof brand);
    setIsOpen(false);
  };

  const animClass = hasInteracted ? styles.brandThemeToggleIconAnimate : '';

  return (
    <>
      <button
        ref={triggerRef}
        id={id}
        className={styles.brandThemeTogglePill}
        onClick={handleTrigger}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={`${id}-dropdown`}
        aria-label={`${currentPreset.label} brand, ${theme} theme — open settings`}
        type="button"
      >
        <span className={styles.brandThemeTogglePillBrand}>
          <BrandIcon
            size={16}
            aria-hidden="true"
            style={{ fill: 'none', stroke: 'currentColor' }}
          />
        </span>
        <span className={styles.brandThemeTogglePillDivider} aria-hidden="true" />
        <span className={styles.brandThemeTogglePillTheme}>
          <Sun
            aria-hidden="true"
            className={`${styles.brandThemeTogglePillThemeIcon} ${animClass} ${styles.brandThemeTogglePillThemeSun}`}
          />
          <Moon
            aria-hidden="true"
            className={`${styles.brandThemeTogglePillThemeIcon} ${animClass} ${styles.brandThemeTogglePillThemeMoon}`}
          />
        </span>
      </button>

      {isOpen &&
        createPortal(
          <div
            ref={dropdownRef}
            id={`${id}-dropdown`}
            role="dialog"
            aria-modal="true"
            aria-label="Brand and theme settings"
            className={styles.brandThemeToggleDropdown}
            style={{
              top: dropdownPos?.top ?? 'auto',
              bottom: dropdownPos?.bottom ?? 'auto',
              right: dropdownPos?.right ?? 0,
              maxHeight: dropdownPos?.maxHeight,
              visibility: dropdownPos ? undefined : 'hidden',
            }}
          >
            <p className={styles.brandThemeToggleSectionLabel}>Color Mode</p>
            <div className={styles.brandThemeToggleThemeRow} role="group" aria-label="Color mode">
              <button
                className={`${styles.brandThemeToggleThemeBtn} ${!isDark ? styles.brandThemeToggleThemeBtnActive : ''}`}
                onClick={() => handleThemeSelect('light')}
                aria-pressed={!isDark}
                type="button"
              >
                <Sun size={13} aria-hidden="true" />
                Light
              </button>
              <button
                className={`${styles.brandThemeToggleThemeBtn} ${isDark ? styles.brandThemeToggleThemeBtnActive : ''}`}
                onClick={() => handleThemeSelect('dark')}
                aria-pressed={isDark}
                type="button"
              >
                <Moon size={13} aria-hidden="true" />
                Dark
              </button>
            </div>

            <div className={styles.brandThemeToggleDropdownDivider} role="separator" aria-hidden="true" />

            <p className={styles.brandThemeToggleSectionLabel}>Brand Identity</p>
            <ul className={styles.brandThemeToggleBrandList} role="listbox" aria-label="Brand identity">
              {BRAND_PRESETS.map((preset) => {
                const isSelected = brand === preset.id;
                const PresetIcon = preset.icon;
                return (
                  <li key={preset.id} role="option" aria-selected={isSelected}>
                    <button
                      className={`${styles.brandThemeToggleBrandOption} ${isSelected ? styles.brandThemeToggleBrandOptionActive : ''}`}
                      onClick={() => handleBrandSelect(preset.id)}
                      type="button"
                    >
                      <PresetIcon
                        size={15}
                        aria-hidden="true"
                        style={{ color: preset.accentColor, fill: 'none', stroke: 'currentColor' }}
                        className={styles.brandThemeToggleBrandOptionIcon}
                      />
                      <span className={styles.brandThemeToggleBrandOptionLabel}>{preset.label}</span>
                      {isSelected && (
                        <CircleCheck size={16} aria-hidden="true" className={styles.brandThemeToggleBrandOptionCheck} />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>,
          document.body
        )}
    </>
  );
};

export default BrandThemeToggle;
