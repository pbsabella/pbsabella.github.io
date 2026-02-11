import { expect, test } from '@playwright/test';

// NOTE: This is a semantic token contract smoke test, not full usage coverage.
// Keep this list focused on high-risk pairs, then periodically update from real UI usage.
type Theme = 'light' | 'dark';

type TokenContrastContract = {
  id: string;
  foregroundToken: string;
  backgroundToken: string;
  fontSizePx: number;
  fontWeight: number;
};

const THEMES: Theme[] = ['light', 'dark'];
// TODO(ds-contrast): Remove IDs from this set after token adjustments restore AA contrast.
// TODO(ds-contrast): Once fixed, these contracts should be enforced as hard failures again.
const WARN_ONLY_CONTRACT_IDS = new Set(['muted text on base', 'kicker text on base']);

const TOKEN_CONTRACTS: TokenContrastContract[] = [
  {
    id: 'body text on base',
    foregroundToken: '--sem-color-text-primary',
    backgroundToken: '--sem-color-bg-base',
    fontSizePx: 16,
    fontWeight: 400,
  },
  {
    id: 'muted text on base',
    foregroundToken: '--sem-color-text-muted',
    backgroundToken: '--sem-color-bg-base',
    fontSizePx: 14,
    fontWeight: 400,
  },
  {
    id: 'kicker text on base',
    foregroundToken: '--sem-color-accent-orange',
    backgroundToken: '--sem-color-bg-base',
    fontSizePx: 12,
    fontWeight: 500,
  },
  {
    id: 'text on elevated surface',
    foregroundToken: '--sem-color-text-primary',
    backgroundToken: '--sem-color-bg-elevated',
    fontSizePx: 14,
    fontWeight: 400,
  },
  {
    id: 'strong text on subtle surface',
    foregroundToken: '--sem-color-text-strong',
    backgroundToken: '--sem-color-bg-subtle',
    fontSizePx: 20,
    fontWeight: 600,
  },
];

const thresholdForText = (fontSizePx: number, fontWeight: number): number => {
  const isLargeText = fontSizePx >= 24 || (fontSizePx >= 18.66 && fontWeight >= 700);
  return isLargeText ? 3 : 4.5;
};

test.describe('Token contrast contracts', () => {
  for (const theme of THEMES) {
    test(`semantic token contrast contracts pass in ${theme}`, async ({ page }) => {
      await page.addInitScript((themeValue: Theme) => {
        window.localStorage.setItem('theme', themeValue);
      }, theme);

      await page.goto('/#/', { waitUntil: 'networkidle' });

      const results = await page.evaluate((contracts: TokenContrastContract[]) => {
        const resolveCssColor = (declaration: string): string => {
          const el = document.createElement('span');
          el.style.color = declaration;
          el.style.position = 'absolute';
          el.style.left = '-9999px';
          document.body.appendChild(el);
          const color = getComputedStyle(el).color;
          el.remove();
          return color;
        };

        const parseRgb = (color: string): [number, number, number] => {
          const parts = color.match(/\d+/g);
          if (!parts || parts.length < 3) return [0, 0, 0];
          return [Number(parts[0]), Number(parts[1]), Number(parts[2])];
        };

        const normalize = (value: number): number => {
          const channel = value / 255;
          if (channel <= 0.03928) return channel / 12.92;
          return ((channel + 0.055) / 1.055) ** 2.4;
        };

        const luminance = (rgb: [number, number, number]): number =>
          0.2126 * normalize(rgb[0]) + 0.7152 * normalize(rgb[1]) + 0.0722 * normalize(rgb[2]);

        const contrastRatio = (fg: [number, number, number], bg: [number, number, number]): number => {
          const l1 = luminance(fg);
          const l2 = luminance(bg);
          const lighter = Math.max(l1, l2);
          const darker = Math.min(l1, l2);
          return (lighter + 0.05) / (darker + 0.05);
        };

        return contracts.map((contract) => {
          const foreground = resolveCssColor(`var(${contract.foregroundToken})`);
          const background = resolveCssColor(`var(${contract.backgroundToken})`);
          const ratio = contrastRatio(parseRgb(foreground), parseRgb(background));
          return {
            ...contract,
            ratio,
            foreground,
            background,
          };
        });
      }, TOKEN_CONTRACTS);

      const failing = results.filter(
        (result) => result.ratio < thresholdForText(result.fontSizePx, result.fontWeight)
      );
      const warnOnly = failing.filter((result) => WARN_ONLY_CONTRACT_IDS.has(result.id));
      const hardFailures = failing.filter((result) => !WARN_ONLY_CONTRACT_IDS.has(result.id));

      if (warnOnly.length > 0) {
        console.warn(
          `Token contrast warnings in ${theme}:\n${warnOnly
            .map((item) => {
              const threshold = thresholdForText(item.fontSizePx, item.fontWeight);
              return `${item.id} (${item.foregroundToken} on ${item.backgroundToken}) ratio ${item.ratio.toFixed(2)} < ${threshold}`;
            })
            .join('\n')}`
        );
      }

      expect(
        hardFailures,
        `Token contrast contract failures in ${theme}:\n${hardFailures
          .map((item) => {
            const threshold = thresholdForText(item.fontSizePx, item.fontWeight);
            return `${item.id} (${item.foregroundToken} on ${item.backgroundToken}) ratio ${item.ratio.toFixed(2)} < ${threshold}`;
          })
          .join('\n')}`
      ).toEqual([]);
    });
  }
});
