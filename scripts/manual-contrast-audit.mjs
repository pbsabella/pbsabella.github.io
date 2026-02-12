/**
 * Manual contrast sweep (independent of axe suppression handling).
 *
 * What it does:
 * - Scans common text elements on each configured route/theme.
 * - Resolves effective background color by alpha-compositing ancestor backgrounds.
 * - Reports WCAG AA text contrast failures (4.5:1 normal, 3:1 large text).
 *
 * Usage:
 * 1) Start dev server on localhost:5173 (`npm run dev`).
 * 2) Run:
 *    node scripts/manual-contrast-audit.mjs
 * 3) Optional override:
 *    CONTRAST_BASE_URL=http://127.0.0.1:4173 node scripts/manual-contrast-audit.mjs
 *
 * One-liner:
 * npx start-server-and-test "npm run dev" \
 *   http://localhost:5173 \
 *   "node scripts/manual-contrast-audit.mjs"
 *
 * Output:
 * - Per route/theme: scanned count, fail count, unknown background count.
 * - `TOTAL_FAILS=<n>` summary at the end.
 */
import { chromium } from 'playwright';

const ROUTES = ['/#/', '/#/labs', '/#/labs/core', '/#/labs/design-system-build-notes'];
const THEMES = ['light', 'dark'];
const BASE_URL = process.env.CONTRAST_BASE_URL ?? 'http://localhost:5173';
const USE_COLOR = process.stdout.isTTY && !process.env.NO_COLOR;

const ANSI = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
};

const color = (text, code) => (USE_COLOR ? `${code}${text}${ANSI.reset}` : text);

const browser = await chromium.launch({ headless: true });
const summary = [];

for (const theme of THEMES) {
  for (const route of ROUTES) {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.addInitScript((themeValue) => {
      window.localStorage.setItem('theme', themeValue);
    }, theme);
    await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle' });

    const result = await page.evaluate(() => {
      const candidates = Array.from(document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,li,a,button,span,small,label,code,strong,em,th,td,caption'));

      const isVisible = (el) => {
        const style = getComputedStyle(el);
        if (style.display === 'none' || style.visibility === 'hidden' || Number(style.opacity) === 0) return false;
        const rect = el.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      };

      const parseRgb = (color) => {
        const parts = color?.match(/\d+(?:\.\d+)?/g);
        if (!parts || parts.length < 3) return null;
        return [Number(parts[0]), Number(parts[1]), Number(parts[2])];
      };

      const parseRgba = (color) => {
        const parts = color?.match(/\d+(?:\.\d+)?/g);
        if (!parts || parts.length < 3) return null;
        const [r, g, b] = [Number(parts[0]), Number(parts[1]), Number(parts[2])];
        const a = parts.length >= 4 ? Number(parts[3]) : 1;
        return [r, g, b, Number.isNaN(a) ? 1 : a];
      };

      const blend = (fg, bg) => {
        const [fr, fgC, fb, fa] = fg;
        const [br, bgC, bb, ba] = bg;
        const outA = fa + ba * (1 - fa);
        if (outA <= 0) return [0, 0, 0, 0];
        const outR = (fr * fa + br * ba * (1 - fa)) / outA;
        const outG = (fgC * fa + bgC * ba * (1 - fa)) / outA;
        const outB = (fb * fa + bb * ba * (1 - fa)) / outA;
        return [outR, outG, outB, outA];
      };

      const getEffectiveBg = (el) => {
        const chain = [];
        let cur = el;
        while (cur) {
          chain.push(cur);
          cur = cur.parentElement;
        }

        // Base canvas: white, then html/body backgrounds, then ancestors down to element.
        let composite = [255, 255, 255, 1];
        const htmlBg = parseRgba(getComputedStyle(document.documentElement).backgroundColor) ?? [0, 0, 0, 0];
        const bodyBg = parseRgba(getComputedStyle(document.body).backgroundColor) ?? [0, 0, 0, 0];
        composite = blend(htmlBg, composite);
        composite = blend(bodyBg, composite);

        const ancestry = chain.reverse();
        for (const node of ancestry) {
          const layer = parseRgba(getComputedStyle(node).backgroundColor) ?? [0, 0, 0, 0];
          composite = blend(layer, composite);
        }

        return [Math.round(composite[0]), Math.round(composite[1]), Math.round(composite[2])];
      };

      const normalize = (v) => {
        const c = v / 255;
        return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
      };

      const luminance = ([r, g, b]) => 0.2126 * normalize(r) + 0.7152 * normalize(g) + 0.0722 * normalize(b);

      const contrast = (fg, bg) => {
        const l1 = luminance(fg);
        const l2 = luminance(bg);
        const lighter = Math.max(l1, l2);
        const darker = Math.min(l1, l2);
        return (lighter + 0.05) / (darker + 0.05);
      };

      const thresholdFor = (fontSizePx, fontWeight) => {
        const large = fontSizePx >= 24 || (fontSizePx >= 18.66 && fontWeight >= 700);
        return large ? 3 : 4.5;
      };

      const findings = [];
      let unknownBackground = 0;

      for (const el of candidates) {
        if (!isVisible(el)) continue;
        const text = (el.textContent || '').trim().replace(/\s+/g, ' ');
        if (!text) continue;

        const cs = getComputedStyle(el);
        const fg = parseRgb(cs.color);
        const bg = getEffectiveBg(el);
        if (!fg || !bg) {
          unknownBackground += 1;
          continue;
        }

        const fontSize = Number.parseFloat(cs.fontSize || '16');
        const fontWeight = Number.parseInt(cs.fontWeight || '400', 10) || 400;
        const threshold = thresholdFor(fontSize, fontWeight);
        const r = contrast(fg, bg);

        if (r < threshold) {
          const tag = el.tagName.toLowerCase();
          const id = el.id ? `#${el.id}` : '';
          const classes = (el.className && typeof el.className === 'string')
            ? `.${el.className.trim().split(/\s+/).slice(0, 2).join('.')}`
            : '';
          findings.push({
            selector: `${tag}${id}${classes}`,
            text: text.slice(0, 90),
            ratio: Number(r.toFixed(2)),
            threshold,
            fg: cs.color,
            bg: `rgb(${bg[0]}, ${bg[1]}, ${bg[2]})`,
            bgSource: 'composited',
            fontSize,
            fontWeight,
          });
        }
      }

      findings.sort((a, b) => a.ratio - b.ratio);
      return { findings, unknownBackground, scanned: candidates.length };
    });

    summary.push({ theme, route, ...result, failCount: result.findings.length });
    await context.close();
  }
}

await browser.close();

const totalFails = summary.reduce((n, s) => n + s.failCount, 0);
const totalScanned = summary.reduce((n, s) => n + s.scanned, 0);
const totalUnknown = summary.reduce((n, s) => n + s.unknownBackground, 0);

console.log(color('==========================================', ANSI.dim));
console.log(color('MANUAL CONTRAST AUDIT', ANSI.bold));
console.log(`${color('Base URL:', ANSI.dim)} ${BASE_URL}`);
console.log(`${color('Routes/Themes:', ANSI.dim)} ${ROUTES.length}/${THEMES.length}`);
console.log(color('==========================================', ANSI.dim));

for (const theme of THEMES) {
  console.log(`\n${color(`Theme: ${theme.toUpperCase()}`, ANSI.cyan)}`);
  console.log(color('------------------------------------------', ANSI.dim));

  const themeRows = summary.filter((row) => row.theme === theme);
  for (const row of themeRows) {
    const status = row.failCount > 0 ? color('FAIL', ANSI.red) : color('PASS', ANSI.green);
    const failCount = row.failCount > 0 ? color(String(row.failCount), ANSI.red) : color('0', ANSI.green);
    const unknown = row.unknownBackground > 0 ? color(String(row.unknownBackground), ANSI.yellow) : color('0', ANSI.green);
    console.log(`[${status}] ${row.route}  scanned=${row.scanned}  fails=${failCount}  unknownBg=${unknown}`);

    row.findings.slice(0, 8).forEach((f, index) => {
      console.log(`  ${color(`${index + 1}.`, ANSI.dim)} ${f.selector}`);
      console.log(`     ${color('ratio', ANSI.dim)} ${color(String(f.ratio), ANSI.red)} < ${f.threshold} | "${f.text}"`);
    });
  }
}

console.log(`\n${color('==========================================', ANSI.dim)}`);
console.log(`${color('TOTAL_SCANNED', ANSI.dim)}=${totalScanned}`);
console.log(`${color('TOTAL_FAILS', totalFails > 0 ? ANSI.red : ANSI.green)}=${totalFails}`);
console.log(`${color('TOTAL_UNKNOWN_BG', totalUnknown > 0 ? ANSI.yellow : ANSI.green)}=${totalUnknown}`);
console.log(color('==========================================', ANSI.dim));
