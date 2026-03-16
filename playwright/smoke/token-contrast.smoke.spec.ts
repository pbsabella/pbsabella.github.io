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

const TOKEN_CONTRACTS: TokenContrastContract[] = [
  {
    id: 'body text on base',
    foregroundToken: '--sem-color-text-base',
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
    foregroundToken: '--sem-color-accent-strong',
    backgroundToken: '--sem-color-bg-base',
    fontSizePx: 12,
    fontWeight: 500,
  },
  {
    id: 'text on elevated surface',
    foregroundToken: '--sem-color-text-base',
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
    test(`semantic token contrast contracts pass in ${theme}`, async ({ page, browserName }) => {
      test.skip(browserName !== 'chromium', 'Token contrast contracts run in Chromium only.');

      await page.addInitScript((themeValue: Theme) => {
        window.localStorage.setItem('theme', themeValue);
      }, theme);

      await page.goto('/', { waitUntil: 'networkidle' });

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

        const oklchToRgb255 = (str: string): [number, number, number] | null => {
          const m = str.match(
            /oklch\(\s*([\d.]+)(%?)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+))?\s*\)/
          );
          if (!m) return null;
          let L = Number(m[1]);
          if (m[2] === '%') L = L / 100;
          const C = Number(m[3]);
          const H = (Number(m[4]) * Math.PI) / 180;
          const a = C * Math.cos(H);
          const b = C * Math.sin(H);
          const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
          const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
          const s_ = L - 0.0894841775 * a - 1.2914855480 * b;
          const ll = l_ * l_ * l_;
          const mm = m_ * m_ * m_;
          const ss = s_ * s_ * s_;
          const r = 4.0767416621 * ll - 3.3077115913 * mm + 0.2309699292 * ss;
          const g = -1.2684380046 * ll + 2.6097574011 * mm - 0.3413193965 * ss;
          const bC = -0.0041960863 * ll - 0.7034186147 * mm + 1.7076147010 * ss;
          const gamma = (c: number) =>
            c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
          return [
            Math.round(Math.min(1, Math.max(0, gamma(r))) * 255),
            Math.round(Math.min(1, Math.max(0, gamma(g))) * 255),
            Math.round(Math.min(1, Math.max(0, gamma(bC))) * 255),
          ];
        };

        const parseRgb = (color: string): [number, number, number] => {
          if (color.startsWith('oklch(')) return oklchToRgb255(color) ?? [0, 0, 0];
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

      expect(
        failing,
        `Token contrast contract failures in ${theme}:\n${failing
          .map((item) => {
            const threshold = thresholdForText(item.fontSizePx, item.fontWeight);
            return `${item.id} (${item.foregroundToken} on ${item.backgroundToken}) ratio ${item.ratio.toFixed(2)} < ${threshold}`;
          })
          .join('\n')}`
      ).toEqual([]);
    });
  }
});
