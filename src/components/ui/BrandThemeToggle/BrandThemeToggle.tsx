import { CircleCheck, Moon, Sun } from 'lucide-react';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useBrand } from '@/context/BrandContext';
import { useTheme } from '@context/ThemeContext';
import { BRAND_PRESETS } from '@/content/themingBuildNotes';
import styles from './BrandThemeToggle.module.css';

interface BrandThemeToggleProps {
  /** Unique id for the trigger button */
  id: string;
}

const BrandThemeToggle = ({ id }: BrandThemeToggleProps) => {
  const { brand, setBrand } = useBrand();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [dropdownPos, setDropdownPos] = useState<{ top: number; right: number } | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentPreset = BRAND_PRESETS.find((p) => p.id === brand) ?? BRAND_PRESETS[0];
  const BrandIcon = currentPreset.icon;
  const isDark = theme === 'dark';

  const updatePos = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setDropdownPos({
      top: rect.bottom + 8,
      right: window.innerWidth - rect.right,
    });
  }, []);

  useLayoutEffect(() => {
    if (isOpen) updatePos();
  }, [isOpen, updatePos]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (
        !dropdownRef.current?.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleResize = () => updatePos();

    document.addEventListener('keydown', handleKey);
    document.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, updatePos]);

  const handleTrigger = () => {
    if (!hasInteracted) setHasInteracted(true);
    setIsOpen((prev) => !prev);
  };

  const handleThemeSelect = (target: 'light' | 'dark') => {
    if (theme !== target) toggleTheme();
  };

  const handleBrandSelect = (id: string) => {
    setBrand(id as typeof brand);
    setIsOpen(false);
    triggerRef.current?.focus();
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

      {isOpen && dropdownPos &&
        createPortal(
          <div
            ref={dropdownRef}
            id={`${id}-dropdown`}
            role="dialog"
            aria-label="Brand and theme settings"
            className={styles.brandThemeToggleDropdown}
            style={{ top: dropdownPos.top, right: dropdownPos.right }}
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
